let guardar2 = []
let formu2=document.getElementById("form2")
let datosEnLocal = localStorage.getItem('formu2') 

datosEnLocal ?
guardar2 = JSON.parse(datosEnLocal):
guardar2 = []




function enviar2(event) {
    event.preventDefault()
    let id2 = event.target.elements['id2'].value
   let name2 = event.target.elements['service'].value
   let valor = event.target.elements['valor'].value
   let des = event.target.elements['descripcion'].value
   let puntos = event.target.elements['puntos'].value
   
  guardar2.push({
    id2: id2,
    name2: name2, 
    valor: valor,
    des: des,
    puntos: puntos,
    
   })

    localStorage.setItem('formu2',JSON.stringify(guardar2))
    console.log(event)
    event.target.reset()
    
}
let content2 = document.querySelector("#cont2");
console.log(guardar2)
pintar(guardar2);

function pintar(ar){

    content2.innerHTML="";
  for (let i = 0; i < ar.length; i++) {
    let tr2 = document.createElement("tr");
  
    let td12=document.createElement("td");
    let td22=document.createElement("td");
    let td32=document.createElement("td");
    let td42=document.createElement("td");
    let td52=document.createElement("td");
    let td62=document.createElement("td");

    let btn=document.createElement("button");
    let img=document.createElement("img");
    img.setAttribute('src','/imagenes/xroja.png')
    img.classList.add("w-[20px]","h-[20px]")
    btn.appendChild(img)
    td62.appendChild(btn)
    btn.addEventListener("click",function(){
      eliminar2(ar[i]);
    });
    td12.innerText = ar[i].id2;
    td22.innerText = ar[i].name2;
    td32.innerText = ar[i].valor;
    td42.innerText = ar[i].des;
    td52.innerText = ar[i].puntos;
    td12.classList.add("text-center")
    td22.classList.add("text-center")
    td32.classList.add("text-center")
    td42.classList.add("text-center")
    td52.classList.add("text-center")
    td62.classList.add("text-center")
    tr2.appendChild(td12);
    tr2.appendChild(td22);
    tr2.appendChild(td32);
    tr2.appendChild(td42);
    tr2.appendChild(td52);
    tr2.appendChild(td62);
    content2.appendChild(tr2);
  
  
  
  
  }
}
function eliminar2(parametro){

    let indice=guardar2.indexOf(parametro)
    if(window.confirm("Estás seguro que deseas eliminar este usuario?")){
      guardar2.splice(indice,1)
      pintar(guardar2)
      let datostexto2=JSON.stringify(guardar2)
      localStorage.setItem('formu2',datostexto2)
    }
    else{
      console.log("operacion cancelada");
    }
  
  }