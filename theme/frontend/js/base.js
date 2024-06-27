var BASE_GUI = {
    disableButton: function (element) {
        let innerDimensions = BASE_GUI.innerDimensions(element);
        let imgLoading = `<span style="display: flex;text-align:center;width: ${innerDimensions.width}px;height: ${innerDimensions.height}px;justify-content: center;"><img style="height: ${innerDimensions.height}px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRjQ0MzM2IiBzdHJva2Utd2lkdGg9IjciIHI9IjQ0IiBzdHJva2UtZGFzaGFycmF5PSIyMDcuMzQ1MTE1MTM2OTI2MzIgNzEuMTE1MDM4Mzc4OTc1NDQiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIwLjU1ODY1OTIxNzg3NzA5NDlzIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvY2lyY2xlPgo8IS0tIFtsZGlvXSBnZW5lcmF0ZWQgYnkgaHR0cHM6Ly9sb2FkaW5nLmlvLyAtLT48L3N2Zz4=" />`;
        element.setAttribute("data-old-text", element.innerHTML);
        element.innerHTML = imgLoading;
        element.style.pointerEvents = "none";
    },

    innerDimensions: function (element) {
        var computedStyle = getComputedStyle(element);
        let width = element.clientWidth;
        let height = element.clientHeight;
        height -=
            parseFloat(computedStyle.paddingTop) +
            parseFloat(computedStyle.paddingBottom);
        width -=
            parseFloat(computedStyle.paddingLeft) +
            parseFloat(computedStyle.paddingRight);
        return { height, width };
    },

    enableButton: function (element) {
        element.innerHTML = element.getAttribute("data-old-text");
        element.removeAttribute("data-old-text");
        element.style.pointerEvents = "all";
    },
    initBtnShowWarning: function () {
        var listBtnShowWarning = document.querySelectorAll(".btn-show-warning");
        listBtnShowWarning.forEach((btnShowWarning) => {
            btnShowWarning.addEventListener("click", function () {
                var data = {};
                data.code = 100;
                data.message = btnShowWarning.dataset.warning;
                NOTIFICATION.toastrMessage(data);
            });
        });
    },
    copyTextToClipboard: function (text) {
        var textArea = document.createElement("textarea");
        textArea.style.position = "fixed";
        textArea.style.top = 0;
        textArea.style.left = 0;
        textArea.style.width = "2em";
        textArea.style.height = "2em";
        textArea.style.padding = 0;
        textArea.style.border = "none";
        textArea.style.outline = "none";
        textArea.style.boxShadow = "none";
        textArea.style.background = "transparent";
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            var successful = document.execCommand("copy");
            document.body.removeChild(textArea);
            return true;
        } catch (err) {
            document.body.removeChild(textArea);
            return false;
        }
    },
    initBtnCopyText: function () {
        var listBtnCopyText = document.querySelectorAll(".btn-copy-text");
        listBtnCopyText.forEach((btnCopyText) => {
            btnCopyText.addEventListener("click", function () {
                if (this.dataset.text != "undefined") {
                    var statusCopy = BASE_GUI.copyTextToClipboard(
                        this.dataset.text
                    );
                    var data = {};
                    data.code = 100;
                    data.message = "Lỗi không xác định";
                    if (statusCopy) {
                        data.code = 200;
                        data.message =
                            this.dataset.ssmess != "undefined"
                                ? this.dataset.ssmess
                                : "Copy thành công";
                    } else {
                        data.message =
                            this.dataset.fmess != "undefined"
                                ? this.dataset.fmess
                                : "Copy thất bại";
                    }
                    NOTIFICATION.toastrMessage(data);
                }
            });
        });
    },
    init: function () {
        BASE_GUI.initBtnCopyText();
        BASE_GUI.initBtnShowWarning();
    },
};
var NOTIFICATION = {
    toastrMessage: function (data) {
        NOTIFICATION.showNotify(data.code, data.message);
    },
    toastrMessageReload: function (data) {
        NOTIFICATION.showNotify(data.code, data.message);
        if (data.code == 200) {
            setTimeout(function(){
                window.location.reload();
            },2000);
        }
    },
    toastrMessageRedirect: function (data) {
        NOTIFICATION.showNotify(data.code, data.message);
        if (data.redirect_url) {
            if (data.code == 200) {
                setTimeout(function(){
                    window.location.href = data.redirect_url;
                },2000);
            }
        }
    },
    toastrMessageClearData: function (data, baseData, form) {
        NOTIFICATION.showNotify(data.code, data.message);
        form.reset();
    },
    showNotifyWhenLoadPage() {
        if (
            typeof typeNotify != "undefined" &&
            typeNotify != undefined &&
            typeNotify != "" &&
            typeof messageNotify != "undefined" &&
            messageNotify != undefined &&
            messageNotify != ""
        ) {
            var code = typeNotify;
            this.showNotify(code, messageNotify);
        }
    },
    showNotify(code, message) {
        if (message == "undefined" || message == undefined || message == "") {
            return;
        }
        for (const toastr of document.querySelectorAll(".toastify")) {
            toastr.remove();
        }
        Toastify({
            text: message,
            close: false,
            avatar:
                code == 200
                    ? "base_assets/images/check.svg"
                    : "base_assets/images/alert.svg",
            style: {
                background: code == 200 ? "#06d6a0" : "#ef476f",
            },
        }).showToast();
    },
};


window.addEventListener("DOMContentLoaded", function () {
    BASE_GUI.init();
    NOTIFICATION.showNotifyWhenLoadPage();
});
