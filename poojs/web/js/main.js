if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/js/service-worker-minimum-to-intall-pwa.js")
    .then(function (registration) {
      alert("Registro bem-sucedido, escopo é:", registration.scope);
    })
    .catch(function (error) {
      alert("Falha no registro do service worker, erro:", error);
    });
}
