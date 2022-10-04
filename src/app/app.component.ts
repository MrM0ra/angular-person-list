import { Component, OnInit } from '@angular/core';
import { Person } from './Person.model';
import { PersonService } from './PersonService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonService]
})
export class AppComponent implements OnInit {

    title = 'Person List'
    persons: Person[] = []


    constructor(private personService:PersonService){ }
    
    ngOnInit(): void {
        this.persons = this.personService.persons
    }

}
