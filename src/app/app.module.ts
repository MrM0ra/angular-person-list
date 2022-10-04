import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { FormComponent } from './form/form.component';
import { LoggingService } from './LoggingServie.service';
import { PersonService } from './PersonService.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    FormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [LoggingService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
