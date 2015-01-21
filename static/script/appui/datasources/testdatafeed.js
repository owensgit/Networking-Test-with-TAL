require.def("basicapp/appui/datasources/testdatafeed",
    [
        "antie/class",
        "antie/devices/device" // is this correct?
    ],
    function(Class, Device) {
        return Class.extend({
            loadData : function(callbacks) {

                var url = 'http://localhost:8888/network_test_tal/test_data.json'; 
                var device = new Device(); // is this correct?

                device.loadURL(url, {
                    onLoad: function(responseText) {
                        console.log("Success!", responseText);

                        callbacks.onSuccess(responseText);
                    },
                    onError: function(responseText) {
                        console.error("Error!", responseText);
                    }
                });

            }
        });
});