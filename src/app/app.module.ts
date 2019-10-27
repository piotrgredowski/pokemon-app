import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinderComponent } from './components/finder/finder.component';
import { PokemonItemStatsComponent } from './components/pokemon-item-stats/pokemon-item-stats.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { ReplaceHyphensWithSpacesPipe } from './pipes/replace-hyphens-with-spaces.pipe';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { PokemonViewComponent } from './views/pokemon-view/pokemon-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FinderComponent,
    HomeViewComponent,
    PokemonViewComponent,
    PokemonItemStatsComponent,
    ReplaceHyphensWithSpacesPipe,
    PokemonListComponent,
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
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
