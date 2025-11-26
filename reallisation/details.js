
const params = new URLSearchParams(window.location.search);
const countryName = params.get("name");


fetch('https://countries-api-hsak.onrender.com/api/countries/')
.then(res => res.json())
.then(data => {

 
  const country = data.find(c => c.name === countryName);

 
  afficherDetails(country);
});


function afficherDetails(country) {
  const details = document.getElementById("details");

  details.innerHTML = `
    <img src="${country.flag}" style="width:200px">
    <h2>${country.name}</h2>
    <p><strong>Capitale:</strong> ${country.capital}</p>
    <p><strong>Langue:</strong> ${country.language}</p>
    <p><strong>Continent:</strong> ${country.continent}</p>
    <p><strong>Population:</strong> ${country.population}</p>
    <p><strong>Superficie:</strong> ${country.area} km²</p>
    <p><strong>Monnaie:</strong> ${country.currency}</p>
  `;
}