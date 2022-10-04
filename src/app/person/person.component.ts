import { Component, Input } from '@angular/core';
import { Person } from '../Person.model';
import { PersonService } from '../PersonService.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

    @Input() person: Person
    @Input() index: number

    constructor(private personservice: PersonService){}

    ngOnInit(){

    }

    emmitGreetings(){
        this.personservice.greet.emit(this.index);
    }

}
