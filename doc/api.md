#API文档#

#无特殊说明全为GET方式#

##1.users##
/api/users

###1.addUser###
method:
POST

params:

* phone
* name
* password

return:

{
    code: 200,
    msg:'增加成功'
}

{
   code: 1,
   msg: '操作失败'
}

###2.login###
method:
POST

params:

* phone
* password

return:

{
      code: 200,
      msg:'登录成功'
}

{
   code: 1,
   msg: '操作失败'
}

###3.query###

params:

* id  同用户手机号

return:

{
  "uid": "123",
  "uname": "han",
  "password": "123",
  "issu": 1
}

{
"code": 1,
"msg": "操作失败"
}

##2.news##
/api/news

###1.addNews###
method:
POST

params:

* typeid	类别的ID

* uid		发布新闻的人的ID

* title       标题

* content	内容

return:

{
  "code": 200,
  "msg": "增加新闻成功"
}

{
"code": 1,
"msg": "操作失败"
}

###2.addComment###

method:
POST

params:

* newsid 	新闻ID
* uid		发表评论的人的ID
* content  	评论内容

return:

{
  "code": 200,
  "msg": "评论成功"
}

{
"code": 1,
"msg": "操作失败"
}

###3.queryCommentList###

params:

* newsid 	新闻ID

return:

[
  {
    "content": "hahahahhaha",
    "uname": "han"
  },
  {
    "content": "hello",
    "uname": "han"
  }
]

{
"code": 1,
"msg": "操作失败"
}

###4.queryNewsContent###

params:

* newsid 	新闻ID

return:

{
  "newsid": 2,
  "title": "第二条",
  "uname": "han",
  "content": "hahahahhaha"
}

{
"code": 1,
"msg": "操作失败"
}

###5.queryNewsList###

params:

* typeid 	类别ID

return:

[
  {
    "newsid": 2,
    "title": "第二条",
    "uname": "han",
    "content": "hahahahhaha"
  },
  {
    "newsid": 1,
    "title": "放假了",
    "uname": "han",
    "content": "我也在本周的佛法的发放"
  }
]

{
"code": 1,
"msg": "操作失败"
}

##3.post##

###1.addPost

method:
POST

params:
* uid 		用户ID
* title 	标题
* starttime		开始时间
* endtime  		结束时间
* content  	内容

return:
{
  "code": 200,
  "msg": "增加公告成功"
}

{
"code": 1,
"msg": "操作失败"
}

###2.queryPostList

params:
无

return:

[
  {
    "postid": 3,
    "uname": "huhu",
    "title": "第三条公告",
    "starttime": "2015-07-22T16:00:00.000Z",
    "endtime": "2015-07-31T16:00:00.000Z"
  },
  {
    "postid": 4,
    "uname": "huhu",
    "title": "第4条公告",
    "starttime": "2015-07-22T16:00:00.000Z",
    "endtime": "2015-07-31T16:00:00.000Z"
  },
  {
    "postid": 1,
    "uname": "han",
    "title": "放假了",
    "starttime": "2015-07-22T16:00:00.000Z",
    "endtime": "2015-07-30T16:00:00.000Z"
  },
  {
    "postid": 2,
    "uname": "huhu",
    "title": "no action",
    "starttime": "2015-07-22T16:00:00.000Z",
    "endtime": "2015-07-30T16:00:00.000Z"
  }
]

{
"code": 1,
"msg": "操作失败"
}

###3.queryPostContent

params:
* postid 	公告ID

return:

{
  "title": "no action",
  "uname": "huhu",
  "contemt": "have a break!",
  "starttime": "2015-07-22T16:00:00.000Z",
  "endtime": "2015-07-30T16:00:00.000Z"
}

{
  "code": 1,
  "msg": "操作失败"
}

##4.doc##

###1.addDoc###

method:
POST

params:
* uid 		用户ID
* title 	标题
* content 	内容
* altertime  更新时间

return:
{
  "code": 200,
  "msg": "增加文档成功"
}

###2.editDoc###

method:
POST

params:
* content 	内容
* docid 	文档ID
* altertime 		修改时间

return:
{
  "code": 200,
  "msg": "修改文档成功"
}

###3.delDoc###

method:
POST

params:
* docid 	文档ID

return:
{
  "code": 200,
  "msg": "增加文档成功"
}

###4.queryDocList###

params:
无

return:

[
  {
    "docid": 2,
    "title": "第2条文档"
  },
  {
    "docid": 3,
    "title": "第一条文档"
  }
]


###5.queryDocContent###

params:
* docid 	文档ID

return:
{
  "docid": 2,
  "uname": "han",
  "title": "第2条文档",
  "content": "这还是第2条文档",
  "altertime": "2015-07-25T04:23:22.000Z"
}

###6.searchDoc###

params:
* keyword 	搜索关键词

return:
[
  {
    "docid": 4,
    "title": "这是第几条文档"
  },
  {
    "docid": 5,
    "title": "这是第?条文档"
  }
]


##5.contact##

###1.addContact###

method:
POST

params:
* uid   手机号，同时是uid
* groupid   分组ID

return:
{
  "code": 200,
  "msg": "增加联系人成功"
}

###2.delContact###

params:
* uid   用户ID

return:
{
  "code": 200,
  "msg": "删除联系人成功"
}

###3.queryContactList###

params:
无

return:
[
  {
    "uname": "han",
    "uid": "123"
  },
  {
    "uname": "huhu",
    "uid": "1234"
  },
  {
    "uname": "huhu",
    "uid": "12345"
  }
]

###4.queryContactContent

params:
* uid   手机号

return:
{
  "uname": "han",
  "uid": "123"
}

###5.addContactGroup

method:
POST

params:
* groupname   分组名

return:
{
  "code": 200,
  "msg": "增加联系人分组成功"
}


###6.queryGroupList

params:
无

return:
[
  {
    "groupid": 1,
    "groupname": "工作"
  },
  {
    "groupid": 2,
    "groupname": "大学"
  },
  {
    "groupid": 3,
    "groupname": "朋友"
  },
  {
    "groupid": 4,
    "groupname": "女人"
  }
]

###7.queryGroupContactList

params:
* groupid   分组ID

return:
[
  {
    "uname": "han",
    "uid": "123"
  }
]


##6.mail##

###1.sendMail###

method:
POST

params:
* fromuid 	发送方ID
* touid 	接收方ID
* time 	时间
* content 	内容

return:
{
  "code": 200,
  "msg": "增加文档成功"
}

###2.queryMailList###

params:
* uid 		用户ID

return:
[
  {
    "mailid": 1,
    "fromuid": "123",
    "touid": "1234",
    "time": "2015-07-21T16:00:00.000Z",
    "content": "hello"
  },
  {
    "mailid": 2,
    "fromuid": "1234",
    "touid": "123",
    "time": "2015-07-28T16:00:00.000Z",
    "content": "你在干嘛呢？"
  }
]

###3.queryMailContent###

params:
* mailid 	邮件ID

return:
{
  "fromuid": "123",
  "touid": "1234",
  "time": "2015-07-21T16:00:00.000Z",
  "content": "hello"
}
