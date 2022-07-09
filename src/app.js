const { isFunctionOrConstructorTypeNode } = require("typescript");

let innerCursor = document.querySelector('.innerCursor');
let outerCursoir = document.querySelector('.outerCursor');

document.addEventListener('mousemove', moveCursor);
function moveCursor(e){
  let x = e.clientX;
  let y = e.clientY

  innerCursor.style.left= '${x}px';
  innerCursor.style.top= '${y}px';
  outerCursor.style.left= '${x}px';
  outerCursor.style.top= '${y}px';

}

var apikey = {key:'19d22546-0232-4b11-8999-82be6ebcbdf7'}
let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/latest",
qString = "?CMC_PRO_API_KEY=" + "19d22546-0232-4b11-8999-82be6ebcbdf7" + "&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=EUR";

fetch(url + qString,{ mode: "no-cors" })
  .then(resp => {
    return resp.json();
  })
  .then(data => {
    console.log(data);
  });


