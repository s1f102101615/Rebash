(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2121)}])},2121:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return g}});var n=t(5893),a=t(24),i=t(7294),o=t(8239);let l=e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e.size,height:e.size,fill:e.fill,children:(0,n.jsx)("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"})});var r=t(1733),c=t(7251),d=t(2038),u=t.n(d);let m=e=>{let{user:s}=e,t=async()=>{confirm("Logout?")&&await (0,c.k)()};return(0,n.jsx)("div",{className:u().container,children:(0,n.jsxs)("div",{className:u().main,children:[(0,n.jsx)("img",{src:r.D.frourio_svg,height:36,alt:"frourio logo"}),(0,n.jsxs)("div",{className:u().userBtn,onClick:t,children:[void 0!==s.photoURL?(0,n.jsx)("img",{className:u().userIcon,src:s.photoURL,height:24,alt:s.displayName}):(0,n.jsx)(l,{size:18,fill:"#555"}),(0,n.jsx)("span",{className:u().userName,children:s.displayName})]})]})})};var x=t(1290),_=t(5371),p=t(2729),f=t.n(p);let h=()=>{let[e]=(0,a.KO)(_.L),[s,t]=(0,i.useState)(""),[l,r]=(0,i.useState)([]),[c,d]=(0,i.useState)(""),[u,p]=(0,i.useState)([]),[h,g]=(0,i.useState)([]),[v,j]=(0,i.useState)([]),w=(0,i.useCallback)(async()=>{if(!e)return;let s=e.id,t=await x.x.usercheck.$post({body:{userId:s}});console.log(t),void 0===t&&await x.x.create.$post()},[e]),y=e=>{t(e.target.value)},N=e=>{d(e.target.value)},b=async t=>{if(t.preventDefault(),!e)return;let n=e.id;l.push(s),r(l);let a=await x.x.user.post({body:{aroom:l,userId:n}});console.log(s),await x.x.roomcreate.post({body:{roomId:s}}),r(a.body.roomId)},k=async t=>{if(t.preventDefault(),!e)return;let n=e.id;await x.x.message.post({body:{roomId:s,sender_id:n,content:c}}),await C()},B=async e=>{let s=await x.x.room.post({body:{roomId:e}}),t=s.body.map(e=>e.comment);p(t.flat())},C=(0,i.useCallback)(async()=>{let t=await x.x.message_get.$post({body:{roomId:s}});console.log(c);let n=null==e?void 0:e.id,a=null==t?void 0:t.filter(e=>e.sender_Id===n);console.log(a),console.log("asd");let i=null==t?void 0:t.filter(e=>e.sender_Id!==n);if(void 0===a||void 0===i)console.log("自分のmessageがありません"),console.log("相手のmessageがありません");else{let e=a.map(e=>e.contentmess);g(e),console.log(a);let s=i.map(e=>e.contentmess);j(s)}},[c,s,null==e?void 0:e.id]);return((0,i.useEffect)(()=>{w(),C()},[w,C]),e)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m,{user:e}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["User: ",e.id]}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:f().roomIds,children:[(0,n.jsx)("p",{children:"Room IDs:"}),l.map(e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("p",{onClick:()=>B(e),children:e},e)})),(0,n.jsxs)("form",{style:{textAlign:"left",marginTop:"400px"},onSubmit:b,children:[(0,n.jsx)("input",{value:s,type:"text",onChange:y}),(0,n.jsx)("input",{type:"submit",value:"  create  "})]})]}),(0,n.jsx)("div",{})]})]}),(0,n.jsxs)("div",{className:f().comment,children:[(0,n.jsx)("p",{children:"自分のコメント"}),h.map(e=>(0,n.jsx)("p",{children:e},e)),(0,n.jsx)("p",{children:"他の人のコメント"}),v.map(e=>(0,n.jsx)("p",{children:e},e))]}),(0,n.jsx)("div",{className:f().form,children:(0,n.jsxs)("form",{style:{marginLeft:"700px"},onSubmit:k,children:[(0,n.jsx)("input",{value:c,type:"text",onChange:N}),(0,n.jsx)("input",{type:"submit",value:"  createcomment  "})]})})]}):(0,n.jsx)(o.g,{visible:!0})};var g=h},7251:function(e,s,t){"use strict";t.d(s,{_:function(){return o},k:function(){return l}});var n=t(7908),a=t(328),i=t(3377);let o=async()=>{let e=new n.GH;e.addScope("read:user"),await (0,n.rh)((0,a.l)(),e).catch(i.F)},l=async()=>{await (0,a.l)().signOut()}},2038:function(e){e.exports={container:"BasicHeader_container__5rTZS",main:"BasicHeader_main__yd6De",userBtn:"BasicHeader_userBtn__B7CLf",userIcon:"BasicHeader_userIcon__fjiOn",userName:"BasicHeader_userName__vjAjN"}},2729:function(e){e.exports={title:"index_title__gEapU",tasks:"index_tasks__T3_J7",deleteBtn:"index_deleteBtn__DU3nM",roomIds:"index_roomIds__mF8xa",comment:"index_comment__q78Pf",form:"index_form__Hw_Cf"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);