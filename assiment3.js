// Write a JavaScript program to find the sum of all prime numbers up to a given
// limit. Use a while loop to iterate through each number and check for primality

// a = 1
// // b = 10
// number = 11
// count = 0
// while(a<=number){
//   if(number%a==0){
//     count++
// }
//   a++
// }
// if(count==2){
//     console.log("prime number",number)
// }
// else{
//     console.log("not prime",number)
// }


a = 1

number = 11
count = 0
while(a<=number){
  if(number%a==0){
    count++

}
  a++
}
if(count==2){
    console.log("prime number",number)
}
else{
    console.log("not prime",number)
}