// +----------------------------------------------------------------------
// | Copyright (js), BestTV.
// +----------------------------------------------------------------------
// | Author: karl.dong
// +----------------------------------------------------------------------
// | Date：2020/4/24
// +----------------------------------------------------------------------
// | Description: 
// +----------------------------------------------------------------------
// var CREATE_ACCOUNT_REQ = 'http://localhost/phpserver/public/index.php/race/user/create_account'
// var LOGIN_IN_REQ = "http://localhost/phpserver/public/index.php/race/user/login_in"
var CREATE_ACCOUNT_REQ = 'https://www.toplaygame.cn/phpserver/public/index.php/race/user/create_account'
var LOGIN_IN_REQ = "https://www.toplaygame.cn/phpserver/public/index.php/race/user/login_in"
function judgeClient() {
    let u = navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;   //判断是否是 android终端
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);     //判断是否是 iOS终端
    if(isAndroid){
        return 'Android';
    }else if(isIOS){
        return 'IOS';
    }else{
        return 'PC';
    }
}
/*
* 参数说明：
closeButton：false，是否显示关闭按钮（提示框右上角关闭按钮）；
debug：false，是否为调试；
progressBar：false，是否显示进度条（设置关闭的超时时间进度条）；
positionClass，消息框在页面显示的位置
toast-top-left  顶端左边
toast-top-right    顶端右边
toast-top-center  顶端中间
toast-top-full-width 顶端，宽度铺满整个屏幕
toast-botton-right
toast-bottom-left
toast-bottom-center
toast-bottom-full-width
onclick，点击消息框自定义事件
showDuration: “300”，显示动作时间
hideDuration: “1000”，隐藏动作时间
timeOut: “2000”，自动关闭超时时间
extendedTimeOut: “1000”
showEasing: “swing”,
hideEasing: “linear”,
showMethod: “fadeIn” 显示的方式，和jquery相同
hideMethod: “fadeOut” 隐藏的方式，和jquery相同
 */
function toastrSet() {
    toastr.options = {
        closeButton: false,
        debug: false,
        progressBar: true,
        positionClass: "toast-bottom-center",
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "2000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    };
}

/*
 *document.cookie 持久化数据
 */
//expireTime参数为cookie的失效时间，单位为小时(默认有效期为30天)
//应用退出不会删除，存储容量小，每次网络请求会附带上，不要轻易使用
var webCookie = {
    setItem: function (key,value) {
        try{
            value = JSON.stringify(value);
            window.localStorage.setItem(key,value);
            return true;
        }catch(e){
            window.localStorage.setItem(key,value);
            return true;
        }
    },

    getItem: function (key) {
        let value = window.localStorage.getItem(key);
        try {
            return JSON.parse(value);
        }catch(e){
            return value;
        }
    },

    removeItem: function (key) {
        window.localStorage.removeItem(key);
        return true;
    },

    clear: function () {
        try{
            window.localStorage.clear();
        }catch (e) {

        }
    }
};

function isPhone(phone){
    if(!(/^1[3456789]\d{9}$/.test(phone))){
        return false;
    }
    return true
}

function clearBlank (stringInfo) {
    return stringInfo.replace(/(^\s*)/g, "");
}

//截取url中指定的传参
function getUrlParam(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}