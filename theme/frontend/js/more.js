var ADD_MORE_FUNCTION = (function () {
    var showPassword = function (input_target, _this) {
        var type_input = input_target.getAttribute("type");
        if (type_input == "password") {
            input_target.setAttribute("type", "text");
            _this.querySelector("i").setAttribute("class", "fa fa-eye");
        } else {
            input_target.setAttribute("type", "password");
            _this
                .querySelector("i")
                .setAttribute("class", "fa fa-solid fa-eye-slash");
        }
    };

    return {
        init: function () {},
        showPassword: function (input_target, _this) {
            showPassword(input_target, _this);
        },
    };
})();
ADD_MORE_FUNCTION.init();
