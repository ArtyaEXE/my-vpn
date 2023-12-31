(function () {
  "use strict";
  var t = {
      566: function (t, s, e) {
        var i = e(963),
          a = e(378),
          l = e(252);
        const n = { class: "main" };
        function o(t, s, e, i, a, o) {
          const c = (0, l.up)("MainLayout"),
            r = (0, l.Q2)("motion-fade");
          return (0, l.wy)(((0, l.wg)(), (0, l.iD)("div", n, [(0, l.Wm)(c)])), [
            [r],
          ]);
        }
        const c = { id: "main" },
          r = { id: "why" },
          g = { id: "locations" },
          m = { id: "tariff" },
          d = { id: "questions" };
        function p(t, s, e, i, a, n) {
          const o = (0, l.up)("HeaderComponent"),
            p = (0, l.up)("MainComponent"),
            u = (0, l.up)("Why"),
            b = (0, l.up)("Location"),
            v = (0, l.up)("Tariff"),
            f = (0, l.up)("Questions"),
            h = (0, l.up)("FooterComponent");
          return (
            (0, l.wg)(),
            (0, l.iD)(
              l.HY,
              null,
              [
                (0, l._)("header", null, [(0, l.Wm)(o)]),
                (0, l._)("main", null, [
                  (0, l._)("section", c, [(0, l.Wm)(p)]),
                  (0, l._)("section", r, [(0, l.Wm)(u)]),
                  (0, l._)("section", g, [(0, l.Wm)(b)]),
                  (0, l._)("section", m, [(0, l.Wm)(v)]),
                  (0, l._)("section", d, [(0, l.Wm)(f)]),
                ]),
                (0, l._)("footer", null, [(0, l.Wm)(h)]),
              ],
              64
            )
          );
        }
        var u = e(577);
        const b = { class: "container" },
          v = { class: "header-container", id: "head" },
          f = (0, l._)(
            "a",
            { class: "title header-link", href: "#" },
            [(0, l.Uk)("My"), (0, l._)("span", { class: "orange" }, "VPN")],
            -1
          ),
          h = { class: "nav-list" },
          y = { class: "list-item" },
          _ = { class: "list-item" },
          w = { class: "list-item" },
          x = { class: "list-item" },
          k = (0, l._)(
            "button",
            { class: "button orange-hover burger-button" },
            [
              (0, l._)(
                "a",
                {
                  class: "button-link",
                  target: "_blank",
                  href: "https://t.me/MyVPN_ai",
                },
                " Чат с поддержкой "
              ),
            ],
            -1
          ),
          D = (0, l._)(
            "button",
            { class: "button orange-hover header-button" },
            [
              (0, l._)(
                "a",
                {
                  class: "button-link",
                  target: "_blank",
                  href: "https://t.me/MyVPN_ai",
                },
                " Чат с поддержкой "
              ),
            ],
            -1
          );
        function C(t, s, e, i, a, n) {
          return (
            (0, l.wg)(),
            (0, l.iD)("div", b, [
              (0, l._)("div", v, [
                f,
                (0, l._)(
                  "nav",
                  {
                    class: (0, u.C_)(["header-nav", { open: a.isBurgerOpen }]),
                  },
                  [
                    (0, l._)("ul", h, [
                      (0, l._)("li", y, [
                        (0, l._)(
                          "a",
                          {
                            class: "text-medium link",
                            href: "#why",
                            onClick:
                              s[0] ||
                              (s[0] = (...t) =>
                                n.closeBurger && n.closeBurger(...t)),
                          },
                          "Почему MyVPN"
                        ),
                      ]),
                      (0, l._)("li", _, [
                        (0, l._)(
                          "a",
                          {
                            class: "text-medium link",
                            href: "#locations",
                            onClick:
                              s[1] ||
                              (s[1] = (...t) =>
                                n.closeBurger && n.closeBurger(...t)),
                          },
                          "Локации"
                        ),
                      ]),
                      (0, l._)("li", w, [
                        (0, l._)(
                          "a",
                          {
                            class: "text-medium link",
                            href: "#tariff",
                            onClick:
                              s[2] ||
                              (s[2] = (...t) =>
                                n.closeBurger && n.closeBurger(...t)),
                          },
                          "Тарифы"
                        ),
                      ]),
                      (0, l._)("li", x, [
                        (0, l._)(
                          "a",
                          {
                            class: "text-medium link",
                            href: "#questions",
                            onClick:
                              s[3] ||
                              (s[3] = (...t) =>
                                n.closeBurger && n.closeBurger(...t)),
                          },
                          "Вопросы"
                        ),
                      ]),
                    ]),
                    k,
                  ],
                  2
                ),
                D,
                (0, l._)(
                  "button",
                  {
                    class: "burger",
                    onClick:
                      s[4] ||
                      (s[4] = (...t) => n.toggleBurger && n.toggleBurger(...t)),
                  },
                  [
                    (0, l._)(
                      "span",
                      {
                        class: (0, u.C_)([
                          "burger-line",
                          { open: a.isBurgerOpen },
                        ]),
                      },
                      null,
                      2
                    ),
                    (0, l._)(
                      "span",
                      {
                        class: (0, u.C_)([
                          "burger-line",
                          { open: a.isBurgerOpen },
                        ]),
                      },
                      null,
                      2
                    ),
                    (0, l._)(
                      "span",
                      {
                        class: (0, u.C_)([
                          "burger-line",
                          { open: a.isBurgerOpen },
                        ]),
                      },
                      null,
                      2
                    ),
                  ]
                ),
              ]),
            ])
          );
        }
        var O = {
            name: "HeaderComponent",
            data() {
              return { isBurgerOpen: !1 };
            },
            methods: {
              toggleBurger() {
                (this.isBurgerOpen = !this.isBurgerOpen),
                  this.isBurgerOpen
                    ? (document.body.style.overflow = "hidden")
                    : (document.body.style.overflow = "auto");
              },
              closeBurger() {
                (this.isBurgerOpen = !1),
                  (document.body.style.overflow = "auto");
              },
            },
          },
          B = e(744);
        const P = (0, B.Z)(O, [["render", C]]);
        var N = P,
          M = e.p + "img/calendar.c87e8301.svg",
          T = e.p + "img/telegram.6c82b57d.svg",
          V = e.p + "img/gift.832cce0f.svg",
          E = e.p + "img/main.4b4894db.png";
        const W = { class: "container" },
          U = { class: "main-container" },
          A = (0, l.uE)(
            '<h1 class="title title-big main-title">Надежный <span class="orange">VPN</span> всего за 1 ₽ в день</h1><ul class="main-list"><li class="main-item text-medium fs-20"><img src="' +
              M +
              '" alt="logo">Никакой подписки — платите только за дни пользования</li><li class="main-item text-medium fs-20"><img src="' +
              T +
              '" alt="logo">Простое подключение через ТГ-бота</li><li class="main-item text-medium fs-20"><img src="' +
              V +
              '" alt="logo">Первые 10 дней — в подарок</li></ul><button class="button orange-bg fs-28 orange-hover"><a href="https://t.me/MyVPN_ai_bot" target="_blank" class="button-link"> Попробовать бесплатно </a></button><img class="main-img" src="' +
              E +
              '" alt="">',
            4
          ),
          S = [A];
        function L(t, s, e, i, a, n) {
          const o = (0, l.Q2)("motion-fade");
          return (
            (0, l.wg)(),
            (0, l.iD)("div", W, [
              (0, l.wy)(((0, l.wg)(), (0, l.iD)("div", U, S)), [[o]]),
            ])
          );
        }
        var Q = { name: "MainComponent" };
        const Z = (0, B.Z)(Q, [["render", L]]);
        var F = Z,
          G = e.p + "img/price.23d5197b.svg",
          H = e.p + "img/calendar-days.fac50cb3.svg",
          j = e.p + "img/gift-black.50042e7b.svg",
          z = e.p + "img/globe.dacb3bea.svg",
          I = e.p + "img/rocket.82b1d70c.svg",
          K = e.p + "img/shield-check.5f3a95b0.svg",
          q = e.p + "img/card.1ebad671.svg",
          J = e.p + "img/lock.b4befbe4.svg",
          R = e.p + "img/thumbs-up.a2c34c01.svg";
        const Y = { class: "container" },
          X = { class: "why-container text-center" },
          $ = (0, l._)(
            "h2",
            { class: "title mb-60 fs-56" },
            [
              (0, l.Uk)("Почему именно My"),
              (0, l._)("span", { class: "orange" }, "VPN"),
            ],
            -1
          ),
          tt = { class: "why-list mb-60" },
          st = { delay: 400, class: "why-item br-24 pd-24 bg-grey div1" },
          et = (0, l._)("img", { class: "why-img", src: G, alt: "" }, null, -1),
          it = (0, l._)(
            "span",
            { class: "text-semi text-light" },
            "Всего 1 ₽ в день",
            -1
          ),
          at = [et, it],
          lt = { class: "why-item br-24 pd-24 bg-white div2" },
          nt = (0, l._)("img", { class: "why-img", src: H, alt: "" }, null, -1),
          ot = (0, l._)(
            "span",
            { class: "text-semi text-grey" },
            "Оплата только за дни пользования",
            -1
          ),
          ct = [nt, ot],
          rt = { class: "why-item br-24 pd-24 bg-yellow div3" },
          gt = (0, l._)("img", { class: "why-img", src: j, alt: "" }, null, -1),
          mt = (0, l._)(
            "span",
            { class: "text-semi text-grey" },
            "Бесплатный период 10 дней",
            -1
          ),
          dt = [gt, mt],
          pt = { class: "why-item br-24 pd-24 bg-light div4" },
          ut = (0, l._)("img", { class: "why-img", src: z, alt: "" }, null, -1),
          bt = (0, l._)(
            "span",
            { class: "text-semi text-grey" },
            "Локации по всему миру",
            -1
          ),
          vt = [ut, bt],
          ft = { class: "why-item br-24 pd-24 bg-ligth-yellow div5" },
          ht = (0, l._)("img", { class: "why-img", src: I, alt: "" }, null, -1),
          yt = (0, l._)(
            "span",
            { class: "text-semi text-grey" },
            "Сервера 10 Gbit (скорость ограничена только вашим каналом)",
            -1
          ),
          _t = [ht, yt],
          wt = { class: "why-item br-24 pd-24 bg-light div6" },
          xt = (0, l._)("img", { class: "why-img", src: K, alt: "" }, null, -1),
          kt = (0, l._)(
            "span",
            { class: "text-semi text-grey" },
            "Защищённый доступ к сайтам и приложениям",
            -1
          ),
          Dt = [xt, kt],
          Ct = { class: "why-item br-24 pd-24 bg-white div7" },
          Ot = (0, l._)("img", { class: "why-img", src: q, alt: "" }, null, -1),
          Bt = (0, l._)(
            "span",
            { class: "text-semi text-grey" },
            "Оплата российскими картами или USDT",
            -1
          ),
          Pt = [Ot, Bt],
          Nt = { class: "why-item br-24 pd-24 bg-grey div8" },
          Mt = (0, l._)("img", { class: "why-img", src: J, alt: "" }, null, -1),
          Tt = (0, l._)(
            "span",
            { class: "text-semi text-light" },
            "Устойчивость к взлому",
            -1
          ),
          Vt = [Mt, Tt],
          Et = { class: "why-item br-24 pd-24 bg-yellow div9" },
          Wt = (0, l._)("img", { class: "why-img", src: R, alt: "" }, null, -1),
          Ut = (0, l._)(
            "span",
            { class: "text-semi text-grey" },
            "Гарантия возврата денег",
            -1
          ),
          At = [Wt, Ut],
          St = (0, l._)(
            "button",
            { class: "button orange-bg fs-28 orange-hover" },
            [
              (0, l._)(
                "a",
                {
                  class: "button-link",
                  target: "_blank",
                  href: "https://t.me/MyVPN_ai_bot",
                },
                " Установить"
              ),
            ],
            -1
          );
        function Lt(t, s, e, i, a, n) {
          const o = (0, l.Q2)("motion-fade-visible-once");
          return (
            (0, l.wg)(),
            (0, l.iD)("div", Y, [
              (0, l._)("div", X, [
                $,
                (0, l._)("ul", tt, [
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", st, at)), [[o]]),
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", lt, ct)), [[o]]),
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", rt, dt)), [[o]]),
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", pt, vt)), [[o]]),
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", ft, _t)), [[o]]),
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", wt, Dt)), [[o]]),
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", Ct, Pt)), [[o]]),
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", Nt, Vt)), [[o]]),
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", Et, At)), [[o]]),
                ]),
                St,
              ]),
            ])
          );
        }
        var Qt = { name: "Why" };
        const Zt = (0, B.Z)(Qt, [["render", Lt]]);
        var Ft = Zt,
          Gt = e.p + "img/location.c3a65c2d.png",
          Ht = e.p + "img/US.743fa62f.svg",
          jt = e.p + "img/JP.788a2757.svg",
          zt = e.p + "img/RU.0463fed9.svg",
          It = e.p + "img/FR.ca2ddc1d.svg",
          Kt = e.p + "img/GB.041abd10.svg",
          qt = e.p + "img/IT.3b259283.svg",
          Jt = e.p + "img/KW.8229fa40.svg",
          Rt = e.p + "img/ES.31d62b3d.svg",
          Yt = e.p + "img/DE.6263251f.svg";
        const Xt = { class: "container" },
          $t = { class: "location-container text-center" },
          ts = (0, l._)(
            "img",
            { class: "loc-img", src: Gt, alt: "" },
            null,
            -1
          ),
          ss = (0, l._)(
            "h2",
            { class: "title mb-60 fs-56" },
            [
              (0, l.Uk)("Локации My"),
              (0, l._)("span", { class: "orange" }, "VPN"),
            ],
            -1
          ),
          es = { class: "location-list mb-60" },
          is = { delay: 300, class: "location-item br-24 pd-24 box loc1" },
          as = (0, l._)(
            "img",
            { class: "location-img", src: Ht, alt: "USA" },
            null,
            -1
          ),
          ls = (0, l._)("span", { class: "text-semi text-grey" }, "США", -1),
          ns = [as, ls],
          os = { delay: 300, class: "location-item br-24 pd-24 box loc2" },
          cs = (0, l._)(
            "img",
            { class: "location-img", src: jt, alt: "JAPAN" },
            null,
            -1
          ),
          rs = (0, l._)("span", { class: "text-semi text-grey" }, "Япония", -1),
          gs = [cs, rs],
          ms = { delay: 300, class: "location-item br-24 pd-24 box loc3" },
          ds = (0, l._)(
            "img",
            { class: "location-img", src: zt, alt: "RUSSIA" },
            null,
            -1
          ),
          ps = (0, l._)("span", { class: "text-semi text-grey" }, "Россия", -1),
          us = [ds, ps],
          bs = { delay: 300, class: "location-item br-24 pd-24 box loc4" },
          vs = (0, l._)(
            "img",
            { class: "location-img", src: It, alt: "KW" },
            null,
            -1
          ),
          fs = (0, l._)(
            "span",
            { class: "text-semi text-grey" },
            "Франция",
            -1
          ),
          hs = [vs, fs],
          ys = { delay: 300, class: "location-item br-24 pd-24 box loc5" },
          _s = (0, l._)(
            "img",
            { class: "location-img", src: Kt, alt: "FRENCH" },
            null,
            -1
          ),
          ws = (0, l._)(
            "span",
            { class: "text-semi text-grey" },
            "Великобритания",
            -1
          ),
          xs = [_s, ws],
          ks = { delay: 300, class: "location-item br-24 pd-24 box loc6" },
          Ds = (0, l._)(
            "img",
            { class: "location-img", src: qt, alt: "GB" },
            null,
            -1
          ),
          Cs = (0, l._)("span", { class: "text-semi text-grey" }, "Италия", -1),
          Os = [Ds, Cs],
          Bs = { delay: 300, class: "location-item br-24 pd-24 box loc7" },
          Ps = (0, l._)(
            "img",
            { class: "location-img", src: Jt, alt: "ES" },
            null,
            -1
          ),
          Ns = (0, l._)("span", { class: "text-semi text-grey" }, "ОАЭ", -1),
          Ms = [Ps, Ns],
          Ts = { delay: 300, class: "location-item br-24 pd-24 box loc8" },
          Vs = (0, l._)(
            "img",
            { class: "location-img", src: Rt, alt: "DE" },
            null,
            -1
          ),
          Es = (0, l._)(
            "span",
            { class: "text-semi text-grey" },
            "Испания",
            -1
          ),
          Ws = [Vs, Es],
          Us = { delay: 300, class: "location-item br-24 pd-24 box loc9" },
          As = (0, l._)(
            "img",
            { class: "location-img", src: Yt, alt: "IT" },
            null,
            -1
          ),
          Ss = (0, l._)(
            "span",
            { class: "text-semi text-grey" },
            "Германия",
            -1
          ),
          Ls = [As, Ss],
          Qs = (0, l._)(
            "button",
            { class: "button orange-bg fs-28 orange-hover" },
            [
              (0, l._)(
                "a",
                {
                  class: "button-link",
                  target: "_blank",
                  href: "https://t.me/MyVPN_ai_bot",
                },
                " Подключить через ТГ-бота"
              ),
            ],
            -1
          );
        function Zs(t, s, e, i, a, n) {
          const o = (0, l.Q2)("motion-fade-visible-once");
          return (
            (0, l.wg)(),
            (0, l.iD)("div", Xt, [
              (0, l._)("div", $t, [
                ts,
                ss,
                (0, l._)("ul", es, [
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", is, ns)), [[o]]),
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", os, gs)), [[o]]),
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", ms, us)), [[o]]),
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", bs, hs)), [[o]]),
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", ys, xs)), [[o]]),
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", ks, Os)), [[o]]),
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", Bs, Ms)), [[o]]),
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", Ts, Ws)), [[o]]),
                  (0, l.wy)(((0, l.wg)(), (0, l.iD)("li", Us, Ls)), [[o]]),
                ]),
                Qs,
              ]),
            ])
          );
        }
        var Fs = { name: "Location" };
        const Gs = (0, B.Z)(Fs, [["render", Zs]]);
        var Hs = Gs,
          js = e.p + "img/check-circle.37ec07a3.svg";
        const zs = { class: "container" },
          Is = (0, l._)(
            "h2",
            { class: "title fs-56 text-center mb-60" },
            [
              (0, l.Uk)("Тарифы My"),
              (0, l._)("span", { class: "orange" }, "VPN"),
            ],
            -1
          ),
          Ks = { class: "tariff-container" },
          qs = { class: "tariff-list" },
          Js = { class: "title fs-24 mb-24" },
          Rs = { class: "orange" },
          Ys = { class: "mb-40 text-medium fs-20" },
          Xs = { class: "mb-60 title fs-40" },
          $s = {
            class: "button-link",
            target: "_blank",
            href: "https://t.me/MyVPN_ai_bot",
          },
          te = { class: "tariff-bottom pd-40" },
          se = (0, l._)(
            "h4",
            { class: "title fs-24 mb-24" },
            "Возможности:",
            -1
          ),
          ee = { class: "bottom-list" },
          ie = (0, l._)("img", { src: js, alt: "check" }, null, -1),
          ae = { class: "text-medium fs-20" };
        function le(t, s, e, i, a, n) {
          const o = (0, l.Q2)("motion-pop-visible-once");
          return (
            (0, l.wg)(),
            (0, l.iD)("div", zs, [
              Is,
              (0, l._)("div", Ks, [
                (0, l._)("ul", qs, [
                  ((0, l.wg)(!0),
                  (0, l.iD)(
                    l.HY,
                    null,
                    (0, l.Ko)(a.tariffs, (t) =>
                      (0, l.wy)(
                        ((0, l.wg)(),
                        (0, l.iD)(
                          "li",
                          { key: t.id, class: "tariff-item box br-24" },
                          [
                            (0, l._)(
                              "div",
                              { class: (0, u.C_)(t.topBgClass) },
                              [
                                (0, l._)("h3", Js, [
                                  (0, l.Uk)((0, u.zw)(t.name) + " ", 1),
                                  (0, l._)("span", Rs, (0, u.zw)(t.style), 1),
                                ]),
                                (0, l._)("p", Ys, (0, u.zw)(t.description), 1),
                                (0, l._)("p", Xs, (0, u.zw)(t.price), 1),
                                (0, l._)(
                                  "button",
                                  { class: (0, u.C_)(t.buttonClass) },
                                  [
                                    (0, l._)(
                                      "a",
                                      $s,
                                      (0, u.zw)(t.buttonText),
                                      1
                                    ),
                                  ],
                                  2
                                ),
                              ],
                              2
                            ),
                            (0, l._)("div", te, [
                              se,
                              (0, l._)("ul", ee, [
                                ((0, l.wg)(!0),
                                (0, l.iD)(
                                  l.HY,
                                  null,
                                  (0, l.Ko)(
                                    t.features,
                                    (t, s) => (
                                      (0, l.wg)(),
                                      (0, l.iD)(
                                        "li",
                                        { key: s, class: "bottom-item" },
                                        [
                                          ie,
                                          (0, l._)("span", ae, (0, u.zw)(t), 1),
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]),
                            ]),
                          ]
                        )),
                        [[o]]
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ])
          );
        }
        var ne = {
          name: "Tariff",
          data() {
            return {
              tariffs: [
                {
                  id: 1,
                  name: "myvpn",
                  style: "ОБЩИЙ",
                  description: "общий сервер",
                  price: "1 ₽/день",
                  topBgClass: "tariff-top br-24 pd-40 bg-ligth-yellow",
                  buttonClass: "button orange-bg fs-20 width orange-hover",
                  buttonText: "Подключить",
                  features: [
                    "Надёжный VPN",
                    "Конфиденциальность данных",
                    "Надёжный VPN",
                  ],
                },
                {
                  id: 2,
                  name: "myvpn",
                  style: "ЛИЧНЫЙ",
                  description: "личный сервер",
                  price: "10 ₽/день",
                  topBgClass: "tariff-top br-24 pd-40 bg-light",
                  buttonClass:
                    "button bg-violet text-light fs-20 width violet-hover",
                  buttonText: "Подключить",
                  features: [
                    "Надёжный VPN",
                    "Конфиденциальность данных",
                    "Надёжный VPN",
                    "Конфиденциальность данных",
                    "Надёжный VPN",
                  ],
                },
              ],
            };
          },
        };
        const oe = (0, B.Z)(ne, [["render", le]]);
        var ce = oe;
        const re = { class: "container" },
          ge = (0, l.uE)(
            '<h2 class="title fs-56 text-center mb-60">Вопросы о My<span class="orange">VPN</span></h2><div class="quest-container"><div class="accordion" id="accordionExample"><div class="accordion-item br-24 mb-12"><h2 class="accordion-header" id="headingOne"><button class="accordion-button br-24" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Как я могу поменять тариф? </button></h2><div id="collapseOne" class="accordion-collapse collapse show br-bottom" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="accordion-body"> Да, вы можете установить и пользоваться MyVPN на ПК, ноутбук и мобильный телефон на Android и IOS. </div></div></div><div class="accordion-item br-24 mb-12"><h2 class="accordion-header" id="headingTwo"><button class="accordion-button collapsed br-24" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Я могу установить ваш ВПН и на ноутбук, и на смартфон? </button></h2><div id="collapseTwo" class="accordion-collapse collapse br-bottom" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="accordion-body"> Да, вы можете установить и пользоваться MyVPN на ПК, ноутбук и мобильный телефон на Android и IOS. </div></div></div><div class="accordion-item br-24"><h2 class="accordion-header" id="headingThree"><button class="accordion-button collapsed br-24" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Стоимость не зависит от объёма используемого трафика? </button></h2><div id="collapseThree" class="accordion-collapse collapse br-bottom" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div class="accordion-body"> Да, вы можете установить и пользоваться MyVPN на ПК, ноутбук и мобильный телефон на Android и IOS. </div></div></div></div></div>',
            2
          ),
          me = [ge];
        function de(t, s, e, i, a, n) {
          return (0, l.wg)(), (0, l.iD)("div", re, me);
        }
        var pe = { name: "Questions" };
        const ue = (0, B.Z)(pe, [["render", de]]);
        var be = ue,
          ve = e.p + "img/master.be3f6842.svg",
          fe = e.p + "img/visa.2430c496.svg",
          he = e.p + "img/peace.8eeca43c.svg",
          ye = e.p + "img/apple.779ff12d.svg",
          _e = e.p + "img/android.b05e7784.svg";
        const we = { class: "container" },
          xe = (0, l.uE)(
            '<div class="footer-container"><div class="footer-left"><a class="title text-light footer-link" href="#head">My<span class="orange">VPN</span></a><ul class="footer-left-list"><li class="left-item text-medium text-light">ИП Гаврилов Игорь Владимирович</li><li class="left-item text-medium text-light">ОГРНИП: 317784700054435</li><li class="left-item text-medium"><a class="link" target="_blank" href="https://drive.google.com/file/d/1Sc7JtKGe2ykGfwFrhkLLaCwQYt29cTuC/view?usp=drive_link">Политика конфиденциальности</a></li><li class="left-item text-medium"><a class="link" target="_blank" href="https://drive.google.com/file/d/1yhAnLJfwUygTMc90q3npwbudCeUCEW3p/view?usp=drive_link">Условия пользования</a></li></ul></div><div class="footer-center"><ul class="center-list"><li class="center-item"><img src="' +
              ve +
              '" alt=""></li><li class="center-item"><img src="' +
              fe +
              '" alt=""></li><li class="center-item"><img src="' +
              he +
              '" alt=""></li></ul></div><div class="footer-right"><ul class="right-list"><li class="right-item"><a target="_blank" href="https://apps.apple.com/it/app/myserver/id6464329546"><img src="' +
              ye +
              '" alt="Apple"></a></li><li class="right-item"><a target="_blank" href="https://play.google.com/store/apps/details?id=ai.myvpn.app"><img src="' +
              _e +
              '" alt="Google"></a></li></ul></div><div class="footer-min"><ul class="min-top-list"><li class="min-item"><img src="' +
              ve +
              '" alt=""></li><li class="min-item"><img src="' +
              fe +
              '" alt=""></li><li class="min-item"><img src="' +
              he +
              '" alt=""></li></ul><ul class="min-bottom-list"><li class="min-item"><a target="_blank" href="https://apps.apple.com/it/app/myserver/id6464329546"><img src="' +
              ye +
              '" alt="Apple"></a></li><li class="min-item"><a target="_blank" href="https://play.google.com/store/apps/details?id=ai.myvpn.app"><img src="' +
              _e +
              '" alt="Google"></a></li></ul></div></div>',
            1
          ),
          ke = [xe];
        function De(t, s, e, i, a, n) {
          return (0, l.wg)(), (0, l.iD)("div", we, ke);
        }
        var Ce = { name: "FooterComponent" };
        const Oe = (0, B.Z)(Ce, [["render", De]]);
        var Be = Oe,
          Pe = {
            name: "MainLayout",
            components: {
              HeaderComponent: N,
              MainComponent: F,
              Why: Ft,
              Location: Hs,
              Tariff: ce,
              Questions: be,
              FooterComponent: Be,
            },
          };
        const Ne = (0, B.Z)(Pe, [["render", p]]);
        var Me = Ne,
          Te = { name: "App", components: { MainLayout: Me } };
        const Ve = (0, B.Z)(Te, [["render", o]]);
        var Ee = Ve;
        const We = (0, i.ri)(Ee);
        We.use(a.tc), We.mount("#app");
      },
    },
    s = {};
  function e(i) {
    var a = s[i];
    if (void 0 !== a) return a.exports;
    var l = (s[i] = { exports: {} });
    return t[i](l, l.exports, e), l.exports;
  }
  (e.m = t),
    (function () {
      var t = [];
      e.O = function (s, i, a, l) {
        if (!i) {
          var n = 1 / 0;
          for (g = 0; g < t.length; g++) {
            (i = t[g][0]), (a = t[g][1]), (l = t[g][2]);
            for (var o = !0, c = 0; c < i.length; c++)
              (!1 & l || n >= l) &&
              Object.keys(e.O).every(function (t) {
                return e.O[t](i[c]);
              })
                ? i.splice(c--, 1)
                : ((o = !1), l < n && (n = l));
            if (o) {
              t.splice(g--, 1);
              var r = a();
              void 0 !== r && (s = r);
            }
          }
          return s;
        }
        l = l || 0;
        for (var g = t.length; g > 0 && t[g - 1][2] > l; g--) t[g] = t[g - 1];
        t[g] = [i, a, l];
      };
    })(),
    (function () {
      e.d = function (t, s) {
        for (var i in s)
          e.o(s, i) &&
            !e.o(t, i) &&
            Object.defineProperty(t, i, { enumerable: !0, get: s[i] });
      };
    })(),
    (function () {
      e.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      e.o = function (t, s) {
        return Object.prototype.hasOwnProperty.call(t, s);
      };
    })(),
    (function () {
      e.p = "/";
    })(),
    (function () {
      var t = { 143: 0 };
      e.O.j = function (s) {
        return 0 === t[s];
      };
      var s = function (s, i) {
          var a,
            l,
            n = i[0],
            o = i[1],
            c = i[2],
            r = 0;
          if (
            n.some(function (s) {
              return 0 !== t[s];
            })
          ) {
            for (a in o) e.o(o, a) && (e.m[a] = o[a]);
            if (c) var g = c(e);
          }
          for (s && s(i); r < n.length; r++)
            (l = n[r]), e.o(t, l) && t[l] && t[l][0](), (t[l] = 0);
          return e.O(g);
        },
        i = (self["webpackChunkmy_vpn"] = self["webpackChunkmy_vpn"] || []);
      i.forEach(s.bind(null, 0)), (i.push = s.bind(null, i.push.bind(i)));
    })();
  var i = e.O(void 0, [998], function () {
    return e(566);
  });
  i = e.O(i);
})();
//# sourceMappingURL=app.6f884b6a.js.map
