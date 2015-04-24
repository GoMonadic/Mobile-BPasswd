$(function(){

bcrypt = dcodeIO.bcrypt;



var BASE64_CODE = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split('');




    function base64_encode(b, len) {
        var off = 0,
            rs = [],
            c1, c2;
        while (off < len) {
            c1 = b[off++] & 0xff;
            rs.push(BASE64_CODE[(c1 >> 2) & 0x3f]);
            c1 = (c1 & 0x03) << 4;
            if (off >= len) {
                rs.push(BASE64_CODE[c1 & 0x3f]);
                break;
            }
            c2 = b[off++] & 0xff;
            c1 |= (c2 >> 4) & 0x0f;
            rs.push(BASE64_CODE[c1 & 0x3f]);
            c1 = (c2 & 0x0f) << 2;
            if (off >= len) {
                rs.push(BASE64_CODE[c1 & 0x3f]);
                break;
            }
            c2 = b[off++] & 0xff;
            c1 |= (c2 >> 6) & 0x03;
            rs.push(BASE64_CODE[c1 & 0x3f]);
            rs.push(BASE64_CODE[c2 & 0x3f]);
        }
        return rs.join('');
    }




   var makeSalt = function(string){
    rounds = 12;
    var salt = [];
    salt.push("$2a$");
    if (rounds < 10)
     salt.push("0");
    salt.push(rounds.toString());
    salt.push('$');
    salt.push(base64_encode(string, 16)); // May throw
    return salt.join('');
  }
  $('#submit').click(function(e){
   e.preventDefault()  
   var text = $('#text').val();
   var salt = $('#salt').val();
   var testSalt = makeSalt(salt);
   var hash = bcrypt.hashSync(text, testSalt);
   $('#hash').val(hash);
  })

})
