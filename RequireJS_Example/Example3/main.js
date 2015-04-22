(function() {
    requirejs.config(
        {
            paths: {
                'jquery': '../scripts/jquery-1.11.2.min'
            }
        }
    );
 
    require(
        ['messenger'],
        function(messenger) {
            var id = '19qtx';
            messenger.showMessage(id);
        }
    );
})();