"use strict"

var sidenav = {
    navopener: document.getElementById("toggleNav"),
    nav: document.getElementById("nav"),
    navlist: this.nav.querySelectorAll("ul li"),


    navClickOpenAndClose: function () {
        this.navopener.onclick = function () {
            nav.style.display = "block";
        }
        this.navlist[0].onclick = function () {
            nav.style.display = "none";
        }
        for (var lis of this.navlist) {
            lis.querySelector("a").onclick = function () {
                nav.style.display = "none";
            }
        }
    },

    navlistNoHideNav: function () {
        for (var lis of this.navlist) {
            lis.querySelector("a").onclick = function () {
                nav.style.display = "block";
            }
        }
    }

}

window.onload = function () {
    if (window.innerWidth < 720) {
        sidenav.navClickOpenAndClose();
    };
}

window.onresize = function () {
    if (window.innerWidth > 720) {
        sidenav.nav.style.display = "block";
        sidenav.navopener.style.display = "none";
        sidenav.navlistNoHideNav();
    } else {
        sidenav.nav.style.display = "none";
        sidenav.navopener.style.display = "block";
        sidenav.navClickOpenAndClose();
    }

}