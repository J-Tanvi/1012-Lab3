function p01Func() {
	//descriptors for the movies
    document.getElementById("description").innerHTML="<p>A psychologist is sent to a space station orbiting a planet called Solaris to investigate the death of a doctor and the mental problems of cosmonauts on the station.</p>";
  
    // get imgs and set its attribue src to its respective images 
    document.getElementById("poster").setAttribute("src", "images/solaris/solaris_poster.jpg");
    document.getElementById("actors").setAttribute("src", "images/solaris/solaris_actors.jpg");
    document.getElementById("director").setAttribute("src", "images/solaris/solaris_director.jpg");
    
    // get imgs and set the display property of its style to none.
    document.getElementById("poster").style.display = "none";
    document.getElementById("actors").style.display = "none";
    document.getElementById("director").style.display = "none";
   
    //unchecks all the checkboxs
    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
  
}

 //sets up the elements for the second movie
function p02Func() {
	//descriptors for the movies
    document.getElementById("description").innerHTML="<p>A mother joins an underground band of vigilantes to try to rescue her daughter from a state-run institution.</p>";
  
    // get imgs and set its attribue src to its respective images 
    document.getElementById("poster").setAttribute("src", "images/nightraiders/night_raiders_poster.jpg");
    document.getElementById("actors").setAttribute("src", "images/nightraiders/night_raiders_actors.jpg");
    document.getElementById("director").setAttribute("src", "images/nightraiders/night_raiders_director.jpg");
    
    // get imgs and set the display property of its style to none.
    document.getElementById("poster").style.display = "none";
    document.getElementById("actors").style.display = "none";
    document.getElementById("director").style.display = "none";
   
    //unchecks all the checkboxs
    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
  
}   

//the following three fuctions will check and uncheck the boxes and display accordingly
function checkUncheck1(){
    if (document.getElementById("check1").checked==true) {
       document.getElementById("poster").style.display="inline";
       // set the display property of its style to "inline"	 	 
    }
    else {
       document.getElementById("poster").style.display="none"; 
       // set the display property of its style to "none"	 
    }
}
  
function checkUncheck2(){
    if (document.getElementById("check2").checked==true) {
       document.getElementById("director").style.display="inline";
       // set the display property of its style to "inline"	 
    }
    else {
        document.getElementById("director").style.display="none";
       // set the display property of its style to "none"	   
    }
}
  
function checkUncheck3(){
    if (document.getElementById("check3").checked==true) {
       document.getElementById("actors").style.display="inline";
       // set the display property of its style to "inline"	 
    }
    else {
       document.getElementById("actors").style.display="none";
       // set the display property of its style to "none"	   
    }
}

//makes the director's image size 2x larger
function zoomIn(){
    document.getElementById("director").style.width="200%";
}

//makes the director's image size normal 
function zoomOut(){
    document.getElementById("director").style.width="100%";
}
  