function validateForm() {
    let x = document.forms["signup"]["firstname"].value;
    if (x == "") {
      alert("First Name must be filled out");
      return false;
    }
   
   let y = document.forms["signup"]["lastname"].value;
    if (y == "") {
      alert("Last Name must be filled out");
      return false;
    }
   
   let z = document.forms["signup"]["password"].value;
    if (z == "") {
      alert("Password must be filled out");
      return false;
    }
   
   let a = document.forms["signup"]["cpassword"].value;
    if (a == "") {
      alert("Confirm Password must be filled out");
      return false;
    }
   
    var newPassword = document.forms["signup"]["password"].value;
      var minNumberofChars = 6;
      
      var regularExpression  = new RegExp("^[a-zA-Z][\w\s-]*(?=.*[0-9])(?=.*[A-Z])");
      
      if(newPassword.length < minNumberofChars){
      alert("Password must be atleast 6 characters long!");
          return false;
      }
      if(!regularExpression.test(newPassword)) {
          alert("Password should start with alphabet have atleast one number and one Upper case Letter");
          return false;
      }
   
      if (newPassword != newCpassword) {
              alert("Passwords do not match.");
              return false;
          }
   
      var regularExpression  = new RegExp("^[a-zA-Z][\w\s-]*(?=.{5,})");
     
      if(!regularExpression.test(newPassword)) {
          alert("Username must start with an alphabet, must have at least 6 characters.");
          return false;
          }
   
     alert("Success");
    
   }