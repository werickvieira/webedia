import '../sass/main.scss';

console.log('OLÁ!!!');
// http://localhost:3000/api/country/br/
// http://localhost:3000/api/search/bitcoin/
fetch('http://localhost:3000/api/headline/globo,axios,google-news-au,lequipe/7/1', {
  method: 'GET', // POST
})
  .then(resp => resp.json())
  .then(data => console.log('data', data))
  .catch((err) => {
    console.log('err', err);
  });

