const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8b755d8ad0msh9647c40bf249164p1e33bfjsn5a7a6378d9a9',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3', options)
	.then(response => response.json())
	.then(response => document.getElementById('demo').innerHTML = JSON.stringify(response.forecast.forecastday[0]))
	.catch(err => console.error(err));

    