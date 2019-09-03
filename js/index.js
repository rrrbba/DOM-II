// Your code goes here

//Event 1
const down = document.querySelector('body');
down.addEventListener('keydown', 
function(e) {
    click.textContent += `${e.code}`;
});
//will mess up the first nav item


//Event 2
const mouse = document.querySelector('.intro img');
mouse.addEventListener('mouseover',
 function(e){
     mouse.style.transform = 'scale(2)';
 });


//Event 3
 mouse.addEventListener('mouseleave',
 function(e){
     mouse.style.transform = 'scale(1)';
 });
 //returns the picture back to it's normal size after the mouse leaves the image

 //Event 4
 const click = document.querySelector('.nav-link')
 click.addEventListener('click', 
 function(e){
     click.style.color = 'red';
 });

 //Event 5
const double = document.querySelector('.text-content h2')
double.addEventListener('dblclick',
function(e){
    double.style.backgroundColor = 'pink';
});

//Event 6
window.addEventListener('resize', 
function(e){
    const changing = 
    document.querySelector('.intro h2');
        changing.textContent = "WOOOOAAAHHHHHHH"
})

//Event 7
window.addEventListener('beforeprint',
function(e){
    console.log('BEFORE PRINT');
}); 

//Event 8 
window.addEventListener('afterprint',
function(e){
    down.style.backgroundColor = 'lightpink'
});
//comment out Event 1 & 9 before attempting this

//Event 9
const up = document.querySelector('body')
up.addEventListener('keyup', 
function(e){
    click.textContent += `${e.code}`;
});

//Event 10
const noRight = document.querySelector('p')
noRight.addEventListener('contextmenu',
function(e){
    e.preventDefault();
});