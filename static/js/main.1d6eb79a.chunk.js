(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{13:function(e,t,n){e.exports={nav:"Navbar_nav__1Sax8",item:"Navbar_item__12m2Y",activeLink:"Navbar_activeLink__3TJVN",friends:"Navbar_friends__1pGhC"}},143:function(e,t,n){e.exports=n(232)},144:function(e,t,n){},146:function(e,t,n){},20:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return g}));var a=n(4),r=n.n(a),s=n(11),o=n(5),i=n(9),u=n(36),c="samurai-network/auth/SET_USER_DATA",l={userId:null,email:null,login:null,isAuth:!1},f=function(e,t,n,a){return{type:c,payload:{userId:e,email:t,login:n,isAuth:a}}},d=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,s,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,s=a.id,o=a.login,u=a.email,t(f(s,u,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n){return function(){var a=Object(s.a)(r.a.mark((function a(s){var o,c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.login(e,t,n);case 2:0===(o=a.sent).data.resultCode?s(d()):(c=o.data.messages.length>0?o.data.messages[0]:"Some error",s(Object(u.a)("login",{_error:c})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},g=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(o.a)({},e,{},t.payload);default:return e}}},232:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(144);var a=n(24),r=n(25),s=n(29),o=n(26),i=n(30),u=n(0),c=n.n(u),l=(n(146),n(59)),f=n.n(l),d=n(7),p=function(e){return c.a.createElement("header",{className:f.a.header},c.a.createElement("img",{src:"https://www.webdesign499.com/wp-content/uploads/2017/11/south-florida-logo-design.jpeg"}),c.a.createElement("div",{className:f.a.loginBlock},e.isAuth?c.a.createElement("div",null," ",e.login," - ",c.a.createElement("button",{onClick:e.logout}," Log out  ")," "):c.a.createElement(d.b,{to:"/login"}," Login ")))},g=(n(46),n(17)),m=n(20),h=function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return c.a.createElement(p,this.props)}}]),t}(c.a.Component),b=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:m.d,getAuthUserData:m.b})(h),E=n(13),v=n.n(E),w=function(){return c.a.createElement("nav",{className:v.a.nav},c.a.createElement("div",{className:v.a.item},c.a.createElement(d.b,{to:"/profile",activeClassName:v.a.activeLink}," Profile ")),c.a.createElement("div",{className:v.a.item},c.a.createElement(d.b,{to:"/dialogs",activeClassName:v.a.activeLink}," Messages ")),c.a.createElement("div",{className:v.a.item},c.a.createElement(d.b,{to:"/users",activeClassName:v.a.activeLink}," Users ")),c.a.createElement("div",{className:v.a.item},c.a.createElement(d.b,{to:"/news"}," News ")),c.a.createElement("div",{className:v.a.item},c.a.createElement(d.b,{to:"/music"}," Music ")),c.a.createElement("div",{className:v.a.item},c.a.createElement(d.b,{to:"/settings"}," Settings ")),c.a.createElement("div",{className:v.a.friends},c.a.createElement("h1",null," Friends  ")))},O=n(22),_=function(e){return c.a.createElement("div",null,"News about all")},P=n(4),S=n.n(P),j=n(11),y=n(31),C=n(5),k=n(9),I=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(C.a)({},e,{},a):e}))},N={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},T=function(e){return{type:"FOLLOW",userId:e}},U=function(e){return{type:"UNFOLLOW",userId:e}},L=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},x=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},A=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(C.a)({},e,{users:I(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(C.a)({},e,{users:I(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(C.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(C.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(C.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(C.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(C.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(y.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},z=n(64),G=n(49),R=n(84),D=n(51),M=n.n(D),H=n(88),B=n.n(H),Y=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,r=e.onPageChanged,s=e.portionSize,o=void 0===s?10:s,i=Math.ceil(t/n),l=[],f=1;f<=i;f++)l.push(f);var d=Math.ceil(i/o),p=Object(u.useState)(1),g=Object(R.a)(p,2),m=g[0],h=g[1],b=(m-1)*o+1,E=m*o;return c.a.createElement("div",{className:M.a.paginator},m>1&&c.a.createElement("button",{onClick:function(){h(m-1)}},"PREV "),l.filter((function(e){return e>=b&&e<=E})).map((function(e){return c.a.createElement("span",{className:B()(Object(G.a)({},M.a.selectedPage,a===e),M.a.pageNumber),key:e,onClick:function(t){r(e)}}," ",e," ")})),d>m&&c.a.createElement("button",{onClick:function(){return h(m+1)}},"NEXT "))},W=n(89),V=n.n(W),J=n(90),X=n.n(J),q=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,r=e.follow,s=t;return c.a.createElement("div",null,c.a.createElement("span",null,c.a.createElement("div",null,c.a.createElement(d.b,{to:"/profile/ "+s.id},c.a.createElement("img",{src:null!=s.photos.small?s.photos.small:X.a,className:V.a.userPhoto}))),c.a.createElement("div",null,s.followed?c.a.createElement("button",{disabled:n.some((function(e){return e===s.id})),onClick:function(){a(s.id)}},"Unfollow "):c.a.createElement("button",{disabled:n.some((function(e){return e===s.id})),onClick:function(){r(s.id)}}," Follow  "))),c.a.createElement("span",null,c.a.createElement("span",null,c.a.createElement("div",null,s.name," "),c.a.createElement("div",null,s.status)),c.a.createElement("span",null,c.a.createElement("div",null,"u.location.country"," "),c.a.createElement("div",null,"u.location.city"))))},Z=function(e){var t=e.currentPage,n=e.onPageChanged,a=e.totalUsersCount,r=e.pageSize,s=e.users,o=Object(z.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return c.a.createElement("div",null,c.a.createElement(Y,{currentPage:t,onPageChanged:n,totalItemsCount:a,pageSize:r}),s.map((function(e){return c.a.createElement(q,{user:e,key:e.id,followingInProgress:o.followingInProgress,unfollow:o.unfollow,follow:o.follow})})))},K=n(39),Q=n(14),$=n(92),ee=Object($.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),te=function(e){return e.usersPage.pageSize},ne=function(e){return e.usersPage.totalUsersCount},ae=function(e){return e.usersPage.currentPage},re=function(e){return e.usersPage.isFetching},se=function(e){return e.usersPage.followingInProgress},oe=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).onPageChanged=function(e){n.props.requestUsers(e,n.props.pageSize)},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.props.isFetching?c.a.createElement(K.a,null):null,c.a.createElement(Z,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(c.a.Component),ie=Object(Q.d)(Object(g.b)((function(e){return{users:ee(e),pageSize:te(e),totalUsersCount:ne(e),currentPage:ae(e),isFetching:re(e),followingInProgress:se(e)}}),{follow:function(e){return function(){var t=Object(j.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(A(!0,e)),t.next=3,k.c.follow(e);case 3:0===t.sent.resultCode&&n(T(e)),n(A(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(j.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(A(!0,e)),t.next=3,k.c.unfollow(e);case 3:0===t.sent.resultCode&&n(U(e)),n(A(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:L,toggleFollowingProgress:A,requestUsers:function(e,t){return function(){var n=Object(j.a)(S.a.mark((function n(a){var r;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(L(e)),a(x(!0)),n.next=4,k.c.getUsers(e,t);case 4:r=n.sent,a(x(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(oe),ue={initialized:!1},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(C.a)({},e,{initialized:!0});default:return e}},le=n(37),fe=n(48),de=n(50),pe=n(93),ge=n(85),me=Object(Q.c)({profilePage:le.b,dialogsPage:fe.a,sidebar:de.a,usersPage:F,auth:m.a,form:ge.a,app:ce}),he=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.d,be=Object(Q.e)(me,he(Object(Q.a)(pe.a)));window.store=be;var Ee=be,ve=function(e){return c.a.createElement(u.Suspense,{fallback:c.a.createElement("div",null," Loading...")},c.a.createElement(e,null))},we=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,300))})),Oe=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,301))})),_e=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,299))})),Pe=function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?c.a.createElement("div",{className:"app-wrapper"},c.a.createElement(b,null),c.a.createElement(w,null),c.a.createElement("div",{class:"app-wrapper-content"},c.a.createElement(O.b,{path:"/dialogs",render:function(){return c.a.createElement(u.Suspense,{fallback:c.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},c.a.createElement(Oe,null))}}),c.a.createElement(O.b,{path:"/profile/:userId?",render:function(){return ve(we)}}),c.a.createElement(O.b,{path:"/news",component:_}),c.a.createElement(O.b,{path:"/users",render:function(){return c.a.createElement(ie,null)}}),c.a.createElement(O.b,{path:"/login",render:function(){return c.a.createElement(u.Suspense,{fallback:c.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},c.a.createElement(_e,null))}}))):c.a.createElement(K.a,null)}}]),t}(u.Component),Se=Object(Q.d)(O.f,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(Object(m.b)()).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Pe),je=function(e){return c.a.createElement(d.a,{basename:"/demo-naira"},c.a.createElement(g.a,{store:Ee},c.a.createElement(Se,null)))},ye=(n(78),n(47));n.n(ye).a.render(c.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return g}));var a=n(4),r=n.n(a),s=n(11),o=n(31),i=n(5),u=n(9),c={posts:[{id:1,message:"Hi",likesCount:13},{id:1,message:"Hi",likesCount:5},{id:1,message:"Blabla",likesCount:7}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:a=t.sent,n(f(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0},a=Object(i.a)({},e);return a.posts=Object(o.a)(e.posts),a.posts.push(n),a.newPostText="",a;case"SET_USER_PROFILE":return Object(i.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(i.a)({},e,{status:t.status});default:return e}}},39:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(91),o=n.n(s);t.a=function(e){return r.a.createElement("div",{style:{backgroundColor:"white"}},r.a.createElement("img",{src:o.a}))}},48:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(31),r=n(5),s=(n(78),{messages:[{id:1,message:"Hi"},{id:2,message:"How is you it kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}],dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}]}),o=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}},50:function(e,t,n){"use strict";var a={};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;arguments.length>1&&arguments[1];return e}},51:function(e,t,n){e.exports={paginator:"Paginator_paginator__Tm3Fo",pageNumber:"Paginator_pageNumber__3ECFz",selectedPage:"Paginator_selectedPage__2CG2E"}},59:function(e,t,n){e.exports={header:"Header_header__XRk6Y",loginBlock:"Header_loginBlock__17bGZ"}},78:function(e,t,n){"use strict";var a=n(37),r=n(48),s=n(50),o={_state:{profilePage:{posts:[{id:1,message:"Hi",likesCount:13},{id:1,message:"Hi",likesCount:5},{id:1,message:"Blabla",likesCount:7}],newPostText:"it-kamasutra.com"},dialogsPage:{messages:[{id:1,message:"Hi"},{id:2,message:"How is you it kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}],dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],newMessageBody:" "},sidebar:{}},_callSubscriber:function(){console.log("State changed")},getState:function(){return this._state},subscribe:function(e){this._callSubscriber=e},dispatch:function(e){this._state.profilePage=Object(a.b)(this._state.profilePage,e),this._state.dialogsPage=Object(r.a)(this._state.dialogsPage,e),this._state.sidebarPage=Object(s.a)(this._state.sidebarPage,e),this._callSubscriber(this._state)}};window.store=o},89:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1JxQS",selectedPage:"users_selectedPage__4jc4f"}},9:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(46),r=(n(20),a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"3668d79c-2880-477d-8d56-2bdc4f8a3237"}})),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method.Please use profileAPI object."),o.getProfile(e)}},o={getProfile:function(e){return r.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return r.get("status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))}},i={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},90:function(e,t,n){e.exports=n.p+"static/media/user.6db09181.png"},91:function(e,t,n){e.exports=n.p+"static/media/preloader.f593b826.svg"}},[[143,2,3]]]);
//# sourceMappingURL=main.1d6eb79a.chunk.js.map