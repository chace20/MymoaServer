// dao/userDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./newsSql');

// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: 1,
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    add: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.body;

            // 建立连接，向表中插入值
            // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
            connection.query($sql.insert, [param.typeid, param.uid,param.title,param.content], function(err, result) {
                if(result) {
                    result = {
                        code: 200,
                        msg:'增加新闻成功'
                    };    
                }

                // 以json形式，把操作结果返回给前台页面
                jsonWrite(res, result);

                // 释放连接 
                connection.release();
            });
        });
    },
    queryList: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;
            connection.query($sql.queryList, param.typeid,function(err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    queryById: function (req, res, next) {
        var id = +req.query.newsid; // 为了拼凑正确的sql语句，这里要转下整数
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryById, id, function(err, result) {
                jsonWrite(res, result[0]);
                connection.release();
            });
        });
    },
    comment: function(req, res, next){
        pool.getConnection(function(err, connection){
            var param = req.body;
            connection.query($sql.comment, [param.newsid,param.uid,param.content],function(err,result){

                if(result) {
                    result = {
                        code: 200,
                        msg:'评论成功'
                    };    
                }
                jsonWrite(res, result);
                connection.release();
            });
        }); 
    },
    queryCommentList: function(req, res, next){
        pool.getConnection(function(err, connection){
            var param = req.query || req.params;
            connection.query($sql.queryCommentList, param.newsid,function(err,result){
                jsonWrite(res,result);
                connection.release();
            });
        }); 
    }
    
};
