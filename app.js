var express = require('express')
var port = process.env.port ||3000
var app = express()
app.set('views','./views')
app.set('view engine','jade')
app.listen(port)
console.log('port:'+port)

//index page
app.get('/',function(req,res){
    res.render('index',{
        title:'melody 首页'
    })
})
//list page
app.get('/admin/list',function(req,res){
    res.render('list',{
        title:'melody 列表页'
    })
})
//detail page
app.get('/movie/:id',function(req,res){
    res.render('detail',{
        title:'melody 详情页'
    })
})
//admin page
app.get('/admin/movie',function(req,res){
    res.render('admin',{
        title:'melody 后台页'
    })
})