

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Events/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.1a8MhlWO.js","_app/immutable/chunks/scheduler.tdcquOLB.js","_app/immutable/chunks/index.O1SQKQIw.js"];
export const stylesheets = ["_app/immutable/assets/4.6xuXIQCy.css"];
export const fonts = [];
