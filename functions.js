function Age(){
  var diY0 = document.getElementById('age').value;
  var w0 = new Date();
  var l0 = w0.getFullYear();
  var yid0 = l0-diY0;
  document.getElementById("year").value=yid0;

}
function Year(){
    var diy1 = document.getElementById("year").value;
    var w1 = new Date();
    var l1 = w1.getFullYear();
    var yid1 = l1-diy1;
    document.getElementById("age").value=yid1;
}


