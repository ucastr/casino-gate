"use strict";(self["webpackChunkcasinogate_backoffice"]=self["webpackChunkcasinogate_backoffice"]||[]).push([[212],{7461:function(t,e,n){n.d(e,{A:function(){return u}});var r=n(641);const c={class:"inner-content"};function a(t,e,n,a,o,i){return(0,r.uX)(),(0,r.CE)("div",c,[(0,r.RG)(t.$slots,"default")])}var o={name:"LayoutDiv"},i=n(6262);const s=(0,i.A)(o,[["render",a]]);var u=s},212:function(t,e,n){n.r(e),n.d(e,{default:function(){return L}});var r=n(641),c=n(33);const a=(0,r.Lk)("h2",{class:"text-center mt-5 mb-3"},"Show Project",-1),o={class:"card"},i={class:"card-header"},s={class:"card-body"},u=(0,r.Lk)("b",{className:"text-muted"},"Name:",-1),d=(0,r.Lk)("b",{className:"text-muted"},"Description:",-1);function l(t,e,n,l,f,p){const m=(0,r.g2)("router-link"),k=(0,r.g2)("layout-div");return(0,r.uX)(),(0,r.Wv)(k,null,{default:(0,r.k6)((()=>[a,(0,r.Lk)("div",o,[(0,r.Lk)("div",i,[(0,r.bF)(m,{class:"btn btn-outline-info float-right",to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("View All Projects ")])),_:1})]),(0,r.Lk)("div",s,[u,(0,r.Lk)("p",null,(0,c.v_)(f.project.name),1),d,(0,r.Lk)("p",null,(0,c.v_)(f.project.description),1)])])])),_:1})}var f=n(1250),p=n(7461),m=n(8465),k=n.n(m),v={name:"ProjectShow",components:{LayoutDiv:p.A},data(){return{project:{name:"",description:""},isSaving:!1}},created(){const t=this.$route.params.id;f.A.get(`/api/projects/${t}`).then((t=>{let e=t.data;return this.project.name=e.name,this.project.description=e.description,t})).catch((t=>(k().fire({icon:"error",title:"An Error Occured!",showConfirmButton:!1,timer:1500}),t)))},methods:{}},h=n(6262);const b=(0,h.A)(v,[["render",l]]);var L=b}}]);
//# sourceMappingURL=212.85667c11.js.map