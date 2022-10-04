import { Injectable, EventEmitter} from "@angular/core";
import { LoggingService } from "./LoggingServie.service";
import { Person } from "./Person.model";

@Injectable()
export class PersonService {

    persons: Person[] = [
        new Person('Victor', 'Mora'), 
        new Person('Shirley', 'Scarpetta')
    ]
    
    greet = new EventEmitter<number>();

    constructor(private loggingService: LoggingService){}

    addPerson(person: Person){
        this.loggingService.logToConsole("Agregamos persona: "+person.getLastname())
        this.persons.push(person)
    }

}