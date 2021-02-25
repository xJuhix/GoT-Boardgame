
if (document.location.href.split("?")[1]) 
{
document.getElementsByClassName("modal-subheader")[0].innerHTML = '<img id="winnerImg" src="./images/' + document.location.href.split("?")[1] + '.png" />';


}else{
  window.location.replace('index.html');
}


