
        //******** for the Apply to join form start ************************
        //******** for the Apply to join form start ************************

        $('.validCheck').on('blur keyup click change',function(){
            var valid_count = $('.validCheck').length;
            var type = $(this).attr('type');
            if(type=='email')
            {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                var emailVal = $(this).val();
                if(!emailReg.test(emailVal)) {
                    $(this).closest('form').find('.email_error').html('Enter a valid email address.');
                    $(this).addClass('invalid');
                    $(this).removeClass('valid');
                }else{
                    $(this).closest('form').find('.email_error').html('');
                    $(this).addClass('valid')
                    $(this).removeClass('invalid');
                }
            }else{     
                if($(this).val()==''){
                    $(this).addClass('invalid');
                    $(this).removeClass('valid');
                }else{
                    $(this).addClass('valid')
                    $(this).removeClass('invalid');
                }
            }
            var inputs_valid = $(this).closest('form').find('.valid');
            if(inputs_valid.length == valid_count ){
                $(this).closest('form').find('.form_next').prop("disabled", false).removeClass('disabled-btn');  
            }else{
                $(this).closest('form').find('.form_next').prop("disabled", true).addClass('disabled-btn');  
            } 
        })

        // submit form--------------------------------------------------------------------------
        $('.apply-for-job').click(function(e){
            e.preventDefault();
            var valid_input = $(this).closest('form').find('.validCheck');
            var valid_key = $(this).closest('form').find('.validCheck');
            var data = ['apply-for-job'];
            var key = ['form_name'];
            for (let index = 0; index < valid_input.length; index++) {
                key.push(valid_key.eq(index).attr('name'))   
                data.push(valid_input.eq(index).val());
            }
            var associated = key.reduce(function (previous, key01, index01) {
                previous[key01] = data[index01];
                return previous
            }, {})

            if(grecaptcha.getResponse() == "") {
                //  e.preventDefault();
                    alert("You can't proceed! Fill the Captcha First");
                } else {
                    $.ajax({
                        url:"./mail/smtp_mail.php",
                        method:'post',
                        data:associated,
                        success:function(result){
                            console.log('result',result);
                            var data_status = JSON.parse(result);
                            console.log('result',data_status);
                            if(data_status.status === 1){
                                window.location.href = "./thanks.html";
                            }
                            // $('.apply-for-job').closest('form').find('.validCheck').val('');
                            // $('.apply-for-job').closest('form').find('textarea').val('');
                            // $('.apply-for-job').prop("disabled", true).addClass('disabled-btn');
                        }
                    })
                }
        })
        //************************ for the Apply to join form end *********************
        //************************ for the Apply to join form end *********************

        // Resize reCAPTCHA to fit width of container
// Since it has a fixed width, we're scaling
// using CSS3 transforms
// ------------------------------------------
// captchaScale = containerWidth / elementWidth

function scaleCaptcha(elementWidth) {
  // Width of the reCAPTCHA element, in pixels
  var reCaptchaWidth = 304;
  // Get the containing element's width
	var containerWidth = $('.form_row-box').width();
  
  // Only scale the reCAPTCHA if it won't fit
  // inside the container
  if(reCaptchaWidth > containerWidth) {
    // Calculate the scale
    var captchaScale = containerWidth / reCaptchaWidth;
    // Apply the transformation
    $('.g-recaptcha').css({
      'transform':'scale('+captchaScale+')'
    });
  }
}

$(function() { 
 
  // Initialize scaling
  scaleCaptcha();
  
  // Update scaling on window resize
  // Uses jQuery throttle plugin to limit strain on the browser
  $(window).resize( $.throttle( 100, scaleCaptcha ) );
  
});