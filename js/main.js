$(document).ready( function(){

    $('.title').click(function(){

        if($(this).next('.content').hasClass('active')){
            $(this).next('.content').removeClass('active').slideUp();
        }else{
            $('.question-section .content').slideUp();
            $(this).next('.content').addClass('active').slideDown();
        }
        // $('.question-section .content').slideUp();
        // $(this).next('.content').slideDown();
        // $('.title p').css('color','red')
       
    });

    // /^([a-zA-Z]+)([0-9]+)?(@)([a-zA-Z]{5,10}(.)([a-zA-Z]+))$/i;

    // /^([a-zA-Z]+)([0-9]+)([$&+,:;=?@#|"<>.^*()%!-]+)$/i;

    


    $('#email').keyup(function(){
        var regxEmail = /^([a-zA-Z]+)([0-9]+)?(@)([a-zA-Z]{5,10}(.)([a-zA-Z]+))$/i;

        var emailInput = $(this).val()
        if(regxEmail.test(emailInput)){
            $('.emailStatus').text('valid')
            $('.emailStatus').css('color', 'green')
            $(this).focus(function(){
                $('.emailStatus').show()
            })
    
            $(this).blur(function(){
                $('.emailStatus').hide()
            })
        }else{
            $('.emailStatus').text('Ensure the mail is correct')
            $('.emailStatus').css('color', 'red')
        }

        

        
    })

    $('#login-email').keyup(function(){
        var regxEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

        var emailInput = $(this).val();
        if(regxEmail.test(emailInput)){
            $('.emailStatus').text('valid')
            $('.emailStatus').css('color', 'green')
            $(this).focus(function(){
                $('.emailStatus').show()
            })
    
            $(this).blur(function(){
                
            })

        }
        else{
            $('.emailStatus').text('invalid')
            $('.emailStatus').css('color', 'red')
        }

        

        
    })

    $('#password').keyup(function(){
        var regxPass = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

        var passInput = $(this).val();
        if(regxPass.test(passInput)){
            $('.passStatus').text('valid')
            $('.passStatus').css('color', 'green')
            $(this).focus(function(){
                $('.passStatus').show()
            })
    
            $(this).blur(function(){
                $('.passStatus').hide()
            })
        }else{
            $('.passStatus').text('invalid')
            $('.passStatus').css('color', 'red')
        }
    });

    // $('.menu').hide()
    $('#checkbox').click(function(){
        $('.menu').addClass('active');
        $('.open, .nav-logo').hide();
    })

    $('.close').click(function(){
        $('.menu').removeClass('active');
        $('.open, .nav-logo').show();
    });

    // $('.simple').click(function(){
    //     $('#feature-book').show()
    // })

        // $('#feature-book').hide();
        $('#sharing').hide();
        $('#searching').hide();

    $('.simple').click(function(){
        $('#feature-book').show();
        $('#sharing').hide();
        $('#searching').hide();
    })

    $('.search').click(function(){
        $('#searching').show();
        $('#feature-book').hide();
        $('#sharing').hide();
    })

    $('.sharing').click(function(){
        $('#sharing').show();
        $('#searching').hide();
        $('#feature-book').hide();
    })


    // slider entry delay
    const observar = new IntersectionObserver((enteries) => {
        enteries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting){
                entry.target.classList.add('show')
            }else{
                entry.target.classList.remove('show')
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observar.observe(el));
    

});