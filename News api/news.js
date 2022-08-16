var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2022-08-16&' +
          'sortBy=popularity&' +
          'apiKey=8c8483f9aa26420aad652bd8fc93b02f';

var req = new Request(url);

const p = document.getElementById('demo')
fetch(req)
    .then(function(response) {
        return response.json();  
    })
    .then((data)=>{
        p.innerText = data
    })