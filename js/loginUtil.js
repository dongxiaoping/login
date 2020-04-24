// +----------------------------------------------------------------------
// | Copyright (js), BestTV.
// +----------------------------------------------------------------------
// | Author: karl.dong
// +----------------------------------------------------------------------
// | Date：2020/4/24
// +----------------------------------------------------------------------
// | Description: 
// +----------------------------------------------------------------------

function checkInData (phone, password) {
    return true;
}

function loginReq (phone, password, backFuc) {
    $.ajax ({
        type: "Get",
        url: LOGIN_IN_REQ+"?phone="+phone+"&password="+password,
        cache: false,
        success: function (data) {
            var return_info = JSON.parse (data);
            if (return_info.status) {
                backFuc(1, return_info)
                console.log ("登录成功");
            } else {
                backFuc(0, return_info)
                console.log ("登录失败");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            backFuc(0, '')
            console.log ("上传失败，请检查网络后重试");
        }
    });
}