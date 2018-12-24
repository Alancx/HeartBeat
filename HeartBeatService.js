/**
 * Created by gongzy on 2017/2/9.
 */
/**
 * Created by gongzy on 2017/2/8.
 */
var HeartBeatService=function(app) {
    this.state = null;
    this.instance = null;
    var _app = app;
    app.get('/heartBeatService', function (req, res) {
        res.end(HeartBeatService.instance.state.toString());
    });
    app.post('/products', function(req, res) {
        res.end(this.state);
    });
    //console.log(1);
}
HeartBeatService.prototype = {
    get state() {
        console.log("get:" + this._value)
        return this._value;
    },
    set state(val) {
        this._value = val;

        console.log("set:" + this._value)
    }
}
HeartBeatService.getInstance=function(app)
{
    if(!this.instance){
        this.instance =new HeartBeatService(app);
    }
    return this.instance;
}
module.exports = HeartBeatService;

