import{r,j as t,m as u,C as i}from"./index-9PPMthEs.js";const p="_asideButton_1pfgu_1",d="_active_1pfgu_23",n={asideButton:p,active:d},l=r.memo(({content:s,iconClasses:e,active:o,onClick:a})=>{const c=[n.asideButton,o?n.active:void 0].join(" ");return t.jsxs("button",{className:c,onClick:a,children:[t.jsx("i",{className:e}),t.jsx("span",{children:s})]})}),m=u.injectEndpoints({endpoints:s=>({fetchUser:s.query({query:e=>({url:"/summary",params:{id:e},responseHandler:"content-type"}),providesTags:[{type:"Records"}]})})}),{useFetchUserQuery:x}=m,y=()=>x(r.useContext(i));export{l as A,y as u};