"use strict";(self["webpackChunkvuejs_spa"]=self["webpackChunkvuejs_spa"]||[]).push([[819],{2819:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var c=s(3396),o=s(7139);const h={class:"column gap-15 column-side"},m={class:"column"},n={class:"column gap-5"},i=(0,c._)("span",{class:"primary-text font-size-medium"},"Theme",-1),r={class:"row gap-10"},u={class:"form-checkbox"},l=(0,c._)("label",{for:"checkbox_systemTheme"},"Use system theme",-1),a={class:"column gap-5"},g=(0,c._)("span",{class:"primary-text font-size-medium"},"Accent color",-1),b={class:"row gap-10"},C=["onClick"];function _(e,t,s,_,T,d){return(0,c.wg)(),(0,c.iD)("div",h,[(0,c._)("div",m,[(0,c._)("div",n,[i,(0,c._)("div",r,[(0,c._)("button",{class:(0,o.C_)(["button button-secondary bi bi-brightness-high-fill",{toggled:0==T.theme&&T.customTheme}]),onClick:t[0]||(t[0]=e=>d.changeTheme(0))},null,2),(0,c._)("button",{class:(0,o.C_)(["button button-secondary bi bi-moon-fill",{toggled:1==T.theme&&T.customTheme}]),onClick:t[1]||(t[1]=e=>d.changeTheme(1))},null,2)])]),(0,c._)("div",u,[(0,c._)("button",{class:(0,o.C_)(["button button-checkbox",{"bi bi-check-square":T.customTheme,"bi bi-check-square-fill toggled":!T.customTheme}]),id:"checkbox_systemTheme",onClick:t[2]||(t[2]=e=>d.toggleCustomTheme())},null,2),l])]),(0,c._)("div",a,[g,(0,c._)("ul",b,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(this.$store.state.accentColors,((e,t)=>((0,c.wg)(),(0,c.iD)("li",null,[(0,c._)("button",{class:(0,o.C_)(["button button-color",{"bi bi-check-lg":this.accentColor==t}]),style:(0,o.j5)({"background-color":e.hex}),onClick:e=>d.changeAccentColor(t)},null,14,C)])))),256))])])])}var T=s(3278),d={name:"ThemeSettingsView",data(){return{theme:this.$store.getters.getCurrentUser.theme,customTheme:this.$store.getters.getCurrentUser.custom_theme,accentColor:this.$store.getters.getCurrentUser.accent_color}},methods:{async changeTheme(e){if(this.theme!=e||0==this.customTheme){this.theme=e,this.$store.state.currentUser.theme=this.theme,this.customTheme=1,this.$store.state.currentUser.custom_theme=this.customTheme;await T.Z.put("me/theme",{theme:this.theme,customTheme:this.customTheme})}},async toggleCustomTheme(){this.customTheme=1-this.customTheme,this.$store.state.currentUser.custom_theme=this.customTheme;await T.Z.put("me/theme",{theme:this.theme,customTheme:this.customTheme})},async changeAccentColor(e){if(this.accentColor!=e){this.accentColor=e,this.$store.state.currentUser.accent_color=this.accentColor;await T.Z.put("me/accent-color",{accentColor:this.accentColor})}}}},k=s(89);const p=(0,k.Z)(d,[["render",_]]);var f=p}}]);
//# sourceMappingURL=819.13994a2a.js.map