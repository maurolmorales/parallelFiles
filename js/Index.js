// import api from "./modulos/Core.js";
// import { App } from "./App.js";
import { Controlador } from "./modulos/Controlador.js";
import { home } from "./modulos/Home.js";

// import { Controlador } from "./modulos/Controlador.js";
document.addEventListener("DOMContentLoaded", ()=>{
  let { hash } = location;
  console.log(hash);
  const main = document.getElementById("main")
  main.innerHTML=home()
  window.addEventListener("hashchange", () => {
    // api.page = 1;
    Controlador()
  });
});
