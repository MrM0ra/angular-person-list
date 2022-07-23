import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from '../Person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

    @Output() newPerson = new EventEmitter<Person>()

    inputName: string=""
    inputLastname: string=""

    addPerson(){
        let person1 = new Person(this.inputName, this.inputLastname)
        this.newPerson.emit(person1)
        this.inputName=""
        this.inputLastname=""
    }

}
