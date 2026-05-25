
const square = document.querySelector('.square');

const keyframes = [
    { transform: "translateX(0) translateY(0)" },
    { transform: "translateX(100px)",  offset: 0.4}, //border: "solid 8px black",
    { transform: "translateX(100px) translateY(100px)",offset: 0.5  },
    { transform: "translateX(0) translateY(100px)", offset: 0.9 },
    { transform: "translateX(0) translateY(0)" },
];

const options = {
    duration: 2000,
    iterations: Infinity,
    //can ease here 
};

square.animate(keyframes, options);




