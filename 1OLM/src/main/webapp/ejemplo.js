/**
 * 
 */

CASO 1
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4;
  var b = 1;

  

document.write(a);
  

document.write(b);
}

document.write(a);
document.write(b);

/**Devuelve: 4 1 5 10 */

CASO 2
for (let i = 0; i<10; i++) {
  

document.write(i);
}

document.write(i);

/**Devuelve 0 1 */

CASO 3
    var z = 5
    let x = z+10, y = 12;
   
    document.write(x + y);
    
   /**Devuelve 27 */