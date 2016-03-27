const crypto = require('crypto')
  , algorithm = 'aes-256-ctr'
  , password = 'my-password';

module.exports = {
  encrypt(text){
    let cipher = crypto.createCipher(algorithm, password)
      , crypted = cipher.update(text,'utf8','hex')

    crypted += cipher.final('hex');
    return crypted;
  }

  , decrypt(text){
    let decipher = crypto.createDecipher(algorithm, password)
      , dec = decipher.update(text,'hex','utf8')

    dec += decipher.final('utf8');
    return dec;
  }
}