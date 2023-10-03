
$("#a1").click(function(){

   $("#BS1").css("display" , "block")
   $("#BS2").css("display" , "none")
   $("#BS3").css("display" , "none")
   $("#BS4").css("display" , "none")





}
)
$("#a2").click(function(){

   $("#BS1").css("display" , "none")
   $("#BS2").css("display" , "block")
   $("#BS3").css("display" , "none")
   $("#BS4").css("display" , "none")

}
)
$("#a3").click(function(){

   $("#BS1").css("display" , "none")
   $("#BS2").css("display" , "none")
   $("#BS3").css("display" , "block")
   $("#BS4").css("display" , "none")

}
)
$("#a4").click(function(){

   $("#BS1").css("display" , "none")
   $("#BS2").css("display" , "none")
   $("#BS3").css("display" , "none")
   $("#BS4").css("display" , "block")

}
)







document.getElementById("a1").addEventListener("click" ,function(){

document.getElementById("a1").classList.add("active")
document.getElementById("a2").classList.remove("active")
document.getElementById("a3").classList.remove("active")
document.getElementById("a4").classList.remove("active")

})




document.getElementById("a2").addEventListener("click" ,function(){

   document.getElementById("a1").classList.remove("active")
   document.getElementById("a2").classList.add("active")
   document.getElementById("a3").classList.remove("active")
   document.getElementById("a4").classList.remove("active")
   
   })
   document.getElementById("a3").addEventListener("click" ,function(){

      document.getElementById("a1").classList.remove("active")
      document.getElementById("a2").classList.remove("active")
      document.getElementById("a3").classList.add("active")
      document.getElementById("a4").classList.remove("active")
      
      })
      document.getElementById("a4").addEventListener("click" ,function(){

         document.getElementById("a1").classList.remove("active")
         document.getElementById("a2").classList.remove("active")
         document.getElementById("a3").classList.remove("active")
         document.getElementById("a4").classList.add("active")
         
         })



