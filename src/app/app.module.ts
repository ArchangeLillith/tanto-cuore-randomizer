import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { BoxWithCheckboxComponent } from './components/box-with-checkbox/box-with-checkbox.component';
import { BoxWithRadioButtonsComponent } from './components/box-with-radio-buttons/box-with-radio-buttons.component';
import { BoxWithDropdownComponent } from './components/box-with-dropdown/box-with-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    BoxWithCheckboxComponent,
    BoxWithRadioButtonsComponent,
    BoxWithDropdownComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
