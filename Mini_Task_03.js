import readline from "node:readline/promises" 
const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
async function input(text){
    let value = await readLine.question(text)
    return value
}

console.log("------ SMADHAN 2.0 ------")

console.log("********** MARKS CALCULATOR **********")


console.log("MATHS")
let s1 = Number (await input("ENTER MARKS : "))
console.log("SCIENCE")
let s2 = Number (await input("ENTER MARKS : "))
console.log("ENGLISH")
let s3 = Number (await input("ENTER MARKS : "))
console.log("HINDI")
let s4 = Number (await input("ENTER MARKS : "))
console.log("SOCIAL SCIENCE")
let s5 = Number (await input("ENTER MARKS : "))


if (s1>33){
    console.log(" PASS IN MATHS")
}
else{
    console.log("FAILED IN MATHS")
}

if (s2>33){
    console.log(" PASS IN SCIENCE")
}
else{
    console.log(" FAILED IN SCIENCE")
}

if (s3>33){
    console.log(" PASS IN ENGLISH")
}
else{
    console.log(" FAILED IN ENGLISH")
}

if (s4>33){
    console.log(" PASS IN HINDI")
}
else{
    console.log(" FAILED IN HINDI")
}

if (s5>33){
    console.log(" PASS IN SOCIAL SCIENCE")
}
else{
    console.log(" FAILED IN SOCIAL SCIENCE")
}



let percentage = (((s1+s2+s3+s4+s5) /500)*100)
console.log("TOTAL PERCENTAGE : ", percentage, "%")



readLine.close()


//OUTPUT :
/*
------ SMADHAN 2.0 ------
********** MARKS CALCULATOR **********
MATHS
ENTER MARKS : 39
SCIENCE
ENTER MARKS : 23
ENGLISH
ENTER MARKS : 23
HINDI
ENTER MARKS : 59
SOCIAL SCIENCE
ENTER MARKS : 48
 PASS IN MATHS
 FAILED IN SCIENCE
 FAILED IN ENGLISH
 PASS IN HINDI
 PASS IN SOCIAL SCIENCE
TOTAL PERCENTAGE :  38.4 %
*/
