(function(window, $, undefined) {
    $('.test').click(function() {
        setDecrypt();
    });

    // 实例化前端rsa 加密模块
    var encrypt = new JSEncrypt();
    // 引入公钥
    encrypt.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCEG0txo704btlT7lYtswFvurtu' +
        'dmo0QyUgUmYncY/iCPpjtKBL05CSUV6EtnpmFTp5TvQlJC4BM3nxa+Dqmd+tLU44' +
        'jL12lB/BXsffFXjU+VkQLL0F6cIbSVd1G5+CMgYBvaTZL1WAaygNlglae3ToLdUo' +
        'ne/LSVT6IPvEk/haHwIDAQAB');

    var setDecrypt = function() {
        // 显示传输到服务端的加密密文
        $('.encrypt').text(encrypt.encrypt($('[name="password"]').val()));
        // 发送密文到服务端请求解密
        $.ajax({
                url: '/decrypt',
                type: 'post',
                data: {
                    password: encrypt.encrypt($('[name="password"]').val())
                },
            })
            .done(function(data) {
                // 显示服务端解密回传的明文
                $('.decrypt').text(data.pwd);
            });

    };
})(window, jQuery);