const popularBox = document.querySelector('.populardiv')
const tvShowBox = document.querySelector('.tv-showdiv')
const movieBox = document.querySelector('.moviediv')
const expandedBox = document.querySelector('.expandedbox')
const tit = document.querySelector('.movtitle')
const innerpic = document.querySelector('.innerpic')
const genre = document.querySelector('.genre')
const overview = document.querySelector('.overview')
const casts = document.querySelector('.cast')
const backgroundOverlay = document.querySelector('.bg-image')
const rating = document.querySelector('.rating')
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

		//expanded view
		movieElement.addEventListener('click', ()=>{
			const closeDiv = document.querySelector('.fa-xmark')
			closeDiv.addEventListener('click', ()=>{
				expandedBox.style.display = 'none'
				overlay.style.display = 'none'
				backgroundOverlay.style.display = 'none'
			})
			const overlay = document.querySelector('.overlay')
			overlay.style.display = 'block'
			const expandedDiv = document.createElement('div')
			expandedDiv.innerHTML = element.title
			expandedBox.style.display = 'block'
			backgroundOverlay.style.display = 'block'
			const backdrop = `${imagePath}` + element.backdrop_path
			backgroundOverlay.style.backgroundImage = `url(${backdrop})`
			tit.textContent = element.title
			innerpic.src = ` ${imagePath}` + element.poster_path
			genre.textContent = element.genre_ids
			overview.textContent = element.overview
			rating.innerHTML = element.vote_average + '/10'
		   })
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

	   //expanded view
	   movieElement.addEventListener('click', ()=>{
		const closeDiv = document.querySelector('.fa-xmark')
		closeDiv.addEventListener('click', ()=>{
			expandedBox.style.display = 'none'
			overlay.style.display = 'none'
			backgroundOverlay.style.display = 'none'
		})
		const overlay = document.querySelector('.overlay')
		overlay.style.display = 'block'
		const expandedDiv = document.createElement('div')
		expandedDiv.innerHTML = element.title
		expandedBox.style.display = 'block'
		backgroundOverlay.style.display = 'block'
		const backdrop = `${imagePath}` + element.backdrop_path
		backgroundOverlay.style.backgroundImage = `url(${backdrop})`
		tit.textContent = element.name
		innerpic.src = ` ${imagePath}` + element.poster_path
		genre.textContent = element.genre_ids
		overview.textContent = element.overview
		rating.innerHTML = element.vote_average + '/10'
	   })
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

	   //expande view
	   movieElement.addEventListener('click', ()=>{
		const closeDiv = document.querySelector('.fa-xmark')
		closeDiv.addEventListener('click', ()=>{
			expandedBox.style.display = 'none'
			overlay.style.display = 'none'
			backgroundOverlay.style.display = 'none'
		})
		const overlay = document.querySelector('.overlay')
		overlay.style.display = 'block'
		const expandedDiv = document.createElement('div')
		expandedDiv.innerHTML = element.title
		expandedBox.style.display = 'block'
		backgroundOverlay.style.display = 'block'
		const backdrop = `${imagePath}` + element.backdrop_path
		backgroundOverlay.style.backgroundImage = `url(${backdrop})`
		tit.textContent = element.title
		innerpic.src = ` ${imagePath}` + element.poster_path
		genre.textContent = element.genre_ids
		overview.textContent = element.overview
		rating.innerHTML = element.vote_average + '/10'
	   })
   });

	   //
   })
   .catch(err => console.error(err));	
}



fetchPopular()
fetchTvShow()
fetchmovies()


