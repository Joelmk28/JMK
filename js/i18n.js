/* Bilingual support (English / French).
   English is the text written in index.html; French translations live here.
   Every element with data-i18n="key" is switched; the choice is remembered. */
(function () {
    "use strict";

    var FR = {
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.services": "Services",
        "nav.journey": "Parcours",
        "nav.skills": "Compétences",
        "nav.portfolio": "Portfolio",
        "nav.reviews": "Avis",
        "nav.contact": "Contact",

        "btn.call": "Appelez-moi",
        "btn.work": "Travaillons ensemble",
        "btn.seework": "Voir mes réalisations",
        "btn.more": "En savoir plus",
        "btn.contact": "Contactez-moi",
        "btn.whatsapp": "Discuter sur WhatsApp",
        "btn.send": "Envoyer le message",

        "hero.title": 'Ingénieur <span class="accent-text">logiciel</span><br><span class="outline">créateur</span> de solutions',
        "hero.im": "Je suis",
        "hero.text": "Je conçois et développe des applications web, mobiles et desktop qui améliorent la vie des gens et transforment les entreprises — avec rigueur, bonnes pratiques et un engagement constant pour l’excellence.",
        "hero.badge": "Freelance disponible • Full stack •",
        "marquee.roles": 'Développeur Web <i class="fas fa-star-of-life"></i> Développeur iOS <i class="fas fa-star-of-life"></i> Développeur Android <i class="fas fa-star-of-life"></i> Développeur Desktop <i class="fas fa-star-of-life"></i> Full Stack <i class="fas fa-star-of-life"></i> Trader <i class="fas fa-star-of-life"></i>',

        "partners.title": 'Consultant <span class="accent-text">rattaché à</span>',
        "partners.role": "Consultant IT",

        "about.years": "Années d’expérience",
        "about.title": 'Passionné par la résolution de problèmes <span class="accent-text">complexes &amp; simples</span>',
        "about.p1": "En tant qu’ingénieur logiciel, je suis passionné par la résolution de problèmes, complexes comme simples, et par la création de solutions innovantes. Grâce à l’expérience acquise jusqu’ici en développement logiciel, j’ai développé une expertise particulière dans plusieurs langages de programmation et technologies.",
        "about.p2": "N’hésitez pas à me confier de nouvelles opportunités pour contribuer aux projets logiciels de vos entreprises et à l’avancement de la technologie. Mon objectif est de créer des logiciels qui améliorent la vie des gens et transforment les entreprises. Je suis reconnu pour ma capacité à travailler en équipe comme en autonomie. Ma rigueur et mon engagement pour l’excellence sont sans faille.",
        "info.name": "Nom",
        "info.birthday": "Date de naissance",
        "info.degree": "Diplôme",
        "info.experience": "Expérience",
        "info.expval": "3 ans",
        "info.phone": "Téléphone",
        "info.email": "Email",
        "info.address": "Adresse",
        "info.available": "Disponible",
        "count.services": "Services proposés",
        "count.tech": "Technologies maîtrisées",
        "count.reviews": "Avis de clients satisfaits",

        "services.title": 'Ce que je peux <span class="accent-text">créer pour vous</span>',
        "s1.t": "Site vitrine",
        "s1.p": "Vous voyez ce site sur lequel vous êtes ? C’est aussi un site vitrine. Dans ce service, je crée pour vous des sites vitrines qui mettent en valeur votre activité ou votre marque. L’objectif : un site qui reflète fidèlement votre image de marque et vous aide à atteindre vos objectifs commerciaux.",
        "s2.t": "Front-end",
        "s2.p": "Que vous soyez développeur back-end ou non, vous devez créer ou modifier les interfaces de votre système ? Dans ce service, je vous propose des interfaces web responsives offrant une expérience utilisateur exceptionnelle.",
        "s3.t": "Back-end",
        "s3.p": "Vous êtes développeur front-end et il vous faut une bonne logique pour gérer votre système ? Je m’en occupe : logique serveur, conception et manipulation de la base de données et, bien sûr, des API fiables et sécurisées.",
        "s4.t": "Applications Android",
        "s4.p": "Dans ce service, je développe des applications Android selon les meilleures pratiques de développement, pour des applications à la fois fonctionnelles et attrayantes.",
        "s5.t": "Applications iOS",
        "s5.p": "Une application qui ne tourne que sous Android, c’est bien. Mais imaginez la même application sous iOS (iPhone)… sans parler du nombre d’utilisateurs que vous allez toucher. Dans ce service, je crée des applications qui exploitent pleinement les fonctionnalités propres aux appareils Apple.",
        "s6.t": "Applications Desktop",
        "s6.p": "Vous recherchez une productivité intensive, un accès hors ligne, la sécurité des données et des fonctionnalités exigeantes ? Je développe des applications desktop puissantes et simples à utiliser pour Windows et macOS.",
        "s7.t": "Trading Forex",
        "s7.p": "Ce service offre une opportunité d’investissement sur le marché du Forex. En tant que trader expérimenté, je gère les fonds des investisseurs avec prudence et expertise. Les investisseurs sont invités à placer leur argent, qui sera ensuite utilisé pour trader sur le marché du Forex. Les bénéfices sont partagés selon un pourcentage convenu. Ce service s’adresse à ceux qui souhaitent investir dans le Forex sans en avoir le temps ni l’expertise. Il offre une manière transparente et professionnelle d’investir sur le marché du Forex.",
        "s8.t": "Un projet en tête ?",
        "s8.p": "Parlez-m’en — construisons ensemble quelque chose de grand.",

        "journey.title": 'Mon <span class="accent-text">parcours</span> jusqu’ici',
        "journey.edu": "Ma formation",
        "journey.exp": "Mon expérience",
        "edu.t": "Licence en génie logiciel",
        "edu.school": "Université des Sciences et Technologies",
        "edu.p": 'J’ai eu le privilège d’étudier à l’<a href="https://ascitech.cd/universite">Université des Sciences et Technologies (USCITECH)</a>, où j’ai reçu une solide formation en génie logiciel. Mon parcours académique à l’USCITECH m’a permis d’acquérir une compréhension approfondie des principes fondamentaux de l’informatique, ainsi que des compétences pratiques en programmation. J’ai eu l’occasion de travailler sur des projets universitaires stimulants qui ont renforcé ma capacité à concevoir et à mettre en œuvre des solutions logicielles efficaces. Mon expérience à l’USCITECH a été déterminante dans ma carrière d’ingénieur logiciel.',
        "exp.t": "Stagiaire développeur web",
        "exp.p": 'Au cours de mon parcours de développeur, j’ai eu l’opportunité d’effectuer un stage chez <a href="https://www.infoset.cd/">Infoset</a>, une expérience extrêmement précieuse pour moi. Chez Infoset, j’ai pu mettre en pratique mes compétences techniques tout en découvrant de nouvelles méthodes de travail. J’ai travaillé sur des projets stimulants qui m’ont fait comprendre l’importance de la collaboration et de la communication dans un environnement professionnel. Cette expérience a renforcé mes compétences techniques et affûté ma capacité à résoudre des problèmes complexes et à travailler efficacement en équipe. En bref, ce stage chez Infoset a été une étape décisive de ma carrière de développeur.',
        "feat.kicker": "Actuel gros marché",
        "feat.p": 'Une application web tournant sur le serveur local, Windows Server, sous IIS, en production. Je l’ai développée en <a href="https://dotnet.microsoft.com/fr-fr/">.NET</a>, une infrastructure multiplateforme de Microsoft ; elle assure rapidité, scalabilité, robustesse… avec des bonnes pratiques. Cette application gère les enregistrements des nouveaux agents de l’État pour qu’ils soient mécanisés (profiter des salaires de base de l’État par rapport au matricule attribué par son administration), les corrections des noms, corrections des matricules, réajustements de grade, changements d’adresses, blocages et déblocages des agents déjà mécanisés. Ces modules restent très complexes et intéressants du point de vue développement.',

        "skills.title": 'Technologies <span class="accent-text">que j’utilise</span>',
        "work.title": 'Projets <span class="accent-text">sélectionnés</span>',
        "filter.all": "Tous",
        "work.mobile": "Application mobile",
        "work.desktop": "Application desktop",
        "work.cross": "Multiplateforme",
        "work.forex": "Trading Forex",
        "work.results": "Résultats",

        "testi.title": 'Ce que disent <span class="accent-text">mes clients</span>',
        "cta.t": "Construisons votre prochain projet",
        "cta.p": "Web, mobile, desktop ou back-end — je transforme vos idées en logiciels rapides, robustes et élégants.",
        "contact.title": 'Un projet ? <span class="accent-text">Parlons-en</span>',
        "contact.leave": "Laissez-moi un message",
        "form.name": "Votre nom",
        "form.email": "Votre email",
        "form.subject": "Sujet",
        "footer.rights": "Tous droits réservés."
    };

    // Strings used from JavaScript (typed roles, form messages)
    var STRINGS = {
        en: {
            roles: ["Full stack developer", "Trader", "Web Developer", "iOS Developer", "Android Developer", "Desktop Developer"],
            formMissing: "Please fill in all fields.",
            formSent: "Your mail app is opening. You can also call me or leave me a WhatsApp message.",
            description: "Portfolio of Joel MUHINDO KIRENGO (JMK) — full stack software engineer: web, mobile, desktop apps and Forex trading."
        },
        fr: {
            roles: ["Développeur Full stack", "Trader", "Développeur Web", "Développeur iOS", "Développeur Android", "Développeur Desktop"],
            formMissing: "Veuillez remplir tous les champs.",
            formSent: "Votre messagerie s’ouvre. Vous pouvez aussi m’appeler ou me laisser un message WhatsApp.",
            description: "Portfolio de Joel MUHINDO KIRENGO (JMK) — ingénieur logiciel full stack : applications web, mobiles, desktop et trading Forex."
        }
    };

    var nodes = document.querySelectorAll("[data-i18n]");
    var EN = [];
    nodes.forEach(function (el, i) { EN[i] = el.innerHTML; });

    var current = "en";

    function setLang(lang) {
        if (lang !== "fr") lang = "en";
        current = lang;
        nodes.forEach(function (el, i) {
            var key = el.getAttribute("data-i18n");
            el.innerHTML = lang === "fr" && FR[key] !== undefined ? FR[key] : EN[i];
        });
        document.documentElement.lang = lang;
        var desc = document.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute("content", STRINGS[lang].description);
        document.querySelectorAll(".lang-switch button").forEach(function (b) {
            var on = b.getAttribute("data-lang") === lang;
            b.classList.toggle("active", on);
            b.setAttribute("aria-pressed", on);
        });
        try { localStorage.setItem("jmk-lang", lang); } catch (e) { /* storage unavailable */ }
        document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
    }

    var saved = null;
    try { saved = localStorage.getItem("jmk-lang"); } catch (e) { /* storage unavailable */ }
    var browserFr = (navigator.language || "").toLowerCase().indexOf("fr") === 0;

    document.querySelectorAll(".lang-switch button").forEach(function (b) {
        b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });

    window.JMK_I18N = {
        get lang() { return current; },
        t: function (key) { return STRINGS[current][key]; },
        setLang: setLang
    };

    setLang(saved || (browserFr ? "fr" : "en"));
})();
