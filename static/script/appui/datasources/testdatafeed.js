require.def("basicapp/appui/datasources/testdatafeed",
    [
        "antie/class",
        "antie/runtimecontext" // pass in the runtime context class
    ],
    function(Class, RuntimeContext) {
        return Class.extend({
            loadData : function(callbacks) {

                var url = 'http://localhost:8888/network_test_tal/test_data.json'; 
                var device = RuntimeContext.getDevice(); // get the device object via the application class

                device.loadURL(url, {
                    onLoad: function(responseText) {
                        // run the callback onSuccess method to apply the data
                        callbacks.onSuccess(JSON.parse(responseText));
                    },
                    onError: function(responseText) {
                        console.error("Error!", responseText);
                    }
                });

            }
        });
});