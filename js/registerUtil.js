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
    alert(CREATE_ACCOUNT_REQ)
    $.ajax ({
        type: "POST",
        url: CREATE_ACCOUNT_REQ,
        data: {file: imgString, nick: nick, phone: phone, password: password},
        cache: false,
        success: function (data) {
            var return_info = JSON.parse (data);
            if (return_info.status) {
                backFuc(1, return_info)
                console.log ("上传成功");
            } else {
                backFuc(1, return_info)
                console.log ("上传失败");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            backFuc(0, '')
            console.log ("上传失败，请检查网络后重试");
        }
    });
}

function checkInData (iconString, nick, phone, password) {
    return true;
}

function boxShow (file) {
    var div = document.getElementById ("box");
    while (div.hasChildNodes ()) {
        div.removeChild (div.firstChild);
    }
    var img = new Image ()
    $ ('#box').prepend (img)
    img.src = file;
    img.style.width = "100%"
    img.style.height = "100%"
}

