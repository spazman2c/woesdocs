/*
 * Woes live-chat widget for the docs site.
 * Mintlify auto-includes any root-level .js on every docs page, so this file
 * just injects the hosted Woes loader (served from https://woes.dev/widget.js).
 *
 * SET YOUR WIDGET KEY BELOW:
 *   Use your docs agent's widget key (woes.dev → Settings → Agents) so docs
 *   conversations route to the documentation/API support agent, or the
 *   workspace key (Settings → Channels → Live chat). Format: "trovw_..." or
 *   "trovw_agent_...".
 */
(function () {
  var WIDGET_PUBLIC_KEY = "trovw_08296b40f473455e88e1080dbb44e137";

  if (window.__woesDocsWidgetInstalled) return;
  window.__woesDocsWidgetInstalled = true;

  if (!WIDGET_PUBLIC_KEY || WIDGET_PUBLIC_KEY.indexOf("REPLACE_WITH_") === 0) {
    console.warn(
      "[woes] Set WIDGET_PUBLIC_KEY in woes-widget.js to your docs widget key.",
    );
    return;
  }

  // Tag docs conversations with their source + page (sent on the first message).
  window.Woes =
    window.Woes ||
    function () {
      (window.Woes.q = window.Woes.q || []).push(arguments);
    };
  window.Woes("setNewConversationFields", {
    source: "docs",
    page: window.location.href,
  });

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://woes.dev/widget.js";
  script.setAttribute("data-public-key", WIDGET_PUBLIC_KEY);
  script.setAttribute("data-api", "https://woes.dev/api/widget/messages");
  document.head.appendChild(script);
})();
