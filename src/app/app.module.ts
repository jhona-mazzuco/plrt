import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PointsSortPipe } from './pipes/points-sort.pipe';
import { NgOptimizedImage } from '@angular/common';
import { TrophyValueComponent } from './components/trophy-value/trophy-value.component';
import { RankingComponent } from './components/ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    TrophyValueComponent,
    PointsSortPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
