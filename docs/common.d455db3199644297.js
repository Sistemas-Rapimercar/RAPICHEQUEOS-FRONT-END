"use strict";(self.webpackChunkrapichequeos=self.webpackChunkrapichequeos||[]).push([[592],{2325:(c,n,s)=>{s.d(n,{P:()=>t});var o=s(1571),h=s(2340),r=s(4004),i=s(529);class t{constructor(e){this.httpClient=e,this.url=h.N.urlRestApi,this.chequeos=[],this.obs=new o.vpe}getChequeosPendientesInServer(){return this.httpClient.get(this.url+"/chequeos").pipe((0,r.U)(e=>(this.chequeos=e.data,this.setChequeosPendientesInStorage(),e.data)))}getChequeosPendientesInStorage(){this.chequeos=[];for(let e=0;e<parseInt(sessionStorage.getItem("cantidad_chequeos"));e++)this.chequeos.push(JSON.parse(sessionStorage.getItem("chequeo:"+e)));return this.chequeos}setChequeosPendientesInStorage(){sessionStorage.setItem("cantidad_chequeos",this.chequeos.length.toString());let e=0;this.chequeos.forEach(a=>{sessionStorage.setItem("chequeo:"+e,JSON.stringify(a)),e++}),this.getChequeosPendientesInStorage()}}t.\u0275fac=function(e){return new(e||t)(o.LFG(i.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}}]);