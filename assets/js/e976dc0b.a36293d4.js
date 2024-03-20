"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6052],{1990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=t(5893),o=t(1151),a=t(4866),i=t(5162);const s={title:"Node Syncing",slug:"/troubleshooting/node-syncing"},l=void 0,c={id:"troubleshooting/node-syncing",title:"Node Syncing",description:"Forwarding port 8444 can solve many sync issues and it also helps improve Chia's overall network health.",source:"@site/docs/troubleshooting/node-syncing.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/node-syncing",permalink:"/troubleshooting/node-syncing",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/troubleshooting/node-syncing.md",tags:[],version:"current",frontMatter:{title:"Node Syncing",slug:"/troubleshooting/node-syncing"},sidebar:"tutorialSidebar",previous:{title:"Check if Things are Working",permalink:"/troubleshooting/check-if-things-are-working"},next:{title:"Logging Reference",permalink:"/troubleshooting/logging-reference"}},d={},u=[{value:"Port Forwarding Settings",id:"port-forwarding-settings",level:2},{value:"Why forward port 8444?",id:"why-forward-port-8444",level:2},{value:"Speed up connecting to nodes",id:"speed-up-connecting-to-nodes",level:2},{value:"Detailed explanation",id:"detailed-explanation",level:2},{value:"Dealing With Carrier-Grade NAT",id:"dealing-with-carrier-grade-nat",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Forwarding port 8444 can solve many sync issues and it also helps improve Chia's overall network health."}),"\n",(0,r.jsxs)(n.p,{children:["Port 8444 is the ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Port_%28computer_networking%29",children:"port"})," through which other Chia nodes can communicate with your node. When you set up port forwarding on port 8444, the Chia software on your computer can easily communicate with other nodes and sync the Chia blockchain faster."]}),"\n",(0,r.jsx)(n.p,{children:"The network is undergoing rapid growth and expansion. Many newly arriving Chia nodes do not open port 8444, resulting in additional stress to the network. Therefore, it is strongly recommended that you enable port forwarding."}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.a,{href:"https://portchecker.co/",children:"this port checker"})," to check if you have port forwarding configured correctly."]}),"\n",(0,r.jsx)(n.h2,{id:"port-forwarding-settings",children:"Port Forwarding Settings"}),"\n",(0,r.jsxs)(n.p,{children:["Port forwarding is done on your router. How you set it up depends on your router's make and model. Look through your router's manual or just search for \"",(0,r.jsx)(n.code,{children:"<your router name and model>"}),' how to port forward" to get started.']}),"\n",(0,r.jsx)(n.p,{children:"When you enable port forwarding, you are allowing any system on the Internet to connect to your Chia node through port 8444 to the Chia software."}),"\n",(0,r.jsx)(n.p,{children:"Most routers will ask you from where you are allowing and to what you are connecting to. You want to set up port forwarding to allow any outside connection to connect to the IP address of your main node on your network through port 8444. Router manufacturers might call the settings different things, but the concept is always the same: Outside computers connecting through port 8444 to your computer."}),"\n",(0,r.jsx)(n.p,{children:"Here are the settings most routers will ask for:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Set connection type to ",(0,r.jsx)(n.em,{children:"TCP"})," or ",(0,r.jsx)(n.em,{children:"TCP & UDP"})]}),"\n",(0,r.jsx)(n.li,{children:'Destination (or forwarding) IP address - This is your main node (computer) IP address on your internal network; search online on how to do this for your type of computer. If you search for "what is my IP address" it will give you your external IP address, this is not the one you want.'}),"\n",(0,r.jsxs)(n.li,{children:["Originating (or from) IP address - Set this to all or sometimes just an asterisk may be used ",(0,r.jsx)(n.code,{children:"*"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"why-forward-port-8444",children:"Why forward port 8444?"}),"\n",(0,r.jsx)(n.p,{children:"All newly added nodes are completely dependent on nodes that are allowing port forwarding, because they are the only nodes in which they can sync with. The more nodes there are that don't allow port forwarding can cause a bottleneck to those nodes that do have it enabled."}),"\n",(0,r.jsx)(n.p,{children:"If you enable port forwarding, your node will sync faster, and you will be helping to ensure the stability and overall health of the Chia network."}),"\n",(0,r.jsx)(n.h2,{id:"speed-up-connecting-to-nodes",children:"Speed up connecting to nodes"}),"\n",(0,r.jsx)(n.p,{children:"If you would like to speed up connectivity to other nodes and increase your sync speed, add one of these introducer nodes to your Chia client:"}),"\n",(0,r.jsxs)(a.Z,{defaultValue:"mainnet",groupId:"introducers",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet11",value:"testnet11"}],children:[(0,r.jsxs)(i.Z,{value:"mainnet",children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["North Asia: ",(0,r.jsx)(n.code,{children:"introducer-ap-northeast-1.chia.net:8444"})]}),"\n",(0,r.jsxs)(n.li,{children:["South Asia: ",(0,r.jsx)(n.code,{children:"introducer-ap-southeast-1.chia.net:8444"})]}),"\n",(0,r.jsxs)(n.li,{children:["Western North America: ",(0,r.jsx)(n.code,{children:"introducer-us-west-2.chia.net:8444"})]}),"\n",(0,r.jsxs)(n.li,{children:["Eastern North America: ",(0,r.jsx)(n.code,{children:"introducer-us-east-1.chia.net:8444"})]}),"\n",(0,r.jsxs)(n.li,{children:["Europe: ",(0,r.jsx)(n.code,{children:"introducer-eu-west-2.chia.net:8444"})]}),"\n"]}),(0,r.jsx)(n.p,{children:"Additionally, you can also visit either of the below websites that are frequently updated with available nodes listening on port 8444:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://ChiaNodes.com",children:"ChiaNodes.com"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://chia.keva.app",children:"chia.keva.app"})}),"\n"]})]}),(0,r.jsxs)(i.Z,{value:"testnet11",children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"DNS Introducer: dns-introducer-testnet11.chia.net"}),"\n",(0,r.jsx)(n.li,{children:"Legacy Introducer: introducer-testnet11.chia.net:58444"}),"\n"]}),(0,r.jsx)(n.p,{children:"Note: please only use the CNI operated nodes as a last resort for connecting to peers, these nodes might be running different client versions and are not intended to be used as trusted full nodes."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CNI Operated Full Node: testnet11-node.chia.net"}),"\n"]})]})]}),"\n",(0,r.jsxs)(n.p,{children:['Nodes (IPs) from these sites can be added in the GUI from the Full Node tab, select the Full Node button in the top right corner and then choose "Connect to Other Peers". You can also add nodes via the CLI with the command ',(0,r.jsx)(n.code,{children:"chia peer full_node -a PEER_ADDRESS:PORT"})," where ",(0,r.jsx)(n.code,{children:"PORT"})," will typically be 8444."]}),"\n",(0,r.jsx)(n.h2,{id:"detailed-explanation",children:"Detailed explanation"}),"\n",(0,r.jsx)(n.p,{children:'A regular pc can communicate out with endless ports-- if the user is sending a signal out -- pc opens a port -- signal goes out, pc closes the port. Chia uses port 8444 as instant verified communication. So an open port can allow instant communication and start the blockchain sync. Signal comes in on port 8444- that Chia pc is verified, then both user\'s pc, opens their own "communication ports ex port 8421" and that new user can now sync and now they are linked together forming part of Chia mesh.'}),"\n",(0,r.jsx)(n.p,{children:"If the users port 8444 is closed, the users pc has to start sending multiple signals out and hope that a pc with open port 8444 will link with them, then the sync starts. (1) pc can only link up a few pc and with so many other Chia users coming on board, they all have to wait. Keep in mind, Chia is built on a mesh network, the blockchain is shared among all the users, not from central pc."}),"\n",(0,r.jsx)(n.h2,{id:"dealing-with-carrier-grade-nat",children:"Dealing With Carrier-Grade NAT"}),"\n",(0,r.jsxs)(n.p,{children:["Have you opened port 8444 on your router but still not getting connections? With the exhaustion of the IPv4 network space, it's increasingly common for ISPs to use ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Carrier-grade_NAT",children:"Carrier-Grade NAT"})," (CGN, CG-NAT, NAT444) by placing multiple customers behind a single IP address. In this case, even if you open 8444 on your router, other nodes will not be able to connect to you. There are a couple options:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Ask your ISP for a dedicated IP address. They\'ll probably want more money and may require you to upgrade to a "business" plan.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Establish a VPN tunnel through the NAT to a cloud server with a public IP address. It's easier than it sounds and can cost as little as $3-5 a month for a cheap cloud server (some common cloud server providers: AWS, GCP, Digital Ocean, Vultr, Hetzner, Linode). When selecting a provider and server size, pay careful attention to bandwidth; a Chia fullnode isn't too demanding, but can require several GB per day. 1 TB per month is typical of lower-cost VPSs and should be plenty (do keep an eye on it though, bandwidth overage costs can be expensive!)."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Setting up a VPN used to be a daunting task, but ",(0,r.jsx)(n.a,{href:"https://www.wireguard.com",children:"Wireguard"})," has greatly simplified it. The summary is you run Wireguard on both your home server and the cloud server:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"the cloud server is configured to listen for VPN connections from your home server and route all traffic incoming on 8444 to your home server, while also routing outgoing traffic from your home server to the internet."}),"\n",(0,r.jsx)(n.li,{children:'the home server is configured to route all internet traffic (but not local) through the cloud server, while periodically sending a "keepalive" packet to ensure the connection stays open.'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Here is a more detailed write-up with ",(0,r.jsx)(n.a,{href:"https://www.kmr.me/posts/wireguard/",children:"example wireguard configuration"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var r=t(512);const o={tabItem:"tabItem_Ymn6"};var a=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(7294),o=t(512),a=t(2466),i=t(6550),s=t(469),l=t(1980),c=t(7392),d=t(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=g({queryString:t,groupId:o}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,d.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),y=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,s.Z)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=t(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=t(5893);function b(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=s[t].value;o!==r&&(c(n),i(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,o.Z)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function x(e){const n=m(e);return(0,w.jsxs)("div",{className:(0,o.Z)("tabs-container",y.tabList),children:[(0,w.jsx)(b,{...e,...n}),(0,w.jsx)(v,{...e,...n})]})}function j(e){const n=(0,f.Z)();return(0,w.jsx)(x,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(7294);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);