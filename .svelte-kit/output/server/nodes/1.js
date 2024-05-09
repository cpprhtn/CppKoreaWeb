

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5iq-2d_B.js","_app/immutable/chunks/scheduler.tdcquOLB.js","_app/immutable/chunks/index.O1SQKQIw.js","_app/immutable/chunks/singletons.5hxBYJhp.js"];
export const stylesheets = ["_app/immutable/assets/1.XsIJZhal.css"];
export const fonts = [];
