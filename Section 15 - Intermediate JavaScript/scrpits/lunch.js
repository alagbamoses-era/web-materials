
var name  =  ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
   

   var randomPerson = Math.random() * names.length;
   var randomPersonIndex = Math.floor(randomPerson);
   var randomPersonName = name[randomPersonIndex];
    
    
    console.log(randomPersonName + " is going to buy lunch today!");
    


/******Don't change the code below*******/    
}

whosPaying(name)