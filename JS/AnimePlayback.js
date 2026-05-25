
const square = document.querySelector('.square');
const  playButton = document.querySelector('#play');
const  pauseButton = document.querySelector('#pause');
const  reverseButton = document.querySelector('#reverse');


const keyframes = [
    { transform: "translateX(0) translateY(0)" , easing: "ease-in-out"},

    { 
        transform: "translateX(100px) rotate(45deg)", 
        offset: 0.2,
        easing: "ease-in-out",
        
    }, 

    { 
        transform: "translateX(100px) translateY(100px) scale(0.8)",
        easing: "ease-in-out",
    },

    { 
        transform: "translateX(0) translateY(100px)", 
        offset: 0.8,
        easing: "ease-in-out",
    },
    { 
        transform: "translateX(0) translateY(0)",
        easing: "ease-in-out",
     },
];

const options = {
    duration: 3000,
    iterations: Infinity,
};

const animations = square.animate(keyframes, options);

//Add event listeners to buttons 
playButton.addEventListener('click', ()=> {
    animations.play();
});

pauseButton.addEventListener('click', ()=> {
    animations.pause();
})

reverseButton.addEventListener('click', ()=> {
    animations.reverse();
})








