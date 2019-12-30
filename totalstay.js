$(function(){
  var interval;
  var url = new URL(location.href);
  var paramAgency = url.searchParams.get('agency');
  var paramUser = url.searchParams.get('login');
  var paramPass = url.searchParams.get('password');
  if (paramAgency && paramUser && paramPass) {
    interval = setInterval(checkForm,300); 
  }
  function checkForm() {
   var form = $("div.agent-login").find('form').first()
   if (form && form[0]) {
  	 clearInterval(interval);
  	 var agency = form.find("input[name='txtAgency_ext']").first();
  	 var user = form.find("input[name='txtUsername_ext']").first();
  	 var pass = form.find("input[name='txtPassword_ext']").first();
     var button = form.find("input#btnLogin[type='submit']").first();
  	 if (agency[0] && user[0] && pass[0] && button[0]) {
       setTimeout(function(){
         agency.val(paramAgency);
         user.val(paramUser);
         pass.val(paramPass);
         button.click();
       }, 1500)
  	 }
   }
  }
})