require.def("basicapp/appui/formatters/testdataformatter",
    [
        "antie/formatter",
        "antie/widgets/label",
        "antie/widgets/button"
    ],
    function(Formatter, Label, Button) {
        return Formatter.extend({
            format : function (iterator) {
                var button, item;
                item = iterator.next();
                button = new Button("person" + item.id);
                button.appendChildWidget(new Label(item.first_name + " " + item.last_name));
                return button;
            }
        });
    }
);