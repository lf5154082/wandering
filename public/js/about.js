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


}();
