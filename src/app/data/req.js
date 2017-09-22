import $ from 'jquery';

function fire(info, success, error) {
    $.ajax({
        url: info.url,
        data: info.data,
        type: info.method || 'post',
        success: function(data) {
            if(success) {
                success(data);
            }
        },
        error: function(err) {
            if(error) {
                error(err);
            }
        }
    });
}

export {
    fire
};