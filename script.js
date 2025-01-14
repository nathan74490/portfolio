localStorage.setItem('projet',"projet.json");

document.getElementById('buttonCv').addEventListener('click', function() {
    document.getElementById('downloadCv').click();
});

// window.location.href = movieDetails.html?id=${movie.id};
// const url = new URLSearchParams(window.location.search);
//     const id = url.get("id");
// const movies = JSON.parse(localStorage.getItem("films")) || [];
//     const theMovie = movies.find((element) => element.id === id);