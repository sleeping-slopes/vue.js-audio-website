"use strict";(self["webpackChunkvuejs_spa"]=self["webpackChunkvuejs_spa"]||[]).push([[419],{9419:function(s,e,t){t.d(e,{Z:function(){return Xs}});var o=t(3396),n=t(7139);const l=(0,o._)("span",{class:"bi bi-person-fill"},null,-1),i={key:1,class:"loader-wrapper"},r=(0,o._)("div",{class:"loader"},null,-1),a=[r];function u(s,e,t,r,u,c){const m=(0,o.up)("errorMessage");return this.users?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[this.users.error?((0,o.wg)(),(0,o.j4)(m,{key:0},{errorIcon:(0,o.w5)((()=>[l])),message:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(this.users.error.message),1)])),_:1})):((0,o.wg)(),(0,o.iD)("ul",{key:1,class:(0,n.C_)(["container",t.type])},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.getShortList,(s=>((0,o.wg)(),(0,o.iD)("li",null,[((0,o.wg)(),(0,o.j4)((0,o.LL)(this.dynamicComponent),{login:s.login,key:s.login,onLoaded:e[0]||(e[0]=s=>this.counter++)},null,40,["login"]))])))),256))],2))],64)):((0,o.wg)(),(0,o.iD)("div",i,a))}var c=t(9242);const m={key:0,class:"user card"},p=["src"],d={key:1,class:"user-image s180x180 gradient-bg"},g={class:"info-wrapper"},h={key:0,class:"icon-text secondary-text font-size-small"},w=(0,o._)("span",{class:"bi bi-people-fill"},null,-1),f=(0,o._)("span",{class:"bi bi-person-plus"},null,-1),b=(0,o._)("span",null,"Follow",-1),k=[f,b],y=(0,o._)("span",{class:"bi bi-person-plus"},null,-1),_=(0,o._)("span",null,"Follow back",-1),v=[y,_],x=(0,o._)("span",{class:"bi bi bi-person-check-fill"},null,-1),D=(0,o._)("span",null,"Following",-1),F=[x,D];function z(s,e,t,l,i,r){const a=(0,o.up)("router-link"),u=(0,o.up)("userCardSkeleton");return(0,o.wg)(),(0,o.j4)(c.uT,{name:"skeletonFade"},{default:(0,o.w5)((()=>[(this.$parent.loaded??1)&&this.loaded?((0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)(a,{to:{name:"User",params:{login:this.login}}},{default:(0,o.w5)((()=>[this.user.profile_picture?((0,o.wg)(),(0,o.iD)("img",{key:0,class:"user-image s180x180",src:this.user.picturesrc},null,8,p)):((0,o.wg)(),(0,o.iD)("div",d))])),_:1},8,["to"]),(0,o._)("div",g,[(0,o.Wm)(a,{to:{name:"User",params:{login:this.login}},class:"primary-text hoverable font-size-big"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(this.user.username),1)])),_:1},8,["to"]),this.user.followers_count>0?((0,o.wg)(),(0,o.iD)("span",h,[w,(0,o._)("span",null,(0,n.zw)(s.abbreviateNumber(this.user.followers_count))+" follower"+(0,n.zw)(this.user.followers_count>1?"s":""),1)])):(0,o.kq)("",!0)]),this.user.youFollow||this.user.followsYou||this.user.me?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:0,class:"button button-secondary icon-text",onClick:e[0]||(e[0]=(0,c.iM)((s=>this.follow()),["stop"]))},k)),this.user.youFollow||!this.user.followsYou||this.user.me?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:1,class:"button button-secondary icon-text",onClick:e[1]||(e[1]=(0,c.iM)((s=>this.follow()),["stop"]))},v)),this.user.youFollow&&!this.user.me?((0,o.wg)(),(0,o.iD)("button",{key:2,class:"button button-secondary toggled icon-text",onClick:e[2]||(e[2]=(0,c.iM)((s=>this.unfollow()),["stop"]))},F)):(0,o.kq)("",!0)])):((0,o.wg)(),(0,o.j4)(u,{key:1}))])),_:1})}var Z=t(3319);const U={class:"user card"},C=(0,o._)("div",{class:"user-image s180x180 shimmer"},null,-1),S={class:"info-wrapper"};function I(s,e,t,n,l,i){const r=(0,o.up)("skeleton");return(0,o.wg)(),(0,o.iD)("div",U,[C,(0,o._)("div",S,[(0,o.Wm)(r,{class:"font-size-big shimmer"}),(0,o.Wm)(r,{class:"font-size-small shimmer",exactwidth:90})])])}var W=t(3097),$={name:"userCardSkeleton",components:{skeleton:W.Z}},j=t(89);const q=(0,j.Z)($,[["render",I]]);var P=q,M={name:"userCard",extends:Z.Z,components:{userCardSkeleton:P}};const Y=(0,j.Z)(M,[["render",z]]);var L=Y;const B={key:0,class:"user item"},N=["src"],T={key:1,class:"user-image s160x160 gradient-bg"},H={class:"info-wrapper gap-10"},K=(0,o._)("span",{class:"bi bi-people-fill"},null,-1),A=(0,o._)("span",{class:"bi bi-person-plus"},null,-1),E=(0,o._)("span",null,"Follow",-1),G=[A,E],J=(0,o._)("span",{class:"bi bi-person-plus"},null,-1),O=(0,o._)("span",null,"Follow back",-1),Q=[J,O],R=(0,o._)("span",{class:"bi bi bi-person-check-fill"},null,-1),V=(0,o._)("span",null,"Following",-1),X=[R,V];function ss(s,e,t,l,i,r){const a=(0,o.up)("router-link"),u=(0,o.up)("userItemSkeleton");return(0,o.wg)(),(0,o.j4)(c.uT,{name:"skeletonFade"},{default:(0,o.w5)((()=>[(this.$parent.loaded??1)&&this.loaded?((0,o.wg)(),(0,o.iD)("div",B,[(0,o.Wm)(a,{to:{name:"User",params:{login:this.login}}},{default:(0,o.w5)((()=>[this.user.profile_picture?((0,o.wg)(),(0,o.iD)("img",{key:0,class:"user-image s160x160",src:this.user.picturesrc},null,8,N)):((0,o.wg)(),(0,o.iD)("div",T))])),_:1},8,["to"]),(0,o._)("div",H,[(0,o.Wm)(a,{to:{name:"User",params:{login:this.login}},class:"primary-text hoverable font-size-big"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(this.user.username),1)])),_:1},8,["to"]),this.user.followers_count>0?((0,o.wg)(),(0,o.j4)(a,{key:0,to:{name:"UserFollowers",params:{login:this.login}},class:"icon-text secondary-text hoverable font-size-small"},{default:(0,o.w5)((()=>[K,(0,o._)("span",null,(0,n.zw)(s.abbreviateNumber(this.user.followers_count))+" follower"+(0,n.zw)(this.user.followers_count>1?"s":""),1)])),_:1},8,["to"])):(0,o.kq)("",!0),this.user.youFollow||this.user.followsYou||this.user.me?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:1,class:"button button-secondary icon-text",onClick:e[0]||(e[0]=(0,c.iM)((s=>this.follow()),["stop"]))},G)),this.user.youFollow||!this.user.followsYou||this.user.me?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:2,class:"button button-secondary icon-text",onClick:e[1]||(e[1]=(0,c.iM)((s=>this.follow()),["stop"]))},Q)),this.user.youFollow&&!this.user.me?((0,o.wg)(),(0,o.iD)("button",{key:3,class:"button button-secondary toggled icon-text",onClick:e[2]||(e[2]=(0,c.iM)((s=>this.unfollow()),["stop"]))},X)):(0,o.kq)("",!0)])])):((0,o.wg)(),(0,o.j4)(u,{key:1}))])),_:1})}const es={class:"user item"},ts=(0,o._)("div",{class:"user-image s160x160 shimmer"},null,-1),os={class:"info-wrapper gap-10"};function ns(s,e,t,n,l,i){const r=(0,o.up)("skeleton");return(0,o.wg)(),(0,o.iD)("div",es,[ts,(0,o._)("div",os,[(0,o.Wm)(r,{class:"font-size-big shimmer"}),(0,o.Wm)(r,{class:"font-size-small shimmer"}),(0,o.Wm)(r,{class:"button button-secondary shimmer",exactwidth:90})])])}var ls={name:"userItemSkeleton",components:{skeleton:W.Z}};const is=(0,j.Z)(ls,[["render",ns]]);var rs=is,as={name:"userItem",extends:Z.Z,components:{userItemSkeleton:rs}};const us=(0,j.Z)(as,[["render",ss]]);var cs=us;const ms={key:0,class:"user item"},ps=["src"],ds={key:1,class:"user-image s52x52 gradient-bg"},gs={class:"info-wrapper gap-10"},hs={class:"row"},ws=(0,o._)("span",{class:"bi bi-people-fill"},null,-1),fs=(0,o._)("span",{class:"bi bi-soundwave"},null,-1),bs=(0,o._)("span",{class:"bi bi-person-plus"},null,-1),ks=(0,o._)("span",null,"Follow",-1),ys=[bs,ks],_s=(0,o._)("span",{class:"bi bi-person-plus"},null,-1),vs=(0,o._)("span",null,"Follow back",-1),xs=[_s,vs],Ds=(0,o._)("span",{class:"bi bi bi-person-check-fill"},null,-1),Fs=(0,o._)("span",null,"Following",-1),zs=[Ds,Fs];function Zs(s,e,t,l,i,r){const a=(0,o.up)("router-link"),u=(0,o.up)("userItemSmallSkeleton");return(0,o.wg)(),(0,o.j4)(c.uT,{name:"skeletonFade"},{default:(0,o.w5)((()=>[(this.$parent.loaded??1)&&this.loaded?((0,o.wg)(),(0,o.iD)("div",ms,[(0,o.Wm)(a,{to:{name:"User",params:{login:this.login}}},{default:(0,o.w5)((()=>[this.user.profile_picture?((0,o.wg)(),(0,o.iD)("img",{key:0,class:"user-image s52x52",src:this.user.picturesrc},null,8,ps)):((0,o.wg)(),(0,o.iD)("div",ds))])),_:1},8,["to"]),(0,o._)("div",gs,[(0,o.Wm)(a,{to:{name:"User",params:{login:this.login}},class:"primary-text hoverable font-size-medium"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(this.user.username),1)])),_:1},8,["to"]),(0,o._)("div",hs,[(0,o.Wm)(a,{to:{name:"UserFollowers",params:{login:this.login}},class:"icon-text secondary-text hoverable font-size-small"},{default:(0,o.w5)((()=>[ws,(0,o._)("span",null,(0,n.zw)(s.abbreviateNumber(this.user.followers_count)),1)])),_:1},8,["to"]),(0,o.Wm)(a,{to:{name:"UserSongs",params:{login:this.login}},class:"icon-text secondary-text hoverable font-size-small"},{default:(0,o.w5)((()=>[fs,(0,o._)("span",null,(0,n.zw)(s.abbreviateNumber(this.user.songs_count)),1)])),_:1},8,["to"])])]),this.user.youFollow||this.user.followsYou||this.user.me?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:0,class:"button button-secondary button-size-compact button-compact icon-text",onClick:e[0]||(e[0]=(0,c.iM)((s=>this.follow()),["stop"]))},ys)),this.user.youFollow||!this.user.followsYou||this.user.me?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:1,class:"button button-secondary button-size-compact icon-text",onClick:e[1]||(e[1]=(0,c.iM)((s=>this.follow()),["stop"]))},xs)),this.user.youFollow&&!this.user.me?((0,o.wg)(),(0,o.iD)("button",{key:2,class:"button button-secondary button-size-compact toggled icon-text",onClick:e[2]||(e[2]=(0,c.iM)((s=>this.unfollow()),["stop"]))},zs)):(0,o.kq)("",!0)])):((0,o.wg)(),(0,o.j4)(u,{key:1}))])),_:1})}const Us={class:"user item"},Cs=(0,o._)("div",{class:"user-image s52x52 shimmer"},null,-1),Ss={class:"info-wrapper gap-10"},Is={class:"row"};function Ws(s,e,t,n,l,i){const r=(0,o.up)("skeleton");return(0,o.wg)(),(0,o.iD)("div",Us,[Cs,(0,o._)("div",Ss,[(0,o.Wm)(r,{class:"font-size-medium shimmer"}),(0,o._)("div",Is,[(0,o.Wm)(r,{class:"font-size-small shimmer",exactwidth:30}),(0,o.Wm)(r,{class:"font-size-small shimmer",exactwidth:30})])]),(0,o.Wm)(r,{class:"button button-secondary button-size-compact shimmer",exactwidth:90})])}var $s={name:"userItemSmallSkeleton",components:{skeleton:W.Z}};const js=(0,j.Z)($s,[["render",Ws]]);var qs=js,Ps={name:"userItemSmall",extends:Z.Z,components:{userItemSmallSkeleton:qs}};const Ms=(0,j.Z)(Ps,[["render",Zs]]);var Ys=Ms;const Ls=["src"],Bs={key:1,class:"user icon user-image s36x36 gradient-bg"};function Ns(s,e,t,n,l,i){const r=(0,o.up)("router-link"),a=(0,o.up)("userIconSkeleton");return(0,o.wg)(),(0,o.j4)(c.uT,{name:"skeletonFade"},{default:(0,o.w5)((()=>[(this.$parent.loaded??1)&&this.loaded?((0,o.wg)(),(0,o.j4)(r,{key:0,to:{name:"User",params:{login:s.user.login}}},{default:(0,o.w5)((()=>[this.user.profile_picture?((0,o.wg)(),(0,o.iD)("img",{key:0,class:"user icon user-image s36x36",src:this.user.picturesrc},null,8,Ls)):((0,o.wg)(),(0,o.iD)("div",Bs))])),_:1},8,["to"])):((0,o.wg)(),(0,o.j4)(a,{key:1}))])),_:1})}const Ts={class:"user icon user-image s36x36 shimmer"};function Hs(s,e,t,n,l,i){return(0,o.wg)(),(0,o.iD)("div",Ts)}var Ks={name:"userIconSkeleton",components:{skeleton:W.Z}};const As=(0,j.Z)(Ks,[["render",Hs]]);var Es=As,Gs={name:"userIcon",extends:Z.Z,components:{userIconSkeleton:Es}};const Js=(0,j.Z)(Gs,[["render",Ns]]);var Os=Js,Qs=t(5535),Rs={name:"userContainer",components:{userCard:L,userItem:cs,userItemSmall:Ys,userIcon:Os,errorMessage:Qs.Z},props:{users:{default:void 0},maxDisplay:{default:0},type:{default:""},dynamicComponent:{default:"userCard"}},data(){return{counter:0}},computed:{loaded(){return this.counter==this.getShortList.length},getShortList(){return this.maxDisplay<1?this.users:this.users.slice(0,this.maxDisplay)}}};const Vs=(0,j.Z)(Rs,[["render",u]]);var Xs=Vs},3319:function(s,e,t){t.d(e,{Z:function(){return r}});t(7658);var o=t(3278),n=t(7285),l={name:"userInterface",props:{login:{default:"nologin"}},data(){return{loaded:!1}},computed:{user(){return this.$store.getters.getUser(this.login)}},async created(){await this.$store.dispatch("loadUser",this.login),this.loaded=!0,this.$emit("loaded")},methods:{async follow(){const s=await o.Z.post("me/users/following",{login:this.login});if(401==s.error?.status)return this.$router.push({path:this.$route.fullPath,query:{action:"login"}});this.$store.dispatch("toggleUserFollow",this.login),this.user.followers_count++,this.user.youFollow=!0},async unfollow(){const s=await o.Z.delete("me/users/following/"+this.login);if(401==s?.error?.status)return this.$router.push({path:this.$route.fullPath,query:{action:"login"}});this.$store.dispatch("toggleUserFollow",this.login)},async uploadProfilePicture(s){const e=["image/gif","image/jpeg","image/png"],t=s.target.files[0];if(!t||!e.includes(t.type))return;const n=new FormData;n.append("userProfilePicture",t,t.name);await o.Z.post("me/profile-picture",n);this.$store.dispatch("uploadUserProfilePicture",this.login)},async deleteProfilePicture(){await o.Z.delete("me/profile-picture");this.$store.dispatch("deleteUserProfilePicture",this.login)},async uploadBanner(s){const e=["image/gif","image/jpeg","image/png"],t=s.target.files[0];if(!t||!e.includes(t.type))return;const n=new FormData;n.append("userBanner",t,t.name);await o.Z.post("me/banner",n);this.$store.dispatch("uploadUserBanner",this.login)},async deleteBanner(){await o.Z.delete("me/banner");this.$store.dispatch("deleteUserBanner",this.login)},abbreviateNumber:n.dm}};const i=l;var r=i}}]);
//# sourceMappingURL=419.9779c639.js.map