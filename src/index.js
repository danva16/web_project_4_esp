import "./styles/index.css";
import stepsSrc from "./images/steps.png";

console.log("Hello, World!");
const numbers = [2, 3, 5];

// Función arrow. ¿Cómo se las arreglará Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10

const stepsImage = document.getElementById("image-steps");
stepsImage.src = stepsSrc;