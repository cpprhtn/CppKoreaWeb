import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.PUScN-aJ.js","_app/immutable/chunks/scheduler.tdcquOLB.js","_app/immutable/chunks/index.O1SQKQIw.js"];
export const stylesheets = ["_app/immutable/assets/0.TOhhgauX.css"];
export const fonts = ["_app/immutable/assets/manrope-cyrillic-wght-normal.tc1pcmBl.woff2","_app/immutable/assets/manrope-greek-wght-normal.PilIel9p.woff2","_app/immutable/assets/manrope-vietnamese-wght-normal.rzxPwudx.woff2","_app/immutable/assets/manrope-latin-ext-wght-normal.-trWxN4o.woff2","_app/immutable/assets/manrope-latin-wght-normal.1panvsZo.woff2","_app/immutable/assets/jetbrains-mono-cyrillic-wght-normal.abYgcALZ.woff2","_app/immutable/assets/jetbrains-mono-greek-wght-normal.VtST8Y2j.woff2","_app/immutable/assets/jetbrains-mono-vietnamese-wght-normal.cvsqbrb2.woff2","_app/immutable/assets/jetbrains-mono-latin-ext-wght-normal.qJtheMis.woff2","_app/immutable/assets/jetbrains-mono-latin-wght-normal.AI7HGr_Q.woff2"];
