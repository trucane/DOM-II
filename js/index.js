// Your code goes here


const headImg = document.querySelector('.home header > img ');

const anchor = document.querySelectorAll('.container nav a');
const navigation = document.querySelector('.main-navigation');


 


const nameIn = document.querySelector('#name');
const body = document.querySelector('#bodys');
const mainNav = document.querySelectorAll('.main-navigation nav > a');
let positioning = 0;

let destin_h4 = document.querySelectorAll('.content-pick .destination h4');

let destin_p = document.querySelectorAll('.content-pick .destination p');

let destin_btns = document.querySelectorAll('.content-pick .destination .btn');
destin_btns.forEach(x => x.textContent = "Purchase Me");




 




//////////////////////////
//Load Event

bodys.addEventListener('load', (e)=>{
    e.target.style.cssText += 'background-color = cyan';
});

//////////////////////////
//Mouse Over Event


destin_btns[1].textContent = "Mouse Over"

destin_btns[1].addEventListener('mouseover', (event)=>{
    destin_h4[1].textContent = 'You want me!';
    destin_h4[1].style.color = 'blue';
});

//////////////////////////
//Double Click Event

destin_btns[0].textContent = "DBL Click";

destin_btns[0].addEventListener('dblclick', (event)=>{
    event.target.textContent = "Purchased";
    event.target.style.cssText += 'background:red; color:black;'
});

//////////////////////////
//Mouse Down Event

headImg.addEventListener('mousedown', function(){
    this.style.cssText += `border:3px solid #17A2B8;`
    })

//////////////////////////
//Mouse Out Event

headImg.addEventListener('mouseout', function(){
    this.style.cssText += `border:none;  width:100%; height:100%`;
})

//////////////////////////
//Wheel Event

destin_btns[2].textContent = "Mouse Wheel"

destin_btns[2].addEventListener('wheel', (event)=>{
    
     destin_p[2].textContent = 'You rolled over me';
     destin_p[2].style.color = 'orange';
});


// a.addEventListener('mouseup', (event) =>{

// });

//////////////////////////
//Focus Event

nameIn.addEventListener('focus', function(e){
    e.target.style.color = 'blue';
})

// a.addEventListener('dragend', (event) =>{

// });

// a.addEventListener('dragenter', (event) =>{

// });

//////////////////////////
//Key Down Event

nameIn.addEventListener('keydown', function(e){

    console.log(this.value)
    document.querySelector('#personalize').textContent = `${this.value}'s`;
    document.querySelector('#personalize').style.color = 'blue';
});

// a.addEventListener('keyup', (event) =>{

// });



//////////////////////////
//Scroll Event

window.addEventListener('scroll', (e) =>{
    positioning = window.scrollY;

    if(positioning > 200){
        anchor[0].textContent = 'My ';
        anchor[1].textContent = 'Scroll';
        anchor[2].textContent = 'Position';
        anchor[3].textContent = Math.floor(positioning);
        navigation.style.backgroundColor = 'blue';
        anchor.forEach( x => x.style.color = 'white')
    }else{
        anchor[0].textContent = 'Home';
        anchor[1].textContent = 'About Us';
        anchor[2].textContent = 'Blog';
        anchor[3].textContent = 'Contact';
        navigation.style.backgroundColor = 'white';
        anchor.forEach( x => x.style.color = 'black')
    }
});








const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');



function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
  }


  
  
  
  //Nesting
  let mainDiv = document.querySelector(".inverse-content");
  mainDiv.addEventListener('click', e => {
     e.currentTarget.style.border = "solid yellow 5px";
  })
  
  
  let subDiv = document.querySelector(".inverse-content .text-content");
  subDiv.addEventListener('click', e => {
     e.stopPropagation();
     e.currentTarget.style.border = "solid orange 5px";
  })



  // Prevent Default
  anchor.forEach( x => x.addEventListener('click', function(e){
    e.preventDefault();
}))

