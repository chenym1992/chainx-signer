(this["webpackJsonpchainx-signer"] =
  this["webpackJsonpchainx-signer"] || []).push([
  [0],
  {
    1071: function(e, t, n) {},
    1073: function(e, t, n) {},
    1074: function(e, t, n) {},
    1075: function(e, t, n) {},
    1076: function(e, t, n) {},
    1077: function(e, t, n) {},
    1078: function(e, t, n) {},
    1124: function(e, t, n) {},
    1125: function(e, t, n) {},
    1126: function(e, t, n) {},
    1128: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        c = n(33),
        s = n.n(c),
        o = n(18),
        i = n.n(o),
        u = n(34),
        l = n(297),
        m = n(60),
        d = n(32),
        p = function(e, t) {
          var n = function(n) {
            e.current && !e.current.contains(n.target) && t();
          };
          Object(a.useEffect)(function() {
            return (
              document.addEventListener("click", n),
              function() {
                document.removeEventListener("click", n);
              }
            );
          });
        },
        f = function(e) {
          var t,
            n,
            a = e.url,
            r = e.method,
            c = e.params,
            s = void 0 === c ? [] : c,
            o = e.timeOut,
            i = void 0 === o ? 5e3 : o,
            u = Number(
              Date.now() +
                Math.random()
                  .toString()
                  .substr(2, 3)
            ).toString(36),
            l = JSON.stringify({ id: u, jsonrpc: "2.0", method: r, params: s }),
            m = function() {
              return new Promise(function(e, r) {
                var c = new WebSocket(a);
                (c.onmessage = function(a) {
                  try {
                    var s = JSON.parse(a.data);
                    s.id === u &&
                      ((n = Date.now()),
                      e({ data: s.result, wastTime: n - t }),
                      c.close());
                  } catch (o) {
                    r(o);
                  }
                }),
                  (c.onopen = function() {
                    (t = Date.now()), c.send(l);
                  }),
                  (c.onerror = function(e) {
                    c.close(), r(e);
                  });
              });
            };
          return i
            ? Promise.race([
                m(),
                new Promise(function(e, t) {
                  setTimeout(function() {
                    t("\u8bf7\u6c42\u8d85\u65f6");
                  }, i);
                })
              ])
            : m();
        },
        h = [
          { name: "w1.org", url: "wss://w1.chainx.org/ws" },
          { name: "w2.org", url: "wss://w2.chainx.org/ws" },
          { name: "HashQuark", url: "wss://chainx.hashquark.io" },
          { name: "BuildLinks", url: "wss://chainx.buildlinks.org" },
          { name: "w1.cn", url: "wss://w1.chainx.org.cn/ws" }
        ],
        v = [
          {
            name: "testnet.w1.org.cn",
            url: "wss://testnet.w1.chainx.org.cn/ws"
          }
        ],
        b = function(e, t) {
          return t
            ? v.some(function(t) {
                return t.url === e.url;
              })
            : h.some(function(t) {
                return t.url === e.url;
              });
        },
        g = (function() {
          var e = Object(u.a)(
            i.a.mark(function e(t, n, a, r) {
              return i.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      t.forEach(function(e) {
                        f({
                          url: e.url,
                          method: "chain_getBlock",
                          timeOut: 7e3
                        })
                          .then(function() {
                            var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                            t.data &&
                              a(
                                r({ chainId: n, url: e.url, delay: t.wastTime })
                              );
                          })
                          .catch(function(t) {
                            console.log("catched", t),
                              a(
                                r({ chainId: n, url: e.url, delay: "timeout" })
                              );
                          });
                      });
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, n, a, r) {
            return e.apply(this, arguments);
          };
        })(),
        E = n(141),
        w = n(82),
        N = n.n(w),
        y = null,
        O = (function() {
          var e = Object(u.a)(
            i.a.mark(function e(t) {
              return i.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (y = new N.a(t)), (e.next = 3), y.isRpcReady();
                    case 3:
                      return e.abrupt("return", y);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        j = function() {
          return y;
        },
        k = function(e) {
          return "BTC" === e ? "X-BTC" : e;
        },
        x = n(291),
        C = n(292),
        S = n(293),
        A = n(57),
        P = Object(A.b)({
          name: "test",
          initialState: "test",
          reducers: {
            setTest: {
              reducer: function(e, t) {
                return t.payload.text;
              },
              prepare: function(e) {
                return { payload: { text: e } };
              }
            }
          }
        }),
        T = (P.actions.setTest, P.reducer),
        M = n(594),
        I = "chainx-mainnet",
        X = "chainx-testnet",
        q = "account-change",
        D = "node-change",
        L = "network-change",
        F = "tx-status",
        B = I,
        K = X,
        H = { version: 0, network: B },
        _ = window.settingStore.get("settings") || H,
        W = Object(A.b)({
          name: "setting",
          initialState: _,
          reducers: {
            setNetwork: function(e, t) {
              var n = t.payload,
                a = e.network;
              (e.network = n),
                window.settingStore.set("settings", e),
                a !== n && window.sockets.broadcastEvent(L, { from: a, to: n });
            }
          }
        }),
        z = W.actions.setNetwork,
        R = function(e) {
          return e.setting.network;
        },
        J = Object(M.a)(R, function(e) {
          return e === K;
        }),
        Z = W.reducer,
        Q = n(294),
        V = n.n(Q);
      function $(e) {
        if (e) return V.a.pick(e, ["name", "address"]);
      }
      var U = window.accountStore.get("accounts") || {
        version: 0,
        chainxMainNetAccounts: [],
        currentChainXMainNetAccount: null,
        chainxTestNetAccounts: [],
        currentChainxTestNetAccount: null
      };
      function G(e, t) {
        var n;
        if (I === t) n = e.chainxMainNetAccounts;
        else {
          if (X !== t) throw new Error("Invalid chainId: ".concat(t));
          n = e.chainxTestNetAccounts;
        }
        return n;
      }
      var Y = Object(A.b)({
          name: "account",
          initialState: U,
          reducers: {
            addAccount: function(e, t) {
              var n = t.payload,
                a = n.chainId,
                r = n.account,
                c = r.name,
                s = r.address,
                o = r.keystore,
                i = G(e, a);
              if (
                !(
                  i.findIndex(function(e) {
                    return e.address === s;
                  }) >= 0
                )
              ) {
                var u,
                  l = { name: c, address: s, keystore: o };
                i.push(l),
                  I === a
                    ? ((u = e.currentChainXMainNetAccount),
                      (e.currentChainXMainNetAccount = l))
                    : X === a &&
                      ((u = e.currentChainxTestNetAccount),
                      (e.currentChainxTestNetAccount = l)),
                  window.accountStore.set("accounts", e),
                  window.sockets.broadcastEvent(q, { from: $(u), to: $(l) });
              }
            },
            setCurrentChainXMainNetAccount: function(e, t) {
              var n = t.payload.address,
                a = e.chainxMainNetAccounts.find(function(e) {
                  return e.address === n;
                });
              if (!a)
                throw new Error(
                  "No ChainX mainnet account with address ".concat(n)
                );
              var r = e.currentChainXMainNetAccount;
              (e.currentChainXMainNetAccount = a),
                window.sockets.broadcastEvent(q, { from: $(r), to: $(a) });
            },
            removeAccount: function(e, t) {
              var n,
                a,
                r = t.payload,
                c = r.chainId,
                s = r.address,
                o = G(e, c),
                i = o.findIndex(function(e) {
                  return e.address === s;
                });
              i < 0 ||
                (o.splice(i, 1),
                c === I
                  ? ((n = e.currentChainXMainNetAccount),
                    (e.currentChainXMainNetAccount = o[0] || null),
                    (a = o[0] || null))
                  : c === X &&
                    ((n = e.currentChainxTestNetAccount),
                    (e.currentChainxTestNetAccount = o[0] || null),
                    (a = o[0] || null)),
                window.accountStore.set("accounts", e),
                window.sockets.broadcastEvent(q, { from: $(n), to: $(a) }));
            },
            setCurrentChainXTestNetAccount: function(e, t) {
              var n = t.payload.address,
                a = e.chainxTestNetAccounts.find(function(e) {
                  return e.address === n;
                });
              if (!a)
                throw new Error(
                  "No ChainX testnet account with address ".concat(n)
                );
              var r = e.currentChainXMainNetAccount;
              (e.currentChainxTestNetAccount = a),
                window.sockets.broadcastEvent(q, { from: $(r), to: $(a) });
            }
          }
        }),
        ee = Y.actions,
        te = ee.addAccount,
        ne = ee.removeAccount,
        ae = ee.setCurrentChainXMainNetAccount,
        re = ee.setCurrentChainXTestNetAccount,
        ce = Object(M.a)(
          R,
          function(e) {
            return e.account.chainxMainNetAccounts;
          },
          function(e) {
            return e.account.chainxTestNetAccounts;
          },
          function(e, t, n) {
            return e === K ? n : e === B ? t : void 0;
          }
        ),
        se = Object(M.a)(
          R,
          function(e) {
            return e.account.currentChainXMainNetAccount;
          },
          function(e) {
            return e.account.currentChainxTestNetAccount;
          },
          function(e, t, n) {
            return e === K ? n : e === B ? t : void 0;
          }
        ),
        oe = Y.reducer,
        ie = [
          { name: "w1.org", url: "wss://w1.chainx.org/ws" },
          { name: "w2.org", url: "wss://w2.chainx.org/ws" },
          { name: "HashQuark", url: "wss://chainx.hashquark.io" },
          { name: "BuildLinks", url: "wss://chainx.buildlinks.org" },
          { name: "w1.cn", url: "wss://w1.chainx.org.cn/ws" }
        ],
        ue = [
          {
            name: "testnet.w1.org.cn",
            url: "wss://testnet.w1.chainx.org.cn/ws"
          }
        ],
        le = {
          version: 0,
          chainxMainNetNodes: ie,
          currentChainXMainNetNode: ie[0],
          chainxTestNetNodes: ue,
          currentChainXTestNetNode: ue[0],
          testnetNodesDelay: {},
          mainnetNodesDelay: {}
        },
        me = window.nodeStore.get("nodes") || le;
      function de(e, t) {
        var n;
        if (I === t) n = e.chainxMainNetNodes;
        else {
          if (X !== t) throw new Error("Invalid chainId: ".concat(t));
          n = e.chainxTestNetNodes;
        }
        return n;
      }
      var pe = Object(A.b)({
          name: "node",
          initialState: me,
          reducers: {
            addNode: function(e, t) {
              var n = t.payload,
                a = n.chainId,
                r = n.node,
                c = r.name,
                s = r.url,
                o = de(e, a);
              if (
                !o.find(function(e) {
                  return e.url === s;
                })
              ) {
                var i,
                  u = { name: c, url: s };
                o.push(u),
                  I === a
                    ? ((i = e.currentChainXMainNetNode),
                      (e.currentChainXMainNetNode = u))
                    : X === a &&
                      ((i = e.currentChainXTestNetNode),
                      (e.currentChainXTestNetNode = u)),
                  [I, X].includes(a) &&
                    window.sockets.broadcastEvent(D, { from: i, to: u }),
                  window.nodeStore.set("nodes", e);
              }
            },
            setNodeDelay: function(e, t) {
              var n = t.payload,
                a = n.chainId,
                r = n.url,
                c = n.delay,
                s = e.testnetNodesDelay;
              I === a && (s = e.mainnetNodesDelay),
                (s[r] = c),
                window.nodeStore.set("nodes", e);
            },
            removeNode: function(e, t) {
              var n = t.payload,
                a = n.chainId,
                r = n.url,
                c = de(e, a);
              if (!(c.length <= 1)) {
                var s = c.findIndex(function(e) {
                  return e.url === r;
                });
                if (!(s < 0)) {
                  c.splice(s, 1);
                  var o = null;
                  I === a
                    ? ((o = e.currentChainXMainNetNode),
                      (e.currentChainXMainNetNode = c[0] || null))
                    : X === a &&
                      ((o = e.currentChainXTestNetNode),
                      (e.currentChainXTestNetNode = c[0] || null)),
                    [I, X].includes(a) &&
                      window.sockets.broadcastEvent(D, {
                        from: o,
                        to: c[0] || null
                      }),
                    window.nodeStore.set("nodes", e);
                }
              }
            },
            setCurrentChainXMainNetNode: function(e, t) {
              var n = t.payload.url,
                a = e.chainxMainNetNodes.find(function(e) {
                  return e.url === n;
                });
              if (!a)
                throw new Error("No ChainX mainnet node with url ".concat(n));
              var r = e.currentChainXTestNetNode;
              (e.currentChainXMainNetNode = a),
                window.nodeStore.set("nodes", e),
                window.sockets.broadcastEvent(D, { from: r, to: a });
            },
            setCurrentChainXTestNetNode: function(e, t) {
              var n = t.payload.url,
                a = e.chainxTestNetNodes.find(function(e) {
                  return e.url === n;
                });
              if (!a)
                throw new Error("No ChainX testnet node with url ".concat(n));
              var r = e.currentChainXTestNetNode;
              (e.currentChainXTestNetNode = a),
                window.nodeStore.set("nodes", e),
                window.sockets.broadcastEvent(D, { from: r, to: a });
            },
            setCurrentChainXNode: function(e, t) {
              var n = t.payload,
                a = n.chainId,
                r = n.url,
                c = de(e, a);
              if (c) {
                var s,
                  o = c.find(function(e) {
                    return e.url === r;
                  });
                if (o)
                  I === a
                    ? ((s = e.currentChainXMainNetNode),
                      (e.currentChainXMainNetNode = o))
                    : X === a &&
                      ((s = e.currentChainXTestNetNode),
                      (e.currentChainXTestNetNode = o)),
                    window.nodeStore.set("nodes", e),
                    window.sockets.broadcastEvent(D, { from: s, to: o });
              }
            }
          }
        }),
        fe = pe.actions,
        he = fe.addNode,
        ve = fe.removeNode,
        be =
          (fe.setCurrentChainXMainNetNode,
          fe.setCurrentChainXTestNetNode,
          fe.setCurrentChainXNode),
        ge = fe.setNodeDelay,
        Ee = Object(M.a)(
          R,
          function(e) {
            return e.node.chainxMainNetNodes;
          },
          function(e) {
            return e.node.chainxTestNetNodes;
          },
          function(e, t, n) {
            return e === K ? n : e === B ? t : void 0;
          }
        ),
        we = Object(M.a)(
          R,
          function(e) {
            return e.node.mainnetNodesDelay;
          },
          function(e) {
            return e.node.testnetNodesDelay;
          },
          function(e, t, n) {
            return e === K ? n : e === B ? t : void 0;
          }
        ),
        Ne = Object(M.a)(
          R,
          function(e) {
            return e.node.currentChainXMainNetNode;
          },
          function(e) {
            return e.node.currentChainXTestNetNode;
          },
          function(e, t, n) {
            return e === K ? n : e === B ? t : void 0;
          }
        ),
        ye = pe.reducer,
        Oe = Object(A.b)({
          name: "tx",
          initialState: { version: 0, toSign: null },
          reducers: {
            setToSign: function(e, t) {
              var n = t.payload;
              e.toSign = n;
            },
            clearToSign: function(e) {
              e.toSign = null;
            }
          }
        }),
        je = Oe.actions,
        ke = je.setToSign,
        xe = je.clearToSign,
        Ce = function(e) {
          return e.tx.toSign;
        },
        Se = Oe.reducer,
        Ae = Object(A.b)({
          name: "status",
          initialState: { loading: !1, initLoading: !0, homeLoading: !0 },
          reducers: {
            setLoading: function(e, t) {
              e.loading = t.payload;
            },
            setInitLoading: function(e, t) {
              e.initLoading = t.payload;
            },
            setHomeLoading: function(e, t) {
              e.homeLoading = t.payload;
            }
          }
        }),
        Pe = Ae.actions,
        Te = Pe.setLoading,
        Me = Pe.setInitLoading,
        Ie = (Pe.setHomeLoading, Ae.reducer),
        Xe = Object(A.b)({
          name: "intentions",
          initialState: { intentions: {} },
          reducers: {
            setIntentions: {
              reducer: function(e, t) {
                e.intentions = t.payload;
              }
            }
          }
        }),
        qe = Xe.actions.setIntentions;
      function De(e) {
        return Le.apply(this, arguments);
      }
      function Le() {
        return (Le = Object(u.a)(
          i.a.mark(function e(t) {
            var n, a;
            return i.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (n = j()), (a = n.stake), e.abrupt("return", a);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Fe = function(e) {
          return (function() {
            var t = Object(u.a)(
              i.a.mark(function t(n) {
                var a, r, c;
                return i.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), De(e);
                      case 2:
                        return (a = t.sent), (t.next = 5), a.getIntentions();
                      case 5:
                        (r = t.sent),
                          (c = {}),
                          r.forEach(function(e) {
                            c[e.account] = e.name;
                          }),
                          n(qe(c));
                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function(e) {
              return t.apply(this, arguments);
            };
          })();
        },
        Be = function(e) {
          return e.intentions.intentions;
        },
        Ke = Xe.reducer,
        He = Object(A.b)({
          name: "trade",
          initialState: { pairs: {}, fee: 0 },
          reducers: {
            setPairs: function(e, t) {
              e.pairs = t.payload;
            },
            setFee: function(e, t) {
              e.fee = t.payload;
            }
          }
        }),
        _e = He.actions,
        We = _e.setPairs,
        ze = _e.setFee,
        Re = function(e) {
          return (function() {
            var e = Object(u.a)(
              i.a.mark(function e(t) {
                var n, a, r, c;
                return i.a.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = j()),
                          (a = n.trade),
                          (e.next = 4),
                          a.getTradingPairs()
                        );
                      case 4:
                        (r = e.sent),
                          (c = {}),
                          r.forEach(function(e) {
                            c[e.id] = e;
                          }),
                          t(We(c));
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function(t) {
              return e.apply(this, arguments);
            };
          })();
        },
        Je = function(e) {
          return (function() {
            var e = Object(u.a)(
              i.a.mark(function e(t) {
                var n, a, r;
                return i.a.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = j()),
                          (a = n.asset),
                          (e.next = 4),
                          a.getWithdrawalLimitByToken(["BTC"])
                        );
                      case 4:
                        (r = e.sent), t(ze(r.fee));
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function(t) {
              return e.apply(this, arguments);
            };
          })();
        },
        Ze = function(e) {
          return e.trade.fee;
        },
        Qe = function(e) {
          return e.trade.pairs;
        },
        Ve = {
          test: T,
          status: Ie,
          intentions: Ke,
          trade: He.reducer,
          account: oe,
          node: ye,
          setting: Z,
          tx: Se
        },
        $e = Object(A.a)({ reducer: Ve }),
        Ue = "invalid-address",
        Ge = "invalid-sign-data",
        Ye = "sign-transaction-busy",
        et = n(126),
        tt = "chainx_account",
        nt = "get_settings",
        at = "chainx_sign",
        rt = "chainx_sign_send";
      function ct(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function st() {
        var e = $e.getState(),
          t = se(e);
        return { result: V.a.pick(t, ["name", "address"]) };
      }
      var ot,
        it = (function() {
          function e(t, n, a) {
            Object(C.a)(this, e),
              (this.sockets = t),
              (this.request = n),
              (this.id = a);
          }
          return (
            Object(S.a)(
              e,
              [
                {
                  key: "handle",
                  value: (function() {
                    var e = Object(u.a)(
                      i.a.mark(function e() {
                        var t;
                        return i.a.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if ((t = this.request.data.payload).method) {
                                    e.next = 3;
                                    break;
                                  }
                                  return e.abrupt(
                                    "return",
                                    this.sockets.emit(
                                      this.request.data.origin,
                                      this.id,
                                      "api",
                                      {
                                        id: t.id,
                                        error: {
                                          code: -1,
                                          message: "method not found"
                                        }
                                      }
                                    )
                                  );
                                case 3:
                                  (e.t0 = t.method),
                                    (e.next =
                                      e.t0 === nt
                                        ? 6
                                        : e.t0 === tt
                                        ? 7
                                        : e.t0 === rt
                                        ? 8
                                        : e.t0 === at
                                        ? 9
                                        : 10);
                                  break;
                                case 6:
                                  return e.abrupt(
                                    "return",
                                    this.emit({ result: $e.getState().setting })
                                  );
                                case 7:
                                  return e.abrupt("return", this.emit(st()));
                                case 8:
                                  return e.abrupt(
                                    "return",
                                    this.sign.apply(
                                      this,
                                      [t.id].concat(Object(E.a)(t.params), [!0])
                                    )
                                  );
                                case 9:
                                  return e.abrupt(
                                    "return",
                                    this.sign.apply(
                                      this,
                                      [t.id].concat(Object(E.a)(t.params), [!1])
                                    )
                                  );
                                case 10:
                                  return e.abrupt("return", {
                                    error: {
                                      code: -1,
                                      message: "".concat(t.method, " not found")
                                    }
                                  });
                                case 11:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function() {
                      return e.apply(this, arguments);
                    };
                  })()
                },
                {
                  key: "emit",
                  value: function(e) {
                    this.sockets.emit(
                      this.request.data.origin,
                      this.id,
                      "api",
                      (function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? ct(n, !0).forEach(function(t) {
                                Object(x.a)(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : ct(n).forEach(function(t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                        }
                        return e;
                      })({ id: this.request.data.payload.id }, e)
                    );
                  }
                },
                {
                  key: "sign",
                  value: (function() {
                    var e = Object(u.a)(
                      i.a.mark(function e(t, n, a, r) {
                        var c, s;
                        return i.a.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((c = $e.getState()),
                                    ((s = se(c)) && s.address === n) ||
                                      this.emit({
                                        error: {
                                          code: Ue,
                                          message: "".concat(n, " not found")
                                        }
                                      }),
                                    n && a)
                                  ) {
                                    e.next = 5;
                                    break;
                                  }
                                  return e.abrupt(
                                    "return",
                                    this.emit({
                                      error: {
                                        code: Ge,
                                        message: "invalid sign params"
                                      }
                                    })
                                  );
                                case 5:
                                  if (!Ce(c)) {
                                    e.next = 8;
                                    break;
                                  }
                                  return e.abrupt(
                                    "return",
                                    this.emit({
                                      error: { code: Ye, message: "sign busy" }
                                    })
                                  );
                                case 8:
                                  (e.prev = 8),
                                    new et.Extrinsic(a),
                                    (e.next = 15);
                                  break;
                                case 12:
                                  return (
                                    (e.prev = 12),
                                    (e.t0 = e.catch(8)),
                                    e.abrupt(
                                      "return",
                                      this.emit({
                                        error: {
                                          code: Ge,
                                          message: "invalid sign data"
                                        }
                                      })
                                    )
                                  );
                                case 15:
                                  $e.dispatch(
                                    ke({
                                      origin: this.request.data.origin,
                                      id: this.id,
                                      dataId: t,
                                      address: n,
                                      data: a,
                                      needBroadcast: !!r
                                    })
                                  ),
                                    this.sockets.activateWindow();
                                case 17:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[8, 12]]
                        );
                      })
                    );
                    return function(t, n, a, r) {
                      return e.apply(this, arguments);
                    };
                  })()
                }
              ],
              [
                {
                  key: "getAccounts",
                  value: function() {
                    var e = $e.getState();
                    return { result: ce(e) };
                  }
                }
              ]
            ),
            e
          );
        })();
      var ut = (function() {
          var e = Object(u.a)(
            i.a.mark(function e(t, n) {
              return i.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), new it(ot, t, n).handle();
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, n) {
            return e.apply(this, arguments);
          };
        })(),
        lt = (function() {
          var e = Object(u.a)(
            i.a.mark(function e(t, n) {
              return i.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), ot.emit(t.data.origin, n, "paired", !0)
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, n) {
            return e.apply(this, arguments);
          };
        })(),
        mt = (function() {
          var e = Object(u.a)(
            i.a.mark(function e(t, n) {
              var a, r, c, s, o, u, l, m, d, p, f, h, v, b, g, E;
              return i.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (E = function(e, t) {
                          return ot.emit(c, s, "event", {
                            event: F,
                            payload: {
                              id: u,
                              err: e || null,
                              status: t || null
                            }
                          });
                        }),
                          (a = $e.getState()),
                          (r = Ce(a)),
                          (c = r.origin),
                          (s = r.id),
                          (o = r.data),
                          (u = r.dataId),
                          (l = r.needBroadcast),
                          (m = se(a)),
                          (d = j()),
                          (p = d.api);
                        try {
                          f = new w.SubmittableExtrinsic(d.api, o);
                        } catch (i) {
                          ot.emit(c, s, "api", {
                            id: u,
                            error: { code: Ge, message: "invalid sign data" }
                          });
                        }
                        return (
                          (h = d.account.fromKeyStore(m.keystore, t)),
                          (e.next = 10),
                          p.query.system.accountNonce(h.publicKey())
                        );
                      case 10:
                        if (
                          ((v = e.sent),
                          (b = f.sign(h, {
                            nonce: v.toNumber(),
                            acceleration: n,
                            blockHash: p.genesisHash
                          })),
                          (g = b.hash.toHex()),
                          ot.emit(c, s, "api", {
                            id: u,
                            result: { hash: g, hex: b.toHex() }
                          }),
                          l)
                        ) {
                          e.next = 16;
                          break;
                        }
                        return e.abrupt("return");
                      case 16:
                        return (e.prev = 16), (e.next = 19), b.send(E);
                      case 19:
                        e.next = 24;
                        break;
                      case 21:
                        return (
                          (e.prev = 21),
                          (e.t0 = e.catch(16)),
                          e.abrupt("return", E(e.t0))
                        );
                      case 24:
                        console.log("returned");
                      case 25:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[16, 21]]
              );
            })
          );
          return function(t, n) {
            return e.apply(this, arguments);
          };
        })(),
        dt = (function() {
          var e = Object(u.a)(
            i.a.mark(function e(t, n, a, r) {
              var c, s, o, u, l, m, d, p;
              return i.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((c = j()),
                        (s = n.address),
                        (o = n.module),
                        (u = n.method),
                        (l = n.args),
                        (m = c.api.tx[o][u]))
                      ) {
                        e.next = 6;
                        break;
                      }
                      return a("Invalid method"), e.abrupt("return");
                    case 6:
                      if (t.address === s) {
                        e.next = 9;
                        break;
                      }
                      return a("Invalid address"), e.abrupt("return");
                    case 9:
                      "putCode" === u &&
                        (l[1] = Uint8Array.from(Object.values(l[1]))),
                        (d = m.apply(void 0, Object(E.a)(l))),
                        (p = d.getFeeSync(t.address, 1)),
                        r(p);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, n, a, r) {
            return e.apply(this, arguments);
          };
        })(),
        pt = n(29),
        ft = n(295),
        ht = n.n(ft);
      var vt = function(e) {
          var t = e.className,
            n = void 0 === t ? {} : t,
            a = e.style,
            c = void 0 === a ? {} : a,
            s = e.name,
            o = void 0 === s ? "" : s;
          return r.a.createElement("i", {
            className: "iconfont icon".concat(o, " ").concat(n),
            style: c
          });
        },
        bt = (n(595), n(296)),
        gt = n.n(bt);
      var Et = function(e) {
          var t = Object(a.useRef)(null),
            n = Object(a.useState)(!1),
            c = Object(d.a)(n, 2),
            s = c[0],
            o = c[1],
            l = Object(pt.c)(J),
            m = Object(a.useState)(""),
            f = Object(d.a)(m, 2),
            h = f[0],
            v = f[1],
            b = Object(pt.c)(se),
            g = Object(pt.c)(function(e) {
              return e.tx.toSign;
            });
          function E() {
            return (E = Object(u.a)(
              i.a.mark(function t() {
                return i.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        try {
                          g &&
                            e.history.push({
                              pathname: "/requestSign/" + g.id,
                              query: g
                            });
                        } catch (n) {
                          console.log("sign request error occurs ", n);
                        } finally {
                          w();
                        }
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
          }
          function w() {
            new ht.a(".copy").on("success", function() {
              v("Copied!"),
                setTimeout(function() {
                  v("");
                }, 2e3);
            });
          }
          function N(e) {
            return y.apply(this, arguments);
          }
          function y() {
            return (y = Object(u.a)(
              i.a.mark(function t(n) {
                return i.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        b.address &&
                          e.history.push({
                            pathname: "/enterPassword",
                            query: {
                              address: b.address,
                              keystore: b.keystore,
                              type: n
                            }
                          }),
                          o(!1);
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
          }
          return (
            Object(a.useEffect)(
              function() {
                !(function() {
                  E.apply(this, arguments);
                })();
              },
              [l, g]
            ),
            p(t, function() {
              o(!1);
            }),
            r.a.createElement(
              r.a.Fragment,
              null,
              b
                ? r.a.createElement(
                    "div",
                    { className: "container-account" },
                    r.a.createElement(
                      "div",
                      { className: "account-title" },
                      r.a.createElement("span", { className: "name" }, b.name),
                      r.a.createElement(
                        "div",
                        {
                          ref: t,
                          className: "arrow",
                          onClick: function() {
                            o(!s);
                          }
                        },
                        r.a.createElement(vt, {
                          className: "arrow-icon",
                          name: "Arrowdown"
                        })
                      ),
                      s
                        ? r.a.createElement(
                            "div",
                            { className: "account-action" },
                            r.a.createElement(
                              "span",
                              {
                                onClick: function() {
                                  return N("export");
                                }
                              },
                              "Export PrivateKey"
                            ),
                            r.a.createElement(
                              "span",
                              {
                                onClick: function() {
                                  return N("remove");
                                }
                              },
                              "Forget Account"
                            )
                          )
                        : null
                    ),
                    r.a.createElement(
                      "div",
                      { className: "account-address" },
                      r.a.createElement("span", null, b.address)
                    ),
                    r.a.createElement(
                      "button",
                      { className: "copy", "data-clipboard-text": b.address },
                      r.a.createElement(vt, {
                        className: "copy-icon",
                        name: "copy"
                      }),
                      r.a.createElement(
                        "span",
                        { className: "copy-text" },
                        "Copy"
                      )
                    ),
                    r.a.createElement("span", null, h)
                  )
                : r.a.createElement(
                    "div",
                    {
                      className:
                        "container container-column container-no-account"
                    },
                    r.a.createElement(
                      "div",
                      { className: "home-logo" },
                      r.a.createElement("img", { src: gt.a, alt: "logo" })
                    ),
                    r.a.createElement(
                      "button",
                      {
                        className: "button button-white button-new-account",
                        onClick: function() {
                          return e.history.push("/createAccount");
                        }
                      },
                      "New Account"
                    ),
                    r.a.createElement(
                      "button",
                      {
                        className: "button button-white button-import-account",
                        onClick: function() {
                          return e.history.push("/importAccount");
                        }
                      },
                      "Import Account"
                    )
                  )
            )
          );
        },
        wt = n(622),
        Nt = n.n(wt);
      var yt = function(e) {
          var t = (function(e) {
            if (e && e.length > 13) {
              var t = e.length;
              return e.slice(0, 5) + "..." + e.slice(t - 5, t);
            }
            return e;
          })(e.value);
          return r.a.createElement("span", null, t);
        },
        Ot = n(623),
        jt = n.n(Ot),
        kt = n(624),
        xt = n.n(kt);
      n(1071);
      var Ct = Object(m.g)(function(e) {
          var t = Object(a.useRef)(null),
            n = Object(a.useRef)(null),
            c = Object(a.useState)(!1),
            s = Object(d.a)(c, 2),
            o = s[0],
            m = s[1],
            f = Object(a.useState)(!1),
            h = Object(d.a)(f, 2),
            v = h[0],
            E = h[1],
            w = Object(a.useState)("Copy"),
            N = Object(d.a)(w, 2),
            y = N[0],
            O = N[1],
            j = Object(pt.c)(se),
            k = Object(pt.c)(ce),
            x = Object(pt.c)(Ne),
            C = Object(pt.c)(Ee),
            S = Object(pt.c)(R),
            A = Object(pt.c)(J),
            P = Object(pt.c)(we),
            T = Object(pt.b)();
          function M() {
            return (M = Object(u.a)(
              i.a.mark(function e(t) {
                return i.a.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        T(be({ chainId: S, url: t })), m(!1);
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function q(e) {
            return "timeout" === e ? "red" : e > 300 ? "yellow" : "green";
          }
          return (
            Object(a.useEffect)(
              function() {
                new ht.a(".account-copy").on("success", function() {
                  O("Copied!");
                }),
                  g(C, S, T, ge);
              },
              [A, S, C]
            ),
            p(t, function() {
              m(!1);
            }),
            p(n, function() {
              E(!1);
            }),
            r.a.createElement(
              "div",
              { className: "header" },
              r.a.createElement(
                "div",
                { className: "container container-header" },
                r.a.createElement(
                  l.b,
                  { to: "/" },
                  r.a.createElement("img", {
                    className: "logo",
                    src: gt.a,
                    alt: "logo"
                  }),
                  A &&
                    r.a.createElement("img", {
                      className: "testnet",
                      src: jt.a,
                      alt: "testNetImg"
                    })
                ),
                e.history.location.pathname.includes("requestSign")
                  ? r.a.createElement(
                      "div",
                      { className: "center-title" },
                      r.a.createElement(
                        "span",
                        null,
                        (
                          (e.history.location.query &&
                            e.history.location.query.method) ||
                          ""
                        )
                          .replace(/([A-Z])/g, " $1")
                          .toLowerCase() || "Sign Request"
                      )
                    )
                  : r.a.createElement(
                      "div",
                      { className: "right" },
                      r.a.createElement(
                        "div",
                        {
                          ref: t,
                          className: "current-node",
                          onClick: function() {
                            m(!o), E(!1);
                          }
                        },
                        r.a.createElement("span", {
                          className: "dot " + q(P[x.url]) + "-bg"
                        }),
                        r.a.createElement("span", null, x && x.name)
                      ),
                      r.a.createElement(
                        "div",
                        {
                          ref: n,
                          className: "setting",
                          onClick: function() {
                            E(!v), m(!1);
                          }
                        },
                        r.a.createElement(vt, {
                          name: "Menu",
                          className: "setting-icon"
                        })
                      )
                    ),
                r.a.createElement(
                  "div",
                  { className: (o ? "" : "hide ") + "node-list-area" },
                  r.a.createElement(
                    "div",
                    { className: "node-list" },
                    x &&
                      (C || []).map(function(t, n) {
                        return r.a.createElement(
                          "div",
                          {
                            className:
                              t.name === x.name
                                ? "node-item active"
                                : "node-item",
                            key: t.name,
                            onClick: function() {
                              !(function(e) {
                                M.apply(this, arguments);
                              })(t.url);
                            }
                          },
                          r.a.createElement("div", {
                            className: "node-item-active-flag"
                          }),
                          r.a.createElement(
                            "div",
                            { className: "node-item-detail" },
                            r.a.createElement(
                              "div",
                              { className: "node-item-detail-url" },
                              r.a.createElement(
                                "span",
                                { className: "url" },
                                t.url.split("//")[1] || t.url
                              ),
                              r.a.createElement(
                                "div",
                                {
                                  className: b(t, A)
                                    ? "node-item-detail-edit"
                                    : "node-item-detail-edit custom",
                                  onClick: function(n) {
                                    n.stopPropagation(),
                                      n.nativeEvent.stopImmediatePropagation(),
                                      m(!1);
                                    var a = { nodeInfo: t, type: "remove" };
                                    e.history.push({
                                      pathname: "/addNode",
                                      query: a
                                    });
                                  }
                                },
                                r.a.createElement(vt, { name: "Edit" })
                              )
                            ),
                            r.a.createElement(
                              "span",
                              { className: "delay " + q(P[t.url]) },
                              (a = P[t.url])
                                ? "timeout" === a
                                  ? "timeout"
                                  : a + " ms"
                                : ""
                            )
                          )
                        );
                        var a;
                      })
                  ),
                  r.a.createElement(
                    "div",
                    {
                      className: "add-node node-action-item",
                      onClick: function() {
                        e.history.push("/addNode");
                      }
                    },
                    r.a.createElement(vt, {
                      name: "Add",
                      className: "add-node-icon node-action-item-img"
                    }),
                    r.a.createElement("span", null, "Add node")
                  ),
                  r.a.createElement(
                    "div",
                    {
                      className: "switch-net node-action-item",
                      onClick: function() {
                        T(z(A ? I : X)), m(!1), e.history.push("/");
                      }
                    },
                    r.a.createElement("img", {
                      className: "node-action-item-img",
                      src: xt.a,
                      alt: "switchImg"
                    }),
                    r.a.createElement(
                      "span",
                      null,
                      "Switch to ",
                      A ? "Mainnet" : "Testnet"
                    )
                  )
                ),
                v && !o
                  ? r.a.createElement(
                      "div",
                      { className: "account-area" },
                      r.a.createElement(
                        "div",
                        { className: "action" },
                        r.a.createElement(
                          "div",
                          {
                            onClick: function() {
                              E(!1), e.history.push("/importAccount");
                            }
                          },
                          r.a.createElement(vt, {
                            name: "Putin",
                            className: "account-area-icon"
                          }),
                          r.a.createElement("span", null, "Import")
                        ),
                        r.a.createElement(
                          "div",
                          {
                            onClick: function() {
                              E(!1), e.history.push("/createAccount");
                            }
                          },
                          r.a.createElement(vt, {
                            name: "Add",
                            className: "account-area-icon"
                          }),
                          r.a.createElement("span", null, "New")
                        )
                      ),
                      k.length > 0
                        ? r.a.createElement(
                            "div",
                            { className: "accounts" },
                            k.length > 0 &&
                              k.map(function(t) {
                                return r.a.createElement(
                                  "div",
                                  {
                                    className:
                                      t.address === j.address
                                        ? "account-item active"
                                        : "account-item",
                                    key: t.name,
                                    onClick: Object(u.a)(
                                      i.a.mark(function n() {
                                        return i.a.wrap(function(n) {
                                          for (;;)
                                            switch ((n.prev = n.next)) {
                                              case 0:
                                                T(
                                                  A
                                                    ? re({ address: t.address })
                                                    : ae({ address: t.address })
                                                ),
                                                  E(!1),
                                                  e.history.push("/");
                                              case 3:
                                              case "end":
                                                return n.stop();
                                            }
                                        }, n);
                                      })
                                    )
                                  },
                                  r.a.createElement("div", {
                                    className: "account-item-active-flag"
                                  }),
                                  r.a.createElement(
                                    "div",
                                    { className: "account-item-detail" },
                                    r.a.createElement(
                                      "span",
                                      { className: "name" },
                                      t.name
                                    ),
                                    r.a.createElement(
                                      "div",
                                      { className: "address" },
                                      r.a.createElement(yt, {
                                        value: t.address
                                      }),
                                      r.a.createElement(
                                        "button",
                                        {
                                          className: "account-copy",
                                          "data-clipboard-text": t.address,
                                          onClick: function(e) {
                                            e.stopPropagation(),
                                              e.nativeEvent.stopImmediatePropagation();
                                          },
                                          "data-tip": !0,
                                          "data-for": "copy-address-tooltip"
                                        },
                                        r.a.createElement(vt, {
                                          className: "copy-icon",
                                          name: "copy"
                                        })
                                      ),
                                      r.a.createElement(
                                        Nt.a,
                                        {
                                          id: "copy-address-tooltip",
                                          effect: "solid",
                                          globalEventOff: "click",
                                          className: "extension-tooltip",
                                          afterHide: function() {
                                            return O("Copy");
                                          }
                                        },
                                        r.a.createElement("span", null, y)
                                      )
                                    )
                                  )
                                );
                              })
                          )
                        : null
                    )
                  : null
              )
            )
          );
        }),
        St = n(626),
        At = n.n(St),
        Pt = (n(1073), n(627)),
        Tt = n.n(Pt);
      n(1074);
      var Mt = function(e) {
        var t = e.title,
          n = void 0 === t ? "" : t,
          a = e.desc,
          c =
            void 0 === a
              ? "Do not store the mnemonic words in your PC or Net. Anybody can take your assets with the mnemonic words."
              : a;
        return r.a.createElement(
          "div",
          { className: "static-warning" },
          r.a.createElement("img", {
            className: "warning-icon",
            src: Tt.a,
            alt: "warning"
          }),
          r.a.createElement("span", { className: "warning-title" }, n),
          r.a.createElement("div", { className: "warning-desc" }, c)
        );
      };
      n(1075);
      var It = function(e) {
          var t = e.msg;
          return r.a.createElement(
            "div",
            { className: "error-message" },
            r.a.createElement("span", null, t)
          );
        },
        Xt =
          (n(1076),
          function(e) {
            var t = e.msg;
            return r.a.createElement(
              "div",
              { className: "warning-message" },
              r.a.createElement("span", null, t)
            );
          });
      function qt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function Dt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? qt(n, !0).forEach(function(t) {
                Object(x.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : qt(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Lt = function(e) {
        var t = e.secret,
          n = e.onSuccess,
          c = Object(a.useState)({ name: "", pass: "", repass: "" }),
          s = Object(d.a)(c, 2),
          o = s[0],
          l = s[1],
          m = Object(a.useState)(""),
          p = Object(d.a)(m, 2),
          f = p[0],
          h = p[1],
          v = Object(pt.c)(ce),
          b = Object(pt.c)(J),
          g = Object(pt.b)();
        w.Account.setNet(b ? "testnet" : "mainnet");
        var E = w.Account.from(t),
          N = E.address(),
          y = (v || []).find(function(e) {
            return e.address === N;
          }),
          O = (function() {
            var e = Object(u.a)(
              i.a.mark(function e() {
                var t;
                return i.a.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          o.name && o.pass && o.repass
                            ? o.pass.length < 8
                              ? (h("password length must great than 8"), 0)
                              : /(?=.*[a-z])(?=.*[A-Z])/.test(o.pass)
                              ? o.pass === o.repass ||
                                (h("password is not match"), 0)
                              : (h(
                                  "password must include lower and upper characters"
                                ),
                                0)
                            : (h("name and password are required"), 0)
                        ) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        (t = E.encrypt(o.pass)),
                          g(
                            te({
                              chainId: b ? X : I,
                              account: {
                                name: o.name,
                                address: E.address(),
                                keystore: t
                              }
                            })
                          ),
                          n();
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function() {
              return e.apply(this, arguments);
            };
          })();
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement("input", {
            className: "input",
            type: "text",
            required: !0,
            value: o.name,
            onChange: function(e) {
              return l(Dt({}, o, { name: e.target.value }));
            },
            placeholder: "Name(12 characters max)"
          }),
          r.a.createElement("input", {
            className: "input",
            type: "password",
            value: o.pass,
            onChange: function(e) {
              return l(Dt({}, o, { pass: e.target.value }));
            },
            placeholder: "Password"
          }),
          r.a.createElement("input", {
            className: "input",
            type: "password",
            value: o.repass,
            onChange: function(e) {
              return l(Dt({}, o, { repass: e.target.value }));
            },
            onKeyPress: function(e) {
              "Enter" === e.key && O();
            },
            placeholder: "Password confirmation"
          }),
          r.a.createElement(
            "button",
            {
              className: "button button-yellow margin-top-40",
              onClick: function() {
                O();
              }
            },
            "OK"
          ),
          f && r.a.createElement(It, { msg: f }),
          y &&
            r.a.createElement(Xt, {
              msg: "Account ".concat(
                y.name,
                " has same address, and it will be overwritten by this account."
              )
            })
        );
      };
      var Ft = function(e) {
        var t = Object(a.useState)(0),
          n = Object(d.a)(t, 2),
          c = n[0],
          s = n[1],
          o = Object(a.useState)(""),
          i = Object(d.a)(o, 2),
          u = i[0],
          l = i[1],
          m = Object(a.useState)(w.Account.newMnemonic()),
          p = Object(d.a)(m, 1)[0],
          f = p.split(" "),
          h = Object(a.useState)(new Array(f.length).fill(!1)),
          v = Object(d.a)(h, 2),
          b = v[0],
          g = v[1],
          E = Object(a.useState)(At()(f)),
          N = Object(d.a)(E, 1)[0],
          y = Object(a.useState)(new Array(12).fill("")),
          O = Object(d.a)(y, 2),
          j = O[0],
          k = O[1],
          x = f.map(function(e, t) {
            return { value: e, index: t };
          }),
          C = function() {
            return l(""), !0;
          };
        return r.a.createElement(
          "div",
          { className: "container create-account" },
          r.a.createElement(
            "div",
            { className: "create-account-title" },
            r.a.createElement(
              "span",
              null,
              [
                "New Account",
                "Backup Mnemonic",
                "Verify Mnemonic",
                "Name and password setting"
              ][c]
            ),
            r.a.createElement(
              "span",
              { className: "create-account-sub-title" },
              [
                "",
                "Write down following mnemonic words, and will be used next step.",
                "Mark the words one by one in the order last step shows.",
                "Password contains at lease 8 characters, and at least one upper,lower and number case character."
              ][c]
            )
          ),
          r.a.createElement(
            "div",
            { className: "create-account-body" },
            r.a.createElement(
              "div",
              { className: "create-account-body-content" },
              0 === c && r.a.createElement(Mt, { title: "Backup Mnemonic" }),
              1 === c &&
                x.map(function(e) {
                  return r.a.createElement(
                    "div",
                    { className: "word-item", key: e.index },
                    e.value
                  );
                }),
              2 === c &&
                N.map(function(e, t) {
                  return r.a.createElement(
                    "div",
                    {
                      className:
                        "word-item word-item-click " +
                        (b[t] ? "word-item-selected" : ""),
                      key: t,
                      onClick: function() {
                        var n = b[t],
                          a = j.indexOf(""),
                          r = e;
                        n &&
                          ((a =
                            11 -
                            Array.from(j)
                              .reverse()
                              .indexOf(e)),
                          (r = "")),
                          j.splice(a, 1, r),
                          k(Array.from(j)),
                          b.splice(t, 1, !n),
                          g(Array.from(b));
                      }
                    },
                    e
                  );
                }),
              3 === c &&
                r.a.createElement(Lt, {
                  type: "mnemonic",
                  secret: p,
                  onSuccess: function() {
                    e.history.push("/");
                  }
                })
            ),
            c < 2 &&
              r.a.createElement(
                "button",
                {
                  className: "button button-yellow margin-top-40",
                  onClick: function() {
                    c < 2 &&
                      s(function(e) {
                        return e + 1;
                      });
                  }
                },
                ["Begin", "Next", "Next", "OK"][c]
              ),
            2 === c &&
              r.a.createElement(
                "div",
                { className: "container-spacebetween margin-top-40" },
                r.a.createElement(
                  "button",
                  {
                    className: "button button-white-half",
                    onClick: function() {
                      return (
                        C() &&
                        s(function(e) {
                          return e - 1;
                        })
                      );
                    }
                  },
                  "Pre"
                ),
                r.a.createElement(
                  "button",
                  {
                    className: "button button-yellow-half",
                    onClick: function() {
                      return (
                        (p === j.join(" ")
                          ? (C(), !0)
                          : (l("Mnemonic not correct"), !1)) &&
                        s(function(e) {
                          return e + 1;
                        })
                      );
                    }
                  },
                  "Next"
                )
              ),
            c > 1 && u ? r.a.createElement(It, { msg: u }) : null
          ),
          2 === c &&
            r.a.createElement(
              "div",
              { className: "validate-mnemonic-area" },
              r.a.createElement(
                "div",
                { className: "validate-mnemonic-area-container" },
                j.map(function(e, t) {
                  return r.a.createElement("span", { key: t }, e);
                })
              )
            )
        );
      };
      n(1077);
      var Bt = function(e) {
          var t = Object(a.useState)(0),
            n = Object(d.a)(t, 2),
            c = n[0],
            s = n[1],
            o = Object(a.useState)(0),
            i = Object(d.a)(o, 2),
            u = i[0],
            l = i[1],
            m = Object(a.useState)(""),
            p = Object(d.a)(m, 2),
            f = p[0],
            h = p[1],
            v = Object(a.useState)(""),
            b = Object(d.a)(v, 2),
            g = b[0],
            E = b[1],
            w = Object(a.useState)(new Array(12).fill("")),
            N = Object(d.a)(w, 2),
            y = N[0],
            O = N[1],
            j = [
              ["Mnemonic", "Private key"],
              ["Password", "Password"]
            ],
            k = function() {
              if (0 === u) {
                if (
                  y.some(function(e) {
                    return "" === e;
                  })
                )
                  return void E("Mnemonic is not correct");
              } else if (1 === u && !f)
                return void E("Private key is not correct");
              E(""),
                s(function(e) {
                  return e + 1;
                });
            };
          return r.a.createElement(
            "div",
            { className: "container import-account" },
            r.a.createElement(
              "div",
              { className: "import-account-title" },
              r.a.createElement(
                "div",
                { className: "import-account-title-select" },
                r.a.createElement("span", null, j[c][u]),
                0 === c
                  ? r.a.createElement(
                      "span",
                      {
                        className: "second-choice",
                        onClick: function() {
                          E(""), l(1 - u);
                        }
                      },
                      j[c][1 - u]
                    )
                  : null
              ),
              r.a.createElement(
                "span",
                { className: "import-account-sub-title" },
                [
                  ["Input mnemonic words", "Input private key"],
                  ["", ""]
                ][c][u]
              )
            ),
            r.a.createElement(
              "div",
              { className: "import-account-body" },
              r.a.createElement(
                "div",
                { className: "import-account-body-content" },
                0 === c
                  ? 0 === u
                    ? r.a.createElement(
                        "div",
                        { className: "import-mnemonic" },
                        y.map(function(e, t) {
                          return r.a.createElement("input", {
                            className: "word-item",
                            key: t,
                            value: y[t],
                            onChange: function(e) {
                              y.splice(t, 1, e.target.value), O(Array.from(y));
                            }
                          });
                        })
                      )
                    : r.a.createElement(
                        "div",
                        { className: "import-private-key" },
                        r.a.createElement("textarea", {
                          value: f,
                          onChange: function(e) {
                            return h(e.target.value);
                          },
                          onKeyPress: function(e) {
                            "Enter" === e.key && k();
                          }
                        })
                      )
                  : null,
                1 === c &&
                  r.a.createElement(Lt, {
                    type: 0 === u ? "mnemonic" : "pk",
                    secret: 0 === u ? y.join(" ") : f.trim(),
                    onSuccess: function() {
                      e.history.push("/");
                    }
                  })
              ),
              0 === c &&
                r.a.createElement(
                  "button",
                  {
                    className: "button button-yellow margin-top-40",
                    onClick: function() {
                      c < 1 && k();
                    }
                  },
                  "Next"
                ),
              g ? r.a.createElement(It, { msg: g }) : null
            )
          );
        },
        Kt = n(632),
        Ht = n(628),
        _t = n(633),
        Wt = n(14),
        zt = (function(e) {
          function t() {
            return (
              Object(C.a)(this, t),
              Object(Kt.a)(this, Object(Ht.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(_t.a)(t, e),
            Object(S.a)(t, [
              {
                key: "methodName",
                get: function() {
                  return this.meta.get("name").toString();
                }
              },
              {
                key: "argsArr",
                get: function() {
                  var e = [],
                    t = this.method.get("args").entries(),
                    n = !0,
                    a = !1,
                    r = void 0;
                  try {
                    for (
                      var c, s = t[Symbol.iterator]();
                      !(n = (c = s.next()).done);
                      n = !0
                    ) {
                      var o = c.value,
                        i = Object(d.a)(o, 2),
                        u = i[0],
                        l = i[1];
                      e.push({ name: u, value: l });
                    }
                  } catch (m) {
                    (a = !0), (r = m);
                  } finally {
                    try {
                      n || null == s.return || s.return();
                    } finally {
                      if (a) throw r;
                    }
                  }
                  return e;
                }
              }
            ]),
            t
          );
        })(n(126).Extrinsic),
        Rt = function(e) {
          var t = new zt(e);
          return [
            Object(Wt.stringCamelCase)(t.methodName),
            t.argsArr.map(function(e) {
              return "put_code" === t.methodName ? e.value : e.value.toString();
            }),
            t.argsArr
          ];
        },
        Jt = (n(1078), n(216)),
        Zt = n(630),
        Qt = n.n(Zt);
      function Vt(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return (
          (t = Number(t)),
          new Qt.a(e).dividedBy(Math.pow(10, t)).toFixed(n || t)
        );
      }
      var $t = function(e) {
          var t = e.query;
          return r.a.createElement(
            "div",
            { className: "detail" },
            r.a.createElement(
              "div",
              { className: "detail-amount" },
              r.a.createElement("span", null, "Amount"),
              r.a.createElement(
                "span",
                null,
                Vt(t.args[2], 8),
                " ",
                k(t.args[1])
              )
            ),
            r.a.createElement(
              "div",
              { className: "detail-item" },
              r.a.createElement("span", null, "Dest"),
              r.a.createElement("span", null, t.args[0])
            ),
            r.a.createElement(
              "div",
              { className: "detail-item" },
              r.a.createElement("span", null, "Memo"),
              r.a.createElement("span", null, t.args[3])
            )
          );
        },
        Ut = function(e) {
          var t = e.query;
          return r.a.createElement(
            "div",
            { className: "detail" },
            r.a.createElement(
              "div",
              { className: "detail-item" },
              r.a.createElement("span", null, "Module"),
              r.a.createElement("span", null, t.module.toLowerCase())
            ),
            r.a.createElement(
              "div",
              { className: "detail-item" },
              r.a.createElement("span", null, "Method"),
              r.a.createElement(
                "span",
                null,
                t.method.replace(/([A-Z])/g, "_$1").toLowerCase()
              )
            ),
            r.a.createElement(
              "div",
              { className: "detail-item" },
              r.a.createElement("span", null, "Args"),
              r.a.createElement(
                "section",
                { className: "args" },
                r.a.createElement(
                  "ol",
                  null,
                  (t.argsWithName || []).map(function(e, t) {
                    return e
                      ? r.a.createElement(
                          "li",
                          { key: t },
                          r.a.createElement(
                            "span",
                            { className: "arg-name" },
                            e.name,
                            ": "
                          ),
                          r.a.createElement(
                            "span",
                            { className: "arg-value" },
                            e.value.toString().length > 1e4
                              ? "[object Object]"
                              : e.value.toString()
                          )
                        )
                      : null;
                  })
                )
              )
            )
          );
        },
        Gt = function(e) {
          var t = e.query,
            n = Object(pt.c)(Qe),
            a = function(e, t) {
              return 0 === e && "amount" === t
                ? [8, 8]
                : 0 === e && "price" === t
                ? [9, 7]
                : 1 === e && "amount" === t
                ? [3, 3]
                : 1 === e && "price" === t
                ? [4, 8]
                : [8, 8];
            };
          return r.a.createElement(
            "div",
            { className: "detail" },
            "putOrder" === t.method &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "div",
                  { className: "detail-amount" },
                  r.a.createElement("span", null, "Amount"),
                  r.a.createElement(
                    "span",
                    null,
                    t.args[2],
                    " ",
                    Vt.apply(
                      void 0,
                      [t.args[3]].concat(Object(E.a)(a(t.args[0], "amount")))
                    ),
                    " ",
                    n[t.args[0]] && n[t.args[0]].assets
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "detail-item" },
                  r.a.createElement("span", null, "Price"),
                  r.a.createElement(
                    "span",
                    null,
                    Vt.apply(
                      void 0,
                      [t.args[4]].concat(Object(E.a)(a(t.args[0], "price")))
                    )
                  )
                )
              ),
            "cancelOrder" === t.method &&
              r.a.createElement(
                "div",
                { className: "detail-item" },
                r.a.createElement("span", null, "Id"),
                r.a.createElement("span", null, t.args[1])
              ),
            r.a.createElement(
              "div",
              { className: "detail-item" },
              r.a.createElement("span", null, "Trade pair"),
              r.a.createElement(
                "span",
                null,
                n[t.args[0]] &&
                  k(n[t.args[0]].assets) + "/" + k(n[t.args[0]].currency)
              )
            )
          );
        },
        Yt = function(e) {
          var t = e.query,
            n = Object(pt.c)(Ze);
          return r.a.createElement(
            "div",
            { className: "detail" },
            "withdraw" === t.method &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "div",
                  { className: "detail-amount" },
                  r.a.createElement("span", null, "Amount"),
                  r.a.createElement(
                    "span",
                    null,
                    Vt(t.args[1], 8),
                    " ",
                    t.args[0]
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "detail-item" },
                  r.a.createElement("span", null, "Fee"),
                  r.a.createElement("span", null, Vt(n, 8), " ", t.args[0])
                ),
                r.a.createElement(
                  "div",
                  { className: "detail-item" },
                  r.a.createElement("span", null, "Dest"),
                  r.a.createElement("span", null, t.args[2])
                ),
                r.a.createElement(
                  "div",
                  { className: "detail-item" },
                  r.a.createElement("span", null, "Memo"),
                  r.a.createElement("span", null, t.args[3])
                )
              ),
            "revokeWithdraw" === t.method &&
              r.a.createElement(
                "div",
                { className: "detail-item" },
                r.a.createElement("span", null, "Id"),
                r.a.createElement("span", null, t.args[0])
              )
          );
        },
        en = function(e) {
          var t = e.query,
            n = Object(pt.c)(Be),
            a = function(e) {
              return console.log(e, typeof e), j().account.decodeAddress(e);
            };
          return r.a.createElement(
            "div",
            { className: "detail" },
            t.args.length > 2
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "div",
                    { className: "detail-amount" },
                    r.a.createElement("span", null, "Amount"),
                    r.a.createElement(
                      "span",
                      null,
                      Vt(t.args.slice(-2, -1), 8),
                      " PCX"
                    )
                  ),
                  "renominate" === t.method &&
                    r.a.createElement(
                      "div",
                      { className: "detail-item" },
                      r.a.createElement("span", null, "From node"),
                      r.a.createElement("span", null, n && n[a(t.args[0])])
                    ),
                  r.a.createElement(
                    "div",
                    { className: "detail-item" },
                    r.a.createElement("span", null, "Dest node"),
                    r.a.createElement(
                      "span",
                      null,
                      n && n[a(t.args.slice(-3, -2)[0])]
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "detail-item" },
                    r.a.createElement("span", null, "Memo"),
                    r.a.createElement("span", null, t.args.slice(-1))
                  )
                )
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  "xTokens" === t.module &&
                    r.a.createElement(
                      "div",
                      { className: "detail-item" },
                      r.a.createElement("span", null, "Token"),
                      r.a.createElement("span", null, k(t.args[0]))
                    ),
                  "xStaking" === t.module &&
                    r.a.createElement(
                      "div",
                      { className: "detail-item" },
                      r.a.createElement("span", null, "Node"),
                      r.a.createElement("span", null, n && n[a(t.args[0])])
                    ),
                  "unfreeze" === t.method &&
                    r.a.createElement(
                      "div",
                      { className: "detail-item" },
                      r.a.createElement("span", null, "Id"),
                      r.a.createElement("span", null, t.args[1])
                    )
                )
          );
        };
      var tn = function(e) {
        var t = Object(pt.b)(),
          n = Object(a.useState)(""),
          c = Object(d.a)(n, 2),
          s = c[0],
          o = c[1],
          l = Object(a.useState)(""),
          m = Object(d.a)(l, 2),
          p = m[0],
          f = m[1],
          h = Object(a.useState)(0),
          v = Object(d.a)(h, 2),
          b = v[0],
          g = v[1],
          E = Object(a.useState)(1),
          w = Object(d.a)(E, 2),
          N = w[0],
          y = w[1],
          O = Object(a.useState)(null),
          j = Object(d.a)(O, 2),
          k = j[0],
          x = j[1],
          C = Object(a.useState)(Object.assign({}, e.location.query)),
          S = Object(d.a)(C, 2),
          A = S[0],
          P = S[1],
          T = Object(pt.c)(J),
          M = Object(pt.c)(se),
          I = e.location.query;
        Object(a.useEffect)(
          function() {
            X(T);
          },
          [T]
        );
        var X = function(e) {
            if (I) {
              if (!I.module) {
                var n = Rt(I.data),
                  a = Object(d.a)(n, 3),
                  r = a[0],
                  c = a[1],
                  s = a[2];
                (A.method = r), (A.argsWithName = s), (A.args = c);
                var o = "";
                [
                  "nominate",
                  "renominate",
                  "unnominate",
                  "unfreeze",
                  "claim"
                ].includes(r)
                  ? ((o = "xStaking"),
                    1 === c.length && c[0].length < 6 && (o = "xTokens"))
                  : (o = ["withdraw", "revokeWithdraw"].includes(r)
                      ? "xAssetsProcess"
                      : ["putOrder", "cancelOrder"].includes(r)
                      ? "xSpot"
                      : ["transfer"].includes(r)
                      ? "xAssets"
                      : "xContracts"),
                  (A.module = o),
                  P(A);
              }
              q(),
                dt(M, A, f, g),
                (function(e) {
                  "xStaking" === A.module && t(Fe(e)),
                    "xSpot" === A.module && t(Re(e)),
                    "xAssetsProcess" === A.module && t(Je(e));
                })(e);
            }
          },
          q = function() {
            var e;
            (e =
              "xAssets" === A.module && "transfer" === A.method
                ? r.a.createElement($t, { query: A })
                : "xSpot" === A.module
                ? r.a.createElement(Gt, { query: A })
                : "xAssetsProcess" === A.module
                ? r.a.createElement(Yt, { query: A })
                : ["xStaking", "xTokens"].includes(A.module)
                ? r.a.createElement(en, { query: A })
                : r.a.createElement(Ut, { query: A })),
              x(e);
          },
          D = (function() {
            var n = Object(u.a)(
              i.a.mark(function n() {
                return i.a.wrap(
                  function(n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if ((f(""), M && M.address)) {
                            n.next = 4;
                            break;
                          }
                          return (
                            f("Error: address is not exist"), n.abrupt("return")
                          );
                        case 4:
                          if (s || (f("password is required"), 0)) {
                            n.next = 6;
                            break;
                          }
                          return n.abrupt("return");
                        case 6:
                          if (M.address === I.address) {
                            n.next = 9;
                            break;
                          }
                          return f("Invalid address"), n.abrupt("return");
                        case 9:
                          return (
                            t(Te(!0)), (n.prev = 10), (n.next = 13), mt(s, N)
                          );
                        case 13:
                          f(""),
                            t(Te(!1)),
                            L(),
                            e.history.push("/"),
                            (n.next = 23);
                          break;
                        case 19:
                          (n.prev = 19),
                            (n.t0 = n.catch(10)),
                            t(Te(!1)),
                            f("Error: ".concat(n.t0.message));
                        case 23:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[10, 19]]
                );
              })
            );
            return function() {
              return n.apply(this, arguments);
            };
          })();
        window.onbeforeunload = function() {
          L();
        };
        var L = function() {
          try {
            t(xe());
          } catch (n) {
            console.log(n);
          } finally {
            e.history.push("/");
          }
        };
        return I
          ? r.a.createElement(
              "div",
              { className: "container request-sign" },
              r.a.createElement("div", { className: "tx-panel" }, k),
              r.a.createElement(
                "div",
                { className: "adjust-gas" },
                r.a.createElement(
                  "div",
                  { className: "adjust-gas-desc" },
                  r.a.createElement(
                    "div",
                    null,
                    r.a.createElement("span", null, "Fee"),
                    r.a.createElement(
                      "span",
                      { className: "yellow" },
                      (N * b) / Math.pow(10, 8) + " PCX"
                    )
                  ),
                  r.a.createElement("span", null, "More fee, faster speed")
                ),
                r.a.createElement(Jt.Slider, {
                  defaultValue: N,
                  onChange: function(e) {
                    return y(e);
                  },
                  "aria-labelledby": "discrete-slider",
                  valueLabelDisplay: "auto",
                  step: 1,
                  marks: [
                    { value: 1, label: "1x" },
                    { value: 10, label: "10x" }
                  ],
                  min: 1,
                  max: 10
                })
              ),
              r.a.createElement(
                "div",
                { className: "submit-area" },
                r.a.createElement(
                  "div",
                  { className: "title" },
                  r.a.createElement("span", null, "Input password")
                ),
                r.a.createElement("input", {
                  value: s,
                  onChange: function(e) {
                    return o(e.target.value);
                  },
                  onKeyPress: function(e) {
                    "Enter" === e.key && D();
                  },
                  className: "input",
                  type: "password",
                  placeholder: "Password"
                }),
                r.a.createElement(It, { msg: p }),
                r.a.createElement(
                  "div",
                  { className: "button-area margin-top-40" },
                  r.a.createElement(
                    Jt.DefaultButton,
                    {
                      size: "large",
                      onClick: function() {
                        L();
                        var e = I.origin,
                          t = I.id,
                          n = I.dataId;
                        ot.emit(e, t, "api", { id: n, result: { reject: !0 } });
                      }
                    },
                    "Cancel"
                  ),
                  r.a.createElement(
                    Jt.PrimaryButton,
                    {
                      size: "large",
                      onClick: function() {
                        return D();
                      }
                    },
                    "Sign"
                  )
                )
              )
            )
          : r.a.createElement(r.a.Fragment, null);
      };
      n(1124);
      var nn = function(e) {
        return r.a.createElement(
          "div",
          { className: "show-private-key" },
          r.a.createElement("span", { className: "title" }, "Private Key"),
          r.a.createElement(Mt, {
            desc:
              "Do not store your private key in your PC or network. Anybody with your private key will take your asseets."
          }),
          r.a.createElement(
            "div",
            { className: "pk" },
            r.a.createElement(
              "span",
              { className: "span-center-wrap" },
              e.location.query.pk
            )
          )
        );
      };
      n(1125);
      var an = function(e) {
        var t = Object(a.useState)(""),
          n = Object(d.a)(t, 2),
          c = n[0],
          s = n[1],
          o = Object(a.useState)(""),
          l = Object(d.a)(o, 2),
          m = l[0],
          p = l[1],
          f = Object(pt.c)(J),
          h = Object(pt.b)(),
          v = Object(pt.c)(R);
        function b(e, t) {
          return g.apply(this, arguments);
        }
        function g() {
          return (g = Object(u.a)(
            i.a.mark(function t(n, a) {
              var r;
              return i.a.wrap(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      try {
                        (r = w.Account.fromKeyStore(n, a).privateKey()),
                          e.history.push({
                            pathname: "/showPrivateKey",
                            query: { pk: r }
                          });
                      } catch (c) {
                        p(c.message);
                      }
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        function E(e, t, n) {
          return N.apply(this, arguments);
        }
        function N() {
          return (N = Object(u.a)(
            i.a.mark(function t(n, a, r) {
              return i.a.wrap(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      try {
                        w.Account.setNet(f ? "testnet" : "mainnet"),
                          w.Account.fromKeyStore(r, a),
                          h(ne({ address: n, chainId: v })),
                          e.history.push("/");
                      } catch (c) {
                        p(c.message);
                      }
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        var y = (function() {
          var t = Object(u.a)(
            i.a.mark(function t() {
              var n, a, r;
              return i.a.wrap(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      c &&
                        ((n = e.location.query.address),
                        (a = e.location.query.keystore),
                        "export" === (r = e.location.query.type)
                          ? b(a, c)
                          : "remove" === r && E(n, c, a));
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function() {
            return t.apply(this, arguments);
          };
        })();
        return r.a.createElement(
          "div",
          { className: "enter-password" },
          r.a.createElement("span", { className: "title" }, "Input password"),
          r.a.createElement("input", {
            className: "input",
            type: "password",
            value: c,
            onChange: function(e) {
              return s(e.target.value);
            },
            onKeyPress: function(e) {
              "Enter" === e.key && y();
            },
            placeholder: "Password"
          }),
          r.a.createElement(
            "button",
            {
              className: "button button-yellow margin-top-40",
              onClick: function() {
                return y();
              }
            },
            "Confirm"
          ),
          m ? r.a.createElement(It, { msg: m }) : null
        );
      };
      n(1126);
      var rn,
        cn = function(e) {
          var t = Object(a.useState)(""),
            n = Object(d.a)(t, 2),
            c = n[0],
            s = n[1],
            o = Object(a.useState)(""),
            l = Object(d.a)(o, 2),
            m = l[0],
            p = l[1],
            f = Object(a.useState)(""),
            h = Object(d.a)(f, 2),
            v = h[0],
            b = h[1],
            E = Object(pt.c)(Ee),
            w = Object(pt.c)(R),
            N = Object(pt.b)(),
            y = e.location.query,
            O = "",
            j = "Add node";
          y && "edit" === y.type
            ? ((O = "edit"), (j = "Edit node"))
            : y && "remove" === y.type && ((O = "remove"), (j = "Delete node"));
          var k = (function() {
              var t = Object(u.a)(
                i.a.mark(function t() {
                  return i.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ((c && m) || (b("name and url are required"), 0)) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return");
                        case 2:
                          try {
                            N(he({ chainId: w, node: { name: c, url: m } })),
                              g(E, w, N, ge),
                              b(""),
                              e.history.push("/");
                          } catch (n) {
                            b(n.message);
                          }
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function() {
                return t.apply(this, arguments);
              };
            })(),
            x = (function() {
              var t = Object(u.a)(
                i.a.mark(function t(n, a) {
                  return i.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!(E.length < 2)) {
                            t.next = 3;
                            break;
                          }
                          return (
                            b("can not remove the last node"),
                            t.abrupt("return")
                          );
                        case 3:
                          try {
                            N(ve({ chainId: w, url: a })),
                              g(E, w, N, ge),
                              b(""),
                              e.history.push("/");
                          } catch (n) {
                            b(n.message);
                          }
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function(e, n) {
                return t.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            "div",
            { className: "node-action" },
            r.a.createElement("span", { className: "title" }, j),
            "remove" !== O
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement("input", {
                    className: "input",
                    type: "text",
                    value: c,
                    onChange: function(e) {
                      return s(e.target.value);
                    },
                    placeholder: "Name(12 characters max)"
                  }),
                  r.a.createElement(
                    "span",
                    { className: "node-url" },
                    "Node address"
                  ),
                  r.a.createElement("input", {
                    className: "input",
                    type: "text",
                    value: m,
                    onChange: function(e) {
                      return p(e.target.value);
                    },
                    onKeyPress: function(e) {
                      "Enter" === e.key && k();
                    },
                    placeholder: "wss://w1.chainx.org/ws"
                  }),
                  r.a.createElement(
                    "button",
                    {
                      className: "button button-yellow margin-top-40",
                      onClick: function() {
                        return k();
                      }
                    },
                    "Confirm"
                  )
                )
              : r.a.createElement(
                  "button",
                  {
                    className: "button button-white margin-top-16",
                    onClick: function() {
                      x(y.nodeInfo.name, y.nodeInfo.url);
                    }
                  },
                  "Delete"
                ),
            v ? r.a.createElement(It, { msg: v }) : null
          );
        },
        sn = n(631),
        on = n.n(sn);
      (window.wallet.socketResponse = function(e) {
        switch (("string" === typeof e && (e = JSON.parse(e)), e.type)) {
          case "api":
            return ut(e.request, e.id);
          case "pair":
            return lt(e.request, e.id);
          default:
            return;
        }
      }),
        (rn = window.sockets),
        (ot = rn),
        window.sockets.initialize().then(function() {
          return console.log("sockets initialized");
        }),
        s.a.render(
          r.a.createElement(
            pt.a,
            { store: $e },
            r.a.createElement(function() {
              var e = Object(pt.b)(),
                t = Object(pt.c)(function(e) {
                  return e.status.loading;
                }),
                n = Object(pt.c)(function(e) {
                  return e.status.initLoading;
                }),
                c = Object(pt.c)(Ne),
                s = Object(pt.c)(function(e) {
                  return e;
                });
              console.log("state", s),
                Object(a.useEffect)(function() {
                  d();
                }, []);
              var o = function(e) {
                  return new Promise(function(t) {
                    setTimeout(t, e);
                  });
                },
                d = (function() {
                  var t = Object(u.a)(
                    i.a.mark(function t() {
                      return i.a.wrap(function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              Promise.race([O(c.url), o(3e3)])
                                .catch(function(e) {
                                  console.log(
                                    "set Chainx catch error: ".concat(e)
                                  );
                                })
                                .finally(function() {
                                  e(Me(!1));
                                });
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function() {
                    return t.apply(this, arguments);
                  };
                })();
              return r.a.createElement(
                l.a,
                null,
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(Ct, { props: !0 }),
                  (t || n) &&
                    r.a.createElement(
                      "div",
                      { className: "spinner" },
                      r.a.createElement("img", { src: on.a, alt: "spinner" })
                    ),
                  !n &&
                    r.a.createElement(
                      "div",
                      { className: "content" },
                      r.a.createElement(
                        m.d,
                        null,
                        r.a.createElement(m.b, {
                          exact: !0,
                          path: "/",
                          component: Et
                        }),
                        r.a.createElement(m.b, {
                          path: "/createAccount",
                          component: Ft
                        }),
                        r.a.createElement(m.b, {
                          path: "/importAccount",
                          component: Bt
                        }),
                        r.a.createElement(m.b, {
                          path: "/requestSign/:id?",
                          component: tn
                        }),
                        r.a.createElement(m.b, {
                          path: "/showPrivateKey",
                          component: nn
                        }),
                        r.a.createElement(m.b, {
                          path: "/enterPassword",
                          component: an
                        }),
                        r.a.createElement(m.b, {
                          path: "/addNode",
                          component: cn
                        }),
                        r.a.createElement(m.a, { to: "/" })
                      )
                    )
                )
              );
            }, null)
          ),
          document.getElementById("root")
        );
    },
    296: function(e, t, n) {
      e.exports = n.p + "static/media/extension_logo.329f2527.svg";
    },
    595: function(e, t, n) {},
    623: function(e, t, n) {
      e.exports = n.p + "static/media/testnet.3a02305f.svg";
    },
    624: function(e, t, n) {
      e.exports = n.p + "static/media/switch.58939fba.svg";
    },
    627: function(e, t, n) {
      e.exports = n.p + "static/media/warning.e4f3512f.png";
    },
    631: function(e, t, n) {
      e.exports = n.p + "static/media/loading.0adb93ce.gif";
    },
    641: function(e, t, n) {
      e.exports = n(1128);
    },
    658: function(e, t) {},
    671: function(e, t) {},
    673: function(e, t) {},
    693: function(e, t) {},
    843: function(e, t) {}
  },
  [[641, 1, 2]]
]);
//# sourceMappingURL=main.972311b6.chunk.js.map
