import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../LoggingServie.service';
import { Person } from '../Person.model';
import { PersonService } from '../PersonService.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {

    //Eliminado para usar el PersonServicie
    //@Output() newPerson = new EventEmitter<Person>()
    
    inputName: string=""
    inputLastname: string=""
    
    constructor(private loggingService:LoggingService, private personService:PersonService){
        this.personService.greet.subscribe(
            (index:number) => alert("Index: "+index)
        )
    }   

    addPerson(){
        let person1 = new Person(this.inputName, this.inputLastname)
        this.personService.addPerson(person1)
        this.inputName=""
        this.inputLastname=""
    }

}
