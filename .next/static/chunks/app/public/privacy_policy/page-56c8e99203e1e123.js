(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[169],{26517:function(e,o,i){Promise.resolve().then(i.bind(i,89551))},24587:function(e,o,i){"use strict";i.d(o,{Z:function(){return O}});var r=i(23950),t=i(22988),s=i(2265),n=i(44839),a=i(87542),l=i(26259),c=i(41259),h=i(4335),d=i(53551),u=i(56529),p=i(13143),f=i(47267);let m=["ownerState"],y=["variants"],v=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function x(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}let g=(0,p.Z)(),j=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function b({defaultTheme:e,theme:o,themeId:i}){return 0===Object.keys(o).length?e:o[i]||o}function w(e,o){let{ownerState:i}=o,s=(0,r.Z)(o,m),n="function"==typeof e?e((0,t.Z)({ownerState:i},s)):e;if(Array.isArray(n))return n.flatMap(e=>w(e,(0,t.Z)({ownerState:i},s)));if(n&&"object"==typeof n&&Array.isArray(n.variants)){let{variants:e=[]}=n,o=(0,r.Z)(n,y);return e.forEach(e=>{let r=!0;"function"==typeof e.props?r=e.props((0,t.Z)({ownerState:i},s,i)):Object.keys(e.props).forEach(o=>{(null==i?void 0:i[o])!==e.props[o]&&s[o]!==e.props[o]&&(r=!1)}),r&&(Array.isArray(o)||(o=[o]),o.push("function"==typeof e.style?e.style((0,t.Z)({ownerState:i},s,i)):e.style))}),o}return n}let Y=function(e={}){let{themeId:o,defaultTheme:i=g,rootShouldForwardProp:s=x,slotShouldForwardProp:n=x}=e,a=e=>(0,f.Z)((0,t.Z)({},e,{theme:b((0,t.Z)({},e,{defaultTheme:i,themeId:o}))}));return a.__mui_systemSx=!0,(e,l={})=>{var c;let h;(0,d.internal_processStyles)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:p,slot:f,skipVariantsResolver:m,skipSx:y,overridesResolver:g=(c=j(f))?(e,o)=>o[c]:null}=l,Y=(0,r.Z)(l,v),P=void 0!==m?m:f&&"Root"!==f&&"root"!==f||!1,S=y||!1,k=x;"Root"===f||"root"===f?k=s:f?k=n:"string"==typeof e&&e.charCodeAt(0)>96&&(k=void 0);let C=(0,d.default)(e,(0,t.Z)({shouldForwardProp:k,label:h},Y)),W=e=>"function"==typeof e&&e.__emotion_real!==e||(0,u.P)(e)?r=>w(e,(0,t.Z)({},r,{theme:b({theme:r.theme,defaultTheme:i,themeId:o})})):e,D=(r,...s)=>{let n=W(r),l=s?s.map(W):[];p&&g&&l.push(e=>{let r=b((0,t.Z)({},e,{defaultTheme:i,themeId:o}));if(!r.components||!r.components[p]||!r.components[p].styleOverrides)return null;let s=r.components[p].styleOverrides,n={};return Object.entries(s).forEach(([o,i])=>{n[o]=w(i,(0,t.Z)({},e,{theme:r}))}),g(e,n)}),p&&!P&&l.push(e=>{var r;let s=b((0,t.Z)({},e,{defaultTheme:i,themeId:o}));return w({variants:null==s||null==(r=s.components)||null==(r=r[p])?void 0:r.variants},(0,t.Z)({},e,{theme:s}))}),S||l.push(a);let c=l.length-s.length;if(Array.isArray(r)&&c>0){let e=Array(c).fill("");(n=[...r,...e]).raw=[...r.raw,...e]}let h=C(n,...l);return e.muiName&&(h.muiName=e.muiName),h};return C.withConfig&&(D.withConfig=C.withConfig),D}}();var P=i(57437);let S=["className","component","disableGutters","fixed","maxWidth","classes"],k=(0,p.Z)(),C=Y("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,o)=>{let{ownerState:i}=e;return[o.root,o[`maxWidth${(0,c.Z)(String(i.maxWidth))}`],i.fixed&&o.fixed,i.disableGutters&&o.disableGutters]}}),W=e=>(0,h.Z)({props:e,name:"MuiContainer",defaultTheme:k}),D=(e,o)=>{let{classes:i,fixed:r,disableGutters:t,maxWidth:s}=e,n={root:["root",s&&`maxWidth${(0,c.Z)(String(s))}`,r&&"fixed",t&&"disableGutters"]};return(0,l.Z)(n,e=>(0,a.ZP)(o,e),i)};var T=i(12272),Z=i(3536),U=i(69281),O=function(e={}){let{createStyledComponent:o=C,useThemeProps:i=W,componentName:a="MuiContainer"}=e,l=o(({theme:e,ownerState:o})=>(0,t.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!o.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:o})=>o.fixed&&Object.keys(e.breakpoints.values).reduce((o,i)=>{let r=e.breakpoints.values[i];return 0!==r&&(o[e.breakpoints.up(i)]={maxWidth:`${r}${e.breakpoints.unit}`}),o},{}),({theme:e,ownerState:o})=>(0,t.Z)({},"xs"===o.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},o.maxWidth&&"xs"!==o.maxWidth&&{[e.breakpoints.up(o.maxWidth)]:{maxWidth:`${e.breakpoints.values[o.maxWidth]}${e.breakpoints.unit}`}}));return s.forwardRef(function(e,o){let s=i(e),{className:c,component:h="div",disableGutters:d=!1,fixed:u=!1,maxWidth:p="lg"}=s,f=(0,r.Z)(s,S),m=(0,t.Z)({},s,{component:h,disableGutters:d,fixed:u,maxWidth:p}),y=D(m,a);return(0,P.jsx)(l,(0,t.Z)({as:h,ownerState:m,className:(0,n.Z)(y.root,c),ref:o},f))})}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,o)=>{let{ownerState:i}=e;return[o.root,o["maxWidth".concat((0,T.Z)(String(i.maxWidth)))],i.fixed&&o.fixed,i.disableGutters&&o.disableGutters]}}),useThemeProps:e=>(0,U.Z)({props:e,name:"MuiContainer"})})},89551:function(e,o,i){"use strict";i.r(o),i.d(o,{default:function(){return s}});var r=i(57437),t=i(24587);function s(){return(0,r.jsx)(t.Z,{children:(0,r.jsxs)("div",{className:"tab-content translations-content-item en visible",children:[(0,r.jsx)("h1",{children:"Privacy Policy"}),(0,r.jsx)("p",{children:"Last updated: May 23, 2024"}),(0,r.jsx)("p",{children:"This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You."}),(0,r.jsx)("p",{children:"We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy."}),(0,r.jsx)("h2",{children:"Interpretation and Definitions"}),(0,r.jsx)("h3",{children:"Interpretation"}),(0,r.jsx)("p",{children:"The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."}),(0,r.jsx)("h3",{children:"Definitions"}),(0,r.jsx)("p",{children:"For the purposes of this Privacy Policy:"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Account"})," means a unique account created for You to access our Service or parts of our Service."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Affiliate"}),' means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.']})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Company"}),' (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Necxis, New Delhi, India.']})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Cookies"})," are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Country"})," refers to: Delhi, India"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Device"})," means any device that can access the Service such as a computer, a cellphone or a digital tablet."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Personal Data"})," is any information that relates to an identified or identifiable individual."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Service"})," refers to the Website."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Service Provider"})," means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Third-party Social Media Service"})," refers to any website or any social network website through which a User can log in or create an account to use the Service."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Usage Data"})," refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit)."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Website"})," refers to Necxis, accessible from ",(0,r.jsx)("a",{href:"http://necxis.com/",rel:"external nofollow noopener",target:"_blank",children:"necxis.com/"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"You"})," means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."]})})]}),(0,r.jsx)("h2",{children:"Collecting and Using Your Personal Data"}),(0,r.jsx)("h3",{children:"Types of Data Collected"}),(0,r.jsx)("h4",{children:"Personal Data"}),(0,r.jsx)("p",{children:"While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("p",{children:"Email address"})}),(0,r.jsx)("li",{children:(0,r.jsx)("p",{children:"First name and last name"})}),(0,r.jsx)("li",{children:(0,r.jsx)("p",{children:"Phone number"})}),(0,r.jsx)("li",{children:(0,r.jsx)("p",{children:"Address, State, Province, ZIP/Postal code, City"})}),(0,r.jsx)("li",{children:(0,r.jsx)("p",{children:"Usage Data"})})]}),(0,r.jsx)("h4",{children:"Usage Data"}),(0,r.jsx)("p",{children:"Usage Data is collected automatically when using the Service."}),(0,r.jsx)("p",{children:"Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data."}),(0,r.jsx)("p",{children:"When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data."}),(0,r.jsx)("p",{children:"We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device."}),(0,r.jsx)("h4",{children:"Information from Third-Party Social Media Services"}),(0,r.jsx)("p",{children:"The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Google"}),(0,r.jsx)("li",{children:"Facebook"}),(0,r.jsx)("li",{children:"Instagram"}),(0,r.jsx)("li",{children:"Twitter"}),(0,r.jsx)("li",{children:"LinkedIn"})]}),(0,r.jsx)("p",{children:"If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account."}),(0,r.jsx)("p",{children:"You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy."}),(0,r.jsx)("h4",{children:"Tracking Technologies and Cookies"}),(0,r.jsx)("p",{children:"We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Cookies or Browser Cookies."})," A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Web Beacons."})," Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity)."]})]}),(0,r.jsx)("p",{children:'Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.'}),(0,r.jsx)("p",{children:"We use both Session and Persistent Cookies for the purposes set out below:"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"Necessary / Essential Cookies"})}),(0,r.jsx)("p",{children:"Type: Session Cookies"}),(0,r.jsx)("p",{children:"Administered by: Us"}),(0,r.jsx)("p",{children:"Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"Cookies Policy / Notice Acceptance Cookies"})}),(0,r.jsx)("p",{children:"Type: Persistent Cookies"}),(0,r.jsx)("p",{children:"Administered by: Us"}),(0,r.jsx)("p",{children:"Purpose: These Cookies identify if users have accepted the use of cookies on the Website."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"Functionality Cookies"})}),(0,r.jsx)("p",{children:"Type: Persistent Cookies"}),(0,r.jsx)("p",{children:"Administered by: Us"}),(0,r.jsx)("p",{children:"Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website."})]})]}),(0,r.jsx)("p",{children:"For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy."}),(0,r.jsx)("h3",{children:"Use of Your Personal Data"}),(0,r.jsx)("p",{children:"The Company may use Personal Data for the following purposes:"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"To provide and maintain our Service"}),", including to monitor the usage of our Service."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"To manage Your Account:"})," to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"For the performance of a contract:"})," the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"To contact You:"})," To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"To provide You"})," with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"To manage Your requests:"})," To attend and manage Your requests to Us."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"For business transfers:"})," We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"For other purposes"}),": We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience."]})})]}),(0,r.jsx)("p",{children:"We may share Your personal information in the following situations:"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"With Service Providers:"})," We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"For business transfers:"})," We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"With Affiliates:"})," We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"With business partners:"})," We may share Your information with Our business partners to offer You certain products, services or promotions."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"With other users:"})," when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"With Your consent"}),": We may disclose Your personal information for any other purpose with Your consent."]})]}),(0,r.jsx)("h3",{children:"Retention of Your Personal Data"}),(0,r.jsx)("p",{children:"The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies."}),(0,r.jsx)("p",{children:"The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods."}),(0,r.jsx)("h3",{children:"Transfer of Your Personal Data"}),(0,r.jsx)("p",{children:"Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction."}),(0,r.jsx)("p",{children:"Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer."}),(0,r.jsx)("p",{children:"The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information."}),(0,r.jsx)("h3",{children:"Delete Your Personal Data"}),(0,r.jsx)("p",{children:"You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You."}),(0,r.jsx)("p",{children:"Our Service may give You the ability to delete certain information about You from within the Service."}),(0,r.jsx)("p",{children:"You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us."}),(0,r.jsx)("p",{children:"Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so."}),(0,r.jsx)("h3",{children:"Disclosure of Your Personal Data"}),(0,r.jsx)("h4",{children:"Business Transactions"}),(0,r.jsx)("p",{children:"If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy."}),(0,r.jsx)("h4",{children:"Law enforcement"}),(0,r.jsx)("p",{children:"Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency)."}),(0,r.jsx)("h4",{children:"Other legal requirements"}),(0,r.jsx)("p",{children:"The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Comply with a legal obligation"}),(0,r.jsx)("li",{children:"Protect and defend the rights or property of the Company"}),(0,r.jsx)("li",{children:"Prevent or investigate possible wrongdoing in connection with the Service"}),(0,r.jsx)("li",{children:"Protect the personal safety of Users of the Service or the public"}),(0,r.jsx)("li",{children:"Protect against legal liability"})]}),(0,r.jsx)("h3",{children:"Security of Your Personal Data"}),(0,r.jsx)("p",{children:"The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security."}),(0,r.jsx)("h2",{children:"Children's Privacy"}),(0,r.jsx)("p",{children:"Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers."}),(0,r.jsx)("p",{children:"If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information."}),(0,r.jsx)("h2",{children:"Links to Other Websites"}),(0,r.jsx)("p",{children:"Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit."}),(0,r.jsx)("p",{children:"We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services."}),(0,r.jsx)("h2",{children:"Changes to this Privacy Policy"}),(0,r.jsx)("p",{children:"We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page."}),(0,r.jsx)("p",{children:'We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.'}),(0,r.jsx)("p",{children:"You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."}),(0,r.jsx)("h2",{children:"Contact Us"}),(0,r.jsx)("p",{children:"If you have any questions about this Privacy Policy, You can contact us:"}),(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:"By email: help@necxis.com"})})]})})}}},function(e){e.O(0,[206,971,23,744],function(){return e(e.s=26517)}),_N_E=e.O()}]);