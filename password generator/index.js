let password = document.getElementById("password-btn")
let input = document.getElementById("input")
password.addEventListener('click',function(){
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let generatepassword = ""
    
    for(let i=0 ; i< 15; i++){
         /*  let randomNumber =  Math.floor( Math.random()*14) + 1 */ 
         // common mistake this will only pick up the characters upto first 14 characters from characters variable never the random characters that you need 

         //better approach 
         let randomNumber = Math.floor(Math.random() * characters.length);
         //will help to select the random character 
         generatepassword += characters[randomNumber]
        
    }
    input.value = generatepassword
     console.log(generatepassword)
});
