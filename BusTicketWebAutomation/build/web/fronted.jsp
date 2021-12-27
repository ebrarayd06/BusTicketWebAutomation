<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BUSTATION</title>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">

    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style1.css">

</head>

<body>

    <nav id="navbar">

        <div class="containerBus clearfix">
            <div class="nav-name"><i class="fas fa-bus"></i><a href="#" class="nav-name-item text-uppercase">Bus Ticket
                    Station</a></div>
            <div class="nav-link add">
                <ul class="clearfix">
                    <li><a href="" class="nav-icon"><i class="fas fa-bars"></i></a></li>
                    <li id="li1"><a href="#section" class="nav-item1">BUY TICKET</a> </li>
                    <li id="li1"><a href="#aboutUs" class="nav-item1">ABOUT</a> </li>
                    <li id="li1"><a href="#contactUs" class="nav-item1">CONTACT</a> </li>
                </ul>
            </div>
        </div>

    </nav>

    <header id="header">


        <div class="head">
            <img src="" class="img-fluid" alt="">
        </div>
        <div class="clearfix">
            <div class="arrow">
                <a href="#" class="arrow-right"><i class="fas fa-arrow-left fa-4x stop"></i></a>
            </div>
            <div class="arrow">
                <a href="#" class="arrow-left"><i class="fas fa-arrow-right fa-4x stop"></i></a>
            </div>
        </div>
        <hr class="busbus">

    </header>

    <section id="section" class="container">

        <div class="container">
            <div class="choose clearfix">

                <div id="From" class="fromCity">
                    <select id="cityF" name="cityFrom" class="toolbox">
                        <option value="From">From</option>
                        <option value="roma">Roma</option>
                        <option value="istanbul">Istanbul</option>
                        <option value="paris">Paris</option>
                        <option value="berlin">Berlin</option>
                    </select>
                </div>
                <div id="From" class="fromCity">
                    <select id="cityT" name="cityTo" class="toolbox">
                        <option value="To">TO</option>
                        <option value="roma">Roma</option>
                        <option value="istanbul">Istanbul</option>
                        <option value="paris">Paris</option>
                        <option value="berlin">Berlin</option>
                    </select>
                </div>
                <div class="datePart">
                    <select id="dayW" name="day" class="startDate">
                        <option value="Day">Day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                    </select>
                </div>
                <div class="datePart">
                    <select id="monthW" name="month" class="startDate">
                        <option value="Month">Month</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>

                    </select>
                </div>
                <div class="datePart">
                    <select id="yearW" name="year" class="startDate">
                        <option value="Year">Year</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>

                    </select>
                </div>
            </div>

            <div class="searchBtn">
                <p>SEARCH</p>
            </div>

            <!-- ticket show -->

            <div class="tickets ">

                <div class="informationBus">


                </div>
                <div class="ticketShown clearfix">


                </div>
                <div class="showGenderColor clearfix">
                    
                    <div class="genderIcon">
                     <i class="fas fa-male"></i>
                     <i class="fas fa-female"></i>
                    </div>
                    <div class="chooseGender">
                        <span class="chooseGenderClick">M</span>
                        <span class="chooseGenderClick2">W</span>
                    </div>
                   
                     <span id="BuyTicket" >BUY TICKET</span> 
                </div>
                <div class="buyForTicket">
                    
                    <form class="form" id="customerInfo">
                        
                         <input type="text" class="form-item" id="name" name="name" placeholder="Please write your name" required>
                         <input type="text" class="form-item" id="surname" name="surname" placeholder="Please write your surname" required>
                         <button type="button" class="btnSend" onclick="sendCustomerInfo()">BUY</button>
                             
                    </form>
                    
                </div>
                

            </div>
            <div class="tickets ">

                <div class="informationBus">


                </div>
                <div class="ticketShown clearfix">


                </div>
                <div class="showGenderColor clearfix">
                    
                    <div class="genderIcon">
                     <i class="fas fa-male"></i>
                     <i class="fas fa-female"></i>
                    </div>
                    <div class="chooseGender">
                        <span class="chooseGenderClick">M</span>
                        <span class="chooseGenderClick2">W</span>
                    </div>
                   
                     <span id="BuyTicket">BUY TICKET</span> 
                </div>
                <div class="buyForTicket">
                    
                    <form class="form" id="customerInfo">
                        
                         <input type="text" class="form-item" id="name" name="name" placeholder="Please write your name" required>
                         <input type="text" class="form-item" id="surname" name="surname" placeholder="Please write your surname" required>
                         <button type="button" class="btnSend" onclick="sendCustomerInfo()">BUY</button>
                             
                    </form>
                    
                </div>

            </div>
            <div class="tickets ">

                <div class="informationBus">


                </div>
                <div class="ticketShown clearfix">

                    
                </div>
                <div class="showGenderColor clearfix">
                    
                    <div class="genderIcon">
                     <i class="fas fa-male"></i>
                     <i class="fas fa-female"></i>
                    </div>
                    <div class="chooseGender">
                        <span class="chooseGenderClick">M</span>
                        <span class="chooseGenderClick2">W</span>
                    </div>
                   
                     <span id="BuyTicket">BUY TICKET</span> 
                </div>
                <div class="buyForTicket">
                    
                    <form class="form" id="customerInfo">
                        
                         <input type="text" class="form-item" id="name" name="name" placeholder="Please write your name" required>
                         <input type="text" class="form-item" id="surname" name="surname" placeholder="Please write your surname" required>
                         <button type="button" class="btnSend" onclick="sendCustomerInfo()">BUY</button>
                             
                    </form>
                    
                </div>

            </div>


        </div>
        <!--First Container end-->




    </section>
   
        
     
            
            <div  class="informationBUS">
                
            </div
            
            
       
 


    <footer>

      
        <div id="aboutUs" class="aboutCompany">

            <h1>ABOUT</h1>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ducimus possimus quaerat illum facilis
                laudantium enim excepturi? Odit eos similique deserunt. Aliquid explicabo animi itaque accusantium
                similique quisquam consectetur error.
            </p>

           

        </div>

        <div id="contactUs" class="contactCompany">

            <h1>CONTACT US</h1>
            <div>
                <i class="fas fa-envelope-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-facebook-square"></i>
                <i class="fas fa-phone-square-alt"></i>
            </div>
        </div>
            
           
        <div class="lastPart">
            <p>this website was developed by EbrarAydin info|ebrarayd_6197@hotmail.com</p>
        </div>

    </footer>






    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js"></script>
    <script src="ajax.js"></script>
    <script src="navHeader.js"></script>
    <script src="Ticket.js"></script>

</body>

</html>
