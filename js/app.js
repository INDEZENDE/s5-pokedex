
$.ajax({// $. es igual jQuery.
    url:`https://pokeapi.co/api/v2/pokemon/`,//https://pokeapi.co/api/v2/pokemon/1
    data: {limit:30}
}).done(handleResponse).fail(handleFailure);

// funcion de respuesta
function handleResponse (data) {
  // console.log(data);
  const pokeData = data.results;
  paintPokemon(pokeData);
};
// Guardar los pokemones en objetos
function paintPokemon(pokeData) {
  let containerGallery= document.getElementById('site-container');
  let output = ' ';
  let count =1;

  pokeData.forEach(item=>{
    console.log(item.url);
    output +=
    `<figure class = "${"imgs"}">
      <img src = "${"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"}${count++}${".png"}">
      <figcaption >${item.name}</figcaption>
      <figcaption>${item.url}</figcaption>
      <button data-toggle="${"modal"}" data-target="${"#Modal"}"  data-whatever= "${item.url}">${"Mas información"}</button>

      <div class="${"modal fade"}" id="${"Modal"}"  tabindex= "${"-1"}" role= "${"dialog"}" aria-labelledby= "${"ModalLabel"}" aria-hidden= "${"true"}">${"Mas información"}>
        <div class="${"modal-dialog"}" role= "${"document"}" >${"Mas información"}>
          <div class="${"modal-content"}" >
            <div class="${"modal-header"}" >
              <h5 class="${"modal-title"}" id="${"ModalLabel"}">${item.name}</h5>
              <button type="${"button"}" class="${"close"}" data-dismiss="${"modal"}" aria-label="${"Close"}">
                <span aria-hidden=type="${"true"}">&times;</span>
              </button>
            </div>
            <div class=${"modal-body"}>
              <form>
                <div class="${"form-group"}">
                  <label id="${"height"}" for="${"recipient-name"}" class="${"form-control-label"}">${"Altura"}</label>
                </div>
                <div class="${"form-group"}">
                  <label id="${"height"}" for="${"recipient-name"}" class="${"form-control-label"}">${"Peso"}</label>
                </div>
                <div class="${"form-group"}">
                  <label id="${"height"}" for="${"recipient-name"}" class="${"form-control-label"}">${"Ataque"}</label>
                </div>
                <div class="${"form-group"}">
                  <label id="${"height"}" for="${"recipient-name"}" class="${"form-control-label"}">${"Tipo"}</label>
                </div>
              </form>
            </div>
            <div class="${"modal-footer"}>
              <button type="${"button"}" class="${"btn btn-secondary"}" data-dismiss="${"modal"}">Close</button>
            </div>
          </div>
        </div>
      </div>
    </figure>`
  });
  containerGallery.innerHTML = output;
  return pokeData;
}

// funcion en caso de que todo falle
function handleFailure () {
  console.log('Vuelve a intentar');
};
