import { Injectable } from "@angular/core";
import { LoggingService } from "./LoggingServie.service";
import { Person } from "./Person.model";

@Injectable()
export class PersonService {

    persons: Person[] = [
        new Person('Victor', 'Mora'), 
        new Person('Shirley', 'Scarpetta')
    ]

    constructor(private loggingService: LoggingService){}

    addPerson(person: Person){
        this.loggingService.logToConsole("Agregamos persona: "+person.getName)
        this.persons.push(person)
    }

}