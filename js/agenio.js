(function () {
    "use strict";

    // Header background on scroll + back to top
    var header = document.getElementById("header");
    var backToTop = document.getElementById("back-to-top");
    function onScroll() {
        var y = window.scrollY;
        header.classList.toggle("is-scrolled", y > 40);
        backToTop.classList.toggle("show", y > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();


    // Mobile menu
    var burger = document.getElementById("burger");
    var nav = document.getElementById("nav");
    burger.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        burger.setAttribute("aria-expanded", open);
    });
    nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
            nav.classList.remove("open");
            burger.setAttribute("aria-expanded", "false");
        });
    });


    // Active nav link on scroll
    var links = nav.querySelectorAll("a");
    var sections = Array.prototype.map.call(links, function (a) {
        return document.querySelector(a.getAttribute("href"));
    });
    var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            links.forEach(function (a) {
                a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
            });
        });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { if (s) spy.observe(s); });


    // Typed text, restarted in the right language when it changes
    var i18n = window.JMK_I18N;
    var typed = null;
    function startTyped() {
        if (!window.Typed) return;
        if (typed) typed.destroy();
        typed = new Typed(".typed-text-output", {
            strings: i18n.t("roles"),
            typeSpeed: 80,
            backSpeed: 30,
            backDelay: 1600,
            loop: true
        });
    }
    startTyped();
    document.addEventListener("langchange", startTyped);


    // Skills
    var skills = [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS" },
        { src: "https://cdn.pellerex.com/public/ecosystem/web/content/api-set-up/asp-net-core-web-api-setup.png", name: ".NET Core" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", name: "Spring Boot" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Blazor.png", name: "Blazor Server" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStEOgD_09wR9-eiSwlgMW0Cfz5ov2FaIvjWA&s", name: ".NET MAUI" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png", name: ".NET" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg", name: "Rust" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg", name: "Angular" },
        { src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/modelcontextprotocol.svg", name: "MCP" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg", name: "WordPress" },
        { src: "https://avatars.githubusercontent.com/u/67620218?s=280&v=4", name: "AppSmith" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/640px-ChatGPT-Logo.svg.png", name: "ChatGPT" }
    ];
    var skillsGrid = document.getElementById("skills-grid");
    skills.forEach(function (skill) {
        var card = document.createElement("div");
        card.className = "skill-card reveal";
        var wrap = document.createElement("div");
        wrap.className = "logo-wrap";
        var img = document.createElement("img");
        img.src = skill.src;
        img.alt = skill.name;
        img.loading = "lazy";
        // If a logo cannot be loaded, show the skill's initials instead
        img.onerror = function () {
            wrap.textContent = skill.name.replace(/[^A-Za-z]/g, "").slice(0, 3).toUpperCase();
            wrap.classList.add("logo-fallback");
        };
        var name = document.createElement("span");
        name.textContent = skill.name;
        wrap.appendChild(img);
        card.appendChild(wrap);
        card.appendChild(name);
        skillsGrid.appendChild(card);
    });


    // Reveal on scroll
    var revealer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("in");
                revealer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { revealer.observe(el); });


    // Counters
    var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var el = entry.target;
            var target = parseInt(el.getAttribute("data-count"), 10);
            var start = null;
            function step(ts) {
                if (!start) start = ts;
                var p = Math.min((ts - start) / 1400, 1);
                el.textContent = Math.round(target * p) + (p === 1 ? "+" : "");
                if (p < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
            counterObserver.unobserve(el);
        });
    }, { threshold: 0.5 });
    document.querySelectorAll("[data-count]").forEach(function (el) { counterObserver.observe(el); });


    // Portfolio filter
    var filterButtons = document.querySelectorAll("#filters button");
    var works = document.querySelectorAll("#work-grid .work-item");
    filterButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            filterButtons.forEach(function (b) { b.classList.remove("active"); });
            btn.classList.add("active");
            var f = btn.getAttribute("data-filter");
            works.forEach(function (w) {
                w.classList.toggle("is-hidden", f !== "*" && w.getAttribute("data-cat") !== f);
            });
        });
    });


    // Lightbox
    var lightbox = document.getElementById("lightbox");
    var lbImg = lightbox.querySelector("img");
    var current = 0;
    function visibleWorks() {
        return Array.prototype.filter.call(works, function (w) { return !w.classList.contains("is-hidden"); });
    }
    function show(index) {
        var list = visibleWorks();
        current = (index + list.length) % list.length;
        var img = list[current].querySelector("img");
        lbImg.src = img.src;
        lbImg.alt = img.alt;
    }
    works.forEach(function (w) {
        w.addEventListener("click", function () {
            show(visibleWorks().indexOf(w));
            lightbox.classList.add("open");
        });
    });
    function closeLightbox() { lightbox.classList.remove("open"); }
    lightbox.querySelector(".lb-close").addEventListener("click", closeLightbox);
    lightbox.querySelector(".lb-prev").addEventListener("click", function () { show(current - 1); });
    lightbox.querySelector(".lb-next").addEventListener("click", function () { show(current + 1); });
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener("keydown", function (e) {
        if (!lightbox.classList.contains("open")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") show(current - 1);
        if (e.key === "ArrowRight") show(current + 1);
    });


    // Testimonials slider
    var track = document.getElementById("testi-track");
    var slides = track.children.length;
    var slide = 0;
    function goTo(i) {
        slide = (i + slides) % slides;
        track.style.transform = "translateX(-" + slide * 100 + "%)";
    }
    var timer = setInterval(function () { goTo(slide + 1); }, 7000);
    function manual(i) {
        clearInterval(timer);
        goTo(i);
        timer = setInterval(function () { goTo(slide + 1); }, 7000);
    }
    document.getElementById("testi-prev").addEventListener("click", function () { manual(slide - 1); });
    document.getElementById("testi-next").addEventListener("click", function () { manual(slide + 1); });


    // Contact form: opens the visitor's mail client with the message pre-filled
    var form = document.getElementById("contactForm");
    var status = document.getElementById("form-status");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var subject = document.getElementById("subject").value.trim();
        var message = document.getElementById("message").value.trim();
        if (!name || !email || !subject || !message) {
            status.style.color = "#ff6b6b";
            status.textContent = i18n.t("formMissing");
            return;
        }
        var body = "Name: " + name + "\nEmail: " + email + "\n\n" + message;
        window.location.href = "mailto:joelmuhindok@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        status.style.color = "";
        status.textContent = i18n.t("formSent");
        form.reset();
    });


    document.getElementById("year").textContent = new Date().getFullYear();
})();
