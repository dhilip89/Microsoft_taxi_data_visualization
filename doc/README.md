取出req中的参数, 找到idx对应的类处理请求. 处理完毕. 返回数据.
// ===================================
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


// ==================================
function hello(req) {
	console.log(req);
}

module.exports = hello;

------------------------------------

var idx = 5;

var say = require(mapRoute(idx));

say({idx: 1190, words: "hello world"});

function mapRoute(idx) {
	return './hello';
}
// ==================================