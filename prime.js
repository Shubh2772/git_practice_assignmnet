//to find if the number is prime or not.

let num = 4;
let i = 1;
let count = 0;
while (i <= num) {

  if(num%i==0){
    count++
    
  }  
i++
   }
if (count == 2) {
  console.log("Yes");
}
else {
  console.log("No");
}