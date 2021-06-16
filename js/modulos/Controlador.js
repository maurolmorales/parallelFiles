import api from "../modulos/Core.js";
import App from "../App.js";
// import { ajax } from "./modulos/ajax.js";
// import { PostCard } from "./PostCard.js";
// import { Post } from "./Post.js";
// import { SearchCard } from "./SearchCard.js";

export async function Controlador() {
  let { hash } = location;
  console.log(hash);
  document.getElementById("main").innerHTML = null;

  if (!hash || hash === "/") {
    let dir = `./${hash}`;
    document.getElementById("main").innerHTML = dir;  
    console.log(dir);
  }

  // if (!hash || hash === "#/") {
  //   await ajax({
  //     url: api.POST,
  //     callSuccess: (posts) => {
  //       let html = "";
  //       posts.forEach((post) => (html += PostCard(post)));
  //       document.querySelector(".loader").style.display = "none";
  //       document.getElementById("main").innerHTML = html;
  //     },
  //   });
  // } else if (hash.includes("#/search")) {
  //   let query = localStorage.getItem("wpSearch");
  //   if (!query) {
  //     document.querySelector(".loader").style.display = "none";
  //     return false;
  //   }
  //   await ajax({
  //     url: `${api.SEARCH}${query}`,
  //     callSuccess: (search) => {
  //       let html = "";
  //       if (search.length === 0) {
  //         html = `
  //              <p class="error>
  //                 No existen resultados dee búsqueda para el término
  //                 <mark>${query}</mark>
  //              </p>
  //           `;
  //       } else {
  //         search.forEach((post) => (html += SearchCard(post)));
  //       }
  //       document.getElementById("main").innerHTML = html;
  //     },
  //   });
  // } else if (hash === "#/contacto") {
  //   document.getElementById("main").innerHTML = "<h2>Sección del Contacto</h2>";
  // } else {
  //   await ajax({
  //     url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
  //     callSuccess: (post) => {
  //       document.getElementById("main").innerHTML = Post(post);
  //     },
  //   });
  // }

  // document.querySelector(".loader").style.display = "none";
}
