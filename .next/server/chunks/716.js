exports.id=716,exports.ids=[716],exports.modules={62428:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},63536:()=>{},77417:(e,t,r)=>{"use strict";r.d(t,{Z:()=>G});var i=r(91367),n=r(45353),s=r(17577),o=r(41135),a=r(36004),l=r(18782),u=r(87528),d=r(57657),p=r(46815),m=r(23428),c=r(67240),f=r(11948);let h=["ownerState"],x=["variants"],v=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function b(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}let Z=(0,c.Z)(),y=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function g({defaultTheme:e,theme:t,themeId:r}){return 0===Object.keys(t).length?e:t[r]||t}function k(e,t){let{ownerState:r}=t,s=(0,i.Z)(t,h),o="function"==typeof e?e((0,n.Z)({ownerState:r},s)):e;if(Array.isArray(o))return o.flatMap(e=>k(e,(0,n.Z)({ownerState:r},s)));if(o&&"object"==typeof o&&Array.isArray(o.variants)){let{variants:e=[]}=o,t=(0,i.Z)(o,x);return e.forEach(e=>{let i=!0;"function"==typeof e.props?i=e.props((0,n.Z)({ownerState:r},s,r)):Object.keys(e.props).forEach(t=>{(null==r?void 0:r[t])!==e.props[t]&&s[t]!==e.props[t]&&(i=!1)}),i&&(Array.isArray(t)||(t=[t]),t.push("function"==typeof e.style?e.style((0,n.Z)({ownerState:r},s,r)):e.style))}),t}return o}let S=function(e={}){let{themeId:t,defaultTheme:r=Z,rootShouldForwardProp:s=b,slotShouldForwardProp:o=b}=e,a=e=>(0,f.Z)((0,n.Z)({},e,{theme:g((0,n.Z)({},e,{defaultTheme:r,themeId:t}))}));return a.__mui_systemSx=!0,(e,l={})=>{var u;let d;(0,p.internal_processStyles)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:c,slot:f,skipVariantsResolver:h,skipSx:x,overridesResolver:Z=(u=y(f))?(e,t)=>t[u]:null}=l,S=(0,i.Z)(l,v),W=void 0!==h?h:f&&"Root"!==f&&"root"!==f||!1,R=x||!1,w=b;"Root"===f||"root"===f?w=s:f?w=o:"string"==typeof e&&e.charCodeAt(0)>96&&(w=void 0);let A=(0,p.default)(e,(0,n.Z)({shouldForwardProp:w,label:d},S)),C=e=>"function"==typeof e&&e.__emotion_real!==e||(0,m.P)(e)?i=>k(e,(0,n.Z)({},i,{theme:g({theme:i.theme,defaultTheme:r,themeId:t})})):e,P=(i,...s)=>{let o=C(i),l=s?s.map(C):[];c&&Z&&l.push(e=>{let i=g((0,n.Z)({},e,{defaultTheme:r,themeId:t}));if(!i.components||!i.components[c]||!i.components[c].styleOverrides)return null;let s=i.components[c].styleOverrides,o={};return Object.entries(s).forEach(([t,r])=>{o[t]=k(r,(0,n.Z)({},e,{theme:i}))}),Z(e,o)}),c&&!W&&l.push(e=>{var i;let s=g((0,n.Z)({},e,{defaultTheme:r,themeId:t}));return k({variants:null==s||null==(i=s.components)||null==(i=i[c])?void 0:i.variants},(0,n.Z)({},e,{theme:s}))}),R||l.push(a);let u=l.length-s.length;if(Array.isArray(i)&&u>0){let e=Array(u).fill("");(o=[...i,...e]).raw=[...i.raw,...e]}let d=A(o,...l);return e.muiName&&(d.muiName=e.muiName),d};return A.withConfig&&(P.withConfig=A.withConfig),P}}();var W=r(10326);let R=["className","component","disableGutters","fixed","maxWidth","classes"],w=(0,c.Z)(),A=S("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,u.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),C=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:w}),P=(e,t)=>{let{classes:r,fixed:i,disableGutters:n,maxWidth:s}=e,o={root:["root",s&&`maxWidth${(0,u.Z)(String(s))}`,i&&"fixed",n&&"disableGutters"]};return(0,l.Z)(o,e=>(0,a.ZP)(t,e),r)};var j=r(54641),_=r(14519),M=r(54117);let G=function(e={}){let{createStyledComponent:t=A,useThemeProps:r=C,componentName:a="MuiContainer"}=e,l=t(({theme:e,ownerState:t})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,r)=>{let i=e.breakpoints.values[r];return 0!==i&&(t[e.breakpoints.up(r)]={maxWidth:`${i}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,n.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}));return s.forwardRef(function(e,t){let s=r(e),{className:u,component:d="div",disableGutters:p=!1,fixed:m=!1,maxWidth:c="lg"}=s,f=(0,i.Z)(s,R),h=(0,n.Z)({},s,{component:d,disableGutters:p,fixed:m,maxWidth:c}),x=P(h,a);return(0,W.jsx)(l,(0,n.Z)({as:d,ownerState:h,className:(0,o.Z)(x.root,u),ref:t},f))})}({createStyledComponent:(0,_.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,j.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,M.Z)({props:e,name:"MuiContainer"})})},68295:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,metadata:()=>n});var i=r(19510);r(28715),r(90278);let n={title:"Necxis",description:"Necxis enable you to join and create fun activities by just capturing and uploading specific moments."};function s({children:e}){return i.jsx("html",{lang:"en",children:i.jsx("body",{children:e})})}},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var i=r(66621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,i.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},28715:()=>{},90278:()=>{}};