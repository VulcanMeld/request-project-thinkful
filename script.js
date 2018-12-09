'use strict';

let username = "";


function findRepos() {
  $("form").submit( function (event) {
    event.preventDefault();
    $(".js-repo-list").empty();
    $("h2").empty();
    username = $(".js-user-name").val();
    const url =`https://api.github.com/users/${username}/repos`;
    console.log(url);
    $("h2").append(`Public repos for ${username}:`);

    fetch(url)
    .then(response => response.json())
    .then(data => data.forEach(function (repo) {
      $(".js-repo-list").append(
        `<li><a href="${repo.html_url}">${repo.name}</a></li>`
        
      )

    }))

    

  });


};








function startApp(){
  findRepos();
}

$(startApp);