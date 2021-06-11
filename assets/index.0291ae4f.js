var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,i=Object.prototype.propertyIsEnumerable,n=(t,a,i)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,o=(e,o)=>{for(var r in o||(o={}))t.call(o,r)&&n(e,r,o[r]);if(a)for(var r of a(o))i.call(o,r)&&n(e,r,o[r]);return e};import{W as r,$ as l,q as m,I as s,m as c,u as d,a as f,A as p,b as h,c as g,d as u,G as x,e as b}from"./vendor.f6b94a45.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const i=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,o)=>{const r=new URL(e,i);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const l=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){o(new Error(`Failed to import: ${e}`)),n(m)},onload(){a(self[t].moduleMap[r]),n(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/assets/");r`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`,r`
  0% {
    transform: scale(0) rotate(0deg);
  }
  50% {
    transform: scale(1) rotate(90deg);
  }
  100% {
    transform: scale(0) rotate(180deg);
  }
`,r`
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  `,r`
    0%, 100% {
      transform: translate3d(0,-25px,0);
    }
    50% {
      transform: translate3d(0,5px,0);
    }
  `,r`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;const v=r`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`,w=r`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`,E=l`
    *{  
        cursor: none;
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
   
    body{
        background: #0e153a;;
    }
    ::-webkit-scrollbar {
        display: none; 
     }
     .bounce{
         animation-name:${r`  
from {
 transform: scale3d(1, 1, 1);
}

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

40% {
 transform: scale3d(0.75, 1.25, 1);
}

50% {
 transform: scale3d(1.15, 0.85, 1);
}

65% {
 transform: scale3d(.95, 1.05, 1);
}

75% {
 transform: scale3d(1.05, .95, 1);
}

to {
 transform: scale3d(1, 1, 1);
}
`};
     }
     .bounceIn{
        animation-name: ${r`
 0%   { transform: scale(1,1)      translateY(0);opacity:0; }
 10%  { transform: scale(1.1,.9)   translateY(0); }
 30%  { transform: scale(.9,1.1)   translateY(-14px); }
 50%  { transform: scale(1.05,.95) translateY(0);}
 57%  { transform: scale(1,1)      translateY(-7px);}
 64%  { transform: scale(1,1)      translateY(0); }
 100% { transform: scale(1,1)      translateY(0);opacity:1;}
`};
        animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
     }
   
`,y={midColor:"#cf8bf3",textColor:"#e2f3f5",primaryColor:"#0E153A",iconColor:"#838383",accentColor:"#22D1EE",navBackGround:"#3D5AF1",navbarWidth:"60px",navbarWidthMD:"60px",headingColor:"white",headingLG:"4rem",headingMD:"3rem",headingSM:"2rem",textLG:"1.5rem",textMD:"1.3rem",textSM:"1rem",fontText:"'Mali',sans-serif",fontHeading:"'Fredoka One', cursive"},$="1440px",L={mobileS:`(max-width: ${"320px"})`,mobileM:`(max-width: ${"375px"})`,mobileL:`(max-width: ${"430px"})`,tablet:`(max-width: ${"834px"})`,laptop:`(max-width: ${"1280px"})`,laptopL:`(max-width: ${$})`,desktop:`(max-width: ${"2560px"})`},k=m.div.attrs({id:"container"})`
    height: 100%;
    width: 100%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    gap: 6rem;
    @media ${L.tablet} {
        gap: 3rem;
    }
    scroll-padding-block-start: 2rem;
    
`,C=({children:e})=>s.createElement(k,{className:"scroll-container"},e),M=m.span.attrs({className:"word"})`
    display: inline-block;
    font-weight: "bold";
    font-size: ${({theme:e})=>e.headingLG};
    color: ${({color:e})=>e};
    font-family: "Fredoka One", cursive;
    /* margin: 0 4px; */
    opacity: 0;
    transition: transform 0.3s ease-out;
    animation-duration: 1s;
    animation-direction: both;
    animation-fill-mode: forwards;
    /* text-shadow: 10px 10px 10px rgba(0,0,0,0.5); */

    @media ${L.laptopL} {
        font-size: ${({theme:e})=>e.headingLG};
    }

    @media ${L.tablet} {
        font-size: ${({theme:e})=>e.headingMD};
    }
    @media ${L.mobileL} {
        font-size: ${({theme:e})=>e.headingLG};
    }
    @media ${L.mobileM} {
        font-size: ${({theme:e})=>e.headingMD};
    }
    @media ${L.mobileS} {
        font-size: ${({theme:e})=>e.headingSM};
    }
`,z=(e,t)=>Math.floor(Math.random()*(t-e))+e,S=({text:e,id:t=0,index:a=-1})=>(s.useEffect((()=>{(e=>{const t=document.getElementById(e.toString()),a=null==t?void 0:t.getBoundingClientRect().top,i=()=>{const t=document.querySelectorAll(".word");let a=300;t.forEach((t=>{var i;(null==(i=t.parentElement)?void 0:i.id)===e.toString()&&(setTimeout((()=>{t.style.opacity="1",t.classList.add("bounceIn")}),a),a+=200)}))};a&&a<900&&100===e&&i(),document.getElementById("container").addEventListener("scroll",(()=>{const a=null==t?void 0:t.getBoundingClientRect().top;a&&a<700&&e>=200&&i()}))})(t)}),[]),s.createElement("span",{id:t.toString()},Array.from({length:e.length},((t,i)=>{let n="white";return i===a&&(n=y.accentColor),s.createElement(M,{onClick:e=>{e.currentTarget.classList.remove("bounceIn"),e.currentTarget.classList.add("bounce")},onMouseEnter:e=>{e.currentTarget.classList.remove("bounceIn"),e.currentTarget.classList.add("bounce")},onAnimationEnd:e=>{e.currentTarget.classList.remove("bounce")},key:i,color:n},e.charAt(i))})))),j=m(c.button).attrs({className:"focusable"})`
    padding: 1.3rem;
    width: 300px;
    background: none;
    position: relative;
    color: ${({theme:e})=>e.textColor};
    font-size: ${({theme:e})=>e.textLG};
    font-family: ${({theme:e})=>e.fontText};
    outline: none;
    border: solid 2px white;
    border-radius: 12px;
    &:hover {
        /* cursor: pointer; */
    }
    @media ${L.laptopL} {
        padding: 1rem;
        font-size: ${({theme:e})=>e.textSM};
        max-width: 200px;
    }

    svg {
        position: absolute;
        z-index: -1;
        height: 100%;
        width: 100%;
    }
`,T={initial:{boxShadow:"none"},hover:{boxShadow:"0px 0px 20px 1px #22D1EE",backgroundColor:"rgba(255, 255, 255, 0.1)",transition:{duration:.8,repeat:1/0,repeatType:"mirror"}},tap:{scale:1.2}},I=({children:e,onClick:t})=>s.createElement(j,{variants:T,initial:"initial",whileHover:"hover",whileTap:"tap",onClick:t},e),F=m.p`
    color: ${({theme:e})=>e.textColor};
    font-size: ${({theme:e,asHeading:t})=>t?e.headingLG:e.textLG};
    font-family: "Mali", sans-serif;

    @media ${L.laptopL} {
        font-size: ${({theme:e,asHeading:t})=>t?e.headingLG:e.textLG};
    }

    @media ${L.laptop} {
        font-size: ${({theme:e,asHeading:t})=>t?e.headingMD:e.textSM};
    }
    @media ${L.mobileM} {
        font-size: ${({theme:e,asHeading:t})=>t?e.headingSM:e.textSM};
    }
`,B=m.div.attrs({className:"bottom-border"})`
    margin: ${({marginH:e})=>`0 ${e||0}px`};
    /* border-bottom: ${({theme:e})=>`dashed 2px ${e.accentColor}`}; */
    position: relative;
    padding-bottom: 2rem;
    @media ${L.tablet} {
        margin: ${({marginH:e})=>`0 ${e?60:0}px`};
    }
    @media ${L.mobileL} {
        margin: ${({marginH:e})=>`0 ${e?20:0}px`};
    }

    &::after {
        position: absolute;
        width: 200px;
        top: 40%;
        margin-left: 3rem;
        content: "";
        border-bottom: ${({theme:e})=>`dashed 2px ${e.accentColor}`};
    }

    @media ${L.mobileL} {
        &::after {
            display: none;
            width: 100%;
        }
    }
`,G=(e,t)=>{const[a,i]=s.useState(!1),n=d(),{ref:o,inView:r}=f();return s.useEffect((()=>(r&&!a&&n.start(t).then((()=>{i(!0)})),r||a||n.start(e),n.stop)),[n,r]),{ref:o,controls:n}},O={hidden:{opacity:0,y:"20%"},visible:{opacity:1,y:"0",transition:{type:"spring",duration:.8,delay:1,stiffness:120,staggerChildren:.1}}},D=({children:e})=>{const{ref:t,controls:a}=G("hidden","visible");return s.createElement(c.div,{variants:O,initial:"hidden",animate:a,className:"slide-in-box",ref:t},e)},H=m.div`
    min-width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr 60px;
`,A=m.div`
    padding: 0 100px;
    display: flex;
    justify-content: center;
    min-height: 400px;
    min-width: 500px;
    position: relative;
    flex-direction: column;

    @media ${L.tablet} {
        padding: 0 40px;
    }

    @media ${L.mobileL} {
        min-height: 100%;
        padding: 0 20px;
        min-width: 100%;
    }
`;const R=p`
    display: flex;
    flex-direction: column;
`,N=p`
    display: flex;
    align-items: center;
    justify-content: center;
`,V=m(c.nav).attrs({id:"navbar"})`
    padding: 0px 28px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    max-width: ${$};
    width: 100%;
    height: ${({theme:e})=>e.navbarWidth};
    background: rgba(24, 24, 24, 0.4);
    transition: all 0.3s ease-out;
    backdrop-filter: blur(5px);
    z-index: 19;
    @media ${L.laptopL} {
        /* width: ${({theme:e})=>e.navbarWidthMD}; */
    }
    @media ${L.tablet} {
        padding: 0 20px;
        width: 100vw;
        height: ${({theme:e})=>e.navbarWidth};
        flex-direction: row;
    }
    box-shadow: 7px 8px 20px rgba(0, 0, 0, 0.4);
    @media ${L.mobileL} {
        padding: 0 20px;
    }
    li {
        list-style: none;
    }
    border-bottom: solid 2px ${({theme:e})=>e.accentColor};
`,Y=m(c.a).attrs({href:"/"})`
    text-decoration: none;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    & img {
        height: 60px;
        width: 60px;
        @media ${L.laptopL} {
            height: 55px;
            width: 55px;
        }

        @media ${L.laptop} {
            height: 50px;
            width: 50px;
        }

        @media ${L.tablet} {
            height: 40px;
            width: 40px;
        }
    }
    @media ${L.laptopL} {
        height: 55px;
        width: 55px;
    }

    @media ${L.laptop} {
        height: 50px;
        width: 50px;
    }

    @media ${L.tablet} {
        height: 40px;
        width: 40px;
    }

    @media ${L.mobileL} {
        display: none;
    }
`,W=m(c.a)`
    ${N};
    text-decoration: none;
    color: ${({theme:e})=>e.iconColor};
    height: 40px;
    width: 100px;
    /* &.active {
        color: ${({theme:e})=>e.accentColor};
    } */
    img {
        display: none;
        height: 30px;
        width: 30px;
    }
    p {
        font-family: ${({theme:e})=>e.fontText};
        font-size: ${({theme:e})=>e.textMD};
    }
    &:hover {
        /* cursor: pointer; */

        p {
            text-shadow: 0px 0px 5px ${({theme:e})=>e.accentColor};
            color: ${({theme:e})=>e.accentColor};
            display: block;
        }
    }

    @media ${L.laptopL} {
        p {
            font-size: ${({theme:e})=>e.textMD};
        }
    }

    @media ${L.laptop} {
        p {
            font-size: ${()=>"1rem"};
        }
    }

    @media ${L.tablet} {
        p {
            font-size: ${({theme:e})=>e.textSM};
            font-family: ${({theme:e})=>e.fontText};
        }
    }
    @media ${L.mobileL} {
        width: 100%;
        img {
            display: block;
        }
        p {
            display: none;
            font-size: ${({theme:e})=>e.textSM};
            font-family: ${({theme:e})=>e.fontText};
        }
    }
`,_=m(c.ul)`
    ${N};
    width: 100%;
    flex: 2;

    @media ${L.tablet} {
        justify-content: center;
    }

    @media ${L.mobileL} {
        justify-content: space-around;
    }
`,P=m(_)`
    max-height: 150px;
    flex: 0;
    overflow-y: hidden;
    @media ${L.laptopL} {
        max-height: 130px;
        gap: 20px;
    }
    @media ${L.mobileL} {
        display: none;
    }
`,U=m(W)`
    width: 20px;
    margin-right: 5px;
    img {
        transform: scale(0.8);
        display: block;
    }
    &:hover {
    }
`,q=s.createContext({value:!1,setValue:()=>{}}),X=({children:e})=>{const[t,a]=s.useState(!1);return s.useEffect((()=>{((e,t,a,i)=>{if(void 0!==a)return;const n=localStorage.getItem(e);if(null!==n){let e;try{e=JSON.parse(n)}catch(o){e=n}t(e)}else t(i)})("mi-10:false",a,t,!0)}),[t]),s.createElement(q.Provider,{value:{value:t,setValue:a}},e)};const J=[{icon:"/assets/home.919a4e26.svg",title:"Home"},{icon:"/assets/account.c01befed.svg",title:"About"},{icon:"/assets/experience.7b3439b3.svg",title:"Experince"},{icon:"/assets/trophy.b0cd990e.svg",title:"Work"},{icon:"/assets/envelope.c9702bf3.svg",title:"Contact"}],Z={initial:{opacity:0,y:"100%"},animate:{opacity:1,y:"0",transition:{type:"tween",duration:.4,staggerChildren:.2}},exit:{opacity:0}},K={hide:{y:"-100%",trasition:{type:"tween",ease:"easeOut",duration:1}},show:{y:"0%",trasition:{type:"tween",ease:"easeOut",duration:1}}},Q=()=>{const e=d();let t=!1,a=0;const i=i=>{const n=i.target.scrollTop,o=document.getElementById("navbar");n>600&&(o.style.position="fixed"),n<600&&(o.style.position="static"),n>a&&n>600&&!t?(t=!0,e.start("hide")):n<a&&n>600&&t&&(t=!1,e.start("show")),a=n};return s.useEffect((()=>{const e=document.getElementById("container");return e.addEventListener("scroll",i),()=>e.removeEventListener("scroll",i)}),[]),s.createElement(h,null,s.createElement(V,{variants:K,animate:e},s.createElement(c.div,o({},Z),s.createElement(Y,null,s.createElement("img",{src:"/assets/logo.6f822b44.png",alt:"logo"}))),s.createElement(_,{variants:Z,initial:"initial",animate:"animate"},J.map(((e,t)=>s.createElement("li",{key:t.toString()},s.createElement(W,{className:0===t?"active":"",id:t.toString(),onClick:()=>{return e=t,void J.forEach(((t,a)=>{var i,n,o;if(a===e){null==(i=document.getElementById(a.toString()))||i.classList.add("active");try{let e="start";0===a&&(e="center"),null==(n=document.getElementById((100*(a+1)).toString()))||n.scrollIntoView({block:e,behavior:"smooth"})}catch(r){alert(r.error)}}else null==(o=document.getElementById(a.toString()))||o.classList.remove("active")}));var e},variants:Z},s.createElement("img",{src:e.icon,alt:"nav-icon"}),s.createElement("p",null,e.title)))))),s.createElement(c.div,{variants:Z,initial:"initial",animate:"animate"},s.createElement(P,null,s.createElement("li",null,s.createElement(U,{as:c.div,variants:Z},s.createElement("img",{src:"/assets/blog.43b72e40.svg",alt:"nav-icon"}))),s.createElement("li",null,s.createElement(U,{as:c.div,variants:Z},s.createElement("img",{src:"/assets/code.608805b1.svg",alt:"nav-icon"}))),s.createElement("li",null,s.createElement(U,{as:c.div,variants:Z},s.createElement(te,null)))))))},ee={animate:{y:["-100%","0%"],opacity:[0,1],transition:{type:"tween",ease:"easeOut",duration:.7}}},te=()=>{const{value:e,toggleSound:t}=(()=>{const{value:e,setValue:t}=s.useContext(q);return{value:e,toggleSound:()=>{const a=!e;localStorage.setItem("mi-10",a.toString()),t(a)}}})(),a=d();return s.useEffect((()=>{a.start("animate")}),[e]),s.createElement(c.img,{src:e?"/assets/mute.e9eca2c8.svg":"/assets/volume.2e0477af.svg",alt:"nav-icon",variants:ee,animate:a,onTap:()=>{t()}})},ae=()=>s.createElement(H,null,s.createElement(A,null,s.createElement(D,null,s.createElement(F,{asHeading:!0},"Hi,"),s.createElement(S,{text:"I'm Miten,",id:100,index:4}),s.createElement(F,{asHeading:!0},"On a way to be creative."),s.createElement(F,null,"I am self-taught, independent developer from"),s.createElement(F,null,"Gujarat, India."),s.createElement("p",null," "),s.createElement("p",null," "),s.createElement(I,{onClick:()=>{var e;null==(e=document.getElementById("500"))||e.scrollIntoView({behavior:"smooth"})}},"Say Hello 👋"))),s.createElement(Q,null)),ie=m.div.attrs({className:"focusable"})`
    position: relative;
    &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        height: 100%;
        width: 100%;
        transition: all 0.2s ease-in;
    }
    &:hover {
        &::after {
            border: solid 2px white;
            border-radius: 12px;
            background-color: rgba(255, 255, 255, 0.1);
            box-shadow: 0px 0px 10px 1px ${({theme:e})=>e.accentColor};
        }
    }
`,ne=e=>s.createElement(ie,null,e.children),oe=m(c.img).attrs({id:"profile"})`
    place-self: center;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    transform: translateX(200%);
    transition: all 2s ease;
    opacity: 0;
    object-fit: contain;
    @media ${L.laptop} {
        max-width: 300px;
        max-height: 300px;
    }
    @media ${L.mobileL} {
        max-width: 280px;
        max-height: 280px;
    }

    @media ${L.mobileS} {
        max-width: 230px;
        max-height: 230px;
    }
`,re={hidden:{opacity:0,x:"100%"},visible:{opacity:1,x:"0",transition:{type:"spring",stiffness:120,duration:.8}}},le=()=>{const{ref:e,controls:t}=G("hidden","visible");return s.createElement(ne,null,s.createElement(oe,{src:"https://firebasestorage.googleapis.com/v0/b/myportfolio2692.appspot.com/o/projects%2Fme.jpg?alt=media&token=89b96c1b-1890-491b-ab6b-c9374cfb72b8",loading:"lazy",alt:"profile",ref:e,variants:re,initial:"hidden",animate:t}))},me=m.section`
    /* min-height: 100vh; */
    min-width: 100%;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    /* border: solid 2px white; */
    @media ${L.tablet} {
        padding: 0 40px;
    }

    @media ${L.mobileL} {
        padding: 0 20px;
    }
`,se="(prefers-reduced-motion: no-preference)",ce="undefined"==typeof window,de=()=>!!ce||!window.matchMedia(se).matches;const fe=e=>({id:String(z(1e4,99999)),createdAt:Date.now(),color:e,size:z(10,20),style:{top:z(0,100)+"%",left:z(0,100)+"%"}}),pe=m.span`
    display: inline-block;
    position: relative;
`,he=m.span`
    position: absolute;
    display: block;
    @media (prefers-reduced-motion: no-preference) {
        animation: ${w} 700ms forwards;
    }
`,ge=m.svg`
    display: block;
    @media (prefers-reduced-motion: no-preference) {
        animation: ${v} 1000ms linear;
    }
`,ue=m.strong`
    position: relative;
    z-index: 1;
    color: ${({theme:e})=>e.accentColor};
    font-family: ${({theme:e})=>e.fontText};

    button & {
        color: ${({theme:e})=>"white"};
    }
    button:hover & {
        color: ${({theme:e})=>e.textColor};
    }
`,xe=e=>{var{color:n="#FFC700",textColor:r,children:l}=e,m=((e,n)=>{var o={};for(var r in e)t.call(e,r)&&n.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&a)for(var r of a(e))n.indexOf(r)<0&&i.call(e,r)&&(o[r]=e[r]);return o})(e,["color","textColor","children"]);const[c,d]=s.useState((()=>((e,t,a=1)=>{const i=[];void 0===t&&(t=e,e=0);for(let n=e;n<t;n+=a)i.push(n);return i})(3).map((()=>fe(n))))),f=function(){const[e,t]=s.useState(de);return s.useEffect((()=>{const e=window.matchMedia(se),a=e=>{t(!e.matches)};return e.addListener(a),()=>{e.removeListener(a)}}),[]),e}();return((e,t,a)=>{const i=s.useRef(1),n=s.useRef(e);s.useEffect((()=>{n.current=e})),s.useEffect((()=>{if("number"==typeof t&&"number"==typeof a){const e=()=>{const o=z(t,a);i.current=window.setTimeout((()=>{n.current(),e()}),o)};e()}return()=>window.clearTimeout(i.current)}),[t,a]),s.useCallback((function(){window.clearTimeout(i.current)}),[])})((()=>{const e=fe(n),t=Date.now(),a=c.filter((e=>t-e.createdAt<750));a.push(e),d(a)}),f?null:50,f?null:450),s.createElement(pe,o({},m),c.map((e=>s.createElement(be,{key:e.id,color:e.color,size:e.size,style:e.style}))),s.createElement(ue,{style:{color:r}},l))},be=({size:e,color:t,style:a})=>s.createElement(he,{style:a},s.createElement(ge,{width:e,height:e,viewBox:"0 0 68 68",fill:"none"},s.createElement("path",{d:"M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z",fill:t}))),ve=m.div`
    flex: 1;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    place-items: center;
    @media ${L.tablet} {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`,we=m.div`
    ${N}
    flex-direction:column;
    max-width: 50vw;

    @media ${L.tablet} {
        max-width: 100%;
    }
`,Ee=()=>s.createElement(me,{style:{minHeight:"100vh",overflow:"hidden"}},s.createElement(B,null,s.createElement(S,{text:"About Me",id:200})),s.createElement(ve,null,s.createElement(we,null,s.createElement(D,null,s.createElement(F,null,"Hey Folks👋! I am ",s.createElement(xe,null,"Miten Gajjar"),". A 20years old Software Engineer powered by VS Code and Coffee, also a weeb who loves anime and gaming. I am new to community so I prefer to keep learning, continue challenging myself, and do interesting things. I am passionate about building excellent web and mobile apps that improves the lives of people around me."))),s.createElement(le,null))),ye=m.div`
    flex: 1;
    height: 100%;
    width: 100%;
    ${R};
`,$e=m.div`
    flex: 1;
    position: relative;
    height: 100%;
    width: 100%;
    ${R};
    /* justify-content: center; */
`,Le=m.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`,ke=m.div.attrs({id:"parallex-wrapper"})`
    position: absolute;
    z-index: 2;
    flex: 1;
    height: 100%;
    width: 100%;
    display: flex;
    overflow: hidden;
`,Ce=m.div.attrs({id:"parallex"})`
    position: relative;
    transition: all 0.1s linear;
    height: 100%;
    width: 100%;
`,Me=m.div`
    position: absolute;
    top: ${({y:e})=>`${e}%`};
    left: ${({x:e})=>`${e}%`};
    opacity: 0.5;
    font-weight: bold;
    font-family: "Mali", sans-serif;
    color: ${({theme:e})=>e.accentColor};

    @media ${L.mobileL} {
        font-size: ${()=>"1.2rem"};
    }
`;m.img`
    height: 150px;
    width: 150px;
`;const ze=m.svg`
    height: 64px;
    width: 64px;

    transform: scale(2.34);
    @media ${L.laptop} {
        transform: scale(1.2);
    }
    @media ${L.tablet} {
        transform: scale(1.5);
    }
    @media ${L.mobileL} {
        transform: scale(0.9);
    }
`,Se=()=>{const e=()=>{const e=document.getElementById("parallex"),t=window.innerHeight/2;let a=e.getBoundingClientRect().top;a=10-.16*(a-t),e.style.transform=`translate3d(0,${a}px,0)`};return s.useEffect((()=>{const t=document.getElementById("container");return t.addEventListener("scroll",e),()=>{t.removeEventListener("scroll",e)}}),[]),s.createElement(me,{style:{minHeight:"100vh"}},s.createElement(B,null,s.createElement(S,{text:"Experince",id:300})),s.createElement(ye,null,s.createElement(D,null,s.createElement(F,{style:{marginTop:"2rem"}},"I spend my most of time by creating UI and Interfaces for websites & applications. My goal as a developer is to write less code more efficiently, using the power of modern frameworks (React and Flutter).")),s.createElement($e,null,s.createElement(ke,null,s.createElement(Ce,null,s.createElement(Me,{x:5,y:10,size:1.8},"Dart"),s.createElement(Me,{x:85,y:20,size:1.6},"CSS"),s.createElement(Me,{x:50,y:80,size:.8},"HTML"),s.createElement(Me,{x:40,y:10,size:1.8},"Flutter"),s.createElement(Me,{x:75,y:70,size:1.1},"Firebase"),s.createElement(Me,{x:12,y:74,size:.8},"MongoDB"),s.createElement(Me,{x:25,y:50,size:1.4},"Figma"),s.createElement(Me,{x:70,y:30,size:.8},"Gatsby"))),s.createElement(Le,null,s.createElement(ze,{viewBox:"0 0 32 32"},s.createElement("g",{transform:"matrix(.05696 0 0 .05696 .647744 2.43826)",fill:"none",fillRule:"evenodd"},s.createElement("circle",{r:"50.167",cy:"237.628",cx:"269.529",fill:"#22D1EE"}),s.createElement("g",{stroke:"#22D1EE",strokeWidth:"24"},s.createElement("path",{d:"M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z"}),s.createElement("path",{d:"M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z"}),s.createElement("path",{d:"M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z"})))),s.createElement(ze,{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 32 32",preserveAspectRatio:"xMidYMid",fill:"#22D1EE",transform:"scale(2.34)",className:"skill-svg"},s.createElement("path",{d:"M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z"})),s.createElement(ze,{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",transform:"scale(2.34)",className:"skill-svg"},s.createElement("path",{d:"M55.094 35.56c-2.238.013-4.175.55-5.8 1.35-.6-1.188-1.2-2.225-1.3-3-.113-.9-.25-1.45-.113-2.525s.763-2.6.763-2.725c-.012-.113-.138-.663-1.425-.675s-2.4.25-2.525.588a14.36 14.36 0 0 0-.538 1.913c-.225 1.175-2.575 5.338-3.913 7.526-.438-.85-.813-1.6-.888-2.2-.113-.9-.25-1.45-.113-2.525s.763-2.6.763-2.725c-.012-.113-.138-.663-1.425-.675s-2.4.25-2.525.588-.263 1.138-.538 1.913c-.263.775-3.388 7.726-4.2 9.538-.413.925-.775 1.663-1.038 2.163s-.012.038-.037.088l-.35.663v.012c-.175.313-.363.613-.45.613-.062 0-.188-.838.025-1.988.463-2.413 1.588-6.176 1.575-6.313 0-.062.213-.725-.725-1.063-.913-.338-1.238.225-1.313.225s-.138.2-.138.2 1.013-4.238-1.938-4.238c-1.85 0-4.4 2.013-5.663 3.85l-6.376 3.488-.138-.15C11.178 35.66 4.565 32.96 4.84 27.835c.1-1.863.75-6.776 12.7-12.726 9.788-4.875 17.627-3.538 18.99-.563 1.938 4.25-4.188 12.15-14.364 13.29-3.875.438-5.913-1.063-6.426-1.625-.538-.588-.613-.613-.813-.5-.325.175-.125.7 0 1.013.3.788 1.55 2.188 3.675 2.888 1.863.613 6.413.95 11.914-1.175 6.163-2.388 10.976-9.013 9.563-14.55-1.438-5.638-10.788-7.488-19.627-4.35C15.19 11.41 9.5 14.334 5.4 18.172.515 22.722-.26 26.698.064 28.348c1.138 5.888 9.25 9.726 12.5 12.564l-.45.25c-1.625.8-7.813 4.038-9.363 7.463-1.75 3.875.275 6.663 1.625 7.038 4.175 1.163 8.45-.925 10.763-4.363 2.3-3.438 2.025-7.9.963-9.938l-.038-.075 1.275-.75c.825-.488 1.638-.938 2.35-1.325-.4 1.088-.688 2.375-.838 4.25-.175 2.2.725 5.05 1.913 6.176.525.488 1.15.5 1.538.5 1.375 0 2-1.138 2.688-2.5.85-1.663 1.6-3.588 1.6-3.588s-.938 5.213 1.625 5.213c.938 0 1.875-1.213 2.3-1.838v.012s.025-.038.075-.125c.1-.15.15-.238.15-.238v-.025c.375-.65 1.213-2.138 2.463-4.6 1.613-3.175 3.163-7.15 3.163-7.15s.15.975.613 2.575c.275.95.875 1.988 1.338 3l-.6.825.012.013a35.62 35.62 0 0 1-.988 1.25c-1.275 1.525-2.8 3.263-3 3.763-.238.588-.188 1.025.275 1.375.338.25.938.3 1.575.25 1.15-.075 1.95-.363 2.35-.538a8.14 8.14 0 0 0 2.025-1.063c1.25-.925 2.013-2.238 1.938-3.988-.038-.963-.35-1.913-.738-2.813l.338-.5c1.975-2.888 3.5-6.063 3.5-6.063s.15.975.613 2.575c.238.813.713 1.7 1.138 2.575-1.85 1.513-3.013 3.263-3.413 4.413-.738 2.125-.163 3.088.925 3.313.488.1 1.188-.125 1.713-.35.65-.213 1.438-.575 2.163-1.113 1.25-.925 2.45-2.213 2.388-3.95-.038-.8-.25-1.588-.538-2.338 1.575-.65 3.613-1.025 6.2-.713 5.563.65 6.663 4.125 6.45 5.575s-1.375 2.25-1.763 2.5c-.388.238-.513.325-.475.5.05.263.225.25.563.2.463-.075 2.925-1.188 3.025-3.863.15-3.438-3.113-7.188-8.9-7.15zM12.19 50.025c-1.838 2.013-4.425 2.775-5.525 2.125-1.188-.688-.725-3.65 1.538-5.788 1.375-1.3 3.163-2.5 4.338-3.238l1.138-.688c.075-.05.125-.075.125-.075.088-.05.188-.113.288-.175.838 3.05.038 5.725-1.9 7.838zm13.44-9.138c-.638 1.563-1.988 5.575-2.8 5.35-.7-.188-1.125-3.225-.138-6.226.5-1.513 1.563-3.313 2.188-4.013 1.013-1.125 2.113-1.5 2.388-1.038.325.6-1.238 4.95-1.638 5.926zm11.088 5.3c-.275.138-.525.238-.638.163-.088-.05.113-.238.113-.238s1.388-1.488 1.938-2.175l1.088-1.388v.15c0 1.8-1.725 3-2.5 3.488zm8.55-1.95c-.2-.15-.175-.613.5-2.063.263-.575.863-1.538 1.9-2.45.125.375.2.738.188 1.075-.013 2.25-1.613 3.088-2.588 3.438z",fill:"#22D1EE"})),s.createElement(ze,{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",transform:"scale(2.34)",className:"skill-svg"},s.createElement("path",{d:"M0 32v32h64.002V-.002H0zm51.577-2.55c1.625.406 2.865 1.128 4.003 2.306.59.63 1.463 1.778 1.534 2.052.02.08-2.763 1.95-4.45 2.997-.06.04-.305-.223-.58-.63-.823-1.2-1.686-1.717-3.007-1.808-1.94-.132-3.2.884-3.18 2.58 0 .498.07.792.274 1.2.427.884 1.22 1.412 3.708 2.49 4.582 1.97 6.542 3.27 7.76 5.12 1.36 2.062 1.666 5.354.742 7.802-1.016 2.662-3.535 4.47-7.08 5.07-1.097.193-3.698.163-4.876-.05-2.57-.457-5.008-1.727-6.512-3.393-.59-.65-1.737-2.347-1.666-2.47.03-.04.295-.203.59-.376l2.377-1.37 1.84-1.067.386.57c.538.823 1.717 1.95 2.428 2.326 2.042 1.077 4.846.924 6.227-.315.59-.538.833-1.097.833-1.92 0-.742-.09-1.067-.477-1.625-.498-.71-1.514-1.31-4.4-2.56-3.302-1.422-4.724-2.306-6.024-3.708-.752-.813-1.463-2.113-1.758-3.2-.244-.904-.305-3.17-.112-4.084.68-3.2 3.088-5.415 6.563-6.075 1.128-.213 3.75-.132 4.856.142zM36.552 32.12l.02 2.62h-8.33v23.67H22.35v-23.67h-8.33v-2.57l.07-2.64c.03-.04 5.1-.06 11.246-.05l11.185.03z",fill:"#22D1EE"}))))))};var je="/assets/github.86848ac3.svg";const Te=m.div`
    margin-top: 3rem;
    flex: 1;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10rem;
    grid-auto-rows: minmax(500px, 1fr);

    @media ${L.laptopL} {
        padding: 0;
        gap: 5rem;
    }
    @media ${L.tablet} {
        padding: 0;
    }
    @media ${L.mobileL} {
    }
`,Ie=m(c.img)`
    height: 100%;
    width: 100%;

    object-fit: fill;
    position: absolute;
    top: 0;
    left: 0;

    @media ${L.mobileL} {
        height: fit-content;
        position: static;
        object-fit: contain;
    }
`,Fe=m(c.p)`
    padding: 1rem 0;
    text-align: center;
    max-width: 70%;
    font-family: ${({theme:e})=>e.fontText};
    color: ${({theme:e})=>e.textColor};
    @media ${L.tablet} {
        max-width: 90%;
    }
`,Be=m(c.div)`
    display: flex;
    margin: 0.5rem 0;
    gap: 2rem;
    p {
        text-transform: uppercase;
        /* font-size: ${({theme:e})=>e.headingSM}; */
        font-family: ${({theme:e})=>e.fontText};
        color: ${({theme:e})=>e.textColor};
    }
`,Ge=m(Be)`
    width: 50%;
    margin-top: 10px;
    padding-top: 10px;
    border-top: dotted 2px white;
    display: flex;
    justify-content: center;
`,Oe=m(c.a).attrs({className:"focusable",rel:"noreferrer"})`
    text-decoration: none;
    ${N}
    padding: 5px 0;
    height: 50px;
    width: 70px;
    border-radius: 10px;
    transition: all 0.8s linear;
    img {
        height: 30px;
        width: 30px;
    }
    &:hover {
        border: Solid 2px ${({theme:e})=>e.accentColor};
    }
`,De=m(c.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`,He=m(c.div)`
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(14, 21, 58, 0.8);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    @media ${L.mobileL} {
        flex: 1;
        height: 100%;
        position: static;
        backdrop-filter: none;
        background: none;
        gap: 0;
    }
`,Ae=m(c.h2)`
    padding-top: 25px;
    height: 60px;
    width: 100%;
    text-align: center;
    font-size: ${({theme:e})=>e.headingSM};
    color: white;
    font-family: ${({theme:e})=>e.fontText};

    @media ${L.mobileL} {
        padding-top: 25px;
        height: 60px;
        font-size: ${({theme:e})=>e.textLG};
    }
`,Re=m(c.div)`
    place-self: center;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    border: solid 4px ${({theme:e})=>e.accentColor};
    box-shadow: 7px 8px 20px rgba(0, 0, 0, 0.7);
    width: 100%;
    max-height: 400px;
    max-width: 800px;
    background: ${({theme:e})=>e.primaryColor};
    position: relative;
    cursor: pointer;

    @media ${L.mobileL} {
        border-width: 3px;
        max-height: fit-content;
        max-width: 100%;
        position: static;
        display: flex;
        flex-direction: column;
        pointer-events: none;
    }
`,Ne={initial:{top:"75%",transition:{type:"tween",duration:.5,ease:"easeOut"}},animate:{top:0,height:"100%",width:"100%",transition:{type:"tween",duration:.5,ease:"easeOut"}},end:{top:"75%",transition:{type:"tween",duration:.5,ease:"easeOut"}}},Ve={initial:{scale:1,transition:{type:"tween",duration:.5,ease:"easeOut"}},animate:{scale:1.4,transition:{type:"tween",duration:.5,ease:"easeOut"}}},Ye={initial:{y:"100%",opacity:0},animate:{y:0,opacity:1,transition:{type:"tween",duration:.7,ease:"easeOut",staggerChildren:.2,when:"beforeChildren"}},initialMob:{y:"00%",opacity:1}},We={hidden:{opacity:0,scale:.5},animate:{opacity:1,scale:1,transition:{type:"tween",duration:.7,ease:"easeOut"}}},_e=()=>s.createElement(me,null,s.createElement(B,null,s.createElement(S,{id:400,text:"Creations"})),s.createElement(Te,null,s.createElement(Pe,{img:"https://firebasestorage.googleapis.com/v0/b/myportfolio2692.appspot.com/o/projects%2Fb2b.png?alt=media&token=9a386d66-515f-40b9-8b0f-6ddd1a4f6eda",title:"BitsToBytes.in",description:"A simple and minimal website created by me for representing our programming club BitsToBytes at college level.",tech:["ReactJS","Firebase"],links:["https://github.com/Bits-to-Bytes/Bits-to-Bytes-React","https://bitstobytes.in"],key:"1"}),s.createElement(Pe,{key:"2",img:"https://firebasestorage.googleapis.com/v0/b/myportfolio2692.appspot.com/o/projects%2Fptf2.png?alt=media&token=39947c38-4fbe-469b-9e8d-119300b0bcf1",title:"Portfolio V1.0",description:"A responsive portfolio website built using Flutter web for showcasing my profile and uses Firebase for hosting",tech:["Flutter","Firebase"],links:["https://github.com/GajjarMiten/Flutter-Portfolio"]}),s.createElement(Pe,{key:"3",img:"https://firebasestorage.googleapis.com/v0/b/myportfolio2692.appspot.com/o/projects%2Fcovbit.png?alt=media&token=76703fea-d491-46a2-8f36-dc820ae36540",title:"CovBit",description:"An all in one application to get updated with COVID-19 news, to do self-assessment, to get notification of nearby people to maintain social distancing and to track the location of COVID-19 positive user.",tech:["Flutter","Firebase","CovidAPI"],links:["https://github.com/GajjarMiten/CovBit"]}),s.createElement(Pe,{key:"4",img:"https://firebasestorage.googleapis.com/v0/b/myportfolio2692.appspot.com/o/projects%2Ftictactoe.png?alt=media&token=9fdd8825-4d02-484c-9f4f-89f136ccadf1",title:"TicTacToe",description:"A multiplayer TicTacToe game built using with flutter with bloc pattern. It uses Minimax algorithm for making pradiction of next move",tech:["Flutter","Firebase"],links:["https://github.com/GajjarMiten/Flutter-tic-tac-toe"]}))),Pe=({img:e,title:t,description:a,tech:i,links:n})=>{const o=d(),{ref:r,controls:l}=G("hidden","animate"),m=window.matchMedia(L.mobileL);let c="initial";const f=()=>{c=m.matches?"initialMob":"initial"};return f(),s.useEffect((()=>(window.addEventListener("resize",f),()=>window.removeEventListener("resize",f))),[]),s.createElement(Re,{ref:r,variants:We,initial:"hidden",animate:l,onMouseEnter:async()=>{o.start("animate")},onMouseLeave:async()=>{o.start("end"),o.start("initial")}},s.createElement(h,null,s.createElement(Ie,{src:e,loading:"lazy",variants:Ve,initial:"initial",animate:o,alt:"project-img"}),s.createElement(He,{key:e,variants:Ne,initial:"initial",animate:o},s.createElement(Ae,null,t),s.createElement(De,{variants:Ye,initial:c,animate:o},s.createElement(Fe,{variants:Ye},a),s.createElement(Be,{variants:Ye},i.map(((e,t)=>s.createElement("p",{key:t.toString()},e)))),s.createElement(Ge,{variants:Ye},null==n?void 0:n.map(((e,t)=>0==t?s.createElement(Oe,{href:e,target:"_blank",key:"g-link"},s.createElement("img",{src:je,alt:"github-svg"})):e?s.createElement(Oe,{href:e,target:"_blank",key:"web-link"},s.createElement("img",{src:"/assets/link.bbd2f6b0.svg",alt:"link-svg"})):void 0)))))))},Ue=m(c.form).attrs({className:"contact-form"})`
    ${R}
    gap: 4rem;
    @media ${L.laptopL} {
        gap: 1rem;
    }
`,qe=m(c.div)`
    ${R}
`,Xe=m(c.div)`
    display: flex;
    gap: 1rem;

    @media ${L.mobileL} {
        flex-direction: column;
    }
`,Je=m(c.label)`
    color: white;
    font-family: ${({theme:e})=>e.fontText};
    font-size: ${({theme:e})=>e.headingLG};

    @media ${L.laptopL} {
        font-size: ${({theme:e})=>e.headingSM};
    }
`,Ze=m(c.input)`
    height: 50px;
    font-size: ${({theme:e})=>e.textLG};
    font-family: ${({theme:e})=>e.fontText};
    color: ${({theme:e})=>e.textColor};
    background: none;
    border: none;
    outline: none;

    &::placeholder {
        color: ${({theme:e})=>e.textColor};
        filter: brightness(70%);
    }

    &:focus {
        border-bottom: solid 2px ${({theme:e})=>e.accentColor};
    }

    &[type="submit"] {
        height: auto;
        border: solid 2px white;
        border-radius: 12px;
        padding: 1.3rem;
        width: 200px;
    }

    @media ${L.laptopL} {
        font-size: ${({theme:e})=>e.textMD};
        &[type="submit"] {
            padding: 0.8rem;
            width: 200px;
        }
    }

    @media ${L.mobileL} {
        &[type="submit"] {
            max-width: 100%;
        }
    }
`,Ke=m(c.textarea)`
    font-size: ${({theme:e})=>e.textLG};
    font-family: ${({theme:e})=>e.fontText};
    color: ${({theme:e})=>e.textColor};
    background: none;
    border: none;
    outline: none;
    height: 100px;

    resize: none;
    &::placeholder {
        filter: brightness(70%);
        color: ${({theme:e})=>e.textColor};
    }

    &:focus {
        border-bottom: solid 2px ${({theme:e})=>e.accentColor};
    }
`,Qe={initial:{boxShadow:"none"},hover:{boxShadow:"0px 0px 20px 1px #22D1EE",backgroundColor:"rgba(255, 255, 255, 0.1)",transition:{duration:.8,repeat:1/0,repeatType:"reverse"}},tap:{scale:1.2}},et={initial:{opacity:0,y:"40%"},animate:{opacity:1,y:0,transition:{type:"spring",duration:.8,stiffness:90}}},tt=()=>{const{ref:e,controls:t}=G("initial","animate");return s.createElement(Ue,{ref:e,variants:et,initial:"inital",animate:t,onSubmit:e=>{e.preventDefault()}},s.createElement(Xe,null,s.createElement(qe,null,s.createElement(Je,{htmlFor:"name"},"I am"),s.createElement(Ze,{id:"name",name:"name",placeholder:"Awesome"})),s.createElement(qe,null,s.createElement(Je,{htmlFor:"email"},"My Email is"),s.createElement(Ze,{id:"email",name:"email",placeholder:"You@Top.com"}))),s.createElement(qe,null,s.createElement(Je,{htmlFor:"message"},"Let's Talk on"),s.createElement(Ke,{id:"message",name:"message",placeholder:"Something Creative..."})),s.createElement(qe,null,s.createElement(Ze,{type:"submit",value:"Send 🏹",className:"focusable",variants:Qe,whileFocus:"hover",whileHover:"hover",whileTap:"tap"})))},at=m(c.a)`
    text-decoration: none;
    color: ${({theme:e})=>e.accentColor};
    font-family: ${({theme:e})=>e.fontText};
    font-size: ${({theme:e})=>e.textLG};
    overflow: hidden;
    position: relative;
    padding: 0 5px;
    &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        height: 100%;
        width: 100%;
        border-radius: 5px;
        transition: all 0.2s ease-in;
    }
    &:hover {
        &::after {
            border: solid 2px white;

            background-color: rgba(255, 255, 255, 0.1);
            box-shadow: 0px 0px 10px 1px ${({theme:e})=>e.accentColor};
        }
    }
    @media ${L.laptopL} {
        font-size: ${({theme:e})=>e.textSM};
    }
`,it=({children:e,link:t})=>s.createElement(at,{href:t,className:"focusable"},e);m.div`
    position: relative;

    overflow: hidden;
    background: #000;
    /*background: rgba(0,0,0,1.0);*/
    color: #fff;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.4);
`;const nt=m.div`
    position: absolute;
    background: none;
    width: 6em;
    height: 6em;
    font-size: 2px;
    font-size: 10px;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    &:after {
        position: absolute;
        content: "";
        display: block;
        width: 0.2em;
        height: 0.2em;
        box-shadow: 0.6em 0em #fff, 0.8em 0em #fff, 1.4em 0em #fff,
            1.6em 0em #fff, 2.4em 0em #fff, 2.6em 0em #fff, 0.6em 0.2em #fff,
            1em 0.2em #fff, 1.2em 0.2em #fff, 1.6em 0.2em #fff, 2.2em 0.2em #fff,
            2.8em 0.2em #fff, 4.2em 0.2em #fff, 0.8em 0.4em #fff,
            1.6em 0.4em #fff, 2.4em 0.4em #fff, 2.8em 0.4em #fff,
            3.2em 0.4em #fff, 3.4em 0.4em #fff, 3.6em 0.4em #fff, 4em 0.4em #fff,
            4.4em 0.4em #fff, 4.8em 0.4em #fff, 5.2em 0.4em #fff, 0em 0.6em #fff,
            0.2em 0.6em #fff, 1em 0.6em #fff, 1.6em 0.6em #fff, 2.8em 0.6em #fff,
            4.2em 0.6em #fff, 0em 0.8em #fff, 0.4em 0.8em #fff, 1.6em 0.8em #fff,
            2.6em 0.8em #fff, 0.2em 1em #fff, 0.6em 1em #fff, 0.8em 1em #fff,
            1em 1em #fff, 1.2em 1em #fff, 1.6em 1em #fff, 2em 1em #fff,
            2.2em 1em #fff, 2.4em 1em #fff, 0.2em 1.2em #fff, 1.6em 1.2em #fff,
            0em 1.4em #fff, 1em 1.4em #fff, 1.8em 1.4em #fff, 0em 1.6em #fff,
            0.2em 1.6em #fff, 0.4em 1.6em #fff, 0.6em 1.6em #fff, 1em 1.6em #fff,
            2em 1.6em #fff, 1em 1.8em #fff, 1.4em 1.8em #fff, 2em 1.8em #fff,
            1em 2em #fff, 1.6em 2em #fff, 1.8em 2em #fff, 2em 2em #fff,
            0.2em 2.2em #fff, 1em 2.2em #fff, 2.2em 2.2em #fff, 2.6em 2.2em #fff,
            0em 2.4em #fff, 0.4em 2.4em #fff, 1em 2.4em #fff, 0em 2.6em #fff,
            0.8em 2.6em #fff, 2.2em 2.6em #fff, 0.2em 2.8em #fff,
            0.4em 2.8em #fff, 0.6em 2.8em #fff, 0.4em 3.2em #fff,
            0.4em 3.4em #fff, 0.4em 3.6em #fff, 0.4em 4em #fff, 0.2em 4.2em #fff,
            0.6em 4.2em #fff, 0.4em 4.4em #fff, 0.4em 4.8em #fff,
            0.4em 5.2em #fff;
    }
`,ot=m(nt)`
    top: 0;
    left: 0;
    -webkit-transform: rotate(360deg) scale(0.6);
    transform: rotate(360deg) scale(0.6);
`,rt=m(nt)`
    top: 0;
    right: 0;
    transform: rotate(90deg) scale(0.6);
`,lt=m(nt)`
    bottom: 0;
    left: 0;
    transform: rotate(270deg) scale(0.6);
`,mt=m(nt)`
    bottom: 0px;
    right: 0px;
    transform: rotate(180deg) scale(0.6);
`,st=m.div`
    display: grid;
    flex: 1;
    padding: 0 100px;
    grid-template-columns: 0.9fr 1fr;
    grid-template-rows: 100%;
    padding-top: 2rem;
    gap: 1rem;

    @media ${L.tablet} {
        grid-template-columns: 100%;
        grid-template-rows: 1fr 1fr;
        padding: 0 60px;
        padding-top: 3rem;
        gap: 5rem;
    }
    @media ${L.mobileL} {
        padding: 0 20px;
        padding-top: 3rem;
    }
`,ct=m(c.div)`
    height: 100%;
    width: 100%;
    ${R}
    padding-right: 2rem;
    @media ${L.laptopL} {
        padding-right: 0;
    }
`,dt=m(c.div)`
    min-height: 200px;
    width: 100%;
    position: relative;
    border-radius: 12px;
    box-shadow: 7px 8px 20px rgba(0, 0, 0, 0.14);
    background: rgba(24, 24, 24, 0.4);
    transition: all 0.3s ease-out;
    backdrop-filter: blur(5px);
    transition: all 0.3s linear;
    ${N}
    &:hover {
        box-shadow: 7px 8px 20px rgba(0, 0, 0, 0.5);
    }
    & p {
        padding: 10px 2rem;
        font-family: ${({theme:e})=>e.fontText};
        color: ${({theme:e})=>e.textColor};
        font-size: ${({theme:e})=>e.textLG};
    }

    @media ${L.laptopL} {
        min-height: 150px;
        & p {
            font-size: ${({theme:e})=>e.textSM};
        }
    }

    @media ${L.mobileL} {
        padding: 1rem;
    }
`,ft=m(c.div)`
    width: 100%;
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`,pt=m.a.attrs({target:"_blank",rel:"noreferrer"})`
    padding: 10px;

    transition: all 0.3s ease-out;
    img {
        height: 50px;
        width: 50px;
    }
    &:hover {
        transform: translateY(-10px);
        img {
            filter: brightness(50%);
        }
    }

    @media ${L.tablet} {
        img {
            height: 40px;
            width: 40px;
        }
    }
    @media ${L.mobileS} {
        img {
            height: 30px;
            width: 30px;
        }
    }
`,ht=m(c.p)`
    margin-bottom: 80px;
    text-align: center;
    color: ${({theme:e})=>e.textColor};
    font-family: ${({theme:e})=>e.fontText};
    font-size: ${({theme:e})=>e.textLG};
    @media ${L.laptopL} {
        font-size: ${({theme:e})=>e.textSM};
    }
`;const gt=()=>s.createElement(me,{style:{minHeight:"100vh",padding:"0"}},s.createElement(B,{marginH:100},s.createElement(S,{id:500,text:"Contact"})),s.createElement(st,null,s.createElement(tt,null),s.createElement(xt,null))),ut={initial:{y:100,opacity:0},animate:{y:0,opacity:1,transition:{type:"spring",stiffness:90,staggerChildren:.1,when:"beforeChildren"}}},xt=()=>{const{ref:e,controls:t}=G("initial","animate");return s.createElement(ct,{ref:e,variants:ut,initial:"initial",animate:t},s.createElement(dt,{variants:ut},s.createElement(ot,null),s.createElement(rt,null),s.createElement(lt,null),s.createElement(mt,null),s.createElement("p",null,"Have any question or want to talk with me ? You can easily connect with me via email at",s.createElement(it,{link:"mailto:miten3377@gmail.com"},"miten3377@gmail.com"),"or feel free to drop a message in the form!😃")),s.createElement(ft,{variants:ut},s.createElement(pt,{href:"https://codepen.io/Mi10/"},s.createElement("img",{src:"/assets/codepen.6c9311ba.svg",alt:"social-icon"})),s.createElement(pt,{href:"https://github.com/GajjarMiten/"},s.createElement("img",{src:je,alt:"social-icon"})),s.createElement(pt,{href:"https://www.linkedin.com/in/mitengajjar/"},s.createElement("img",{src:"/assets/linkedin.8de0c099.svg",alt:"social-icon"})),s.createElement(pt,{href:"https://twitter.com/GajjarMiten/"},s.createElement("img",{src:"/assets/twitter.a634ce74.svg",alt:"social-icon"})),s.createElement(pt,{href:"https://www.instagram.com/_.mi10._/"},s.createElement("img",{src:"/assets/instagram.0f0836fe.svg",alt:"social-icon"}))),s.createElement(ht,{variants:ut},"Made With ❤️ By ",s.createElement(xe,null,"Miten Gajjar")))},bt=m(c.div).attrs({id:"cursor"})`
    pointer-events: none;
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;

    border: solid 2px white;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 10px 1px ${({theme:e})=>e.accentColor};
`,vt=()=>{const e=-100,t=-100,a=32,i=32,n=4;let o=!1;const r=g(1),l=g(a),m=g(i),c=g(e),d=g(t),f=g(n),p={damping:25,stiffness:120},h=u(c,p),x=u(r,p),b=u(l,p),v=u(m,p),w=u(c,p),E=u(d,p),y=e=>{o||(c.set(e.clientX-16),d.set(e.clientY-16))},$=e=>{const t=e.currentTarget.getBoundingClientRect();o=!0,c.set(t.left),d.set(t.top),b.set(t.height),v.set(t.width),f.set(12),h.set(0),x.set(0)},L=e=>{b.set(32),v.set(32),h.set(c),c.set(e.clientX),d.set(e.clientY),x.set(1),f.set(4),o=!1};return s.useEffect((()=>{window.addEventListener("mousemove",y);const e=document.querySelectorAll(".focusable");return e.forEach((e=>{e.addEventListener("mouseenter",$),e.addEventListener("mouseleave",L)})),()=>{window.removeEventListener("mousemove",y),e.forEach((e=>{e.removeEventListener("mouseenter",$),e.removeEventListener("mouseleave",L)}))}}),[]),s.createElement(bt,{style:{x:w,y:E,rotateZ:h,height:b,width:v,borderRadius:f,opacity:x}})},wt=e=>s.createElement(X,null,s.createElement(x,{theme:y},e.children)),Et=()=>s.createElement(s.Fragment,null,s.createElement(E,null),s.createElement(wt,null,s.createElement(yt,null,s.createElement(vt,null),s.createElement(C,null,s.createElement(ae,null),s.createElement(Ee,null),s.createElement(Se,null),s.createElement(_e,null),s.createElement(gt,null))))),yt=m.main`
    height: 100vh;
    width: 100vw;
    background-color: ${({theme:e})=>e.primaryColor};

    max-width: ${$};
    margin: 0 auto;
    position: relative;
    border-left: solid 2px ${({theme:e})=>e.accentColor};
    border-right: solid 2px ${({theme:e})=>e.accentColor};
    @media ${L.laptopL} {
        border: none;
    }
    @media ${L.laptop} {
    }
    @media ${L.tablet} {
    }
`;setTimeout((()=>{b.render(s.createElement(Et,null),document.getElementById("root"))}),1500);
