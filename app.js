/****************************************************
*                The Break Statement                *
****************************************************/
document.getElementById("typeof-demo").innerHTML =
  typeof "john" + "<br>" +
  typeof 3.14 + "<br>" +
  typeof NaN + "<br>" +
  typeof false + "<br>" +
  typeof [1,2,3,4] + "<br>" +
  typeof {name:'john', age:34} + "<br>" +
  typeof new Date() + "<br>" +
  typeof function () {} + "<br>" +
  typeof myCar + "<br>" +
  typeof null;

/****************************************************
*              The constructor Property             *
****************************************************/
document.getElementById("constructor-prop").innerHTML =
    "john".constructor + "<br>" +
    (3.14).constructor + "<br>" +
    false.constructor + "<br>" +
    [1,2,3,4].constructor + "<br>" +
    {name:'john', age:34}.constructor + "<br>" +
    new Date().constructor + "<br>" +
    function () {}.constructor;

/****************************************************
*            Converting Numbers to Strings          *
****************************************************/
var x = 123;
document.getElementById("num-to-string").innerHTML =
  String(x) + "<br>" +
  String(123) + "<br>" +
  String(100 + 23);

  var x = 321;
  document.getElementById("num-to").innerHTML =
      x.toString() + "<br>" +
     (321).toString() + "<br>" +
     (300 + 21).toString();
