(window.webpackJsonp=window.webpackJsonp||[]).push([["infogram-charts/dep-12"],{"3AxW":function(t,e,n){"use strict";n.r(e),n.d(e,"Left",(function(){return f})),n.d(e,"trimMultiline",(function(){return d}));var i=n("ziQ1"),r=n("/TIM"),a=n("vBe5"),o=n("SGek"),c=n("3y/1"),l=n("RTfP"),s=n("FR8n"),u=n("Ozxj");function f(){var t,e=function(e){e.each((function(){var e=Object(r.select)(this);e.attr("transform","translate(".concat(f.left,", ").concat(f.top,")"));var i=this.__chart__=n.copy(),l=Object(a.range)(0,x.length).map((function(t){return i(t)})),y=x.slice(0);t&&(y=t.map((function(t){return x[t]})),l=t.map((function(t){return l[t]})));var w=l.map((function(t,e){return{y:t,d:y[e]}})),O=Object(c.getAllTextDimensions)(y,m),T=Object(s.getRangeStep)(l),A=[];e.selectAll(".tick").each((function(t){return A.push(t)})),b&&(b=!Object(c.compare)(A,w,(function(t,e){return t.d===e.d}))),1===l.length&&(T=h.height),T-=g.top+g.bottom;var L=O.width<=T,j=i.bandwidth?i.bandwidth()/2:0,k=h.width-g.right;L&&(y=Object(u.limitTextArr)(y,e,T,m));var M=e.selectAll(".tick").data(w);if(M.exit().remove(),(M=M.enter().append("g").attr("class","tick").merge(M)).selectAll("text").remove(),M.styles(m).style("opacity",o.eps),L?(M.each((function(t,e){var n=Object(r.select)(this).selectAll("text").data([y[e]]);n.exit().remove(),(n=n.enter().append("text").merge(n)).attr("x",g.right).attr("y",t.y+j).attr("dy",O.collection[e].height-g.right).attr("text-anchor","middle").attr("fill",m.color).text((function(t){return t})).attr("transform",(function(){return"rotate(-90,".concat(g.right,",").concat(t.y+j,")")}))})),e.attr("height","")):d({tick:M,bounds:h,padding:g,textDimArr:O,scale1:i,style:m,afterWrap:function(t){t.selectAll("text").attr("text-anchor","end").attr("x",k)}}),v&&(b?v(e.selectAll(".tick").transition()):e.selectAll(".tick").call(v)),p){var W=l[0],C=l.slice(0),F=0,S="function"==typeof i.padding,B=l[l.length-1];S&&(W=i.padding()/2),1===l.length?C.push(B+i.bandwidth()+2*W):(F=l[1]-(l[0]+i.bandwidth()),C.push(B+i.bandwidth()+F));var I=(F=S?i.padding():((l.length-1)*F+2*W)/l.length)/2,E=e.selectAll(".igc-y-axis-separator").data(C);E.exit().remove(),(E=E.enter().append("rect").attr("class","igc-y-axis-separator").merge(E)).attr("x",0).attr("width",h.width-1).attr("y",(function(t){return Math.round(t-I)})).attr("height",1).styles({fill:m.color,stroke:"none","stroke-width":0})}}))},n=Object(i.scaleLinear)(),f={left:0,top:0},h={width:0,height:0},g={top:0,right:0,bottom:0,left:0},m=Object(l.chartOptions)().style.axis.default.tick,x=[],p=!1,v=function(t){t.style("opacity",1)},b=!0,y={scale:function(t){return arguments.length?(n=t,e):n},offset:function(t){return arguments.length?(f.left="number"==typeof t.left?t.left:f.left,f.top="number"==typeof t.top?t.top:f.top,e):f},bounds:function(t){return arguments.length?(h.width="number"==typeof t.width?t.width:h.width,h.height="number"==typeof t.height?t.height:h.height,e):h},style:function(t){return arguments.length?(m=t,e):m},data:function(t){return arguments.length?(x=t,e):x},padding:function(t){return arguments.length?(g.top="number"==typeof t.top?t.top:g.top,g.right="number"==typeof t.right?t.right:g.right,g.bottom="number"==typeof t.bottom?t.bottom:g.bottom,g.left="number"==typeof t.left?t.left:g.left,e):g},drawSeparators:function(t){return arguments.length?(p=!!t,e):p},transition:function(t){return arguments.length?(v=t,e):v},indexFilter:function(n){return arguments.length?(t=n,e):n},animate:function(t){return arguments.length?(b=t,e):e}};return Object.assign(e,y),e}function h(t){return t.selectAll("text")._groups[0]}function d(t){var e=t.tick,n=t.bounds,i=t.padding,a=t.textDimArr,o=t.scale1,l=t.style,s=t.afterWrap,f=a.height,d=n.width-i.left-i.right;u.Text.wrap(e,d,f),s(e);var g=o.bandwidth();e.each((function(t,e){for(var n=Object(r.select)(this),i=h(n),o=i.length,s=o;s*f>g;)s--;if(s<=0&&(s=1),o!==s){for(var m=s;m<=o;m++)Object(r.select)(i[m]).remove();var x=h(n),p=x.length,v=Object(r.select)(x[p-1]);p>0&&function(t,e){var n=t.text(),i=Object(c.setupBBox)();!function t(r,a,o){o.text(a),r>=0&&i(o.node()).width>e&&t(r-1,"".concat(n.substring(0,r)).concat(u.ELLIPSIS),o)}(n.length-1,"".concat(n).concat(u.ELLIPSIS),t)}(v,d)}var b=(g-s*f)/2,y=t.y+b+a.collection[e].baseLineOffset;n.selectAll("text").attr("fill",l.color).attr("y",(function(t,e){return y+e*f}))}))}},AWjw:function(t,e,n){"use strict";n.r(e);var i=n("vhCW");n.d(e,"createFindLeftMost",(function(){return i.createFindLeftMost})),n.d(e,"lastLabelOverflow",(function(){return i.lastLabelOverflow})),n.d(e,"horizontal",(function(){return i.horizontal})),n.d(e,"chartSpecific",(function(){return i.chartSpecific})),n.d(e,"getTicks",(function(){return i.getTicks})),n.d(e,"createCustomTimeFormat",(function(){return i.createCustomTimeFormat})),n.d(e,"getCategories",(function(){return i.getCategories})),n.d(e,"getLimits",(function(){return i.getLimits})),n.d(e,"getPositions",(function(){return i.getPositions})),n.d(e,"regular",(function(){return i.regular}));var r=n("o8tK");n.d(e,"tilted",(function(){return r.tilted}))},F27D:function(t,e,n){"use strict";n.r(e),n.d(e,"scaleProxy",(function(){return o}));var i=n("ziQ1");function r(t,e,n){return t[e].apply(t,n)}function a(t,e,n){t[e]="function"!=typeof n?function(){return r(t.fn,n,arguments)}:n}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fn:i.scaleLinear,range:"range",ticks:"ticks",domain:"domain"},e=function(){return t.fn.apply(e.fn,arguments)};return e.fn=t.fn,["range","ticks","domain"].forEach((function(n){t[n]&&a(e,n,t[n])})),e}},M51E:function(t,e,n){"use strict";n.r(e),n.d(e,"getScalePositions",(function(){return a}));var i=n("WjAf");n.d(e,"Ordinal",(function(){return i.Ordinal}));var r=n("F27D");function a(t){return t.bandwidth?t.domain().map((function(e){return t(e)+.5*t.bandwidth()})):t.ticks().map((function(e){return t(e)}))}n.d(e,"scaleProxy",(function(){return r.scaleProxy}))},WjAf:function(t,e,n){"use strict";n.r(e),n.d(e,"Ordinal",(function(){return r}));var i=n("vBe5");function r(){return function t(e,n){var r,a,o,c=new Map;function l(t){var e=(c.get(t)||NaN)-1;return r[e%r.length]}function s(t,n){return Object(i.range)(e.length).map((function(e){return t+n*e}))}return l.domain=function(t){if(!arguments.length)return e.slice();e=[],c=new Map;var i=!0,r=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var u=o.value;if(!c.has(u)){var f=e.push(u);c.set(u,f)}}}catch(t){r=!0,a=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return l[n.t].apply(l,n.a)},l.range=function(){return arguments.length?l:r},l.rangeBandsByWidth=function(t,i,c){o=i||0,c=c||0;var s=e.length,u=[],f=0,h=1;for(f+=c,u.push(f),a=t;h<s;)f+=a+o,u.push(f),h++;return r=u,n={t:"rangeBandsByWidth",a:arguments},l},l.rangeBands=function(t){o=arguments.length<2?0:arguments[1];var i=arguments.length<3?0:arguments[2],c=t[1]<t[0],u=t[c-0],f=t[1-c],h=[u,f],d=e.length,g=u,m=1===h.length?h[0]:h[1];if(0===d||u===m)return r=[],a=0,o=0,l;var x=m-u,p=x;if(i&&(p-=2*i,g+=i),(a=(p-(d-1)*o)/d)<o){var v=.1,b=x/(d-v);r=s(u,b),a=b*(1-v),o=b*v}else{var y=[];y.push(g);for(var w=1;w<d;w++)g+=a+o,y.push(g);r=y}return c&&r.reverse(),n={t:"rangeBands",a:arguments},l},l.rangeBandsFixed=function(t,i){var c,u=t[1]<t[0],f=t[u-0],h=t[1-u],d=h-f,g=e.length;i<1&&(i=1);var m=i*g;if(m>d&&(i=(d-2*g)/g),i<1)return c=a=d/g,r=s(f,c),u&&r.reverse(),n={t:"rangeBandsFixed",a:arguments},l;i=Math.floor(i),a=i;var x=d-(m=i*g),p=x/g-(o=Math.floor(x/g));isFinite(o)||(o=0),c=a+o;var v=Math.floor(.5*o+p*g*.5);return v%2!=0&&(v-=1),r=s(f+v,c),u&&r.reverse(),n={t:"rangeBandsFixed",a:arguments},l},l.rangeBandsPct=function(t){var i,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.618,u=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],f=t[1]<t[0],h=t[f-0],d=t[1-f],g=Math.floor(d-h),m=e.length;1===m&&(u=!0);var x=Math.floor(g*c);if((a=x/m)<1&&(a=1),(x=(a=Math.floor(a))*m)>g)return i=a=g/m,r=s(h,i),f&&r.reverse(),n={t:"rangeBandsPct",a:arguments},l;var p=g-x,v=m-(u?0:1);o=p/v,isFinite(o)||(o=0);var b=p-v*(o=Math.floor(o)),y=u?Math.floor(.5*(b+o)):Math.floor(.5*b);return r=s(h+y,i=a+o),f&&r.reverse(),n={t:"rangeBandsPct",a:arguments},l},l.rangeBandsCentered=function(t,i,c){arguments.length<3&&(c=0),arguments.length<2&&(i=40);var u=t[1]<t[0],f=t[u-0]+c,h=t[1-u]-c,d=h-f,g=.15,m=!1,x=e.length,p=x-1;(a=d/x)>1&&(a=Math.floor(a)),a>i&&(a=i,m=!0);var v=d-a*x;o=m?v/2/p*g:v/p,isFinite(o)||(o=0);var b=a+o;return r=s(f+=m?(v-o*p)/2:0,b),u&&r.reverse(),n={t:"rangeBandsCentered",a:arguments},l},l.bandwidth=function(){return a},l.rangeBand=function(){return a},l.rangeExtent=function(){return function(t){var e=t[0],n=t[t.length-1];return e<n?[e,n]:[n,e]}(n.a[0])},l.padding=function(){return o},l.copy=function(){return t(e,n)},l.domain(e)}([],{t:"rangeBandsCentered",a:[[]]})}},ejCe:function(t,e,n){"use strict";n.r(e);var i=n("t7GY");n.d(e,"Bottom",(function(){return i.Bottom}));var r=n("FR8n");n.d(e,"getRangeStep",(function(){return r.getRangeStep})),n.d(e,"stepFromPositionsByWidth",(function(){return r.stepFromPositionsByWidth})),n.d(e,"filterToFit",(function(){return r.filterToFit})),n.d(e,"filterOverlappingCategories",(function(){return r.filterOverlappingCategories}));var a=n("3AxW");n.d(e,"Left",(function(){return a.Left})),n.d(e,"trimMultiline",(function(){return a.trimMultiline}));var o=n("nbbm");n.d(e,"LeftStart",(function(){return o.LeftStart}));var c=n("tn5u");n.d(e,"ScaleHelper",(function(){return c.ScaleHelper})),n.d(e,"ticks",(function(){return c.ticks}))},nbbm:function(t,e,n){"use strict";n.r(e),n.d(e,"LeftStart",(function(){return s}));var i=n("ziQ1"),r=n("/TIM"),a=n("SGek"),o=n("3y/1"),c=n("RTfP"),l=n("3AxW");function s(){var t=function(t){t.each((function(){var t=Object(r.select)(this);t.attr("transform","translate(".concat(s.left,", ").concat(s.top,")"));var i=e.copy(),c=n.domain().map((function(t){return{y:i(t),d:n(t)}})).filter((function(t){return void 0!==t.d})),d=Object(o.getAllTextDimensions)(c.map((function(t){return t.d})),h),x=[];t.selectAll(".tick").each((function(t){return x.push(t)})),m&&(m=!Object(o.compare)(x,c,(function(t,e){return t.d===e.d})));var p=t.selectAll(".tick").data(c);p.exit().remove(),(p=p.enter().append("g").attr("class","tick").merge(p)).selectAll("text").remove(),p.styles(h).style("opacity",a.eps),Object(l.trimMultiline)({tick:p,bounds:u,padding:f,textDimArr:d,scale1:i,style:h,afterWrap:function(t){t.selectAll("text").attr("text-anchor","start")}}),g&&(m?g(t.selectAll(".tick").transition()):t.selectAll(".tick").call(g))}))},e=Object(i.scaleLinear)(),n=Object(i.scaleOrdinal)(),s={left:0,top:0},u={width:0,height:0},f={top:0,right:0,bottom:0,left:0},h=Object(c.chartOptions)().style.axis.default.tick,d=!1,g=function(t){t.style("opacity",1)},m=!0,x={scale:function(n){return arguments.length?(e=n,t):e},scaleData:function(e){return arguments.length?(n=e,t):n},offset:function(e){return arguments.length?(s.left="number"==typeof e.left?e.left:s.left,s.top="number"==typeof e.top?e.top:s.top,t):s},bounds:function(e){return arguments.length?(u.width="number"==typeof e.width?e.width:u.width,u.height="number"==typeof e.height?e.height:u.height,t):u},style:function(e){return arguments.length?(h=e,t):h},padding:function(e){return arguments.length?(f.top="number"==typeof e.top?e.top:f.top,f.right="number"==typeof e.right?e.right:f.right,f.bottom="number"==typeof e.bottom?e.bottom:f.bottom,f.left="number"==typeof e.left?e.left:f.left,t):f},drawSeparators:function(e){return arguments.length?(d=!!e,t):d},transition:function(e){return arguments.length?(g=e,t):g},animate:function(e){return arguments.length?(m=e,t):t}};return Object.assign(t,x),t}},o8tK:function(t,e,n){"use strict";n.r(e),n.d(e,"tilted",(function(){return h}));var i=n("LvDl"),r=n.n(i),a=n("vBe5"),o=n("HTVg"),c=n("Ozxj"),l=n("FR8n"),s=n("SGek"),u=n("yZl3"),f=n("vhCW");function h(){var t=this.runtime,e=this.options,n=t.xScale,i=t.sheet,h=e.style.axis.x.tick,d=Math.sqrt(2),g=!(!i.grid||!i.grid.reverse),m=r.a.get(t,"layout.marginAxis.left",0),x=t.spacing.maxBeforeXAxisTick*(m>0?1:2),p=t.xScaleResize,v=x;p||(p="function"==typeof n.rangeBands?function(t,e){t.rangeBands(e,0)}:function(t,e){t.range(e)});var b,y,w=f.getPositions.call(this),O=Object(a.range)(0,w.length),T=f.getCategories.call(this),A=w,L=T,j=f.getLimits.call(this,w),k=j.maxCategoryWidth,M=j.maxCategoryHeight,W=Object(f.createFindLeftMost)((function(t,e){var n=e.width,i=e.height,r=e.baseLineOffset;return s.math.round(t-(n+(i-r))*s.vect45,6)})),C=Object(o.TextMetric)().style(h).text(T),F=C.run().out(),S=F.lineHeight,B=F.baseLineOffset,I=S>k&&F.text.width>k,E={domainIndex:O},P=0,N=function(t){E=Object(l.filterToFit)(A,L,t,-1),T=E.domainIndex.map((function(t){return L[t]})),w=E.range,O=E.domainIndex},G=function(){p(n,[0,t.graphWidth]),w=f.getPositions.call(this);var e=Object(l.stepFromPositionsByWidth)(w,S+u.ENTRY_SPACING);e>0&&e>P?(N(e),P=e):w=O.map((function(t){return w[t]})),b=W({indices:O,positions:w,m:F})},R=function(t){return(t-S*s.vect45)*d};I?(P=Object(l.stepFromPositionsByWidth)(A,S+u.ENTRY_SPACING),N(P),y=C.text(T).clear().run().out()):y=C.limit({width:Math.max(0,k),height:M}).run().out();var H,_=-t.igcLeftOffset;if(b=W({indices:Object(a.range)(0,w.length),positions:w,m:y}),y.text.width<=k&&b.x>_)return f.horizontal.call(this,{m:y,indices:O,positions:w,labels:T,style:h,filterMetrics:E});var D,z,Y,X,U,Z=k>=100;if((k>=M||Z)&&r.a.get(y,"wrapped.fits",!1))return f.horizontal.call(this,{m:y,indices:O,positions:w,labels:T,style:h,filterMetrics:E});if(Z&&!y.wrapped.fits){(function(e){return 0!==v&&0!==e&&(v-=e,t.igcLeftOffset+=e,t.graphWidth-=e,t.margin.left+=e,G.call(this),!0)}).call(this,x);var Q=(Math.min(t.igcLeftOffset+w[b.index]+B*s.vect45,M)-S*s.vect45)*d,J=(D=y.wrapped,z=0,Y=0,X=D.linesFit,D.collection.forEach((function(t){var e=t.length;if(e>z)z=e,Y=Object(a.sum)(t.widths.slice(0,X));else if(0!==e&&e===z){var n=Object(a.sum)(t.widths.slice(0,X));n>Y&&(Y=n)}})),Y);if(v=x,t.igcLeftOffset-=x,t.graphWidth+=x,t.margin.left-=x,p(n,[0,t.graphWidth]),P=I?Object(l.stepFromPositionsByWidth)(A,S+u.ENTRY_SPACING):0,N(P),J>=Q)return y=C.text(T).clear().run().out(),f.horizontal.call(this,{m:y,indices:O,positions:w,labels:T,style:h,filterMetrics:E})}if((b=W({indices:O,positions:w,m:F})).x<_){for(var K=[],V=P,q=t.igcLeftOffset,$=t.graphWidth,tt=t.margin.left,et=t.igcLeftOffset+w[b.index],nt=1;nt<=x;nt++){t.igcLeftOffset=q+nt,t.graphWidth=$-nt,t.margin.left=tt+nt,G.call(this);var it=t.igcLeftOffset+w[b.index];if(V!==P){N(P=0);break}K.push({diff:nt,width:it})}var rt=F.text.width,at=rt-R(et),ot=K.reduce((function(t,e){var n=R(e.width),i=rt-n;return Math.abs(at)>Math.abs(i)?at<=0&&i>0?t:(at=i,e):t}),{diff:0,position:et}).diff;t.igcLeftOffset=q+ot,t.graphWidth=$-ot,t.margin.left=tt+ot,G.call(this),U=((U=Math.min(M,Math.floor(w[b.index]+t.igcLeftOffset)))-S*s.vect45)*d;var ct=c.Text.getTrimmedText(T,h,U),lt=C.text(ct.collection).clear().run().out(),st=((U=lt.text.width)+lt.text.height)*s.vect45;t.igcLeftOffset=Math.round(t.igcLeftOffset),t.graphWidth=Math.round(t.graphWidth),t.margin.left=Math.round(t.margin.left),H=O.map((function(t,e){var n=lt.text.width,i=lt.text.collection[e].height,r=lt.text.collection[e].baseLineOffset;return{x:w[e]-n-(i-r),y:g?st:r,w:n,b:r,h:i,text:[ct.collection[e]],textWidths:[ct.widths[e]],lineHeight:S,maxWidth:n,textAnchor:null,transform:function(t){var e=this.x+t.x+t.w,n=this.y+t.y-t.b,i=-45;return g&&(i=45,n+=t.h),"rotate(".concat(i," ").concat(e," ").concat(n,")")}}}))}else{U=(F.text.height+F.text.width)*s.vect45>M?(M-S*s.vect45)*d:F.text.width;var ut=c.Text.getTrimmedText(T,h,U),ft=C.text(ut.collection).clear().run().out(),ht=((U=ft.text.width)+ft.text.height)*s.vect45;H=O.map((function(t,e){var n=ft.text.width,i=ft.text.collection[e].height,r=ft.text.collection[e].baseLineOffset;return{x:w[e]-n-(i-r),y:g?ht:r,w:n,b:r,h:i,text:[ut.collection[e]],textWidths:[ut.widths[e]],lineHeight:S,maxWidth:n,textAnchor:null,transform:function(t){var e=this.x+t.x+t.w,n=this.y+t.y-t.b,i=-45;return g&&(i=45,n+=t.h),"rotate(".concat(i," ").concat(e," ").concat(n,")")}}}))}H.textAlign=u.TEXT_ALIGN.RIGHT;var dt={renderData:H,height:Math.ceil((U+S)*s.vect45),layout:"tilted"};return f.chartSpecific.call(this,dt,E),f.lastLabelOverflow.call(this,dt,(function(t){return t.x+t.w+t.b*s.vect45})),dt}},t7GY:function(t,e,n){"use strict";n.r(e),n.d(e,"Bottom",(function(){return s}));var i=n("/TIM"),r=n("RTfP"),a=n("SGek"),o=n("AWjw"),c=n("yZl3"),l=Object.values(c.LAYOUT);function s(){var t=function(t){var r=[c.TEXT_ALIGN.CENTER,c.TEXT_ALIGN.RIGHT].includes(l);t.each((function(){var t=Object(i.select)(this),u=t.selectAll(".text_tick").data(o);u.exit().remove(),(u=u.merge(u.enter().append("g").attr("class","text_tick"))).styles(n),u.each((function(t){var a=t.text,o=t.textWidths,s=t.x,u=t.y,f=t.lineHeight,h=t.maxWidth,d=t.textAnchor,g=Object(i.select)(this),m=a.constructor===Array,x=g.selectAll("text").data(m?a:[a]);x.exit().remove(),(x=x.enter().append("text").merge(x)).text((function(t){return t})).attr("fill",n.color).attr("text-anchor",null),m?x.attr("x",(function(t,n){var i=0;if(r){var a=o[n];i=(h-a)*(l===c.TEXT_ALIGN.CENTER?.5:1)}return e.x+s+i})).attr("y",(function(t,n){return e.y+u+n*f})).attr("text-anchor",d):x.attr("x",e.x+s).attr("y",e.y+u)})),u.style("opacity",a.eps).attr("transform",(function(t){return t.transform?t.transform.call(e,t):null})).transition().duration(s).style("opacity",1),t.attr("height",null)}))},e={x:0,y:0,width:0,height:0},n=Object(r.chartOptions)().style.axis.default.tick,o=[],l=c.TEXT_ALIGN.CENTER,s=700,u={bounds:function(n){return arguments.length?(Object.assign(e,n),t):e},style:function(e){return arguments.length?(n=e,t):n},data:function(e){return arguments.length?(o=e,t):o},textAlign:function(e){return arguments.length?(l=-1===Object.values(c.TEXT_ALIGN).indexOf(e)?l:e,t):l},animationDuration:function(e){return arguments.length?(s=e,t):s}};return Object.assign(t,u)}s.createLabels=function(t,e){return e=-1===l.indexOf(e)?c.LAYOUT.REGULAR:e,o[e].call(t)}},vhCW:function(t,e,n){"use strict";n.r(e),n.d(e,"createFindLeftMost",(function(){return T})),n.d(e,"lastLabelOverflow",(function(){return A})),n.d(e,"horizontal",(function(){return L})),n.d(e,"chartSpecific",(function(){return j})),n.d(e,"getTicks",(function(){return k})),n.d(e,"createCustomTimeFormat",(function(){return M})),n.d(e,"getCategories",(function(){return W})),n.d(e,"getLimits",(function(){return C})),n.d(e,"getPositions",(function(){return F})),n.d(e,"regular",(function(){return S}));var i=n("LvDl"),r=n.n(i),a=n("vBe5"),o=n("cOGN"),c=n("M51E"),l=n("Ozxj"),s=n("HTVg"),u=n("pzpO"),f=n("FR8n"),h=n("tn5u"),d=n("yZl3"),g="horizontal",m="vertical",x=["Line","Scatter","Bubble","DotPlot","Area","AreaStacked","StreamGraph"],p=["Column","ColumnStacked","ColumnGrouped","AreaStepped","Waterfall","BubblePlot"],v=["Double","Combo","ComboStacked"];function b(t){return v.includes(t)}function y(t){return x.includes(t)}function w(t){var e=t.m,n=t.indices,i=t.positions,r=t.labels,a=t.style,o=t.filterMetrics,c=e.wrapped,s=0,u=n.map((function(t,n){var o=c.collection[n],u=c.width,f=e.baseLineOffset;if(1===c.linesFit)o=l.Text.getTrimmedText([r[n]],a,e.limit.width),s=Math.max(s,o.widths[0]);else if(o.collection.length>c.linesFit&&(o.collection=c.collection[n].collection.slice(0,c.linesFit),c.linesFit>0)){var h=c.linesFit-1,d=l.Text.trimWithEllipsis(o.collection[h],a,e.limit.width),g=d.text,m=d.width;o.collection[h]=g,o.widths[h]=m}var x=o.collection.length*e.lineHeight;return{x:i[n]-u-.5*x,y:f,w:u,b:f,h:x,text:o.collection,textWidths:o.widths,lineHeight:e.lineHeight,maxWidth:c.width,textAnchor:null,transform:function(t){var e=this.x+t.x+t.w,n=this.y+t.y-t.b;return"rotate(-90 ".concat(e," ").concat(n,")")}}}));u.textAlign=d.TEXT_ALIGN.RIGHT,this.runtime.reverseAxis&&(u.textAlign=d.TEXT_ALIGN.LEFT);var f={renderData:u,height:Math.max(s,c.width),layout:"regular"};return j.call(this,f,o),A.call(this,f,(function(t){return t.x+t.w+t.h})),f}function O(t){var e=function(t){var e=t.length-1;return-1!==e&&{firstItem:r.a.merge({first:!0},t[0]),lastItem:r.a.merge({},t[e])}}(t);if(!e)return!1;var n=e.firstItem,i=e.lastItem;return n.x>i.x?n:i}function T(t){return function(e){var n=e.indices,i=e.positions,r=e.m,a={x:1/0,index:0};return n.forEach((function(e,n){var o=r.text.collection[e],c=t(i[n],o);c<a.x&&(a.x=c,a.index=n)})),a.x===1/0&&(a.x=0),a}}function A(t,e){var n=this.runtime,i=t.renderData,a=O(i);if(!a)return!1;var o=n.graphWidth+r.a.get(n,"margin.right",0),c=e(a);b(this.getClassName())&&(o+=n.layout.marginAxis.right+n.marginTitle.right),c>o&&(a.first?i.shift():i.pop())}function L(t){var e,n=t.m,i=t.indices,r=t.positions,a=t.labels,o=t.style,c=t.filterMetrics,s=n.wrapped,u=n.limit,f=[];s?(f=i.map((function(t,e){var i=s.collection[e],c=i.width;if(1===s.linesFit)i=l.Text.getTrimmedText([a[e]],o,u.width);else if(i.collection.length>s.linesFit&&(i.collection=s.collection[e].collection.slice(0,s.linesFit),s.linesFit>0)){var f=s.linesFit-1,h=l.Text.trimWithEllipsis(i.collection[f],o,u.width),d=h.text,g=h.width;i.collection[f]=d,i.widths[f]=g}return{x:r[e]-.5*s.width,y:n.baseLineOffset,text:i.collection,textWidths:i.widths,width:c,lineHeight:n.lineHeight,maxWidth:s.width,textAnchor:null,transform:null}})),e=n.wrapped.linesFitHeight):(f=i.map((function(t,e){var i=n.text.collection[e],c=i.width;return i=l.Text.getTrimmedText([a[e]],o,n.text.width),{x:r[e]-.5*n.text.width,y:n.baseLineOffset,text:i.collection,textWidths:i.widths,width:c,lineHeight:n.lineHeight,maxWidth:n.text.width,textAnchor:null,transform:null}})),e=n.text.height);var h={renderData:f,height:e,layout:"regular"};return j.call(this,h,c),A.call(this,h,(function(t){return t.x+t.maxWidth/2+t.width/2})),h}function j(t,e){var n=this.runtime,i=this.getClassName();y(i)?(t.ticks=n.numericCategories?k.call(this):null,t.filterMetrics=e):"BubblePlot"===i?t.filterMetrics=e:b(i)&&(t.filterMetrics=e)}function k(){var t=this.runtime,e=t.xAxisOptions,n=t.xScale,i=t.xTickInterval,r=t.xAxisTimeBased,a=n.domain(),o=h.ScaleHelper.ticks(n,i);return Object(u.hasLimits)(e)&&!r&&(o=Object(u.forceTicksToDomain)(a,o)),o}function M(t){var e=r.a.get(this,"runtime.sheet.axis[0].timeFormat");return e&&"auto"!==e?Object(o.timeFormat)(e):t()}function W(){var t=this.runtime,e=r.a.get(t,"sheet.axis[0]"),n=this.getClassName();if(function(t){return p.includes(t)}(n))return t.categoryData;if(t.xAxisTimeBased){var i=t.xScale,a=M.call(this,i.tickFormat);return h.ScaleHelper.ticks(i,t.xTickInterval).map((function(t){return a(t)}))}if(y(n)){if(t.numericCategories){var o=k.call(this),c=t.formatter.axis.x.createTickFormatter(o,e);return o.map(c)}return t.sheet.categories.data.slice(0)}if(b(n))return t.sheet.categories.data.slice(0);if("Gantt"===n||"Candlestick"===n){if(t.numericCategories)return t.formatter.axis.x.formatTicks(k.call(this),e);var l=t.xScale,s=M.call(this,l.tickFormat);return h.ScaleHelper.ticks(l,t.xTickInterval).map((function(t){return s(t)}))}}function C(t){var e=this.getClassName(),n=this.runtime.limits,i={maxCategoryWidth:n.maxCategoryWidth,maxCategoryHeight:n.maxCategoryHeight};return(y(e)||["Gantt","Candlestick","BubblePlot"].includes(e))&&(i.maxCategoryWidth=Object(f.getRangeStep)(t)-d.ENTRY_SPACING),i}function F(){var t=this.runtime,e=this.getClassName(),n=t.xScale,i=Object(c.getScalePositions)(n);(t.xAxisTimeBased||y(e)&&t.numericCategories)&&(i=k.call(this).map((function(t){return n(t)})));return i}function S(){var t,e=this.runtime,n=this.options,i=e.bottomLabelPadding,r=e.igcLeftOffset,o=n.style.axis.x.tick,c=T((function(t,e){return t-e.width/2})),l=i?i.top+i.bottom:0,u=F.call(this),h=Object(a.range)(0,u.length),x=W.call(this),p={domainIndex:h},v=C.call(this,u),b=v.maxCategoryHeight,y=v.maxCategoryWidth,O=Object(s.TextMetric)().style(o);if(!!(e.xTickMetrics&&e.xTickMetrics.height*u.length>e.graphWidth)){var A=Object(f.stepFromPositionsByWidth)(u,e.xTickMetrics.height);p=Object(f.filterToFit)(u,x,A,-1),x=p.domainIndex.map((function(t){return x[t]})),u=p.range,h=Object(a.range)(0,u.length),y=Object(f.getRangeStep)(u)-d.ENTRY_SPACING,O.text(x),O.limit({width:Math.max(0,y),height:b}),t=O.clear().run().out()}else if((t=O.text(x).limit({width:Math.max(0,y),height:b}).run().out()).text.height>y&&t.text.width>y){var j=Object(f.stepFromPositionsByWidth)(u,t.text.height+d.ENTRY_SPACING);p=Object(f.filterToFit)(u,x,j,-1),x=p.domainIndex.map((function(t){return x[t]})),u=p.range,h=Object(a.range)(0,u.length),y=Object(f.getRangeStep)(u)-d.ENTRY_SPACING,O.text(x),O.props.limit.width=y,t=O.clear().run().out()}O.props.limit.width=b,O.props.limit.height=y;var k=O.clear().run().out();if(t.text.width<y)return c({indices:h,positions:u,m:t}).x<-r?w.call(this,{m:k,indices:h,positions:u,labels:x,style:o,filterMetrics:p}):L.call(this,{m:t,indices:h,positions:u,labels:x,style:o,filterMetrics:p});if(t.text.width+l<b)return w.call(this,{m:k,indices:h,positions:u,labels:x,style:o,filterMetrics:p});var M=g;return b>y&&(M=k.wrapped.fits?m:t.wrapped.fits&&k.wrapped.linesFit>1?g:m),m===M?w.call(this,{m:k,indices:h,positions:u,labels:x,style:o,filterMetrics:p}):L.call(this,{m:t,indices:h,positions:u,labels:x,style:o,filterMetrics:p})}},yZl3:function(t,e,n){"use strict";n.r(e),n.d(e,"TEXT_ALIGN",(function(){return i})),n.d(e,"LAYOUT",(function(){return r})),n.d(e,"ENTRY_SPACING",(function(){return a}));var i={LEFT:1,CENTER:2,RIGHT:3},r={REGULAR:"regular",TILTED:"tilted"},a=0}}]);