(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{305:function(e,t,a){e.exports={postsBlock:"Myposts_postsBlock__1GQHN",posts:"Myposts_posts__1iAg4"}},306:function(e,t,a){e.exports={item:"Post_item__3uf3D"}},308:function(e,t,a){"use strict";a.r(t);var n=a(15),o=a(16),r=a(18),s=a(17),l=a(0),i=a.n(l),u=a(6),c=a.n(u),p=a(13),m=a(45),f=a(98),d=a.n(f),h=a(35),E=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return i.a.createElement("div",null,!this.state.editMode&&i.a.createElement("div",null,i.a.createElement("b",null,"Status"),":"," ",i.a.createElement("span",{onDoubleClick:this.activateEditMode},this.props.status||"----"," ")),this.state.editMode&&i.a.createElement("div",null,i.a.createElement("input",{onChange:this.onStatusChange,autoFocus:!0,onBlur:this.deactivateEditMode,value:this.state.status})))}}]),a}(i.a.PureComponent),b=a(72),v=a.n(b),g=a(62),O=a(139),k=a(95),P=a.n(k),j=Object(O.a)({form:"edit-profile"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null," ",i.a.createElement("button",null," Save ")," "),e.error&&i.a.createElement("div",{className:P.a.formSummaryError},e.error),i.a.createElement("div",null,i.a.createElement("b",null,"Full Name"),": ",Object(g.c)("Full name","fullName",[],g.a)),i.a.createElement("div",null,i.a.createElement("b",null," Looking for a job "),":",e.profile.lookingForAJob?"yes":"no",Object(g.c)("","lookingForAJob",[],g.a,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",e.profile.lookingForAJobDescription,Object(g.c)("My professional skills","lookingForAJobDescription",[],g.b)),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),":",Object(g.c)("About me","aboutMe",[],g.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),":",Object.keys(e.profile.contacts).map((function(e){return i.a.createElement("div",{key:e,className:d.a.contact},i.a.createElement("b",null,e,": ",Object(g.c)(e,"contacts."+e,[],g.a)))}))))})),y=a(138),S=function(e){return i.a.createElement("div",null,e.isOwner&&i.a.createElement("div",null," ",i.a.createElement("button",{onClick:e.goToEditMode}," Edit ")," "),i.a.createElement("div",null,i.a.createElement("b",null,"Full Name"),": ",e.profile.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job "),": ",e.profile.lookingForAJob?"yes":"no"),e.profile.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),":",e.profile.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",e.profile.aboutMe),i.a.createElement("div",null,!e.isOwner&&i.a.createElement("div",null,i.a.createElement("b",null," Contacts "),":",Object.keys(e.profile.contacts).map((function(t){return i.a.createElement(y.a,{key:t,contactTitle:t,contactValue:e.profile.contacts[t]})}))),!e.isOwner&&i.a.createElement("div",null,i.a.createElement("b",null,"Status"),": ",e.status||"----")))},w=function(e){var t=Object(l.useState)(!1),a=Object(m.a)(t,2),n=a[0],o=a[1];if(!e.profile)return i.a.createElement(h.a,null);var r=function(){var t=Object(p.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.saveProfile(a).then((function(){o(!1)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement("div",{className:d.a.descriptionBlock},i.a.createElement("img",{src:e.profile.photos.large||v.a,className:d.a.mainPhoto}),e.isOwner&&i.a.createElement("div",{className:d.a.profilephoto}," Change your profile photo "),e.isOwner&&i.a.createElement("input",{className:d.a.changephoto,type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),n?i.a.createElement(j,{initialValues:e.profile,onSubmit:r,profile:e.profile}):i.a.createElement(S,{goToEditMode:function(){o(!0)},profile:e.profile,isOwner:e.isOwner,status:e.status}),e.isOwner&&i.a.createElement(E,{status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner})))},M=a(30),A=a(305),N=a.n(A),C=a(306),F=a.n(C),J=function(e){return i.a.createElement("div",{className:F.a.item},i.a.createElement("img",{src:"https://images.firstpost.com/wp-content/uploads/2017/04/avatar-380..jpg"}),e.message,i.a.createElement("div",null,i.a.createElement("span",null," Like ")," ",e.likesCount))},_=a(100),x=a(99),D=Object(x.a)(10),I=Object(O.a)({form:"ProfileAddNewPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(_.a,{component:g.b,placeholder:"Post Message",name:"newPostText",validate:[x.b,D]})),i.a.createElement("div",null,i.a.createElement("button",null," Add post ")))})),T=i.a.memo((function(e){var t=e.posts.map((function(e){return i.a.createElement(J,{key:e.id,message:e.message,likesCount:e.likesCount})}));return i.a.createElement("div",{className:N.a.postsBlock},i.a.createElement("h3",null," My Posts "),i.a.createElement(I,{onSubmit:function(t){e.addPost(t.newPostText),t.newPostText=""}}),i.a.createElement("div",{className:N.a.posts},t))})),U=a(10),B=Object(U.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(M.a)(t))}}}))(T),L=i.a.memo((function(e){return i.a.createElement("div",null,i.a.createElement(w,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile,isAuth:e.isAuth}),i.a.createElement(B,null))})),z=a(12),V=a(7),G=a(54),H=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(L,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile,isAuth:this.props.isAuth})))}}]),a}(i.a.PureComponent);t.default=Object(V.d)(Object(U.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:M.d,getStatus:M.c,updateStatus:M.j,savePhoto:M.e,saveProfile:M.i}),z.f,G.a)(H)}}]);
//# sourceMappingURL=3.85b131b3.chunk.js.map