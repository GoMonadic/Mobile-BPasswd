$(function(){
  $('#submit').click(function(e){
   e.preventDefault()  
   var text = $('#text').val();
   var salt = $('#salt').val();
   var hash = BPasswd.generate(salt, text);
   $('#hash').val(hash);
  })

})
