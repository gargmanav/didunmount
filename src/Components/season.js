// function titleCase(str) {
//     const first = str.charAt(0).toUpperCase()
//     const second = str.slice(1,str.length)
//     return first.concat(second)
//   }
  
//   console.log(titleCase("I'm a little tea pot"));


// const arr = [0,1,2,3,4,5,6]

// const rotate = ()=>{
// for(let i = 0;i<5;i++){
//     const first = arr.shift()
//      arr.push(first)

// }
// return arr.length
// }
// console.log(rotate());


// const str = "this is javascript code"
// const wordrev = (str)=>{
    
//     let first = str.split(" ")
//     let ans = ""
//     for(let i of first){
//         let rev = i.split("").reverse()
//          ans += rev.trim(",")
//     }
//     return ans
// }
// console.log(wordrev(str));


// const arr = [2,7,11,4,-2]

// const sumitself=(arr)=>{
//     let sum = 0
//     let res = []
//     for(let i = 0;i<arr.length;i++){
//         for(let j = 0;j<arr.length;j++){
//             if(arr[i] != arr[j]){
//                 sum += arr[j]
//             }
            
            
//         }
//         res.push(sum)
//         sum = 0
//     }
//     return res
// }
// console.log(sumitself(arr));

// const str = "kaha hai bhai"
// const reverese = (str)=>{
//  let first = str.split("")
//  console.log(first);
//  let second = first.reverse()
//  console.log(second);
//  let third = second.join("")
//  console.log(third);

// }
// reverese(str)

// const str = "hello bhai kaha reheto ho aaj kal aata hai"

// const check = (str)=>{
//     const result = ""
//     const count = 0
//     for(let i = 0;i<str.length-1;i++){
//         for(let j=0;j<str.length-1;j++){
//             if()
//         }
//     }
   
// }

// function sentensify(str) {
//     // Only change code below this line
//   const zero = str.replaceAll("-"," ");
//   const first = zero.split(" ")
//   console.log(first)
//   const second = first.join(" ")
//     // Only change code above this line
//     return second
//   }
  
//   console.log(sentensify("May-the-force-be-with-you"))


// let js = 'JavaScript is the best'
// const charsInJavaScript = js.split('')
// console.log(charsInJavaScript);

// const data1 = {a:1,b:2,c:3,e:56}
// const data2 = {a:5,b:1,c:3,e:56}

// const himoo = (data1,data2)=>{
//  let result = {}
//  for(let i in data1){
//    if(data1[i] == data2[i]){
//     result[i] = data2[i]
//    } 
//  }
//  return result
// }
// console.log(himoo(data1,data2));

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
// console.log(names.join('')) //AsabenehMathiasEliasBrook
// console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
// console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
// console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.slice()) // -> it copies all  item
// console.log(numbers.splice(0,3)) // -> it copies all  item

// const numbers = [1, 2, 3, 4, 5, 6]
// // console.log(numbers.splice(3,3,51,54,25))
    
//     const first = numbers.shift()
//     const second = numbers.push(first)

//     console.log(second);
    

// const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
// const countriesWithLand = countries.filter((country) =>
//   country.includes('land')
// )
// console.log(countriesWithLand) // ["Finland", "Iceland"]

// setTimeout(() => {
//     console.log("hello hacking start....");
// }, 1000);
// setTimeout(() => {
//     console.log("starting phase");
// }, 2000);
// try{
//     setTimeout(() => {
//         try{
//             console.log(rahul); 
//         }  
//     catch(err){
//         console.log("error coming");
//     } }, 1000);
    
// }
// catch(err){
//     console.log("error coming of undefind");
// }
// setTimeout(() => {
//     console.log("ended");
// }, 3000);


const check = (a)=>{
  return parseInt(a)
 }
 console.log(check("235"));
