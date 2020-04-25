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
 *document.cookie 持久化数据
 */
//expireTime参数为cookie的失效时间，单位为小时(默认有效期为30天)
//应用退出不会删除，存储容量小，每次网络请求会附带上，不要轻易使用
var webCookie = {
    setItem: function (name, value, expireHour) {
        var Days = 30 * 24 * 60 * 60 * 1000;
        if(expireHour) {
            Days = expireHour * 60 * 60 * 1000
        }
        var exp = new Date();
        exp.setTime(exp.getTime() + Days);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=/";
    },

    //读取cookies
    getItem: function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            var value = unescape(arr[2]);
            //先删除，避免相同的key不同的路径的情况出现
            let del_exp = new Date();
            del_exp.setTime(del_exp.getTime() - 1);
            document.cookie = name + "=" + value + ";expires=" + del_exp.toGMTString();
            this.setItem(name, value);    //使用cookie数据的同时，重新设置一遍cookie值，延长其有效时间
            return value;
        } else {
            return null;
        }
    },

    //删除cookies
    removeItem: function (name,path="/") {
        let exp = new Date();
        let exp_time = exp.getTime();
        let new_time = exp_time - 1;
        exp.setTime(new_time);
        let exp_string = exp.toGMTString();
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            let value = unescape(arr[2]);
            document.cookie = name + "=" + value + ";expires=" + exp_string+ "; path="+path;
        }
    }
}