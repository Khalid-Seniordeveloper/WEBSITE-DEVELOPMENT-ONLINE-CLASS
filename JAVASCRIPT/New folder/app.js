let head= document.querySelector('h1')
let img = document.querySelector('img')
function tossOne(){
    const randomNum = Math.ceil(Math.random()*2)
    console.log(randomNum);

    if(randomNum === 1){
        console.log("YOU WIN");
        head.innerHTML = `
        <h1>"YOU WIN"</h1>
        <img src="./images/coin1.jpeg" alt="">
        
        `
    } else {
        console.log("YOU LOSE");

        head.innerHTML = `
        <h1>"YOU LOSE"</h1>
        <img src="./images/coin-2.jpeg" alt="">
        `
    }
    
}

function toss(){
    const randomNum = Math.ceil(Math.random()*2)
    console.log(randomNum);

    if(randomNum === 2){
        console.log("YOU WIN");
           head.innerHTML = `
        <h1>"YOU WIN"</h1>
        
        <img src="./images/coin1.jpeg" alt="">
        
        `
    } else {
        console.log("YOU LOSE");
        head.innerHTML = `
        <h1>"YOU LOSE"</h1>
        <img src="./images/coin-2.jpeg" alt="">
        
        `
    }
}







// function tossOne(){

// let randomNum = Math.ceil(marandom()*2;

// console.log(randomNum);



// }

// setInterval(function(){
//     console.log("hello world");
// } , 500)