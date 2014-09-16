angular-rest-recaptcha
======================

An Angular Recaptcha implementation with local REST validation (Verifying without Plugins)

Credits to https://github.com/chriskacerguis for the CI Rest Implementation, and https://github.com/mllrsohn/ for the Angular recaptcha library. Client-side Angular validation is implemented to demonstrate an actual contact form.

Upside of using this implementation:
* Control, in addition to keeping the Private Key secret (unlike Google's implementation, where both keys are sent)

Downside(s):
* Redirecting (some) traffic back to your server


Configuration
+ Get Recaptcha API keys here: https://www.google.com/recaptcha/admin#createsite
+ Set the Public Key on the client-side "js/app.js"
+ Set both the Private and Public Key on the server-side "rest/application/controllers/api/validate.php"
+ Remote IP is not necessary here (set to 0)
+ That's it! 

*Recaptcha server-side lib file already included and referenced in the CI controller 
rest\application\libraries

For Recaptcha UI customization, https://github.com/mllrsohn/angular-re-captcha

Demo: http://qibue.com/recaptcha
