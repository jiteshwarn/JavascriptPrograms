define('messenger',
    ['jquery', 'dataservice'],
    function ($, dataservice) {
        var showMessage = function (id) {
            dataservice.getMessage(id, function (message) {
                $("#messagebox").html(message.name);
            });
        };
 
        return {
            showMessage: showMessage
        };
    }
);