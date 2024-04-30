console.log("Hello World")


function addition(a, b) {
    return a + b;
}
let c = addition(10, 20)
console.log(c)

console.error("Unidentified object")

console.warn("indentation error")

function multiplication(a, b) {
    return a * b
}
let d = multiplication(10, 6)
console.log(d)

let a = "Hello World"
let b = 10
let e = a + b
console.log(a)
console.log(b)
console.log(e)


let x;
for ( x=1; x<=10; x++) {
    console.log("value of x is" + x)
}


function findmax() {
    let max = []
    for (let i = 1; i < Array.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

let numbers = [10, 5, 10, 15];
console.log(findmax(numbers))

