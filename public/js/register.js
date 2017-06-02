//功能1监听"注册"按钮单击事件
$('#bt-register').click(function(){
    var n=$('#uname').val();
    var p=$('#password').val();
    //异步提交
    $.ajax({
        type:'POST',
        url:'/user/register',
        data:{
            uname:n,
            upwd:p
        },
        success:function(result){
            console.log('接收到异步响应消息');
            console.log(result);
            if(result.code===1){
                alert(' 注册成功!3s后自动跳转登录页面...');
                setTimeout(function(){
                    location.href='login.html';
                },3000)
            }else{
                alert(' 注册失败!稍后重试')
            }
        }
    })
});