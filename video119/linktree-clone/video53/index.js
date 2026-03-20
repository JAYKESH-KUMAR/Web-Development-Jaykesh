/* create a faulty calculator using javascript */
let random = Math.random()
console.log(random)

let a = prompt("Enter first number ")
let b= prompt("Enter operation ")
let c= prompt("Enter second number ")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",

}
//c = obj[c]
if(random>0.1){
    // perform coreect calculation 
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}
else{
    // perform wrong calculation
    c= obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`) }`)
}

