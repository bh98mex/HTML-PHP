
    var checkindate = "";
    var checkoutdate = "";
    var data1 = new Date();
    var data2 = new Date();
    var nrOfBeds = "";
    var result = "";
    var displayfirst = "";
    var displaytwo = "";
    var table = "";
    var apt1bed = ["Superior One Bedroom", "Luxury One Bedroom River View", "Deluxe One Bedroom Tower Bridge View"];
    var price1bed = [130, 150, 180];
    var apt2bed = ["Superior Two Bedroom", "Luxury Two Bedroom River View", "Deluxe Two Bedroom Tower Bridge View"];
    var price2bed = [200, 240, 300];
    var apt3bed = ["Superior Three Bedroom", "Luxury Three Bedroom River View", "Deluxe Three Bedroom Tower Bridge View"];
    var price3bed = [300, 350, 420];
    var apt4bed = ["Superior Four Bedroom", "Luxury Four Bedroom River View", "Deluxe Four Bedroom Tower Bridge View"];
    var price4bed = [450, 520, 600]
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    var oneDay = 24*60*60*1000;
    if(dd<10) {
    dd = '0'+dd
    } 
    if(mm<10) {
    mm = '0'+mm
    }
    today = today = mm + '/' + dd + '/' + yyyy;
    
    function reservation(){
        
        checkindate = document.calendar.checkindate.value;
        checkoutdate = document.calendar.checkoutdate.value;
        nrOfBeds = document.calendar.nrofBeds.value;
        displayRoom = "";
        
        data1 = Date.parse(checkindate);
        data2 = Date.parse(checkoutdate);
        
        nrOfNights = (data2 - data1)/oneDay;
        
        
        if(checkindate >= today && checkoutdate > checkindate){
            var buttonValue = "";
            document.getElementById("demo").innerHTML = "You are searching for a stay of " + nrOfNights + " night(s)" + ".\nCheck-in date is " + checkindate + " with Check-out on " + checkoutdate + " and you are looking for a " + nrOfBeds + " bedroom apartment.";
            if (nrOfBeds == 1){
            for (i = 0; i < apt1bed.length; i++){
            result = '<div class="row">\n';
            result += '<div class="col col-6">\n';
            result += '<h5 id=' + "'" + apt1bed[i] +";" + "'" + price1bed[i] +";" +  "'" + '>' + apt1bed[i] + "&nbsp;&nbsp;" + '<span class="badge badge-success">&nbsp;Available&nbsp;</span>' + '</h5>\n';
            result += '</div>\n';
            result += '<div class="col col-6">\n';
            result += '<h5 style="float:right;">' + "Price: £" + price1bed[i] + "/night " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + '<button class="btn btn-primary" id=' + "'" + apt1bed[i] + "<br>" + "Price: £" + price1bed[i] + " /night" + "'" + 'value=' + "'" + price1bed[i] * nrOfNights + "'" + 'style="float:right;" data-toggle="modal" data-target="#reservation" onClick="modalValue(this.id, this.value)">Book Apartment</button>' + '</span>' + '</h5>';
            result += '</div>\n';
            result += '<hr>';
            result += '</div>\n';
            document.getElementById("demo2").innerHTML = document.getElementById("demo2").innerHTML + result;
            console.log(apt1bed, price1bed);
            }
            } else if (nrOfBeds == 2){
            for (i = 0; i < apt2bed.length; i++){
            result = '<div class="row">\n';
            result += '<div class="col col-6">\n';
            result += '<h5 id=' + "'" + apt2bed[i] +";" + "'" + price2bed[i] +";" +  "'" + '>' + apt2bed[i] + "&nbsp;&nbsp;" + '<span class="badge badge-success">&nbsp;Available&nbsp;</span>' + '</h5>\n';
            result += '</div>\n';
            result += '<div class="col col-6">\n';
            result += '<h5 style="float:right;">' + "Price: £" + price2bed[i] + "/night " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + '<button class="btn btn-primary" id=' + "'" + apt2bed[i] + "<br>" + "Price: £" + price2bed[i] + " /night" + "'" + 'value=' + "'" + price2bed[i] * nrOfNights + "'" + 'style="float:right;" data-toggle="modal" data-target="#reservation" onClick="modalValue(this.id, this.value)">Book Apartment</button>' + '</span>' + '</h5>';
            result += '</div>\n';
            result += '<hr>';
            result += '</div>\n';
            document.getElementById("demo2").innerHTML = document.getElementById("demo2").innerHTML + result;
            console.log(apt2bed, price2bed);
                }
            } else if (nrOfBeds == 3){
            for (i = 0; i < apt3bed.length; i++){
            result = '<div class="row">\n';
            result += '<div class="col col-6">\n';
            result += '<h5 id=' + "'" + apt3bed[i] +";" + "'" + price3bed[i] +";" +  "'" + '>' + apt3bed[i] + "&nbsp;&nbsp;" + '<span class="badge badge-success">&nbsp;Available&nbsp;</span>' + '</h5>\n';
            result += '</div>\n';
            result += '<div class="col col-6">\n';
            result += '<h5 style="float:right;">' + "Price: £" + price3bed[i] + "/night " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + '<button class="btn btn-primary" id=' + "'" + apt3bed[i] + "<br>" + "Price: £" + price3bed[i] + " /night" + "'" + 'value=' + "'" + price3bed[i] * nrOfNights + "'" + 'style="float:right;" data-toggle="modal" data-target="#reservation" onClick="modalValue(this.id, this.value)">Book Apartment</button>' + '</span>' + '</h5>';
            result += '</div>\n';
            result += '<hr>';
            result += '</div>\n';
            document.getElementById("demo2").innerHTML = document.getElementById("demo2").innerHTML + result;
            console.log(apt3bed, price3bed);
                }
            } else if (nrOfBeds == 4){
            for (i = 0; i < apt4bed.length; i++){
            result = '<div class="row">\n';
            result += '<div class="col col-6">\n';
            result += '<h5 id=' + "'" + apt4bed[i] +";" + "'" + price4bed[i] +";" +  "'" + '>' + apt4bed[i] + "&nbsp;&nbsp;" + '<span class="badge badge-success">&nbsp;Available&nbsp;</span>' + '</h5>\n';
            result += '</div>\n';
            result += '<div class="col col-6">\n';
            result += '<h5 style="float:right;">' + "Price: £" + price4bed[i] + "/night " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + '<button class="btn btn-primary" id=' + "'" + apt4bed[i] + "<br>" + "Price: £" + price4bed[i] + " /night" + "'" + 'value=' + "'" + price4bed[i] * nrOfNights + "'" + 'style="float:right;" data-toggle="modal" data-target="#reservation" onClick="modalValue(this.id, this.value)">Book Apartment</button>' + '</span>' + '</h5>';
            result += '</div>\n';
            result += '<hr>';
            result += '</div>\n';
            document.getElementById("demo2").innerHTML = document.getElementById("demo2").innerHTML + result;
            console.log(apt4bed, price4bed);
            }
        }
        result += '<hr>';
        return true;
        } else {
            alert("Something went wrong, Please check if the dates are correct.")
            return false;
        }
    }
function modalValue(apartment, price){
        document.getElementById("apartmentdetails").innerHTML = "Apartment: " + apartment;
        document.getElementById("pricetotal").innerHTML = "Price entire stay " + " £" + price + " incl. VAT";
        document.getElementById("paymentpricetotal").innerHTML = document.getElementById("paymentpricetotal").innerHTML + price;
        
}
function validName(){
        var letters = /[A-Za-z ]+$/;
         if(!document.userSurvey.userName.value.match(letters)){
             userName.classList.add('invalidName');
             errorName.innerHTML = "<br>The <strong>[Name]</strong> field appears to be <strong>empty</strong> or you have inserted a special character. *Characters permited are only <strong>a-z</strong>";
             console.log("incorrect name");
             return false;
         } else {
        userName.classList.remove('invalidName');
             errorName.innerHTML = "";
             console.log("Correct");
             return true;
         }
    }
function validEmail(){
    if (!document.userSurvey.email.value) {
        email.classList.add('invalidEmail');
        errorEmail.innerHTML = "<br> The <strong>[Email]</strong> field appears to be <strong>empty</strong>."
        document.userSurvey.email.focus();
     return false;   
    }
    else {
        var emailAddress = document.userSurvey.email.value;
        var atLoc = emailAddress.indexOf("@",1);
        var dotLoc = emailAddress.indexOf(".",atLoc+2);
        var len = emailAddress.length;

        if (atLoc > 0 && dotLoc > 0 && len > dotLoc+2)
        {
            email.classList.remove('invalidEmail');
            errorEmail.innerHTML = ""
            return true;
        }
        else
        {
            email.classList.add('invalidEmail');
            errorEmail.innerHTML = "<br> The <strong>[Email]</strong> field appears to be <strong>invalid</strong>. *Make sure to include <strong>@</strong>."
            document.userSurvey.email.focus();
            return false;
        }
    }
}
    function validNo() {
    if (!document.userSurvey.phone.value)
    {
      phone.classList.add('invalidNo');
      errorNo.innerHTML = "<br> The <strong>[Phone]</strong> field appears to be <b>empty</b>."
      return false;
    }
    else
    {
        var numbersOnly = "";
        var chars = "";
        var phoneNo = document.userSurvey.phone.value;

        for (i = 0; i < phoneNo.length; i++)
        {
            chars = phoneNo.substring(i,i+1);
            
if (chars >= "0" && chars <= "9")
            {
                numbersOnly = numbersOnly + chars;
            }
        }

        if (numbersOnly.length != 13)
        {
            phone.classList.add('invalidNo');
            errorNo.innerHTML = "<br>The <storng>[Phone]</strong> has an incorrect format. *Make sure to include your country code e.i <strong>+44</strong>.";
            return false;
        }
        else {
            var areacode = numbersOnly.substring(0,2);
            var leading0 = numbersOnly.substring(2,3);
            var exchange = numbersOnly.substring(3,5);
            var ext1 = numbersOnly.substring(5,9);
            var ext2 = numbersOnly.substring(9);
            var newNumber =( "+" + areacode + " " +"(" + leading0 + ")" + exchange + " " + ext1 + "-" + ext2);
            document.userSurvey.phone.value = newNumber;
            phone.classList.remove('invalidNo');
            errorNo.innerHTML = "";
            return true;
        }
    }
}

function validAll(){
        if(validName() && validEmail() && validNo()){
            document.getElementById("completeFirstForm").innerHTML = '<button type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#paymentModal">Complete Booking</button>';
            return true;
           } else {
            displayfirst = "";
            document.getElementById("completeFirstForm").innerHTML = "";
            return false;
           }
    }
    
    
/*** PAYMENT FORM ***/

function validNameOnCard(){
        var letters = /[A-Za-z ]+$/;
         if(!document.paymentform.nameOnCard.value.match(letters)){
             nameOnCard.classList.add('invalidName');
             errorNameOnCard.innerHTML = "<br>The <strong>[NameOnCard]</strong> field appears to be <strong>empty</strong> or you have inserted a special character. *Characters permited are only <strong>a-z</strong>";
             console.log("incorrect name");
             return false;
         } else {
            nameOnCard.classList.remove('invalidName');
             errorNameOnCard.innerHTML = "";
             console.log("Correct");
             return true;
         }
    }
function validCardNumber(input){
    if(input.length < 16){
        cardNumber.classList.add('invalidName');
        errorCardNumber.innerHTML = "<br>The <strong>[CardNumber]</strong> field appears to be <strong>empty</strong> or you have inserted a special character. *The Card number needs to have <strong>16 digits.</strong>";
            console.log("incorrect name");
             return false;
    } else if (input.length = ""){
        errorCardNumber.innerHTML = "<br>The <strong>[CardNumber]</strong> field appears to be <strong>empty</strong> or you have inserted a special character. *The Card number needs to have <strong>16 digits.</strong>";
            console.log("incorrect name");
                 return false;
    }
    else {
        cardNumber.classList.remove('invalidName');
        errorCardNumber.innerHTML = "";
             console.log("Correct");
             return true;
    }
    } 
function validCVC(input){
    if(input.length < 3){
     cvc.classList.add('invalidName');
     errorCVCNumber.innerHTML = "<br>The <strong>[CardNumber]</strong> field appears to be <strong>empty</strong> or you have inserted a special character. *The CVC needs to have <strong>3 digits.</strong>";
        console.log("incorrect name");
        return false;
    } else if (input.length > 3){
    cvc.classList.add('invalidName');
    errorCVCNumber.innerHTML = "<br>The <strong>[CardNumber]</strong> field appears to be <strong>empty</strong> or you have inserted a special character. *The CVC needs to have <strong>3 digits.</strong>";
    console.log("incorrect name");
        return false;
    } else {
      cvc.classList.remove('invalidName');
      errorCVCNumber.innerHTML = "";
             console.log("Correct");
             return true;
    }
}

function validMonth(input){
    if(input.length < 3){
    expirationMonth.classList.add('invalidName');
    errorMonth.innerHTML = "<br>The <strong>[Expiration Month]</strong> field appears to be <strong>empty</strong> or you have inserted a special character. *The expiration month needs to have <strong>2 digits.</strong>";
    console.log("incorrect name");
        return false;
    } else if(input.length > 3){        
    expirationMonth.classList.add('invalidName');
    errorMonth.innerHTML = "<br>The <strong>[Expiration Month]</strong> field appears to be <strong>empty</strong> or you have inserted a special character. *The expiration month needs to have <strong>2 digits.</strong>";
    console.log("incorrect name");
        return false;
    } else {
      expirationMonth.classList.remove('invalidName');
      errorMonth.innerHTML = "";
        console.log("Correct");
        return true;
    }
}

function validYear(input){
    if(input.length < 4){
    expirationMonth.classList.add('invalidName');
    errorMonth.innerHTML = "<br>The <strong>[Expiration Year]</strong> field appears to be <strong>empty</strong> or you have inserted a special character. *The expiration month needs to have <strong>4 digits.</strong>";
    console.log("incorrect name");
    return false;
    } else if (input.length > 4){
    expirationMonth.classList.add('invalidName');
    errorYear.innerHTML = "<br>The <strong>[Expiration Year</strong> field appears to be <strong>empty</strong> or you have inserted a special character. *The expiration year needs to have <strong>4 digits.</strong>";
    console.log("incorrect name");
    return false;
    } else {
    expirationYear.classList.remove('invalidName');
    errorYear.innerHTML = "";
    console.log("Correct");
    return true;
    }
}

function resetForm(){
        document.userSurvey.userName.value = "";
        document.userSurvey.email.value = "";
        document.userSurvey.phone.value = "";
    }

	$(document).ready(function(){
		var date_input=$('input[name="date"]');
		var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
		date_input.datepicker({
			format: 'mm/dd/yyyy',
			container: container,
			todayHighlight: true,
			autoclose: true,
		})
	})


