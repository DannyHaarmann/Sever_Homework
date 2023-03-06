function checkData()
    {
        var enterEmail = document.getElementById('email').value;
        var enterPwd = document.getElementById('pwd').value;



        //get data from localstorage

        var getEmail = localStorage.getItem("userEmail");
        var getPwd =  localStorage.getItem("userPwd");

        if(enterEmail == getEmail)
        {
            if(enterPwd == getPwd)
            {
                alert("login was succusful");
            }
            else
            {
                alert("incorrect password");
            }
        }
        else
        {
            alert("incorrect email");
        }
    }