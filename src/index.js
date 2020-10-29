$(document).ready(() => {
  $("#content").load("../public/components/home.html");

  //handle navigation links
  $(".nav-link").on("click", ({ target }) => {
    const { id } = target;

    $(".nav-link").removeClass("active");
    $(`#${id}`).addClass("active");
    $("#content").load(`../public/components/${id}.html`, (res, status) => {
      if (status == "error") {
        console.log(`error loading page ${id}`);
      }
    });
  });
});
