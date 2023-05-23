export function hashParams() {
   return new URLSearchParams(window.location.hash.replace("#", "?"));
}
