console.log("hello")


var checker = document.getElementById('checkme');
var sendbtn = document.getElementById('sendNewSms');
// when unchecked or checked, run the function
checker.onchange = function(){
if(this.checked){
   sendbtn.disabled = false;
} else {
   sendbtn.disabled = true;
}

}