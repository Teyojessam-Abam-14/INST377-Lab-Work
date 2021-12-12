const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const restaurants = [];

fetch(endpoint)
  .then(blob => blob.json)
  .then(data => restaurants.push(...data));

function findMatches(wordToMatch, restaurants){
  return restaurants.filter(place => {
    const regex = RegExp(wordToMatch, 'gi')
    return place.category.match(RegExp)
  })
}

function displayMatches(){
  const matchArray = findMatches(this.value, restaurants);
  const html = matchArray.map(place =>{
    const regex = RegExp(this.value, 'gi');
    const typeName = place.category.replace(regex, `<span class = "h1">${this.value}</span>`);
    return `
    <li>
      <span class = "name">${place.name}</span>
      <span class = "type">${typeName}</span>
    </li>
  ` }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
