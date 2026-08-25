/* =========================================================
   DASHBOARD.JS
   Gestion du dashboard utilisateur
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       BUMP BUTTONS
       ===================================================== */

    const bumpButtons = document.querySelectorAll(
        "[data-bump-button]"
    );


    bumpButtons.forEach((button) => {

        button.addEventListener("click", async () => {

            if (button.disabled) {
                return;
            }

            const serverId =
                button.dataset.serverId;

            const endpoint =
                button.dataset.endpoint;


            if (!serverId || !endpoint) {
                console.warn(
                    "Configuration du bouton bump incorrecte."
                );
                return;
            }


            const originalText =
                button.innerHTML;


            button.disabled = true;

            button.innerHTML =
                "⏳ Bump...";


            try {

                const response =
                    await fetch(endpoint, {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json",

                            "X-Requested-With":
                                "XMLHttpRequest"
                        },

                        body: JSON.stringify({
                            server_id: serverId
                        })
                    });


                const data =
                    await response.json();


                if (!response.ok || !data.success) {

                    throw new Error(
                        data.message ||
                        "Le bump a échoué."
                    );

                }


                /* =========================================
                   SUCCÈS
                   ========================================= */

                button.innerHTML =
                    "✅ Bump envoyé !";


                if (
                    data.cooldown !== undefined
                ) {

                    startCooldown(
                        button,
                        Number(data.cooldown)
                    );

                } else {

                    setTimeout(() => {

                        button.disabled = false;

                        button.innerHTML =
                            originalText;

                    }, 2000);

                }


                /* Mise à jour éventuelle du compteur */

                if (
                    data.bump_count !== undefined
                ) {

                    const counter =
                        document.querySelector(
                            `[data-bump-count="${serverId}"]`
                        );


                    if (counter) {

                        counter.textContent =
                            Number(
                                data.bump_count
                            ).toLocaleString(
                                "fr-FR"
                            );

                    }

                }


            } catch (error) {

                console.error(
                    "Erreur bump :",
                    error
                );


                button.disabled = false;

                button.innerHTML =
                    "❌ Erreur";


                setTimeout(() => {

                    button.innerHTML =
                        originalText;

                }, 2000);

            }

        });

    });


    /* =====================================================
       COOLDOWN
       ===================================================== */

    document
        .querySelectorAll("[data-cooldown]")
        .forEach((button) => {

            const cooldown =
                Number(
                    button.dataset.cooldown
                );


            if (
                Number.isFinite(cooldown) &&
                cooldown > 0
            ) {

                startCooldown(
                    button,
                    cooldown
                );

            }

        });


    function startCooldown(
        button,
        seconds
    ) {

        if (!button) {
            return;
        }


        let remaining =
            Math.max(
                0,
                Math.floor(seconds)
            );


        button.disabled = true;

        button.classList.add(
            "cooldown"
        );


        const originalText =
            button.dataset.originalText ||
            "🔄 Bump";


        button.dataset.originalText =
            originalText;


        updateCooldownButton(
            button,
            remaining
        );


        const interval =
            setInterval(() => {

                remaining--;

                if (remaining <= 0) {

                    clearInterval(interval);

                    button.disabled =
                        false;

                    button.classList.remove(
                        "cooldown"
                    );

                    button.innerHTML =
                        originalText;

                    return;

                }


                updateCooldownButton(
                    button,
                    remaining
                );

            }, 1000);

    }


    function updateCooldownButton(
        button,
        seconds
    ) {

        const minutes =
            Math.floor(seconds / 60);

        const remainingSeconds =
            seconds % 60;


        const formatted =
            String(
                remainingSeconds
            ).padStart(2, "0");


        button.innerHTML =
            `⏳ ${minutes}:${formatted}`;

    }


    /* =====================================================
       SEARCH SERVERS
       ===================================================== */

    const searchInput =
        document.querySelector(
            "[data-dashboard-search]"
        );


    const serverCards =
        document.querySelectorAll(
            "[data-server-card]"
        );


    if (searchInput && serverCards.length) {

        searchInput.addEventListener(
            "input",
            () => {

                const query =
                    searchInput.value
                        .trim()
                        .toLowerCase();


                serverCards.forEach(
                    (card) => {

                        const name =
                            (
                                card.dataset.serverName ||
                                card.textContent
                            )
                                .toLowerCase();


                        if (
                            !query ||
                            name.includes(query)
                        ) {

                            card.style.display =
                                "";

                        } else {

                            card.style.display =
                                "none";

                        }

                    }
                );

            }
        );

    }


    /* =====================================================
       FILTRE SERVEURS
       ===================================================== */

    const filter =
        document.querySelector(
            "[data-server-filter]"
        );


    if (filter && serverCards.length) {

        filter.addEventListener(
            "change",
            () => {

                const value =
                    filter.value;


                serverCards.forEach(
                    (card) => {

                        const category =
                            card.dataset.category ||
                            "";


                        const status =
                            card.dataset.status ||
                            "";


                        let visible =
                            true;


                        if (
                            value &&
                            value !== "all"
                        ) {

                            if (
                                value !== category &&
                                value !== status
                            ) {

                                visible =
                                    false;

                            }

                        }


                        card.style.display =
                            visible
                                ? ""
                                : "none";

                    }
                );

            }
        );

    }


    /* =====================================================
       CONFIRMATION ACTIONS
       ===================================================== */

    document
        .querySelectorAll(
            "[data-confirm]"
        )
        .forEach((element) => {

            element.addEventListener(
                "click",
                (event) => {

                    const message =
                        element.dataset.confirm ||
                        "Confirmer cette action ?";


                    if (!confirm(message)) {

                        event.preventDefault();

                    }

                }
            );

        });


    /* =====================================================
       DELETE / REMOVE SERVER
       ===================================================== */

    document
        .querySelectorAll(
            "[data-delete-server]"
        )
        .forEach((button) => {

            button.addEventListener(
                "click",
                async () => {

                    const serverId =
                        button.dataset.serverId;

                    const endpoint =
                        button.dataset.endpoint;


                    if (
                        !serverId ||
                        !endpoint
                    ) {

                        return;

                    }


                    const confirmed =
                        confirm(
                            "⚠️ Retirer ce serveur de votre compte ?"
                        );


                    if (!confirmed) {
                        return;
                    }


                    button.disabled =
                        true;

                    button.innerHTML =
                        "⏳ Suppression...";


                    try {

                        const response =
                            await fetch(
                                endpoint,
                                {
                                    method: "POST",

                                    headers: {
                                        "Content-Type":
                                            "application/json",

                                        "X-Requested-With":
                                            "XMLHttpRequest"
                                    },

                                    body:
                                        JSON.stringify({
                                            server_id:
                                                serverId
                                        })
                                }
                            );


                        const data =
                            await response.json();


                        if (
                            !response.ok ||
                            !data.success
                        ) {

                            throw new Error(
                                data.message ||
                                "Suppression impossible."
                            );

                        }


                        const card =
                            document.querySelector(
                                `[data-server-card-id="${serverId}"]`
                            );


                        if (card) {

                            card.style.opacity =
                                "0";

                            card.style.transform =
                                "translateY(10px)";


                            setTimeout(() => {

                                card.remove();

                            }, 250);

                        }


                    } catch (error) {

                        console.error(
                            "Erreur suppression serveur :",
                            error
                        );


                        button.disabled =
                            false;

                        button.innerHTML =
                            "🗑️ Retirer";

                        alert(
                            error.message
                        );

                    }

                }
            );

        });


    /* =====================================================
       AUTO REFRESH
       ===================================================== */

    const refreshElement =
        document.querySelector(
            "[data-dashboard-refresh]"
        );


    if (refreshElement) {

        const endpoint =
            refreshElement.dataset.endpoint;


        const interval =
            Number(
                refreshElement.dataset.interval
            ) || 30000;


        if (endpoint) {

            setInterval(
                async () => {

                    try {

                        const response =
                            await fetch(
                                endpoint,
                                {
                                    headers: {
                                        "X-Requested-With":
                                            "XMLHttpRequest"
                                    }
                                }
                            );


                        if (!response.ok) {
                            return;
                        }


                        /*
                         * L'API peut retourner du JSON
                         * contenant les statistiques.
                         */

                        const data =
                            await response.json();


                        if (!data) {
                            return;
                        }


                        if (
                            data.servers !== undefined
                        ) {

                            updateText(
                                "[data-stat-servers]",
                                data.servers
                            );

                        }


                        if (
                            data.bump_count !== undefined
                        ) {

                            updateText(
                                "[data-stat-bumps]",
                                data.bump_count
                            );

                        }


                        if (
                            data.users !== undefined
                        ) {

                            updateText(
                                "[data-stat-users]",
                                data.users
                            );

                        }

                    } catch (error) {

                        console.warn(
                            "Actualisation du dashboard impossible.",
                            error
                        );

                    }

                },
                interval
            );

        }

    }


    function updateText(
        selector,
        value
    ) {

        const element =
            document.querySelector(
                selector
            );


        if (!element) {
            return;
        }


        element.textContent =
            Number(value).toLocaleString(
                "fr-FR"
            );

    }


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuButton =
        document.querySelector(
            "[data-dashboard-menu]"
        );


    const menu =
        document.querySelector(
            "[data-dashboard-menu-content]"
        );


    if (menuButton && menu) {

        menuButton.addEventListener(
            "click",
            () => {

                const opened =
                    menu.classList.toggle(
                        "open"
                    );


                menuButton.setAttribute(
                    "aria-expanded",
                    String(opened)
                );

            }
        );

    }

});
