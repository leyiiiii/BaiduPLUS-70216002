window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    document.getElementById("search-input").onkeypress=function(event){
        if(event.which===13){
            search();
        }
    }

    // TODO: 在此为 top-right 元素设置监听器
    document.getElementById('top-right').addEventListener('click', function(){
        clickLogin();
    });
}

function search() {
    // TODO: 搜索触发后的行为
    var inputDom = document.getElementById('search-value');
    var text = inputDom.value;
    console.log(text);
    if(text == 0){
        window.alert('请输入数据！');
    }
    else{
        //window.alert('您搜索了' + text);
        window.location.href = "http://www.baidu.com/s?ie=UTF-8&wd=" + text;
    }
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug，另外注意图片路径是否正确
    var username = Kernal.getUserName();
    var sanitizeHTML = function(str){
        var tmp = document.createElement("div");
        tmp.textContent = str;
        return tmp.innerHTML;
    };
    var content = '<div id="user">\
                        <span id="user-img">\
                            <img src="img/user.jpg" />\
                        </span>\
                        <span id="name">' + sanitizeHTML(username) + '</span>\
                    </div>';
    document.getElementById('top-right').innerHTML = content;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}