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
            url: "/Avon"
          }).done(function(data) {
            $.ajax({
            method: "GET",
            url: "/Interlaken"
          }).done(function(inter) {
           console.log(data[0])
            for(i=1;i<data.length;i++){
              var image= data[0]+data[i];
              ImgArray.push(image);
              $("#rem-append").fadeIn(1000).append(shell+body+"<img id='rem-size' class='img-responsive' src='"+data[0]+data[i]+"'></div></div>");
            }
               $("#head").html("Avon")
               document.getElementById( 'head' ).scrollIntoView();
               $("#back-to-top").show();
          })
       })
    })
  token="a";
  setTimeout(footer,500)
})



$(document).on("click","#belmar",function(){
  ImgArray=[]
  $("#rem-append").fadeOut(00, function() {
        $("#rem-append").empty();
        var shell=" <div class='col-lg-4 mb-4'><div class='card h-100'>";
        var body="<div class='card-body'>"
           $.ajax({
            method: "GET",
            url: "/Belmar-Constr"
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
            url: "/OceanGrove-Const"
          }).done(function(data) {
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
    })
    token="c";
    setTimeout(footer,500)
})


$(document).on("click","#mary",function(){
  ImgArray=[];
    $("#rem-append").fadeOut(00, function() {
       $("#rem-append").empty();
        var shell=" <div class='col-lg-4 mb-4'><div class='card h-100'>";
        var body="<div class='card-body'>"
           $.ajax({
            method: "GET",
            url: "/Mary"
          }).done(function(data) {
            console.log(data[0])
            for(i=1;i<data.length;i++){
              var image= data[0]+data[i];
              ImgArray.push(image);
              $("#rem-append").fadeIn(1000).append(shell+body+"<img id='rem-size' class='img-responsive' src='"+data[0]+data[i]+"'></div></div>");
            }
            $("#head").html("Marys Place by the Sea")
             document.getElementById( 'head' ).scrollIntoView();
             $("#back-to-top").show();
       })
    })
  token="d";
  setTimeout(footer,500)
})



// 
// $(document).on("click","#interlaken",function(){
//    $("#rem-append").fadeOut(00, function() {
//         $("#rem-append").empty();
//         var shell=" <div class='col-lg-4 mb-4'><div class='card h-100'>";
//         var body="<div class='card-body'>"
//            $.ajax({
//             method: "GET",
//             url: "/Interlaken"
//           }).done(function(data) {
//             console.log(data[0])
//             for(i=1;i<data.length;i++){
//               $("#rem-append").fadeIn(1000).append(shell+body+"<img id='rem-size' class='img-responsive' src='"+data[0]+data[i]+"'></div></div>");
//             //            $("#head").html("Interlaken")
//             }
//              document.getElementById( 'head' ).scrollIntoView();
//              $("#back-to-top").show();
//        })
//     })
//     setTimeout(footer,500)
// })

