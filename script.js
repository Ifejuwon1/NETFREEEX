const popularBox = document.querySelector('.populardiv')
const tvShowBox = document.querySelector('.tv-showdiv')
const movieBox = document.querySelector('.moviediv')
let search = document.querySelector('.fa-magnifying-glass')
let topBar = document.querySelector('.head')
let searchBar = document.querySelector('.search')


search.addEventListener('click',()=>{
	searchBar.style.display = 'block'
})


popularBox.innerHTML = ''
tvShowBox.innerHTML = ''
movieBox.innerHTML=''

const imagePath = 'https://image.tmdb.org/t/p/original'
popularUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=06f282885b245bba00d3767fe20c8917'
tvShowsUrl ='https://api.themoviedb.org/3/discover/tv?with_genres=drama,action&adventure&api_key=06f282885b245bba00d3767fe20c8917'
movieUrl = 'https://api.themoviedb.org/3/discover/movie?&api_key=06f282885b245bba00d3767fe20c8917'

 async function fetchPopular(){
	 await fetch(popularUrl)
	.then(res => res.json())
	.then(res => {
		console.log(res.results)
		movieList= res.results
	
		movieList.filter(element => {

		const titleElement = document.createElement('p');
		titleElement.textContent = element.title;
  
  
		const pictureElement = document.createElement('img');
		pictureElement.src = ` ${imagePath}` + element.poster_path ;
		const movieElement = document.createElement('div');
		movieElement.appendChild(pictureElement);
		movieElement.appendChild(titleElement);
		popularBox.appendChild(movieElement)
	});

		//
	})
	.catch(err => console.error(err));	
}

async function fetchTvShow(){
	await fetch(tvShowsUrl)
   .then(res => res.json())
   .then(res => {
	   console.log(res.results)
	   movieList= res.results
   
	   movieList.filter(element => {

	   const titleElement = document.createElement('p');
	   titleElement.textContent = element.name;
 
 
	   const pictureElement = document.createElement('img');
	   pictureElement.src = ` ${imagePath}` + element.poster_path ;
	   const movieElement = document.createElement('div');
	   movieElement.appendChild(pictureElement);
	   movieElement.appendChild(titleElement);
	   tvShowBox.appendChild(movieElement)
   });

	   //
   })
   .catch(err => console.error(err));	
}

async function fetchmovies(){
	await fetch(movieUrl)
   .then(res => res.json())
   .then(res => {
	   console.log(res.results)
	   movieList= res.results
   
	   movieList.filter(element => {

	   const titleElement = document.createElement('p');
	   titleElement.textContent = element.title;
 
 
	   const pictureElement = document.createElement('img');
	   pictureElement.src = ` ${imagePath}` + element.poster_path ;
	   const movieElement = document.createElement('div');
	   movieElement.appendChild(pictureElement);
	   movieElement.appendChild(titleElement);
	   movieBox.appendChild(movieElement)
   });

	   //
   })
   .catch(err => console.error(err));	
}



fetchPopular()
fetchTvShow()
fetchmovies()


