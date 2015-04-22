var dataservice = (function($, config) {
    var callApi = function (url, type, callback) {
            $.ajax({
                url: url,
                type: type,
                dataType: 'json',
                success: function (data) {
                    callback(data);
                }
            });
        },
        getMessage = function (id, callback) {
            url = config.baseUrl + id;
            callApi(url, 'GET', callback);
        };
 
    return {
        getMessage: getMessage
    };
})($, config); 