const fs= require("fs")

console.log(fs)

console.log("starting")
fs.writeFileSync("jaykesh.txt", "Jaykesh is a good boy",()=>{
    console.log
})
comsole.log("ending")