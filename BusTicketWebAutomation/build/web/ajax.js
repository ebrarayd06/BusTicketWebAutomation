/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
    
    getAll();
    var isNew=true;
   
     
    function sendCustomerInfo(){
        
        
        
        if($("#customerInfo").valid()){
        
            var url="";
            var data;
            var method="";
            var number;
            var gender;
            
            
        let numberOfTicket=document.querySelectorAll(".chair");
        
        for(let i=0;i<numberOfTicket.length;i++){
            
            if(numberOfTicket[i].style.background=="yellow"){
                
                number=numberOfTicket[i].innerText;
               
                break;
            }
            
        }
        
        let genderM=document.querySelectorAll(".chooseGenderClick");
        let genderW=document.querySelectorAll(".chooseGenderClick2");
        
        for(let i=0;i<genderM.length;i++){
           
            if(genderM[i].style.background=="yellow"){
                gender="M";
                
            }
            if(genderW[i].style.background=="yellow"){
                gender="W";
                 
            }
            
            
        }
           
            if(isNew===true){
                
                url='post.jsp';
                data={
                    name:$("#name").val(),
                    surname:$("#surname").val(),
                    id:number,
                    gender:gender  
                };
                method='POST';
              
            }
            
            
            $.ajax({
               
                type:method,
                url:url,
                dataType:'JSON',
                data:data,
                
                success:function(data){
                    
                    
                    let From=document.querySelector("#cityF").value;

                    let To=document.querySelector("#cityT").value;

                    let Day=document.querySelector("#dayW").value;

                    let Month=document.querySelector("#monthW").value;

                    let Year=document.querySelector("#yearW").value;
                    
                    let Fn=$("#name").val();
                    let Ln=$("#surname").val();
                    let G=gender;
                    let N=number;
                    
                    
                    console.log(Fn,Ln,G,N);
                    let html=`
                    <p class="informationBusSpan">${From} & ${To} | Date:${Day}.${Month}.${Year}</p>
                    <p class="informationBusSpan">Name:${Fn} Surname:${Ln} | Gender:${G} ChairNumber:${N}</p>  `;
                    document.querySelector(".informationBUS").innerHTML=html;
                   
                         
                        
                   
                   document.querySelector("#section").style.display="none";
                   document.querySelector(".informationBUS").style.display="block";
                    
                }
              
            });
            
            
            
            
        }//if end
        
    }//addStudent end
    
    
    function getAll(){
       
        
        $.ajax({
            
        url:"get.jsp",
        type:"GET",
        dataType:"JSON",
        success:function(data){
            
            var html="";
            var element="";
            
            data.forEach(function(item){
                
                  
            if(item.id<17){
               
               
                if(item.id%2==1){
                    
                 
                        if(item.gender==null){
                                
                                element=`<span class="chair white">${item.id}</span>`;
                                html+=element;
                            
                        }else if(item.gender=="M"){
                               
                                element=`<span class="chair blue">${item.id}</span>`;
                                html+=element;
                        }else{
                            
                                element=`<span class="chair red">${item.id}</span>`;
                                html+=element;
                        }
                        
                      
                    }
                   
                }});//foreach end
            data.forEach(function(item){
                
                  
            if(item.id<17){
               
               
                if(item.id%2==0){
                    
                 
                        if(item.gender==null){
                                
                                element=`<span class="chair white">${item.id}</span>`;
                                html+=element;
                            
                        }else if(item.gender=="M"){
                               
                                element=`<span class="chair blue">${item.id}</span>`;
                                html+=element;
                        }else{
                            
                                element=`<span class="chair red">${item.id}</span>`;
                                html+=element;
                        }
                        
                      
                    }
                   
                }});//foreach end
            html+=`<hr class="line">`;
            data.forEach(function(item){
                
                  
            if(item.id>16&item.id<33){
               
               
                if(item.id%2==1){
                    
                 
                        if(item.gender==null){
                                
                                element=`<span class="chair white">${item.id}</span>`;
                                html+=element;
                            
                        }else if(item.gender=="M"){
                               
                                element=`<span class="chair blue">${item.id}</span>`;
                                html+=element;
                        }else{
                            
                                element=`<span class="chair red">${item.id}</span>`;
                                html+=element;
                        }
                        
                      
                    }
                   
                }});//foreach end
            data.forEach(function(item){
                
                  
            if(item.id>16&item.id<33){
               
               
                if(item.id%2==0){
                    
                 
                        if(item.gender==null){
                                
                                element=`<span class="chair white">${item.id}</span>`;
                                html+=element;
                            
                        }else if(item.gender=="M"){
                               
                                element=`<span class="chair blue">${item.id}</span>`;
                                html+=element;
                        }else{
                            
                                element=`<span class="chair red">${item.id}</span>`;
                                html+=element;
                        }
                        
                      
                    }
                   
                }});//foreach end
            
          var ticketShown=document.querySelectorAll(".ticketShown");
          ticketShown[0].innerHTML=html;
          ticketShown[1].innerHTML=html;
          ticketShown[2].innerHTML=html;
          
             
            
        }//success bitiş
        
        
        });
        
    
    
        }
        

