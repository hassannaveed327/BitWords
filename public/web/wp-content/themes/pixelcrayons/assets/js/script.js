if(document.querySelector(".header-two")) {
var lastScrollTop = 0;    
window.addEventListener("scroll", function () {
    window.pageYOffset > 10 ? 
    document.querySelector(".header-two").classList.add("header-bg") : 
    document.querySelector(".header-two").classList.remove("header-bg");
    let scrollST = window.pageYOffset || document.documentElement.scrollTop;

    if( scrollST > lastScrollTop ){
        document.querySelector(".header-two").classList.remove("sc-up");
        document.querySelector(".header-two").classList.add("sc-down");        
    }else{
        document.querySelector(".header-two").classList.remove("sc-down");
        document.querySelector(".header-two").classList.add("sc-up");
    }
    lastScrollTop = scrollST <= 0 ? 0 : scrollST; // For Mobile or negative scrolling
});
}

var tabs = document.getElementsByClassName("text-column");
for (j = 0; j < tabs.length; j++) tabs[j].addEventListener("mouseover", clickTab);
function clickTab(e) {
    var t = e.currentTarget.id,
        s = e.currentTarget.getAttribute("data-section"),
        a = t.replace("a", "b"),
        n = document.getElementById(s).getElementsByClassName("header-menu"),
        r = document.getElementById(s).getElementsByClassName("text-column");
    for (i = 0; i < n.length; i++) r[i].classList.remove("active"), n[i].classList.remove("active");
    e.currentTarget.classList.add("active");
    let l = "mrow mrow-" + e.currentTarget.getAttribute("data-mrow"),
        o = document.getElementsByClassName(l).item(0);
    o && o.classList.add("active"), document.querySelector("#" + a).classList.add("active");
}
function submenu() {
    var e = document.getElementById("dropdownmwrap"),
        t = document.getElementById("dropdownmwrap1");
    "block" === e.style.display ? ((e.style.display = "none"), (t.style.display = "block")) : ((e.style.display = "block"), (t.style.display = "none"));
}
function submenuback() {
    var e = document.getElementById("dropdownmwrap"),
        t = document.getElementById("dropdownmwrap1");
    (e.style.display = "none"), (t.style.display = "block");
}
function innermenu(e, t) {
    var s = document.getElementById(t);
    let h = document.querySelectorAll(".hire-inner");
    if( h ){
        [].forEach.call(h, function(el){
            if( el.id !== t ){
                el.style.display = "none";    
            }            
        });
    }
    let main = ['main0','main00','inner5','main2','inner1','inner2','inner3'];
    if( main.includes(t) ){
        let a = document.querySelectorAll("span.parrow");
        if( a ){
            [].forEach.call(a, function(ec){
                if( ec !== e ){                
                    ec.classList.remove("active");
                }
            });
        }
        main.forEach(function(el){
            if( el !== t ){
                let elm = document.getElementById(el);
                elm.style.display = "none";
            }
        });
    }

    let a = document.querySelectorAll(".first-inner span.arrow-btn");
    if( a ){
        [].forEach.call(a, function(ec){
            if( ec !== e ){                
                ec.classList.remove("active");
            }
        });
    }
    e.classList.toggle("active"),
    "block" === s.style.display ? (s.style.display = "none") : (s.style.display = "block");
}

document.addEventListener("DOMContentLoaded", function () {

    for (var e = document.getElementsByClassName("hamberger-menu"), t = document.getElementsByClassName("mob-nav")[0], s = 0; s < e.length; s++)
        e[s].addEventListener("click", function () {
            t.classList.toggle("active");
        });
})

if( document.querySelector('.hamberger-menu') !== null ){
    (document.querySelector(".hamberger-menu").onclick = function (e) {
        document.querySelector(".hamberger-menu").classList.toggle("open-close"), e.preventDefault();
    });    
}

var cases = document.getElementById("case");
cases &&
    window.addEventListener("load", function () {
        document.querySelector(".case-studies.glider").addEventListener("glider-slide-visible", function (e) {
            Glider(this);
        }),
            document.querySelector(".case-studies.glider").addEventListener("glider-slide-hidden", function (e) {}),
            document.querySelector(".case-studies.glider").addEventListener("glider-refresh", function (e) {}),
            document.querySelector(".case-studies.glider").addEventListener("glider-loaded", function (e) {}),
            (window._ = new Glider(document.querySelector(".case-studies.glider"), {
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: !1,
                scrollLock: !1,
                dots: "false",
                dragDistance: !1,
                arrows: { prev: "#case .glider-prev", next: "#case .glider-next" },
                responsive: [
                    { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 2, itemWidth: 150, duration: 0.25 } },
                    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, itemWidth: 150, duration: 0.25 } },
                ],
            }));
    });
var industry = document.getElementById("industry");
industry &&
    window.addEventListener("load", function () {
        document.querySelector(".industry-case-sec.glider").addEventListener("glider-slide-visible", function (e) {
            Glider(this);
        }),
            document.querySelector(".industry-case-sec.glider").addEventListener("glider-slide-hidden", function (e) {}),
            document.querySelector(".industry-case-sec.glider").addEventListener("glider-refresh", function (e) {}),
            document.querySelector(".industry-case-sec.glider").addEventListener("glider-loaded", function (e) {}),
            (window._ = new Glider(document.querySelector(".industry-case-sec.glider"), {
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: !1,
                scrollLock: !1,
                rewind: !1,
                dots: "false",
                dragDistance: !1,
                arrows: { prev: "#industry .glider-prev", next: "#industry .glider-next" },
            }));
    });
var testim = document.getElementById("testimonial");
if( testim ){
    new Glider(document.querySelector(".glider.testimonial"), { 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        draggable: !1, 
        dots: ".dots", 
        arrows: { prev: "#testimonial .glider-prev", next: "#testimonial .glider-next" } 
    });
    document.querySelector(".glider.testimonial").addEventListener("glider-animated", function (e) {
        let ytiframe = document.getElementById("ytiframe");
        if(ytiframe){
            ytiframe.src = '';
            ytiframe.classList.remove('active');    
        }
        
    });
}


var tabs1 = document.getElementById("tabs1");
if (tabs1) {
    !(function () {
        "use strict";
        var e = function (e) {
            var t = document.querySelector(e.el),
                s = t.querySelectorAll(e.tabNavigationLinks),
                a = t.querySelectorAll(e.tabContentContainers),
                n = 0,
                r = !1,
                l = function (e, t) {
                    e.addEventListener("click", function (e) {
                        e.preventDefault(), o(t);
                    });
                },
                o = function (e) {
                    e !== n && e >= 0 && e <= s.length && (s[n].classList.remove("is-active"), s[e].classList.add("is-active"), a[n].classList.remove("is-active"), a[e].classList.add("is-active"), (n = e));
                };
            return {
                init: function () {
                    if (!r) {
                        (r = !0), t.classList.remove("no-js");
                        for (var e = 0; e < s.length; e++) l(s[e], e);
                    }
                },
                goToTab: o,
            };
        };
        window.tabs = e;
    })();
    var e = tabs({ el: "#tabs1", tabNavigationLinks: ".tab-link", tabContentContainers: ".tab-content" });
    e.init();
}
var hasUg = document.getElementById("guideTopic");
hasUg &&
    window.addEventListener("scroll", function () {
        document.querySelectorAll("#guideTopic .tab-content").forEach(function (e) {
            if (document.documentElement.scrollTop >= e.getBoundingClientRect().top + window.scrollY - 100) {
                let t = e.getAttribute("id");
                document.querySelectorAll("#guideTopic .tab-nav a").forEach(function (e) {
                    e.classList.remove("is-active");
                }),
                    document.querySelector('#guideTopic .tab-nav a[href="#' + t + '"]').classList.add("is-active");
            }
        });
    });

/*
var faqItem = document.getElementById("forFaq");
if (faqItem) {
    var faqItem = document.getElementsByClassName("faq-accordion-item-outer"),
        t = document.getElementsByClassName("faq-accordion-toggle");
    for (i = 0; i < t.length; i++) t[i].addEventListener("click", s, !1);
    function s() {
        var e = this.parentNode.className;
        for (i = 0; i < faqItem.length; i++) faqItem[i].className = "faq-accordion-item-outer";
        "faq-accordion-item-outer" == e && (this.parentNode.className = "faq-accordion-item-outer active");
    }
}*/
var faqItem = document.getElementById("forFaq");
if (faqItem) {
    var faqItem = document.getElementsByClassName("faq-accordion-item-outer"),
        t = document.getElementsByClassName("faq-accordion-toggle");
    for (i = 0; i < t.length; i++) t[i].addEventListener("click", s, !1);
     function s() {
        let current = document.querySelectorAll('.faq-accordion-item-outer');
		current.forEach(box => {
  box.classList.remove('active');
});
        this.parentNode.classList.add('active');
    
    }
}
!(function () {
    "use strict";
    var e = function (e) {
        var t = document.querySelector(e.el),
            s = t.querySelectorAll(e.tabNavigationLinks),
            a = t.querySelectorAll(e.tabContentContainers),
            n = 0,
            r = !1,
            l = function (e, t) {
                e.addEventListener("click", function (e) {
                    e.preventDefault(), o(t);
                });
            },
            o = function (e) {
                e !== n && e >= 0 && e <= s.length && (s[n].classList.remove("is-active"), s[e].classList.add("is-active"), a[n].classList.remove("is-active"), a[e].classList.add("is-active"), (n = e));
            };
        return {
            init: function () {
                if (!r) {
                    (r = !0), t.classList.remove("no-js");
                    for (var e = 0; e < s.length; e++) l(s[e], e);
                }
            },
            goToTab: o,
        };
    };
    window.tabs = e;
})();
var mTabOne = document.getElementById("tabs1");
if (mTabOne) {
    var e = tabs({ el: "#tabs1", tabNavigationLinks: ".tab-link", tabContentContainers: ".tab-content" });
    e.init();
}

document.addEventListener("DOMContentLoaded", 
function(){
    
    var tsloadThrottleTimeout;
    var isLoaded    = false;
    function vcloadTeckStack(){
        if(tsloadThrottleTimeout){
            clearTimeout( tsloadThrottleTimeout );
        }
        tsloadThrottleTimeout = setTimeout(function(){
        let scrollTop   = window.pageYOffset;
        let elm         = document.getElementById('guideTopic');       
        if( elm && !elm.classList.contains('dload') ){
            if( elm.offsetTop < (window.innerHeight + scrollTop) ){
            if( isLoaded == false ){

                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                if (xhr.readyState === 4){
                    let dropElm = document.getElementById('guideboxes');
                    let preHtml = dropElm.innerHTML
                    dropElm.innerHTML = preHtml + xhr.responseText;
                }
                };
                var pageID = document.getElementById("themeAdd").dataset.mpid;
                xhr.open('GET', pxlObj.admin_ajax+"?action=topicGuide&pageid="+pageID, true);        
                xhr.send();
                isLoaded =  true;
            }
            }
            if(!elm){
              document.removeEventListener("scroll", vcloadTeckStack);
              window.removeEventListener("resize", vcloadTeckStack);
              window.removeEventListener("orientationChange", vcloadTeckStack);
            }    
        }        
        }, 20);
    }
    document.addEventListener("scroll", vcloadTeckStack);
    window.addEventListener("resize", vcloadTeckStack);
    window.addEventListener("orientationChange", vcloadTeckStack);
});



// banner-glider

let hasctlder = document.getElementById("video-slider-section");
if(hasctlder){
    window.addEventListener("load", function(){
    document.querySelector("#video-slider-section .glider").addEventListener("glider-slide-visible",
    function(event){
    	var glider = Glider(this);
    });
    const gliderID = new Glider(document.querySelector("#video-slider-section .glider"), {
        slidesToShow: 1.7,
        slidesToScroll: 1,
        draggable: true,
        scrollLock: false,
        dots: false,
        dragDistance: false,
        responsive: [
    {
      breakpoint: 340,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },{
      
      breakpoint: 767,
      settings: {
        slidesToShow: 1.7,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 1.7,
        slidesToScroll: 1
      }
    }
  ]
    });

	
    gliderslideAutoPaly(gliderID, '#video-slider-section .glider');
    function gliderslideAutoPaly(glider, selector, delay = 2000, repeat = true) {
    let autoplay = null;
    const slidesCount = glider.track.childElementCount;
    let nextIndex = 1;
    let pause = true;

    function slide() {
    autoplay = setInterval(() => {
        if (nextIndex >= slidesCount) {
            if (!repeat) {
                clearInterval(autoplay);
            } else {
                nextIndex = 0;
            }
        }
        glider.scrollItem(nextIndex++);
    }, delay);
    }

    slide();

    var element = document.querySelector(selector);
    var videoPlayed = false;
    element.addEventListener('click', (event) => { 
    //if (!pause){
        clearInterval(autoplay);
        pause = false;
        videoPlayed = true;
    //}
    }, 300);
    
    element.addEventListener('mouseover', (event) => {
    if(pause && ( videoPlayed === false) ) {
        clearInterval(autoplay);
        pause = false;
    }
    }, 300);
    

    element.addEventListener('mouseout', (event) => {
    if (!pause && ( videoPlayed === false)) {
        slide();
        pause = true;
    }
    }, 300);
    

    }
    });
    function playYTvideo( elm, vsrc ){                
        var ytiframe        = document.getElementById(elm);
        let clsoeYT         = document.getElementById("closeytvideo");
        ytiframe.src        = 'https://www.youtube.com/embed/'+vsrc;
        //ytiframe.onload     = ytiframe.style.opacity = 1;
        ytiframe.style.zIndex = 1;
        setTimeout(function(){
        clsoeYT.style.display = "block";
        }, 500)
        
        ytiframe.classList.add('active');
    }
}
function playTetiVideo(elm, vsrc){
    var ytiframe        = document.getElementById(elm);
    ytiframe.src        = vsrc;
    ytiframe.classList.add('active');
}

function playonTVideo(elm, vsrc){
    var ytiframe        = document.getElementById(elm);
    let ifrms        = document.querySelectorAll(".yt-player");
    ifrms.forEach(function(elm){
        elm.src = '';
        elm.classList.remove('active');
    });
    ytiframe.src        = 'https://www.youtube.com/embed/'+vsrc;
    ytiframe.classList.add('active');
}

// trial pop
let hasFreeTrial = document.querySelector('.has-free-trial');
if( hasFreeTrial !== null ){
    hasFreeTrial.onclick = function (e) {
        var popbtn = document.querySelector('.free-trail-pop-up');
        var popbdy = document.querySelector('body');
        popbtn.classList.toggle('open-pop');
        popbdy.classList.add('body-pop');
        e.preventDefault();
    }
}
    
let popClose = document.querySelector('.pop-close');
if( popClose !== null ){
    popClose.onclick = function(e){
        var popcls = document.querySelector('.free-trail-pop-up');
        var popbdycls = document.querySelector('body');
        popcls.classList.remove('open-pop');
        popbdycls.classList.remove('body-pop');
        e.preventDefault();
    }    
}


let opFreeTrial = document.querySelector('.open-free-trial');
if( opFreeTrial !== null ){
    opFreeTrial.onclick = function (e) {
        var popbtn2 = document.querySelector('.free-trail-pop-up');
        var popbdy2 = document.querySelector('body');
        popbtn2.classList.toggle('open-pop');
        popbdy2.classList.add('body-pop');
        e.preventDefault();
    }    
}

function isMobileDeviceOLD(){
    var check = false;
    (function(a){
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))){
        check = true;
    }        
    })(navigator.userAgent||navigator.vendor||window.opera);        
    return check;
}

function isMobileDevice(){
    const userAgent = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}

window.onload = ( event ) => {
    if( isMobileDevice() ){
    let deskOnly = document.querySelectorAll(".row-lg");
        deskOnly.forEach(function(elm){
            elm.remove();
        });
    }
};

/*Menu Script Copied from VC Starts*/
function vmRestDefault(){
    let allArrow = document.querySelectorAll(".arrow-btn");
    if( allArrow ){
        [].forEach.call(allArrow, function(el) {
            el.classList.remove("rot");
        });    
    }
    
    let allMM = document.querySelectorAll(".menu-mega");
    if( allMM ){
        [].forEach.call(allMM, function(el) {
            el.classList.remove("m-active");
        });    
    }
}

function vmRestHireDefault(){
    let allArrow = document.querySelectorAll(".hr-arrow-btn");
    if( allArrow ){
        [].forEach.call(allArrow, function(el) {
            el.classList.remove("rot");
        });
    }
    
    let allMM = document.querySelectorAll(".hr-menu-mega");
    if( allMM ){
        [].forEach.call(allMM, function(el){
            el.classList.remove("m-active");
        });
    }
}

function vmRestSubDefault(){
    let allArrow = document.querySelectorAll(".list-item .arrow-btn");
    if( allArrow ){
        [].forEach.call(allArrow, function(el) {
            el.classList.remove("rot");
        });    
    }

    let allsevenfive = document.querySelectorAll(".width-75");
    if( allsevenfive ){
        [].forEach.call(allsevenfive, function(el) {
            el.style.display = "none";
        });    
    }    
}

(function(){
    if( isMobileDevice() ){
        let deskOnly = document.querySelectorAll(".od-row");
        deskOnly.forEach(function(elm){
            elm.innerHTML = "";
        });
        document.body.classList.add('vc-is-mobile');    
        document.addEventListener('click', event => {
            const hMenu = document.getElementsByClassName("hamberger-menu")[0];
            if(event.target.classList.contains('arrow-btn')){
                if( event.target.nextElementSibling ){
                    if( event.target.classList.contains('rot') ){
                        event.target.classList.remove("rot");
                        event.target.nextElementSibling.classList.remove("m-active");
                    }else{
                        vmRestDefault();
                        event.target.classList.add("rot");
                        event.target.nextElementSibling.classList.add("m-active");    
                    }                    
                }else{
                    let inArrow = event.target.dataset.tget;
                    if( (inArrow !== "") && document.getElementById(inArrow) ){
                        if( event.target.classList.contains('rot') ){
                            event.target.classList.remove("rot");
                            document.getElementById(inArrow).style.display = "none";
                        }else{
                            vmRestSubDefault();
                            event.target.classList.add("rot");
                            document.getElementById(inArrow).style.display = "block";
                            //hMenu.style.zIndex = "0";
                        }
                    }                    
                }
            }

            if(event.target.classList.contains('hr-arrow-btn')){
                let hrLinkRow = event.target.parentElement.nextElementSibling;
                if( hrLinkRow ){
                    if( event.target.classList.contains('rot') ){
                        event.target.classList.remove("rot");
                        hrLinkRow.classList.remove("m-active");
                    }else{
                        vmRestHireDefault();
                        event.target.classList.add("rot");
                        hrLinkRow.classList.add("m-active");    
                    }
                }                
            }

            if(event.target.classList.contains('mback')){
                vmRestSubDefault();
                //hMenu.style.zIndex = "999";
            }
        });
    }
    /*else{
        let tabs = document.getElementsByClassName("text-column");
        for (j = 0; j < tabs.length; j++) {
        tabs[j].addEventListener("mouseover", clickTab);
        }

        function clickTab(e) {
        var tabID = e.currentTarget.id;
        var inSection = e.currentTarget.getAttribute("data-section");
        var pageID = tabID.replace("a", "b");
        var pages = document.getElementById(inSection).getElementsByClassName("header-menu");
        var intabs = document.getElementById(inSection).getElementsByClassName("text-column");
        for (i = 0; i < pages.length; i++) {
        intabs[i].classList.remove("active");
        pages[i].classList.remove("active");
        }
        e.currentTarget.classList.add("active");
        let pActive = "mrow mrow-" + e.currentTarget.getAttribute("data-mrow");
        let masCol = document.getElementsByClassName(pActive).item(0);
        if (masCol) {
        masCol.classList.add("active");
        }
        var currentPage = document.querySelector("#" + pageID);
        currentPage.classList.add("active");
        }
    }*/
})();
/*#Menu Script Copied from VC Ends*/

/*Lazy Loading BG Image*/
document.addEventListener("DOMContentLoaded", 
function(){
    var lazyloadImages;    
    if("IntersectionObserver" in window){
    lazyloadImages = document.querySelectorAll(".vlazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("vlazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
    }else{
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".vlazy");
    function lazyload(){
        if(lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }    

        lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('vlazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
        }, 20);
    }
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
    }
});

document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.vd-lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("vd-lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});

function showPopFormOp(){
    let deskOnly = document.getElementById("formPopup");
    deskOnly.style.display = "block";    
}

function closebacForm(){
    let deskOnly = document.getElementById("formPopup");
    deskOnly.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos    = [].slice.call(document.querySelectorAll("video.vd-lazy"));
  var lazyVcon      = document.getElementById("hero-vbanner");
  
  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

        video.target.load();
        video.target.classList.remove("vd-lazy");
        if( lazyVcon ){
            //lazyVcon.classList.remove("vd-lazy");
            lazyVcon.style.background = "none";
        }          
        lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});


if( document.getElementById("pxl-home-typo") ){
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan    = document.querySelector(".cursor");
    const textArray     = ["Innovate", "Thrive", "Succeed"];
    const typingDelay   = 200;
    const erasingDelay  = 100;
    const newTextDelay  = 2000; // Delay between current and next text
    let textArrayIndex  = 0;
    let charIndex       = 0;

    function type() {
    if (charIndex < textArray[textArrayIndex].length) {
     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
     charIndex++;
     setTimeout(type, typingDelay);
    } 
    else {
     cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
    }
    }

    function erase() {
    if (charIndex > 0) {
     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
     typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
     charIndex--;
     setTimeout(erase, erasingDelay);
    } 
    else {
     cursorSpan.classList.remove("typing");
     textArrayIndex++;
     if(textArrayIndex>=textArray.length) textArrayIndex=0;
     setTimeout(type, typingDelay + 1100);
    }
    }

    document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);
    });    
}

if( document.getElementById("trusted-plogs") ){
    new Glide('.logoslide', { type: 'carousel', autoplay: 1, animationDuration: 10000, animationTimingFunc: 'linear', gap: 0, startAt: 0, perView: 1 }). mount();    
}

window.addEventListener("load", function() {
const pxlIndThree = document.getElementById("pxl-indv3");
if( pxlIndThree ){
    document.querySelector(".industry-slider .glider").addEventListener("glider-slide-visible",
    function(event) {
    var glider = Glider(this);
    });
    window._ = new Glider(document.querySelector(".industry-slider .glider"), {
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        scrollLock: false,
        dots: ".industry-slider .dots",
        dragDistance: false,
        arrows: {
        prev: '.is3-prev',
        next: '.is3-next'
    },

      responsive:[{
              breakpoint: 320,
              settings: {
                  slidesToShow: 1,
                  duration: 2.25
              }
          },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 2,
                  itemWidth: 150,
                  duration: 1.25
              }
          },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
                  itemWidth: 150,
                  duration: 1.25
              }
          },
          {
              breakpoint: 1400,
              settings: {
                  slidesToShow: 4,
                  itemWidth: 150,
                  duration: 3
              }
          },
      ]
    });
}
});

if( document.querySelector('.glider') !== null ){
    document.querySelector('.glider').addEventListener('glider-slide-visible', function(event){
     var imgs_to_anticipate = 3;
     var glider = Glider(this);
     let activeSlide = glider.slides[glider.slide].getAttribute("data-img-hover");
     document.querySelector(".bannerIMG").setAttribute("src", activeSlide)
    });    
}

if( document.querySelectorAll(".ind-box") !== null ){
    const titleBoxes    = document.querySelectorAll(".ind-box");
    const bannerImg     = document.querySelector(".bannerIMG");
    const gliderActive  = document.querySelector(".left-2");

    titleBoxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            const imgPath = box.getAttribute("data-img-hover");
            bannerImg.setAttribute("src", imgPath);
        });

        box.addEventListener("mouseout", () => {
            // const lastHoverImg = box.lastChild.getAttribute("src");
            // bannerImg.setAttribute("src", lastHoverImg);
            // box.removeChild(box.lastChild);
        });
    });    
}


/*New Hire Menu*/
var menutabs1 = document.getElementById("menutabs1");
if( menutabs1 ) {
!(function(){
    "use strict";
    var e = function (e) {
        var t = document.querySelector(e.el),
            s = t.querySelectorAll(e.tabNavigationLinks),
            a = t.querySelectorAll(e.tabContentContainers),
            n = 0,
            r = !1,
            l = function (e, t) {
                e.addEventListener("click", function (e) {
                    e.preventDefault(), o(t);
                });
            },
            o = function (e) {
                e !== n && e >= 0 && e <= s.length && (s[n].classList.remove("is-active"), s[e].classList.add("is-active"), a[n].classList.remove("is-active"), a[e].classList.add("is-active"), (n = e));
            };
        return {
            init: function () {
                if (!r) {
                    (r = !0), t.classList.remove("no-js");
                    for (var e = 0; e < s.length; e++) l(s[e], e);
                }
            },
            goToTab: o,
        };
    };
    window.tabs = e;
})();
var e = tabs({
    el:"#menutabs1",
    tabNavigationLinks:".tab-link",
    tabContentContainers:".tab-content"
});
e.init();
}

function hireTbl_showMore(e){
    e.classList.toggle('active');
    if (e.innerHTML === 'View More'){ 
        e.innerHTML = 'View Less';
    }else{
        e.innerHTML = 'View More';
    }
    document.getElementById("vhire-tbl-elm").classList.toggle('show-all');
}


/* Intent Popup */
const CookieService = {
    setCookie(name, value, days) {
        let expires = '';
        if(days){
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '')  + expires + ';';
    },

    getCookie(name){
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            if (cookie.indexOf(name + '=') > -1) {
                return cookie.split('=')[1];
            }
        }
        return null;
    }
};

const exit = e => {
    const shouldExit =
        [...e.target.classList].includes('exit-intent-popup') || // user clicks on mask
        e.target.className === 'close' || // user clicks on the close icon
        e.keyCode === 27; // user hits escape

    if (shouldExit) {
        document.querySelector('.exit-intent-popup').classList.remove('visible');
    }
};
const mouseEvent = e => {
    const shouldShowExitIntent = 
        !e.toElement && 
        !e.relatedTarget &&
        e.clientY < 10;

    if (shouldShowExitIntent){
        document.removeEventListener('mouseout', mouseEvent);
        document.querySelector('.exit-intent-popup').classList.add('visible');
        CookieService.setCookie('exitIntentShown', true, 30);
    }
}

var intPopupElm = document.getElementById("intentPopup");
if( intPopupElm ){
    if (!CookieService.getCookie('exitIntentShown')) {
        setTimeout(() => {
            document.addEventListener('mouseout', mouseEvent);
            document.addEventListener('keydown', exit);
            document.querySelector('.exit-intent-popup').addEventListener('click', exit);
        }, 0);
    }    
}

function closeIntPopUp(elm, subFld = false){
  let divTarget   = document.getElementById(elm);
  divTarget.classList.remove('visible');
  if( subFld === true ){
    document.getElementById('myBtn2').click();
  }
}


const sdMethod = document.getElementById("sd-metho");
if( sdMethod ){
    const cards = document.querySelectorAll('.card');  
    cards.forEach((card) => {
        card.addEventListener('mouseover', () => {
        if (!card.hasAttribute('active')) {
            updateActiveCard(card);
        }
        });
    });

    function updateActiveCard(activeCard) {
        cards.forEach((card) => {
        if (card === activeCard) {
        card.setAttribute('active', '');
        } else {
        card.removeAttribute('active');
        }
        })
    }    
}
const cardsDM = document.querySelectorAll('.card');
if( cardsDM ){
    [...cardsDM].forEach((card)=>{
    card.addEventListener( 'click', function() {
     card.classList.toggle('is-flipped');
    });
    });    
}

const hasEcomSlider = document.getElementById('econbanner-glider');
if( hasEcomSlider ){
window.addEventListener("load", function() {
 document.querySelector(".video-slider .glider").addEventListener("glider-slide-visible",
 function(event) {
 var glider = Glider(this);
 });
 window._ = new Glider(document.querySelector(".video-slider .glider"), {
     slidesToShow: 1,
     slidesToScroll: 3,
     draggable: true,
     scrollLock: false,
     dots: ".video-slider .dots",
     dragDistance: false,
     arrows: {
     prev: '.glider-prev',
     next: '.glider-next'
   },

     responsive: [
         {
             breakpoint: 1400,
             settings: {
                 slidesToShow: 1,
                 itemWidth: 150,
                 duration: 3
             }
         },
     ]
 });
}); 
}

const pxlEcomSol = document.getElementById("pxlecom-sol");
if( pxlEcomSol ){
window.addEventListener("load", function() {
 document.querySelector(".tab-slider .glider").addEventListener("glider-slide-visible",
 function(event) {
 var glider = Glider(this);
 });
 window._ = new Glider(document.querySelector(".tab-slider .glider"), {
     slidesToShow: 5,
     slidesToScroll: 5,
     draggable: true,
     scrollLock: false,
     dots: ".tab-slider .dots",
     dragDistance: false,
     arrows: {
     prev: '.glider-prev',
     next: '.glider-next'
   },

     responsive: [{
             breakpoint: 320,
             settings: {
                 slidesToShow: 2,
                 duration: 2.25
             }
         },
         {
             breakpoint: 767,
             settings: {
                 slidesToShow: 3,
                 itemWidth: 150,
                 duration: 1.25
             }
         },
         {
             breakpoint: 1024,
             settings: {
                 slidesToShow: 4,
                 itemWidth: 150,
                 duration: 1.25
             }
         },
         {
             breakpoint: 1400,
             settings: {
                 slidesToShow: 5,
                 itemWidth: 150,
                 duration: 3
             }
         },
     ],


 });

});
  
    var tabMC       = document.querySelectorAll("#ecom-tabs .tablist");
    var tabPanesMc  = document.getElementById("pxlecom-sol").getElementsByClassName("tab-contents");
    function activateTabFx(e){
        e.preventDefault();  
        tabMC.forEach(function(label, index){
        label.classList.remove("active");
        });

        [].forEach.call(tabPanesMc, function(pane, index){
            pane.classList.remove("active");
        }); 

        if( e.target === this || this.contains(e.target)){
            var clickedTab = this.getAttribute("data-tab");
            this.classList.add("active");
            document.querySelector(clickedTab).classList.add("active");
        }    
    }

    tabMC.forEach(function(label, index){
        label.addEventListener("click", activateTabFx);
    });



    
    if( document.getElementById("ec-tabslider") ){
    document.querySelector("#ec-tabslider .glider").addEventListener("glider-slide-visible",
    function(event) {
    var glider = Glider(this);
    });
    window._ = new Glider(document.querySelector("#ec-tabslider .glider"), {
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: true,
    scrollLock: false,
    dots: "#ec-tabslider .dots",
    dragDistance: false,
    arrows: { 
    prev: '.ec-prev',
    next: '.ec-next'
    },
    responsive: [{
         breakpoint: 320,
         settings: {
             slidesToShow: 2,
             duration: 2.25
         }
     },
     {
         breakpoint: 767,
         settings: {
             slidesToShow: 3,
             itemWidth: 150,
             duration: 1.25
         }
     },
     {
         breakpoint: 1024,
         settings: {
             slidesToShow: 4,
             itemWidth: 150,
             duration: 1.25
         }
     },
     {
         breakpoint: 1400,
         settings: {
             slidesToShow: 5,
             itemWidth: 150,
             duration: 3
         }
     },
    ],
    });    
    }
    
}

const pxlEconPlat = document.getElementById("pxlecom-plateform");
if( pxlEconPlat ){
    var tabLabels   = document.querySelectorAll("#tabs li");
    var tabPanes    = document.getElementById("pxlecom-plateform").getElementsByClassName("tab-contents");
    function activateTab(e){
        e.preventDefault();
        tabLabels.forEach(function(label, index){
            label.classList.remove("active");
        });
        [].forEach.call(tabPanes, function(pane, index){
            pane.classList.remove("active");
        });  
        e.target.parentNode.classList.add("active");
        var clickedTab = e.target.getAttribute("href");
        document.querySelector(clickedTab).classList.add("active");
    }
    tabLabels.forEach(function(label, index){
        label.addEventListener("click", activateTab);
    });
}

//
function _morePPCTable(){
  var elm = document.getElementById("pxl-ppc-table");
  elm.classList.toggle("active");
}

window.addEventListener("load", function(){
    if( document.body.classList.contains('pxl-geoclass') ){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if (xhr.readyState === 4){
        var responseData = JSON.parse(xhr.responseText);
        if( 'country' in responseData ){
            if(responseData.country != "IN"){
            document.body.classList.add("px-international");        
            }
        }        
    }
    };
    xhr.open('GET', pxlObj.ip_json, true);        
    xhr.send();     
    }
});



const pxlIndusSol = document.getElementById("pxlindus-sol");
    if( pxlIndusSol ){
    window.addEventListener("load", function() {
     document.querySelector(".ecom-tab-slider .glider").addEventListener("glider-slide-visible",
     function(event) {
     var glider = Glider(this);
     });
     window._ = new Glider(document.querySelector(".ecom-tab-slider .glider"), {
         slidesToShow: 4,
         slidesToScroll: 4,
         draggable: true,
         scrollLock: false,
         dots: ".ecom-tab-slider .dots",
         dragDistance: false,
         arrows: {
         prev: '.glider-prev',
         next: '.glider-next'
       },
    
         responsive: [{
                 breakpoint: 320,
                 settings: {
                     slidesToShow: 2,
                     duration: 2.25
                 }
             },
             {
                 breakpoint: 767,
                 settings: {
                     slidesToShow: 3,
                     itemWidth: 150,
                     duration: 1.25
                 }
             },
             {
                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 4,
                     itemWidth: 150,
                     duration: 1.25
                 }
             },
             {
                 breakpoint: 1400,
                 settings: {
                     slidesToShow: 4,
                     itemWidth: 150,
                     duration: 3
                 }
             },
         ],
       
    
     });

    });
      
}



var tabMC       = document.querySelectorAll("#ecom-tabs .tablist");
    var tabPanesMc  = document.getElementById("pxlindus-sol").getElementsByClassName("tab-contents");
    function activateTabFx(e){
        e.preventDefault();  
        tabMC.forEach(function(label, index){
        label.classList.remove("active");
        });

        [].forEach.call(tabPanesMc, function(pane, index){
            pane.classList.remove("active");
        }); 

        if( e.target === this || this.contains(e.target)){
            var clickedTab = this.getAttribute("data-tab");
            this.classList.add("active");
            document.querySelector(clickedTab).classList.add("active");
        }    
    }

    tabMC.forEach(function(label, index){
        label.addEventListener("click", activateTabFx);
    });
