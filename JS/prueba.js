function addNumbers(greetingName, ...numbers) {
    let total = 0;
    for(i in numbers) {
        
        total = total + Number(numbers [i]);
    }
    return `${greetingName} : the total is ${total}`;
  }
  const newTotal = addNumbers("Antonio",1,'2',7,213);
  console.log(newTotal);

  /* diccionarios añadir a uno.*/
  const person= {
    'nombre': 'Antonio',
    'edad': 45,
    'altura': '1.82mts',
    'pulgadas': "asi se pone el signo de pulgadas \" "
  }

  person ['comida favorita'] = "Torta Ahogada, Hamburguesa, Pizza, Huevos";  /*asi se añade una opcion mas al diccionario*/
  console.log(person['comida favorita'])
  console.log(person['pulgadas'])

/*Objetos con funciones*/

const objetoconfuncion = {
    'name': 'Antonio',
    'Edad': 45,
    'Idioma': function(quiere="galletas"){
        console.log(`Miau, yo quiero ${quiere}`);
    }
}
objetoconfuncion.Idioma("Una Hamburguesa")



