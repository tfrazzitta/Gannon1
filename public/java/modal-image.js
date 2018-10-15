var img;

$(document).on("click","#rem-size",function(){
    img = $(this).attr("src");
    p=ImgArray.indexOf(img)
    $("#img01").attr("src",img);
    $(".card-body").css("opacity",".5");
    $("#myModal2").modal("toggle");
    //sizeImage();
    setTimeout(Slide,1000);
})

$(document).on("click","#img01",function(){
  $(".slider").hide();
  $(".slider-1").hide();
  $(".card-body").css("opacity","1");
  $("#myModal2").modal("toggle"); 
 })

$(document).on("click","#back-to-top",function(){
 document.getElementById( 'top' ).scrollIntoView();
 $('#rem-append').empty();
 $('#head').html("");
 $("#back-to-top").hide();
 $("footer").hide();
})

var p;
$(document).on("click",".slider",function(){
  p++;
  Carousel()
  if(p==ImgArray.length){
      p=0;
      $("#img01").attr("src", ImgArray[p])
  } 
})
 


 $(document).on("click",".slider-1",function(){
    p--;
    Carousel()

    if(p<=0){
      p=ImgArray.length;
      $("#img01").attr("src", ImgArray[p])
    }

 })



function footer(){
  $('footer').show();
}

function Slide(){
  var Imgheight= $(".col-lg-1").height();
  var newHeight=Imgheight/2;
  $("#img01").css("height",Imgheight)
  $(".slider").css("top",newHeight);
  $(".slider-1").css("top",newHeight);
  $(".slider").show();
  $(".slider-1").show();
}


function Carousel(){
  console.log(p)
  $("myModal2").empty();

  if(token==="a"){
    $("#img01").attr("src", ImgArray[p])
  }

  if(token==="b"){
    $("#img01").attr("src", ImgArray[p])
  }

  if(token==="c"){
    $("#img01").attr("src", ImgArray[p])
  }

  if(token==="d"){
    $("#img01").attr("src", ImgArray[p])
  }

   //sizeImage()
  
}


function sizeImage(){
  // var Imgheight=""; 
  // console.log('hhhhhhhh')
  // var Imgheight= $(".col-lg-1").height();
  // var newHeight=Imgheight/2;
  // $("#img01").css("height",Imgheight)
  // $(".slider").css("top",newHeight);
  // $(".slider-1").css("top",newHeight);


}