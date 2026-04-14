const requestURL = '../json/documentaries.json';
async function fetchMoviesJson(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}
fetchMoviesJson().then(movies => {
    for (let index = 0; index < movies.documentaries.length; index++){
        const movieSection = document.getElementById('movieSection');
        let id = movies.documentaries[index].id;
        let poster = movies.documentaries[index].poster;
        let tittle = movies.documentaries[index].tittle;
        let year = movies.documentaries[index].year;
        let director = movies.documentaries[index].director;
        let synopsis = movies.documentaries[index].synopsis;

        movieSection.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${poster}" class="card-img-top" alt="cs">
            <div class="card-body">
                <h5 class="card-title">${tittle}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`;
    }
});