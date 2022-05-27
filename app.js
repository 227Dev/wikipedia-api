// Submit fonction
const rechercher = (e) => {
  e.preventDefault();
  let data = document.getElementById("icon_prefix").value;
  let res = data.trim();
  fetchResponse(res);
};

const fetchResponse = (res) => {
  let api = `https://fr.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=URL&utf8=&format=json&origin=*&srlimit=20&srsearch=${res}`;

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      let result = data.query.search;
      displayResults(result);
    })
    .catch(() => console.log("An error occurred"));
};

function displayResults(results) {
  let searchResults = document.getElementById("wikiResultat");

  searchResults.innerHTML = "";
  // afficher les resultat en les parcourants
  results.forEach((result) => {
    let URL = encodeURI(`https://fr.wikipedia.org/wiki/${result.title}`);

    searchResults.insertAdjacentHTML(
      "beforeend",
      `<div class="resultItem">
        <h5 class="resultItem-title">
          <a href="${URL}" class="red-text text-lighten-4" target="_blank" rel="noopener">${result.title}</a>
        </h5>
        <span class="resultItem-snippet">${result.snippet}</span><br>
        <a href="${URL}" class="resultItem-link " target="_blank" rel="noopener">${URL}</a>
      </div> <hr>`
    );
  });
}

let form = document.getElementById("form");
form.addEventListener("submit", rechercher);
