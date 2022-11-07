$(function () {
    //regular expression of only letters
    let alphaRegex = /^[a-zA-Z]*$/;
  

    //Creates submit button
      $( ":submit" ).css( "background", "yellow" );
  
  
   
  // Function to submit form. Takes first and last name and says thank you
  
      $( ":submit" ).click( function(e) {
  
        e.preventDefualt; //double check syntax... overrides default html input submit. 
      
        console.log('did we click the bbutton? yes!') ; 
  
        let greetingOutput = 'Thank You ';
        greetingOutput += $("#fname").val();
        greetingOutput += $("#lname").val();
        $("#formOutput").text(greetingOutput); //I think .
      
      }); 
  
  
  
   
  
    console.log("user name: " + $("#noSpaces").val());
  
    // end of doc ready f/n
  });