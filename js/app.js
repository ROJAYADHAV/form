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
            postData();
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
      const email=$('#email').val();
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (!reg.test(email.value)) 
        {
            alert('Invalid Email Address');
            return false;
        }

        return true;

}




function postData() {
    const data = {
        firstName: $('#firstName').val(),
        fullName: $('#fullName').val(),
        desig: $('desig').val()
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
