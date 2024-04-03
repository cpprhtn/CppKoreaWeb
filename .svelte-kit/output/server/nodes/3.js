

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/About/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.LRWqqx73.js","_app/immutable/chunks/scheduler.tdcquOLB.js","_app/immutable/chunks/index.O1SQKQIw.js"];
export const stylesheets = ["_app/immutable/assets/3.SrLKryTW.css"];
export const fonts = [];
