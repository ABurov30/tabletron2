let u;const m=new Uint8Array(16);function l(){if(!u&&(u=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(m)}const n=[];for(let e=0;e<256;++e)n.push((e+256).toString(16).slice(1));function h(e,o=0){return n[e[o+0]]+n[e[o+1]]+n[e[o+2]]+n[e[o+3]]+"-"+n[e[o+4]]+n[e[o+5]]+"-"+n[e[o+6]]+n[e[o+7]]+"-"+n[e[o+8]]+n[e[o+9]]+"-"+n[e[o+10]]+n[e[o+11]]+n[e[o+12]]+n[e[o+13]]+n[e[o+14]]+n[e[o+15]]}const p=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),i={randomUUID:p};function d(e,o,t){if(i.randomUUID&&!o&&!e)return i.randomUUID();e=e||{};const c=e.random||(e.rng||l)();if(c[6]=c[6]&15|64,c[8]=c[8]&63|128,o){t=t||0;for(let a=0;a<16;++a)o[t+a]=c[a];return o}return h(c)}const s={number:0,id:0,code:"mock",scheduledFrom:Date.now(),scheduledUntil:Date.now(),warehouse:{id:d(),code:"mock"},vehicleNumber:"123",yardLocation:{id:d(),code:"mock"},route:{id:d(),code:"mock"},current:!0,closed:!1,type:"Appointment",_children:[{id:d(),code:"mockDaughter",scheduledFrom:Date.now(),scheduledUntil:Date.now(),warehouse:{id:d(),code:"mock"},vehicleNumber:"123",yardLocation:{id:d(),code:"mock"},route:{id:d(),code:"mock"},current:!0,closed:!1,type:"Appointment"},{id:d(),code:"mockDaughter1",scheduledFrom:Date.now(),scheduledUntil:Date.now(),warehouse:{id:d(),code:"mock"},vehicleNumber:"123",yardLocation:{id:d(),code:"mock"},route:{id:d(),code:"mock"},current:!0,closed:!1,type:"Appointment"}]},r=100,y={content:Array(20).fill(s).map((e,o)=>{const t={...e};return t.number=o,t.id=o,t.code=`appointment${Math.floor(Math.random()*r)}`,t.warehouse={id:d(),code:`warehouse${Math.floor(Math.random()*r)}`},t.route={id:d(),code:`route${Math.floor(Math.random()*r)}`},t.yardLocation={id:d(),code:`yardLocation${Math.floor(Math.random()*r)}`},t.vehicleNumber=Math.floor(Math.random()*r),t.scheduledFrom="10/10/1982",t.scheduledUntil="10/10/1982",t.closed=Math.random()<.5,t.current=Math.random()<.5,t.type=Math.random()<.5?"Appointment":"NotAppointment",t}),pageable:{sort:[],offset:0,pageNumber:0,pageSize:500,paged:!0,unpaged:!1},totalElements:2,totalPages:1,last:!0,size:500,number:0,sort:[],numberOfElements:2,first:!0,empty:!1},g=y;export{g as d};