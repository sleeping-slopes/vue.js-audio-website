"use strict";(self["webpackChunkvuejs_spa"]=self["webpackChunkvuejs_spa"]||[]).push([[655],{3655:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var s=t(3396),a=t(7139);function r(e,n,t,r,o,i){const l=(0,s.up)("songContainer"),u=(0,s.up)("panel");return(0,s.wg)(),(0,s.j4)(u,null,{header:(0,s.w5)((()=>[(0,s.Uk)("Songs by "+(0,a.zw)(this.user.username),1)])),content:(0,s.w5)((()=>[(0,s.Wm)(l,{type:"ul-list",dynamicComponent:"songExtended",playlist:this.playlist},null,8,["playlist"])])),_:1})}var o=t(1417),i=t(3818),l=t(3278),u={name:"UserSongsView",components:{panel:o.Z,songContainer:i.Z},props:{login:{default:"route_param_login"}},data(){return{playlist:void 0}},computed:{user(){return this.$store.getters.getUser(this.login)}},async created(){this.playlist=(await l.Z.get("users/"+this.login+"/songs/created")).songList}},p=t(89);const c=(0,p.Z)(u,[["render",r]]);var g=c}}]);
//# sourceMappingURL=655.16b05aff.js.map