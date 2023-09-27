//FUNCIONES ANÓNIMAS AUTOEJECUTABLES ---> IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function () {
    return console.log("Soy una función anónima autoejecutable... Ü");
})();

//()=>{}  //FUNCIÓN ANÓNIMA DE FLECHA

(()=>{
    return console.log("Soy una función anónima autoejecutable de flecha... Ü");
})();
//EJERCICIOS
(function (a, b) {
    return console.log(a + b);
})(7, 11);

//TRANSFORMANDO ESTA ANTERIOR EN UNA DE FLECHA

((a, b)=>{
    return console.log(a + b);
})(3, 16);

//(a, b) => 67 + 9;

//SIMPLIFICAR LOS MÁS QUE SE PUEDA LA FUNCIÓN DE ARRIBA

((a, b) => console.log(a + b))(3, 16); 