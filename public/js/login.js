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

    //功能1监听"登录"按钮单击事件
  $('#bt-login').click(function(){
        var n=$('#uname').val();
        var p=$('#password').val();
        //异步提交给WEB服务器NODE.JS
        $.ajax({
            type:'POST',
            url:'/user/login',
            data:{
                uname:n,
                upwd:p
            },
            success:function(result){
                console.log('接收到异步响应消息');
                console.log(result);
                if(result.code===1){
                    location.href='http://127.0.0.1:8080/w_index.html';
                    sessionStorage['loginUname']=n;
                    sessionStorage['loginUid']=result.uid;
                }else{
                    alert('登录失败 用户名密码错误')
                }
            }
        })
    });

