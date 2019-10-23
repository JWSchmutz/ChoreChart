var database = firebase.database();

$(".check-box").on("click", function() {
  console.log(
    $(this)
      .find(".invisible")
      .attr("id")
  );
  //   firebase.database().ref('users/' + userId).set({
  //     username: name,
  //     email: email,
  //     profile_picture : imageUrl
  //   });
  database.ref($(this).attr("id")).push(
    $(this)
      .find(".invisible")
      .attr("id")
  );
  $(this)
    .find(".invisible")
    .removeClass("invisible");
});
database.ref().on("value", function(snapshot) {
  for (var property in snapshot.val()) {
    $("#" + snapshot.val()[property]).removeClass("invisible");
  }

  console.log(snapshot.val());
});
