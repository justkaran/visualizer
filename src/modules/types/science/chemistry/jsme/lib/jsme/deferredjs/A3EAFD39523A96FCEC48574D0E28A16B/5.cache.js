$wnd.jsme.runAsyncCallback5('function EP(a){var b=$doc.createElement(Ad);bJ(eg,b.tagName);this.ob=b;this.b=new KJ(this.ob);this.ob[ed]="gwt-HTML";JJ(this.b,a,!0);SJ(this)}n(344,345,{14:1,16:1,18:1,19:1,21:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,31:1,32:1,33:1,37:1,38:1,39:1,40:1,41:1,42:1,43:1,44:1,45:1,46:1,48:1,50:1,54:1,59:1,69:1,70:1,71:1,74:1,78:1,81:1,82:1,84:1},EP);function HP(){Rw();var a=$doc.createElement("textarea");!Ms&&(Ms=new Ls);!Ks&&(Ks=new Js);this.ob=a;this.ob[ed]="gwt-TextArea"}n(384,385,Eh,HP);\nfunction IP(a,b){var c,d;c=$doc.createElement(Eg);d=$doc.createElement(og);d[zc]=a.a.a;d.style[Kg]=a.b.a;var e=(Os(),Ps(d));c.appendChild(e);Ns(a.d,c);zu(a,b,d)}function JP(){yv.call(this);this.a=(Bv(),Iv);this.b=(Jv(),Mv);this.e[Uc]=ab;this.e[Tc]=ab}n(393,338,vh,JP);_.Jd=function(a){var b;b=Xm(a.ob);(a=Du(this,a))&&this.d.removeChild(Xm(b));return a};\nfunction KP(a){try{a.v=!1;var b,c,d;d=a.gb;c=a._;d||(a.ob.style[Lg]=le,a._=!1,a.Wd());b=a.ob;b.style[ve]=0+(Eo(),Af);b.style[wg]=bb;tL(a,Ri(dn($doc)+(cn()-Tm(a.ob,of)>>1),0),Ri(en($doc)+(bn()-Tm(a.ob,nf)>>1),0));d||((a._=c)?(a.ob.style[hd]=Nf,a.ob.style[Lg]=Mg,si(a.fb,200)):a.ob.style[Lg]=Mg)}finally{a.v=!0}}function LP(a){a.f=(new FK(a.i)).nc.Le();ju(a.f,new MP(a),(qp(),qp(),rp));a.d=D(NP,m,61,[a.f])}\nfunction OP(){OL();var a,b,c,d,e,f;kM.call(this,(CM(),DM),null,!0);this.Fg();this.cb=!0;a=new EP(this.j);this.e=new HP;this.e.ob.style[Og]=eb;Wt(this.e,eb);this.Dg();FL(this,"400px");f=new JP;f.ob.style[ke]=eb;f.e[Uc]=10;c=(Bv(),Cv);f.a=c;IP(f,a);IP(f,this.e);e=new Qv;e.e[Uc]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],Nv(e,a);IP(f,e);TL(this,f);OK(this,!1);this.Eg()}n(645,646,hH,OP);_.Dg=function(){LP(this)};_.Eg=function(){var a=this.e;a.ob.readOnly=!0;var b=$t(a.ob)+"-readonly";Vt(a.wd(),b,!0)};\n_.Fg=function(){NK(this.H.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i="Close";_.j="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function MP(a){this.a=a}n(648,1,{},MP);_.Wc=function(){VL(this.a,!1)};_.a=null;function PP(a){this.a=a}n(649,1,{},PP);\n_.Dc=function(){eu(this.a.e.ob,!0);this.a.e.ob.focus();var a=this.a.e,b;b=Um(a.ob,Jg).length;if(0<b&&a.jb){if(0>b)throw new zE("Length must be a positive integer. Length: "+b);if(b>Um(a.ob,Jg).length)throw new zE("From Index: 0  To Index: "+b+"  Text Length: "+Um(a.ob,Jg).length);try{a.ob.setSelectionRange(0,0+b)}catch(c){}}};_.a=null;function QP(a){a.i="Cancel";a.j="Paste the text to import into the text area below.";a.b="Accept";NK(a.H.b,"Paste")}function RP(a){OL();OP.call(this);this.c=a}\nn(651,645,hH,RP);_.Dg=function(){LP(this);this.a=(new FK(this.b)).nc.Le();ju(this.a,new SP(this),(qp(),qp(),rp));this.d=D(NP,m,61,[this.a,this.f])};_.Eg=function(){Wt(this.e,"150px")};_.Fg=function(){QP(this)};_.Wd=function(){jM(this);Jm((Gm(),Hm),new TP(this))};_.a=null;_.b=null;_.c=null;function UP(a){OL();RP.call(this,a)}n(650,651,hH,UP);_.Eg=function(){Wt(this.e,"150px");uA(new VP(this),this.e)};_.Fg=function(){QP(this);this.j+=" Or drag and drop a file on it."};\nfunction VP(a){this.a=a;this.b=new WP(this);this.c=this.d=1}n(652,489,{},VP);_.a=null;function WP(a){this.a=a}n(653,1,{},WP);_.We=function(a){this.a.a.e.ob[Jg]=null!=a?a:l};_.a=null;function SP(a){this.a=a}n(657,1,{},SP);_.Wc=function(){if(this.a.c){var a=this.a.c,b;b=new Lz(a.a,0,Um(this.a.e.ob,Jg));BA(a.a.a,b.a)}VL(this.a,!1)};_.a=null;function TP(a){this.a=a}n(658,1,{},TP);_.Dc=function(){eu(this.a.e.ob,!0);this.a.e.ob.focus()};_.a=null;n(659,1,Dh);\n_.Oc=function(){var a,b;a=new XP(this.a);void 0!=$wnd.FileReader?b=new UP(a):b=new RP(a);HL(b);KP(b)};function XP(a){this.a=a}n(660,1,{},XP);_.a=null;n(661,1,Dh);_.Oc=function(){var a;a=new OP;var b=this.a,c;Qw(a.e,b);b=(c=DE(b,"\\r\\n|\\r|\\n|\\n\\r"),c.length);Wt(a.e,20*(10>b?b:10)+Af);Jm((Gm(),Hm),new PP(a));HL(a);KP(a)};T(645);var NP=pE(807);T(651);T(650);T(660);T(648);T(649);T(657);T(658);T(652);T(653);T(344);T(393);T(384);s(eH)(5);\n//@ sourceURL=5.js\n')
