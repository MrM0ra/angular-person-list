import { Component } from '@angular/core';
import { Person } from './Person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'Person List'
    persons: Person[] = [new Person('Victor', 'Mora'), new Person('Shirley', 'Scarpetta')]

    addPerson(person: Person){
        this.persons.push(person)
    }
}
