function confirmMessage(){
  return "Your will be redirected to homepage.";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

function displayNav() {
  var x=document.getElementById("mobilenav");
  x.style.display='block';
}
function closemobilenav()
{
  x=document.getElementById("mobilenav");
  x.style.display='none';
}
function frontpage()
{
  var x=document.getElementById("frontpage");
  x.style.display='block';
  x=document.getElementById("productpage");
  x.style.display='none';
  x=document.getElementById("signinsection");
  x.style.display='none';
}
function product()
{
  var x=document.getElementById("frontpage");
  x.style.display='none';
  x=document.getElementById("productpage");
  x.style.display='block';
  x=document.getElementById("endpart");
  x.style.top='240%';
  x=document.getElementById("signinsection");
  x.style.display='none';
}

function signin()
{
  var x=document.getElementById("frontpage");
  x.style.display='none';
  x=document.getElementById("productpage");
  x.style.display='none';
  x=document.getElementById("signinsection");
  x.style.display='block';
  x=document.getElementById("endpart");
  x.style.top='150%';


}
function validatePassword(){
  if(document.getElementById('passwordup').value==document.getElementById('retypepasswordup').value)
  {
    var x =document.getElementById('submitup');
    x.disabled=false;
    x.style.backgroundColor='green';
  }
  else
  {
    var x=document.getElementById('submitup');
    x.disabled=true;
  }
}
