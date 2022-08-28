const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=e31beba6aca2407e8f5e04b10b00a68e";
const resultsContainer = document.querySelector(".results");


async function getInformation() {
  const response = await fetch(url);
  const responseAsJson = await response.json();
  const results = responseAsJson.results;
  resultsContainer.innerHTML = "";

  console.log(responseAsJson);
  
  for (let i = 0; i < results.length; i++) {
    console.log(results[i].name);

    const name = results[i].name;
    const rating = results[i].rating;
    const numberOfTags = results[i].tags.length;
    
    if (i === 8) {
      break;
    }
    

    
    resultsContainer.innerHTML += '<div class="name">' + name + "</div>";
    resultsContainer.innerHTML +=
      '<div class="rating">' + "Rating: " + rating + "</div>";
    resultsContainer.innerHTML +=
      '<div class="numberOfTags">' + "Number of tags: " + numberOfTags + "</div>";
    
  }
;

}

getInformation();