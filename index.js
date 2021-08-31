const express = require('express');
const app = express();

//处理静态资源
app.use(express.static('public'))
//处理参数
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 设置允许跨域访问服务器
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header('Access-Control-Allow-Headers', "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

// 路由
app.get('/data', (req, res) => {
    res.send('Hello World!')
})
app.get('/data1', (req, res) => {
    res.send('Hello Jack I\'m data1!');
})

// 启动监听
app.listen(3000, () => {
    console.log('running...');
})