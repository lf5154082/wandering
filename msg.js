const mysql=require('mysql');
const pool=require('./dbpool');
const qs=require('querystring');
module.exports={
    add:(req,res)=>{
    req.on('data',(data)=>{
        var obj=qs.parse(data.toString());
        pool.getConnection((err,conn)=>{
            conn.query('insert into t_msg values(null,?,?,?,?)',[obj.uname,obj.email,obj.phone,obj.msg],(err,result)=>{
                res.end('Ìí¼Ó³É¹¦'+result);

            })
        })
    })
}
};