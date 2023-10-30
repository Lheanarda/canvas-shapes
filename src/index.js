import { ctx } from "./canvas";



let x = 10
let y = 10
function animate(){
    requestAnimationFrame(animate)

    ctx.fillStyle = "black";
    ctx.fillRect(0,0, window.innerWidth,window.innerHeight);

    ctx.fillStyle = 'rgba(0, 255, 0, 0.2)'
    ctx.fillRect(x, y, 100, 100);
    x++
    y++
}

animate()

