var newConArray=[

				{
					src:"/new construction/Avon - New Construction/Avon - Exterior.jpg",
					id:"rem-img-back",
					titleId:"avon-new-con",
					name:"Avon" 
				},

				{
					src:"/new construction/Belmar - New Construction/Belmar - New Construction 1.jpg",
					id:"belmar",
					titleId:"belmar-new-con",
					name:"Belmar" 
				},

				{
					src:"/new construction/Ocean Grove - New Construction/P1010125.JPG",
					id:"new-img-back",
					titleId:"ocean-grove-new-con",
					name:"Ocean Grove" 
				},

				{
					src:"/new construction/Marys Place by the Sea - New Construction/Marys Place by the Sea - 3.jpg",
					id:"mary",
					titleId:"mary-new-con",
					name:"Mary's Place by the Sea" 
				}

]

var x =0;
var y =1;
var z=2;

 Slider();


$(document).on("click",".new-cons-slide-1",function(){
  x++;
  y++;
  z++;        

  if(x===newConArray.length){
      x=0;
      //$(".bel").attr("src", newConArray[x].src)
  } 

    if(y===newConArray.length){
      y=0;
     // $(".grove").attr("src", newConArray[y].src)
  } 

     if(z===newConArray.length){
      z=0;
      //$(".place").attr("src", newConArray[z].src)
  	} 

 Slider();
})
 


 $(document).on("click",".new-cons-slide",function(){
  x--;
  y--;
  z--; 

	if(x<0){
	 x=newConArray.length-1;
     // $("#belmar").attr("src", newConArray[x])
    }

    if(y<0){
      y=newConArray.length-1;
      //$("#new-img-back").attr("src", newConArray[y])
    }

    if(z<0){
      z=newConArray.length-1;
      //$("#mary").attr("src", newConArray[z])
    }

 Slider();
 })




function Slider(){
	$(".bel").attr("src", newConArray[x].src)
	$(".bel").attr("id", newConArray[x].id)
	$(".header-a").attr("id", newConArray[x].titleId)
	$("#"+newConArray[x].titleId+"").html(newConArray[x].name);


	$(".grove").attr("src", newConArray[y].src)
	$(".grove").attr("id", newConArray[y].id)
	$(".header-b").attr("id", newConArray[y].titleId)
	$("#"+newConArray[y].titleId+"").html(newConArray[y].name);


	$(".place").attr("src", newConArray[z].src)
	$(".place").attr("id", newConArray[z].id)
	$(".header-c").attr("id", newConArray[z].titleId)
	$("#"+newConArray[z].titleId+"").html(newConArray[z].name);
}