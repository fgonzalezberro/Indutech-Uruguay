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
});
