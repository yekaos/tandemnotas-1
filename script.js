// Api de localStorage
localStorage.setItem('tarea01','control')
let tarea1= localStorage.getItem('tarea01')
console.log(tarea1)
localStorage.setItem('tarea02','fiesta loca')
let tarea2 = localStorage.getItem('tarea02')
console.log(tarea2)

console.log(localStorage.length)

for (let i = 0; i < tareas.length; i++) {
  let key = localStorage.key(i) // Clave donde esta guardada la info del Est.
  console.log(key)
  tarea = localStorage.getItem(key) // Info del Est. en formato JSON
  console.log(tarea)
}

//localStorage.clear()