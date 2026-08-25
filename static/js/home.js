/* =========================================================
   HOME.JS
   Fonctions de la page d'accueil
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SEARCH
       ===================================================== */

    const searchForm = document.querySelector(".home-search");

    if (searchForm) {

        searchForm.addEventListener("submit", (event) => {

            const input = searchForm.querySelector("input");

            if (!input) {
                return;
            }

            const value = input.value.trim();

            if (!value) {
                event.preventDefault();

                input.focus();

                input.classList.add("input-error");

                setTimeout(() => {
                    input.classList.remove("input-error");
                }, 1000);
            }

        });

    }


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       ANIMATION DES ELEMENTS
       ===================================================== */

    const animatedElements = document.querySelectorAll(
        ".feature-card, .server-card, .top-server-card, .bump-item"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("visible");

                    observerInstance.unobserve(entry.target);

                });

            },
            {
                threshold: 0.08
            }
        );


        animatedElements.forEach((element) => {

            element.classList.add("home-animate");

            observer.observe(element);

        });

    }


    /* =====================================================
       COMPTEURS
       ===================================================== */

    const counters = document.querySelectorAll(
        "[data-counter]"
    );


    counters.forEach((counter) => {

        const target = Number(
            counter.dataset.counter
        );

        if (!Number.isFinite(target)) {
            return;
        }

        const duration = 1000;

        const startTime = performance.now();


        const updateCounter = (currentTime) => {

            const elapsed = currentTime - startTime;

            const progress = Math.min(
                elapsed / duration,
                1
            );

            /*
             * Ease-out
             */
            const eased =
                1 - Math.pow(1 - progress, 3);

            const value =
                Math.floor(target * eased);

            counter.textContent =
                value.toLocaleString("fr-FR");


            if (progress < 1) {

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.textContent =
                    target.toLocaleString("fr-FR");

            }

        };


        requestAnimationFrame(updateCounter);

    });


    /* =====================================================
       BUMP LIVE REFRESH
       ===================================================== */

    const bumpContainer =
        document.querySelector("[data-bump-list]");


    if (bumpContainer) {

        const refreshInterval =
            Number(
                bumpContainer.dataset.refresh
            ) || 30000;


        /*
         * On ne recharge pas automatiquement
         * si aucun endpoint n'est configuré.
         */

        const endpoint =
            bumpContainer.dataset.endpoint;


        if (endpoint) {

            const refreshBumps = async () => {

                try {

                    const response =
                        await fetch(endpoint, {
                            method: "GET",
                            headers: {
                                "X-Requested-With":
                                    "XMLHttpRequest"
                            }
                        });


                    if (!response.ok) {
                        return;
                    }


                    const html =
                        await response.text();


                    if (!html.trim()) {
                        return;
                    }


                    bumpContainer.innerHTML =
                        html;


                } catch (error) {

                    console.warn(
                        "Impossible de mettre à jour les bumps.",
                        error
                    );

                }

            };


            setInterval(
                refreshBumps,
                refreshInterval
            );

        }

    }


    /* =====================================================
       COPY BUTTON
       ===================================================== */

    document.querySelectorAll(
        "[data-copy]"
    ).forEach((button) => {

        button.addEventListener(
            "click",
            async () => {

                const value =
                    button.dataset.copy;


                if (!value) {
                    return;
                }


                try {

                    await navigator.clipboard.writeText(
                        value
                    );


                    const oldText =
                        button.innerHTML;


                    button.innerHTML =
                        "✅ Copié !";


                    setTimeout(() => {

                        button.innerHTML =
                            oldText;

                    }, 1500);


                } catch (error) {

                    console.warn(
                        "Copie impossible.",
                        error
                    );

                }

            }
        );

    });


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuButton =
        document.querySelector(
            "[data-mobile-menu]"
        );


    const mobileMenu =
        document.querySelector(
            "[data-mobile-menu-content]"
        );


    if (menuButton && mobileMenu) {

        menuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileMenu.classList.toggle(
                        "open"
                    );


                menuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }
        );

    }

});
