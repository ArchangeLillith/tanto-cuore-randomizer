import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { BoxWithCheckboxComponent } from './components/box-with-checkbox/box-with-checkbox.component';
import { BoxWithRadioButtonsComponent } from './components/box-with-radio-buttons/box-with-radio-buttons.component';
import { BoxWithDropdownComponent } from './components/box-with-dropdown/box-with-dropdown.component';
import { BoxWithMutexCheckboxesComponent } from './components/box-with-mutex-checkboxes/box-with-mutex-checkboxes.component';
import { CardForTownComponent } from './components/card-for-town/card-for-town.component';
import { CardGridComponent } from './components/card-grid/card-grid.component';
import { SavedTownGridComponent } from './components/saved-town-grid/saved-town-grid.component';
import { TownComponent } from './components/town/town.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    BoxWithCheckboxComponent,
    BoxWithRadioButtonsComponent,
    BoxWithDropdownComponent,
    BoxWithMutexCheckboxesComponent,
    CardForTownComponent,
    CardGridComponent,
    SavedTownGridComponent,
    TownComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
