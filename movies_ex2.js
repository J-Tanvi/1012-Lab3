function p01Func() {
  //sets up the first section (first movie)
  document.getElementById("description").innerHTML="<p>A psychologist is sent to a space station orbiting a planet called Solaris to investigate the death of a doctor and the mental problems of cosmonauts on the station</p>";

  document.getElementById("poster").setAttribute("src", "images/solaris/solaris_poster.jpg");
  document.getElementById("actor").setAttribute("src", "images/solaris/solaris_actor.jpg");
  document.getElementById("director").setAttribute("src", "images/solaris/solaris_director.jpg");
  
  document.getElementById("poster").style.display = "none";
  document.getElementById("actor").style.display = "none";
  document.getElementById("director").style.display = "none";

  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;

}
