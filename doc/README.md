取出req中的参数, 找到idx对应的类处理请求. 处理完毕. 返回数据.  
```javascript
dispatch({
   type: FIRE_REQ,
   data: {
}});


fireReq(data, sender) {
   $.ajax({
      url: '/',
      data: data,
     type: 'post',
     success: function() {
         sender.success();
     },
     error: function() {
        sender.error();
     }
   });
}
```

```javascript
function hello(req) {
   console.log(req);
}

module.exports = hello;


//------------------------------------

var idx = 5;

var say = require(mapRoute(idx));

say({idx: 1190, words: "hello world"});

function mapRoute(idx) {
   return './hello';
}
// ==================================
```
## design  
* 1. 某车某天的轨迹回放.  
* 2. 每天各个时间段车辆密度分布.  
* 3. 车辆活动范围分析，欧氏距离.  
* 4. 展示什么时候活跃.  
* 5. 展示出租车在哪里活动.  

```
进入系统，出现5个选项分别指向5个页面，每个页面单独的功能.
```