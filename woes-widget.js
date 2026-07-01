/*
 * Mintlify auto-includes root-level .js files on docs pages.
 * This file injects the exact Woes widget install snippet for docs. Keep the
 * attributes in sync with the customer-facing install snippet.
 */
(function () {
  if (window.__woesDocsWidgetInstalled) return;
  window.__woesDocsWidgetInstalled = true;

  var script = document.createElement("script");
  script.src = "https://woes.dev/widget.js";
  script.setAttribute(
    "data-public-key",
    "trovw_agent_0569335271704cd594b3900a5448cc43"
  );
  document.head.appendChild(script);

  document.addEventListener("click", function (event) {
    var button = event.target && event.target.closest
      ? event.target.closest("[data-woes-copy-agent-prompt]")
      : null;
    if (!button) return;

    var promptId = button.getAttribute("data-woes-copy-agent-prompt");
    var source = document.querySelector(
      '[data-woes-agent-prompt="' + promptId + '"]'
    );
    if (!source) return;

    var text = source.value || source.textContent || "";
    if (!text.trim()) return;

    function markCopied() {
      var original = button.getAttribute("data-original-label") || button.textContent;
      button.setAttribute("data-original-label", original);
      button.textContent = "Copied";
      window.setTimeout(function () {
        button.textContent = original;
      }, 1600);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(markCopied).catch(function () {
        window.prompt("Copy this prompt", text);
      });
      return;
    }

    window.prompt("Copy this prompt", text);
  });
})();
