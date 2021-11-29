function validate() {
    var fname = document.getElementById("name")

    if (fname.value == "") {

        fname.style.border = "solid 3px red";
        document.getElementById("id1").innerHTML = "INVALID"


    }
    else {

    }

    var fnames = document.getElementById("names")
    if (fnames.value == "") {
        fnames.style.border = "solid 3px red";
        document.getElementById("id2").innerHTML = "INVALID"
    }
    else {

    }
    var email = document.getElementById("mail")
    var regx = /^([a-z A-Z 0-9 -]+)@([a-z A-Z 0-9]+).([a-z A-Z]{2,20})(.[a-z A-Z]{2,10})?$/
    if (email.value == "") {
        email.style.border = "solid 3px red";
        document.getElementById("id3").innerHTML = "INVALID"
        email.style.visibility = "visiblity"
    }

    else if (regx.test.email) {
        email.style.border = "solid 3px red";
        document.getElementById("id3").innerHTML = "INVALID"
    }
    else {

    }


    var number = document.getElementById("mNo")
    var regx = /^[6-9]\d{9}$/;
    if (number.value == "") {
        number.style.border = "solid 3px red"
        document.getElementById("id5").innerHTML = "INVALID"

    }
    else if (regx.test.number) {
        number.style.border = "solid 3px red"
        document.getElementById("id5").innerHTML = "INVALID"
    }
    else {

    }

    var dateOfBirth = document.getElementById("dob")
    var regx = /^([0-9])([0-9])-([0-9])([0-9])-([1-2])([0-9])([0-9])([0-9])$/
    if (dateOfBirth.value == "") {
        dateOfBirth.style.border = "solid 3px red"
        document.getElementById("id4").innerHTML = "INVALID"
        

    }
    else if (regx.test.dateOfBirth) {
        dateOfBirth.style.border = "solid 3px red"
        document.getElementById("id4").innerHTML = "INVALID"
    }
    else {

    }
    var address = document.getElementById("address");
        if (address.value == "") {
            address.style.border = "solid 3px red"
            document.getElementById("error").innerHTML = "INVALID"
        }
        var address1 = document.getElementById("address1");
        if (address1.value == "") {
            address1.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var address2 = document.getElementById("address2");
        if (address2.value == "") {
            address2.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var address3 = document.getElementById("address3");
        if (address3.value == "") {
            address3.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var address4 = document.getElementById("address4");
        if (address4.value == "") {
            address4.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var address5 = document.getElementById("address5");
        if (address5.value == "") {
            address5.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var error = document.getElementById("error");
          if (error.value == "") {
            error.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var error1 = document.getElementById("error1");
        if (error1.value == "") {
            error1.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var error2 = document.getElementById("error2");
        if (error2.value == "") {
            error2.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var error3 = document.getElementById("error3");
        if (error3.value == "") {
            error3.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var error4 = document.getElementById("error4");
        if (error4.value == "") {
            error4.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var error5 = document.getElementById("error5");
        if (error5.value == "") {
            error5.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var error6 = document.getElementById("error6");
        if (error6.value == "") {
            error6.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        
        var code = document.getElementById("code");
        if (code.value == "") {
            code.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var code1 = document.getElementById("code1");
        if (code1.value == "") {
            code1.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        
}


    // if(currentAddress.value == "")
    // {
    //     currentAddress.style.border="solid 3px red"
    // }

    // if(permanentAddress.value == "")
    // {
    //     permanentAddress.style.border="solid 3px red"
    // }
    // var checks = document.getElementById("check")
    // if(checks.ariaChecked)
    // {
    //     currentAddress = permanentAddress
    // }

    function fill() {
        var address = document.getElementById("address");
        if (address.value == "") {
            address.style.border = "solid 3px red"
            document.getElementById("error").innerHTML = "INVALID"
        }
        var address1 = document.getElementById("address1");
        if (address1.value == "") {
            address1.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var address2 = document.getElementById("address2");
        if (address2.value == "") {
            address2.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var address3 = document.getElementById("address3");
        if (address3.value == "") {
            address3.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var address4 = document.getElementById("address4");
        if (address4.value == "") {
            address4.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var address5 = document.getElementById("address5");
        if (address5.value == "") {
            address5.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var error = document.getElementById("error");
          if (error.value == "") {
            error.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var error1 = document.getElementById("error1");
        if (error1.value == "") {
            error1.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var error2 = document.getElementById("error2");
        if (error2.value == "") {
            error2.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var error3 = document.getElementById("error3");
        if (error3.value == "") {
            error3.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var error4 = document.getElementById("error4");
        if (error4.value == "") {
            error4.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var error5 = document.getElementById("error5");
        if (error5.value == "") {
            error5.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var error6 = document.getElementById("error6");
        if (error6.value == "") {
            error6.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        
        var code = document.getElementById("code");
        if (code.value == "") {
            code.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        var code1 = document.getElementById("code1");
        if (code1.value == "") {
            code1.style.border = "solid 3px red"
            document.getElementById("id4").innerHTML = "INVALID"
        }
        
        var check = document.getElementById("check");
        var regx = /^[6]\d{5}/;
        if(check.checked)  {
            if (regx.test(code.value)) {
                address3.value = address.value;
                address4.value = address1.value;
                address5.value = address2.value;
                select1.value=select.value;
                code1.value = code.value;
    
            }
        }      

        
        

    }


