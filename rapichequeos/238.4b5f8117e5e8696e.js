"use strict";(self.webpackChunkrapichequeos=self.webpackChunkrapichequeos||[]).push([[238],{3238:(C,p,c)=>{c.r(p),c.d(p,{ChequeosModule:()=>a});var d=c(6895),u=c(1157),e=c(1571);class r{}r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-layout-chequeos"]],decls:1,vars:0,template:function(o,n){1&o&&e._UZ(0,"router-outlet")},dependencies:[u.lC]});class s{}s.\u0275fac=function(o){return new(o||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-chequeo"]],decls:10,vars:0,consts:[[1,"container"],[1,"row","container-formulario"],[1,"col","formulario"],[1,"mb-3"],["for","exampleInputEmail1",1,"form-label"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp",1,"form-control"],[1,"row","lista"],[1,"list-group","col"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form")(4,"div",3)(5,"label",4),e._uU(6,"Codigo de barras"),e.qZA(),e._UZ(7,"input",5),e.qZA()()()(),e.TgZ(8,"div",6),e._UZ(9,"div",7),e.qZA()())},styles:[".container[_ngcontent-%COMP%]{height:90vh}.lista[_ngcontent-%COMP%]{height:70vh;width:90vw;overflow:scroll}.container-formulario[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:15vh}.formulario[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:50vw;text-align:center}"]});var h=c(2325);function m(t,o){if(1&t&&(e.TgZ(0,"div",2)(1,"div",3)(2,"h6",4),e._uU(3),e.qZA(),e.TgZ(4,"p",5)(5,"span",6),e._uU(6),e.qZA(),e.TgZ(7,"span",7),e._uU(8),e.ALo(9,"titlecase"),e.qZA(),e.TgZ(10,"span",7),e._uU(11),e.ALo(12,"titlecase"),e.qZA(),e.TgZ(13,"span",7),e._uU(14),e.ALo(15,"titlecase"),e.qZA(),e.TgZ(16,"span",7),e._uU(17),e.ALo(18,"titlecase"),e.qZA()(),e.TgZ(19,"div",8)(20,"div",9)(21,"a",10),e._uU(22,"Realizar chequeo"),e.qZA(),e.TgZ(23,"a",11),e._uU(24,"Cargar chequeo"),e.qZA()()()()()),2&t){const n=o.$implicit;e.xp6(3),e.hij("chequeo #",n.id,""),e.xp6(3),e.hij("Categori: ",n.departamento.id+" "+n.seccion.id+" "+n.familia.id+" "+n.subFamilia.id,""),e.xp6(2),e.Oqu(e.lcZ(9,6,n.departamento.descripcion)),e.xp6(3),e.Oqu(e.lcZ(12,8,n.seccion.descripcion)),e.xp6(3),e.Oqu(e.lcZ(15,10,n.familia.descripcion)),e.xp6(3),e.Oqu(e.lcZ(18,12,n.subFamilia.descripcion))}}class l{constructor(o){this.servicioChequeo=o,this.chequeos=[]}}l.\u0275fac=function(o){return new(o||l)(e.Y36(h.P))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-lista-chequeos"]],decls:5,vars:1,consts:[[1,"container-main"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"card-body"],[1,"card-subtitle","mb-2","text-muted"],[1,"containerTags"],[1,"badge","categori","rounded-pill"],[1,"badge","rounded-pill"],[1,"row"],[1,"col"],["routerLink","/chequeos/chequeo",1,"card-link","green"],[1,"card-link"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"br")(2,"hr"),e.YNc(3,m,25,14,"div",1),e._UZ(4,"br"),e.qZA()),2&o&&(e.xp6(3),e.Q6J("ngForOf",n.chequeos))},dependencies:[d.sg,u.rH,d.rS],styles:[".container-main[_ngcontent-%COMP%]{height:90vh}.card[_ngcontent-%COMP%]{width:80vw;margin-bottom:3vh}.badge[_ngcontent-%COMP%]{background-color:#e2e2e2;color:#000}.categori[_ngcontent-%COMP%]{background-color:#8a2be2;color:#fff}.containerTags[_ngcontent-%COMP%]{padding:5px;border-width:1px;border-color:#dadada;border-style:double;border-left:none;border-right:none}.card-link[_ngcontent-%COMP%]{text-decoration:none;color:#8a2be2}.green[_ngcontent-%COMP%]{text-decoration:none;color:#278d31}"]});const g=[{path:"",component:r,children:[{path:"lista",component:l},{path:"chequeo",component:s}]}];class i{}i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.Bz.forChild(g),u.Bz]});class a{}a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[d.ez,i]})}}]);