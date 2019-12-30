$(function(){
  var interval;
  var url = new URL(location.href);
  var paramUser = url.searchParams.get('login');
  var paramPass = url.searchParams.get('password');
  if (paramUser && paramPass) {
  $(document).ready(function() {
    interval = setInterval(checkForm,300); 
  })
  }
  function checkForm() {
    var form = $("form#form-login");
    if (form[0]) {
      clearInterval(interval);
      var user = form.find("input#loginUser[type='text']").first();
      var pass = form.find("input#loginPassword[type='password']").first();
      var button = form.find("button[type='submit']").first();
      if (user[0] && pass[0] && button[0]) {
        setTimeout(function(){
          user.val(paramUser);
          pass.val(paramPass);
          button.click();
        }, 1500);
      } 
    }
  }
})