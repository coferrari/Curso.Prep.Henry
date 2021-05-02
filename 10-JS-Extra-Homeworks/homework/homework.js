// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  // Object.entries()
  // El método Object.entries() devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado por for...in (La diferencia es que un bucle for-in enumera las propiedades en la cadena de prototipos).
  var array = [];
  for (let prop in objeto) {
    array.push([prop, objeto[prop]]);
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};    // definir en principio un objeto vacio
  for (var i = 0; i < string.length; i++) { // recorrer letra por letra el string
    if (objeto[string[i]]) {
      objeto[string[i]]+=1;    // si esa posición existe, sumale 1
    }
  else {
    objeto[string[i]] = 1;     // si no existe, creala.
  }
  }                                                 
  return objeto
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var minusculas = ""; // crear 2 variables, uno p mayusculas y otro para minusculas.
  var mayusculas = "";
  for ( i = 0; i < s.length; i++) {
    if (s[i].toUpperCase()===s[i]){         // convierto a mayuscula y comparo, si es true es que es una mayuscula.
      mayusculas += s[i];
    }  
    else {
      minusculas += s[i];
    }
  }
  return mayusculas + minusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var mirror = "";
  for (var i = str.length-1; i>=0; i--){           // i empieza en la ultima posicion del string y termina cuando llega a 0
    mirror += str[i]
  }
  var array = mirror.split(' ');        // toma las palabras que me quedaron invertidas en el orden, para armar el array
  return array.reverse().join(' ');     // cuando digo reverse lo que hago es invertir el orden de las palabras dentro del array, y dsp le digo que las una con un espacio. 
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  //  numero        1 9 8 0 3 4
  //  posiciones    0 1 2 3 4 5

  // for (i = 0; i < numero.length/2; i++) {               
  //   if (numero[i] !== numero[numero.length-1]);   
  // return "No es capicua";
  // }   
  // else {
  //   return "Es capicua";
  // el numero como numero no nos sirve pq no esta dividido en posiciones, por eso hay que transformarlo en string.

  var num=numero.toString();
  for (let i=0; i<num.length/2; i++) {  // con recorrer la mitad alcanza
    if (num[i] !== num[num.length-1-i]){
      return "No es capicua";           // si recorre todo el array y ve que no es capicua
    }
  }
  return "Es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var letras=["a", "b","c"];
  var newString="";
  for (let i=0; i<cadena.length; i++) {
    if(!letras.includes(cadena[i])) {
      newString += cadena[i];
    }
  }
  return newString;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  // recorremos el arreglo elemento por elemento, y creamos una variable que contenga cada elemento que vamos revisando
  for (let i=0; i<arr.length; i++){
  var temp = arr[i];
  j=i-1;    // dsp vamos a tener una variable j, que le vamos a asignar la posición i - 1.
  while (j>=0 && temp.length<arr[j].length){
    arr[j+1]=arr[j]
    j--
  }
  arr[j+1]=temp;
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var inter = [];
  for (let i=0; i<arreglo1.length; i++){
    if(arreglo2.includes(arreglo1[i])) {
      inter.push(arreglo1[i])
    }
  }
  return inter;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

