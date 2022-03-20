


// let waveElem  = document.getElementById('wave');
// let wavePath = waveElem.getAttribute('d');

// console.log(wavePath);
// let offset = 0;

// let startX = 0;
// let startY = 50;

// let firstCurveX1 = 150;
// let firstCurveY1 = 150;
// let firstCurveX2 = 350;
// let firstCurveY2 = -50;


// let secondCurveX1 = 500;
// let secondCurveY1 = 50;
// // let secondCurveX2 = 500;
// // let secondCurveY2 = 50;
 
// let dir = 1;
// let speed = 0.4;
// let maxCount = 50;
// let i = 0;
// setInterval(() => {   
//     if(i >= maxCount){
//         dir *= -1;
//         speed = Math.random();
//         i = -maxCount;
//     }
   
//     i++;
//     // speed = Math.random() * 1;
//     firstCurveY1 += dir * speed ;
//     startY += -dir * speed;
//     // secondCurveY1 += dir * speed + 3;
//     // console.log(firstCurveY1 + ' ' + i + ' ' + dir);
//     console.log(speed);

//     waveElem.setAttribute('d', 
//     `M${startX},${startY} C${firstCurveX1},${firstCurveY1} ${firstCurveX2},${firstCurveY2} ${secondCurveX1},${secondCurveY1} L500.00,150.00 L0.00,150.00 Z`)
//     offset++;
// }, 33);


















// // // import { SVG } from '@svgdotjs/svg.js'


// // let body  = document.querySelector('body');
// // let deviceWidth = body.clientWidth;
// // let deviceHeight = body.clientHeight;
// // let waveMaxHeight = 200;
// // let startX = 0;
// // let startY = 100;

// // console.log(deviceWidth);
// // console.log(deviceHeight);
// // var draw = SVG().addTo('body').size(deviceWidth, 150)
// // let wavePath = `M${startX},${startY} C${deviceWidth/2},100.00 550,-50 ${deviceWidth},50 L${deviceWidth},150.00 L0.00,150.00 Z`

// // let path = draw.path(wavePath);
// // let runner = path.animate();



// // function update() {
    
// // }

// // function draw() {
    
// // }

// // function waveIt() {   
// //     // runner.animate().dmove(50,50);
// //     runner.during(function () {
// //        console.log('running'); 
// //     });

// //     path.fill('blue');
// //     startX += 5;
    
// // }

// // // waveIt();
// // // document.querySelector('path').remove();

// // setInterval(() => {
    
// //     waveIt();
    
// // }, 50);






// // // path.animate({
// // //     duration: 2000,
// // //     delay: 1000,
// // //     when: 'now',
// // //     swing: true,
// // //     times: 100,
// // //     wait: 200
// // //   }).attr({ fill: '#f03' })
// // /*

// // M = MOVETO(X,Y)
// // C = CURVETO(x1 y1 x2 y2 x y)
// //     Draws a cubic Bézier curve from the current point to (x,y) using (x1,y1)
// //     as the control point at the beginning of the curve and (x2,y2) as the control point at the end of the curve.
// //     C (uppercase) indicates that absolute coordinates will follow; c (lowercase) indicates
// //     that relative coordinates will follow.

// // L = LINETO(X,Y)

// // Z = CLOSEPATH


// // MOVE TO TOP LEFT

// // M0.00,49.98
// // C149.99,150.00
// // 349.20,-49.98
// // 500.00,49.98
// // L500.00,150.00
// // L0.00,150.00 Z

// // */
