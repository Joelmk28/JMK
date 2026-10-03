(function () {
    "use strict";

    var year = new Date().getFullYear();
    document.getElementById("year").textContent = year;
    document.getElementById("edition").textContent = year;


    // Kinshasa local time (WAT, UTC+1) in the top bar
    var clock = document.getElementById("clock");
    var timeFormat = new Intl.DateTimeFormat("fr-FR", {
        timeZone: "Africa/Kinshasa",
        hour: "2-digit",
        minute: "2-digit"
    });
    function tick() { clock.textContent = "Kinshasa " + timeFormat.format(new Date()); }
    tick();
    setInterval(tick, 15000);


    // Mobile index menu
    var nav = document.getElementById("nav");
    var menuBtn = document.getElementById("menu-btn");
    menuBtn.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", open);
    });
    nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
            nav.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });


    // Highlight the current chapter in the index
    var links = nav.querySelectorAll("a");
    var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            links.forEach(function (a) {
                a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
            });
        });
    }, { rootMargin: "-40% 0px -55% 0px" });
    links.forEach(function (a) {
        var section = document.querySelector(a.getAttribute("href"));
        if (section) spy.observe(section);
    });


    // Work filters, with item counts
    var works = Array.prototype.slice.call(document.querySelectorAll("#works .work"));
    var filterButtons = document.querySelectorAll("#filters button");

    // Rows alternate wide/narrow then narrow/wide, counted over visible items only
    function layoutWorks() {
        var i = 0;
        works.forEach(function (w) {
            if (w.classList.contains("is-hidden")) return;
            var wide = i % 4 === 0 || i % 4 === 3;
            w.classList.toggle("wide", wide);
            w.classList.toggle("narrow", !wide);
            i++;
        });
    }
    layoutWorks();
    filterButtons.forEach(function (btn) {
        var f = btn.getAttribute("data-filter");
        var count = f === "*" ? works.length : works.filter(function (w) { return w.dataset.cat === f; }).length;
        btn.querySelector("sup").textContent = count;
        btn.addEventListener("click", function () {
            filterButtons.forEach(function (b) { b.classList.remove("active"); });
            btn.classList.add("active");
            works.forEach(function (w) {
                w.classList.toggle("is-hidden", f !== "*" && w.dataset.cat !== f);
            });
            layoutWorks();
        });
    });


    // Lightbox for work items and case-study figures
    var lightbox = document.getElementById("lightbox");
    var lbImg = lightbox.querySelector("img");
    var lbCaption = document.getElementById("lb-caption");
    var gallery = [];
    var current = 0;

    function show(i) {
        current = (i + gallery.length) % gallery.length;
        var img = gallery[current];
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lbCaption.textContent = (current + 1) + " / " + gallery.length + " — " + img.alt;
    }
    function open(list, img) {
        gallery = list;
        show(list.indexOf(img));
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
        document.getElementById("lb-close").focus();
    }
    function close() {
        lightbox.classList.remove("open");
        document.body.style.overflow = "";
    }

    works.forEach(function (w) {
        w.addEventListener("click", function () {
            var visible = works.filter(function (x) { return !x.classList.contains("is-hidden"); })
                .map(function (x) { return x.querySelector("img"); });
            open(visible, w.querySelector("img"));
        });
    });
    var caseFigs = Array.prototype.slice.call(document.querySelectorAll("img[data-zoom]"));
    caseFigs.forEach(function (img) {
        img.addEventListener("click", function () { open(caseFigs, img); });
    });

    document.getElementById("lb-close").addEventListener("click", close);
    document.getElementById("lb-prev").addEventListener("click", function () { show(current - 1); });
    document.getElementById("lb-next").addEventListener("click", function () { show(current + 1); });
    document.addEventListener("keydown", function (e) {
        if (!lightbox.classList.contains("open")) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowLeft") show(current - 1);
        if (e.key === "ArrowRight") show(current + 1);
    });


    // Contact form: opens the visitor's mail client with the letter pre-filled
    var form = document.getElementById("contactForm");
    var status = document.getElementById("form-status");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var subject = document.getElementById("subject").value.trim();
        var message = document.getElementById("message").value.trim();
        if (!name || !email || !subject || !message) {
            status.textContent = "Please fill in every line of the letter.";
            return;
        }
        var body = "Dear Joel,\n\n" + message + "\n\n— " + name + " (" + email + ")";
        window.location.href = "mailto:joelmuhindok@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        status.textContent = "Your mail app is opening. You can also call or WhatsApp me.";
        form.reset();
    });
})();
