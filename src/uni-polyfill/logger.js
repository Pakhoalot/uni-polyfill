
const isDev = process.env.NODE_ENV === "development";
export function warn(...args) {
  if (isDev) console.warn("[uni-polyfill]", ...args);
}
export function info(...args) {
  if (isDev) console.info("[uni-polyfill]", ...args);
}
export function log(...args) {
  if (isDev) console.log("[uni-polyfill]", ...args);
}
export function error(...args) {
  if (isDev) console.error("[uni-polyfill]", ...args);
}
export default {
  warn,
  info,
  log,
  error,
}
