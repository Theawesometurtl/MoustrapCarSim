"use strict";(self.webpackChunkmousetrapCarSimulation=self.webpackChunkmousetrapCarSimulation||[]).push([[590],{560:(t,s,i)=>{i.d(s,{k:()=>W,O:()=>v});var e=function(){function t(t,s,i,e){this.mousetrapCar=e,this.position=t,this.armDimensions=[s,10],this.armRotation=i}return t.prototype.update=function(t,s,i){this.position=t,this.armDimensions=[s,Math.pow(s/2,.3)],this.armRotation=i},t.prototype.getStringAttachmentCoord=function(){return[this.position[0]+Math.cos(this.armRotation)*this.armDimensions[0],this.position[1]+Math.sin(this.armRotation)*this.armDimensions[0]]},t.prototype.draw=function(){v.strokeStyle="black",v.fillStyle="gray",v.lineWidth=this.armDimensions[1];var t=[this.position[0]-this.armDimensions[1]/2*Math.cos(this.armRotation),this.position[1]-this.armDimensions[1]/2*Math.sin(this.armRotation)],s=[this.position[0]+this.armDimensions[1]/2*Math.cos(this.armRotation),this.position[1]+this.armDimensions[1]/2*Math.sin(this.armRotation)],i=[s[0]+Math.cos(this.armRotation)*this.armDimensions[0],s[1]+Math.sin(this.armRotation)*this.armDimensions[0]],e=[t[0]+Math.cos(this.armRotation)*this.armDimensions[0],t[1]+Math.sin(this.armRotation)*this.armDimensions[0]];t=this.mousetrapCar.rotate(t),s=this.mousetrapCar.rotate(s),i=this.mousetrapCar.rotate(i),e=this.mousetrapCar.rotate(e),v.beginPath(),v.moveTo.apply(v,t),v.lineTo.apply(v,s),v.lineTo.apply(v,i),v.lineTo.apply(v,e),v.fill(),v.stroke()},t}(),o=function(t,s,i){if(i||2===arguments.length)for(var e,o=0,a=s.length;o<a;o++)!e&&o in s||(e||(e=Array.prototype.slice.call(s,0,o)),e[o]=s[o]);return t.concat(e||Array.prototype.slice.call(s))},a=function(){function t(t,s,i,e){this.mousetrapCar=e,this.position=t,this.radius=s,this.axleRadius=i}return t.prototype.update=function(t,s){this.position=t,this.radius=s},t.prototype.draw=function(t,s){void 0===t&&(t="yellow"),void 0===s&&(s=0),v.fillStyle=t,v.lineWidth=s,v.strokeStyle="#ffffff";var i=this.mousetrapCar.rotate(this.position);v.beginPath(),v.arc.apply(v,o(o([],i,!1),[this.radius,0,2*Math.PI,!1],!1)),v.fill()},t}(),n=function(){function t(t,s,i,e,o){this.mousetrapCar=o,this.position=t,this.chassisDimensions=[s,10],this.frontWheelRadius=i,this.backWheelRadius=e,this.chassisAxleCoords=this.getChassisAxleCoords(e,i)}return t.prototype.update=function(t,s,i,e){this.position=t,this.chassisDimensions=[s,s/50],this.frontWheelRadius=i,this.backWheelRadius=e,this.chassisAxleCoords=this.getChassisAxleCoords(e,i)},t.prototype.draw=function(){v.strokeStyle="gray",v.fillStyle="gray";var t=[this.chassisAxleCoords[0][0],this.chassisAxleCoords[0][1]+this.chassisDimensions[1]/2],s=[this.chassisAxleCoords[0][0],this.chassisAxleCoords[0][1]-this.chassisDimensions[1]/2],i=[this.chassisAxleCoords[1][0],this.chassisAxleCoords[1][1]-this.chassisDimensions[1]/2],e=[this.chassisAxleCoords[1][0],this.chassisAxleCoords[1][1]+this.chassisDimensions[1]/2];t=this.mousetrapCar.rotate(t),s=this.mousetrapCar.rotate(s),i=this.mousetrapCar.rotate(i),e=this.mousetrapCar.rotate(e),v.beginPath(),v.moveTo.apply(v,t),v.lineTo.apply(v,s),v.lineTo.apply(v,i),v.lineTo.apply(v,e),v.stroke(),v.fill()},t.prototype.getChassisAxleCoords=function(t,s){var i=t-s,e=Math.sqrt(Math.pow(this.chassisDimensions[0],2)-Math.pow(i,2));return[[this.position[0]-e/2,this.position[1]],[this.position[0]+e/2,this.position[1]+i]]},t.prototype.getChassisAngle=function(t,s){var i=t-s;return Math.asin(i/this.chassisDimensions[0])},t}(),h=function(){function t(){}return t.prototype.draw=function(){v.fillStyle="beige",v.fillRect(0,t.groundLevel,W.width,W.height),v.fillStyle="green",v.fillRect(0,t.groundLevel-t.endDimensions[1],t.startDimensions[0],t.startDimensions[1]),v.fillStyle="red",v.fillRect(W.width+t.endPosition,t.groundLevel-t.endDimensions[1],t.endDimensions[0],t.endDimensions[1])},t.cmToPixels=function(t){var s,i;return"complete"===document.readyState?(s=W.width,i=Number(R.value)):(s=500,i=500),t*((s-this.startDimensions[0]-this.endDimensions[0])/(100*i))},t.startDimensions=[50,50],t.endDimensions=[50,50],t.startPosition=0,t.endPosition=-50,t}(),r=function(){function t(t){this.mouseTrapCarAngle=0,this.chassisLength=h.cmToPixels(t),this.chassisPostion=[300,400],this.armLength=0,this.armAngle=0,this.mousetrapPosition=function(t,s,i){if(i||2===arguments.length)for(var e,o=0,a=s.length;o<a;o++)!e&&o in s||(e||(e=Array.prototype.slice.call(s,0,o)),e[o]=s[o]);return t.concat(e||Array.prototype.slice.call(s))}([],this.chassisPostion,!0),this.mousetrapAngle=450*Math.PI/360,this.frontWheelRadius=30,this.backWheelRadius=100,this.frontWheel=new a([this.chassisPostion[0]+this.chassisLength/2,this.chassisPostion[1]+this.backWheelRadius-this.frontWheelRadius],this.frontWheelRadius,0,this),this.backWheel=new a([this.chassisPostion[0]-this.chassisLength/2,this.chassisPostion[1]],this.backWheelRadius,0,this),this.arm=new e(this.mousetrapPosition,300,this.mousetrapAngle,this),this.chassis=new n(this.chassisPostion,this.chassisLength,this.frontWheelRadius,this.backWheelRadius,this)}return t.prototype.update=function(t){this.mousetrapPosition=[t[0],t[1]-this.backWheelRadius],this.frontWheel.update([this.mousetrapPosition[0]+this.chassisLength/2,this.mousetrapPosition[1]+this.backWheelRadius-this.frontWheelRadius],this.frontWheelRadius),this.backWheel.update([this.mousetrapPosition[0]-this.chassisLength/2,this.mousetrapPosition[1]],this.backWheelRadius),this.chassis.update(this.mousetrapPosition,this.chassisLength,this.frontWheelRadius,this.backWheelRadius),this.arm.update([t[0],t[1]-(this.frontWheelRadius+this.backWheelRadius)/2],this.armLength,this.mousetrapAngle+this.chassis.getChassisAngle(this.backWheelRadius,this.frontWheelRadius))},t.prototype.draw=function(t){void 0===t&&(t=5),this.arm.draw(),this.backWheel.draw(),this.frontWheel.draw(),this.chassis.draw(),v.lineWidth=2;var s=this.rotate(this.arm.getStringAttachmentCoord()),i=this.rotate(this.chassis.getChassisAxleCoords(this.backWheelRadius,this.frontWheelRadius)[0]);v.beginPath(),v.moveTo.apply(v,s),v.lineTo.apply(v,i),v.stroke()},t.prototype.rotate=function(t){if(0!=this.mousetrapAngle){var s=t[0],i=t[1],e=this.mousetrapPosition[0],o=this.mousetrapPosition[1],a=Math.cos(this.mouseTrapCarAngle),n=Math.sin(this.mouseTrapCarAngle);return[a*(s-e)+n*(i-o)+e,a*(i-o)-n*(s-e)+o]}return t},t}(),l=new r(10),m=new r(10),u=new h,c=100,d=1e3*c/40,p=(document.getElementById("formTotalMass"),document.getElementById("formDriveWheelDiameter")),f=(document.getElementById("formAxleDiameter"),document.getElementById("formArmLength")),g=document.getElementById("formFrontWheelDiameter"),y=document.getElementById("formChassisLength"),R=document.getElementById("formTrackDistance"),C=document.getElementById("formLapTime");document.getElementById("formMousetrapForce");var W=document.querySelector("canvas"),v=W.getContext("2d");W.width=window.innerWidth/1.1,W.height=window.innerHeight/1.3,document.getElementById("formTotalMass").value,document.getElementById("formDriveWheelDiameter").value,document.getElementById("formAxleDiameter").value,document.getElementById("formArmLength").value,setInterval((function(){c=Number(C.value),d=1e3*c/40,v.clearRect(0,0,W.width,W.height),h.groundLevel=W.height-70,m.armLength=10*Number(f.value),m.chassisLength=10*Number(y.value),m.frontWheelRadius=Number(g.value)/2*10,m.backWheelRadius=Number(p.value)/2*10,m.mousetrapAngle+=Math.PI/d,m.update([W.width-m.chassisLength/2-100,200]),m.draw(),u.draw(),l.armLength=h.cmToPixels(Number(f.value)),l.chassisLength=h.cmToPixels(Number(y.value)),l.frontWheelRadius=h.cmToPixels(Number(g.value)/2),l.backWheelRadius=h.cmToPixels(Number(p.value)/2),l.mousetrapAngle+=Math.PI/d,l.update([l.mousetrapPosition[0]+(W.width+h.endPosition)/d,h.groundLevel]),l.draw(),l.mousetrapAngle>2*Math.PI&&(l.mousetrapAngle=Math.PI,l.update([l.chassisLength/2+l.backWheelRadius,h.groundLevel]),m.mousetrapAngle=Math.PI,0)}),40)}},t=>{t(t.s=560)}]);