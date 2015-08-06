var cookies = 0;

var stage1 =  10;
var stage2 =  20;
var stage3 =  30;

function clickt(){
  cookies++;
  document.getElementById("counter").innerHTML = "Cookies: "+cookies;
  //Rainbow cookies
  switch (cookies) {
    case stage1:

        document.getElementById("ac_1").innerHTML = "- Unlockt cookie monster "+stage1;
        break;
    case stage2:
          document.getElementById("ac_2").innerHTML = "- Found a big Hunny pot "+ stage2;
          document.body.style.backgroundColor = "orange";
          break;
    case stage3:
              document.getElementById("ac_3").innerHTML = "- You won! " + stage3;
            document.body.style.backgroundColor = "#18C518";
            break;
  }

}
