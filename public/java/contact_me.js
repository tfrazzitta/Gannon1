///////EMAIL PAGE/////
  $("#change2").hide();
  $(document).on("click","#button1",function(){
  var name= $("#name-input").val()
  var phone=$("#phone-number-input").val()
  var email= $("#email-input").val()
  var message= $("#comment-input").val()
  if(name===""||phone===""||email===""||message==""||email.includes("@")==false){
  if(email.includes("@")== false){
  $("#error-form-replace").html("* Please include a proper email address");
  $("#error-form-replace").css("color","yellow");
  }
  else{
  $("#error-form-replace").html("* Please submit all requiements");
  $("#error-form-replace").css("color","yellow");
  }
  }
  else{
  $("#error-form-replace").html("");
  $.ajax({
  url: "https://formspree.io/tfrazzitta@yahoo.com",
  method: "POST",
  data: {
  name: name,
  phone:phone,
  email:email,
  message:message
  },
  dataType: "json"
  }).done(function(data) {
  $.ajax({
  method: "POST",
  url: "/email",
  data: {
  name: name,
  phone:phone,
  email:email,
  message:message
  }
  });
  $("#name-input").val("")
  $("#phone-number-input").val("")
  $("#email-input").val("")
  $("#comment-input").val("")
  $("#modal-message2").html("Your Email has been sent");
  $("#myModal2").modal("toggle");
  setTimeout(AutomaticModal1,2000)
  })
  }
  });
  function AutomaticModal2(){ $("#change2").trigger("click"); }
  function AutomaticModal1(){ location.replace("/") }
