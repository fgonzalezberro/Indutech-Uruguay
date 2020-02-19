// Login Dashboard Features
$(document).ready(() =>{
  // Login Button Animation
  $("#login-btn-enter").mouseover(function(){
    $(this).addClass("animate flipOutX");
  });
  $("#login-btn-enter").mouseleave(function(){
    $(this).removeClass("animate flipOutX");
  });

  // Validate User ID Field
  $(".user-id").change(() =>{
    let user = $(".user-id").val();

    if(user.length >= 5){
      $(".id-success").show();
      $(".id-wrong").hide();
    }else if(user.length == 0){
      $(".id-success").hide();
      $(".id-wrong").hide();
    }else{
      $(".id-wrong").show();
      $(".id-success").hide();
    }
  });

  // Validate Password Field
  $(".user-password").change(() =>{
    let pass = $(".user-password").val();

    if(pass.length >= 5){
      $(".pass-success").show();
      $(".pass-wrong").hide();
    }else if(pass.length == 0){
      $(".pass-success").hide();
      $(".pass-wrong").hide();
    }else{
      $(".pass-wrong").show();
      $(".pass-success").hide();
    }
  });

  // Validate Login with Firebase
  $("#login-btn-enter").click(() =>{
    let email = $(".user-id").val();
    let password = $(".user-password").val();

    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert("No se ah podido acceder");
    });

    // Clean fields
    $(".user-id").val('');
    $(".user-password").val('');
  });

  // User Activity Observer
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      alert("Se Logueo Correctamente");

      $(".principal-view-content").html('');
      $(".principal-view-content").load("../components/_clients-zone.html");
    }else {
      alert('No existe usuario activo');
    }
  });
});
