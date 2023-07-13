const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true
  });

  const page = await browser.newPage();

  const references = await getClubsReferences(page);
  const honoursAllowed = [
    'PREMIER LEAGUE',
    'FA CUP',
    'EFL CUP',
    'CHAMPIONS LEAGUE',
    'EUROPA LEAGUE',
    'CONFERENCE LEAGUE',
    'COMMUNITY SHIELD',
  ];

  for (let reference of references) {
    const trophies = await getClubTrophies(page, reference.href);
    reference.trophies = trophies.filter(({ name }) => honoursAllowed.includes(name.toUpperCase()));
    delete reference.href;
  }

  fs.writeFile(
    path.join(__dirname, 'src/assets/trophies.json'),
    JSON.stringify(references),
    (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log('JSON GENERATED!');
      }
    });

  await browser.close();
})();

const getClubsReferences = async (page) => {
  await page.goto('https://www.besoccer.com/competition/teams/premier_league');

  const clubsReference = [];

  let element = await page.waitForSelector('#mod_d_teams');
  const list = await element.$('div > .flex-item-list');
  const anchors = await list.$$('div > .item-box a');
  for (let anchor of anchors) {
    const property = await anchor.getProperty('href');
    const href = await property.jsonValue();
    const nameEl = await anchor.$('.name');
    const name = await nameEl.evaluate(el => el.innerText);
    clubsReference.push({ href, name });
  }

  return clubsReference;
};

const getClubTrophies = async (page, url) => {
  const hostPath = url.slice(0, 24);
  const [route, club] = url.slice(25).split('/');
  const path = `${ hostPath }/${ route }/honours/${ club }`;

  await page.goto(path);

  await page.waitForSelector('.medals');

  const tableElements = await page.$$('.medals .panel .table');

  const trophies = [];
  for (let element of tableElements) {
    const [qtyEl, nameEl] = await element.$$('tbody tr td');
    const qty = await qtyEl.$eval('b', b => Number.parseInt(b.textContent));
    const name = await nameEl.$eval('b', b => b.textContent);
    trophies.push({ qty, name });
  }

  return trophies;
};
