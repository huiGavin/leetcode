window.localStorage.setItem('ceshi1', '1111111');



function checkPassword(password) {
    // 判断密码是否为空
    if(!password) {
        return " × 密码框为空";
    }

    var hasUpper = /[A-Z]/.test(password); // 使用正则表达式判断是否包含大写字母
    var hasLower = /[a-z]/.test(password); // 使用正则表达式判断是否包含小写字母

    if(!hasUpper) {
        return " × 至少一个大写字母";
    }
    if(!hasLower) {
        return " × 至少一个小写字母";
    }
    
    var re = /[^A-Za-z0-9]/; // 判断密码是否包含特殊字符
    if(!re.test(password)) {
        return " × 至少包含一个特殊字符";
    }

    // 判断密码长度
    if(password.length < 6 || password.length > 16) {
        return " × 长度在6-16个字符";
    }

    // 如果符合要求，则返回 true
    return "密码正确";
}


function handleInput() {
 
    var password = document.getElementById("password").value; // 获取用户输入的密码
    var check = checkPassword(password); //获取密码验证信息

    if(check == "密码正确") {

        var mySpan = document.getElementById("giao"); //获取<span> 标签的 DOM 节点
        mySpan.style.color = "green"; //修改字体颜色
        mySpan.innerText = " √ 密码格式正确"; // 或者使用 innerText 属性来修改内容

    } else {

        var mySpan = document.getElementById("giao"); //获取<span> 标签的 DOM 节点
        mySpan.style.color = "red"; //修改字体颜色
        mySpan.innerText = check; // 或者使用 innerText 属性来修改内容

    }
}


document.getElementById("togglePassword").addEventListener("click", function() {
    var passwordInput = document.getElementById("password");
    if(passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});


/**************************************/

       