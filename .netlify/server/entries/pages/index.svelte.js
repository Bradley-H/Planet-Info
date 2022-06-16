var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_fafbd1de = require("../../chunks/index-fafbd1de.js");
const subscriber_queue = [];
function writable(value, start = import_index_fafbd1de.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_fafbd1de.a)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_fafbd1de.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_fafbd1de.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
let globalStore = writable({
  currentPlanet: "Earth",
  ModalActive: false
});
var styles = /* @__PURE__ */ (() => '*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml, #svelte {\n  max-height: 100%;\n}\n\nhtml {\n  background-image: url("/assets/background-stars.svg");\n  background-color: hsl(240deg, 67%, 8%);\n  object-fit: cover;\n}\n\n@media (min-width: 992px) {\n  html {\n    overflow: hidden;\n  }\n}\n\nbutton {\n  border: none;\n  outline: none;\n  background-color: transparent;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  font-weight: 400;\n  height: 100%;\n  width: 100%;\n  color: white;\n}\n\np, a, h3, h4, body, button {\n  font-family: "Spartan", sans-serif;\n}\n\nh1, h2, h3, h4, button {\n  font-weight: bold;\n}\n\nh1, h2 {\n  font-family: "Antonio", sans-serif;\n}\n\nh1 {\n  font-size: 2.1875rem;\n}\n\nh2 {\n  font-size: 1.5625rem;\n}\n\nh3 {\n  font-size: 1.0625rem;\n}\n\nh4 {\n  font-size: 0.875rem;\n}')();
var Button_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "button.svelte-gxi80h,a.svelte-gxi80h{display:flex;justify-content:center;align-items:center;padding:1.2rem 3rem 1.2rem 0.5rem;width:14.5rem;color:white;font-size:1.1rem;border:1px solid hsl(240deg, 6%, 54%);transition:all 0.8s ease-in-out;text-decoration:none;min-width:155px;cursor:pointer;text-transform:capitalize;z-index:3;margin-top:0.875rem}@media(min-width: 768px) and (max-width: 991px){button.svelte-gxi80h,a.svelte-gxi80h{width:16rem}}@media(min-width: 992px){button.svelte-gxi80h,a.svelte-gxi80h{width:20rem}}button.svelte-gxi80h:hover,a.svelte-gxi80h:hover{background-color:hsl(240deg, 6%, 54%);color:white}button.Mercury.active.svelte-gxi80h,a.Mercury.active.svelte-gxi80h{background-color:hsl(194deg, 48%, 49%)}button.Venus.active.svelte-gxi80h,a.Venus.active.svelte-gxi80h{background-color:hsl(33deg, 82%, 61%)}button.Earth.active.svelte-gxi80h,a.Earth.active.svelte-gxi80h{background-color:hsl(263deg, 67%, 51%)}button.Mars.active.svelte-gxi80h,a.Mars.active.svelte-gxi80h{background-color:hsl(13deg, 63%, 51%)}button.Jupiter.active.svelte-gxi80h,a.Jupiter.active.svelte-gxi80h{background-color:hsl(2deg, 68%, 53%)}button.Saturn.active.svelte-gxi80h,a.Saturn.active.svelte-gxi80h{background-color:hsl(17deg, 73%, 46%)}button.Uranus.active.svelte-gxi80h,a.Uranus.active.svelte-gxi80h{background-color:hsl(169deg, 73%, 44%)}button.Neptune.active.svelte-gxi80h,a.Neptune.active.svelte-gxi80h{background-color:hsl(222deg, 87%, 56%)}")();
const css$6 = {
  code: "button.svelte-gxi80h,a.svelte-gxi80h{display:flex;justify-content:center;align-items:center;padding:1.2rem 3rem 1.2rem 0.5rem;width:14.5rem;color:white;font-size:1.1rem;border:1px solid hsl(240deg, 6%, 54%);transition:all 0.8s ease-in-out;text-decoration:none;min-width:155px;cursor:pointer;text-transform:capitalize;z-index:3;margin-top:0.875rem}@media(min-width: 768px) and (max-width: 991px){button.svelte-gxi80h,a.svelte-gxi80h{width:16rem}}@media(min-width: 992px){button.svelte-gxi80h,a.svelte-gxi80h{width:20rem}}button.svelte-gxi80h:hover,a.svelte-gxi80h:hover{background-color:hsl(240deg, 6%, 54%);color:white}button.Mercury.active.svelte-gxi80h,a.Mercury.active.svelte-gxi80h{background-color:hsl(194deg, 48%, 49%)}button.Venus.active.svelte-gxi80h,a.Venus.active.svelte-gxi80h{background-color:hsl(33deg, 82%, 61%)}button.Earth.active.svelte-gxi80h,a.Earth.active.svelte-gxi80h{background-color:hsl(263deg, 67%, 51%)}button.Mars.active.svelte-gxi80h,a.Mars.active.svelte-gxi80h{background-color:hsl(13deg, 63%, 51%)}button.Jupiter.active.svelte-gxi80h,a.Jupiter.active.svelte-gxi80h{background-color:hsl(2deg, 68%, 53%)}button.Saturn.active.svelte-gxi80h,a.Saturn.active.svelte-gxi80h{background-color:hsl(17deg, 73%, 46%)}button.Uranus.active.svelte-gxi80h,a.Uranus.active.svelte-gxi80h{background-color:hsl(169deg, 73%, 44%)}button.Neptune.active.svelte-gxi80h,a.Neptune.active.svelte-gxi80h{background-color:hsl(222deg, 87%, 56%)}",
  map: null
};
const Button = (0, import_index_fafbd1de.c)(($$result, $$props, $$bindings, slots) => {
  let path;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_fafbd1de.b)(globalStore, (value) => $globalStore = value);
  let { text = "" } = $$props;
  let { href = "" } = $$props;
  let { active = false } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$6);
  path = $globalStore.currentPlanet;
  $$unsubscribe_globalStore();
  return `${!href ? `<button class="${[(0, import_index_fafbd1de.e)((0, import_index_fafbd1de.d)(path)) + " svelte-gxi80h", active ? "active" : ""].join(" ").trim()}">${(0, import_index_fafbd1de.e)(text)}</button>` : `<a${(0, import_index_fafbd1de.f)("href", href, 0)} class="${[(0, import_index_fafbd1de.e)((0, import_index_fafbd1de.d)(path)) + " svelte-gxi80h", active ? "active" : ""].join(" ").trim()}">${(0, import_index_fafbd1de.e)(text)}</a>`}`;
});
var Card_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".title.svelte-ehok1m.svelte-ehok1m,.content.svelte-ehok1m.svelte-ehok1m{width:100%}.title.svelte-ehok1m.svelte-ehok1m,.content.svelte-ehok1m.svelte-ehok1m{text-align:center}.card.svelte-ehok1m.svelte-ehok1m{display:flex;flex-direction:column;text-align:start;width:14.5rem;height:5rem;border:1px solid hsl(240deg, 6%, 54%);font-weight:bold;margin-top:0.9375rem;overflow:hidden}@media(min-width: 768px) and (max-width: 991px){.card.svelte-ehok1m.svelte-ehok1m{width:16rem}}.card.svelte-ehok1m .title.svelte-ehok1m{margin-top:0.6875rem}.card.svelte-ehok1m .title p.svelte-ehok1m{color:hsl(240deg, 6%, 54%)}.card.svelte-ehok1m .content.svelte-ehok1m{margin-top:0.5625rem}.card.svelte-ehok1m .content h4.svelte-ehok1m{font-size:1.5625rem}")();
const css$5 = {
  code: ".title.svelte-ehok1m.svelte-ehok1m,.content.svelte-ehok1m.svelte-ehok1m{width:100%}.title.svelte-ehok1m.svelte-ehok1m,.content.svelte-ehok1m.svelte-ehok1m{text-align:center}.card.svelte-ehok1m.svelte-ehok1m{display:flex;flex-direction:column;text-align:start;width:14.5rem;height:5rem;border:1px solid hsl(240deg, 6%, 54%);font-weight:bold;margin-top:0.9375rem;overflow:hidden}@media(min-width: 768px) and (max-width: 991px){.card.svelte-ehok1m.svelte-ehok1m{width:16rem}}.card.svelte-ehok1m .title.svelte-ehok1m{margin-top:0.6875rem}.card.svelte-ehok1m .title p.svelte-ehok1m{color:hsl(240deg, 6%, 54%)}.card.svelte-ehok1m .content.svelte-ehok1m{margin-top:0.5625rem}.card.svelte-ehok1m .content h4.svelte-ehok1m{font-size:1.5625rem}",
  map: null
};
const Card = (0, import_index_fafbd1de.c)(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { value = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$5);
  return `<div class="${"card svelte-ehok1m"}"><div class="${"title svelte-ehok1m"}"><p class="${"svelte-ehok1m"}">${(0, import_index_fafbd1de.e)(title)}</p></div>
    <div class="${"content svelte-ehok1m"}"><h4 class="${"svelte-ehok1m"}">${(0, import_index_fafbd1de.e)(value)}</h4></div></div>`;
});
var NavLink_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => 'button.Neptune.active.svelte-q1khaj::after,button.Neptune.nonActive.svelte-q1khaj::after,button.Uranus.active.svelte-q1khaj::after,button.Uranus.nonActive.svelte-q1khaj::after,button.Saturn.active.svelte-q1khaj::after,button.Saturn.nonActive.svelte-q1khaj::after,button.Jupiter.active.svelte-q1khaj::after,button.Jupiter.nonActive.svelte-q1khaj::after,button.Mars.active.svelte-q1khaj::after,button.Mars.nonActive.svelte-q1khaj::after,button.Earth.active.svelte-q1khaj::after,button.Earth.nonActive.svelte-q1khaj::after,button.Venus.active.svelte-q1khaj::after,button.Venus.nonActive.svelte-q1khaj::after,button.Mercury.active.svelte-q1khaj::after,button.Mercury.nonActive.svelte-q1khaj::after{content:"";position:absolute;left:0;height:4px;transition:all 0.8s ease-in-out}button.Neptune.active.svelte-q1khaj::after,button.Neptune.nonActive.svelte-q1khaj::after,button.Uranus.active.svelte-q1khaj::after,button.Uranus.nonActive.svelte-q1khaj::after,button.Saturn.active.svelte-q1khaj::after,button.Saturn.nonActive.svelte-q1khaj::after,button.Jupiter.active.svelte-q1khaj::after,button.Jupiter.nonActive.svelte-q1khaj::after,button.Mars.active.svelte-q1khaj::after,button.Mars.nonActive.svelte-q1khaj::after,button.Earth.active.svelte-q1khaj::after,button.Earth.nonActive.svelte-q1khaj::after,button.Venus.active.svelte-q1khaj::after,button.Venus.nonActive.svelte-q1khaj::after,button.Mercury.active.svelte-q1khaj::after,button.Mercury.nonActive.svelte-q1khaj::after{width:100%}button.Neptune.active.svelte-q1khaj::after,button.Uranus.active.svelte-q1khaj::after,button.Saturn.active.svelte-q1khaj::after,button.Jupiter.active.svelte-q1khaj::after,button.Mars.active.svelte-q1khaj::after,button.Earth.active.svelte-q1khaj::after,button.Venus.active.svelte-q1khaj::after,button.Mercury.active.svelte-q1khaj::after{bottom:-0.5rem}button.Neptune.nonActive.svelte-q1khaj::after,button.Uranus.nonActive.svelte-q1khaj::after,button.Saturn.nonActive.svelte-q1khaj::after,button.Jupiter.nonActive.svelte-q1khaj::after,button.Mars.nonActive.svelte-q1khaj::after,button.Earth.nonActive.svelte-q1khaj::after,button.Venus.nonActive.svelte-q1khaj::after,button.Mercury.nonActive.svelte-q1khaj::after{bottom:-3.5rem}button.svelte-q1khaj{color:hsl(240deg, 6%, 54%);background-color:transparent;border:none;cursor:pointer;margin-right:0.8125rem;text-decoration:none;font-weight:bold;margin-bottom:0.5rem;transition:all 0.8s ease-in-out;position:relative}@media(min-width: 768px) and (max-width: 991px){button.svelte-q1khaj{font-size:0.79rem}}@media(min-width: 992px){button.svelte-q1khaj{margin-right:2.25rem;font-size:0.85rem}}button.Mercury.svelte-q1khaj:hover,button.Mercury.active.svelte-q1khaj{color:hsl(194deg, 48%, 49%)}button.Mercury.active.svelte-q1khaj::after,button.Mercury.nonActive.svelte-q1khaj::after{background:hsl(194deg, 48%, 49%)}button.Venus.svelte-q1khaj:hover,button.Venus.active.svelte-q1khaj{color:hsl(33deg, 82%, 61%)}button.Venus.active.svelte-q1khaj::after,button.Venus.nonActive.svelte-q1khaj::after{background:hsl(33deg, 82%, 61%)}button.Earth.svelte-q1khaj:hover,button.Earth.active.svelte-q1khaj{color:hsl(263deg, 67%, 51%)}button.Earth.active.svelte-q1khaj::after,button.Earth.nonActive.svelte-q1khaj::after{background:hsl(263deg, 67%, 51%)}button.Mars.svelte-q1khaj:hover,button.Mars.active.svelte-q1khaj{color:hsl(13deg, 63%, 51%)}button.Mars.active.svelte-q1khaj::after,button.Mars.nonActive.svelte-q1khaj::after{background:hsl(13deg, 63%, 51%)}button.Jupiter.svelte-q1khaj:hover,button.Jupiter.active.svelte-q1khaj{color:hsl(2deg, 68%, 53%)}button.Jupiter.active.svelte-q1khaj::after,button.Jupiter.nonActive.svelte-q1khaj::after{background:hsl(2deg, 68%, 53%)}button.Saturn.svelte-q1khaj:hover,button.Saturn.active.svelte-q1khaj{color:hsl(17deg, 73%, 46%)}button.Saturn.active.svelte-q1khaj::after,button.Saturn.nonActive.svelte-q1khaj::after{background:hsl(17deg, 73%, 46%)}button.Uranus.svelte-q1khaj:hover,button.Uranus.active.svelte-q1khaj{color:hsl(169deg, 73%, 44%)}button.Uranus.active.svelte-q1khaj::after,button.Uranus.nonActive.svelte-q1khaj::after{background:hsl(169deg, 73%, 44%)}button.Neptune.svelte-q1khaj:hover,button.Neptune.active.svelte-q1khaj{color:hsl(222deg, 87%, 56%)}button.Neptune.active.svelte-q1khaj::after,button.Neptune.nonActive.svelte-q1khaj::after{background:hsl(222deg, 87%, 56%)}@keyframes svelte-q1khaj-NavLinkActiveAnimation{from{bottom:-2.5rem}to{bottom:-1rem}}@keyframes svelte-q1khaj-NavLinkActiveAnimationReverse{from{bottom:-0.5rem;opacity:1}to{bottom:-5.5rem;opacity:0}}')();
const css$4 = {
  code: 'button.Neptune.active.svelte-q1khaj::after,button.Neptune.nonActive.svelte-q1khaj::after,button.Uranus.active.svelte-q1khaj::after,button.Uranus.nonActive.svelte-q1khaj::after,button.Saturn.active.svelte-q1khaj::after,button.Saturn.nonActive.svelte-q1khaj::after,button.Jupiter.active.svelte-q1khaj::after,button.Jupiter.nonActive.svelte-q1khaj::after,button.Mars.active.svelte-q1khaj::after,button.Mars.nonActive.svelte-q1khaj::after,button.Earth.active.svelte-q1khaj::after,button.Earth.nonActive.svelte-q1khaj::after,button.Venus.active.svelte-q1khaj::after,button.Venus.nonActive.svelte-q1khaj::after,button.Mercury.active.svelte-q1khaj::after,button.Mercury.nonActive.svelte-q1khaj::after{content:"";position:absolute;left:0;height:4px;transition:all 0.8s ease-in-out}button.Neptune.active.svelte-q1khaj::after,button.Neptune.nonActive.svelte-q1khaj::after,button.Uranus.active.svelte-q1khaj::after,button.Uranus.nonActive.svelte-q1khaj::after,button.Saturn.active.svelte-q1khaj::after,button.Saturn.nonActive.svelte-q1khaj::after,button.Jupiter.active.svelte-q1khaj::after,button.Jupiter.nonActive.svelte-q1khaj::after,button.Mars.active.svelte-q1khaj::after,button.Mars.nonActive.svelte-q1khaj::after,button.Earth.active.svelte-q1khaj::after,button.Earth.nonActive.svelte-q1khaj::after,button.Venus.active.svelte-q1khaj::after,button.Venus.nonActive.svelte-q1khaj::after,button.Mercury.active.svelte-q1khaj::after,button.Mercury.nonActive.svelte-q1khaj::after{width:100%}button.Neptune.active.svelte-q1khaj::after,button.Uranus.active.svelte-q1khaj::after,button.Saturn.active.svelte-q1khaj::after,button.Jupiter.active.svelte-q1khaj::after,button.Mars.active.svelte-q1khaj::after,button.Earth.active.svelte-q1khaj::after,button.Venus.active.svelte-q1khaj::after,button.Mercury.active.svelte-q1khaj::after{bottom:-0.5rem}button.Neptune.nonActive.svelte-q1khaj::after,button.Uranus.nonActive.svelte-q1khaj::after,button.Saturn.nonActive.svelte-q1khaj::after,button.Jupiter.nonActive.svelte-q1khaj::after,button.Mars.nonActive.svelte-q1khaj::after,button.Earth.nonActive.svelte-q1khaj::after,button.Venus.nonActive.svelte-q1khaj::after,button.Mercury.nonActive.svelte-q1khaj::after{bottom:-3.5rem}button.svelte-q1khaj{color:hsl(240deg, 6%, 54%);background-color:transparent;border:none;cursor:pointer;margin-right:0.8125rem;text-decoration:none;font-weight:bold;margin-bottom:0.5rem;transition:all 0.8s ease-in-out;position:relative}@media(min-width: 768px) and (max-width: 991px){button.svelte-q1khaj{font-size:0.79rem}}@media(min-width: 992px){button.svelte-q1khaj{margin-right:2.25rem;font-size:0.85rem}}button.Mercury.svelte-q1khaj:hover,button.Mercury.active.svelte-q1khaj{color:hsl(194deg, 48%, 49%)}button.Mercury.active.svelte-q1khaj::after,button.Mercury.nonActive.svelte-q1khaj::after{background:hsl(194deg, 48%, 49%)}button.Venus.svelte-q1khaj:hover,button.Venus.active.svelte-q1khaj{color:hsl(33deg, 82%, 61%)}button.Venus.active.svelte-q1khaj::after,button.Venus.nonActive.svelte-q1khaj::after{background:hsl(33deg, 82%, 61%)}button.Earth.svelte-q1khaj:hover,button.Earth.active.svelte-q1khaj{color:hsl(263deg, 67%, 51%)}button.Earth.active.svelte-q1khaj::after,button.Earth.nonActive.svelte-q1khaj::after{background:hsl(263deg, 67%, 51%)}button.Mars.svelte-q1khaj:hover,button.Mars.active.svelte-q1khaj{color:hsl(13deg, 63%, 51%)}button.Mars.active.svelte-q1khaj::after,button.Mars.nonActive.svelte-q1khaj::after{background:hsl(13deg, 63%, 51%)}button.Jupiter.svelte-q1khaj:hover,button.Jupiter.active.svelte-q1khaj{color:hsl(2deg, 68%, 53%)}button.Jupiter.active.svelte-q1khaj::after,button.Jupiter.nonActive.svelte-q1khaj::after{background:hsl(2deg, 68%, 53%)}button.Saturn.svelte-q1khaj:hover,button.Saturn.active.svelte-q1khaj{color:hsl(17deg, 73%, 46%)}button.Saturn.active.svelte-q1khaj::after,button.Saturn.nonActive.svelte-q1khaj::after{background:hsl(17deg, 73%, 46%)}button.Uranus.svelte-q1khaj:hover,button.Uranus.active.svelte-q1khaj{color:hsl(169deg, 73%, 44%)}button.Uranus.active.svelte-q1khaj::after,button.Uranus.nonActive.svelte-q1khaj::after{background:hsl(169deg, 73%, 44%)}button.Neptune.svelte-q1khaj:hover,button.Neptune.active.svelte-q1khaj{color:hsl(222deg, 87%, 56%)}button.Neptune.active.svelte-q1khaj::after,button.Neptune.nonActive.svelte-q1khaj::after{background:hsl(222deg, 87%, 56%)}@keyframes svelte-q1khaj-NavLinkActiveAnimation{from{bottom:-2.5rem}to{bottom:-1rem}}@keyframes svelte-q1khaj-NavLinkActiveAnimationReverse{from{bottom:-0.5rem;opacity:1}to{bottom:-5.5rem;opacity:0}}',
  map: null
};
const NavLink = (0, import_index_fafbd1de.c)(($$result, $$props, $$bindings, slots) => {
  let path;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_fafbd1de.b)(globalStore, (value) => $globalStore = value);
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$4);
  path = $globalStore.currentPlanet;
  $$unsubscribe_globalStore();
  return `<button class="${[
    (0, import_index_fafbd1de.e)((0, import_index_fafbd1de.d)(text)) + " svelte-q1khaj",
    (path !== text ? "nonActive" : "") + " " + (path === text ? "active" : "")
  ].join(" ").trim()}">${(0, import_index_fafbd1de.e)(text)}</button>`;
});
let planets = [
  { id: 0, name: "Mercury" },
  { id: 1, name: "Venus" },
  { id: 2, name: "Earth" },
  { id: 3, name: "Mars" },
  { id: 4, name: "Jupiter" },
  { id: 5, name: "Saturn" },
  { id: 6, name: "Uranus" },
  { id: 7, name: "Neptune" }
];
var Modal_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '.modal.svelte-1hx2t98 button.Neptune.svelte-1hx2t98::after,.modal.svelte-1hx2t98 button.Uranus.svelte-1hx2t98::after,.modal.svelte-1hx2t98 button.Saturn.svelte-1hx2t98::after,.modal.svelte-1hx2t98 button.Jupiter.svelte-1hx2t98::after,.modal.svelte-1hx2t98 button.Mars.svelte-1hx2t98::after,.modal.svelte-1hx2t98 button.Earth.svelte-1hx2t98::after,.modal.svelte-1hx2t98 button.Venus.svelte-1hx2t98::after,.modal.svelte-1hx2t98 button.Mercury.svelte-1hx2t98::after{content:"";width:1.375rem;height:1.375rem;border-radius:50%;position:absolute;left:-0.1rem;top:1px;text-align:flex-start;margin-left:-0.5rem}.modal.svelte-1hx2t98.svelte-1hx2t98{display:flex;position:fixed;inset:0;min-width:110%;height:100vh;background:#080826;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);justify-content:center;transform:translateX(-100%);transition:all 0.8s ease-in-out;z-index:11}.modal.active.svelte-1hx2t98.svelte-1hx2t98{transform:translateX(0%)}.modal-body.svelte-1hx2t98.svelte-1hx2t98{display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:1.75rem}.modal-content.svelte-1hx2t98.svelte-1hx2t98{margin-top:1.5rem}.modal.svelte-1hx2t98 button.svelte-1hx2t98{margin-bottom:3.4375rem;text-decoration:none;color:hsl(240deg, 6%, 54%);font-weight:bold;font-family:"Antonio", sans-serif;position:relative;cursor:pointer;font-size:1rem;width:100%}.modal.svelte-1hx2t98 button.svelte-1hx2t98:last-of-type{margin-bottom:1rem}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.svelte-1hx2t98{font-size:1.3rem}}.modal.svelte-1hx2t98 button.Mercury.svelte-1hx2t98::after{background-color:hsl(194deg, 48%, 49%)}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.Mercury.svelte-1hx2t98::after{left:0.3rem;top:3px}}.modal.svelte-1hx2t98 button.Mercury.active.svelte-1hx2t98{color:hsl(194deg, 48%, 49%)}.modal.svelte-1hx2t98 button.Venus.svelte-1hx2t98::after{background-color:hsl(33deg, 82%, 61%)}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.Venus.svelte-1hx2t98::after{left:0.3rem;top:3px}}.modal.svelte-1hx2t98 button.Venus.active.svelte-1hx2t98{color:hsl(33deg, 82%, 61%)}.modal.svelte-1hx2t98 button.Earth.svelte-1hx2t98::after{background-color:hsl(263deg, 67%, 51%)}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.Earth.svelte-1hx2t98::after{left:0.3rem;top:3px}}.modal.svelte-1hx2t98 button.Earth.active.svelte-1hx2t98{color:hsl(263deg, 67%, 51%)}.modal.svelte-1hx2t98 button.Mars.svelte-1hx2t98::after{background-color:hsl(13deg, 63%, 51%)}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.Mars.svelte-1hx2t98::after{left:0.3rem;top:3px}}.modal.svelte-1hx2t98 button.Mars.active.svelte-1hx2t98{color:hsl(13deg, 63%, 51%)}.modal.svelte-1hx2t98 button.Jupiter.svelte-1hx2t98::after{background-color:hsl(2deg, 68%, 53%)}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.Jupiter.svelte-1hx2t98::after{left:0.3rem;top:3px}}.modal.svelte-1hx2t98 button.Jupiter.active.svelte-1hx2t98{color:hsl(2deg, 68%, 53%)}.modal.svelte-1hx2t98 button.Saturn.svelte-1hx2t98::after{background-color:hsl(17deg, 73%, 46%)}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.Saturn.svelte-1hx2t98::after{left:0.3rem;top:3px}}.modal.svelte-1hx2t98 button.Saturn.active.svelte-1hx2t98{color:hsl(17deg, 73%, 46%)}.modal.svelte-1hx2t98 button.Uranus.svelte-1hx2t98::after{background-color:hsl(169deg, 73%, 44%)}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.Uranus.svelte-1hx2t98::after{left:0.3rem;top:3px}}.modal.svelte-1hx2t98 button.Uranus.active.svelte-1hx2t98{color:hsl(169deg, 73%, 44%)}.modal.svelte-1hx2t98 button.Neptune.svelte-1hx2t98::after{background-color:hsl(222deg, 87%, 56%)}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.Neptune.svelte-1hx2t98::after{left:0.3rem;top:3px}}.modal.svelte-1hx2t98 button.Neptune.active.svelte-1hx2t98{color:hsl(222deg, 87%, 56%)}')();
const css$3 = {
  code: '.modal.svelte-1hx2t98 button.Neptune.svelte-1hx2t98::after,.modal.svelte-1hx2t98 button.Uranus.svelte-1hx2t98::after,.modal.svelte-1hx2t98 button.Saturn.svelte-1hx2t98::after,.modal.svelte-1hx2t98 button.Jupiter.svelte-1hx2t98::after,.modal.svelte-1hx2t98 button.Mars.svelte-1hx2t98::after,.modal.svelte-1hx2t98 button.Earth.svelte-1hx2t98::after,.modal.svelte-1hx2t98 button.Venus.svelte-1hx2t98::after,.modal.svelte-1hx2t98 button.Mercury.svelte-1hx2t98::after{content:"";width:1.375rem;height:1.375rem;border-radius:50%;position:absolute;left:-0.1rem;top:1px;text-align:flex-start;margin-left:-0.5rem}.modal.svelte-1hx2t98.svelte-1hx2t98{display:flex;position:fixed;inset:0;min-width:110%;height:100vh;background:#080826;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);justify-content:center;transform:translateX(-100%);transition:all 0.8s ease-in-out;z-index:11}.modal.active.svelte-1hx2t98.svelte-1hx2t98{transform:translateX(0%)}.modal-body.svelte-1hx2t98.svelte-1hx2t98{display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:1.75rem}.modal-content.svelte-1hx2t98.svelte-1hx2t98{margin-top:1.5rem}.modal.svelte-1hx2t98 button.svelte-1hx2t98{margin-bottom:3.4375rem;text-decoration:none;color:hsl(240deg, 6%, 54%);font-weight:bold;font-family:"Antonio", sans-serif;position:relative;cursor:pointer;font-size:1rem;width:100%}.modal.svelte-1hx2t98 button.svelte-1hx2t98:last-of-type{margin-bottom:1rem}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.svelte-1hx2t98{font-size:1.3rem}}.modal.svelte-1hx2t98 button.Mercury.svelte-1hx2t98::after{background-color:hsl(194deg, 48%, 49%)}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.Mercury.svelte-1hx2t98::after{left:0.3rem;top:3px}}.modal.svelte-1hx2t98 button.Mercury.active.svelte-1hx2t98{color:hsl(194deg, 48%, 49%)}.modal.svelte-1hx2t98 button.Venus.svelte-1hx2t98::after{background-color:hsl(33deg, 82%, 61%)}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.Venus.svelte-1hx2t98::after{left:0.3rem;top:3px}}.modal.svelte-1hx2t98 button.Venus.active.svelte-1hx2t98{color:hsl(33deg, 82%, 61%)}.modal.svelte-1hx2t98 button.Earth.svelte-1hx2t98::after{background-color:hsl(263deg, 67%, 51%)}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.Earth.svelte-1hx2t98::after{left:0.3rem;top:3px}}.modal.svelte-1hx2t98 button.Earth.active.svelte-1hx2t98{color:hsl(263deg, 67%, 51%)}.modal.svelte-1hx2t98 button.Mars.svelte-1hx2t98::after{background-color:hsl(13deg, 63%, 51%)}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.Mars.svelte-1hx2t98::after{left:0.3rem;top:3px}}.modal.svelte-1hx2t98 button.Mars.active.svelte-1hx2t98{color:hsl(13deg, 63%, 51%)}.modal.svelte-1hx2t98 button.Jupiter.svelte-1hx2t98::after{background-color:hsl(2deg, 68%, 53%)}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.Jupiter.svelte-1hx2t98::after{left:0.3rem;top:3px}}.modal.svelte-1hx2t98 button.Jupiter.active.svelte-1hx2t98{color:hsl(2deg, 68%, 53%)}.modal.svelte-1hx2t98 button.Saturn.svelte-1hx2t98::after{background-color:hsl(17deg, 73%, 46%)}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.Saturn.svelte-1hx2t98::after{left:0.3rem;top:3px}}.modal.svelte-1hx2t98 button.Saturn.active.svelte-1hx2t98{color:hsl(17deg, 73%, 46%)}.modal.svelte-1hx2t98 button.Uranus.svelte-1hx2t98::after{background-color:hsl(169deg, 73%, 44%)}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.Uranus.svelte-1hx2t98::after{left:0.3rem;top:3px}}.modal.svelte-1hx2t98 button.Uranus.active.svelte-1hx2t98{color:hsl(169deg, 73%, 44%)}.modal.svelte-1hx2t98 button.Neptune.svelte-1hx2t98::after{background-color:hsl(222deg, 87%, 56%)}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1hx2t98 button.Neptune.svelte-1hx2t98::after{left:0.3rem;top:3px}}.modal.svelte-1hx2t98 button.Neptune.active.svelte-1hx2t98{color:hsl(222deg, 87%, 56%)}',
  map: null
};
const Modal = (0, import_index_fafbd1de.c)(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_fafbd1de.b)(globalStore, (value) => $globalStore = value);
  $$result.css.add(css$3);
  $$unsubscribe_globalStore();
  return `<aside class="${["modal svelte-1hx2t98", $globalStore.ModalActive ? "active" : ""].join(" ").trim()}"><div class="${"modal-content svelte-1hx2t98"}"><div class="${"modal-header"}"><h2>THE PLANETS</h2></div>
        <div class="${"modal-body svelte-1hx2t98"}"><p></p>
                ${(0, import_index_fafbd1de.g)(planets, (planet) => {
    return `<button class="${(0, import_index_fafbd1de.e)((0, import_index_fafbd1de.d)(planet.name)) + " svelte-1hx2t98"}">${(0, import_index_fafbd1de.e)(planet.name)}
                    </button>`;
  })}</div></div></aside>`;
});
var Burger_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".burger.svelte-15hfa1v.svelte-15hfa1v,.line.svelte-15hfa1v.svelte-15hfa1v{transition:all 0.8s ease-in-out;width:2.125rem}.burger.svelte-15hfa1v.svelte-15hfa1v{display:flex;justify-content:center;align-items:center;flex-direction:column;height:auto;cursor:pointer;z-index:12;margin:0 1.0625rem}@media(min-width: 768px){.burger.svelte-15hfa1v.svelte-15hfa1v{display:none;margin:0}}.burger.active.svelte-15hfa1v.svelte-15hfa1v{transform:rotate(360deg) translateX(10px) translateY(0.15rem)}.burger.active.svelte-15hfa1v .line.svelte-15hfa1v:nth-of-type(3){opacity:0}.burger.active.svelte-15hfa1v .line.svelte-15hfa1v:nth-of-type(2){transform:rotate(45deg) translateX(-9px)}.burger.active.svelte-15hfa1v .line.svelte-15hfa1v:nth-of-type(1){transform:rotate(-45deg) translateX(-9px)}.line.svelte-15hfa1v.svelte-15hfa1v{height:6px;background-color:hsl(240deg, 6%, 54%);margin-top:7px}")();
const css$2 = {
  code: ".burger.svelte-15hfa1v.svelte-15hfa1v,.line.svelte-15hfa1v.svelte-15hfa1v{transition:all 0.8s ease-in-out;width:2.125rem}.burger.svelte-15hfa1v.svelte-15hfa1v{display:flex;justify-content:center;align-items:center;flex-direction:column;height:auto;cursor:pointer;z-index:12;margin:0 1.0625rem}@media(min-width: 768px){.burger.svelte-15hfa1v.svelte-15hfa1v{display:none;margin:0}}.burger.active.svelte-15hfa1v.svelte-15hfa1v{transform:rotate(360deg) translateX(10px) translateY(0.15rem)}.burger.active.svelte-15hfa1v .line.svelte-15hfa1v:nth-of-type(3){opacity:0}.burger.active.svelte-15hfa1v .line.svelte-15hfa1v:nth-of-type(2){transform:rotate(45deg) translateX(-9px)}.burger.active.svelte-15hfa1v .line.svelte-15hfa1v:nth-of-type(1){transform:rotate(-45deg) translateX(-9px)}.line.svelte-15hfa1v.svelte-15hfa1v{height:6px;background-color:hsl(240deg, 6%, 54%);margin-top:7px}",
  map: null
};
const Burger = (0, import_index_fafbd1de.c)(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_fafbd1de.b)(globalStore, (value) => $globalStore = value);
  $$result.css.add(css$2);
  $$unsubscribe_globalStore();
  return `<div class="${["burger svelte-15hfa1v", $globalStore.ModalActive ? "active" : ""].join(" ").trim()}"><div class="${"line svelte-15hfa1v"}"></div>
    <div class="${"line svelte-15hfa1v"}"></div>
    <div class="${"line svelte-15hfa1v"}"></div></div>

${(0, import_index_fafbd1de.v)(Modal, "Modal").$$render($$result, {}, {}, {})}`;
});
var Nav_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => 'nav.svelte-9f41h0.svelte-9f41h0{width:100%}nav.svelte-9f41h0.svelte-9f41h0{display:flex;justify-content:center;align-items:center;background-color:hsl(240deg, 67%, 8%);background-image:url("/assets/background-stars.svg");border-bottom:1px solid hsl(240deg, 6%, 54%);overflow:hidden;height:5rem}@media(min-width: 768px){nav.svelte-9f41h0.svelte-9f41h0{justify-content:flex-start}}@media(min-width: 992px){nav.svelte-9f41h0.svelte-9f41h0{flex-direction:row;padding-bottom:1rem}}nav.svelte-9f41h0 h1.svelte-9f41h0{display:flex;justify-content:center;align-items:center;margin:1rem auto 0 1rem;font-family:"Spartan", sans-serif;font-size:2rem;color:white}@media(min-width: 992px){nav.svelte-9f41h0 h1.svelte-9f41h0{font-size:2.2rem;margin:1.5rem 0 0 1rem}}nav.svelte-9f41h0 .planet-links.svelte-9f41h0{display:none;align-items:center;margin-top:1.5rem}@media(min-width: 768px){nav.svelte-9f41h0 .planet-links.svelte-9f41h0{display:flex;margin:1rem 1rem 0 auto}}@media(min-width: 768px) and (max-width: 991px){nav.svelte-9f41h0 .planet-links.svelte-9f41h0{justify-content:space-evenly}}@media(min-width: 992px){nav.svelte-9f41h0 .planet-links.svelte-9f41h0{margin:1.5rem 0 0 auto}}')();
const css$1 = {
  code: 'nav.svelte-9f41h0.svelte-9f41h0{width:100%}nav.svelte-9f41h0.svelte-9f41h0{display:flex;justify-content:center;align-items:center;background-color:hsl(240deg, 67%, 8%);background-image:url("/assets/background-stars.svg");border-bottom:1px solid hsl(240deg, 6%, 54%);overflow:hidden;height:5rem}@media(min-width: 768px){nav.svelte-9f41h0.svelte-9f41h0{justify-content:flex-start}}@media(min-width: 992px){nav.svelte-9f41h0.svelte-9f41h0{flex-direction:row;padding-bottom:1rem}}nav.svelte-9f41h0 h1.svelte-9f41h0{display:flex;justify-content:center;align-items:center;margin:1rem auto 0 1rem;font-family:"Spartan", sans-serif;font-size:2rem;color:white}@media(min-width: 992px){nav.svelte-9f41h0 h1.svelte-9f41h0{font-size:2.2rem;margin:1.5rem 0 0 1rem}}nav.svelte-9f41h0 .planet-links.svelte-9f41h0{display:none;align-items:center;margin-top:1.5rem}@media(min-width: 768px){nav.svelte-9f41h0 .planet-links.svelte-9f41h0{display:flex;margin:1rem 1rem 0 auto}}@media(min-width: 768px) and (max-width: 991px){nav.svelte-9f41h0 .planet-links.svelte-9f41h0{justify-content:space-evenly}}@media(min-width: 992px){nav.svelte-9f41h0 .planet-links.svelte-9f41h0{margin:1.5rem 0 0 auto}}',
  map: null
};
const Nav = (0, import_index_fafbd1de.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="${"svelte-9f41h0"}"><h1 class="${"svelte-9f41h0"}">THE PLANETS</h1>
    <div class="${"planet-links svelte-9f41h0"}">${(0, import_index_fafbd1de.g)(planets, (planet) => {
    return `${(0, import_index_fafbd1de.v)(NavLink, "NavLink").$$render($$result, { text: planet.name }, {}, {})}`;
  })}</div>
    ${(0, import_index_fafbd1de.v)(Burger, "Burger").$$render($$result, {}, {}, {})}</nav>`;
});
async function getData(path) {
  const res = await fetch("./json/data.json");
  const data = await res.json();
  if (path) {
    let info = data.find((item) => {
      return item.name === path;
    });
    return info;
  } else {
    return data;
  }
}
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "section.svelte-1fagfe3.svelte-1fagfe3,.planetInfo.svelte-1fagfe3.svelte-1fagfe3,img.svelte-1fagfe3.svelte-1fagfe3,.information.svelte-1fagfe3.svelte-1fagfe3,.cards.svelte-1fagfe3.svelte-1fagfe3{display:grid}section.svelte-1fagfe3.svelte-1fagfe3{place-items:center;justify-content:center;width:100%;position:relative}section.svelte-1fagfe3 .planet.svelte-1fagfe3{display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;margin-top:0.5rem;height:100%;position:relative}@media(min-width: 992px){section.svelte-1fagfe3 .planet.svelte-1fagfe3{display:grid;grid-template-columns:1fr 1fr;margin-bottom:1.5rem}}section.svelte-1fagfe3 .planet .geology.svelte-1fagfe3{position:absolute;width:120px;top:18%}@media(min-width: 768px) and (max-width: 991px){section.svelte-1fagfe3 .planet .geology.svelte-1fagfe3{top:23%}}@media(min-width: 992px){section.svelte-1fagfe3 .planet .geology.svelte-1fagfe3{top:45%}}section.svelte-1fagfe3 .planet img.svelte-1fagfe3{max-width:18.75rem;margin-top:2rem;place-self:center}@media(min-width: 768px) and (max-width: 991px){section.svelte-1fagfe3 .planet img.svelte-1fagfe3{max-width:20rem}}@media(min-width: 992px){section.svelte-1fagfe3 .planet img.svelte-1fagfe3{max-width:23.75rem}}section.svelte-1fagfe3 .planet .information.svelte-1fagfe3{grid-template-columns:1fr;text-align:center;max-height:100%;margin-top:1rem}@media(min-width: 768px) and (max-width: 991px){section.svelte-1fagfe3 .planet .information.svelte-1fagfe3{grid-template-columns:1fr 1fr}}section.svelte-1fagfe3 .planet .information h4.svelte-1fagfe3{display:flex;justify-content:center;align-items:center;width:90%;min-height:11rem}@media(min-width: 992px){section.svelte-1fagfe3 .planet .information h4.svelte-1fagfe3{min-height:6rem}}@media(min-width: 992px){section.svelte-1fagfe3 .planet .information h1.svelte-1fagfe3{font-size:4rem}}section.svelte-1fagfe3 .planet .information .text.svelte-1fagfe3{display:flex;justify-content:center;align-items:center;flex-direction:column;color:white;text-decoration:none;line-height:24px;margin-top:0.75rem}section.svelte-1fagfe3 .planet .information .text a.svelte-1fagfe3{display:flex;margin-top:0.5rem;color:hsl(240deg, 6%, 54%);font-weight:bold;text-decoration:underline}section.svelte-1fagfe3 .planet .information .text a span.svelte-1fagfe3{font-weight:400;text-decoration:none}section.svelte-1fagfe3 .planet .information .text a img.svelte-1fagfe3{margin:0 0 0 0.5rem}section.svelte-1fagfe3 .planet .information .btns.svelte-1fagfe3{display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%}.cards.svelte-1fagfe3.svelte-1fagfe3{place-items:center;grid-template-columns:1fr;max-height:102%;margin-top:1.5rem;margin-bottom:2.5rem;width:100%}@media(min-width: 768px) and (max-width: 991px){.cards.svelte-1fagfe3.svelte-1fagfe3{grid-template-columns:repeat(2, 1fr)}}@media(min-width: 992px){.cards.svelte-1fagfe3.svelte-1fagfe3{grid-template-columns:repeat(4, 1fr)}}")();
const css = {
  code: "section.svelte-1fagfe3.svelte-1fagfe3,.planetInfo.svelte-1fagfe3.svelte-1fagfe3,img.svelte-1fagfe3.svelte-1fagfe3,.information.svelte-1fagfe3.svelte-1fagfe3,.cards.svelte-1fagfe3.svelte-1fagfe3{display:grid}section.svelte-1fagfe3.svelte-1fagfe3{place-items:center;justify-content:center;width:100%;position:relative}section.svelte-1fagfe3 .planet.svelte-1fagfe3{display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;margin-top:0.5rem;height:100%;position:relative}@media(min-width: 992px){section.svelte-1fagfe3 .planet.svelte-1fagfe3{display:grid;grid-template-columns:1fr 1fr;margin-bottom:1.5rem}}section.svelte-1fagfe3 .planet .geology.svelte-1fagfe3{position:absolute;width:120px;top:18%}@media(min-width: 768px) and (max-width: 991px){section.svelte-1fagfe3 .planet .geology.svelte-1fagfe3{top:23%}}@media(min-width: 992px){section.svelte-1fagfe3 .planet .geology.svelte-1fagfe3{top:45%}}section.svelte-1fagfe3 .planet img.svelte-1fagfe3{max-width:18.75rem;margin-top:2rem;place-self:center}@media(min-width: 768px) and (max-width: 991px){section.svelte-1fagfe3 .planet img.svelte-1fagfe3{max-width:20rem}}@media(min-width: 992px){section.svelte-1fagfe3 .planet img.svelte-1fagfe3{max-width:23.75rem}}section.svelte-1fagfe3 .planet .information.svelte-1fagfe3{grid-template-columns:1fr;text-align:center;max-height:100%;margin-top:1rem}@media(min-width: 768px) and (max-width: 991px){section.svelte-1fagfe3 .planet .information.svelte-1fagfe3{grid-template-columns:1fr 1fr}}section.svelte-1fagfe3 .planet .information h4.svelte-1fagfe3{display:flex;justify-content:center;align-items:center;width:90%;min-height:11rem}@media(min-width: 992px){section.svelte-1fagfe3 .planet .information h4.svelte-1fagfe3{min-height:6rem}}@media(min-width: 992px){section.svelte-1fagfe3 .planet .information h1.svelte-1fagfe3{font-size:4rem}}section.svelte-1fagfe3 .planet .information .text.svelte-1fagfe3{display:flex;justify-content:center;align-items:center;flex-direction:column;color:white;text-decoration:none;line-height:24px;margin-top:0.75rem}section.svelte-1fagfe3 .planet .information .text a.svelte-1fagfe3{display:flex;margin-top:0.5rem;color:hsl(240deg, 6%, 54%);font-weight:bold;text-decoration:underline}section.svelte-1fagfe3 .planet .information .text a span.svelte-1fagfe3{font-weight:400;text-decoration:none}section.svelte-1fagfe3 .planet .information .text a img.svelte-1fagfe3{margin:0 0 0 0.5rem}section.svelte-1fagfe3 .planet .information .btns.svelte-1fagfe3{display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%}.cards.svelte-1fagfe3.svelte-1fagfe3{place-items:center;grid-template-columns:1fr;max-height:102%;margin-top:1.5rem;margin-bottom:2.5rem;width:100%}@media(min-width: 768px) and (max-width: 991px){.cards.svelte-1fagfe3.svelte-1fagfe3{grid-template-columns:repeat(2, 1fr)}}@media(min-width: 992px){.cards.svelte-1fagfe3.svelte-1fagfe3{grid-template-columns:repeat(4, 1fr)}}",
  map: null
};
const Routes = (0, import_index_fafbd1de.c)(($$result, $$props, $$bindings, slots) => {
  let path;
  let content;
  let imageType;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_fafbd1de.b)(globalStore, (value) => $globalStore = value);
  let details = [
    {
      id: 0,
      content: "overview",
      image: "planet"
    },
    {
      id: 1,
      content: "structure",
      image: "internal"
    },
    { id: 2, content: "geology" }
  ];
  $$result.css.add(css);
  path = $globalStore.currentPlanet;
  content = "overview";
  imageType = "planet";
  $$unsubscribe_globalStore();
  return `${(0, import_index_fafbd1de.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
<main><section class="${"svelte-1fagfe3"}">${function(__value) {
    if ((0, import_index_fafbd1de.i)(__value)) {
      __value.then(null, import_index_fafbd1de.n);
      return `
    <p>Getting Planet Information, Please wait.....</p>
    `;
    }
    return function(planet) {
      return `
        <div class="${"planet svelte-1fagfe3"}"><div class="${"planetInfo svelte-1fagfe3"}">${content !== "geology" ? `<img${(0, import_index_fafbd1de.f)("src", planet.images[imageType], 0)}${(0, import_index_fafbd1de.f)("alt", planet.name, 0)} class="${"svelte-1fagfe3"}">` : `<img${(0, import_index_fafbd1de.f)("src", planet.images.planet, 0)}${(0, import_index_fafbd1de.f)("alt", planet.name, 0)} class="${"svelte-1fagfe3"}">
                    <img class="${"geology svelte-1fagfe3"}"${(0, import_index_fafbd1de.f)("src", planet.images.geology, 0)}${(0, import_index_fafbd1de.f)("alt", planet.name, 0)}>`}</div>

            <div class="${"information svelte-1fagfe3"}"><div class="${"planet-info"}"><h1 class="${"svelte-1fagfe3"}">${(0, import_index_fafbd1de.e)(planet.name)}</h1>
                    <div class="${"text svelte-1fagfe3"}"><h4 class="${"svelte-1fagfe3"}">${(0, import_index_fafbd1de.e)(planet[content].content)}</h4>
                        <a${(0, import_index_fafbd1de.f)("href", planet[content].source, 0)} class="${"svelte-1fagfe3"}"><span class="${"svelte-1fagfe3"}">Source:</span> Wikipedia
                            <img src="${"./assets/icon-source.svg"}" alt="${"icon"}" class="${"svelte-1fagfe3"}"></a></div></div>
                <div class="${"btns svelte-1fagfe3"}">${(0, import_index_fafbd1de.g)(details, (detail) => {
        return `${(0, import_index_fafbd1de.v)(Button, "Button").$$render($$result, {
          active: content === detail.content,
          text: detail.content
        }, {}, {})}`;
      })}</div></div></div>
        <div class="${"cards svelte-1fagfe3"}">${(0, import_index_fafbd1de.v)(Card, "Card").$$render($$result, {
        title: "Rotation Time",
        value: planet.rotation
      }, {}, {})}
            ${(0, import_index_fafbd1de.v)(Card, "Card").$$render($$result, {
        title: "Revolution Time",
        value: planet.revolution
      }, {}, {})}
            ${(0, import_index_fafbd1de.v)(Card, "Card").$$render($$result, {
        title: "Planet Radius",
        value: planet.radius
      }, {}, {})}
            ${(0, import_index_fafbd1de.v)(Card, "Card").$$render($$result, {
        title: "Average Temperature",
        value: planet.temperature
      }, {}, {})}</div>
    `;
    }(__value);
  }(getData(path))}</section></main>`;
});
