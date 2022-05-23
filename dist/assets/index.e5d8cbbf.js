var P=Object.defineProperty,V=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var b=(r,e,a)=>e in r?P(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,N=(r,e)=>{for(var a in e||(e={}))S.call(e,a)&&b(r,a,e[a]);if(C)for(var a of C(e))H.call(e,a)&&b(r,a,e[a]);return r},L=(r,e)=>V(r,j(e));var q=(r,e)=>{var a={};for(var n in r)S.call(r,n)&&e.indexOf(n)<0&&(a[n]=r[n]);if(r!=null&&C)for(var n of C(r))e.indexOf(n)<0&&H.call(r,n)&&(a[n]=r[n]);return a};var f=(r,e,a)=>(b(r,typeof e!="symbol"?e+"":e,a),a);import{r as d,j as t,C as B,O as T,a as o,B as k,b as g,F as y,u as z,L as R,R as I,c as x,d as E,S as D,M as v,e as U,f as F,g as Y,h as K,i as Q,k as W,l as w}from"./vendor.59f27cf4.js";const G=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}};G();class J extends d.exports.Component{render(){return t(B,{md:6,className:"mx-auto mt-2",children:t(T,{})})}}var X="https://ibrahimisa.github.io/quran/assets/arrow.ed45a95d.png";function Z({heading:r}){const{name_complex:e,translated_name:a,revelation_place:n,verses_count:s}=r;return o("div",{className:"d-flex border-bottom-2 border-dark justify-content-between",children:[o("div",{children:[e," (",a.name,")"]})," ",o("div",{className:"opacity-75",children:[n," ",o(k,{bg:"dark",children:[s," verses"]})]})]})}function _({children:r,style:e}){return o("div",{className:"container",children:[t("div",{className:"container__content",style:e,children:r}),t("div",{className:"container__fading"})]})}function ee({verses:r}){return String.prototype.toArabic=function(){return this.replace(/\d/g,e=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[e])},t("div",{className:"fs-2 mb-3 text-center",dir:"rtl",lang:"ar",style:{fontFamily:"arabic-font"},children:t(_,{style:{maxHeight:"50vh"},children:r.map(e=>o("span",{children:[e.text_uthmani,`${e.verse_key.replace(/\d*:/,"")}`.toArabic()]}))})})}function M(r,e,{url:a,query:n}){return class extends d.exports.Component{constructor(i){super(i);f(this,"fetchData",async()=>(await g.get(`${a}/${this.state.id}${n?"?"+n+"=":"/"}${this.props.chapterId}`)).data);f(this,"handleChange",i=>{this.setState({id:i.target.value},()=>{this.fetchData().then(l=>this.setState({data:l}))})});this.state={id:e,data:{}}}componentDidMount(){this.fetchData().then(i=>{this.setState({data:i})})}render(){const m=this.props,{chapterId:i}=m,l=q(m,["chapterId"]),{id:p,data:h}=this.state;return t(r,L(N({},l),{id:p,data:h,handleChange:this.handleChange}))}}}function te({audioUrl:r}){return o("audio",{src:r,controls:!0,className:"rounded",children:[" ","Your browser doesn't support audio files."]})}function ae({recitations:r,data:{audio_file:e},id:a,handleChange:n}){return o("div",{className:"d-flex justify-content-between gap-4",children:[t(te,{audioUrl:e==null?void 0:e.audio_url}),t(y,{value:a,onChange:n,size:"sm",className:"w-50",children:r.map(({id:s,reciter_name:i,style:l})=>o("option",{value:s,children:[i," (",l,")"]},s))})]})}var re=M(ae,2,{url:"https://api.quran.com/api/v4/chapter_recitations",query:null});class ne extends d.exports.Component{constructor(e){super(e);f(this,"translationData");this.state={},this.liRefs=new Array(this.props.numberOfVerses).fill(null).map(a=>d.exports.createRef())}componentDidUpdate(e,a){this.liRefs.forEach((n,s)=>{var i;return n.current.innerHTML=(i=this.translationData[s])==null?void 0:i.text})}render(){var i;console.log("liref",this.liRefs);const{translations:e,id:a,data:n,handleChange:s}=this.props;return this.translationData=(i=n.translations)!=null?i:[],t("div",{children:o("details",{children:[t("summary",{children:o("div",{className:"d-inline-flex justify-content-between",children:[t("span",{children:"Translation"}),t(y,{value:a,onChange:s,size:"sm w-50",children:e.map(({id:l,name:p,language_name:h})=>o("option",{value:l,children:[p," (",h,")"]}))})]})}),t("ol",{children:this.liRefs.map(l=>t("li",{ref:l}))})]})})}}var se=M(ne,131,{url:"https://api.quran.com/api/v4/quran/translations",query:"chapter_number"});function ie(){const[r,e]=d.exports.useState({}),[a,n]=d.exports.useState(!1),{heading:s,verses:i,recitations:l,translations:p}=r,h=z().chapterId,m=async()=>{const u={};let c=null;return c=await g.get(`https://api.quran.com/api/v4/chapters/${h}?language=en`),u.heading=c.data.chapter,c=await g.get(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${h}`),u.verses=c.data.verses,c=await g.get("https://api.quran.com/api/v4/resources/recitations?language=en"),u.recitations=c.data.recitations,c=await g.get("https://api.quran.com/api/v4/resources/translations"),u.translations=c.data.translations,u};return d.exports.useEffect(()=>{m().then(u=>{e(u),n(!0)})},[]),o("div",{children:[t(R,{to:"/",children:t("img",{src:X,alt:"back to home arrow",style:{width:"30px"}})}),t(I,{loaded:a,children:t("div",{className:"pt-3",children:o(x,{children:[t(x.Header,{children:t(Z,{heading:s})}),o(x.Body,{children:[t(ee,{verses:i}),t(se,{translations:p,numberOfVerses:i==null?void 0:i.length,chapterId:h})]}),t(x.Footer,{children:t(re,{recitations:l,chapterId:h})})]})})})]})}var oe="https://ibrahimisa.github.io/quran/assets/favicon.9e5099f5.png";function le({searchChangeHandler:r,searchValue:e}){return t("div",{children:t(E,{type:"search",placeholder:"Search for suras",value:e,onChange:r,className:"px-3"})})}function ce({city:r,cityChangeHandler:e,order:a,orderChangeHandler:n}){return o(D,{direction:"horizontal",gap:2,children:[t("h4",{children:"Filter:"}),o(y,{size:"sm",value:a,onChange:n,children:[t("option",{value:"ascending",children:"Ascending"}),t("option",{value:"descending",children:"Descending"}),t("option",{value:"revelation_order",children:"Revelation Order"})]}),o(y,{size:"sm",value:r,onChange:e,children:[t("option",{value:"all",children:"All"}),t("option",{value:"makkah",children:"Makkah"}),t("option",{value:"madinah",children:"Madinah"})]})]})}function de(){const r=d.exports.useContext($),{searchChangeHandler:e,searchValue:a,city:n,order:s,cityChangeHandler:i,orderChangeHandler:l}=r;return t("div",{children:o(D,{gap:2,children:[o("div",{className:"d-flex gap-2 justify-center align-items-center",children:[t("h1",{className:"display-4",children:"Quran"}),t("img",{src:oe,alt:"quran picture",style:{width:"50px"}})]}),t(le,{searchChangeHandler:e,searchValue:a}),t(ce,{city:n,order:s,cityChangeHandler:i,orderChangeHandler:l})]})})}var O="https://ibrahimisa.github.io/quran/assets/info.6ace5f2b.png",he="https://ibrahimisa.github.io/quran/assets/info-hover.a1382a02.png";function ue({style:r,id:e,name:a}){const[n,s]=d.exports.useState(!1),[i,l]=d.exports.useState({}),p=()=>s(!1),h=()=>s(!0),m=d.exports.useRef(null),u=c=>{g.get(`https://api.quran.com/api/v4/chapters/${c}/info?language=en`).then(A=>{l(A.data.chapter_info)})};return o("div",{style:r,children:[o(v,{show:n,centered:!0,onHide:()=>{p()},children:[t(v.Header,{closeButton:!0,children:t(v.Title,{children:a})}),t(v.Body,{children:o(_,{style:{height:"60vh"},children:[o("p",{ref:m,children:["loading...",(()=>{m.current&&(m.current.innerHTML=i.text)})()]}),o("p",{children:["~",i.source]})]})}),t(v.Footer,{children:t(U,{variant:"secondary",onClick:p,children:"Close"})})]}),t("img",{src:O,alt:"info",style:{width:"50px",height:"50px"},onMouseOver:c=>{c.target.src=he},onMouseOut:c=>{c.target.src=O},onClick:c=>{h(),u(e)}})]})}function pe({id:r,name:e,englishName:a,versesCount:n,place:s}){return o("div",{className:"chapter bg-light my-1 p-3 border border-1 border-dark rounded",style:{position:"relative"},children:[o(R,{to:`${r}`,className:"d-flex align-items-center gap-3",children:[t("h2",{children:r}),o("div",{children:[o("h3",{className:"display-5 fs-4",children:[e,"(",a,")"]})," ",o("div",{className:"text-dark opacity-75 fs-6",children:[t("span",{children:s}),t(k,{bg:"dark",className:"ms-2",children:o("i",{children:[n," verses"]})})]})]})]}),t(ue,{style:{position:"absolute",top:"50%",right:"10px",transform:"translateY(-50%"},id:r,name:e})]})}function me({chapters:r}){const e=!!r.length;return t(_,{style:{height:"400px"},children:t(I,{loaded:e,children:r.map(a=>t(pe,{id:a.id,name:a.name_simple,englishName:a.translated_name.name,versesCount:a.verses_count,place:a.revelation_place},a.id))})})}const $=F.createContext(),fe=$.Provider;class ge extends F.Component{constructor(e){super(e);f(this,"allChapters");f(this,"searchChangeHandler",e=>{this.setState({searchValue:e.target.value},()=>{const a=this.state.searchValue.toLowerCase();let n=this.allChapters;a&&(n=n.slice().filter(s=>s.name_simple.toLowerCase().includes(a)||s.translated_name.name.toLowerCase().includes(a))),this.setState({chapters:n})})});f(this,"cityChangeHandler",e=>{this.setState({city:e.target.value},()=>{const a=this.state.city.toLocaleLowerCase();let n;a!=="all"?n=this.allChapters.filter(s=>s.revelation_place.toLowerCase()===a):n=this.allChapters,this.setState({chapters:n})})});f(this,"orderChangeHandler",e=>{this.setState({order:e.target.value},()=>{const a=this.state.order.toLocaleLowerCase();let n=this.state.chapters.slice();a==="revelation_order"?n=n.sort((s,i)=>s.revelation_order-i.revelation_order):n=n.reverse(),this.setState({chapters:n})})});this.state={chapterId:0,chapters:[],searchValue:"",city:"all",order:"ascending"}}componentDidMount(){g.get("https://api.quran.com/api/v4/chapters").then(e=>{this.allChapters=e.data.chapters,this.setState({chapters:e.data.chapters})})}render(){const{chapterId:e,chapters:a,searchValue:n,city:s,order:i}=this.state;return o(Y,{children:[t(fe,{value:{searchChangeHandler:this.searchChangeHandler,searchValue:n,city:s,order:i,cityChangeHandler:this.cityChangeHandler,orderChangeHandler:this.orderChangeHandler},children:t(de,{})}),t(me,{chapters:a})]})}}K.render(t(Q,{children:t(W,{children:o(w,{path:"/",element:t(J,{}),children:[t(w,{index:!0,element:t(ge,{})}),t(w,{path:":chapterId",element:t(ie,{})})]})})}),document.getElementById("root"));
