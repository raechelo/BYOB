const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});

nightmare
  .goto('https://www.lamag.com/culturefiles/crimes-los-angeles-history/3/')
  // .click('post-page-numbers')
  // .wait('1000')
  .evaluate(function () {
    var nameNodes = document.querySelectorAll('h2');
    var list = [].slice.call(nameNodes);
    return list.map(function(node){
      return node.innerText
    });
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });