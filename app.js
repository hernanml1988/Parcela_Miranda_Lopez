let containerImagen = document.getElementById("containerImagen");
let fotoCarrusel = document.getElementById("fotoCarrusel");
let cont = 1;
let spanContainer = document.querySelector("#containerComent span");
let containerComent = document.getElementById("containerComent");

let texto1 = "En la laguna antes de llegar!!";
let texto2 = "En la parcela con los cabros!!";
let texto3 = "Toda la familia en parcela";
let texto4 = "Una parada antes de llegar!!";
setInterval(() => {
  spanContainer.remove();
  fotoCarrusel.remove();

  cont === 1 ? (texto = texto1) : "";
  cont === 2 ? (texto = texto2) : "";
  cont === 3 ? (texto = texto3) : "";
  cont === 4 ? (texto = texto4) : "";

  console.log(cont);
  let textosHTML = `<span> 
                        <b>${texto}</b> 
                    </span>`;
  let imagenHTML = `<img
                        src="img/imagenCarrusel/carrusel${cont}.jpg"
                        class="imgcarrusel"
                        alt=""
                        id="fotoCarrusel"
                    />`;

  containerImagen.innerHTML = imagenHTML;
  containerComent.innerHTML = textosHTML;
  cont++;
  if (cont === 5) {
    cont = 1;
  }
}, 3000);
