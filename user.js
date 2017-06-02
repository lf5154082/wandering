/**
 * 用户相关功能模块
 * 向外提供login()和register()两个请求处理函数
 */
const mysql=require('mysql');
const pool=require('./dbpool');
const qs=require('querystring');
//接受客户端POST提交的请求数据:uname/upwd 保存入数据库返回JSON字符串
module.exports={
    register:(req,res)=>{
        req.on('data',(buf)=> {
            var obj = qs.parse(buf.toString());//解析请求数据
            //获得数据库连接
            console.log(obj);
            pool.getConnection((err,conn)=>{
                conn.query('INSERT INTO t_login VALUES(NULL,?,?)',[obj.uname,obj.upwd],(err,result)=>{
                    var output={//要输出给客户端的数据
                        code:1,
                        msg:'注册成功',
                        uid:result.insertId
                    };
                    res.json(output);
                    conn.release();
                })
            })
        });
    },
    //接受客户端POST提交的请求数据 UNAME UPWD 验证登录信息是否真确向客户端返回字符串
    //{'code:1'"msg:登录成功""uid":10}
    //{'code:2'"msg:用户名或密码错误"}
    login:(req,res)=>{
        req.on('data',(buf)=>{
            var obj = qs.parse(buf.toString());
            pool.getConnection((err,conn)=>{
                conn.query('SELECT * FROM t_login WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],(err,result)=>{
                    if(result.length>0){//查询到数据了
                        var output={
                            code:1,
                            msg:'登录成功 ',
                            uid:result[0].id
                        }
                    }else{// 没有查询到数据
                        var output={
                            code:2,
                            msg:'用户名或密码错误 '
                        }
                    }
                    res.json(output);
                    conn.release();
                })
            });
        })
    }
};