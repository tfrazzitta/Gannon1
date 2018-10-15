$("#back-to-top").hide();
$("#hide").hide();
$("footer").hide();
$(".slider").hide();
$(".slider-1").hide();
var ImgArray=[];
var token;

$(document).on("click","#rem-img-back",function(){
  ImgArray=[];
        $("#rem-append").empty();
        var shell=" <div class='col-lg-4 mb-4'><div class='card h-100'>";
         var body="<div class='card-body'>"
           $.ajax({
            method: "GET",
            url: "/Eatontown"
          }).done(function(data) {
            console.log(data)
            console.log(data[0])
            for(i=1;i<data.length;i++){
              var image= data[0]+data[i];
              ImgArray.push(image);
              $("#rem-append").append(shell+body+"<img id='rem-size' class='img-responsive' src='"+data[0]+data[i]+"'></div></div>")
            }
             $("#head").html("Eatontown")
             $("#back-to-top").show();
              document.getElementById( 'rem-append' ).scrollIntoView();
       })
  token="a";
  setTimeout(footer,500)
})



$(document).on("click","#com-img-back",function(){
    ImgArray=[];
        $("#rem-append").empty();
        var shell=" <div class='col-lg-4 mb-4'><div class='card h-100'>";
        var body="<div class='card-body'>"
           $.ajax({
            method: "GET",
            url: "/Sandy"
          }).done(function(data) {
            console.log(data)
            console.log(data[0])
            for(i=1;i<data.length;i++){
              var image= data[0]+data[i];
              ImgArray.push(image);

              $("#rem-append").append(shell+body+"<img id='rem-size' class='img-responsive' src='"+data[0]+data[i]+"'></div></div>")
            }
             $("#head").html("Sandy Rehabilitation")
             $("#back-to-top").show();
              document.getElementById( 'rem-append' ).scrollIntoView();
       })
  token="b";
  setTimeout(footer,500)
})



$(document).on("click","#new-img-back",function(){
    ImgArray=[];
        $("#rem-append").empty();
        var shell=" <div class='col-lg-4 mb-4'><div class='card h-100'>";
        var body="<div class='card-body'>"
           $.ajax({
            method: "GET",
            url: "/Neptune"
          }).done(function(data) {
            console.log(data[0])
            for(i=1;i<data.length;i++){
              var image= data[0]+data[i];
              ImgArray.push(image);
              $("#rem-append").append(shell+body+"<img id='rem-size' class='img-responsive' src='"+data[0]+data[i]+"'></div></div>");
            }
            $("#head").html("Neptune")
            $("#back-to-top").show();
             document.getElementById( 'rem-append' ).scrollIntoView();
       })
  token="c";
  setTimeout(footer,500)
})

