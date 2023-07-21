(() => {
    var e = {
        60054: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => i
            });
            var n = a(65050);
            const o = {
                studioServer: {
                    BASE_URL: (0, n.mW)
                        ("https://api.fyre.hypersign.id/", !0)
                },
                edv: {
                    BASE_URL: (0, n.mW)
                        ("https://stage.hypermine.in/edv", !1)
                },
                app: {
                    name: "DODO-Wallet",
                    decription: {
                        NODE_ENV: "production",
                        VUE_APP_AUTH0_CLIENT_ID: "Mo98qDLrZuOOa2TATig5qNzngwRpJCJk",
                        VUE_APP_AUTH0_DOMAIN: "hyperfyre-dev.us.auth0.com",
                        VUE_APP_MOBILEWALLET_URL: "hypersign",
                        VUE_APP_RECAPTCHA_SITE_KEY: "6LeKIM4ZAAAAAC23tPRa8Ut0MFF2FFN61wl0ihVZ",
                        VUE_APP_SERVER_WEBSOCKET_URL: "wss://api.fyre.hypersign.id/ws/",
                        VUE_APP_STUDIO_SERVER_BASE_URL: "https://api.fyre.hypersign.id/",
                        VUE_APP_TELEGRAM_BOT_ID: "2136538813",
                        VUE_APP_TELEGRAM_VERIFIER_BOT: "hyperfyre_bot",
                        VUE_APP_TITLE: "DODO-Wallet",
                        VUE_APP_VERSION: "v5.10.1",
                        VUE_APP_WEBWALLET_URL: "https://wallet.hypersign.id",
                        VUE_APP_GA_CODE: "GTM-5XV9VBF",
                        VUE_APP_KOMMINICATE_APP_ID: "482503809608fa05d3bcfc384edba263",
                        VUE_APP_WEBPUSH_VAPID_PUBLIC_KEY: "BAJF9hFTnNOu7Mc_jYvEFsk5d24UlwW8AwfgR5lFQFxttsgIQXP9PR97-QWP015Gc9AWR8fVFKyMDePR8rQEoEo",
                        VUE_APP_INVESTOR_API_SECRET_KEY: "a8be7e97656ff81566936ca15755e0341528be0cbec937be",
                        VUE_APP_BTN_BACKGROUND: "#f1b319",
                        VUE_APP_BTN_TXT_COLOR: "black",
                        VUE_APP_HEADER_BACKGROUND: "rgba(241, 179, 25, 0.24)",
                        VUE_APP_HEADER_TEXT_COLOR: "#212529",
                        VUE_APP_THEME_BACKGROUND: "rgb(54, 55, 64)",
                        VUE_APP_MOOPAY_PAYMENT_URL: "https://pay.zoksh.com/?order=MPO-",
                        VUE_APP_EDV_BASE_URL: "https://stage.hypermine.in/edv",
                        BASE_URL: "/"
                    }.VUE_APP_DESC,
                    version: "v5.10.1",
                    buttonBgColor: "#f1b319",
                    buttonTextColor: "black",
                    headerBGColor: "rgba(241, 179, 25, 0.24)",
                    headerTextColor: "#212529",
                    themeBgColor: "rgb(54, 55, 64)"
                },
                apiSecret: "c20285e78a6880133cf471c1eb9a8.9f5b3ee1a67946630d94549fe51e707da45934ff1cbc0ad42dec1a58a97822fe85039deafb63bd384971d0253052f2780",
                apiBaseURL: "https://api.entity.hypersign.id",
                recaptchaSiteKey: "6LeKIM4ZAAAAAC23tPRa8Ut0MFF2FFN61wl0ihVZ",
                webWalletAddress: (0, n.mW)
                    ("https://wallet.hypersign.id", !1),
                mobileWalletAddress: (0, n.mW)
                    ("hypersign", !1),
                websocketUrl: (0, n.mW)
                    ("wss://api.fyre.hypersign.id/ws/", !0),
                auth0Domain: (0, n.mW)
                    ("hyperfyre-dev.us.auth0.com", !1),
                auth0ClinetId: "Mo98qDLrZuOOa2TATig5qNzngwRpJCJk",
                telegramBotId: "2136538813",
                kommunicateAppId: "482503809608fa05d3bcfc384edba263",
                webpush_public_key: "BAJF9hFTnNOu7Mc_jYvEFsk5d24UlwW8AwfgR5lFQFxttsgIQXP9PR97-QWP015Gc9AWR8fVFKyMDePR8rQEoEo",
                investor_sign_key: "a8be7e97656ff81566936ca15755e0341528be0cbec937be",
                appName: "DODO-Wallet",
                eventActionType: {
                    INPUT_TEXT: "INPUT_TEXT",
                    INPUT_NUMBER: "INPUT_NUMBER",
                    TWITTER_FOLLOW: "TWITTER_FOLLOW",
                    TWITTER_RETWEET: "TWITTER_RETWEET",
                    TELEGRAM_JOIN: "TELEGRAM_JOIN",
                    BLOCKCHAIN_ETH: "BLOCKCHAIN_ETH",
                    BLOCKCHAIN_TEZ: "BLOCKCHAIN_TEZ",
                    ETHEREUM_ERC20: "ETHEREUM_ERC20",
                    ETHEREUM_ERC721: "ETHEREUM_ERC721"
                },
                verifierBot: {
                    TELEGRAM: "hyperfyre_bot"
                },
                moopay: {
                    payment_url: "https://pay.zoksh.com/?order=MPO-"
                }
            },
                i = o
        },
        66669: (e, t, a) => {
            "use strict";
            a(88674),
                a(17727);
            var n = a(27195),
                o = function () {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        attrs: {
                            id: "app"
                        }
                    }, [t("NavBar", {
                        attrs: {
                            title: e.name,
                            show: e.showUserNav,
                            themeData: e.themeData,
                            isForm: e.isForm
                        }
                    }), t("div", {
                        class: [e.isSidebarCollapsed ? "container-collapsed-not hideNavbar" : "container-collapsed"]
                    }, [e.showNavbar ? t("sidebar-menu", {
                        staticClass: "sidebar-wrapper",
                        attrs: {
                            collapsed: e.isSidebarCollapsed,
                            theme: "white-theme",
                            width: "220px",
                            menu: e.isSubscribed ? e.menu : e.unsubsSubscribedMenu
                        },
                        on: {
                            "toggle-collapse": e.onToggleCollapse,
                            "item-click": e.onItemClick
                        }
                    }, [t("div", {
                        staticStyle: {
                            background: "#363740"
                        },
                        attrs: {
                            slot: "header"
                        },
                        slot: "header"
                    }, [t("div", {
                        staticClass: "ml-1 mt-3 mb-2",
                        staticStyle: {
                            "padding-left": "1px",
                            "text-align": "center",
                            "margin-right": "2.25rem !important"
                        }
                    }, [e.isSidebarCollapsed ? e._e() : t("a", {
                        attrs: {
                            href: "/admin/dashboard"
                        }
                    }, [t("img", {
                        attrs: {
                            src: a(55022),
                            alt: "logo",
                            width: "130vw"
                        }
                    })]), e.isSidebarCollapsed ? t("a", {
                        attrs: {
                            href: "/admin/dashboard"
                        }
                    }, [t("img", {
                        attrs: {
                            src: a(24775),
                            alt: "logo",
                            width: "35vw"
                        }
                    })]) : e._e()]), t("hr", {
                        staticClass: "rule"
                    })]), t("span", {
                        staticClass: "text-center",
                        staticStyle: {
                            "font-size": "14px",
                            padding: "7px",
                            border: "1px solid #80808014"
                        },
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [t("a", {
                        staticStyle: {
                            "text-decoration": "none",
                            "background-color": "transparent",
                            color: "#8B8B8B"
                        },
                        attrs: {
                            href: "https://docs.fyre.hypersign.id/",
                            target: "_blank"
                        }
                    }, [e._v("Docs")])]), t("span", {
                        staticClass: "text-center",
                        staticStyle: {
                            "font-size": "12px",
                            padding: "7px"
                        },
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [e._v(e._s(e.$config.app.version))])]) : e._e(), t("div", {
                        class: [e.showNavbar ? "content-wrapper" : "content-wrapper-not"]
                    }, [t("router-view")], 1), e._m(0)], 1), t("notifications", {
                        attrs: {
                            group: "foo"
                        }
                    })], 1)
                },
                i = [function () {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "footer"
                    }, [e._v("Powered By: "), t("a", {
                        attrs: {
                            href: "https://hypersign.id/",
                            target: "_blank"
                        }
                    }, [e._v(" HyperSign")])])
                }],
                r = (a(26699), a(57658), function () {
                    var e = this,
                        t = e._self._c;
                    return e.show ? t("b-navbar", {
                        staticClass: "nav-bar",
                        style: e.themeCss,
                        attrs: {
                            toggleable: "lg"
                        }
                    }, [t("b-navbar-brand", {
                        attrs: {
                            href: "https://fyre.hypersign.id/",
                            target: "blank"
                        }
                    }, [e.themeData.logoPath ? t("img", {
                        attrs: {
                            src: e.themeData.logoPath,
                            height: "50px"
                        }
                    }) : t("img", {
                        attrs: {
                            src: a(55022),
                            height: "50px"
                        }
                    })]), t("b-nav-item-dropdown", {
                        staticClass: "m-2 menu ml-auto text-white text-decoration-none",
                        attrs: {
                            size: "sm",
                            right: ""
                        },
                        scopedSlots: e._u([{
                            key: "button-content",
                            fn: function () {
                                return [t("b-icon", {
                                    staticStyle: {
                                        color: "var(--theme-text-color)"
                                    },
                                    attrs: {
                                        icon: "menu-button-wide"
                                    }
                                })]
                            },
                            proxy: !0
                        }], null, !1, 324291470)
                    }, [t("b-dropdown-item", {
                        attrs: {
                            to: "/user/home/"
                        },
                        on: {
                            click: e.updateIsForm
                        }
                    }, [e._v(" Home ")]), "" != e.authToken && null != e.authToken ? t("b-dropdown-item", {
                        on: {
                            click: e.logout
                        }
                    }, [e._v(" Logout ")]) : e._e()], 1)], 1) : e._e()
                }),
                s = [],
                d = a(60054);
            const c = new n["default"],
                l = c,
                h = {
                    name: "NavBar",
                    props: {
                        title: {
                            required: !0,
                            type: String
                        },
                        show: {
                            required: !0,
                            type: Boolean
                        },
                        themeData: {
                            required: !0,
                            type: Object
                        },
                        isForm: {
                            required: !0,
                            type: Boolean
                        }
                    },
                    computed: {
                        themeCss() {
                            return {
                                "--theme-bg-color": this.themeData.themeColor && this.isForm ? this.themeData.themeColor : d.Z.app.themeBgColor,
                                "--theme-text-color": this.themeData.buttonTextColor && this.isForm ? this.themeData.buttonTextColor : "white"
                            }
                        }
                    },
                    data: () => ({
                        authToken: ""
                    }),
                    mounted() {
                        l.$on("getAuthToken", this.setAuth),
                            localStorage.getItem("authToken") && (this.authToken = localStorage.getItem("authToken")),
                            l.$on("logout", this.logout)
                    },
                    methods: {
                        async setAuth(e) {
                            this.authToken = e
                        },
                        logout() {
                            localStorage.clear(),
                                this.$router.go()
                        },
                        updateIsForm() {
                            this.isForm = !1
                        }
                    }
                },
                u = h;
            var m = a(1001),
                p = (0, m.Z)
                    (u, r, s, !1, null, "49cd13c0", null);
            const f = p.exports,
                g = {
                    components: {
                        NavBar: f
                    },
                    data() {
                        return {
                            themeData: {
                                themeColor: "",
                                logoPath: ""
                            },
                            name: d.Z.appName,
                            hover: !1,
                            authToken: null,
                            isSidebarCollapsed: !0,
                            authRoutes: ["register", "PKIIdLogin"],
                            showNavbar: !1,
                            menu: [{
                                href: "/admin/dashboard",
                                title: "Dashboard",
                                icon: "fas fa-tachometer-alt"
                            }, {
                                href: "/admin/events",
                                title: "Events",
                                icon: "fas fa-calendar-alt"
                            }, {
                                href: "/admin/participants",
                                title: "Participants",
                                icon: "fas fa-users",
                                exactPath: !0
                            }, {
                                title: "Settings",
                                icon: "fas fa-cog",
                                badge: {
                                    text: "new",
                                    class: "vsm--badge_default"
                                },
                                child: [{
                                    href: "/admin/teams",
                                    title: "Teams",
                                    icon: "fas fa-user-plus",
                                    exactPath: !0
                                }, {
                                    href: "/admin/setting/org",
                                    title: "Org",
                                    icon: "fa fa-university",
                                    exactPath: !0
                                }, {
                                    href: "/admin/createapp",
                                    title: "Apps",
                                    icon: "fa fa-code",
                                    exactPath: !0
                                }, {
                                    href: "/admin/subscription",
                                    title: "Subscriptions",
                                    icon: "fas fa-receipt",
                                    exactPath: !0
                                }]
                            }, {
                                href: "/admin/marketplace",
                                title: "Marketplace",
                                icon: "fas fa-store",
                                exactPath: !0
                            }, {
                                href: "/admin/login",
                                title: "Logout",
                                icon: "fas fa-sign-out-alt",
                                exactPath: !0
                            }],
                            unsubsSubscribedMenu: [{
                                href: "/admin/dashboard",
                                title: "Dashboard",
                                icon: "fas fa-tachometer-alt",
                                exactPath: !0
                            }, {
                                href: "/admin/subscription",
                                title: "Subscriptions",
                                icon: "fas fa-receipt",
                                exactPath: !0
                            }, {
                                href: "/admin/login",
                                title: "Logout",
                                icon: "fas fa-sign-out-alt",
                                exactPath: !0
                            }],
                            isSubscribed: !0,
                            showUserNav: !1,
                            showChat: !1,
                            isForm: !1
                        }
                    },
                    mounted() {
                        localStorage.getItem("authToken") && (this.authToken = localStorage.getItem("authToken")),
                            l.$on("UpdateAdminNav", (e => {
                                this.isSubscribed = e
                            })),
                            this.authToken && !window.location.pathname.includes("/form") && (this.$store.dispatch("getApps", this.authToken), this.$store.dispatch("getTeammates", this.authToken)),
                            l.$on("UpdateThemeEvent", (e => {
                                Object.assign(this.themeData, {
                                    ...e
                                }),
                                    this.isForm = !!window.location.pathname.includes("/form")
                            })),
                            this.$route.meta.admin ? this.showNavbar = !!(window.location.pathname.includes("/admin/participants") || window.location.pathname.includes("/admin/events") || window.location.pathname.includes("/admin/dashboard") || window.location.pathname.includes("/admin/subscription") || window.location.pathname.includes("/admin/teams") || window.location.pathname.includes("/admin/setting/org") || window.location.pathname.includes("/admin/createapp") || window.location.pathname.includes("/admin/marketplace")) : (this.showUserNav = !!(window.location.pathname.includes("/form") || window.location.pathname.includes("/user") || window.location.pathname.includes("/sa/home")), this.isForm = !!window.location.pathname.includes("/form"))
                    },
                    updated() {
                        this.showNavbar = !!(window.location.pathname.includes("/admin/participants") || window.location.pathname.includes("/admin/events") || window.location.pathname.includes("/admin/dashboard") || window.location.pathname.includes("/admin/subscription") || window.location.pathname.includes("/admin/teams") || window.location.pathname.includes("/admin/setting/org") || window.location.pathname.includes("/admin/createapp") || window.location.pathname.includes("/admin/marketplace")),
                            this.showChat = !!(window.location.pathname.includes("/admin/participants") || window.location.pathname.includes("/admin/events") || window.location.pathname.includes("/admin/dashboard") || window.location.pathname.includes("/admin/subscription") || window.location.pathname.includes("/admin/teams") || window.location.pathname.includes("/admin/setting/org") || window.location.pathname.includes("/admin/createapp") || window.location.pathname.includes("/admin/marketplace"))
                    },
                    methods: {
                        filterMenu() {
                            if (localStorage.getItem("user")) {
                                const e = JSON.parse(localStorage.getItem("user"));
                                if (e.isSubscribed)
                                    return;
                                this.menu = this.menu.filter((e => e.title.toLowerCase().includes("subscription") || e.title.toLowerCase().includes("logout")))
                            }
                        },
                        goToNextPage(e) {
                            const t = this.menu.find((t => t.name === e));
                            "Logout" === t.name && this.logout(),
                                this.$router.push(t.path),
                                null != this.$route.params.nextUrl ? this.$router.push(this.$route.params.nextUrl) : this.$router.push(t.path)
                        },
                        onToggleCollapse(e) {
                            this.isSidebarCollapsed = !!e
                        },
                        onItemClick() {
                            window.location.pathname.includes("investors") || window.location.pathname.includes("project") || window.location.pathname.includes("dashboard") || window.location.pathname.includes("/admin/subscription") || window.location.pathname.includes("/admin/teams") || window.location.pathname.includes("/admin/createapp") || window.location.pathname.includes("/admin/marketplace") ? this.showNavbar = !0 : this.showNavbar = !1
                        }
                    }
                },
                w = g;
            var b = (0, m.Z)
                (w, o, i, !1, null, "352bb0db", null);
            const v = b.exports;
            a(38862);
            var y = a(42241),
                E = a(47711),
                _ = a.n(E);
            n["default"].use(y.ZP);
            const A = new y.ZP({
                mode: "history",
                routes: [{
                    path: "/",
                    name: "DODO",
                    component: () => a.e(966).then(a.bind(a, 24043)),
                    meta: {
                        requiresAuth: !1,
                        admin: !0,
                        title: ` $ {
                            d.Z.appName
                        } - DODO `
                    }
                }]
            });
            A.beforeEach(((e, t, a) => {
                if (e.matched.length < 1)
                    return document.title = e.meta.title,
                        a(!1),
                        A.push("/404");
                if (e.matched.some((e => e.meta.requiresAuth))) {
                    const t = localStorage.getItem("authToken");
                    if (t) {
                        let o = !0;
                        "/admin/subscription" === e.path && (o = !1);
                        const i = ` $ {
                            d.Z.studioServer.BASE_URL
                        }
                        hs / api / v2 / auth / protected ? usage = $ {
                            o
                        } ` ;
                        _()
                            (i, {
                                headers: {
                                    Authorization: ` Bearer $ {
                                    t
                                } `
                                },
                                method: "POST"
                            }).then((e => e.json())).then((t => {
                                if (403 == t.status)
                                    a({
                                        path: e.meta.admin ? "/admin/login" : "/login",
                                        params: {
                                            nextUrl: e.fullPath
                                        }
                                    });
                                else if (localStorage.setItem("user", JSON.stringify(t.message)), n["default"].prototype.$accounts = t.accounts, 0 == t.accounts.length && (localStorage.removeItem("accessToken"), localStorage.removeItem("accessuser")), e.meta.admin)
                                    if (t.message.isSubscribed || "/admin/subscription" == e.path || "/admin/dashboard" == e.path) {
                                        const n = t.message.usage;
                                        n && n.totalUsed >= n.totalAvailable ? (a({
                                            path: "/admin/subscription",
                                            params: {
                                                nextUrl: e.fullPath
                                            }
                                        }), l.$emit("UpdateAdminNav", !1)) : (l.$emit("UpdateAdminNav", !0), a())
                                    } else l.$emit("UpdateAdminNav", !1),
                                        a({
                                            path: "/admin/subscription",
                                            params: {
                                                nextUrl: e.fullPath
                                            }
                                        });
                                else a()
                            })).catch((t => {
                                console.log(t),
                                    a({
                                        path: e.meta.admin ? "/admin/login" : "/login",
                                        params: {
                                            nextUrl: e.fullPath
                                        }
                                    })
                            }))
                    } else a({
                        path: e.meta.admin ? "/admin/login" : e.query["referrer"] ? `  / login / $ {
                            e.params["slug"]
                            } ? referrer = $ {
                            e.query["referrer"]
                            } ` : `  / login / $ {
                            e.params["slug"]
                            } ` ,
                        params: {
                            nextUrl: e.fullPath
                        }
                    })
                } else a()
            }));
            const D = A;
            var T = a(14359),
                S = a(27244),
                P = a(89649),
                C = a.n(P),
                I = (a(57024), a(56439)),
                O = a.n(I),
                U = a(41590),
                k = a.n(U),
                N = a(12112),
                R = a.n(N),
                x = (a(21703), a(90408)),
                B = a(43317);
            function L(e) {
                const t = {};
                for (const a in e) "@context" === a ? t["context"] = e[a] : t[a] = e[a];
                return t
            }
            n["default"].use(x.ZP);
            const M = new x.ZP.Store({
                state: {
                    entityAccessToken: "",
                    did: "",
                    didDocument: {},
                    credentials: [],
                    edvClient: null
                },
                getters: {
                    getDidDocVm: e => Object.assign({}, e.didDocument.verificationMethod[0]),
                    getEntityHeader: e => ({
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + e.entityAccessToken
                    }),
                    getUnChangedDIDDOcJSON: e => L(e.didDocument),
                    getDIDDocJSON: e => L(JSON.parse(JSON.stringify(L(e.didDocument), ((e, t) => {
                        if (!("" === t || Array.isArray(t) && 0 === t.length))
                            return t
                    })))),
                    getDIDDocJSONString: e => JSON.stringify(L(e.didDocument), ((e, t) => {
                        if (!("" === t || Array.isArray(t) && 0 === t.length))
                            return t
                    }))
                },
                mutations: {
                    setEntityAccessToken(e, t) {
                        e.entityAccessToken = t
                    },
                    setDID(e, t) {
                        e.did = t
                    },
                    setDIDDocument(e, t) {
                        e.didDocument = t
                    },
                    addVerificationMethod(e, t) {
                        const {
                            blockchainId: a
                        } = t,
                            n = e.didDocument.verificationMethod.find((e => e.blockchainAccountId === a));
                        if (n)
                            throw new Error("Wallet Address already added in the didDoc, choose different one");
                        const o = e.did,
                            i = ` did: hid: testnet: $ {
                            a.split(":")[2]
                            } # key - $ {
                            e.didDocument.verificationMethod.length + 1
                        } ` ;
                        e.didDocument.verificationMethod.push({
                            id: i,
                            type: t.publicKey ? "EcdsaSecp256k1VerificationKey2019" : "EcdsaSecp256k1RecoveryMethod2020",
                            controller: o,
                            publicKeyMultibase: t.publicKey ? t.publicKey : "",
                            blockchainAccountId: a
                        }),
                            e.didDocument.authentication.push(i),
                            e.didDocument.assertionMethod.push(i)
                    },
                    addCredentialsToStore(e, t) {
                        e.credentials.push(t)
                    },
                    addCredentialsToStoreIndexSorted(e, t) {
                        n["default"].set(e.credentials, t.index, t.credential)
                    },
                    cleanStates: e => {
                        e.did = "",
                            e.didDocument = {}
                    }
                },
                actions: {
                    addCredentialsToStoreIndexSorted: ({
                        commit: e
                    }, t) => {
                        e("addCredentialsToStoreIndexSorted", t)
                    },
                    authenticateSSIAppAction: ({
                        commit: e
                    }) => new Promise(((t, a) => {
                        console.log("Inside authenticateSSIAppAction");
                        const n = d.Z.apiBaseURL + "/api/v1/app/oauth";
                        fetch(n, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "X-Api-Secret-Key": d.Z.apiSecret
                            }
                        }).then((e => e.json())).then((a => {
                            if (400 == a.statusCode)
                                throw new Error("Bad Request " + a.message.toString());
                            if (401 == a.statusCode)
                                throw new Error("Invalid API Secret Key");
                            const {
                                access_token: n
                            } = a;
                            e("setEntityAccessToken", n),
                                t()
                        })).catch((e => {
                            a(e.message)
                        }))
                    })),
                    createADID: ({
                        commit: e,
                        getters: t
                    }, a) => new Promise(((n, o) => {
                        console.log("Inside createADID action");
                        const i = d.Z.apiBaseURL + "/api/v1/did/create",
                            r = {
                                namespace: "testnet",
                                options: {
                                    keyType: a.keplr ? "EcdsaSecp256k1VerificationKey2019" : "EcdsaSecp256k1RecoveryMethod2020",
                                    walletAddress: a.walletAddress,
                                    chainId: a.chainId,
                                    publicKey: a.publicKey ? a.publicKey : void 0
                                }
                            };
                        fetch(i, {
                            method: "POST",
                            headers: t.getEntityHeader,
                            body: JSON.stringify(r)
                        }).then((e => e.json())).then((t => {
                            if (400 == t.statusCode)
                                throw new Error("Bad Request " + t.message.toString());
                            if (401 == t.statusCode)
                                throw new Error("Unauthenticated");
                            const {
                                did: a,
                                metaData: o
                            } = t,
                                {
                                    didDocument: i
                                } = o;
                            e("setDIDDocument", i),
                                e("setDID", a),
                                n(t)
                        })).catch((e => {
                            o(e.message)
                        }))
                    })),
                    registerADID: ({
                        state: e,
                        getters: t
                    }, a) => new Promise(((n, o) => {
                        console.log("Inside registerADID action");
                        const i = d.Z.apiBaseURL + "/api/v1/did/register";
                        if (!e.didDocument || !e.did)
                            return o("No did found, create a new did");
                        let r;
                        r = a.address ? {
                            didDocument: t.getUnChangedDIDDOcJSON,
                            signInfos: [{
                                verification_method_id: a.verificationMethodId,
                                clientSpec: {
                                    type: "cosmos-ADR036",
                                    adr036SignerAddress: a.address
                                },
                                signature: a.signature.signature
                            }]
                        } : {
                            didDocument: t.getDIDDocJSON,
                            signInfos: [{
                                verification_method_id: a.verificationMethodId,
                                clientSpec: {
                                    type: "eth-personalSign"
                                },
                                signature: a.signature
                            }]
                        },
                            fetch(i, {
                                method: "POST",
                                headers: t.getEntityHeader,
                                body: JSON.stringify(r)
                            }).then((e => e.json())).then((e => {
                                if (400 == e.statusCode)
                                    throw new Error("Bad Request " + e.message.toString());
                                if (401 == e.statusCode)
                                    throw new Error("Unauthenticated");
                                n(e)
                            })).catch((e => {
                                o(e.message)
                            }))
                    })),
                    updateADID: ({
                        getters: e
                    }, t) => new Promise(((a, n) => {
                        console.log("Inside updateADID action");
                        const o = d.Z.apiBaseURL + "/api/v1/did",
                            i = {
                                didDocument: e.getDIDDocJSON,
                                signInfos: t
                            };
                        fetch(o, {
                            method: "PATCH",
                            headers: e.getEntityHeader,
                            body: JSON.stringify(i)
                        }).then((e => e.json())).then((e => {
                            if (400 == e.statusCode)
                                throw new Error("Bad Request " + e.message.toString());
                            if (401 == e.statusCode)
                                throw new Error("Unauthenticated");
                            const {
                                transactionHash: t
                            } = e;
                            if (!t)
                                throw new Error("Could not update DID");
                            a(e)
                        })).catch((e => {
                            n(e.message)
                        }))
                    })),
                    resolveADID: ({
                        getters: e
                    }, t) => new Promise(((a, n) => {
                        console.log("Inside resolveADID action");
                        const o = d.Z.apiBaseURL + "/api/v1/did/resolve/" + t.didId;
                        fetch(o, {
                            method: "GET",
                            headers: e.getEntityHeader
                        }).then((e => (console.log("status code : " + e.status), e.json()))).then((e => {
                            if (400 == e.statusCode)
                                throw new Error("Bad Request " + e.message.toString());
                            if (401 == e.statusCode)
                                throw new Error("Unauthenticated");
                            if (404 == e.statusCode)
                                return a(void 0);
                            const {
                                didDocument: t
                            } = e;
                            if (0 === Object.keys(t).length)
                                return a(void 0);
                            a(t)
                        })).catch((e => {
                            console.log("Inside reject"),
                                n(e.message)
                        }))
                    })),
                    issueCredential: ({
                        state: e,
                        getters: t,
                        commit: a
                    }, n) => new Promise(((o, i) => {
                        console.log("Inside issueCredential action");
                        const r = d.Z.apiBaseURL + "/api/v1/credential/issue";
                        if (!e.didDocument || !e.did)
                            return i("No did found, create a new did");
                        const s = {
                            schemaId: "sch:hid:testnet:zCJo9rxfCRNgCyzecFyX92psLhK7twiSWxMFnupacKgCE:1.0",
                            subjectDid: e.did,
                            issuerDid: "did:hid:testnet:z6ary7M7yNFPMStGXwYByUoaLoCTp8D1Ux6sW7ByxxkFm",
                            expirationDate: "2027-12-10T18:30:00.000Z",
                            fields: {
                                userSocialId: n.userName,
                                provider: n.provider
                            },
                            namespace: "testnet",
                            verificationMethodId: "did:hid:testnet:z6ary7M7yNFPMStGXwYByUoaLoCTp8D1Ux6sW7ByxxkFm#key-1",
                            persist: !0
                        };
                        fetch(r, {
                            method: "POST",
                            headers: t.getEntityHeader,
                            body: JSON.stringify(s)
                        }).then((e => e.json())).then((e => {
                            if (400 == e.statusCode)
                                throw new Error("Bad Request " + e.message.toString());
                            if (404 == e.statusCode)
                                throw new Error("Not Found");
                            const t = {
                                encrypted: !1,
                                credential: e
                            };
                            a("addCredentialsToStore", t),
                                o(e)
                        })).catch((e => {
                            i(e.message)
                        }))
                    })),
                    storeCreatedCredential: ({
                        state: e,
                        getters: t,
                        commit: a
                    }, n) => new Promise(((a, o) => {
                        try {
                            const i = t.getDidDocVm;
                            i.id = i.id.split("#")[0] + "#" + i.blockchainAccountId;
                            const r = new B.HypersignEdvClientEcdsaSecp256k1({
                                url: d.Z.edv.BASE_URL,
                                verificationMethod: i
                            });
                            r.registerEdv({
                                edvId: ` hs: edv: $ {
                                    e.didDocument.id
                                } ` ,
                                verificationMethod: i
                            }).then((() => {
                                e.edvClient = r,
                                    r.insertDoc({
                                        edvId: ` hs: edv: $ {
                                        e.didDocument.id
                                    } ` ,
                                        documentId: ` hs: credentials: $ {
                                        n.credential.credentialDocument.id
                                    } ` ,
                                        document: n.credential,
                                        metadata: {
                                            schemaId: n.credential.credentialDocument.credentialSchema.id,
                                            credentialId: n.credential.credentialDocument.id
                                        }
                                    }).then((e => {
                                        a(e)
                                    })).catch((e => {
                                        o(e)
                                    }))
                            }))
                        }
                        catch (i) {
                            o(i)
                        }
                    })),
                    fetchCredentials: ({
                        state: e,
                        getters: t,
                        commit: a
                    }, n) => new Promise(((a, n) => {
                        try {
                            const o = t.getDidDocVm;
                            o.id = o.id.split("#")[0] + "#" + o.blockchainAccountId;
                            const i = new B.HypersignEdvClientEcdsaSecp256k1({
                                url: d.Z.edv.BASE_URL,
                                verificationMethod: o
                            });
                            i.registerEdv({
                                edvId: ` hs: edv: $ {
                                    e.didDocument.id
                                } ` ,
                                verificationMethod: o
                            }).then((() => {
                                e.edvClient = i,
                                    console.log("here"),
                                    i.fetchAllDocs({
                                        edvId: ` hs: edv: $ {
                                        e.didDocument.id
                                    } `
                                    }).then((e => {
                                        a(e)
                                    })).catch((e => {
                                        n(e)
                                    }))
                            }))
                        }
                        catch (o) {
                            n(o)
                        }
                    })),
                    updateCredential: ({
                        state: e,
                        getters: t,
                        commit: a
                    }, n) => new Promise(((t, a) => {
                        try {
                            e.edvClient.updateDoc({
                                document: e.credentials,
                                edvId: ` hs: edv: $ {
                                    e.didDocument.id
                                } ` ,
                                documentId: ` hs: credentials: $ {
                                    e.didDocument.id
                                } `
                            }).then((e => {
                                t(e)
                            })).catch((e => {
                                a(e)
                            }))
                        }
                        catch (n) {
                            a(n)
                        }
                    })),
                    decryptCredential: ({
                        state: e,
                        getters: t,
                        commit: a
                    }, n) => new Promise(((t, a) => {
                        try {
                            e.edvClient.decryptDocument(n).then((e => {
                                t(e)
                            })).catch((e => {
                                a(e)
                            }))
                        }
                        catch (o) {
                            a(o)
                        }
                    })),
                    setCredential: ({
                        state: e,
                        getters: t,
                        commit: a
                    }, n) => {
                        e.credentials.push(n.credential)
                    }
                }
            });
            var V = a(17709),
                F = a(51980),
                $ = a.n(F),
                W = a(8725),
                j = a(48512),
                K = a.n(j);
            const Z = {
                confirmButtonColor: "#41b882",
                cancelButtonColor: "#ff7674"
            };
            n["default"].use(k(), Z),
                n["default"].config.productionTip = !1,
                n["default"].use(T.XG7),
                n["default"].use(S.A7),
                n["default"].use(C()),
                n["default"].use(V.VeTable),
                n["default"].use(V.VePagination),
                n["default"].use(V.VeIcon),
                n["default"].use(V.VeLoading),
                n["default"].use(K()),
                n["default"].prototype.$veLoading = V.VeLoading,
                n["default"].prototype.$veLocale = V.VeLocale,
                n["default"].use(O()),
                n["default"].prototype.$config = d.Z,
                n["default"].use($()),
                n["default"].component("multiselect", R()),
                n["default"].use(W.Z),
                new n["default"]
                    ({
                        router: D,
                        store: M,
                        render: e => e(v)
                    }).$mount("#app")
        },
        65050: (e, t, a) => {
            "use strict";
            a.d(t, {
                $G: () => o,
                L: () => n,
                mW: () => i
            });
            a(74916),
                a(26699),
                a(28193);
            function n(e, t, a) {
                if (e) {
                    const n = e.length;
                    if (n > t) {
                        const o = e.substr(0, a),
                            i = "...",
                            r = n - t,
                            s = e.substr(a + i.length + r, n);
                        return o + i + s
                    }
                }
            }
            function o(e, t) {
                if (!e)
                    return;
                if (!t)
                    return;
                if (e.length <= t)
                    return e;
                const a = Math.floor(t / 3),
                    n = e.substr(0, a),
                    o = e.slice(- a);
                return n + " ... " + o
            }
            function i(e, t) {
                switch (t) {
                    case !0: return e && e.endsWith("/") ? e : e + "/";
                    case !1: return e && e.endsWith("/") ? e.slice(0, - 1) : e;
                    default: return e
                }
            }
        },
        55022: (e, t, a) => {
            "use strict";
            e.exports = a.p + "img/Fyre_Small.ae276fe6.png"
        },
        24775: (e, t, a) => {
            "use strict";
            e.exports = a.p + "img/favicon.efc51f14.png"
        },
        993: () => { },
        7420: () => { },
        69159: () => { },
        80950: () => { },
        46601: () => { },
        89214: () => { },
        8623: () => { },
        7748: () => { },
        85568: () => { },
        56619: () => { },
        77108: () => { },
        52361: () => { },
        94616: () => { },
        55024: () => { }
    },
        t = {};
    function a(n) {
        var o = t[n];
        if (void 0 !== o)
            return o.exports;
        var i = t[n] = {
            id: n,
            loaded: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, a),
            i.loaded = !0,
            i.exports
    }
    a.m = e,
        (() => {
            var e = [];
            a.O = (t, n, o, i) => {
                if (!n) {
                    var r = 1 / 0;
                    for (l = 0; l < e.length; l++) {
                        for (var [n, o, i] = e[l], s = !0, d = 0; d < n.length; d++)
                            (!1 & i || r >= i) && Object.keys(a.O).every((e => a.O[e]
                                (n[d]))) ? n.splice(d--, 1) : (s = !1, i < r && (r = i));
                        if (s) {
                            e.splice(l--, 1);
                            var c = o();
                            void 0 !== c && (t = c)
                        }
                    }
                    return t
                }
                i = i || 0;
                for (var l = e.length; l > 0 && e[l - 1][2] > i; l--)
                    e[l] = e[l - 1];
                e[l] = [n, o, i]
            }
        })
            (),
        (() => {
            a.n = e => {
                var t = e && e.__esModule ? () => e["default"] : () => e;
                return a.d(t, {
                    a: t
                }),
                    t
            }
        })
            (),
        (() => {
            var e,
                t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
            a.t = function (n, o) {
                if (1 & o && (n = this(n)), 8 & o)
                    return n;
                if ("object" === typeof n && n) {
                    if (4 & o && n.__esModule)
                        return n;
                    if (16 & o && "function" === typeof n.then)
                        return n
                }
                var i = Object.create(null);
                a.r(i);
                var r = {};
                e = e || [null, t({}), t([]), t(t)];
                for (var s = 2 & o && n;
                    "object" == typeof s && !  ~e.indexOf(s); s = t(s))
                    Object.getOwnPropertyNames(s).forEach((e => r[e] = () => n[e]));
                return r["default"] = () => n,
                    a.d(i, r),
                    i
            }
        })
            (),
        (() => {
            a.d = (e, t) => {
                for (var n in t)
                    a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
            }
        })
            (),
        (() => {
            a.f = {},
                a.e = e => Promise.all(Object.keys(a.f).reduce(((t, n) => (a.f[n]
                    (e, t), t)), []))
        })
            (),
        (() => {
            a.u = e => "js/dashboard.db1ae96f.js"
        })
            (),
        (() => {
            a.miniCssF = e => "css/dashboard.db2fca78.css"
        })
            (),
        (() => {
            a.g = function () {
                if ("object" === typeof globalThis)
                    return globalThis;
                try {
                    return this || new Function("return this")
                        ()
                }
                catch (e) {
                    if ("object" === typeof window)
                        return window
                }
            }()
        })
            (),
        (() => {
            a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)
        })
            (),
        (() => {
            var e = {},
                t = "hyperfye-frontend:";
            a.l = (n, o, i, r) => {
                if (e[n])
                    e[n].push(o);
                else {
                    var s,
                        d;
                    if (void 0 !== i)
                        for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
                            var h = c[l];
                            if (h.getAttribute("src") == n || h.getAttribute("data-webpack") == t + i) {
                                s = h;
                                break
                            }
                        }
                    s || (d = !0, s = document.createElement("script"), s.charset = "utf-8", s.timeout = 120, a.nc && s.setAttribute("nonce", a.nc), s.setAttribute("data-webpack", t + i), s.src = n),
                        e[n] = [o];
                    var u = (t, a) => {
                        s.onerror = s.onload = null,
                            clearTimeout(m);
                        var o = e[n];
                        if (delete e[n], s.parentNode && s.parentNode.removeChild(s), o && o.forEach((e => e(a))), t)
                            return t(a)
                    },
                        m = setTimeout(u.bind(null, void 0, {
                            type: "timeout",
                            target: s
                        }), 12e4);
                    s.onerror = u.bind(null, s.onerror),
                        s.onload = u.bind(null, s.onload),
                        d && document.head.appendChild(s)
                }
            }
        })
            (),
        (() => {
            a.r = e => {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
        })
            (),
        (() => {
            a.nmd = e => (e.paths = [], e.children || (e.children = []), e)
        })
            (),
        (() => {
            a.p = "/"
        })
            (),
        (() => {
            if ("undefined" !== typeof document) {
                var e = (e, t, a, n, o) => {
                    var i = document.createElement("link");
                    i.rel = "stylesheet",
                        i.type = "text/css";
                    var r = a => {
                        if (i.onerror = i.onload = null, "load" === a.type)
                            n();
                        else {
                            var r = a && ("load" === a.type ? "missing" : a.type),
                                s = a && a.target && a.target.href || t,
                                d = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                            d.code = "CSS_CHUNK_LOAD_FAILED",
                                d.type = r,
                                d.request = s,
                                i.parentNode && i.parentNode.removeChild(i),
                                o(d)
                        }
                    };
                    return i.onerror = i.onload = r,
                        i.href = t,
                        a ? a.parentNode.insertBefore(i, a.nextSibling) : document.head.appendChild(i),
                        i
                },
                    t = (e, t) => {
                        for (var a = document.getElementsByTagName("link"), n = 0; n < a.length; n++) {
                            var o = a[n],
                                i = o.getAttribute("data-href") || o.getAttribute("href");
                            if ("stylesheet" === o.rel && (i === e || i === t))
                                return o
                        }
                        var r = document.getElementsByTagName("style");
                        for (n = 0; n < r.length; n++) {
                            o = r[n],
                                i = o.getAttribute("data-href");
                            if (i === e || i === t)
                                return o
                        }
                    },
                    n = n => new Promise(((o, i) => {
                        var r = a.miniCssF(n),
                            s = a.p + r;
                        if (t(r, s))
                            return o();
                        e(n, s, null, o, i)
                    })),
                    o = {
                        143: 0
                    };
                a.f.miniCss = (e, t) => {
                    var a = {
                        966: 1
                    };
                    o[e] ? t.push(o[e]) : 0 !== o[e] && a[e] && t.push(o[e] = n(e).then((() => {
                        o[e] = 0
                    }), (t => {
                        throw delete o[e],
                        t
                    })))
                }
            }
        })
            (),
        (() => {
            var e = {
                143: 0
            };
            a.f.j = (t, n) => {
                var o = a.o(e, t) ? e[t] : void 0;
                if (0 !== o)
                    if (o)
                        n.push(o[2]);
                    else {
                        var i = new Promise(((a, n) => o = e[t] = [a, n]));
                        n.push(o[2] = i);
                        var r = a.p + a.u(t),
                            s = new Error,
                            d = n => {
                                if (a.o(e, t) && (o = e[t], 0 !== o && (e[t] = void 0), o)) {
                                    var i = n && ("load" === n.type ? "missing" : n.type),
                                        r = n && n.target && n.target.src;
                                    s.message = "Loading chunk " + t + " failed.\n(" + i + ": " + r + ")",
                                        s.name = "ChunkLoadError",
                                        s.type = i,
                                        s.request = r,
                                        o[1]
                                            (s)
                                }
                            };
                        a.l(r, d, "chunk-" + t, t)
                    }
            },
                a.O.j = t => 0 === e[t];
            var t = (t, n) => {
                var o,
                    i,
                    [r, s, d] = n,
                    c = 0;
                if (r.some((t => 0 !== e[t]))) {
                    for (o in s)
                        a.o(s, o) && (a.m[o] = s[o]);
                    if (d)
                        var l = d(a)
                }
                for (t && t(n); c < r.length; c++)
                    i = r[c],
                        a.o(e, i) && e[i] && e[i][0]
                            (),
                        e[i] = 0;
                return a.O(l)
            },
                n = self["webpackChunkhyperfye_frontend"] = self["webpackChunkhyperfye_frontend"] || [];
            n.forEach(t.bind(null, 0)),
                n.push = t.bind(null, n.push.bind(n))
        })
            ();
    var n = a.O(void 0, [998], (() => a(66669)));
    n = a.O(n)
})
    ();
//# sourceMappingURL=app.1f3ab4dd.js.map
