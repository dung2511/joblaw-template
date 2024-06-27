var TINYMCE = (() => {
    var load = () => {
        tinymce.init({
            selector: ".editor",
            menubar: false,
            statusbar: false,
            plugins: "paste autoresize",
            paste_preprocess: function (plugin, args) {
                args.content = args.content
                    .replace(/<img[^>]*>/gi, "")
                    .replace(/<\/?a[^>]*>/g, "");
            },
            toolbar:
                "undo redo | styleselect | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | outdent indent",
            resize: true,
            min_height: 200,
            max_height: 500,
            toolbar_location: "bottom",
            setup: setupOption,
        });
    };

    var setupOption = (editor) => {
        editor.on("click", function (e) {
            editor.targetElm.click();
        });
        editor.on("input", function (e) {
            tinyMCE.triggerSave();
            window.dispatchEvent(
                new CustomEvent("change.content.rs", {
                    detail: {
                        el: editor.targetElm,
                        content: editor.getContent(),
                    },
                })
            );
            editor.targetElm.click();
        });

        editor.on("keyup", function (e) {
            tinyMCE.triggerSave();
            window.dispatchEvent(
                new CustomEvent("change.content.rs", {
                    detail: {
                        el: editor.targetElm,
                        content: editor.getContent(),
                    },
                })
            );
            editor.targetElm.click();
        });
    };

    return {
        init: () => {
            if (typeof tinymce == "undefined") {
                return;
            }
            load();
        },
    };
})();
window.addEventListener("DOMContentLoaded", function () {
    TINYMCE.init();
});
