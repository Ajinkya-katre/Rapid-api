//         const options = {
    // 	method: 'GET',
    // 	headers: {
    // 		'X-RapidAPI-Key': '8b755d8ad0msh9647c40bf249164p1e33bfjsn5a7a6378d9a9',
    // 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    // 	}
    // };
    
    // fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3', options)
    // 	.then(response => response.json())
    // 	.then(response => document.getElementById('demo').innerHTML = JSON.stringify(response.forecast.forecastday[0].day))
    // 	.catch(err => console.error(err));
        
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", "English is hard, but detectably so");
    
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '8b755d8ad0msh9647c40bf249164p1e33bfjsn5a7a6378d9a9',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: encodedParams
    };
    
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
    