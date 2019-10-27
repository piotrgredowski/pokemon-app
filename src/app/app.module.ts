import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinderComponent } from './components/finder/finder.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { PokemonViewComponent } from './views/pokemon-view/pokemon-view.component';
import { PokemonItemStatsComponent } from './components/pokemon-item-stats/pokemon-item-stats.component';
import { ReplaceHyphensWithSpacesPipe } from './pipes/replace-hyphens-with-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FinderComponent,
    HomeViewComponent,
    PokemonViewComponent,
    PokemonItemStatsComponent,
    ReplaceHyphensWithSpacesPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
