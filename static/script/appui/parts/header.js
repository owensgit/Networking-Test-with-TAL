require.def("basicapp/appui/parts/header", 
	[
		"antie/widgets/container",
        "antie/widgets/button",
        "antie/widgets/label",
        "antie/widgets/horizontallist"
	],
	function (Container, Button, Label, HorizontalList) {

		return Container.extend({
			
			init: function () {
				var self = this;

				this._super();

				var horizontalList = new HorizontalList();

				var btn1 = new Button("btn1");
				var label1 = new Label("Item One");
				btn1.appendChildWidget(label1);

				var btn2 = new Button("btn2");
				var label2 = new Label("Item Two");
				btn2.appendChildWidget(label2);

				var btn3 = new Button("btn3");
				var label3 = new Label("Item Three");
				btn3.appendChildWidget(label3);

				var btn4 = new Button("btn4");
				var label4 = new Label("Item Four");
				btn4.appendChildWidget(label4);

				this.appendChildWidget(horizontalList);


				horizontalList.appendChildWidget(btn1);
				horizontalList.appendChildWidget(btn2);
				horizontalList.appendChildWidget(btn3);
				horizontalList.appendChildWidget(btn4);
				

				return this;
			}

		});

	})