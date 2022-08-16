const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8b755d8ad0msh9647c40bf249164p1e33bfjsn5a7a6378d9a9',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

fetch('https://covid-193.p.rapidapi.com/history?country=usa&day=2020-06-02', options)
	.then(response => response.json())
	.then(response =>  data = document.getElementById('details').innerHTML= JSON.parse(response.response))
	
	.catch(err => console.error(err));