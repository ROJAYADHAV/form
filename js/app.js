function addDetails() {
    console.log('Add button clicked');
    // Check if user has entered all required data
    // If not show error message
    // Else post it
    if (validateFirstName()) {
        if (validateFullName()) {
            // Do a Post
            if(validateDesig()){
                if(validateEmp()){
                    if(validateEmail()){
                        if(validateMobile()){
                            if(validateEmobile()){
            postData();
                            }else{
                                alert("invalid emergency num");
                            }
                    }else{
                        alert("invalid number");
                    }
                }
                    else{
                        alert("enter valid email address");
                    }
        } else{
            alert("enter emp id");
        }
    }
    else{
        //display error msg for designation
        displayErrorMessageForDesig();
    }
}
        else {
            // Display error message for full Name
            displayErrorMessageForFullName();
        }
    } else {
        // Display error message for first Name
        displayErrorMessageForFirstName();
    }

}







function displayErrorMessageForDesig(){
    alert("enter the designation");
}
function displayErrorMessageForFirstName() {
    alert("enter the first name");
}

function displayErrorMessageForFullName() {
    alert("enter the full name");
}






function validateFirstName() {
    const firstName = $('#first').val();
    if (firstName === '') {
        return false;
    }
    return true;
}






function validateFullName() {
    const fullName = $('#fullname').val();
    if (fullName === '') {
        return false;
    }
    return true;
}







function validateDesig(){
 const desig = $('#desig').val();
 if(desig === ''){
     return false;
 }
 return true;
}


 function validateEmp(){
     const empid = $('#empid').val();
     if(empid === ''){
         return false;
     } return true;
 }

 function validateEmail(){
    const mail=$("#email").val();
    var reg= /@virtusa.com\s*$/;
    if(reg.test(mail))
    {
        return true;
    }
    else{
        return false;
    }

}


function validateMobile(){
    const mob=$("#mnum").val();
var exp=/^(\+\d{1,3}[- ]?)?\d{10}$/;
if(exp.test(mob))
{
    return true;
}else{
    return false;
}
}

function validateEmobile(){
    const mob1=$("#enum").val();
    var exp1=/^(\+\d{1,3}[- ]?)?\d{10}$/;
    if(exp1.test(mob1))
    {
        return true;
    }else{
        return false;
    }
}





function postData() {
    const data = {
        firstName: $('#first').val(),
        fullName: $('#fullname').val(),
        desig: $('#desig').val(),
        EmployeeCode:$('#empid').val(),
        BloodGrp:$('#blood').val(),
        ReasonsForIssue:$('#issue').val(),
        DateofEmployment:$('#date').val(),
        Email:$('#email').val(),
        MobileNo:$('#mnum').val(),
        EmergencyMobile:$('#enum').val()
    };
    $.ajax({
        type: "POST",
        url: 'https://myform-54021.firebaseio.com/.json',
        data: JSON.stringify(data),
        success: onPostSuccess,
        // dataType: dataType
    });
}

const onPostSuccess = (data) => {
    console.log('Posting to firebase success');
    console.log(data);
}

$('document').ready(() => {
    // Initialize
    $('.span-for-errors').hide();
});
