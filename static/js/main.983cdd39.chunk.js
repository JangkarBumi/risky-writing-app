(this["webpackJsonprisky-writing-app"]=this["webpackJsonprisky-writing-app"]||[]).push([[0],{22:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),i=n.n(r),o=n(15),s=n.n(o),l=n(8),a=n(2),j=(n(22),n(10)),u=i.a.createContext();function d(){return Object(r.useContext)(u)}function b(t){var e=t.children,n=[150,250,500,750,1e3],i=Object(r.useState)(n[2]),o=Object(j.a)(i,2),s={wordGoalOption:n,wordGoal:o[0],setWordGoal:o[1]};return Object(c.jsx)(u.Provider,{value:s,children:e})}var h=function(){var t=d().wordGoal,e=Object(r.useState)(""),n=Object(j.a)(e,2),i=n[0],o=n[1],s=Object(r.useState)(!1),a=Object(j.a)(s,2),u=a[0],b=a[1],h=i.length>0?i.split(" ").length:0;Object(r.useEffect)((function(){var t=setTimeout((function(){return b(!0)}),5e3);return function(){clearTimeout(t)}}),[i]);return u?Object(c.jsxs)("div",{className:"pop-up",children:[Object(c.jsx)("h2",{children:"Your writing has died."}),Object(c.jsxs)("p",{children:["I wrote ",h," words using The Risky Writing App - until it killed my writing."]}),Object(c.jsx)(l.b,{to:"/write",onClick:function(){b(!1),o("")},children:"Try Again"})]}):Object(c.jsxs)("div",{className:"editor-container",children:[Object(c.jsxs)("h2",{className:"block",children:["Goal : ",t," Words"]}),i.length>=t?Object(c.jsx)("button",{onClick:function(){var t=document.createElement("a"),e=new Blob([i],{type:"text/plain"});t.href=URL.createObjectURL(e),t.download="risky-writing-app.txt",document.body.appendChild(t),t.click()},children:"Download"}):null,Object(c.jsx)("input",{className:"editor-input",type:"text",name:"text",value:i,onChange:function(t){o(t.target.value)}}),Object(c.jsxs)("h2",{className:"block",children:[h," Words"]})]})},O=function(){var t=d(),e=t.wordGoalOption,n=t.wordGoal,r=t.setWordGoal;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Don't stop typing, or all is lost."}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return r(e[0])},children:"150"}),Object(c.jsx)("button",{onClick:function(){return r(e[1])},children:"250"}),Object(c.jsx)("button",{onClick:function(){return r(e[2])},children:"500"}),Object(c.jsx)("button",{onClick:function(){return r(e[3])},children:"750"}),Object(c.jsx)("button",{onClick:function(){return r(e[4])},children:"1000"}),Object(c.jsxs)("h3",{children:["Goal : ",n," Words"]})]}),Object(c.jsx)(l.b,{to:"/write",children:"Start Writing"})]})};var p=function(){return Object(c.jsx)(l.a,{children:Object(c.jsx)(b,{children:Object(c.jsxs)(a.c,{children:[Object(c.jsx)(a.a,{exact:!0,path:"/risky-writing-app",component:O}),Object(c.jsx)(a.a,{exact:!0,path:"/write",component:h})]})})})};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.983cdd39.chunk.js.map