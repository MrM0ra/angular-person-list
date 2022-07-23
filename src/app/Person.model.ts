export class Person {

    //Notacion simplificada
    //constructor(public name:string, public lastname:string){}

    private name: string = ''
    private lastname: string = ''

    constructor(name:string, lastname:string){
        this.name=name
        this.lastname=lastname
    }

    getName(){
        return this.name
    }

    getLastname(){
        return this.lastname
    }

}