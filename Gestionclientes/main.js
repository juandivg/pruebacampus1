let guardar = []

let datosEnLocal = localStorage.getItem('form') 

datosEnLocal ?
guardar = JSON.parse(datosEnLocal):
guardar = []




function enviar(event) {
    event.preventDefault()
    let id = event.target.elements['id'].value
   let name = event.target.elements['name'].value
   let lastname = event.target.elements['lastname'].value
   let placa = event.target.elements['placa'].value
   let type= event.target.elements['type'].value
   let email = event.target.elements['email'].value
   let number = event.target.elements['number'].value
   
  guardar.push({
    id: id,
    name: name, 
    lastname: lastname,
    placa: placa,
    type: type,
    email: email,
    number: number,
    
   })

    localStorage.setItem('form',JSON.stringify(guardar))
    console.log(event)
    event.target.reset()
    
}
let content = document.querySelector("#cont");
console.log(guardar)
pintar(guardar);

function pintar(ar){

    content.innerHTML="";
  for (let i = 0; i < ar.length; i++) {
    let tr = document.createElement("tr");
  
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    let td5=document.createElement("td");
    let td6=document.createElement("td");
    let td7=document.createElement("td");
    let td8=document.createElement("td");

    let btn=document.createElement("button");
    let img=document.createElement("img");
    img.setAttribute('src','/imagenes/xroja.png')
    img.classList.add("w-[20px]","h-[20px]")
    btn.appendChild(img)
    td8.appendChild(btn)
    btn.addEventListener("click",function(){
      eliminar(ar[i]);
    });
    td1.innerText = ar[i].id;
    td2.innerText = ar[i].name;
    td3.innerText = ar[i].lastname;
    td4.innerText = ar[i].placa;
    td5.innerText = ar[i].type;
    td6.innerText = ar[i].email;
    td7.innerText = ar[i].number;
    td1.classList.add("text-center")
    td2.classList.add("text-center")
    td3.classList.add("text-center")
    td4.classList.add("text-center")
    td5.classList.add("text-center")
    td6.classList.add("text-center")
    td7.classList.add("text-center")
    td8.classList.add("text-center")
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    content.appendChild(tr);
  
  
  
  
  }
}
let filtrado=[];
let inp1=document.getElementById('inpu1');
let inp2=document.getElementById('inpu2');
let inp3=document.getElementById('inpu3');
console.log(inp1)
function eliminar(parametro){

  let indice=guardar.indexOf(parametro)
  if(window.confirm("Estás seguro que deseas eliminar este usuario?")){
    guardar.splice(indice,1)
    pintar(guardar)
    asignar(guardar)
    inp1.value=""
    let datostexto=JSON.stringify(guardar)
    localStorage.setItem('form',datostexto)
  }
  else{
    console.log("operacion cancelada");
  }

}
function buscar(event){
  filtrado=[];
  let valor=event.target.value;
  console.log(event)
  console.log((valor))
  let dato
  let j=0;
  for(let i=0;i<guardar.length;i++){
    dato=guardar[i].id;
    if(dato.includes(valor)){
      filtrado[j]=guardar[i];
      
      j++;

    }
  }
  if(inp3!=""){
    pintar(filtrado)
  }
  else{
    pintar(guardar)

    
  }

  
  
}