"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[194],{8194:(w,o,n)=>{n.r(o),n.d(o,{default:()=>A});var u=n(6814),c=n(8109),r=n(8645),l=n(4825),m=n(4716),d=n(812),h=n(9773),g=n(9397),t=n(9212),x=n(4855);function f(e,S){if(1&e&&(t.ynx(0),t._uU(1),t.ALo(2,"i18nPlural"),t.BQk()),2&e){const s=t.oxw();t.xp6(1),t.hij(" Redireccionando en ",t.xi3(2,1,s.countdown,s.countdownMapping)," ")}}function p(e,S){1&e&&(t.ynx(0),t._uU(1," \xa1Est\xe1s siendo redireccionado! "),t.BQk())}const v=()=>["/sign-in"],A=[{path:"",component:(()=>{class e{constructor(s,i){this._authService=s,this._router=i,this.countdown=5,this.countdownMapping={"=1":"# segundo.",other:"# segundos."},this._unsubscribeAll=new r.x}ngOnInit(){this._authService.closeSession().subscribe(s=>{this._authService.signOut()},s=>{this._authService.signOut()}),(0,l.H)(1e3,1e3).pipe((0,m.x)(()=>{this._router.navigate(["sign-in"])}),(0,d.o)(()=>this.countdown>0),(0,h.R)(this._unsubscribeAll),(0,g.b)(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(x.e),t.Y36(c.F0))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["auth-sign-out"]],standalone:!0,features:[t.jDz],decls:15,vars:4,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-full","mx-auto"],["src","https://pbs.twimg.com/media/EP0CX2xXsAEzSj7.jpg:large",1,"w-2/5","h-auto"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary","text-center"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"\xa1Has cerrado la sesi\xf3n!"),t.qZA(),t.TgZ(7,"div",6),t.YNc(8,f,3,4,"ng-container",7)(9,p,2,0,"ng-container",7),t.qZA(),t.TgZ(10,"div",8)(11,"span"),t._uU(12,"Go to"),t.qZA(),t.TgZ(13,"a",9),t._uU(14,"Iniciar Sesi\xf3n "),t.qZA()()()()()),2&i&&(t.xp6(8),t.Q6J("ngIf",a.countdown>0),t.xp6(1),t.Q6J("ngIf",0===a.countdown),t.xp6(4),t.Q6J("routerLink",t.DdM(3,v)))},dependencies:[u.O5,c.rH,u.Gx],encapsulation:2})}return e})()}]}}]);