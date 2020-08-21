"use strict";
/**
 * All javascript code of hope software.
 * @package Keshavjha.me
 * @since 2020
 * @date 28-02-2020
 * @author KeshavJha <mekkj98@gmail.com>
 */
(function () {
    /**
     * @var navbar
     */
    var navbar = {
        alreadyEvent: false,
        menuElementClickEvent() {
            if ($(window).width() <= 769) {
                if (!this.alreadyEvent) {
                    this.alreadyEvent = true;
                    $("#header .header-right .navbar ul li a").click(function () {
                        $("#header .header-right").toggleClass("active");
                    });
                }
            }
        },
        menuOpener() {
            $("#navbarOpener").click(function () {
                $("#header .header-right").toggleClass("active");
            });
            this.menuElementClickEvent();
        },
        menuOnResize() {
            this.menuElementClickEvent();
            if ($(window).width() > 769) {
                $("#header .header-right").removeClass("active");
            }
        },
        onScroll() {
            if (window.scrollY <= 400) {
                $("#header").removeClass("scrolled");
            } else {
                $("#header").fadeIn().addClass("scrolled");
            }
        }
    }

    /** 
     * @var tab 
     * Create methods to handle tab related event
     */
    var tab = {
        init: function (tabIconsSelector, tabContentsSelector) {
            let tabIcons = $(tabIconsSelector);
            let tabContents = $(tabContentsSelector);
            tabIcons.each(function (index, element) {
                $(element).click(function () {
                    tabIcons.removeClass("active");
                    tabContents.removeClass("active").fadeOut();
                    $("#" + this.getAttribute('data-id')).fadeIn().addClass("active");
                    $(this).addClass("active");
                });
            });
        }
    };

    /** 
     * @var masonary 
     * Write methods to handle masonary gallery related events
     */
    var masonaryGallery = {
        init: function () {
            if (jQuery.fn.masonry) {
                var $grid = jQuery(".grid").masonry();
                $grid.imagesLoaded().progress(function () {
                    $grid.masonry("layout");
                }).always(function () {
                    $grid.masonry("layout");
                });
            }
        }
    };

    /**
     * @var contactForm 
     * Handle contact form related events
     */
    var contactForm = {
        init: function () {
            $(".contact-form").submit(function (e) {
                e.preventDefault();
                var $form = $(this);
                $.post($form.attr("action"), $form.serialize()).then(function () {
                    alert("Thank you!");
                }).fail(function () {
                    alert("We are unable to handle the request. Please try again!");
                });
                $(".contact-form").each(function () {
                    this.reset();
                });
            });
        }
    };

    /** 
     * @event DOMContentLoaded
     * run the scripts when doms are loaded */
    document.addEventListener('DOMContentLoaded', function () {
        navbar.menuOpener();
        tab.init(".resume-tabs .tabs-icon-clicker", ".resume-tabs .item");
        tab.init(".skills-tabs .tabs-icon-clicker", ".skills-tabs .item");
        masonaryGallery.init();
        contactForm.init();
    });

    /**
     * @event resize
     * run methods on resize of browser
     */
    window.addEventListener("resize", function () {
        navbar.menuOnResize();
    })

    /**
     * @event scoll 
     * run the scripts when window in scolled down 
     */
    document.addEventListener("scroll", () => {
        navbar.onScroll();
    });

})();