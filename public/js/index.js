if (!window.jQuery){
    throw new Error('index.js依赖jQuery!')
}
//滚动监听插件

    $('.fix').on('click',function(e){
    e.preventDefault();//this=>a
    //根据a的href属性找到对应的楼层的距离页面顶部的偏移量
    var Id=$(this).attr('href');
    var top=$(Id).offset().top;
    $('body').animate({scrollTop:top},1000);

});

+function(){

    $(".small").on("click",function(){
        $(".fl-pop").css("width","100%");
        $(this).css({"opacity":"0","width":"0"})
    });
    $(".close").on("click",function(){
        $(".fl-pop").css("width","0");
        $(".small").css({"opacity":"1","width":"140px"})
    });
    $(function(){
        var win=$(window);
        var sc=$(document);
        win.scroll(function(){
            if(sc.scrollTop()>1000){
                $('.fix').fadeIn();
            }else{
                $('.fix').fadeOut();
            }
        })
    });
    $('.aa2').on('mouseenter',function(){
        $('.wxewm').css('display','block');
            $(".a2").addClass('hover')
    }).on('mouseleave',function(){
        $('.wxewm').css('display','none');
        $(".a2").removeClass('hover')
    });
    $('.aa1').on('mouseenter',function(){
        $('.sjewm').css("display",'block');
            $(".a1").addClass('hover')
    }).on('mouseleave',function(){
        $('.sjewm').css("display",'none');
        $(".a1").removeClass('hover')
    });
    $('[type="button"]').click(function(e){
        e.preventDefault();
        $.ajax({
            type:'POST',
            url:'/msg',
            data:{
                uname:$('[name="uname"]').val(),
                email:$('[name="email"]').val(),
                phone:$('[name="phone"]').val(),
                msg:$('[name="msg"]').val()
            },
            success:function(){
                   $('[name="uname"]').val('');
                   $('[name="email"]').val('');
                   $('[name="phone"]').val('');
                   $('[name="msg"]').val('');
            }

        })
    })
}();
