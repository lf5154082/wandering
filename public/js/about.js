if (!window.jQuery){
    throw new Error('index.js����jQuery!')
}
//�����������

$('.fix').on('click',function(e){
    e.preventDefault();//this=>a
    //����a��href�����ҵ���Ӧ��¥��ľ���ҳ�涥����ƫ����
    var Id=$(this).attr('href');
    var top=$(Id).offset().top;
    $('body').animate({scrollTop:top},1000);

});

+function(){


}();
