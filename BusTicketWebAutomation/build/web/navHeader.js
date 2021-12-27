

//for nav-icon
var icon=document.querySelector(".nav-icon")

    icon.addEventListener("click",function(e){

        var open=document.querySelectorAll("#li1");

            open.forEach(function(item){

                if(item.style.display=="none"){
                    item.style.display="block";
                }
                else{
                    item.style.display="none";
                }
            })

        e.preventDefault();

    })


var models=[
{
    image:"image/otobus.jpg",
},
{
    image:"image/02.jpg",

},
{
    image:"image/03.jpg",
}
]

var index=1;
var slideCount=models.length;

var setting={
    duration:"2000",
    random:false
};

var interval;

init(setting);

//for manuel
document.querySelector(".fa-arrow-right").addEventListener("click",function(){

    index++;
    showSlide(index);
   

});
document.querySelector(".fa-arrow-left").addEventListener("click",function(){

    index--;
    showSlide(index);
   

});

//for manuel 
document.querySelectorAll(".stop").forEach(function(item){

    item.addEventListener("mouseenter",function(){
        clearInterval(interval);
    });

});
document.querySelectorAll(".stop").forEach(function(item){

    item.addEventListener("mouseleave",function(){
        init(setting);
    });
});

//for demonstrate
function showSlide(i){

    index=i;
    if(i<0){
        index=slideCount-1;
       
    }
    if(i>slideCount-1){
        index=0;
    }

    document.querySelector(".img-fluid").setAttribute("src",models[index].image);
    
}

//for randomly
function init(setting){

    var prev;
    let control=1;
    interval=setInterval(function(){

        if(setting.random){

            do{
                index=Math.floor(Math.random() * slideCount);
            }
            while(prev==index)
                prev=index;
        }
        else{

            
            showSlide(index);
            index++;
            control=0;
            
        }
        if(control==1){
            showSlide(index);
        }
        

    },setting.duration);

}






