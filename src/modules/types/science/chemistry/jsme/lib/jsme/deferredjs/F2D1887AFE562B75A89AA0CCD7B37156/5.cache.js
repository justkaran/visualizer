$wnd.jsme.runAsyncCallback5('o(205,193,{});function jO(){jO=q;kO=new to(Bd,new lO)}function mO(a){a.a.stopPropagation();a.a.preventDefault()}function lO(){}o(206,205,{},lO);_.Rc=function(){mO(this)};_.Uc=function(){return kO};var kO;function nO(){nO=q;oO=new to(Cd,new pO)}function pO(){}o(207,205,{},pO);_.Rc=function(){mO(this)};_.Uc=function(){return oO};var oO;function qO(){qO=q;rO=new to(Dd,new sO)}function sO(){}o(208,205,{},sO);_.Rc=function(){mO(this)};_.Uc=function(){return rO};var rO;\nfunction tO(){tO=q;uO=new to(Ed,new vO)}function vO(){}o(209,205,{},vO);_.Rc=function(a){var b,c,d,e;this.a.stopPropagation();this.a.preventDefault();d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;wO(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(ng),a.a.b.a.a.e.ob[Ig]=null!=b?b:l)};_.Uc=function(){return uO};var uO;\nfunction xO(a,b,c){var d=a.ob,e=c.b;Nr();As(d,e);F(Dd,e)&&As(d,Cd);Tp(!a.lb?a.lb=new hq(a):a.lb,c,b)}function yO(a){var b=$doc.createElement(yd);wH(cg,b.tagName);this.ob=b;this.b=new oI(this.ob);this.ob[cd]="gwt-HTML";nI(this.b,a,!0);wI(this)}o(330,331,{13:1,15:1,17:1,18:1,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,30:1,31:1,32:1,36:1,37:1,38:1,39:1,40:1,41:1,42:1,43:1,44:1,45:1,47:1,49:1,53:1,58:1,68:1,69:1,70:1,73:1,77:1,80:1,81:1,83:1},yO);\nfunction zO(){Hv();var a=$doc.createElement("textarea");!Er&&(Er=new Dr);!Cr&&(Cr=new Br);this.ob=a;this.ob[cd]="gwt-TextArea"}o(370,371,$h,zO);function AO(a,b){var c,d;c=$doc.createElement(Dg);d=$doc.createElement(mg);d[xc]=a.a.a;d.style[Jg]=a.b.a;var e=(Gr(),Hr(d));c.appendChild(e);Fr(a.d,c);tt(a,b,d)}function BO(){nu.call(this);this.a=(qu(),xu);this.b=(yu(),Bu);this.e[Zc]=ab;this.e[Rc]=ab}o(379,324,Vh,BO);_.Fd=function(a){var b;b=Sm(a.ob);(a=xt(this,a))&&this.d.removeChild(Sm(b));return a};\nfunction EO(a){try{a.v=!1;var b,c,d;d=a.gb;c=a._;d||(a.ob.style[Kg]=ge,a._=!1,a.Sd());b=a.ob;b.style[re]=0+(Nn(),vf);b.style[ug]=cb;YJ(a,Oi($wnd.pageXOffset+(an()-E(a.ob,jf)>>1),0),Oi($wnd.pageYOffset+($m()-E(a.ob,hf)>>1),0));d||((a._=c)?(a.ob.style[fd]=If,a.ob.style[Kg]=Lg,pi(a.fb,200)):a.ob.style[Kg]=Lg)}finally{a.v=!0}}function FO(a){a.f=(new jJ(a.i)).nc.He();Rs(a.f,new GO(a),(zo(),zo(),Ao));a.d=D(HO,m,60,[a.f])}\nfunction IO(){sK();var a,b,c,d,e,f;PK.call(this,(gL(),hL),null,!0);this.Ag();this.cb=!0;a=new yO(this.j);this.e=new zO;this.e.ob.style[Ng]=eb;Fs(this.e,eb);this.yg();jK(this,"400px");f=new BO;f.ob.style[fe]=eb;f.e[Zc]=10;c=(qu(),ru);f.a=c;AO(f,a);AO(f,this.e);e=new Fu;e.e[Zc]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],Cu(e,a);AO(f,e);xK(this,f);sJ(this,!1);this.zg()}o(626,627,QF,IO);_.yg=function(){FO(this)};_.zg=function(){var a=this.e;a.ob.readOnly=!0;var b=Is(a.ob)+"-readonly";Es(a.sd(),b,!0)};\n_.Ag=function(){rJ(this.H.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i="Close";_.j="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function GO(a){this.a=a}o(629,1,{},GO);_.Wc=function(){zK(this.a,!1)};_.a=null;function JO(a){this.a=a}o(630,1,{},JO);\n_.Dc=function(){Ns(this.a.e.ob,!0);Zu(this.a.e.ob);var a=this.a.e,b;b=Pm(a.ob,Ig).length;if(0<b&&a.jb){if(0>b)throw new eD("Length must be a positive integer. Length: "+b);if(b>Pm(a.ob,Ig).length)throw new eD("From Index: 0  To Index: "+b+"  Text Length: "+Pm(a.ob,Ig).length);try{a.ob.setSelectionRange(0,0+b)}catch(c){}}};_.a=null;function KO(a){a.i="Cancel";a.j="Paste the text to import into the text area below.";a.b="Accept";rJ(a.H.b,"Paste")}function LO(a){sK();IO.call(this);this.c=a}\no(632,626,QF,LO);_.yg=function(){FO(this);this.a=(new jJ(this.b)).nc.He();Rs(this.a,new MO(this),(zo(),zo(),Ao));this.d=D(HO,m,60,[this.a,this.f])};_.zg=function(){Fs(this.e,"150px")};_.Ag=function(){KO(this)};_.Sd=function(){OK(this);Em((Bm(),Cm),new NO(this))};_.a=null;_.b=null;_.c=null;function OO(a){sK();LO.call(this,a)}o(631,632,QF,OO);\n_.zg=function(){Fs(this.e,"150px");var a=new PO(this),b=this.e;xO(b,new QO,(nO(),nO(),oO));xO(b,new RO,(jO(),jO(),kO));xO(b,new SO,(qO(),qO(),rO));xO(b,new TO(a),(tO(),tO(),uO))};_.Ag=function(){KO(this);this.j+=" Or drag and drop a file on it."};o(635,1,{});o(634,635,{});_.b=null;_.c=1;_.d=-1;function PO(a){this.a=a;this.b=new UO(this);this.c=this.d=1}o(633,634,{},PO);_.a=null;function UO(a){this.a=a}o(636,1,{},UO);_.Bg=function(a){this.a.a.e.ob[Ig]=null!=a?a:l};_.a=null;\nfunction MO(a){this.a=a}o(640,1,{},MO);_.Wc=function(){if(this.a.c){var a=this.a.c,b;b=new Ay(a.a,0,Pm(this.a.e.ob,Ig));TB(a.a.a,b.a)}zK(this.a,!1)};_.a=null;function NO(a){this.a=a}o(641,1,{},NO);_.Dc=function(){Ns(this.a.e.ob,!0);Zu(this.a.e.ob)};_.a=null;o(642,1,oh);_.Oc=function(){var a,b;a=new VO(this.a);void 0!=$wnd.FileReader?b=new OO(a):b=new LO(a);lK(b);EO(b)};function VO(a){this.a=a}o(643,1,{},VO);_.a=null;o(644,1,oh);\n_.Oc=function(){var a;a=new IO;var b=this.a,c;Gv(a.e,b);b=(c=iD(b,"\\r\\n|\\r|\\n|\\n\\r"),c.length);Fs(a.e,20*(10>b?b:10)+vf);Em((Bm(),Cm),new JO(a));lK(a);EO(a)};function wO(a,b){a.onloadend=function(a){b.Bg(a.target.result)}}function TO(a){this.a=a}o(649,1,{},TO);_.a=null;function QO(){}o(650,1,{},QO);function RO(){}o(651,1,{},RO);function SO(){}o(652,1,{},SO);Y(635);Y(634);Y(649);Y(650);Y(651);Y(652);Y(205);Y(207);Y(206);Y(208);Y(209);Y(626);var HO=UC(790);Y(632);Y(631);Y(643);Y(629);Y(630);Y(640);\nY(641);Y(633);Y(636);Y(330);Y(379);Y(370);s(KF)(5);\n//@ sourceURL=5.js\n')
