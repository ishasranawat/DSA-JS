//Print all odd numbers from 1 to 15
for(let i=1; i<16; i=i+2){
  console.log(i);
}

//Print even  numbers from 2 to 10
for( let i=0; i<=10; i=i+2){
  console.log(i);
}

//Table of 5

//approach1
for(let i=5,j=1; j<=10; j++){
  console.log(`${i}*${j}=${i}`)
}
//2
for(let i=5; i<=50; i+=5){
  console.log(i);
}
//3
let n= prompt("Enter your number: ");
n=parseInt(n);
for(i=n; i<=n*10; i=i+n){
  console.log(i);
}

//while
let myArr= ["one", "two", "three", "four"]
let i=0;
while(i<myArr.length){
  console.log(`The value is ${myArr[i]}`);
  i++;
}

//Print numbers from 1 to N using a loop.

for(let i=1; i<=10; i++){
  console.log(i);
}

//Print numbers from N to 1 using a loop.
for(let i=10; i>=1; i--){
  console.log(i);
}

//Find the sum of digits of a given number.
let sum=0;
let num=123;
num= String(num)
for (let i=0; i<num.length; i++){
  sum= sum+  Number(num[i]);
}
console.log(sum);


//Count the number of digits in a number.
let count=0;
let digit=12345678;
digit= String(digit)
for(let i=0; i<digit.length; i++){
  count++;
}
console.log(count);


//Find the sum of all even digits in a number
let sum=0;
let num=123456789;
num=String(num);
for(let i=0; i<num.length; i++){
  let digit= Number(num[i]);
    if(digit%2==0){
      sum+=digit;
    }
}
console.log(sum);


// Find the sum of all odd digits in a number.
let sum=0;
let num= 123456789;
num=String(num);
for(let i=0; i<num.length; i++){
  let digit= Number(num[i]);
  if( digit%2!=0){
    sum+= digit;
  }
}
console.log(sum);






