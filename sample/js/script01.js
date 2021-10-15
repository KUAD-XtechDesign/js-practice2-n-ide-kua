$(function(){

　 function sayhello(){
    $("content").text("こんにちは!")
   }

 $("#button01").on("click",function(){
     sayhello();
 })
})