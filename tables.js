// const profile = {
//     userName : "vinith",
//     followers: 100,
//     following: 200,
//     post : 100,
//     bio : "hello im vinith",
//     isFollow : true,
// };
//  let user_register = true ;
//  if(user_register== false){
//     console.log("please login");
//  }
//  else {
//     console.log("please register")
//  }
//  let a = 5;  

// let b = "5";  


// console.log(a === b ? "Equal" : "Not Equal");
// let val = 0;

// if (val) {

//     console.log("Truthy");

// } else {

//     console.log("Falsy");

// }
// let balance = 100;
// while(balance > 0){
//     console.log('your bank balance:$'+ balance);
//     let deduction_amount = prompt('enter the amount you wanna take')
//     balance -= deduction_amount;
// }
// console.log("balance is zero");
// let i = 0;
// do {
//   if (i === 2) {
//     continue;
//   }
//   console.log(i);
//   i++;
// } while (i < 5);
// let n = 5;
// while(i>0 | i<5)
//   {
//     n -= i;
//   console.log(n);}
// let num = prompt("enter a number:");
// if(num % 5 === 0){
//   console.log( num,"the number is multiple of 5");  
// }else {
//   console.log(num, "is not the multiple of 5")
// let input = prompt("enter your full name"); 
// console.log(input);
// let size = input.length; 
// console.log(size);
// let initial = '@';
// console.log(initial);
// let userName = initial+input+size;
// console.log("username:",userName);
// let items = [250,645,300,900,50];
// let i=0;
// for(let item of items){
//     let offer = item/10;
//     items[i] = items[i]-offer;
//     i++;
    
// }
// console.log(items);
// let h2 = document.querySelector("h2")
// console.dir(h2.innerText.concat(" from apna college students"))
// let x = document.querySelectorAll(".box");
// x[0].innerText = "new value for box1"
// let btn = document.createElement("button");
// btn.innerText = "click me !!!";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";
// document.querySelector("body").prepend(btn);
// let  para = document.querySelector("p");
// para.getAttribute("class")
// para.setAttribute("class","newClass");
// para.classList.add("newClass");

function table(){
    let num = document.getElementById("number").value 
    let tag = document.getElementsByTagName("div")[1]
    for (i = 1;i<=10;i++){
          let element = document.createElement("p")
          tag.append(element)
          let text = document.createTextNode(num + " x " + i + " = " + num*i)
          element.append(text)
    }
}
function resetTable(){
    document.getElementById("number").value = "";
    document.getElementsByTagName("div")[1].innerHTML = "";
}