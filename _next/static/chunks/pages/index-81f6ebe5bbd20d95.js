(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(9178)}])},9178:function(e,t,o){"use strict";o.r(t);var s=o(5893),l=o(8313),n=o(8795),a=o(4969),r=o(7183),i=o(9361),c=o(8180),u=o(9569),d=o(628),g=o(1676),x=o(5409),y=o(24),p=o(1163),m=o(7294),h=o(5371),b=o(1290);let f=()=>{let[e]=(0,y.KO)(h.L),[t,o]=(0,m.useState)(""),[f,S]=(0,m.useState)(""),[j,v]=(0,m.useState)([]),[w,k]=(0,m.useState)(""),[C,Z]=(0,m.useState)(""),[_,E]=(0,m.useState)([]),[N,T]=(0,m.useState)([]),[A,$]=(0,m.useState)([]),[R,I]=(0,m.useState)([]);(0,p.useRouter)();let[O,P]=(0,m.useState)(""),U=(0,m.useRef)(null),D=(0,m.useRef)(),[K,L]=(0,m.useState)(!1),[V,X]=(0,m.useState)(""),[F,M]=(0,m.useState)(""),[q,z]=(0,m.useState)(""),[B,G]=(0,m.useState)(null),[H,J]=(0,m.useState)(""),[Q,W]=(0,m.useState)(!1),[Y,ee]=(0,m.useState)(!1),[et,eo]=(0,m.useState)(null),[es,el]=(0,m.useState)({x:0,y:0}),[en,ea]=(0,m.useState)(""),[er,ei]=(0,m.useState)(""),[ec,eu]=(0,m.useState)([]),[ed,eg]=(0,m.useState)(""),[ex,ey]=(0,m.useState)(!1),[ep,em]=(0,m.useState)(!1),{Header:eh,Content:eb,Footer:ef,Sider:eS}=r.Z,ej=j.map((e,t)=>({key:String(t+1),icon:m.createElement(l.Z),label:e,onClick:()=>{eT(e)}})),ev=e=>{console.log("onSelect",e)},ew=e=>{ea(e)},{token:{colorBgContainer:ek}}=i.Z.useToken();(0,m.useEffect)(()=>{let e=async()=>{D.current=await navigator.mediaDevices.getUserMedia({video:!0}),U.current&&(U.current.srcObject=D.current)},t=()=>{D.current&&D.current.getTracks()[0].stop()};return e(),()=>{t()}},[]);let eC=(0,m.useCallback)(async()=>{let e=await b.x.roomlist.$post();console.log(e),v(e.roomId)},[]),eZ=(0,m.useCallback)(async()=>{let t=await b.x.roomlist.$post();if(console.log(t),null===t)console.log("a"),await b.x.create.$post();else if(null===e)console.log(e);else{let t=e.id,o=await b.x.usercheck.$post({body:{userId:t}});console.log(o)}},[e]),e_=async()=>{if(o(ed),console.log("User input:",ed),!e)return;let s=e.id,l=await b.x.user.post({body:{roomId:t,userId:s}});await b.x.roomcreate.post({body:{roomId:t,userId:s}}),console.log(t),v(l.body.roomId)},eE=async()=>{if(!e)return;let o=e.id;console.log(V);let s=await b.x.serchroom.post({body:{searchRoomId:V,userId:o}});await b.x.userroomcreate.post({body:{searchRoomId:V,userId:o}}),console.log(s.body.user),console.log(t),S(s.body.roomid),E(s.body.user),await eC()},eN=async()=>{if(!e)return;console.log(en);let o=e.id,s=e.displayName;void 0===s?console.log("usernameなし"):await b.x.message.post({body:{roomId:t,sender_id:o,content:en,name:s}}),await eA()},eT=async t=>{if(console.log(t),o(t),await b.x.room.post({body:{roomId3:t}}),null===e)console.log("error");else{let o=e.id;console.log(o);let s=await b.x.roomuser.post({body:{roomId3:t}});console.log(s.body.user),E(s.body.user)}let s=await b.x.message_get2.$post({body:{roomId3:t}});console.log(s),void 0===s?console.log("messagesがありません"):(T(s),Z((null==e?void 0:e.id)||""))},eA=async()=>{let o=await b.x.message_get.$post({body:{roomId:t}});void 0===o?console.log("messagesがありません"):(T(o),Z((null==e?void 0:e.id)||""))};return(0,m.useEffect)(()=>{eZ(),eC()},[eC,eZ]),(0,s.jsxs)(r.Z,{hasSider:!0,children:[(0,s.jsxs)("p",{children:["User: ",null==e?void 0:e.id]}),(0,s.jsxs)(eS,{style:{overflow:"auto",height:"100vh",position:"fixed",left:0,top:0,bottom:0},children:[(0,s.jsx)("div",{className:"demo-logo-vertical"}),(0,s.jsx)(c.Z,{theme:"dark",mode:"inline",defaultSelectedKeys:["4"],items:ej})]}),(0,s.jsxs)(r.Z,{className:"site-layout",style:{marginLeft:200},children:[(0,s.jsx)(eh,{style:{padding:0,background:ek}}),(0,s.jsx)(eb,{style:{margin:"24px 16px 0",overflow:"initial"},children:(0,s.jsxs)("div",{style:{padding:24,textAlign:"center",background:ek},children:[(0,s.jsx)("p",{children:"long content"}),Array.from({length:100},(e,t)=>(0,s.jsxs)(m.Fragment,{children:[t%20==0&&t?"more":"...",(0,s.jsx)("br",{})]},t))]})}),(0,s.jsx)(ef,{style:{textAlign:"center"},children:"Ant Design \xa92023 Created by Ant UED"})]}),(0,s.jsxs)("div",{style:{position:"relative"},children:[(0,s.jsx)(u.Z,{style:{width:400,top:750,right:400},onSelect:ev,onSearch:ew,placeholder:"input here"}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("button",{style:{top:800,right:75},onClick:()=>eN(),children:"Save"})]}),(0,s.jsx)(d.Z,{icon:(0,s.jsx)(n.Z,{}),type:"primary",style:{top:800,left:75}}),(0,s.jsx)(g.Z,{title:(0,s.jsx)(x.Z,{value:t,onChange:e=>o(e.target.value),onPressEnter:e_,placeholder:"RoomIdを入力してください"}),visible:ex,onVisibleChange:e=>ey(e),onConfirm:e_,onCancel:()=>ey(!1),okText:"Add",cancelText:"Cancel",placement:"left",children:(0,s.jsx)(d.Z,{icon:(0,s.jsx)(a.Z,{}),type:"primary",style:{top:730,left:75}})}),(0,s.jsx)(g.Z,{title:(0,s.jsx)(x.Z,{value:V,onChange:e=>X(e.target.value),onPressEnter:eE,placeholder:"RoomIdを入力してください"}),visible:ex,onVisibleChange:e=>em(e),onConfirm:eE,onCancel:()=>em(!1),okText:"Search",cancelText:"Cancel",placement:"left",children:(0,s.jsx)(d.Z,{icon:(0,s.jsx)(n.Z,{}),type:"primary",style:{top:800,left:75}})})]})};t.default=f}},function(e){e.O(0,[202,505,774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);