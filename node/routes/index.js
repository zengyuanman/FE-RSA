var express = require('express');
var router = express.Router();
var fs = require('fs');
var nodeRsa = require('node-rsa');

/**
 * 对接收到的密文进行RSA解密使用
 * @Author   weiber
 * @DateTime 2016-11-24T13:39:58+0800
 * @param    body 密文
 * @return   返回解密的明文，如果解密失败，原样放回密文
 */
var decrypt = function(body) {
    try {
        var pem = fs.readFileSync(__rootpath + '/cert/rsa_private_key.pem');
        var key = new nodeRsa(pem, {
            encryptionScheme: 'pkcs1'
        });
        return key.decrypt(body, 'utf8');
    } catch (e) {
        console.error("decrypt error", e);
        return body;
    }
};

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {});
});


router.post('/decrypt', function(req, res, next) {
    var password = req.body.password,
        pwd = decrypt(password);
    if (password === pwd) {
        // 明文密文相等，解密失败，在这里写处理方法
    } else {
        // 返回解密的明文
        res.json({
            pwd: pwd
        });
    }
});

module.exports = router;