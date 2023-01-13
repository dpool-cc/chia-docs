"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),h=l,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:l,o[1]=r;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),l=n(7294),i=n(6010),o=n(2389),r=n(7392),s=n(7094),c=n(2466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:o,values:d,groupId:h,className:m}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,r.l)(w,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===o?o:o??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==f&&!w.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,s.U)(),[N,C]=(0,l.useState)(f),v=[],{blockElementScrollPositionUntilNextRender:A}=(0,c.o5)();if(null!=h){const e=b[h];null!=e&&e!==N&&w.some((t=>t.value===e))&&C(e)}const D=e=>{const t=e.currentTarget,n=v.indexOf(t),a=w[n].value;a!==N&&(A(t),C(a),null!=h&&y(h,String(a)))},x=e=>{let t=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const n=v.indexOf(e.currentTarget)+1;t=v[n]??v[0];break}case"ArrowLeft":{const n=v.indexOf(e.currentTarget)-1;t=v[n]??v[v.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},w.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>v.push(e),onKeyDown:x,onClick:D},o,{className:(0,i.Z)("tabs__item",u,o?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,l.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,o.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},6802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));n(5488),n(5162);const i={id:"walletconnect-user-guide",slug:"/walletconnect-user-guide",title:"WalletConnect User Guide"},o=void 0,r={unversionedId:"guides/walletconnect/walletconnect-user-guide",id:"guides/walletconnect/walletconnect-user-guide",title:"WalletConnect User Guide",description:"Intro",source:"@site/docs/guides/walletconnect/walletconnect-user-guide.mdx",sourceDirName:"guides/walletconnect",slug:"/walletconnect-user-guide",permalink:"/zh/walletconnect-user-guide",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/walletconnect/walletconnect-user-guide.mdx",tags:[],version:"current",frontMatter:{id:"walletconnect-user-guide",slug:"/walletconnect-user-guide",title:"WalletConnect User Guide"},sidebar:"guides",previous:{title:"Simulator User Guide",permalink:"/zh/guides/simulator-user-guide"},next:{title:"Why Chia is Great",permalink:"/zh/guides/why-chia-is-great-video-series"}},s={},c=[{value:"Intro",id:"intro",level:2},{value:"Install the sample DApp",id:"install-the-sample-dapp",level:2},{value:"Configure WalletConnect",id:"configure-walletconnect",level:2},{value:"Call DApp functions",id:"call-dapp-functions",level:2},{value:"Configure WalletConnect",id:"configure-walletconnect-1",level:2},{value:"FAQ",id:"faq",level:2},{value:"What is the main use case for WalletConnect?",id:"what-is-the-main-use-case-for-walletconnect",level:3},{value:"What WalletConnect functionality might be enabled in the future?",id:"what-walletconnect-functionality-might-be-enabled-in-the-future",level:3},{value:"What is the difference between WalletConnect and CHIP-2?",id:"what-is-the-difference-between-walletconnect-and-chip-2",level:3},{value:"Will the wallet SDK support WalletConnect in the future?",id:"will-the-wallet-sdk-support-walletconnect-in-the-future",level:3},{value:"How can WalletConnect connect to remote wallets?",id:"how-can-walletconnect-connect-to-remote-wallets",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"intro"},"Intro"),(0,l.kt)("p",null,"This guide will show you how to use ",(0,l.kt)("a",{parentName:"p",href:"https://walletconnect.com/"},"WalletConnect")," to connect a sample DApp to your Chia reference wallet."),(0,l.kt)("admonition",{title:"a few notes",type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Support for WalletConnect was introduced in Chia version 1.6.2. If you are running an earlier version, be sure to upgrade to the latest version. See our ",(0,l.kt)("a",{parentName:"li",href:"https://www.chia.net/downloads/"},"download page")," for more info."),(0,l.kt)("li",{parentName:"ul"},"Generally speaking, you only need to have a synced light wallet to use WalletConnect. A full node is not required. However, depending on your DApp, a full node may be required to run certain commands."),(0,l.kt)("li",{parentName:"ul"},"WalletConnect is supported on every operating system supported by the Chia reference wallet, including Windows, Linux, and MacOS."),(0,l.kt)("li",{parentName:"ul"},"WalletConnect is supported on Chia's testnet, as well as its mainnet."),(0,l.kt)("li",{parentName:"ul"},"This guide will use Chia's reference wallet, but WalletConnect integration for other wallets will eventually be supported as well."))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"install-the-sample-dapp"},"Install the sample DApp"),(0,l.kt)("p",null,"In order to help you get started with WalletConnect, we have created a sample DApp.\nIn this section, we'll install and run the DApp locally. We'll also obtain a link to connect the DApp to a Chia reference wallet."),(0,l.kt)("p",null,"If you would like to connect your Chia reference wallet to a different DApp, then feel free to skip ahead to the ",(0,l.kt)("a",{parentName:"p",href:"#configure-walletconnect"},"next section"),"."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run this command to clone the sample DApp's ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-wallet-connect-dapp-test"},"GitHub repo"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Chia-Network/chia-wallet-connect-dapp-test.git -b main\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Change to the sample DApp's directory:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd chia-wallet-connect-dapp-test\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," to install the sample DApp (",(0,l.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/docs/cli/"},"more info about yarn"),"):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\n")),(0,l.kt)("p",{parentName:"li"},"Example result:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'yarn install v1.22.17\nwarning ..\\..\\..\\..\\package.json: No license field\n[1/4] Resolving packages...\n[2/4] Fetching packages...\n[3/4] Linking dependencies...\nwarning " > @polkadot/util-crypto@10.1.14" has unmet peer dependency "@polkadot/util@10.1.14".\nwarning " > styled-components@5.3.6" has unmet peer dependency "react-is@>= 16.8.0".\n[4/4] Building fresh packages...\nDone in 213.31s.\n')),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," will also install the needed dependencies for the sample DApp. Depending on which dependencies were already installed, this could add several minutes to the installation time. In this example, the installation took 3.5 minutes."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set up your local environment variables by copying the example into your own ",(0,l.kt)("inlineCode",{parentName:"p"},".env.local")," file:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.local.example .env.local\n")),(0,l.kt)("p",{parentName:"li"},"Your copy of ",(0,l.kt)("inlineCode",{parentName:"p"},".env.local")," now contains the following environment variables:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_PROJECT_ID")," (placeholder) - You can generate your own ProjectId at ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.walletconnect.com"},"https://cloud.walletconnect.com")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_RELAY_URL")," (already set)"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," to build the sample DApp:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn next build\n")),(0,l.kt)("p",{parentName:"li"},"Example result:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run v1.22.17\nwarning ..\\..\\..\\..\\package.json: No license field\n$ C:\\Users\\User\\Documents\\GitHub\\chia\\chia-wallet-connect-dapp-test\\node_modules\\.bin\\next build\ninfo  - Loaded env from C:\\Users\\User\\Documents\\GitHub\\chia\\chia-wallet-connect-dapp-test\\.env.local\ninfo  - SWC minify release candidate enabled. https://nextjs.link/swcmin\ninfo  - Linting and checking validity of types ..warn  - No ESLint configuration detected. Run next lint to begin setup\ninfo  - Linting and checking validity of types\ninfo  - Creating an optimized production build\ninfo  - Compiled successfully\ninfo  - Collecting page data\ninfo  - Generating static pages (3/3)\ninfo  - Finalizing page optimization\n\nPage                                       Size     First Load JS\n\u250c \u25cb / (2385 ms)                            8.97 kB        1.52 MB\n\u251c   /_app                                  0 B            1.51 MB\n\u2514 \u25cb /404 (2305 ms)                         277 B          1.51 MB\n  First Load JS shared by all              1.51 MB\n  \u251c chunks/framework-b892d1ba2d9bbbff.js   42.5 kB\n  \u251c chunks/main-2ad31211114520a4.js        30.8 kB\n  \u251c chunks/pages/_app-478d778bda06be1e.js  1.43 MB\n  \u251c chunks/webpack-c83969435574458d.js     1.06 kB\n  \u2514 css/ab44ce7add5c3d11.css               247 B\n\n\u25cb  (Static)  automatically rendered as static HTML (uses no initial props)\n\nDone in 25.63s.\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Start the sample DApp:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")),(0,l.kt)("p",{parentName:"li"},"Example result:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run v1.22.17\nwarning ..\\..\\..\\..\\package.json: No license field\n$ next start\nready - started server on 0.0.0.0:3000, url: http://localhost:3000\ninfo  - Loaded env from C:\\Users\\User\\Documents\\GitHub\\chia\\chia-wallet-connect-dapp-test\\.env.local\ninfo  - SWC minify release candidate enabled. https://nextjs.link/swcmin\n")),(0,l.kt)("p",{parentName:"li"},"In this example, the DApp was started locally on port 3000. This is the default port; your DApp may need to use a different port if 3000 is already being used for something else.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Access the sample DApp:"),(0,l.kt)("p",{parentName:"li"},"Open a browser and navigate to ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," (unless a different port was used)"),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If you see an error message such as ",(0,l.kt)("inlineCode",{parentName:"p"},"An error as occured"),", the most likely cause is that you are running an ad blocker that is interfering with the DApp.\nEither disable the ad blocker or try a different browser.")),(0,l.kt)("p",{parentName:"li"},"The sample DApp should display a list of testnet projects.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"Chia Testnet"),", then click ",(0,l.kt)("inlineCode",{parentName:"p"},"Connect"),":"),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"/img/walletconnect/01_dapp.png",alt:"Click Connect"})),(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"A QR code will be displayed. Click ",(0,l.kt)("inlineCode",{parentName:"p"},"Copy to clipboard"),":"),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"/img/walletconnect/02_dapp.png",alt:"Click Copy to clipboard"})),(0,l.kt)("br",null),(0,l.kt)("p",{parentName:"li"},"The link has been copied, so you are ready to set up WalletConnect in Chia's reference wallet. Keep this browser window open in case you need to copy the link again."))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"configure-walletconnect"},"Configure WalletConnect"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.chia.net/downloads/"},"Download and install")," Chia version 1.6.2 or greater"),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If you installed Chia with a packaged installer, you can set up an alias to run ",(0,l.kt)("inlineCode",{parentName:"p"},"chia")," commands. See our ",(0,l.kt)("a",{parentName:"p",href:"https://docs.chia.net/faq?_highlight=execu#i-installed-chia-with-the-packaged-installer-how-do-i-run-cli-commands"},"FAQ")," for more info."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set up Chia's testnet"),(0,l.kt)("p",{parentName:"li"},"While it's possible to use WalletConnect on Chia's mainnet, this example will use the testnet.\nThe primary command to convert your system to use the testnet is ",(0,l.kt)("inlineCode",{parentName:"p"},"chia configure -t true"),".\nSee our ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/wiki/How-to-connect-to-the-Testnet"},"testnet setup guide")," for more info."),(0,l.kt)("p",{parentName:"li"},"After your system has been configured to use the testnet, you can start your Chia reference wallet.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click the WalletConnect icon"),(0,l.kt)("p",{parentName:"li"},"The icon is located on the upper-right side of the reference wallet GUI, as shown here:"),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"/img/walletconnect/01_walletconnect.png",alt:"Click the WalletConnect icon"})),(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"ENABLE WALLETCONNECT")),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"/img/walletconnect/02_walletconnect.png",alt:"Click ENABLE WALLETCONNECT"})),(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"ADD CONNECTION")),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"/img/walletconnect/03_walletconnect.png",alt:"Click ADD CONNECTION"})),(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Paste the link to your sample DApp and click ",(0,l.kt)("inlineCode",{parentName:"p"},"CONTINUE")),(0,l.kt)("p",{parentName:"li"},"If you used this guide to set up the sample DApp, this was the link you obtained with the last step of the previous section:"),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"/img/walletconnect/03_dapp.png",alt:"Paste and click CONTINUE"})),(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Chooose which public key(s) to connect and click ",(0,l.kt)("inlineCode",{parentName:"p"},"CONTINUE")),(0,l.kt)("p",{parentName:"li"},"While you may choose more than one key to connect with the DApp, we will use a single key for this example:"),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"/img/walletconnect/04_walletconnect.png",alt:"Select wallets and click CONTINUE"})),(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Confirm your connection"),(0,l.kt)("p",{parentName:"li"},"You will be shown the key(s) to connect to the DApp. If this looks OK, click ",(0,l.kt)("inlineCode",{parentName:"p"},"CLOSE"),". To start over, click ",(0,l.kt)("inlineCode",{parentName:"p"},"DISCONNECT"),":"),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"/img/walletconnect/05_walletconnect.png",alt:"Click CLOSE"})),(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Show more info"),(0,l.kt)("p",{parentName:"li"},"To show info on which DApp(s) are paired to which keys(s), click the WalletConnect icon, click the three dots, and click ",(0,l.kt)("inlineCode",{parentName:"p"},"More Info"),":"),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"/img/walletconnect/06_walletconnect.png",alt:"Click More Info"})),(0,l.kt)("br",null),(0,l.kt)("p",{parentName:"li"},"You will be shown the Pair Information for your DApp:"),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"/img/walletconnect/07_walletconnect.png",alt:"Paired keys are showing"})),(0,l.kt)("br",null))),(0,l.kt)("p",null,"Your wallet has been successfully paired with the sample DApp. In the next section, we'll show you how to interact with your wallet from the DApp."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"call-dapp-functions"},"Call DApp functions"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"View the sample DApp in a web browser"),(0,l.kt)("p",{parentName:"li"},"Recall that by default, the DApp will run on ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"."),(0,l.kt)("p",{parentName:"li"},"You will be shown a list of available methods. If you opted to connect multiple keys to the sample DApp, these methods will be listed for each key."),(0,l.kt)("p",{parentName:"li"},"For this example, we'll call ",(0,l.kt)("inlineCode",{parentName:"p"},"chia_getNextAddress"),":"),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"/img/walletconnect/04_dapp.png",alt:"Run chia_getNextAddress"})),(0,l.kt)("br",null),(0,l.kt)("p",{parentName:"li"},"At this point, the sample DApp will wait for confirmation from your wallet:"),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"/img/walletconnect/05_dapp.png",alt:"Pending JSON-RPC Request"})),(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Confirm the request"),(0,l.kt)("p",{parentName:"li"},"Switch back to your Chia reference wallet. You should now see a confirmation dialog with the requested method. Click ",(0,l.kt)("inlineCode",{parentName:"p"},"CONFIRM"),":"),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"/img/walletconnect/08_walletconnect.png",alt:"Confirm request"})),(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"View the response"),(0,l.kt)("p",{parentName:"li"},"Returning to the sample DApp, a new dialog with the response will appear. In this example, a new address will be shown:"),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"/img/walletconnect/06_dapp.png",alt:"Showing next address"})),(0,l.kt)("br",null))),(0,l.kt)("p",null,"You have now installed, configured, and used the sample DApp. Feel free to test the other functions, as well as create your own!"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"configure-walletconnect-1"},"Configure WalletConnect"),(0,l.kt)("p",null,"By default, you can only run DApp methods against the wallet key that is currently synced.\nThis was not an issue in the above example because we only selected one public key to pair with the sample DApp.\nHowever, if you want your DApp to be able to interact with multiple keys, you will need to enable an additional setting in the reference wallet."),(0,l.kt)("p",null,"Click the gear icon in the lower left corner of the reference wallet, then click the ",(0,l.kt)("inlineCode",{parentName:"p"},"INTEGRATION")," tab. As of version 1.6.2, two new settings will appear:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Enable")," -- This setting was activated when you enabled WalletConnect earlier in the guide"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Allow requests that require switching to a different wallet key")," -- If you activate this setting, your DApp will be able to switch between multiple wallet keys. The selected wallet will need to sync whenever you switch between keys.")),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"/img/walletconnect/09_walletconnect.png",alt:"Allow requests that require switching keys"})),(0,l.kt)("br",null),(0,l.kt)("p",null,"To configure the commands that are provided to DApps, you can edit (locally) ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain-gui/blob/main/packages/gui/src/constants/WalletConnectCommands.tsx"},"chia-blockchain-gui/blob/main/packages/gui/src/constants/WalletConnectCommands.tsx"),".\nThis file acts as a middle layer between the wallet and the DApp. It can also be used to control privacy settings."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"what-is-the-main-use-case-for-walletconnect"},"What is the main use case for WalletConnect?"),(0,l.kt)("p",null,"WalletConnect allows end users to connect their wallet to a DApp."),(0,l.kt)("h3",{id:"what-walletconnect-functionality-might-be-enabled-in-the-future"},"What WalletConnect functionality might be enabled in the future?"),(0,l.kt)("p",null,"WalletConnect is currently supported in Chia's reference wallet. "),(0,l.kt)("p",null,"In the future, it could also be supported in other Chia wallets."),(0,l.kt)("p",null,"It could also be enabled for mobile- and web-based DApps. For example, mobile wallet providers will be able to integrate with WalletConnect to connect directly to DApp providers. "),(0,l.kt)("p",null,"WalletConnect will aslo be used for initiating signing requests from within a DApp. This will enable interactions with all types of assets on Chia, including XCH, CATs, and NFTs. It will aslo enable using Chia Offers."),(0,l.kt)("h3",{id:"what-is-the-difference-between-walletconnect-and-chip-2"},"What is the difference between WalletConnect and CHIP-2?"),(0,l.kt)("p",null,"WalletConnect is generalized to allow any DApp to connect to any Chia wallet. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chips/blob/main/CHIPs/chip-0002.md"},"CHIP-2")," (DApp protocol) is specific to browser extensions. "),(0,l.kt)("h3",{id:"will-the-wallet-sdk-support-walletconnect-in-the-future"},"Will the wallet SDK support WalletConnect in the future?"),(0,l.kt)("p",null,"No -- the wallet SDK and WalletConnect exist on different parts of the tech stack.\nWhereas WalletConnect gives end users a way to connect their wallet to DApps, the wallet SDK will allow\ndevelopers to provide wallet functionality inside their DApps."),(0,l.kt)("h3",{id:"how-can-walletconnect-connect-to-remote-wallets"},"How can WalletConnect connect to remote wallets?"),(0,l.kt)("p",null,"In the example from this tutorial, both the reference wallet and WalletConnect were running on ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost"),". "),(0,l.kt)("p",null,"To connect to a mobile phone, you can scan the provided QR code. To connect to remote browser-based dapps, simply navigate to the remote URI from a web browser."),(0,l.kt)("p",null,"Also note that all connections (local and remote) between wallets and DApps are end-to-end encrypted."))}u.isMDXComponent=!0}}]);