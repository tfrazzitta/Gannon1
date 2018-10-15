$("#back-to-top").hide();
$("#hide").hide();
$("footer").hide();
$(".slider").hide();
$(".slider-1").hide();
var ImgArray=[];
var token;

$(document).on("click","#rem-img-back",function(){
  ImgArray=[];
      $("#rem-append").fadeOut(00, function() {
        $("#rem-append").empty();
        var shell=" <div class='col-lg-4 mb-4'><div class='card h-100'>";
        var body="<div class='card-body'>"
           $.ajax({
            method: "GET",
            url: "/belmar"
          }).done(function(data) {
            console.log(data[0])
            for(i=1;i<data.length;i++){
              var image= data[0]+data[i];
              ImgArray.push(image);
              $("#rem-append").fadeIn(1000).append(shell+body+"<img id='rem-size' class='img-responsive' src='"+data[0]+data[i]+"'></div></div>");
            }
              $("#head").html("Belmar")
              document.getElementById( 'head' ).scrollIntoView();
              $("#back-to-top").show();
       })
    })
  token="a";
  setTimeout(footer,500)
})



$(document).on("click","#com-img-back",function(){
  ImgArray=[];
    $("#rem-append").fadeOut(00, function() {
        $("#rem-append").empty();
        var shell=" <div class='col-lg-4 mb-4'><div class='card h-100'>";
        var body="<div class='card-body'>"
           $.ajax({
            method: "GET",
            url: "/LittleSilver"
          }).done(function(data) {
            console.log(data[0])
            for(i=1;i<data.length;i++){
              var image= data[0]+data[i];
              ImgArray.push(image);
              $("#rem-append").fadeIn(1000).append(shell+body+"<img id='rem-size' class='img-responsive' src='"+data[0]+data[i]+"'></div></div>");
            }
             $("#head").html("Little Silver")
              document.getElementById( 'head' ).scrollIntoView();
              $("#back-to-top").show();
       })
    })
  token="b";
  setTimeout(footer,500)
})


$(document).on("click","#new-img-back",function(){
  ImgArray=[];
      $("#rem-append").fadeOut(00, function() {
      $("#rem-append").empty();
        var shell=" <div class='col-lg-4 mb-4'><div class='card h-100'>";
        var body="<div class='card-body'>"
           $.ajax({
            method: "GET",
            url: "/OceanGrove"
          }).done(function(data){
            console.log(data[0])
            for(i=1;i<data.length;i++){
              var image= data[0]+data[i];
              ImgArray.push(image);
             $("#rem-append").fadeIn(1000).append(shell+body+"<img id='rem-size' class='img-responsive' src='"+data[0]+data[i]+"'></div></div>");

            }
            $("#head").html("Ocean Grove") 
             document.getElementById( 'head' ).scrollIntoView();
             $("#back-to-top").show();
       })
    });
   token="c";
  setTimeout(footer,500)
})

