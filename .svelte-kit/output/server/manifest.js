export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["coreguidelines.png","cppstudy1.png","event.txt","favicon.png","goto.png","logo.png"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.a0_x6wj1.js","app":"_app/immutable/entry/app.dX7EzMSA.js","imports":["_app/immutable/entry/start.a0_x6wj1.js","_app/immutable/chunks/scheduler.tdcquOLB.js","_app/immutable/chunks/singletons.5hxBYJhp.js","_app/immutable/entry/app.dX7EzMSA.js","_app/immutable/chunks/scheduler.tdcquOLB.js","_app/immutable/chunks/index.O1SQKQIw.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
