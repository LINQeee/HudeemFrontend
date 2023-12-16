import{r as p,j as r,C as I}from"./index-isj_SKQs.js";const b=e=>{const t=new Date(e).toLocaleString("default",{day:"numeric",month:"short"}).split(" ");return`${t[0]} ${k(t[1])}`},B=e=>{const s=new Date(e);return`${b(e)} ${s.getFullYear()}`},Y=e=>new Date(e).toLocaleDateString("default"),k=e=>e.charAt(0).toUpperCase()+e.slice(1),G=(e,s)=>(e.setDate(e.getDate()+s),e),M="_actionButton_1wnb8_1",C="_primary_1wnb8_19",j="_secondary_1wnb8_28",A={actionButton:M,primary:C,secondary:j};var h=(e=>(e[e.PRIMARY=0]="PRIMARY",e[e.SECONDARY=1]="SECONDARY",e))(h||{});const z=p.memo(({label:e,iconClasses:s,styleType:t,onClick:a,height:u})=>{const o=[A.actionButton,t===h.PRIMARY?A.primary:void 0,t===h.SECONDARY?A.secondary:void 0].join(" "),l=n=>{n.preventDefault(),a()};return r.jsxs("button",{className:o,onClick:l,style:{height:u},children:[r.jsx("i",{className:s}),r.jsx("span",{children:e})]})}),U=p.memo(({children:e,popupVisible:s})=>r.jsx(I,{in:s,timeout:200,classNames:"popup",unmountOnExit:!0,children:e})),w="_checkbox_1aps3_1",P={checkbox:w},E=()=>new Date().toISOString()+Math.random()*500,X=p.memo(({value:e,onChange:s})=>{const t=u=>{s(u.currentTarget.checked)},a=E();return r.jsxs("div",{className:P.checkbox,children:[r.jsx("label",{htmlFor:a,children:"select checkbox"}),r.jsx("input",{id:a,type:"checkbox",checked:e,onChange:t}),r.jsx("i",{className:"fa-regular fa-check"})]})}),_=e=>{const[s,t]=p.useState(e);return[s,n=>t([...s,n]),n=>t(s.filter(d=>d!==n)),n=>t([...s,...n]),()=>t([])]},O="_textInput_13v6p_1",N="_error_13v6p_75",x={textInput:O,error:N};var c=(e=>(e.WEIGHT="WEIGHT",e.DATE="DATE",e.EMAIL="EMAIL",e.PASSWORD="PASSWORD",e))(c||{}),i=(e=>(e.TEXT="text",e.NUMBER="number",e.DATE="date",e.PASSWORD="password",e.EMAIL="email",e))(i||{});const W=e=>{switch(e){case c.DATE:return i.DATE;case c.WEIGHT:return i.NUMBER;case c.PASSWORD:return i.PASSWORD;case c.EMAIL:return i.EMAIL;default:return i.TEXT}},v=e=>{const[s,t]=p.useState(!1);return e!==c.PASSWORD?[]:[s?i.TEXT:i.PASSWORD,s?r.jsx("i",{className:"fa-regular fa-eye",onClick:()=>t(!1)}):r.jsx("i",{className:"fa-regular fa-eye-slash",onClick:()=>t(!0)})]},H=e=>[t=>{t.currentTarget.type===i.DATE&&t.currentTarget.showPicker()},e===c.DATE?r.jsx("i",{className:"fa-regular fa-calendar-days"}):void 0],Z=p.memo(({autocomplete:e,type:s,label:t,value:a,setValue:u,error:o,removeError:l})=>{const[n,d]=v(s),[m,g]=H(s),S=[x.textInput,o?x.error:void 0].join(" "),T=R=>{u(R.currentTarget.value),o&&l&&l(o)},D=E();return r.jsxs("div",{className:S,children:[r.jsx("label",{htmlFor:D,children:t}),r.jsx("input",{id:D,type:s===c.PASSWORD?n:W(s),required:!0,value:a,onChange:T,onClick:m,autoComplete:e||""}),g,d,r.jsx("span",{children:o==null?void 0:o.errorMessage})]})}),y=({value:e,type:s})=>{switch(s){case c.EMAIL:if(f(e))return{inputType:s,errorMessage:"Введите почту!"};if(!F(e))return{inputType:s,errorMessage:"Некорректная почта!"};break;case c.DATE:if(f(e))return{inputType:s,errorMessage:"Введите дату!"};if(!Date.parse(e))return{inputType:s,errorMessage:"Некорректная дата!"};if(new Date(e)>new Date)return{inputType:s,errorMessage:"Дата из будущего!"};break;case c.WEIGHT:if(f(e))return{inputType:s,errorMessage:"Введите вес!"};if(parseFloat(e)<0)return{inputType:s,errorMessage:"Вес не может быть отрицательным!"};break;case c.PASSWORD:if(f(e))return{inputType:s,errorMessage:"Введите пароль!"}}},V=e=>{const s=[];return e.forEach(t=>{const a=y(t);a&&s.push(a)}),s},f=e=>e===null||e.match(/^ *$/)!==null,F=e=>e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)!==null,L=e=>typeof e=="object"&&"inputType"in e&&"errorMessage"in e,q=e=>{const[s,t,a,u]=_([]);return[s,a,l=>{const n=V(l);if(n.length)u(n);else{const d=e();d instanceof Promise&&d.then(m=>{L(m)&&t(m)})}}]};export{z as A,X as C,c as F,U as P,h as S,B as a,b,Z as c,_ as d,Y as f,G as p,q as u};
