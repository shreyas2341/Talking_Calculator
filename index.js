console.log("connected");

var solution;
var num='';
var disp=document.getElementsByClassName("disp_text")[0];

function num1(){
    num=num+"1";-
    console.log(num);
    disp.innerHTML=`${num}`
    speak("one")
    
}
function num2(){
    num=num+"2";
    console.log(num);
    disp.innerHTML=`${num}`
    speak("two")
    
}
function num3(){
    num=num+"3";
    console.log(num);
    disp.innerHTML=`${num}`
    speak("three")
    
}
function num4(){
    num=num+"4";
    console.log(num);
    disp.innerHTML=`${num}`
    speak("four")
}
function num5(){
    num=num+"5";
    console.log(num);
    disp.innerHTML=`${num}`
    speak("five")
    
}
function num6(){
    num=num+"6";
    console.log(num);
    disp.innerHTML=`${num}`;
    speak("six");
    
}
function num7(){
    num=num+"7";
    console.log(num);
    disp.innerHTML=`${num}`
    speak("seven")
    
}
function num8(){
    num=num+"8";
    console.log(num);
    disp.innerHTML=`${num}`
    speak("eight")
    
}
function num9(){
    num=num+"9";
    console.log(num);
    disp.innerHTML=`${num}`
    speak("nine")
    
}
function num0(){
    num=num+"0";
    console.log(num);
    disp.innerHTML=`${num}`
    speak("zero")
    
}
function point(){
    num=num+".";
    console.log(num);
    disp.innerHTML=`${num}`;
    speak("point")
    
}
function numplus(){
    num=num+"+";
    console.log(num);
    disp.innerHTML=`${num}`
    speak("plus")
    
}
function numsub(){
    num=num+"-";
    console.log(num);
    disp.innerHTML=`${num}`;
    speak("minus")
    
}
function nummul(){
    num=num+"*";
    console.log(num);
    disp.innerHTML=`${num}`;
    speak("multiply")
    
}
function numdiv(){
    num=num+"/";
    console.log(num);
    disp.innerHTML=`${num}`
    speak("divide")
}
function equal(){
    solution=eval(num);
    console.log("Solution = "+solution);
    disp.innerHTML=`${solution}`
    num=``;
    speak("equal to "+solution)
}
function clr(){
    num='';
    console.log("num="+num);
    disp.innerHTML=`${num}`
    speak("clear")
}
function speak(x)
{
let speech = new SpeechSynthesisUtterance();
speech.lang = "en-US";
                
speech.text = x;
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;
                
window.speechSynthesis.speak(speech);
}  


