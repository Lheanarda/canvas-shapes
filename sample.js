function drawPolygon(radius){
    ctx.beginPath()
    ctx.save()
    ctx.translate(canvas.width/2, canvas.height/2)

    ctx.moveTo(0,0)
    ctx.lineTo(0,0 - radius)
    
    ctx.rotate(Math.PI/3)
    ctx.lineTo(0,0 - radius)

    ctx.rotate(Math.PI/3)
    ctx.lineTo(0,0 - radius)

    ctx.rotate(Math.PI/3)
    ctx.lineTo(0,0 - radius)

    ctx.rotate(Math.PI/3)
    ctx.lineTo(0,0 - radius)

    ctx.rotate(Math.PI/3)
    ctx.lineTo(0,0 - radius)

    ctx.rotate(Math.PI/3)
    ctx.lineTo(0,0 - radius)

    



    ctx.restore()
    ctx.closePath()
    ctx.stroke()
}

drawPolygon(100)

// drawShape(100,1, 3)