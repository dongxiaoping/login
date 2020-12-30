// +----------------------------------------------------------------------
// | Copyright (js), BestTV.
// +----------------------------------------------------------------------
// | Author: karl.dong
// +----------------------------------------------------------------------
// | Date：2020/4/24
// +----------------------------------------------------------------------
// | Description: 
// +----------------------------------------------------------------------
function postRegister (imgString, nick, phone, password, code, backFuc) {
    $.ajax ({
        type: "POST",
        url: CREATE_ACCOUNT_REQ,
        data: {file: imgString, nick: nick, phone: phone, password: password, code: code},
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

function reqSms (phone) {
    $.ajax ({
        type: "GET",
        url: REQ_SMS,
        data: {phone: phone},
        cache: false,
        success: function (data) {
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
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

