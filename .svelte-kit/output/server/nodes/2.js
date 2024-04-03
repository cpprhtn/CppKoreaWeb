

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.sd_q1xxK.js","_app/immutable/chunks/scheduler.tdcquOLB.js","_app/immutable/chunks/index.O1SQKQIw.js"];
export const stylesheets = ["_app/immutable/assets/2.LL_6rrDK.css"];
export const fonts = [];
