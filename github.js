$(document).ready(function(){
    var button = document.getElementById('theButton');
    button.addEventListener('click', getName);
    function getName(){
        $.get("https://api.github.com/users/BretFarley129", displayName);
    }
    function displayName(data) {
      console.log(data);
      $('#main').append(`<p>${data.name}</p>`)
    }
});