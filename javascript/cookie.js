var cookies = 0;
var stage1 =  9;
var stage2 =  19;
var stage3 =  29;

function xd (){
        document.getElementById("result").innerHTML = "Money: $" + localStorage.clickcount ;
          document.body.style.backgroundColor = "orange";
}
function clickt(){



    cookies++;
  if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
          localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
          localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "Money: $" + localStorage.clickcount ;
  } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }


  document.getElementById("counter").innerHTML = "Cookies: $"+cookies;


  //Rainbow cookies



}
