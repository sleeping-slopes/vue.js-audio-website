"use strict";(self["webpackChunkvuejs_spa"]=self["webpackChunkvuejs_spa"]||[]).push([[933],{2933:function(e,s,r){r.r(s),r.d(s,{default:function(){return l}});var t=r(3396),n=r(7139);const u={key:0,class:"secondary-text font-size-medium"};function a(e,s,r,a,i,o){const c=(0,t.up)("userContainer");return(0,t.wg)(),(0,t.iD)(t.HY,null,[this.users?.length?((0,t.wg)(),(0,t.iD)("span",u,"Found "+(0,n.zw)(o.abbreviateNumber(this.users.length))+" user"+(0,n.zw)(1==this.users.length?"":"s"),1)):(0,t.kq)("",!0),(0,t.Wm)(c,{type:"column gap-10",dynamicComponent:"userItem",users:this.users},null,8,["users"])],64)}var i=r(3278),o=r(9419),c=r(7285),h={name:"searchUsersView",components:{userContainer:o.Z},data(){return{users:void 0}},methods:{abbreviateNumber:c.dm},async created(){this.users=await i.Z.get("search/"+this.$route.query.q.trim()+"/users")}},m=r(89);const d=(0,m.Z)(h,[["render",a]]);var l=d}}]);
//# sourceMappingURL=933.7fdd32e2.js.map