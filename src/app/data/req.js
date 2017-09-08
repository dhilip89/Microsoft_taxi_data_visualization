import $ from 'jquery';

function fetch(info, caller) {
   $.ajax({
      url: '/',
      data: info.info,
      type: 'post',
      success: function (data) {
         if(caller && caller.success) {
            caller.success(data);
         }
      },
      error: function (err) {
         if(caller && caller.error) {
            caller.error(err);
         }
      }
   })
}

export {
   fetch
};