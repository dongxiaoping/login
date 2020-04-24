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