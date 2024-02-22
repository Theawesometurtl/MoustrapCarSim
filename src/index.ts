
import '@/styles/index.scss';
import { start } from './ts/setUp';
export {canvas, ctx}


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth/1.1;
canvas.height = window.innerHeight/1.3;

start();


