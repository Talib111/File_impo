
   /*
   <!--remove-->
   <script type="text/javascript" src="client.js"></script>
   <!--remove-->
   */
  
  
   
   function small_view()
   {


      

       var id_all = document.querySelectorAll('*[id]');
       var len = id_all.length;


       var wid;
       var lef;
       var fon;
       var hei;
       var top;
       var wid2;
       var lef2;
       var fon2;
       var hei2;
       var top2;



       for(var i=0;i<=len-1;i++)
         {  

          //getting id at variable
        id_1 = id_all[i].id;
        id_2 = document.getElementById(id_1);

        //getting width 
        wid = window.getComputedStyle(id_2,null).getPropertyValue('width');
        //getting left
        lef = window.getComputedStyle(id_2,null).getPropertyValue('left');
        //getting font
        fon = window.getComputedStyle(id_2,null).getPropertyValue('font-size');
        //getting heigt
        hei = window.getComputedStyle(id_2,null).getPropertyValue('height');
        //getting top
        top = window.getComputedStyle(id_2,null).getPropertyValue('top');


           // width changing to integer
           wid2 = parseFloat(wid);
           // left changing to integer
           lef2 = parseFloat(lef);
           // font changing to integer
           fon2 = parseFloat(fon);
           // height changing to integer
           hei2 = parseFloat(hei);
           // height changing to integer
           top2 = parseFloat(top);

           //dividing
           div = 100/400;

           //changing width into  % value
           per_wid = div * wid2;
           //changing left into  % value
           per_lef = div * lef2;
           //changing font into  % value
           per_fon = div * fon2;
           //changing font into  % value
           per_hei = div * hei2;
           //changing font into  % value
           per_top = div * top2;


             if(fon2==16)
             {

             id_2.style.width=per_wid+'vw';
             id_2.style.left=per_lef+'vw';
             id_2.style.height=per_hei+'vw';
             id_2.style.top=per_top+'vw';

             }
             
             else {
                  id_2.style.width=per_wid+'vw';
             id_2.style.left=per_lef+'vw';
             id_2.style.fontSize=per_fon+'vw';
             id_2.style.height=per_hei+'vw';
             id_2.style.top=per_top+'vw';
             }
      


        }


             var fin_file = document.documentElement.innerHTML;
            // var jsn = JSON.parse(fin_file);//changing to json
            // var jsn2 = JSON.stringify(jsn);//changin to string

             console.log(fin_file);
             
             goajax(fin_file);


  }





  function big_view()
   {


       

       var id_all = document.querySelectorAll('*[id]');
       var len = id_all.length;


       var wid;
       var lef;
       var fon;
       var hei;
       var top;
       var wid2;
       var lef2;
       var fon2;
       var hei2;
       var top2;



       for(var i=0;i<=len-1;i++)
         {  

          //getting id at variable
        id_1 = id_all[i].id;
        id_2 = document.getElementById(id_1);

        //getting width 
        wid = window.getComputedStyle(id_2,null).getPropertyValue('width');
        //getting left
        lef = window.getComputedStyle(id_2,null).getPropertyValue('left');
        //getting font
        fon = window.getComputedStyle(id_2,null).getPropertyValue('font-size');
        //getting heigt
        hei = window.getComputedStyle(id_2,null).getPropertyValue('height');
        //getting top
        top = window.getComputedStyle(id_2,null).getPropertyValue('top');


           // width changing to integer
           wid2 = parseFloat(wid);
           // left changing to integer
           lef2 = parseFloat(lef);
           // font changing to integer
           fon2 = parseFloat(fon);
           // height changing to integer
           hei2 = parseFloat(hei);
           // height changing to integer
           top2 = parseFloat(top);

           //dividing
           div = 100/1440;

           //changing width into  % value
           per_wid = div * wid2;
           //changing left into  % value
           per_lef = div * lef2;
           //changing font into  % value
           per_fon = div * fon2;
           //changing font into  % value
           per_hei = div * hei2;
           //changing font into  % value
           per_top = div * top2;


             if(fon2==16)
             {

             id_2.style.width=per_wid+'vw';
             id_2.style.left=per_lef+'vw';
             id_2.style.height=per_hei+'vw';
             id_2.style.top=per_top+'vw';

             }
             
             else {
                  id_2.style.width=per_wid+'vw';
             id_2.style.left=per_lef+'vw';
             id_2.style.fontSize=per_fon+'vw';
             id_2.style.height=per_hei+'vw';
             id_2.style.top=per_top+'vw';
             }
      


        }


             var fin_file = document.documentElement.innerHTML;
            // var jsn = JSON.parse(fin_file);//changing to json
            // var jsn2 = JSON.stringify(jsn);//changin to string

             console.log(fin_file);
             
             goajax(fin_file);


  }
   






    

    function goajax(filee)
     {
          var xhttp = new XMLHttpRequest();

          //state change callback
          xhttp.onreadystatechange = function(){

            if(this.readyState == 4 && this.status == 200){
              document.getElementById('yum').innerHTML='workedd_broo';
            }
          };

          //open the connection
          xhttp.open("POST","http://localhost:8080", true);

          //type of data to send
          xhttp.setRequestHeader("Content-Type","application/json");
                


          //send the data
          xhttp.send(filee);
          console.log(filee);
      
     }  
