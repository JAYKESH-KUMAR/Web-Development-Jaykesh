//let obj={
  //  a:1,
   // b:"Harry"
//}

//console.log(obj)

//let animal={
  //  eats:true
//};

//let rabbit={
   // jumps:true
//};

//rabbit._proto_ = animal;// set rabbit.[[Prototype]]=animal
class Animal{
    constructor(name){
        this.name=name
        console.log("object is created...")
    }

    eats(){
        console.log("kha rha hai")

    }
    jumps(){
        console.log("kood rha hai")
    }
}


class lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object  is created and he is a lion...")
    }

    eats(){
        super.eats()
        console.log("kha rha hu roar")
    }

}
let a = new Animal("Bunny");
console.log(a)

let l=new lion("Shera")
console.log(1)