var ADD_MORE_CUS_FUNCTION = (function () {
    var handleShowMenuAccount = function () {
        var listItemLi = document.querySelectorAll(".nav-menu li");
        listItemLi.forEach(function (element) {
            if (element.querySelector("ul")) {
                var span = document.createElement("span");
                span.className = "btn-dropdown-menu";
                span.innerHTML =
                    '<i class="fa fa-angle-down" aria-hidden="true"></i>';
                element.appendChild(span);
            }
        });
        var listBtnDropdownMenu = document.querySelectorAll(
            ".nav-menu .btn-dropdown-menu"
        );
        var timeSlide = 300;
        listBtnDropdownMenu.forEach(function (btnDropdownMenu) {
            var tag_a_active = btnDropdownMenu
                .closest("li")
                .querySelector("a.active");
            if (tag_a_active != undefined && tag_a_active != null) {
                btnDropdownMenu
                    .closest("li")
                    .querySelector("ul").style.display = "block";
            }

            btnDropdownMenu.addEventListener("click", function (event) {
                var _this = this;
                _this.style.pointerEvents = "none";
                setTimeout(function () {
                    _this.style.pointerEvents = "auto";
                }, timeSlide);
                var listUlChild = _this.previousElementSibling;
                _this.classList.toggle("open");
                listUlChild.style.display =
                    listUlChild.style.display === "block" ? "none" : "block";
            });
        });
    };
    var money_format = function (element) {
        var elementMoney = element;
        var money = elementMoney.value;
        money = money.replace(/-/g, "");
        money = money.replace(/,/g, "");
        var val = parseFloat(money)
            ? ADD_MORE_CUS_FUNCTION._number_format(money)
            : elementMoney.hasClass("zero")
            ? 0
            : "";
        elementMoney.value = val;
        document.querySelector(elementMoney.getAttribute("real_input")).value =
            money;
    };
    var _number_format = function (number) {
        return new Intl.NumberFormat().format(number).replaceAll(".", ",");
    };
    var initSelectRegisterLawyer = function () {
        if ($("#careers").length == 0) return;
        $("#careers").on("select2:opening", function (ev) {
            if ($(this).val().length >= 3) {
                ev.preventDefault();
            }
        });
    };

    return {
        init: function () {
            handleShowMenuAccount();
        },
        initSelectRegisterLawyer() {
            initSelectRegisterLawyer();
        },
        money_format: function (element) {
            money_format(element);
        },
        _number_format: function (number) {
            return _number_format(number);
        },
    };
})();
ADD_MORE_CUS_FUNCTION.init();
$(document).ready(function () {
    ADD_MORE_CUS_FUNCTION.initSelectRegisterLawyer();
});
