var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

//¿Cómo harías print/log de la edad de John?

console.log('La edad de John es: '+users[1].age+' años.');

//¿Cómo harías print/log del nombre del primer objeto?

console.log('Nombre del primer objeto es: '+users[0].name);


//¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto

for(var i=0; i<users.length; i++){
    console.log('Nombre: '+users[i].name+' , Edad: '+users[i].age+' años.');
}

//¿Cómo harías para imprimir el nombre de los mayores de edad?

for (var x=0; x<users.length; x++){
    if(users[x].age > 18){
      console.log(users[x].name);
    }
  } 



