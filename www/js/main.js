$(function(){
  $('#submit').click(function(e){
	e.preventDefault()  
   var text = $('#text').val();
   var salt = $('#salt').val();
   var testSalt = TwinBcrypt.genSalt(6);
   var testSalt = "$2y$10." + salt + ".blah"
   var hash = TwinBcrypt.hashSync(text, salt);
   alert(hash)
   $('#hash').val(hash);
  })

})
