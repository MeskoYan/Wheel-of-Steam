let c = document.getElementById("wheel");
let ctx = c.getContext("2d");
/*

making a line stroke

ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

*/

ctx.beginPath();
ctx.arc(95,50,40,0, 2 * Math.PI);
ctx.stroke();