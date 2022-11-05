alert ("hi");
var math  = +prompt ('enter your math number');
var english = +prompt ('enter your english number');
var urdu = +prompt ('enter your urdu number');
var science = +prompt ('enter your science number');
var pakst = +prompt ('enter your pakst number');

var totalnum = (math+english+urdu+science+pakst);
var percantage = ((totalnum/500)*100);



if(percantage >90){
    console.log("A grade");

} else if(percantage >80){
    console.log("B grade");

} else if(percantage >70){
    console.log("C grade");

} else if(percantage >60){
    console.log("D grade");

}else{
    console.log("you are failed");
}

var age = +prompt("please enter your age");
var studentcard = prompt("have you student card?");
 if(studentcard == ("yes")){
    var studentcard = true;
 }
 else{var studentcard = false;}


if(age == 18 || studentcard     == true){
    console.log("allowed");
}
else{
    console.log("not allowed")
}