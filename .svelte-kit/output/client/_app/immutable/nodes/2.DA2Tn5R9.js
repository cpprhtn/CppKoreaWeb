import{s as z,f as I,n as M,r as A}from"../chunks/scheduler.tdcquOLB.js";import{S as K,i as P,g as p,s as x,h as d,j as C,f as h,c as E,x as k,k as v,l as _,a as f,y as g,z as w}from"../chunks/index.O1SQKQIw.js";const q=(i,{duration:a=1,delay:r=0}={})=>{const n={opacity:[0,1]},o={fill:"both",duration:a*1e3,delay:r*1e3,easing:"ease-in-out"},e=i.animate(n,o);e.onfinish=()=>{i.dispatchEvent(new CustomEvent("finish"))}};function S(i){let a,r,n,o,e,l,u="C++ KOREA에 오신것을 환영합니다.",m,c,b="C++ Korea는 C++의 저변확대를 위한 보급에 힘쓰는 단체입니다.",y,D;return{c(){a=p("div"),r=x(),n=p("div"),o=x(),e=p("main"),l=p("h1"),l.textContent=u,m=x(),c=p("p"),c.textContent=b,this.h()},l(t){a=d(t,"DIV",{class:!0,style:!0}),C(a).forEach(h),r=E(t),n=d(t,"DIV",{style:!0}),C(n).forEach(h),o=E(t),e=d(t,"MAIN",{class:!0,style:!0});var s=C(e);l=d(s,"H1",{class:!0,"data-svelte-h":!0}),k(l)!=="svelte-7q2118"&&(l.textContent=u),m=E(s),c=d(s,"P",{class:!0,"data-svelte-h":!0}),k(c)!=="svelte-pabfx"&&(c.textContent=b),s.forEach(h),this.h()},h(){v(a,"class","water-drop svelte-lpnhcr"),_(a,"transform","translate("+i[0]+"%, "+i[1]+"%)"),_(n,"height","800px"),v(l,"class","heading margin-text-center capitalize svelte-lpnhcr"),v(c,"class","subheading margin-text-center svelte-lpnhcr"),v(e,"class","container place-content-center text-behind svelte-lpnhcr"),_(e,"width","80%")},m(t,s){f(t,a,s),f(t,r,s),f(t,n,s),f(t,o,s),f(t,e,s),g(e,l),g(e,m),g(e,c),y||(D=[w(a,"click",i[3]),I(q.call(null,l,{duration:.3,delay:.8})),I(q.call(null,c,{duration:.3,delay:.8})),w(c,"finish",i[4])],y=!0)},p(t,[s]){s&3&&_(a,"transform","translate("+t[0]+"%, "+t[1]+"%)")},i:M,o:M,d(t){t&&(h(a),h(r),h(n),h(o),h(e)),y=!1,A(D)}}}function V(i,a,r){let n,o=-50,e=-20;function l(){r(0,o=Math.random()*10),r(1,e=Math.random()*10)}function u(){setInterval(()=>{l()},20)}return u(),[o,e,n,l,()=>n.play()]}class j extends K{constructor(a){super(),P(this,a,V,S,z,{})}}export{j as component};
