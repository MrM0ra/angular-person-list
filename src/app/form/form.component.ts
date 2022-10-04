import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../LoggingServie.service';
import { Person } from '../Person.model';
import { PersonService } from '../PersonService.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [LoggingService, PersonService]
})
export class FormComponent {

    //Eliminado para usar el PersonServicie
    //@Output() newPerson = new EventEmitter<Person>()
    
    inputName: string=""
    inputLastname: string=""
    
    constructor(private loggingService:LoggingService, private personService:PersonService){ }   

    addPerson(){
        let person1 = new Person(this.inputName, this.inputLastname)
        //this.loggingService.logToConsole("Person: "+person1)
        //Eliminado para usar el PersonServicie
        //this.newPerson.emit(person1)
        this.personService.addPerson(person1)
        this.inputName=""
        this.inputLastname=""
    }

}
