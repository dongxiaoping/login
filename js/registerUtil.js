// +----------------------------------------------------------------------
// | Copyright (js), BestTV.
// +----------------------------------------------------------------------
// | Author: karl.dong
// +----------------------------------------------------------------------
// | Date：2020/4/24
// +----------------------------------------------------------------------
// | Description: 
// +----------------------------------------------------------------------
function postRegister (imgString, nick, phone, password, backFuc) {
    $.ajax ({
        type: "POST",
        url: CREATE_ACCOUNT_REQ,
        data: {file: imgString, nick: nick, phone: phone, password: password},
        cache: false,
        success: function (data) {
            var return_info = JSON.parse (data);
            if (return_info.status) {
                backFuc (1, return_info)
            } else {
                backFuc (0, return_info)
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            backFuc (0, {"status":0,"message":"网络异常！","data":""})
        }
    });
}

function checkInData (iconString, nick, phone, password) {
    if (iconString.indexOf ('data:image') != 0) {
        toastr.error ('请上传正确的图像！')
        return false
    }
    if (clearBlank (nick) == "") {
        toastr.error ('昵称不能为空！')
        return false
    }
    if (!isPhone (clearBlank (phone))) {
        toastr.error ('电话号码错误！')
        return false
    }
    if (clearBlank (password) == "") {
        toastr.error ('密码不能为空')
        return false
    }
    return true;
}

function boxShow (file) {
    var src
    if (typeof file === 'object') {
        src = URL.createObjectURL (file);
    } else {
        src = file;
    }
    var div = document.getElementById ("box");
    while (div.hasChildNodes ()) {
        div.removeChild (div.firstChild);
    }
    var img = new Image ()
    img.onload = function () {
        $ ('#box').prepend (img)
    };
    img.src = src;
    img.style.width = "1.2rem"
    img.style.height = "1.2rem"
}

