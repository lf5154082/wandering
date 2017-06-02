if (!window.jQuery){
    throw new Error('index.js依赖jQuery!')
}
//滚动监听插件
+function(){
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
$('.fix').on('click',function(e){
    e.preventDefault();//this=>a
    //根据a的href属性找到对应的楼层的距离页面顶部的偏移量
    var Id=$(this).attr('href');
    var top=$(Id).offset().top;
    $('body').animate({scrollTop:top},1000);

});
$("#luxian_ul").on('click','a',function(e){
    e.preventDefault();
    $(this).css('text-decoration','none');
    $(this).parent().addClass('active').siblings('.active').removeClass('active');
    var id=$(this).attr('href');
    $(id).addClass('active').siblings('.active').removeClass('active');
});
$('.aa2').on('mouseenter',function(){
        $('.wxewm').toggle();
        //$(".a2").addClass('hover')
    }).on('mouseleave',function(){
        $('.wxewm').toggle();
        $(".a2").removeClass('hover')
    });
$('.aa1').on('mouseenter',function(){
        $('.sjewm').css("display",'block');
        $(".a1").addClass('hover')
    }).on('mouseleave',function(){
        $('.sjewm').css("display",'none');
        $(".a1").removeClass('hover');
    });

$('.s1,.s2,.s3,.s4').on('mouseenter',function(){
       $(this).addClass('animated swing')
}).on('mouseleave',function(){
       $(this).removeClass('animated swing')
});


}();




