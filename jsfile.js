/* main fucntion */
window.onload=function  () {
  var div=document.getElementsByTagName("div")[0];
  drawMark (div);
  /*get current time*/
  var time=new Date();
  var ha=time.getHours();
  var ma=time.getMinutes();
  var sa=time.getSeconds();
  /*draw current time*/
  var hours=drawPoint (div,120,120,60,5,"#111",ha*30+ma*6/12-90);
  var mins=drawPoint (div,120,120,80,4,"#555",ma*6-90);
  var seds=drawPoint (div,120,120,100,3,"#999",sa*6-90);
  /*make the clock move*/
  setInterval(function  () {
    var time=new Date();
    var ha=time.getHours();
    var ma=time.getMinutes();
    var sa=time.getSeconds();
    setCss3(hours,{transform:"rotate("+(ha*30+ma*6/12-90)+"deg)"})
    setCss3(mins,{transform:"rotate("+(ma*6-90)+"deg)"})
    setCss3(seds,{transform:"rotate("+(sa*6-90)+"deg)"})
  },1000)
}

/* draw clock */
function drawMark (obj) {
  for (var i=0; i<60; i++) {
    var widths=3;
    var heights=6;
    if(i%5==0){
      widths=5
      heights=10;
    }
    var div=document.createElement("div");
    div.style.cssText="width:"+widths+"px;height:"+heights+"px;background:#111;position:absolute;top:0;left:120px;"
    setCss3(div,{transform:"rotate("+i*6+"deg)","transform-origin":"0px 120px"})
    obj.appendChild(div);
  }
}
/* draw the hands of a clock
*  obj: the clock
*  startx : x axle
*  starty: y  axle
*  width: the hand width
*  height: the hand height
*  color: the hand color
*  angle: the hand angle relative to 12pm
*/
function drawPoint (obj,startx,starty,width,height,color,angle) {
  var div=document.createElement("div");
  div.style.cssText="width:"+width+"px;height:"+height+"px;position:absolute;top:"+starty+"px;left:"+startx+"px;background:"+color+";";
  setCss3(div,{transform:"rotate("+angle+"deg)","transform-origin":"0px 0px"})
  obj.appendChild(div);
  return div;
}