"use strict"

let iteration = 1

do {
  console.log(iteration)
  iteration ++
} while (iteration < 10)

for (let i = 0; i <= 10; i++) {
    console.log(i)
  }
  

  for (var i=0; i<10; i++) {
    console.log(i)
  }*/

const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23]

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index]
  console.log(element)
}

//factorial

let input = 4
let total = 1;

for (i = 0; i < input; i++){
    total = total * (input - i);
    
}
console.log(total)

let input = 8
let total = 1

for (let i=0; i<input; i++) {
  total = total * (input-i)
}
console.log(total)

//reverse name

let name = 'mevin'
let result = ''

for (let i = name.length-1; i>=0; i--) {
  result = result + name[i]
}
console.log(result)

