var submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", function(){
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      if(username === ""){
         alert("请输入账号！");
         return;
      }

      if(password === ""){
        alert("请输入密码！");
        return;
      }

      if(username.length < 4 || username.length > 20){
        alert("账号长度应为4-20个字符！");
        return;
      }

      if(verify(username,password)){
        //alert("登陆成功！");
        window.location.href="leetcode.html";
      }else{
        alert("账号或密码错误，请重新输入！");
      }

  });

  function verify(username, password){
    if(username === "name" && password === "123456"){
      return true;
    }else{
      return false;
    }
  }

       
