


var sliderOptions=
{
	sliderId: "slider",
	effect: "1,7,11,2",
	effectRandom: false,
	pauseTime: 2900,
	transitionTime: 500,
	slices: 14,
	boxes: 9,
	hoverPause: true,
	autoAdvance: true,
	captionOpacity: 1,
	captionEffect: "rotate",
	thumbnailsWrapperId: "thumbs",
	license: "free"
};

var imageSlider=new mcImgSlider(sliderOptions);

/* Menucool Javascript Image Slider v2012.7.3. Copyright www.menucool.com */
function mcImgSlider(e){var z=function(d){var a=d.childNodes,c=[];if(a)for(var b=0,e=a.length;b<e;b++)a[b].nodeType==1&&c.push(a[b]);return c},A=function(a,b){return a.getElementsByTagName(b)},N=function(a){for(var c,d,b=a.length;b;c=parseInt(Math.random()*b),d=a[--b],a[b]=a[c],a[c]=d);return a},x=function(a,b){if(a){a.o=b;a.style.opacity=b;a.style.filter="alpha(opacity="+b*100+")"}},M=function(a,c,b){if(a.addEventListener)a.addEventListener(c,b,false);else a.attachEvent&&a.attachEvent("on"+c,b)},O=document,F=function(c,a,b){return b?c.substring(a,b):c.substring(a)},k=function(){this.d=[];this.b=null;this.c()};function L(){var c=50,b=navigator.userAgent,a;if((a=b.indexOf("MSIE "))!=-1)c=parseInt(b.substring(a+5,b.indexOf(".",a)));return c}var P=L()<9;k.a={f:function(a){return-Math.cos(a*Math.PI)/2+.5},g:function(a){return a},h:function(b,a){return Math.pow(b,a*2)},j:function(b,a){return 1-Math.pow(1-b,a*2)}};k.prototype={k:{c:e.transitionTime,a:function(){},b:k.a.f,d:1},c:function(){for(var b=["webkit","moz","ms","o"],a=0;a<b.length&&!window.requestAnimationFrame;++a){window.requestAnimationFrame=window[b[a]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[b[a]+"CancelAnimationFrame"]||window[b[a]+"CancelRequestAnimationFrame"]}this.supportAnimationFrame=!!window.requestAnimationFrame},m:function(h,d,g,c){for(var b=[],i=g-d,j=g>d?1:-1,f=Math.ceil(60*c.c/1e3),a,e=1;e<=f;e++){a=d+c.b(e/f,c.d)*i;if(h!="opacity")a=Math.round(a);b.push(a)}b.index=0;return b},n:function(){this.b==null&&this.p()},p:function(){this.q();var a=this;this.b=this.supportAnimationFrame?window.requestAnimationFrame(function(){a.p()}):window.setInterval(function(){a.q()},15)},q:function(){var a=this.d.length;if(a){for(var c=0;c<a;c++)this.o(this.d[c]);while(a--){var b=this.d[a];if(b.d.index==b.d.length){b.c();this.d.splice(a,1)}}}else{if(this.supportAnimationFrame)window.cancelAnimationFrame(this.b);else window.clearInterval(this.b);this.b=null}},o:function(a){if(a.d.index<a.d.length){var c=a.b,b=a.d[a.d.index];if(a.b=="opacity"){if(P){c="filter";b="alpha(opacity="+Math.round(b*100)+")"}}else b+="px";a.a.style[c]=b;a.d.index++}},r:function(e,b,d,f,a){a=this.s(this.k,a);var c=this.m(b,d,f,a);this.d.push({a:e,b:b,d:c,c:a.a});this.n()},s:function(c,b){b=b||{};var a,d={};for(a in c)d[a]=b[a]!==undefined?b[a]:c[a];return d}};var d=new k,b={a:0,e:"",d:0,c:0,b:0},a,c,l,o,v,s,w,f,g,y,r,h,p,q,n,u,i,j=null,D=function(b){if(b=="series1")a.a=[6,8,15,2,5,14,13,3,7,4,14,1,13,15];else if(b=="series2")a.a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];else a.a=b.split(/\W+/);a.a.p=e.effectRandom?-1:a.a.length==1?0:1},C=function(){a={b:e.pauseTime,c:e.transitionTime,f:e.slices,g:e.boxes,O0:e.license,h:e.hoverPause,i:e.autoAdvance,j:e.captionOpacity,k:e.captionEffect=="none"?0:e.captionEffect=="fade"?1:2,l:e.thumbnailsWrapperId,Ob:function(){typeof beforeSlideChange!=="undefined"&&beforeSlideChange(arguments)},Oa:function(){typeof afterSlideChange!=="undefined"&&afterSlideChange(arguments)}};if(c)a.m=Math.ceil(c.offsetHeight*a.g/c.offsetWidth);D(e.effect);a.n=function(){var b;if(a.a.p==-1)b=a.a[Math.floor(Math.random()*a.a.length)];else{b=a.a[a.a.p];a.a.p++;if(a.a.p>=a.a.length)a.a.p=0}if(b<1||b>17)b=15;return b}},m=[];function I(){var e;if(a.l)e=document.getElementById(a.l);if(e)for(var f=e.childNodes,d=0;d<f.length;d++)f[d].className=="thumb"&&m.push(f[d]);var c=m.length;if(c){while(c--){m[c].on=0;m[c].i=c;m[c].onclick=function(){j.y(this.i)};m[c].onmouseover=function(){this.on=1;this.className="thumb thumb-on"};m[c].onmouseout=function(){this.on=0;this.className=this.i==b.a?"thumb thumb-on":"thumb"}}E(0)}}function E(b){var a=m.length;if(a)while(a--)m[a].className=a!=b&&m[a].on==0?"thumb":"thumb thumb-on"}function J(b){var a=[],c=b.length;while(c--)a.push(String.fromCharCode(b[c]));return a.join("")}var K=function(b){var a=document.getElementById(b);if(a)a.b=function(b){return a.innerHTML.indexOf(b)>-1};return a},B=function(a,f,h,c,b,e,g){setTimeout(function(){if(f&&h==f-1){var g={};g.a=function(){j.o()};for(var i in a)g[i]=a[i]}else g=a;b.width!==undefined&&d.r(c,"width",b.width,e.width,a);b.height!==undefined&&d.r(c,"height",b.height,e.height,a);d.r(c,"opacity",b.opacity,e.opacity,g)},g)},G=function(a){c=a;this.b=0;this.c()},t=function(b){var a=document.createElement("div");a.className=b;return a};G.prototype={c:function(){l=c.offsetWidth;o=c.offsetHeight;i=z(c);var k=i.length;while(k--){var e=i[k],d=null;if(e.nodeName!="IMG"){if(e.nodeName=="A"){d=e;d.style.display="none";var m=d.className?" "+d.className:"";d.className="imgLink"+m;var p=this.z(d),g=d.getAttribute("href");if(p&&typeof McVideo!="undefined"&&g&&g.indexOf("http")!=-1){d.onclick=function(){return this.getAttribute("autoPlayVideo")=="true"?false:j.d(this)};McVideo.register(d,this)}}e=A(e,"img")[0]}e.style.display="none";b.d++}a.m=Math.ceil(o*a.g/l);if(i[b.a].nodeName=="IMG")b.e=i[b.a];else b.e=A(i[b.a],"img")[0];if(i[b.a].nodeName=="A")i[b.a].style.display="block";c.style.background='url("'+b.e.getAttribute("src")+'") no-repeat';this.i();v=this.k();this.m();var h=this.v(),f=b.e.parentNode;if(this.z(f)&&f.getAttribute("autoPlayVideo")=="true")this.d(f);else if(a.i&&b.d>1)n=setTimeout(function(){h.p(0)},a.b);if(a.h){c.onmouseover=function(){if(b.b!=2){b.b=1;clearTimeout(n);n=null}};c.onmouseout=function(){if(b.b!=2){b.b=0;if(n==null&&!b.c&&a.i)n=setTimeout(function(){h.p(0)},a.b/2)}}}},d:function(c){var a=McVideo.play(c,l,o);if(a)b.b=2;return!this.b},f:function(){u=t("navBulletsWrapper");for(var e=[],a=0;a<b.d;a++)e.push("<div rel='"+a+"'></div>");u.innerHTML=e.join("");for(var d=z(u),a=0;a<d.length;a++){if(a==b.a)d[a].className="active";d[a].onclick=function(){if(this.className=="active")return 0;if(b.b==2){b.b=0;var a=document.getElementById("mcVideo");a.src="";var c=a.parentNode.parentNode.removeChild(a.parentNode);delete c}clearTimeout(n);n=null;b.a=this.getAttribute("rel")-1;j.p(1)}}c.appendChild(u)},g:function(){var c=z(u),a=c.length;while(a--)if(a==b.a)c[a].className="active";else c[a].className=""},h:function(c){var b=function(b){var a=b.charCodeAt(0).toString();return F(a,a.length-1)},a=c.split("");return a[1]+b(a[0])+(a.length==2?"":b(a[2]))},i:function(){s=t("mc-caption");w=t("mc-caption");f=t("mc-caption-bg");x(f,0);f.appendChild(w);g=t("mc-caption-bg2");g.appendChild(s);x(g,0);g.style.visibility=f.style.visibility=w.style.visibility="hidden";c.appendChild(f);c.appendChild(g);y=[f.offsetLeft,f.offsetTop,s.offsetWidth];s.style.width=w.style.width=s.offsetWidth+"px";this.j()},j:function(){if(a.k==2){r=p={opacity:0,width:0,marginLeft:Math.round(y[2]/2)};h={opacity:1,width:y[2],marginLeft:0};q={opacity:a.j,width:y[2],marginLeft:0}}else if(a.k==1){r=p={opacity:0};h={opacity:1};q={opacity:a.j}}else{r=h={};q=p={}}},k:function(){var a=b.e.getAttribute("alt");if(a&&a.substr(0,1)=="#"){var c=document.getElementById(a.substring(1));a=c?c.innerHTML:""}this.l();return a},l:function(){if(s.innerHTML.length>1){var b={c:a.b/4.5,b:a.k==1?k.a.f:k.a.h,d:a.k==1?0:3},c=b;c.a=function(){f.style.visibility=g.style.visibility="hidden"};if(!a.k)c.c=b.c=10;if(h.marginLeft!==undefined){d.r(g,"width",h.width,r.width,b);d.r(f,"width",q.width,p.width,b);d.r(g,"marginLeft",h.marginLeft,r.marginLeft,b);d.r(f,"marginLeft",q.marginLeft,p.marginLeft,b)}if(h.opacity!==undefined){d.r(g,"opacity",h.opacity,r.opacity,b);d.r(f,"opacity",q.opacity,p.opacity,c)}}},m:function(){w.innerHTML=s.innerHTML=v;if(v){f.style.visibility=g.style.visibility="visible";var b={c:a.k?a.b/3:10,b:a.k==1?k.a.f:k.a.j,d:a.k==1?0:3};if(h.marginLeft!==undefined){d.r(g,"width",r.width,h.width,b);d.r(f,"width",p.width,q.width,b);d.r(g,"marginLeft",r.marginLeft,h.marginLeft,b);d.r(f,"marginLeft",p.marginLeft,q.marginLeft,b)}if(h.opacity!==undefined){d.r(g,"opacity",r.opacity,h.opacity,b);d.r(f,"opacity",p.opacity,q.opacity,b)}}},a:function(a){return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/,"$1$3$2")},o:function(){b.c=0;clearTimeout(n);n=null;this.m();c.style.background='url("'+b.e.getAttribute("src")+'") no-repeat';var e=this,d=b.e.parentNode;if(this.z(d)&&d.getAttribute("autoPlayVideo")=="true")this.d(d);else if(!b.b&&a.i)n=setTimeout(function(){e.p(0)},a.b);a.Oa.call(this,b.a,b.e)},p:function(){b.c=1;b.a++;if(b.a>=b.d)b.a=0;else if(b.a<0)b.a=b.d-1;if(i[b.a].nodeName=="IMG")b.e=i[b.a];else b.e=A(i[b.a],"img")[0];var f=b.d;while(f--)if(i[f].nodeName=="A")i[f].style.display=f==b.a?"block":"none";this.g();v=this.k();var g=A(c,"div");f=g.length;while(f--)if(g[f].className=="mcSlc"||g[f].className=="mcBox"){var h=c.removeChild(g[f]);delete h}var d=a.n();a.Ob.apply(this,[b.a,b.e,v,d]);E(b.a);var e=d<14?this.w(d):this.x();if(d<9||d==15){if(d%2)e=e.reverse()}else if(d<14)e=e[0];if(d<9)this.q(e,d);else if(d<13)this.r(e,d);else if(d==13)this.s(e);else if(d<16)this.t(e,d);else this.u(e,d)},q:function(b,c){for(var d=0,e=c<7?{height:0,opacity:-.4}:{width:0,opacity:0},g={height:o,opacity:1},a=0,f=b.length;a<f;a++){if(c<3)b[a].style.bottom="0";else if(c<5)b[a].style.top="0";else if(c<7){b[a].style[a%2?"bottom":"top"]="0";e.opacity=-.2}else{g={width:b[a].offsetWidth,opacity:1};b[a].style.width=b[a].style.top="0";b[a].style.height=o+"px"}B({},f,a,b[a],e,g,d);d+=50}},r:function(c,b){c.style.width=b<11?"0px":l+"px";c.style.height=b<11?o+"px":"0px";x(c,1);if(b<11)c.style.top="0";if(b==9){c.style.left="auto";c.style.right="0px"}else if(b>10)c.style[b==11?"bottom":"top"]="0";if(b<11)var e=0,f=l;else{e=0;f=o}var g={b:k.a.j,c:a.c*2,a:function(){j.o()}};d.r(c,b<11?"width":"height",e,f,g)},s:function(b){b.style.top="0";b.style.width=l+"px";b.style.height=o+"px";var c={b:k.a.f,c:a.c*2,a:function(){j.o()}};d.r(b,"opacity",0,1,c)},t:function(b){var o=a.g*a.m,l=timeBuff=0,f=colIndex=0,d=[];d[0]=[];for(var c=0,j=b.length;c<j;c++){b[c].style.width=b[c].style.height="0px";d[f][colIndex]=b[c];colIndex++;if(colIndex==a.g){f++;colIndex=0;d[f]=[]}}for(var m={b:k.a.j,c:a.c/1.3},g=0,j=a.g*2;g<j;g++){for(var e=g,h=0;h<a.m;h++){if(e>=0&&e<a.g){var i=d[h][e];B(m,b.length,l,i,{width:0,height:0,opacity:0},{width:i.w,height:i.h,opacity:1},timeBuff);l++}e--}timeBuff+=100}},u:function(a,g){a=N(a);for(var d=0,b=0,h=a.length;b<h;b++){var c=a[b];if(g==16){a[b].style.width=a[b].style.height="0px";var e={width:0,height:0,opacity:0},f={width:c.w,height:c.h,opacity:1}}else{e={opacity:0};f={opacity:1}}B({},a.length,b,c,e,f,d);d+=20}},v:function(){return(new Function("a","b","c","d","e","f","g","h","this.f();var l=e(g(b([110,105,97,109,111,100])));if(l==''||l.length>3||(f(l).length==2?a[b([48,79])].indexOf(f(l))>-1:a[b([48,79])]==f(l)+'b')){d();this.b=1;}else{a[b([97,79])]=a[b([98,79])]=function(){};var k=c(b([115,105,99,109]));if (k && k.getAttribute(b([102,101,114,104]))) var x = k.getAttribute(b([102,101,114,104]));if (x && x.length > 20) var y = h(x, 17, 19) == 'ol';if(!(y&&(k.b('en') || k.b('li')))){a.a=[6];a.a.p=0;}};return this;")).apply(this,[a,J,K,I,this.a,this.h,function(a){return O[a]},F])},w:function(f){for(var i=[],g=f>8?l:Math.round(l/a.f),j=f>8?1:a.f,e=0;e<j;e++){var h=t("mcSlc"),d=h.style;d.left=g*e+"px";d.width=(e==a.f-1?l-g*e:g)+"px";d.height="0px";d.background='url("'+b.e.getAttribute("src")+'") no-repeat -'+e*g+"px 0%";if(f==10)d.background='url("'+b.e.getAttribute("src")+'") no-repeat right top';else if(f==12)d.background='url("'+b.e.getAttribute("src")+'") no-repeat left bottom';d.zIndex=1;d.position="absolute";x(h,0);c.appendChild(h);i.push(h)}return i},x:function(){for(var j=[],i=Math.round(l/a.g),h=Math.round(o/a.m),g=0;g<a.m;g++)for(var f=0;f<a.g;f++){var d=t("mcBox"),e=d.style;e.left=i*f+"px";e.top=h*g+"px";d.w=f==a.g-1?l-i*f:i;d.h=g==a.m-1?o-h*g:h;e.width=d.w+"px";e.height=d.h+"px";e.background='url("'+b.e.getAttribute("src")+'") no-repeat -'+f*i+"px -"+g*h+"px";e.zIndex=1;e.position="absolute";x(d,0);c.appendChild(d);j.push(d)}return j},y:function(a){var b=z(u);a<b.length&&b[a].onclick()},To:function(c){var a;if(b.a==0&&c==-1)a=b.d-1;else if(b.a==b.d-1&&c==1)a=0;else a=b.a+c;this.y(a)},z:function(a){return a.className.indexOf(" video")>-1}};var H=function(){var a=document.getElementById(e.sliderId);if(a)j=new G(a)};(function(){C();M(window,"load",H)})();return{displaySlide:function(a){j.y(a)},next:function(){j.To(1)},previous:function(){j.To(-1)},getAuto:function(){return a.i},switchAuto:function(){(a.i=!a.i)&&j.To(1)},setEffect:function(a){D(a)},changeOptions:function(a){for(var b in a)e[b]=a[b];C()},getElement:function(){return c}}}


