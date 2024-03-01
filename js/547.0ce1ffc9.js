"use strict";(self["webpackChunkvuejs_spa"]=self["webpackChunkvuejs_spa"]||[]).push([[547],{1803:function(t,e,s){s.d(e,{Z:function(){return c}});var i=s(3396),l=s(7139);const n={class:"context-options"};function r(t,e,s,r,a,o){return(0,i.wg)(),(0,i.iD)("div",{class:(0,l.C_)(["context-menu",{"context-active":this.active}])},[(0,i._)("div",{class:"context-header",ref:"header",onClick:e[0]||(e[0]=t=>this.active=!this.active)},[(0,i.WI)(t.$slots,"header",{},void 0,!0)],512),(0,i._)("ul",n,[(0,i.WI)(t.$slots,"options",{},void 0,!0)])],2)}var a={name:"contextMenu",data(){return{active:!1}},mounted(){document.addEventListener("click",this.close)},beforeUnmount(){document.removeEventListener("click",this.close)},methods:{close(t){this.$refs.header.contains(t.target)||(this.active=!1)}}},o=s(89);const u=(0,o.Z)(a,[["render",r],["__scopeId","data-v-2ecf1708"]]);var c=u},2547:function(t,e,s){s.r(e),s.d(e,{default:function(){return De}});s(7658);var i=s(3396),l=s(7139),n=s(9242);const r=t=>((0,i.dD)("data-v-566aa00e"),t=t(),(0,i.Cn)(),t),a=r((()=>(0,i._)("span",{class:"bi bi-emoji-frown"},null,-1))),o={class:"banner"},u=["src"],c={key:1,class:"banner-bg gradient-bg-reverse"},p={style:{height:"min-content",position:"relative"}},d=["src"],h={key:1,class:"user-image s200x200 gradient-bg"},m=r((()=>(0,i._)("button",{type:"button",class:"button"},[(0,i._)("span",{class:"icon-text"},[(0,i._)("span",{class:"bi bi-camera-fill"}),(0,i._)("span",null,"Update image")])],-1))),b={class:"info-wrapper gap-10"},g={key:0,class:"banner-info banner-info-primary font-size-large"},y={key:1,class:"banner-info banner-info-secondary font-size-big"},_={key:2,class:"banner-info banner-info-secondary font-size-big"},k={key:2,class:"banner-edit-area"},f=r((()=>(0,i._)("button",{type:"button",class:"button"},[(0,i._)("span",{class:"icon-text"},[(0,i._)("span",{class:"bi bi-camera-fill"}),(0,i._)("span",null,"Update image")])],-1))),w={class:"content column"},v={class:"nav-tab"},x={class:"row right"},C=r((()=>(0,i._)("span",{class:"bi bi-pencil-fill"},null,-1))),U=r((()=>(0,i._)("span",null,"Edit",-1))),D=[C,U],P=r((()=>(0,i._)("span",{class:"bi bi-person-plus"},null,-1))),z=r((()=>(0,i._)("span",null,"Follow",-1))),q=[P,z],S=r((()=>(0,i._)("span",{class:"bi bi-person-plus"},null,-1))),W=r((()=>(0,i._)("span",null,"Follow back",-1))),L=[S,W],M=r((()=>(0,i._)("span",{class:"bi bi bi-person-check-fill"},null,-1))),j=r((()=>(0,i._)("span",null,"Following",-1))),I=[M,j],Z={key:4,class:"button button-primary"},E={class:"row"},F={class:"column column-main"},V={class:"row gap-5"},$=r((()=>(0,i._)("span",{class:"font-size-medium"},"Followers",-1))),B={class:"font-size-big"},N=r((()=>(0,i._)("span",{class:"font-size-medium"},"Following",-1))),A={class:"font-size-big"},Y=r((()=>(0,i._)("span",{class:"font-size-medium"},"Songs",-1))),T={class:"font-size-big"},H={key:0,class:"primary-text font-size-small"},R={key:1,class:"column gap-5"},O={class:"icon-text"},J=r((()=>(0,i._)("span",{class:"bi bi-suit-heart-fill"},null,-1))),K={class:"icon-text"},Q=r((()=>(0,i._)("span",{class:"bi bi-people-fill"},null,-1))),G={class:"project-info",key:"projectInfo"},X=r((()=>(0,i._)("p",null,[(0,i._)("span",null,"About website"),(0,i._)("br"),(0,i.Uk)(" Non-commercial project created solely for demonstration purposes. I do not own the copyrights to the posted content. ")],-1))),tt=r((()=>(0,i._)("p",null,[(0,i._)("span",null,"Technologies used"),(0,i._)("br"),(0,i.Uk)(" Frontend: HTML, CSS (PostCSS), Vue.js, Axios;"),(0,i._)("br"),(0,i.Uk)(" Backend: Express.js, MySQL, REST API, Multer, JSON Web Token. ")],-1))),et=r((()=>(0,i._)("p",{style:{"white-space":"nowrap"}},[(0,i.Uk)("Created by "),(0,i._)("a",{href:"https://github.com/sleeping-slopes",class:"accent-text alink",target:"”_blank”",rel:"noopener noreferrer"},"@sleeping-slopes")],-1))),st=r((()=>(0,i._)("p",{style:{"white-space":"nowrap"}},[(0,i._)("span",{class:"accent-text"},"Language: "),(0,i.Uk)("English (US)")],-1))),it=[X,tt,et,st],lt={key:1,class:"loader-wrapper"},nt=r((()=>(0,i._)("div",{class:"loader"},null,-1))),rt=[nt];function at(t,e,s,r,C,U){const P=(0,i.up)("errorMessage"),z=(0,i.up)("editProfileModal"),S=(0,i.up)("contextMenu"),W=(0,i.up)("router-link"),M=(0,i.up)("router-view"),j=(0,i.up)("glyphLink"),X=(0,i.up)("panel"),tt=(0,i.up)("songContainer"),et=(0,i.up)("userContainer");return this.loaded?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[this.user.error?((0,i.wg)(),(0,i.j4)(P,{key:0},{errorIcon:(0,i.w5)((()=>[a])),status:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(this.user.error.status),1)])),message:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(this.user.error.message),1)])),_:1})):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},["edit"==this.$route.query.action&&this.user.me?((0,i.wg)(),(0,i.j4)(z,{key:0,user:this.user},null,8,["user"])):(0,i.kq)("",!0),(0,i._)("div",o,[this.user.banner?((0,i.wg)(),(0,i.iD)("img",{key:0,class:"banner-bg",src:this.user.bannersrc},null,8,u)):((0,i.wg)(),(0,i.iD)("div",c)),(0,i._)("div",p,[this.user.profile_picture?((0,i.wg)(),(0,i.iD)("img",{key:0,class:"user-image s200x200",src:this.user.picturesrc},null,8,d)):((0,i.wg)(),(0,i.iD)("div",h)),this.user.me?((0,i.wg)(),(0,i.j4)(S,{key:2,class:"x-center-absolute",style:{top:"calc(100% - 50px)","min-width":"120px"}},{header:(0,i.w5)((()=>[m])),options:(0,i.w5)((()=>[(0,i._)("li",null,[(0,i._)("button",{type:"button",class:"button",onClick:e[0]||(e[0]=t=>this.$refs.profilePictureInput.click())},"Replace image"),(0,i._)("input",{type:"file",ref:"profilePictureInput",style:{display:"none"},onChange:e[1]||(e[1]=(...e)=>t.uploadProfilePicture&&t.uploadProfilePicture(...e)),accept:"image/*"},null,544)]),(0,i._)("li",null,[(0,i._)("button",{type:"button",class:"button",onClick:e[2]||(e[2]=(...e)=>t.deleteProfilePicture&&t.deleteProfilePicture(...e))},"Delete image")])])),_:1})):(0,i.kq)("",!0)]),(0,i._)("div",b,[this.user.username?((0,i.wg)(),(0,i.iD)("h1",g,(0,l.zw)(this.user.username),1)):(0,i.kq)("",!0),this.user.status?((0,i.wg)(),(0,i.iD)("span",y,(0,l.zw)(this.user.status),1)):(0,i.kq)("",!0),this.user.city||this.user.country?((0,i.wg)(),(0,i.iD)("span",_,(0,l.zw)([this.user.city,this.user.country].filter((t=>t)).join(", ")),1)):(0,i.kq)("",!0)]),this.user.me?((0,i.wg)(),(0,i.iD)("div",k,[(0,i.Wm)(S,null,{header:(0,i.w5)((()=>[f])),options:(0,i.w5)((()=>[(0,i._)("li",null,[(0,i._)("button",{type:"button",class:"button",onClick:e[3]||(e[3]=t=>this.$refs.bannerInput.click())},"Replace image"),(0,i._)("input",{type:"file",ref:"bannerInput",style:{display:"none"},onChange:e[4]||(e[4]=(...e)=>t.uploadBanner&&t.uploadBanner(...e)),accept:"image/*"},null,544)]),(0,i._)("li",null,[(0,i._)("button",{type:"button",class:"button",onClick:e[5]||(e[5]=(...e)=>t.deleteBanner&&t.deleteBanner(...e))},"Delete image")])])),_:1})])):(0,i.kq)("",!0)]),(0,i._)("div",w,[(0,i._)("nav",v,[(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Wm)(W,{to:{name:"UserActivity",params:{login:this.login}}},{default:(0,i.w5)((()=>[(0,i.Uk)("All")])),_:1},8,["to"])]),(0,i._)("li",null,[(0,i.Wm)(W,{to:{name:"UserPopular",params:{login:this.login}}},{default:(0,i.w5)((()=>[(0,i.Uk)("Popular")])),_:1},8,["to"])]),(0,i._)("li",null,[(0,i.Wm)(W,{to:{name:"UserSongs",params:{login:this.login}}},{default:(0,i.w5)((()=>[(0,i.Uk)("Songs")])),_:1},8,["to"])]),(0,i._)("li",null,[(0,i.Wm)(W,{to:{name:"UserPlaylists",params:{login:this.login}}},{default:(0,i.w5)((()=>[(0,i.Uk)("Playlists")])),_:1},8,["to"])]),(0,i._)("li",null,[(0,i.Wm)(W,{to:{name:"UserLikes",params:{login:this.login}}},{default:(0,i.w5)((()=>[(0,i.Uk)("Likes")])),_:1},8,["to"])])]),(0,i._)("div",x,[this.user.me?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"button button-secondary icon-text",onClick:e[6]||(e[6]=e=>t.$router.push({path:t.$route.fullPath,query:{action:"edit"}}))},D)):(0,i.kq)("",!0),this.user.youFollow||this.user.followsYou||this.user.me?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("button",{key:1,class:"button button-secondary icon-text",onClick:e[7]||(e[7]=(0,n.iM)((t=>this.follow()),["stop"]))},q)),this.user.youFollow||!this.user.followsYou||this.user.me?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("button",{key:2,class:"button button-secondary icon-text",onClick:e[8]||(e[8]=(0,n.iM)((t=>this.follow()),["stop"]))},L)),this.user.youFollow&&!this.user.me?((0,i.wg)(),(0,i.iD)("button",{key:3,class:"button button-secondary toggled icon-text",onClick:e[9]||(e[9]=(0,n.iM)((t=>this.unfollow()),["stop"]))},I)):(0,i.kq)("",!0),this.user.me?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("button",Z,"Message"))])]),(0,i._)("div",E,[(0,i._)("div",F,[(0,i.Wm)(M)]),(0,i.Wm)(n.W3,{name:"panelFade",tag:"div",class:"column column-side"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)(X,{key:"userStatsPanel"},{content:(0,i.w5)((()=>[(0,i._)("div",V,[(0,i.Wm)(W,{to:{name:"UserFollowers",params:{login:this.login}},class:"user-stat"},{default:(0,i.w5)((()=>[$,(0,i._)("span",B,(0,l.zw)(t.abbreviateNumber(this.user.followers_count,0)),1)])),_:1},8,["to"]),(0,i.Wm)(W,{to:{name:"UserFollowing",params:{login:this.login}},class:"user-stat"},{default:(0,i.w5)((()=>[N,(0,i._)("span",A,(0,l.zw)(t.abbreviateNumber(this.user.following_count,0)),1)])),_:1},8,["to"]),(0,i.Wm)(W,{to:{name:"UserSongs",params:{login:this.login}},class:"user-stat"},{default:(0,i.w5)((()=>[Y,(0,i._)("span",T,(0,l.zw)(t.abbreviateNumber(this.user.songs_count,0)),1)])),_:1},8,["to"])]),this.user.bio?((0,i.wg)(),(0,i.iD)("span",H,(0,l.zw)(this.user.bio),1)):(0,i.kq)("",!0),this.user.links.length>0?((0,i.wg)(),(0,i.iD)("ul",R,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.user.links,(t=>((0,i.wg)(),(0,i.iD)("li",null,[(0,i.Wm)(j,{class:"font-size-small",url:t.url,description:t.description},null,8,["url","description"])])))),256))])):(0,i.kq)("",!0)])),_:1})),this.userSongLikes?.songs?.length?((0,i.wg)(),(0,i.j4)(X,{key:"songLikesPanel"},{header:(0,i.w5)((()=>[(0,i._)("span",O,[J,(0,i._)("span",null,(0,l.zw)(t.abbreviateNumber(this.userSongLikes.songs.length))+" like"+(0,l.zw)(1==this.userSongLikes.songs.length?"":"s"),1)])])),menu:(0,i.w5)((()=>[(0,i.Wm)(W,{to:{name:"UserLikes",params:{login:this.login}},class:"button button-secondary"},{default:(0,i.w5)((()=>[(0,i.Uk)("View all")])),_:1},8,["to"])])),content:(0,i.w5)((()=>[(0,i.Wm)(tt,{type:"ul-list",playlist:this.userSongLikes,maxDisplay:3},null,8,["playlist"])])),_:1})):(0,i.kq)("",!0),this.followers?.length?((0,i.wg)(),(0,i.j4)(X,{key:"followersPanel"},{header:(0,i.w5)((()=>[(0,i._)("span",K,[Q,(0,i._)("span",null,(0,l.zw)(t.abbreviateNumber(this.followers?.length))+" follower"+(0,l.zw)(1==this.followers?.length?"":"s"),1)])])),menu:(0,i.w5)((()=>[(0,i.Wm)(W,{to:{name:"UserFollowers",params:{login:this.login}},class:"button button-secondary"},{default:(0,i.w5)((()=>[(0,i.Uk)("View all")])),_:1},8,["to"])])),content:(0,i.w5)((()=>[(0,i.Wm)(et,{type:"row gap-0",dynamicComponent:"userIcon",users:this.followers,maxDisplay:13},null,8,["users"])])),_:1})):(0,i.kq)("",!0),((0,i.wg)(),(0,i.iD)("article",G,it))])),_:1})])])],64))],64)):((0,i.wg)(),(0,i.iD)("div",lt,rt))}var ot=s(3278),ut=s(3319);const ct={class:"row gap-20"},pt={style:{height:"min-content",position:"relative"}},dt=["src"],ht={key:1,class:"user-image s200x200 bi bi-person-fill"},mt=(0,i._)("button",{type:"button",class:"button"},[(0,i._)("span",{class:"icon-text"},[(0,i._)("span",{class:"bi bi-camera-fill"}),(0,i._)("span",null,"Update image")])],-1),bt={class:"column gap-20 w-100"},gt={class:"form-field"},yt=(0,i._)("label",{for:"input_userUsername"},"Display name",-1),_t=["placeholder"],kt={key:0,class:"icon-text notification-error"},ft=(0,i._)("span",{class:"bi bi-exclamation-circle-fill"},null,-1),wt={class:"form-field"},vt=(0,i._)("label",{for:"input_userStatus"},"Status",-1),xt={key:0,class:"icon-text notification-error"},Ct=(0,i._)("span",{class:"bi bi-exclamation-circle-fill"},null,-1),Ut={class:"row gap-10"},Dt={class:"form-field"},Pt=(0,i._)("label",{for:"input_userCity"},"City",-1),zt={key:0,class:"icon-text notification-error"},qt=(0,i._)("span",{class:"bi bi-exclamation-circle-fill"},null,-1),St={class:"form-field"},Wt=(0,i._)("label",{for:"input_userCountry"},"Country",-1),Lt={key:0,class:"icon-text notification-error"},Mt=(0,i._)("span",{class:"bi bi-exclamation-circle-fill"},null,-1),jt={class:"form-field"},It=(0,i._)("label",{for:"input_userBio"},"Bio",-1),Zt={key:0,class:"icon-text notification-error"},Et=(0,i._)("span",{class:"bi bi-exclamation-circle-fill"},null,-1),Ft=(0,i._)("hr",null,null,-1),Vt={class:"column gap-20"},$t=(0,i._)("span",{class:"primary-text font-size-medium"},"Your links",-1),Bt={key:0,class:"column gap-15"},Nt={class:"row gap-10"},At={class:"form-field"},Yt=["onUpdate:modelValue"],Tt={key:0,class:"icon-text notification-error"},Ht=(0,i._)("span",{class:"bi bi-exclamation-circle-fill"},null,-1),Rt={class:"form-field"},Ot=["onUpdate:modelValue"],Jt={key:0,class:"icon-text notification-error"},Kt=(0,i._)("span",{class:"bi bi-exclamation-circle-fill"},null,-1),Qt=["onClick"],Gt={class:"row"},Xt=["disabled"],te={key:0,class:"icon-text notification-error"},ee=(0,i._)("span",{class:"bi bi-exclamation-circle-fill"},null,-1),se=(0,i._)("span",null,"A maximum of 10 links can be added to your profile.",-1),ie=[ee,se],le=(0,i._)("hr",null,null,-1),ne={class:"row right"},re=(0,i._)("button",{type:"submit",class:"button button-primary"},"Save changes",-1);function ae(t,e,s,r,a,o){const u=(0,i.up)("contextMenu"),c=(0,i.up)("modal");return(0,i.wg)(),(0,i.j4)(c,{width:"900px"},{header:(0,i.w5)((()=>[(0,i.Uk)("Edit your profile")])),content:(0,i.w5)((()=>[(0,i._)("form",{onSubmit:e[10]||(e[10]=(0,n.iM)(((...t)=>o.editProfile&&o.editProfile(...t)),["prevent"])),class:"column gap-15 scroll",style:{padding:"5px"}},[(0,i._)("div",ct,[(0,i._)("div",pt,[this.user.profile_picture?((0,i.wg)(),(0,i.iD)("img",{key:0,class:"user-image s200x200",src:this.user.picturesrc},null,8,dt)):((0,i.wg)(),(0,i.iD)("div",ht)),(0,i.Wm)(u,{class:"x-center-absolute",style:{top:"calc(100% - 50px)","min-width":"120px"}},{header:(0,i.w5)((()=>[mt])),options:(0,i.w5)((()=>[(0,i._)("li",null,[(0,i._)("button",{type:"button",class:"button",onClick:e[0]||(e[0]=t=>this.$refs.profilePictureInput.click())},"Replace image"),(0,i._)("input",{type:"file",ref:"profilePictureInput",style:{display:"none"},onChange:e[1]||(e[1]=(...e)=>t.uploadProfilePicture&&t.uploadProfilePicture(...e)),accept:"image/*"},null,544)]),(0,i._)("li",null,[(0,i._)("button",{type:"button",class:"button",onClick:e[2]||(e[2]=(...e)=>t.deleteProfilePicture&&t.deleteProfilePicture(...e))},"Delete image")])])),_:1})]),(0,i._)("div",bt,[(0,i._)("div",gt,[yt,(0,i.wy)((0,i._)("input",{id:"input_userUsername",type:"text",class:(0,l.C_)({"input-error":a.username.error}),placeholder:this.user.login,"onUpdate:modelValue":e[3]||(e[3]=t=>a.username.data=t)},null,10,_t),[[n.nr,a.username.data]]),a.username.error?((0,i.wg)(),(0,i.iD)("span",kt,[ft,(0,i._)("span",null,(0,l.zw)(a.username.error),1)])):(0,i.kq)("",!0)]),(0,i._)("div",wt,[vt,(0,i.wy)((0,i._)("input",{id:"input_userStatus",type:"text",class:(0,l.C_)({"input-error":a.status.error}),"onUpdate:modelValue":e[4]||(e[4]=t=>a.status.data=t)},null,2),[[n.nr,a.status.data]]),a.status.error?((0,i.wg)(),(0,i.iD)("span",xt,[Ct,(0,i._)("span",null,(0,l.zw)(a.status.error),1)])):(0,i.kq)("",!0)]),(0,i._)("div",Ut,[(0,i._)("div",Dt,[Pt,(0,i.wy)((0,i._)("input",{id:"input_userCity",type:"text",class:(0,l.C_)({"input-error":a.city.error}),"onUpdate:modelValue":e[5]||(e[5]=t=>a.city.data=t)},null,2),[[n.nr,a.city.data]]),a.city.error?((0,i.wg)(),(0,i.iD)("span",zt,[qt,(0,i._)("span",null,(0,l.zw)(a.city.error),1)])):(0,i.kq)("",!0)]),(0,i._)("div",St,[Wt,(0,i.wy)((0,i._)("input",{id:"input_userCountry",type:"text",class:(0,l.C_)({"input-error":a.country.error}),"onUpdate:modelValue":e[6]||(e[6]=t=>a.country.data=t)},null,2),[[n.nr,a.country.data]]),a.country.error?((0,i.wg)(),(0,i.iD)("span",Lt,[Mt,(0,i._)("span",null,(0,l.zw)(a.country.error),1)])):(0,i.kq)("",!0)])]),(0,i._)("div",jt,[It,(0,i.wy)((0,i._)("textarea",{id:"input_userBio",rows:"5",type:"text",class:(0,l.C_)({"input-error":a.bio.error}),placeholder:"Tell a little bit about yourself",style:{resize:"vertical"},"onUpdate:modelValue":e[7]||(e[7]=t=>a.bio.data=t)},null,2),[[n.nr,a.bio.data]]),a.bio.error?((0,i.wg)(),(0,i.iD)("span",Zt,[Et,(0,i._)("span",null,(0,l.zw)(a.bio.error),1)])):(0,i.kq)("",!0)])])]),Ft,(0,i._)("div",Vt,[$t,this.links.length?((0,i.wg)(),(0,i.iD)("div",Bt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.links,((t,e)=>((0,i.wg)(),(0,i.iD)("div",Nt,[(0,i._)("div",At,[(0,i.wy)((0,i._)("input",{type:"text",class:(0,l.C_)({"input-error":t.url.error}),placeholder:"Web or email address","onUpdate:modelValue":e=>t.url.data=e},null,10,Yt),[[n.nr,t.url.data]]),t.url.error?((0,i.wg)(),(0,i.iD)("span",Tt,[Ht,(0,i._)("span",null,(0,l.zw)(t.url.error),1)])):(0,i.kq)("",!0)]),(0,i._)("div",Rt,[(0,i.wy)((0,i._)("input",{type:"text",class:(0,l.C_)({"input-error":t.description.error}),placeholder:"Short title","onUpdate:modelValue":e=>t.description.data=e},null,10,Ot),[[n.nr,t.description.data]]),t.description.error?((0,i.wg)(),(0,i.iD)("span",Jt,[Kt,(0,i._)("span",null,(0,l.zw)(t.description.error),1)])):(0,i.kq)("",!0)]),(0,i._)("button",{type:"button",class:"button form-button bi bi-trash3-fill",onClick:t=>this.links.splice(e,1)},null,8,Qt)])))),256))])):(0,i.kq)("",!0),(0,i._)("div",Gt,[(0,i._)("button",{type:"button",class:"button button-secondary",onClick:e[8]||(e[8]=t=>this.links.push({url:{data:null,error:null},description:{data:null,error:null}})),disabled:this.links.length>=10},"Add link",8,Xt),this.links.length>=10?((0,i.wg)(),(0,i.iD)("span",te,ie)):(0,i.kq)("",!0)])]),le,(0,i._)("div",ne,[(0,i._)("button",{type:"button",class:"button button-secondary",onClick:e[9]||(e[9]=e=>t.$router.replace({query:null}))},"Cancel"),re])],32)])),_:1})}var oe=s(8065),ue=s(1803),ce=s(7285),pe={name:"editProfileModal",components:{modal:oe.Z,contextMenu:ue.Z},data(){return{username:{data:this.user.username,error:null},status:{data:this.user.status,error:null},city:{data:this.user.city,error:null},country:{data:this.user.country,error:null},bio:{data:this.user.bio,error:null},links:[]}},props:{user:{default:void 0}},created(){for(let t=0;t<this.user.links.length;t++)this.links.push({url:{data:this.user.links[t].url,error:null},description:{data:this.user.links[t].description,error:null}})},methods:{async editProfile(){this.username.data=this.username.data||null,this.username.error=null,this.username.data&&(this.username.data=this.username.data.trim(),this.username.data.length>50&&(this.username.error="Enter a display name that is up to 50 characters.")),this.status.data=this.status.data||null,this.status.error=null,this.status.data&&(this.status.data=this.status.data.trim(),this.status.data.length>50&&(this.status.error="Enter a status that is up to 50 characters.")),this.city.data=this.city.data||null,this.city.error=null,this.city.data&&(this.city.data=this.city.data.trim(),this.city.data.length>35&&(this.city.error="Enter a city that is up to 35 characters.")),this.country.data=this.country.data||null,this.country.error=null,this.country.data&&(this.country.data=this.country.data.trim(),this.country.data.length>35&&(this.country.error="Enter a country that is up to 35 characters.")),this.bio.data=this.bio.data||null,this.bio.error=null,this.bio.data&&(this.bio.data=this.bio.data.trim(),this.bio.data.length>200&&(this.bio.error="Write a bio that is up to 200 characters."));for(let s=0;s<this.links.length;s++)this.links[s].url.data=this.links[s].url.data||null,this.links[s].url.error=null,this.links[s].url.data?(this.links[s].url.data=this.links[s].url.data.trim(),this.links[s].url.data.length>60?this.links[s].url.error="Enter a web or email address that is up to 60 characters.":this.links[s].url.data.startsWith("http://")||this.links[s].url.data.startsWith("https://")||(this.links[s].url.data="http://"+this.links[s].url.data),(0,ce.b3)(this.links[s].url.data)||(this.links[s].url.error="This URL or email is invalid.")):this.links[s].url.error="Enter a web or email address.",this.links[s].description.data=this.links[s].description.data||null,this.links[s].description.error=null,this.links[s].description.data&&(this.links[s].description.data=this.links[s].description.data.trim(),this.links[s].description.data.length>60&&(this.links[s].description.error="Enter a description that is up to 60 characters."));const t=this.links.some((t=>t.url.error||t.description.error));if(this.username.error||this.status.error||this.city.error||this.country.error||this.bio.error||t||this.links.length>10)return;const e=await ot.Z.put("me/profile",{username:this.username.data,status:this.status.data,city:this.city.data,country:this.country.data,bio:this.bio.data,links:this.links.map((t=>({url:t.url.data,description:t.description.data})))});e.error?alert(JSON.stringify(e.error)):(await this.$store.dispatch("loadUser",this.user.login),this.$router.replace({query:null}))}}},de=s(89);const he=(0,de.Z)(pe,[["render",ae]]);var me=he,be=s(1417),ge=s(3818);const ye=["href"];function _e(t,e,s,n,r,a){return(0,i.wg)(),(0,i.iD)("a",{class:"icon-text secondary-text hoverable",href:this.url,target:"”_blank”",rel:"noopener noreferrer"},[(0,i._)("span",{class:(0,l.C_)("bi bi-"+this.glyph)},null,2),(0,i._)("span",null,(0,l.zw)(this.description),1)],8,ye)}var ke={name:"glyphLink",props:{url:{default:"/"},description:{default:null}},computed:{glyph(){let t=this.url.replace(/^https?:\/\//,"");const e=t.indexOf("/");e>0&&(t=t.slice(0,e));const s=t.lastIndexOf(".");switch(s>0&&(t=t.slice(0,s)),t){case"t":case"telegram":return"telegram";case"twitter":case"x":return"twitter";case"youtube":case"youtu":return"youtube";case"twitch":return"twitch";case"spotify":return"spotify";case"instagram":return"instagram";case"facebook":return"facebook";default:return"globe"}}}};const fe=(0,de.Z)(ke,[["render",_e]]);var we=fe,ve=s(5535),xe=s(9419),Ce={name:"UserProfileView",extends:ut.Z,components:{panel:be.Z,songContainer:ge.Z,glyphLink:we,errorMessage:ve.Z,userContainer:xe.Z,editProfileModal:me,contextMenu:ue.Z},data(){return{userSongLikes:void 0,followers:void 0}},async created(){this.userSongLikes=(await ot.Z.get("users/"+this.login+"/songs/likes")).songList,this.followers=await ot.Z.get("users/"+this.login+"/followers")}};const Ue=(0,de.Z)(Ce,[["render",at],["__scopeId","data-v-566aa00e"]]);var De=Ue}}]);
//# sourceMappingURL=547.0ce1ffc9.js.map