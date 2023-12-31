function isNotEmpty(field) {
            var inputStr = field.value;
            if (inputStr == "" || inputStr == null) {
                alert("This field requires an entry.");
                field.focus();
                field.select();
                return false;
            }
            return true;
        }

function isPhoneNumber(field) {
            if (isNotEmpty(field)) {
                var number = field.value;
                var regEx = /^\+?[0-9]+$/;

                if (!number.match(regEx)) {
                    alert("Invalid phone number! Please enter only numbers and/or prefixes.");
                    field.focus();
                    field.select();
                    return false;
                } else {
                    return true;
                }
            }
            return false;
        }

function isNumber(field) {
            if (isNotEmpty(field)) {
                var inputStr = field.value;
                for (var i = 0; i < inputStr.length; i++) {
                    var oneChar = inputStr.substring(i, i + 1);
                    if (oneChar < "0" || oneChar > "9") {
                        alert("Numbers only.");
                        field.focus();
                        field.select();
                        return false;
                    }
                }
                return true;
            }
            return false;
        }

function isValidDay(field) {
            if (isNumber(field)) {  // Check if it's a number first
                var day = parseInt(field.value);  // Parse the day as an integer

                if (day >= 1 && day <= 31) {
                    return true;
                } else {
                    alert("Invalid Day! Please enter numbers from 1 - 31 only.");
                    field.focus();
                    field.select();
                    return false;
                }
            }
            return false;
        }

function isValidMonth(field) {
            if (isNumber(field)) {  // Check if it's a number first
                var month = parseInt(field.value);  // Parse the month as an integer

                if (month >= 1 && month <= 12) {
                    return true;
                } else {
                    alert("Invalid Month! Please enter numbers from 1 - 12 only.");
                    field.focus();
                    field.select();
                    return false;
                }
            }
            return false;
        }

function isValidYear(field) {
            if (isNumber(field)) {  // Check if it's a number first
                var year = parseInt(field.value);  // Parse the year as an integer

                if (year >= 1000 && year <= 9999) {
                    return true;
                } else {
                    alert("Invalid Year! Please enter a four-digit number.");
                    field.focus();
                    field.select();
                    return false;
                }
            }
            return false;
        }

function validateForm(form) {
            if (isNotEmpty(form.Name) && isPhoneNumber(form.Num) && isValidDay(form.Day) &&
                isValidMonth(form.Month) && isValidYear(form.Year) && isNotEmpty(form.Pastime)) {

                alert("Successfully submitted!");
                form.focus();
                form.select();
                return true;
            } else {
                return false;
            }
        }
