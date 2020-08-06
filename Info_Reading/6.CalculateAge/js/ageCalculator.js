function ageCalculate() {
    var dateCurrent = new Date();
    var dob= document.getElementById("dob").value;
    var dateBirth=new Date(dob);
    if (dob) {
        var Present = dateCurrent.getFullYear(); //getting current year
        var Birth = dateBirth.getFullYear(); //getting dob year
        var ageFinal = (Present - Birth )* 7;           //calculating age 
       

       if(ageFinal > 0) {
        document.write("Wow you growing up !!! You are now " + ageFinal + " years old");
        document.body.style.backgroundImage = "url('../image/ageGrowing.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.textAlign = "center";
        document.body.style.fontSize = "6vh";
        document.body.style.color = "white";
        }
        else if(ageFinal < 0) {
            alert("Invalid date format. Please Input in (dd/mm/yyyy) format!");
            return false;
        }
        else {
            if(ageFinal === 0) {
            document.write("Ohh!! you just entered this new world WELCOME");  
            document.body.style.backgroundImage = "url('../image/age0.jpg')";
            document.body.style.backgroundSize = "cover";
            document.body.style.textAlign = "center";
            document.body.style.fontSize = "6vh";
            document.body.style.color = "white";
            }
        }
        
        return true;
    } else {
        alert("Invalid date format. Please Input in (dd/mm/yyyy) format!");
        return false;
    }
}