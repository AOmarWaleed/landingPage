//[1]add type moduel , [2]delet keyframe from css  and [3]uncommet to line 24
// typing will worke fine using (typed.js)

// import Typed from '../node_modules/typed.js/src/typed.js';

// let homeTypingO = {
//   strings: ['I am devoleper ', 'I am freelancer'],
//   typeSpeed: 60,
//   loop: true,
//   loopCount: Infinity,
//   showCursor: false,
// };

// let homeTyping = new Typed('#typing', homeTypingO);

// let aboutTypingO = {
//   strings: ['Devoleper ', 'Freelancer' , 'Photographer'],
//   typeSpeed: 60,
//   loop: true,
//   loopCount: Infinity,
//   showCursor: false,
// };

// let aboutTyping = new Typed('#aboutTyping', aboutTypingO);

// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
const aboutSection = document.getElementById('about');
const navBar = document.getElementsByTagName('nav');
window.addEventListener('scroll' , ()=>{
    if(window.scrollY >= aboutSection.offsetHeight - 300) {
        navBar[0].style.backgroundColor = 'white'
        navBar[0].style.setProperty('padding', '30px' , 'important')    
    }else {
        navBar[0].style.backgroundColor = '#787374c7'
        navBar[0].style.setProperty('padding', '8px' , 'important')
    }

})
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
const sittingIcon = document.getElementById('sittingIcon');
const colorChoice = document.getElementById('colorChoice');
const box = document.getElementById('box');
//Hide it as soon as the page loaded
window.onload = function () {
    box.style.right = `-${colorChoice.clientWidth}px`
}
// toggle it (hide , show)
sittingIcon.addEventListener('click' , ()=>{
    if(box.style.right == '0px') {
        box.style.right = `-${colorChoice.clientWidth}px`       
    }else {
        box.style.right = `0px`
    }
    
})


// ------------------------------------------
// ------------------------------------------ add active to link when click
// ------------------------------------------ 0 - 5
const links = [...document.querySelectorAll('.nav-link')].filter((e) => e.href);

links.forEach((link)=>{
    link.addEventListener('click' , function(e){

        for (let i = 0; i < links.length; i++) {
          links[i].classList.remove('active')
            
        }

        (e.target).classList.add('active')
    })
})
// links.forEach(())

//---------------------------------------
//---------------------------------------
//---------------------------------------
//---------------------------------------
const  colorChoiceclickable = document.querySelectorAll('#colorChoice span');
const  root = document.querySelector(':root');
//to get all style
// getComputedStyle(root);
// then .. >>> .getPropertyValue() 

[...colorChoiceclickable].forEach((el)=>{
    el.addEventListener('click',(e)=>{
        root.style.setProperty('--main-color', e.target.dataset.color);
    })
})

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
//-------------------------------------------
