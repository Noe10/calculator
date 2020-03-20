let num = [1,4,5,3,7,7,8,5,4,3];
console.log(
    num.filter(v=>{
      return   num.filter(p => p == v).length == 1
    })
    
);

let palabras = "todo estaba bien bien hasta que llegaste tu";
console.log(palabras);

let obj =  palabras.split(" ").reverse();
let pala = obj.map(m=> {
let cantidad =obj.filter(v=> v==m).length;


    return {word:m , cant : cantidad}

})
console.log(pala);




 

 






