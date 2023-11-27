"use strict";

var search = function search() {
  var input = document.querySelector('.search-block > input');
  var searchBtn = document.querySelector('.search-block > button');
  input.addEventListener('input', function (event) {
    console.log('input', event.target.value);
  });
  searchBtn.addEventListener('click', function () {
    console.log('click', input.value);
  });
};

search();
//# sourceMappingURL=search.dev.js.map
