$(function () {
  $("#navBarToggler").on("click", function () {
    $("#navBar").toggle(300);
  });

  $("#hideCorText").on("click", function () {
    $("#CorText").hide();
  });

  $("#showSkills").on("click", function () {
    $("#skills").toggle(300);
  });

  function inViewPort(element) {
    let rect = element.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.top <= window.innerHeight && rect.bottom >= window.innerHeight) ||
      (rect.top >= 0 && rect.bottom <= window.innerHeight)
    );
  }

  function asPageMoves() {
    let skills = document.querySelector("#toTopView");
    let values = document.querySelector("#myValueItems");
    let navBar = document.querySelector("#navBarCont");

    if (!inViewPort(skills)) {
      $("#toTopToggler").show();
    } else {
      $("#toTopToggler").hide();
    }

    if (inViewPort(values)) {
      $("#myValueItems").show();
      values.classList.add("changeOpa");
    } else {
      $("#myValueItems").show();
    }

    window.requestAnimationFrame(asPageMoves);
  }

  window.requestAnimationFrame(asPageMoves);
});
