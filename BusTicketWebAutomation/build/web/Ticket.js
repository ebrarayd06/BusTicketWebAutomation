



document.querySelector(".searchBtn").addEventListener("click",function(){

    var From=document.querySelector("#cityF").value;

    var To=document.querySelector("#cityT").value;

    var Day=document.querySelector("#dayW").value;

    var Month=document.querySelector("#monthW").value;

    var Year=document.querySelector("#yearW").value;
    
  


    if((From==To)||From=="From"||To=="To"||Day=="Day"||Month=="Month"||Year=="Year"){

        alert("Please check your choosen");

    }else{

      var information=document.querySelectorAll(".informationBus");
        
    let i=0;
    var hour=7  
    for(i=0;i<information.length;i++){
        
        let html=`
        
            <span>${From} & ${To} | Date:${Day}.${Month}.${Year} | Hour: ${hour}pm </span>
            <i class="far fa-eye"></i>

        `;
        
        information[i].innerHTML=html;
        information[i].style.display="block";
        hour=hour+2;


      }
      
    }

    var eye=document.querySelectorAll(".fa-eye");//
    


    //when user click ticketinformation eyes it ticketShown will show
    
eye[0].addEventListener("click",function(){

  let x=document.querySelectorAll(".ticketShown");
  let y=document.querySelectorAll(".showGenderColor");
  if(x[0].style.display=="none"){

    x[0].style.display="block";
    y[0].style.display="block";
    x[1].style.display="none";
    y[1].style.display="none";
    x[2].style.display="none";
    y[2].style.display="none";

  }else{

    x[0].style.display="none";
    y[0].style.display="none";

  }
  
 clearChair(); 
 genderDisplayNone();
 manChangeBackgroundWhite();
 womanChangeBackgroundWhite();
 buyTicketNone();


});

eye[1].addEventListener("click",function(){

  let x=document.querySelectorAll(".ticketShown");
  let y=document.querySelectorAll(".showGenderColor");
  if(x[1].style.display=="none"){

    x[1].style.display="block";
    y[1].style.display="block";
    x[0].style.display="none";
    y[0].style.display="none";
    x[2].style.display="none";
    y[2].style.display="none";
    
  }else{

    x[1].style.display="none";
    y[1].style.display="none";

  }
 
    
    
 clearChair(); 
 genderDisplayNone();
 manChangeBackgroundWhite();
 womanChangeBackgroundWhite();
 buyTicketNone();


});

eye[2].addEventListener("click",function(){

  let x=document.querySelectorAll(".ticketShown");
  let y=document.querySelectorAll(".showGenderColor");
  if(x[2].style.display=="none"){

    x[2].style.display="block";
    y[2].style.display="block";
    x[0].style.display="none";
    y[0].style.display="none";
    x[1].style.display="none";
    y[1].style.display="none";

  }else{

    x[2].style.display="none";
    y[2].style.display="none";

  }

 clearChair();
 genderDisplayNone();
 manChangeBackgroundWhite();
 womanChangeBackgroundWhite();
 buyTicketNone();

});






NumberOfTicket();


});


function NumberOfTicket(){


let numberOfTicket=document.querySelectorAll(".chair");

for(let i=0;i<numberOfTicket.length;i++){
    
    numberOfTicket[i].addEventListener("click",function(){
        
        
       
       if(numberOfTicket[i].matches(".blue")||numberOfTicket[i].matches(".red")){
           
          
           alert("you can not choose this chair please choose empty chair");
           genderDisplayNone();
           clearChair();
         
       
        }
       if(numberOfTicket[i].matches(".white")){
           
           clearChair();
           numberOfTicket[i].style.background="yellow";
           genderDisplayShow();
           buyTicketNone();
           womanShow();
           manShow();
           let num=numberOfTicket[i].innerText;
           genderControl(num);
           
          
        } 
       
       
    });
    
    
    
}

}

function clearChair(){
    
   let chairControl=document.querySelectorAll(".chair");


for(let i=0;i<chairControl.length;i++){
    
       if(chairControl[i].style.background=="yellow"){
           
         
           chairControl[i].style.background="white";
       
        } 
        
}

buyTicketNotSee();

}

function genderDisplayShow(){
    
      let gender=document.querySelectorAll(".chooseGender");
           gender[0].style.display="inline-block";
           gender[1].style.display="inline-block";
           gender[2].style.display="inline-block";
    
    
}

function genderDisplayNone(){
    
    let gender=document.querySelectorAll(".chooseGender");
           gender[0].style.display="none";
           gender[1].style.display="none";
           gender[2].style.display="none";
    
    
}

function womanShow(){
   
   womanChangeBackgroundWhite();
   let element=document.querySelectorAll(".chooseGenderClick2");
   element[0].style.display="inline-block";
   element[1].style.display="inline-block";
   element[2].style.display="inline-block";
   womanChangeBackgroundYellow();

}

function womanNone(){
    
   let element=document.querySelectorAll(".chooseGenderClick2");
   element[0].style.display="none";
   element[1].style.display="none";
   element[2].style.display="none";
   
}

function womanChangeBackgroundYellow(){
    
    let element=document.querySelectorAll(".chooseGenderClick2");
    
    for(let i=0;i<element.length;i++){
       
       element[i].addEventListener("click",function(){
           
           element[i].style.background="yellow";
            manChangeBackgroundWhite();
            buyTicketSee();
            buyTicketShow();
            
       });
   }
   
  
    
}

function womanChangeBackgroundWhite(){
    
    let element=document.querySelectorAll(".chooseGenderClick2");
     
    for(let i=0;i<element.length;i++){
          
           element[i].style.background="white";
            
   }
    
    
}

function manShow(){
 
   manChangeBackgroundWhite();
   
   let element=document.querySelectorAll(".chooseGenderClick");
   element[0].style.display="inline-block";
   element[1].style.display="inline-block";
   element[2].style.display="inline-block";
    
   manChangeBackgroundYellow();
   
}

function manNone(){
    
   let element=document.querySelectorAll(".chooseGenderClick");
   element[0].style.display="none";
   element[1].style.display="none";
   element[2].style.display="none";
   
   
}

function manChangeBackgroundYellow(){
    
   
    
    let element=document.querySelectorAll(".chooseGenderClick");
     
    for(let i=0;i<element.length;i++){
       
       element[i].addEventListener("click",function(){
          
           element[i].style.background="yellow";
           womanChangeBackgroundWhite();
           buyTicketSee();
           buyTicketShow();
           
           
       });
   }
  
  
}

function manChangeBackgroundWhite(){
    
    let element=document.querySelectorAll(".chooseGenderClick");
    
    for(let i=0;i<element.length;i++){
          
           element[i].style.background="white";
           
   }
    
    
}

function genderControl(alfa){

   let numberOfTicket=document.querySelectorAll(".chair");
    
    for(let i=0;i<numberOfTicket.length;i++){
   
       if(alfa%2==0){
            
           if(numberOfTicket[i].innerText==alfa-1){
             
              if(numberOfTicket[i].matches(".blue")){
                  womanNone();
              }else if(numberOfTicket[i].matches(".red")){
                  manNone();
              }else{
                  
              }
                  
              
           }
           //if end
       }
       if(alfa%2==1){
          let alfa2=parseInt(alfa);
         
           if(numberOfTicket[i].innerText==alfa2+1){
               
              if(numberOfTicket[i].matches(".blue")){
                  womanNone();
              }else if(numberOfTicket[i].matches(".red")){
                  manNone();
              }else{
                  
              }
                  
              
           }
       }
   }
        
    
}//function end

function buyTicketSee(){
    
    let element=document.querySelectorAll("#BuyTicket");
    for(let i=0;i<element.length;i++){
        
        element[i].style.display="block";
            
        }
    }
    
function buyTicketNotSee(){
    
   let element=document.querySelectorAll("#BuyTicket");
    for(let i=0;i<element.length;i++){
        
        element[i].style.display="none";
            
        } 
    
}

function buyTicketShow(){
    
let element=document.querySelectorAll("#BuyTicket");
    
    for(let i=0;i<element.length;i++){
        
        element[i].addEventListener("click",function(){
            
            let x=document.querySelectorAll(".buyForTicket");
            x[i].style.display="block";
            
        });
    }
    
}

function buyTicketNone(){
    
    let x1=document.querySelectorAll(".buyForTicket");
          
    for(let i=0;i<x1.length;i++){
        
            x1[i].style.display="none";
                
    }
            
    
}

