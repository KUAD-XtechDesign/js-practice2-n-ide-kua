$(function(){

　 function sayHello(){
    $("content").text("こんにちは!");
   }

   function saySomething(txt){
    $("content").text(txt);
   }

   function samTwo(arg1,arg2){
    $("content").text(txt);
   }

 $("#button01").on("click",function(){
     sayHello();
 })

 $("#button02").on("click",function(){
    saySomething();
 })

 $("#button03").on("click",function(){
    samTwo(txt1,txt2);
 })

 $("#button04").on("click",function(){
    samTwo(num1,num2);
 })

 $("#button05").on("click",function(){ 
    samTwo(txt1,txt2);
    samTwo(num1,num2);
 })


})