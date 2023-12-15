var clientButton = document.getElementById('client-button');
var applicationHeader=document.getElementById('application-header')
clientButton.onclick = function() {
var clientSection = document.getElementById('client-section');

if(clientSection.style.display == "none"){
  applicationHeader.style.display="none";
  clientSection.style.display = "block";
  clientButton.innerText = "Close client section"
}else {
  applicationHeader.style.display="block";

  clientButton.innerText ="add client";

  clientSection.style.display = "none";
  

  
    
  
}


}​;​