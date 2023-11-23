import { canvas, ctx } from "./canvas"

/** 
 * math
 * half circle : 180 deg : Math.PI  (3.14 rad)
 * full circle : 360 deg : Math.PI*2  (6.28 rad)
*/
let hue= 0
function drawShape(x,y,radius, inset, n){
    
    ctx.beginPath()
    ctx.save()
    ctx.translate(x,y)
    ctx.moveTo(0, 0 - radius) //start position

    for(let i=0; i<n; i++){
        ctx.rotate(Math.PI / n)
        ctx.lineTo(0, 0 - (radius * inset)) //inner
        ctx.rotate(Math.PI / n)
        ctx.lineTo(0, 0 - radius) //out
    }
    

    ctx.restore()
    ctx.closePath()
    ctx.stroke()
    ctx.fill()
}


// ctx.globalCompositeOperation = 'difference'

ctx.strokeStyle = 'black'
ctx.lineWidth  = 1
ctx.shadowOffsetX = 10
ctx.shadowOffsetY = 10
ctx.shadowBlur = 10
ctx.shadowColor = 'black'


const radius = 50
const inset = 0.4
const n = 2

let drawing = false
let angle = 0


drawShape(80, 80, radius * 0.95, 1 ,5)
drawShape(120, 120, radius, inset ,n)

window.addEventListener('mousemove',function(e){
    if(drawing){
        ctx.save()
        ctx.translate(e.x, e.y)
        ctx.rotate(angle)
        ctx.fillStyle = `white`
        ctx.strokeStyle = 'black'
        drawShape(0, 0, radius , 1 ,3)   
        
        ctx.rotate(-angle * 3)  
        ctx.fillStyle = `black`
        ctx.strokeStyle = 'white'
        drawShape(radius/2 + 15, radius/2 + 15, radius /2, 0.5 ,3)

        ctx.rotate(-angle /2)  
        ctx.fillStyle = `red`
        ctx.strokeStyle = 'black'
        drawShape(radius/1.5 + 10, radius/1.5 + 10, radius / 5, 0.5 ,3)


        angle += 0.05
        ctx.restore()
    }
})

window.addEventListener('mousedown',e=>{
    drawing = true
})

window.addEventListener('mouseup',e=>{
    drawing = false
})