
/**
 * Created by gongzy on 2017/2/8.
 */
var express = require("express");
var app = express();
var heartBeatService=require("./HeartBeatService");
var hbs =heartBeatService.getInstance(app);
timerStart(1000*60);
function  timerStart(millisecond) {
    var timerToken = setInterval(function () {
            console.log("服务端状态：" + hbs.state)
        },
        millisecond
    );
}
app.get('/heartBeatServiceTest', function (req, res) {
    hbs.state = req.query.state;
    console.log(req.query.state);
    res.end("设置完毕:"+ hbs.state);
});
app.listen(8099);
