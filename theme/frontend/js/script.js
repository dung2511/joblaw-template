var CLICK = {
    showMenu: function () {
        var buttonShowMenu = $(".show-menu-mobile");
        var closeMenu = $(".over-lay");
        if (typeof buttonShowMenu != "undefined") {
            buttonShowMenu.click(function () {
                $(".menu").addClass("active");
                $(".over-lay").addClass("show");
                $("body,html").addClass("show-menu");
            });
        }
        if (typeof closeMenu != "undefined") {
            closeMenu.click(function () {
                $(".menu").removeClass("active");
                $(".over-lay").removeClass("show");
                $("body,html").removeClass("show-menu");
            });
        }
        var width_ = window.innerWidth;
        var listIitemLi = $(".menu").find("li");
        listIitemLi.each(function (index, element) {
            if ($(element).find("> ul").length > 0) {
                $(element).append(
                    `<span class="btn-dropdown-menu"><i class="fa fa-angle-down text-[var(--cl-text-main)]" aria-hidden="true"></i></span>`
                );
            }
        });
        var listBtnDropdownMenu = $(".menu").find(".btn-dropdown-menu");
        var timeSlide = 300;
        listBtnDropdownMenu.click(function (event) {
            var _this = $(this);
            _this.css("pointer-events", "none");
            setTimeout(function () {
                _this.css("pointer-events", "all");
            }, timeSlide);
            // var parentLi = $(this.closest('li'));
            var listUlChild = $(this).prev("ul");
            _this.toggleClass("open");
            listUlChild.toggleSlide(timeSlide);
        });
    },
    fixedMenu: function () {
        var header = $(".header");
        var headerHeight = header.outerHeight();
        $("body").css("padding-top", headerHeight + `px`);
        header.addClass("fixed");
    },
    initAnimation: function () {
        var width_ = window.innerWidth;
        if (width_ > 1023) {
            var wow = new WOW();
            wow.init();
        }
    },
    playVideo: function () {
        var btn = document.querySelectorAll("[play-video]");
        if (typeof btn !== "undefined") {
            btn.forEach(function (elm) {
                elm.click = function () {
                    var link = this.getAttribute("data-link");
                    var html =
                        '<iframe width="100%" src="https://www.youtube.com/embed/' +
                        youtubeParser(link) +
                        '?autoplay=1" frameborder="0" allow="autoplay;accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                    this.innerHTML = html;
                    elm.classList.add("active");
                };
            });
        }
    },
    tabHome: function () {
        var moduleTabPro = document.querySelectorAll(".modules-tab");
        if (moduleTabPro.length == 0) return;
        moduleTabPro.forEach((element) => {
            var tabLinks = element.querySelectorAll(".tab-link");
            var tabContent = element.querySelectorAll(".tab-content");
            tabLinks[0].classList.add("active");
            tabContent[0].classList.add("active");
            tabLinks.forEach(function (el) {
                el.addEventListener("click", openTabs);
            });
            function openTabs(el) {
                var btn = el.currentTarget;
                var electronic = btn.dataset.electronic;
                var data = btn.dataset.target;
                var tab = $("[data-target]");
                for (let i = 0; i < tab._element.length; i++) {
                    if (tab._element[i]._element.dataset.target === data) {
                        tab._element[i]._element.classList.remove("active");
                    }
                }
                document
                    .querySelector("#" + electronic)
                    .classList.add("active");
                btn.classList.add("active");
            }
        });
    },
    showSidebarAccount: function () {
        var buttonShowSidebar = $(".show-sidebar");
        var closeMenu = $(".over-lay-sidebar");
        if (typeof buttonShowSidebar != "undefined") {
            buttonShowSidebar.click(function () {
                $(".sidebar-account").addClass("active");
                $(".over-lay-sidebar").addClass("show");
                $("body,html").addClass("show-menu");
            });
        }
        if (typeof closeMenu != "undefined") {
            closeMenu.click(function () {
                $(".sidebar-account").removeClass("active");
                $(".over-lay-sidebar").removeClass("show");
                $("body,html").removeClass("show-menu");
            });
        }
    },
    scrollListJob: function () {
        var listJobSearch = document.querySelectorAll(".list-job-search");
        listJobSearch.forEach((e) => {
            var nextList = e.querySelector(".next-filter");
            var prevList = e.querySelector(".prev-filter");
            var listFilter = e.querySelector(".list-filter");
            prevList.addEventListener("click", function () {
                listFilter.scrollLeft -= 100;
            });
            nextList.addEventListener("click", function () {
                listFilter.scrollLeft += 100;
            });
        });
    },
    loadMap: function () {
        var maps = $("#map");
        if (typeof maps !== "undefined") {
            var src = maps.attr("data-map");
            var frame = '<iframe src="' + src + '"></iframe>';
            var action = setTimeout(function () {
                maps.prepend(frame);
            }, 1000);
        }
    },
    showFilter: function () {
        var buttonShowSidebar = $(".show-sidebar-filter");
        var btnFilterPost = $(".show-sidebar-post");
        var closeMenu = $(".over-lay-sidebar");
        if (typeof buttonShowSidebar != "undefined") {
            buttonShowSidebar.click(function () {
                $(".nav-filter-sidebar").addClass("active");
                $(".over-lay-sidebar").addClass("show");
                $("body,html").addClass("show-menu");
            });
        }
        if (typeof closeMenu != "undefined") {
            closeMenu.click(function () {
                $(".nav-filter-sidebar").removeClass("active");
                $(".over-lay-sidebar").removeClass("show");
                $("body,html").removeClass("show-menu");
            });
        }
        if (typeof btnFilterPost != "undefined") {
            btnFilterPost.click(function () {
                $(".form-search-sidebar").addClass("active");
                $(".over-lay-sidebar").addClass("show");
                $("body,html").addClass("show-menu");
            });
        }
        if (typeof closeMenu != "undefined") {
            closeMenu.click(function () {
                $(".form-search-sidebar").removeClass("active");
                $(".over-lay-sidebar").removeClass("show");
                $("body,html").removeClass("show-menu");
            });
        }
    },
    selectForm: function () {
        var element_select2 = $(".js-select-2");
        if (element_select2.length > 0) {
            element_select2.each(function () {
                $(this).select2();
            });
        }
    },
    editorForm: function () {
        if ($(".editor").length > 0) {
            tinymce.init({
                selector: ".editor",
                menubar: true,
                height: 300,
                plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table contextmenu paste code",
                ],
                toolbar:
                    "undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | link image",
            });
        }
    },
    showFilterJob: function () {
        var btnShow = $(".show-filter__job");
        var btnClose = $(".close-filter__job ");
        if (typeof btnShow !== "undefined") {
            btnShow.click(function () {
                $(".form-search__job ").addClass("active");
            });
        }
        if (typeof btnClose !== "undefined") {
            btnClose.click(function () {
                $(".form-search__job").removeClass("active");
            });
        }
    },
    showOption: function () {
        var btn = $('.show-action');
        if (typeof btn !== 'undefined' && btn !== null) {
            btn.each(function (elm) {
                elm.click(function () {
                    elm.find('.list-action').toggleClass('open');

                })
            })
            document.addEventListener("click", function (event) {
                var insideBtn = event.target.closest(".show-action");

                var insidecontent = event.target.closest(".list-action");

                if (!insideBtn && !insidecontent) {
                    $(".list-action").removeClass("open");
                }
            });
        }
    },

    init: function () {
        CLICK.showMenu();
        CLICK.fixedMenu();
        CLICK.playVideo();
        CLICK.tabHome();
        CLICK.showSidebarAccount();
        CLICK.scrollListJob();
        CLICK.loadMap();
        CLICK.showFilter();
        CLICK.selectForm();
        //CLICK.editorForm();
        CLICK.showFilterJob();
        CLICK.showOption();
    },
};
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function () {
        CLICK.init();
    }, 100);
})
function youtubeParser(url) {
    var regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
}
