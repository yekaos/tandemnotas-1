document.addEventListener('DOMContentLoaded',function(){
  showInfo();
})
document.getElementById('btn-add-nota').addEventListener('click', function(){
  getInfo(nota)
  setLocalInfo(nota)
  showInfo()
})
document.getElementById('btn-clean-notas').addEventListener('click', function(){
  cleanInfo()
  showInfo()
})
// recoger la información
function getInfo(){
  // capturamos lo que el usuario introduce
  let nota = document.getElementById('nota').innerHTML
  console.log(nota)
  return nota
}
// alamacenarla en localStorage
function setLocalInfo(nota){
  // guardaría la info en localStorage
  const clave = Date.now();
localStorage.setItem(clave,getInfo(nota))
}
// leerla y sacarla por pantalla
function showInfo(){
  // leerla y mostrarla por pantalla
  //  sino hay notas mostra no hay nada
  // limpiamos la pantalla
  document.getElementById('show-notas').innerHTML= ''
  for (let index = 0; index < localStorage.length; index++) {
      let clave = localStorage.key(index)
      let valor = localStorage[clave]
      console.log(valor)
      let elemento = `
      <div class='lista-notas'>
      ${valor}
      </div>
      `
      document.getElementById('show-notas').innerHTML+= elemento
  }
}
// limpiarla
function cleanInfo(){
  // limpiar el local storage y limpiar la pantaal
  // Elimina todos los elementos
localStorage.clear();
  console.log('En localstorage no hay notas')
}




////api////
// Api de localStorage
// localStorage.setItem('tarea01','control')
// let tarea1= localStorage.getItem('tarea01')
// console.log(tarea1)
// localStorage.setItem('tarea02','fiesta loca')
// let tarea2 = localStorage.getItem('tarea02')
// console.log(tarea2)

// console.log(localStorage.length)

// for (let i = 0; i < tareas.length; i++) {
//   let key = localStorage.key(i) // Clave donde esta guardada la info del Est.
//   console.log(key)
//   tarea = localStorage.getItem(key) // Info del Est. en formato JSON
//   console.log(tarea)
// }

//localStorage.clear()