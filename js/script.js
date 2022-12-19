const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})

function login() {
    var user_lg = document.getElementById("username_login").value;
    var pass_lg = document.getElementById("password_login").value;
    if (user_lg == "") {
        alert("Please enter username!");
        return false;
    }
    if (pass_lg == "") {
        alert("Please enter password!");
        return false;
    }


    var userInfor = [];
     userInfor=JSON.parse(localStorage.getItem(user_lg));

    if (user_lg == userInfor[0] && pass_lg ==userInfor[1] ) {
        // alert("Dang nhap thanh cong");
        // Using Replace
        localStorage.setItem("userHientai",user_lg)
        window.location.href = 'file:///C:/Users/ADMIN/Desktop/All%20stuff%20in%20one%20thing/scripts/login%20page%20moment/me_website.html';

    } else {
        alert("Dang nhap khong thanh cong");
        
    }
}

function signup() {
    var username = document.getElementById("username_signup").value;
    var password = document.getElementById("password_signup").value;
    var password_vef = document.getElementById("password-conf").value;

    if (username == "") {
      alert("Please enter username");
      return false;
    }
    if (password == "") {
      alert("Please enter password");
      return false;
    }
    if (password_vef == "") {
      alert("Please enter password again");
      return false;
    }
    if (password !== password_vef) {
        alert("Please verify password");
        return false;
      }

    if (localStorage.getItem(username.toString())) {
      alert("Account existed");
      return false;
    }
    var save = [username, password];
    localStorage.setItem(username.toString(), JSON.stringify(save));
    alert("Successfully signed in!");
    username = "";
    password = "";
    password_vef = "";
    return true;
  }
