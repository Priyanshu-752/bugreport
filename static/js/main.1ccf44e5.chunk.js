(this.webpackJsonpbugreport=this.webpackJsonpbugreport||[]).push([[0],{23:function(e,t,r){},25:function(e,t,r){"use strict";r.r(t);var c=r(5),s=r.n(c),n=r(14),a=r.n(n),i=(r(23),r(6)),j=r.n(i),d=(r(8),r(1));var b=r(10);var l=e=>{let{setIsAdding:t,setIsAuthenticated:r}=e;return Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"Pay Per Bug Report"})})};var o=e=>{let{bugReports:t}=e;return Object(d.jsx)("div",{className:"contain-table",children:Object(d.jsxs)("table",{className:"striped-table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Email"}),Object(d.jsx)("th",{children:"Bug Information"}),Object(d.jsx)("th",{children:"Bug Type"}),Object(d.jsx)("th",{children:"Drive Link"}),Object(d.jsx)("th",{children:"Environment Description"}),Object(d.jsx)("th",{children:"Timestamp"})]})}),Object(d.jsx)("tbody",{children:t.length>0?t.map((e=>{var t;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.bug_information}),Object(d.jsx)("td",{children:e.bug_type}),Object(d.jsx)("td",{children:Object(d.jsx)("a",{href:e.drive_link,target:"_blank",rel:"noopener noreferrer",children:e.drive_link})}),Object(d.jsx)("td",{children:e.environment_description}),Object(d.jsx)("td",{children:new Date(1e3*(null===(t=e.timestamp)||void 0===t?void 0:t.seconds)).toLocaleString()})]},e.id)})):Object(d.jsx)("tr",{children:Object(d.jsx)("td",{colSpan:7,className:"text-center",children:"No bug reports available"})})})]})})},h=r(9),O=r(15);const u=Object(O.a)({apiKey:"AIzaSyCf9edDYmHyz_-jHLvjaBhl1UyyajDm-G8",authDomain:"gigs-and-teams.firebaseapp.com",projectId:"gigs-and-teams",storageBucket:"gigs-and-teams.firebasestorage.app",messagingSenderId:"652675199093",appId:"1:652675199093:web:baf98df4872ecfce13c83c",measurementId:"G-30NCG92VFK"}),x=Object(h.c)(u);var m=e=>{let{setIsAuthenticated:t}=e;const[r,s]=Object(c.useState)([]);return Object(c.useEffect)((()=>{(async()=>{try{const e=(await Object(h.b)(Object(h.a)(x,"bugReports"))).docs.map((e=>Object(b.a)({id:e.id},e.data())));s(e)}catch(e){console.error("Error fetching bug reports:",e),j.a.fire({icon:"error",title:"Error",text:"Failed to fetch data from Firestore. Please try again later."})}})()}),[]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(l,{setIsAuthenticated:t}),Object(d.jsx)(o,{bugReports:r})]})};var p=()=>{const[e,t]=Object(c.useState)(null);return Object(c.useEffect)((()=>{t(JSON.parse(localStorage.getItem("is_authenticated")))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(m,{setIsAuthenticated:t})})};a.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.1ccf44e5.chunk.js.map