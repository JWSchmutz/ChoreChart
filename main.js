//firebase
var database = firebase.database();
//on clicking a box
$(".check-box").on("click", function () {
  //if is already checked
  if ($(this).hasClass("checked")) {
    //mark as unchecked
    $(this).removeClass("checked");
    //make check invis
    $(this).find(".fa-check").addClass("invisible");
    //in progress
    console.log($(this).attr("data-key"));
    database.ref().child($(this).attr("data-key")).remove();
    //otherwise
  } else {
    // add the checked value to firebase
    database
      .ref()
      .push($(this).find(".invisible").attr("id"))
      .then((snapshot) => $(this).attr("data-key", snapshot.key));
    // make check visible
    $(this).find(".invisible").removeClass("invisible");
    // mark as checked
    $(this).addClass("checked");
  }
});
//on page load, get all of the checked chores
database.ref().once("value", function (snapshot) {
  for (var property in snapshot.val()) {
    $("#" + snapshot.val()[property]).removeClass("invisible");
    $("#" + snapshot.val()[property])
      .parent()
      .addClass("checked");
  }
});
