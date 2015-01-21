require.def("basicapp/appui/components/basic",
    [
        "antie/widgets/component",
        "antie/widgets/button",
        "antie/widgets/label",
        "antie/widgets/verticallist",
        "antie/datasource",
        "basicapp/appui/datasources/testdatafeed",
        "basicapp/appui/formatters/testdataformatter"
    ],
    function (Component, Button, Label, VerticalList, DataSource, TestDataFeed, TestDataFormatter) {

    	return Component.extend({

    		init: function () {

    			var self = this;

    			this._super("basic_component");

                var title = new Label("theTitle","Basic TAL Network Test with Data Binding");



                // Create a new formatter and feed
                testDataFormatter = new TestDataFormatter();
                testDataFeed = new TestDataFeed();
                
                // Create a DataSource, this uses the feed to get data and presents it to the formatter
                this._dataSource = new DataSource(this, testDataFeed, "loadData");


                this.datalist = new VerticalList("dataList", testDataFormatter);

                this.appendChildWidget(title);
                this.appendChildWidget(this.datalist);

                this.addEventListener("beforerender", function(ev) {
                    self._onBeforeRender(ev);
                });

                this.addEventListener("aftershow", function appReady() {
                    self.getCurrentApplication().ready();
                    self.removeEventListener('aftershow', appReady);
                });

    		},

            _onBeforeRender: function(ev) {
               // do the bind (and build the list's items)
                this.datalist.setDataSource(this._dataSource);
            }

    	});

    });