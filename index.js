// TYPES OF METHODS IN CLASSES

// 1. STANDARD METHODS
// 2 . STATIC METHODS 

class CommonMath{
    static triple(num){
           return num * num * num
    }
}
let numb =CommonMath.triple(3); // Sttic methods are not called on the instances but on the class themselves
// console.log(numb)

// GET KEY WORD AND SET KEYWORD

class Calc{
    constructor(length){
        this.length = length;
    }
    get area(){
        return this.length * this.length
    }
    set area(val){
        this.length = val;
    }
}
let cl = new Calc(3);
console.log(cl.length);
console.log(cl.area);
cl.area = 64;
console.log(cl.length)
console.log(cl.area);

class Square{
    #sideLength
    constructor(sideLength){
        this.#sideLength = sideLength;
    }
    get are(){
        return this.#sideLength * this.#sideLength
    }
    set are(value){
        this.#sideLength = value
    }
}

let calc = new Square(4)
console.log(calc.are)
calc.are = 7
console.log(calc.are)


class Student{
    #firstName
    #lastName
    constructor(firstName, lastName) {
        this.#firstName = this.sanitize(firstName)
        this.#lastName = this.sanitize(lastName)
    }
    get firstName() { 
        return this.capitalize(this.#firstName) }
        get lastName() { 
            return this.capitalize(this.#lastName) }

     
    capitalize(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    sanitize(string) {
        // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
        return string.replace(/[^A-Za-z0-9-']+/g, "");
      }
}
let stud = new Student("tabz/###@", "shee")
console.log(stud.firstName,stud.lastName)