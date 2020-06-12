var robot={
myDataFacebook:3,
myToken:[
{nama:"your ID",token:"your Token"}
],
myBot:function(almt,prop){var a=UrlFetchApp.fetch(almt,{muteHttpExceptions:true,method:"post",payload:prop});var b=Utilities.jsonParse(a.getContentText());return b},
aduk:function(naon){var a=naon.sort(function(){return 0.5-Math.random()});a.reverse();a=a.sort(function(){return 0.5-Math.random()});return a}
};

var urlGraph="/graph.facebook.com";

function likr(){
robot.aing=robot.aduk(robot.myToken)[0].token;
var p=robot.myBot("https:/"+urlGraph+"/me",{
method:"get",
fields:"id,home.fields(id,likes,comments.fields(id,user_likes)).limit("+robot.myDataFacebook+")",
access_token:robot.aing
});
if(p&&p.id&&p.home&&p.home.data&&p.home.data.length!=0){
robot.uidSekarang=p.id;

for(x in p.home.data){
var c="y",d=p.home.data[x];

if(d.likes&&d.likes.data&&d.likes.data.length!=0){
for(y in d.likes.data){
if(d.likes.data[y].id&&d.likes.data[y].id==robot.uidSekarang){
c="n";break;
}
}
}

if(c=="y"){
robot.myBot("https:/"+urlGraph+"/"+d.id+"/likes",{
method:"post",
access_token:robot.aing
});
}
}
}
}