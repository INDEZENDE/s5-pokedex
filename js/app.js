
$.ajax({// $. es igual jQuery.
    url:`https://pokeapi.co/api/v2/pokemon/`,//https://pokeapi.co/api/v2/pokemon/1
    data: {limit:30}
}).done(handleResponse).fail(handleFailure);

// funcion de respuesta
function handleResponse (data) {
  console.log(data);
    const pokeData = data.results;
    paintPokemon(pokeData);
};
// Guardar los pokemones en objetos
function paintPokemon(pokeData) {
  let containerGallery= document.getElementById('site-container');
  let output = ' ';
  let count =1;
  pokeData.forEach(item=>{
    output +=
    `<figure class = "${"imgs"}">
      <img src = "${"https://pokeapi.co/media/sprites/pokemon/"}${count++}${".png"}">
      <figcaption>${item.name}</figcaption>
      <figcaption>${item.url}</figcaption>
    </figure>`
  });
  containerGallery.innerHTML = output;
  return pokeData;}

// funcion en caso de que todo falle
function handleFailure () {
  console.log('Vuelve a intentar');
};
