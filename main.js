class List {
    constructor (){
        this.data = [];

    }
    
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList {
    constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}


//Herança 
class TodoList extends List {
    constructor(){
        super();

        this.user = "Wellington";

    }

    showUser(){
        console.log(this.user);
    }

}

const MinhaLista = new TodoList();


document.getElementById("novoTodo").onclick = () =>{
    MinhaLista.add('Novo Todo');
}


MinhaLista.showUser();

/*
    Metodos estaticos são idepedentes da classe ou seja:
    ele não 'exergar' o restante da classe assim nos garante vamos fazer uma
    classe como exemplo correto de classes estaticos.
*/

class TodoList{
    constructor(){
            this.todo = [];
    }

    static addTodo(){
        this.todos.push('Novo Todo');
        console.log(this.todos);
    }
}


//Metodo que não depende de qualquer infomações no restante da classe!
class Matematica {
    static soma(a,b){
        return a + b;
    }
}

console.log(Matematica.soma(3,2));

/* Vetores */
const arr = [1,2,3,4,5];


// map => irá trazer um novo array com uma função que determinarmos  func recebe (item , index)
    
    const  newArr = arr.map(function(item){
        return item * 2;
    });

    console.log(newArr);

   //reduce => vai iterar cada posição de acordo com a anterior.  func recebe(total, next)
   //vai jogar pra iteração seguinte.

   const sum = arr.reduce(function (total,next){
        return total + next;
   });

   console.log(sum)

   //Filter =>  serão executados de acordo com nossa logica por exemplo trazer um array de numeros pares.

   const filter = arr.filter(function(item){
       return item % === 0;
   })

   console.log(filter);

   //find => Se existe algo dentro do nosso array de acordo com nossa logica
   const find = arr.find(function(item){
       return item === 2;
   })

   console.log(find);   

//destruturação
const usuario = {
    nome:'wellington',
    idade : 23,
    endereco:{
        cidade:'SÃO PAULO',
        estado:'SP'
    },
}


console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.endereco.cidade);

//destruturação

const { nome , idade , endereco: {cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

//passando via função que é bem mais legal :)

function mostraDados( { nome , idade}){
    console.log(nome);
    console.log(idade);
}

mostraDados(usuario);
*/


//Operadores REST / 

const usuario = {
    nome : "wellington",
    idade : 21,
    empresa : "ventura"
}


const {nome , ...resto} = usuario;


console.log(nome);
console.log(resto);
