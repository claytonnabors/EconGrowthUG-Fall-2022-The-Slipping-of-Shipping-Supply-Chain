(window.webpackJsonp=window.webpackJsonp||[]).push([["infogram-charts/alluvial~infogram-charts/charts-area~infogram-charts/charts-area_stacked~infogram-ch~7d768b62"],{BpKf:function(e,t,n){"use strict";n.r(t),n.d(t,"HeatmapVertical",(function(){return u}));var r=n("LvDl"),a=n.n(r),i=n("/TIM"),c=n("vBe5"),o=n("hKMu"),l=n("a7sT"),s=n("3y/1"),d=n("dayV");function u(e){var t,n=e.data,r=void 0===n?[]:n,u=e.coldText,g=void 0===u?"":u,f=e.maxValue,h=void 0===f?"":f,p=e.instance,v=e.hotText,y=void 0===v?"":v,b=e.opacity,m=void 0===b?{active:1,disabled:.2}:b,O=e.position,x=void 0===O?o.LEGEND_POSITION.LEFT:O,j=e.showLegendValues,L=void 0===j||j,w=e.style,I=void 0===w?{}:w,_=e.layout,H=e.target,E=e.title,T=void 0===E?"":E,P=e.width,M=void 0===P?300:P,S=function(e){if(!L)return 5;var n=e.append("div").attr("class","igc-heatmap-scale-label-holder"),a=t/F,o=r.map((function(e,t){return{text:e.text,offset:t*a-V*(0===t?0:.5)}}));o.push({text:h,offset:t-V});var s=n.selectAll(".igc-heatmap-scale-label").data(o).enter().append("div").attr("class","igc-heatmap-scale-label"),d=Object(l.createMeasurement)({container:N,lineHeight:1,style:I})(o.map((function(e){return e.text}))),u=Object(c.max)(d,(function(e){return e.width}));s.text((function(e){return e.text})).styles(I),s.styles({top:function(e){return"".concat(e.offset,"px")}});var g=function(e){var t,n=[];e.each((function(){var e=Object(i.select)(this).node().getBoundingClientRect();n.push(e),t=e}));for(var r=n[0].bottom,a=t.top,c=n.length,o=!1,l=1;!o&&l<c;){var s=r;o=!0;for(var d=l;d<c-1;d+=l){if(n[d].top<s||n[d].bottom>a){l++,o=!1;break}s=n[d].bottom}}return l}(s);return G&&s.classed("__right",G),s.classed("__hidden",(function(e,t){return 0!==t&&t%g!=0})),u+5},k=function(e){return e.append("div").attr("class","igc-heatmap-vertical-slot")},N=p.content,D=p.runtime,z=a.a.get(I,"color.label.customColor")||a.a.get(I,"color.label.active"),A=13,C=10,F=r.length,V=parseInt(a.a.get(I,"font-size"),10),G=o.LEGEND_POSITION.RIGHT===x;return function(e){t=p.runtime.height;var n=a.a.omit(_,["entry"]);e.each((function(){var e=Object(i.select)(this);e.styles(Object(s.kebabizeObject)(n)),e.style("color",z);var a=C;e.style("width","".concat(M,"px")),e.style("height","".concat(t,"px"));var c,o=k(e),l=k(e),u=k(e),f=o,h=u;G&&(f=u,h=o),a=function(e){if(!g&&!y)return 0;var n=e.append("div").attr("class","igc-heatmap-vertical-title-holder").style("width","".concat(t,"px"));n.classed("__right",G);var r=g&&y,a=[y||"",g||""];G&&a.reverse();var i=0;return a.forEach((function(e,t){if(e){var a=n.append("span");a.classed("igc-heatmap-vertical-title",!0),a.classed("__top",0===t),a.classed("__bottom",1===t),a.classed("__fullsize",!r),a.styles(I),a.style("color",z),a.text(e),i=Math.max(i,a.node().offsetHeight)}})),i+=4,n.style("height","".concat(i,"px")),i}(f)||a,f.style("width","".concat(a,"px")),l.style("width","".concat(A,"px")),h.style("width","".concat(M-A-a,"px")),(c=l.selectAll(".igc-heatmap-scale-entry").data(r).enter().append("div").attr("class","igc-heatmap-scale-entry")).style("height","".concat(100/F,"%")).style("background-color",(function(e){return e.color})),Object(d.HeatmapEntryEvents)({g:Object(i.select)(c.node().parentNode),entry:c,instance:p,opacity:m,target:H});var v=S(h);h.style("width","".concat(v,"px"));var b,O,x,j=a+A+v;if(D.width+=M-j,T){var L=e.append("div").attr("class","igc-heatmap-vertical-slot __heading").styles(I).style("color",z).text(T);L.styles((b={width:"".concat(D.width,"px")},O=G?"right":"left",x="".concat(j,"px"),O in b?Object.defineProperty(b,O,{value:x,enumerable:!0,configurable:!0,writable:!0}):b[O]=x,b)),D.height-=L.node().offsetHeight}e.style("width","".concat(j,"px"))}))}}},Fi9g:function(e,t,n){"use strict";n.r(t),n.d(t,"legendHelper",(function(){return u})),n.d(t,"createLegendData",(function(){return g})),n.d(t,"legendFiltered",(function(){return f})),n.d(t,"createLegendFilter",(function(){return h})),n.d(t,"createLegendFilterOpacity",(function(){return p})),n.d(t,"createListenToLegend",(function(){return v}));var r=n("LvDl"),a=n.n(r),i=n("30U6"),c=n("+3eq"),o=n("hKMu"),l=n("HTVg");function s(e,t){var n=.3;return t.some((function(t){if(t[0]>=e)return n=t[1],!0})),Math.floor(e*n)}function d(e,t){var n=this,r=Object(i.dispatch)("legendClick"),a=e.legendData;r.on("legendClick",(function(t,r){if(a||n.chartId===r){var i=Object.values(a),c=i.length,o=i.filter((function(e){return!1===e.active})).length,l=!a[t].active;(c-o>1||!0===l)&&(a[t].active=l,e.render())}})),t.addListener({id:e.chartId,dispatch:r})}function u(e){var t,n=e.instance,r=e.creator,i=e.data,c=e.attachEvents,u=void 0===c?d:c,g=e.sizeLimit,f=void 0===g||g,h=n.options,p=n.runtime,v=n.content,y=h.fixedHeight,b=h.width,m=h.height,O=p.sheet.legend,x=O.enabled,j=O.position,L=function(e){var t=e.instance,n=t.options,r=t.runtime,i=n.width,c=r.sheet.legend,o=c.align,l=c.position,d=c.sizing,u=c.layouts,g=-1!==["left","right"].indexOf(l),f=a.a.merge({},u.common,u[l]).legend;return{width:g?s(i,d):i,side:g,position:l,align:o,legend:f}}({instance:n}),w=L.side,I=x&&!w&&y;if(v.select(".igc-legend").remove(),x){var _;n.sheetPlayerNode&&(_=".igc-sheet-player");-1!==["top","left"].indexOf(j)&&(_=".igc-root");var H=v.insert("div",_).attr("class","igc-legend");if(I&&H.style("visibility","hidden"),x&&(v.classed("igc-content-columns",w),w&&(p.width=b-L.width),u(n,t=r&&r({instance:n,data:i,layout:L})||function(e){var t=e.instance,n=e.data,r=e.layout;n=n||Object.values(t.legendData||{});var a=t.options,i=t.chartId,c=a.style.legend;return Object(o.Legend)(t).data(n).style(c).chartId(i).layout(r)}({instance:n,data:i,layout:L})),H.call(t),w&&!r)){var E=H.select(".igc-legend-alignContainer"),T=Math.floor(H.node().offsetWidth-E.node().offsetWidth);T>1&&(p.width+=T,H.style("width","".concat(L.width-T,"px")))}if(I){var P=Object(l.outerHeight)(H.node());f&&P>.5*m?(H.remove(),t=void 0):(p.height-=P,H.style("visibility",null))}return t}}function g(e){var t=e.legendData;return t||(t=e.legendData={}),function(e){return"string"==typeof e.title&&(e.title=e.title.trim()),void 0===t[e.groupId]?(e.active=!0,t[e.groupId]=e,e):(a.a.merge(t[e.groupId],e),t[e.groupId])}}function f(e){var t=e.legendData,n=void 0===t?{}:t;return Object.values(n).some((function(e){return!1===e.active}))}function h(e){var t=e.groupId,n=e.matchProperty;return function(e){return e[n]!==t}}function p(e){var t=e.groupId,n=e.matchProperty;return function(e){return e[n]===t}}function v(e){var t=e.ns,n=e.easing,r=void 0===n?c.easeLinear:n,a=e.opacity,i=e.dispatch,o=e.matchProperty,l=void 0===o?"seriesIdx":o,s=e.highlight;return s=s||function(e){var t=.3,n=1,r=h;return e&&(t=1,n=e,r=p),{start:function(e){e.style("opacity",t)},end:function(e){e.style("opacity",n)},createFilter:r}}(a),function(e){i.on("highlightStart.".concat(t),(function(t){e.filter(s.createFilter({groupId:t,matchProperty:l})).transition().duration(150).ease(r).call(s.start)})),i.on("highlightEnd.".concat(t),(function(t){e.filter(s.createFilter({groupId:t,matchProperty:l})).transition().duration(150).ease(r).call(s.end)}))}}},a7sT:function(e,t,n){"use strict";n.r(t),n.d(t,"createMeasurement",(function(){return c})),n.d(t,"TextItemMetrics",(function(){return o}));var r=n("RTfP"),a=n("3y/1");function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return e.append("span").styles(t).style("white-space","nowrap").style("line-height",n).style("visibility","hidden").style("position","absolute").style("top","0px").style("left","0px")}function c(e){var t=e.style,n=e.container,r=e.lineHeight;return function(e){var c=i(n,t,r),o=Object(a.measureTextHtml)(e,c.node());return c.remove(),o}}function o(){var e,t=function(){if(e){var t=i(e,o),r=Object(a.measureTextHtmlHeight)(n,t.node());return t.remove(),{width:c,label:{width:c-l,height:r+r/4}}}},n=[],c=300,o=Object(r.chartOptions)().style.legend,l=0,s={texts:function(e){return arguments.length?(n=e.slice(0),t):n},width:function(e){return arguments.length?(c=e,t):c},style:function(e){return arguments.length?(o=e,t):o},reservedSize:function(e){return arguments.length?(l=e,t):l},parentContainer:function(n){return arguments.length?(e=n,t):e}};return Object.assign(t,s),t}},dayV:function(e,t,n){"use strict";n.r(t),n.d(t,"Heatmap",(function(){return o})),n.d(t,"HeatmapEntryEvents",(function(){return l}));var r=n("LvDl"),a=n.n(r),i=n("/TIM"),c=n("3y/1");function o(e){var t=e.data,n=void 0===t?[]:t,r=e.coldText,o=void 0===r?"":r,s=e.maxValue,d=void 0===s?"":s,u=e.instance,g=e.hotText,f=void 0===g?"":g,h=e.opacity,p=void 0===h?{active:1,disabled:.2}:h,v=e.showLegendValues,y=void 0===v||v,b=e.style,m=void 0===b?{}:b,O=e.layout,x=e.target,j=e.title,L=void 0===j?"":j,w=e.width,I=void 0===w?300:w,_=e.pointsMode,H=void 0!==_&&_;return function(e){var t=a.a.get(m,"color.label.customColor")||a.a.get(m,"color.label.active"),r=a.a.omit(O,["entry"]);e.each((function(){var e=Object(i.select)(this);e.styles(Object(c.kebabizeObject)(r)),e.style("width","".concat(I,"px"));var s=e.append("div").attr("class","igc-heatmap-label igc-legend-label").styles(m).style("color",t);s.append("div").attr("class","igc-heatmap-label-text").text(L);var g=y?s:e,h=e.append("div").attr("class","igc-heatmap-entries").selectAll(".igc-heatmap-item").data(n),v=h.enter().append("div").attr("class","igc-heatmap-item");v.style("background-color",(function(e){return e.color})),h=h.merge(v);var b=e.append("div").attr("class","igc-heatmap-values").styles({height:a.a.get(m,"font-size"),color:t});n.push({text:d});var O=b.selectAll(".igc-heatmap-value").data(n),j=O.enter().append("div").attr("class","igc-heatmap-value");j.text((function(e){return e.text}));var w=j.nodes().map((function(e){return e.getBoundingClientRect().width/2}));j.styles((function(e,t){return t===n.length-1?{right:0}:0===t?{left:0}:{left:"".concat(I*t/(n.length-1)-w[t],"px")}})),j.styles(m),O=O.merge(j),g.append("div").attr("class","igc-heatmap-limit __cold").styles(m).text(o),g.append("div").attr("class","igc-heatmap-limit __hot").styles(m).text(f),l({g:e,entry:h,instance:u,opacity:p,target:x,pointsMode:H});var _=e.selectAll(".igc-heatmap-value"),E=[];_.each((function(){var e=Object(i.select)(this).node().getBoundingClientRect();E.push(e)}));for(var T=E.length,P=E[0].right,M=E[T-1].left,S=!1,k=1;!S&&k<T;){var N=P;S=!0;for(var D=k;D<T-1;D+=k){if(E[D].left<N||E[D].right>M){k++,S=!1;break}N=E[D].right}}_.classed("__hidden",(function(e,t){return 0!==t&&t!==T-1&&t%k!=0}))}))}}function l(e){var t=e.g,n=e.entry,r=e.instance,a=e.opacity,c=e.target,o=e.pointsMode,l=a.active,s=a.disabled,d=r.interaction,u=n.size(),g=!0,f=[];n.on("click",(function(e,t){var n=t.groupId,a=r.map,i=r.canvasLayer;(g?(g=!1,f.push(n)):1===f.length&&f[0]===n?(g=!0,f=[]):f.includes(n)?f.splice(f.indexOf(n),1):(f.push(n),f.length===u&&(g=!0,f=[])),o)?i?i.enableGroups(f):c.selectAll(".leaflet-interactive").classed("__disabled",(function(){var e=this,t=!g;return f.forEach((function(n){(g||e.classList.contains("group_".concat(n)))&&(t=!1)})),this.classList.contains("group_-1")&&(t=!1),t})):a.eachLayer((function(e){if(e.feature&&-1!==e.feature.groupId&&"border"!==e.feature.type){var t=f.includes(e.feature.groupId)||g,n=t?l:s;e.feature.disabled=!t,e.setStyle({fillOpacity:n})}}));c.selectAll(".igc-heatmap-item").classed("__disabled",(function(e,t){return!(g||f.includes(t))})),d("heatmap.legend","click")})).on("mouseover",(function(e,n){if(g){var a=n.groupId,c=r.map,u=r.canvasLayer;if(o)if(u)u.enableGroups([a]);else Object(i.select)(t.node().parentNode).selectAll(".leaflet-interactive").classed("__disabled",(function(){return!(this.classList.contains("group_".concat(a))||this.classList.contains("group_-1"))}));else c.eachLayer((function(e){if(e.feature&&-1!==e.feature.groupId&&"border"!==e.feature.type){var t=a===e.feature.groupId?l:s;e.setStyle({fillOpacity:t})}}))}d("heatmap.legend","hover")})).on("mouseout",(function(){if(g){var e=r.map,n=r.canvasLayer;if(o)if(n)n.enableGroups([]);else Object(i.select)(t.node().parentNode).selectAll(".leaflet-interactive").classed("__disabled",!1);else e.eachLayer((function(e){e.feature&&-1!==e.feature.groupId&&"border"!==e.feature.type&&e.setStyle({fillOpacity:l})}))}}))}},hKMu:function(e,t,n){"use strict";n.r(t),n.d(t,"LEGEND_POSITION",(function(){return f})),n.d(t,"Layout",(function(){return h})),n.d(t,"Legend",(function(){return L}));var r=n("LvDl"),a=n.n(r),i=n("SC+/"),c=n("vBe5"),o=n("/TIM"),l=n("Ozxj"),s=n("3y/1");function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}function g(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}var f={TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},h={COLUMN:"column",ROW:"row"},p="top",v="middle",y="bottom";function b(e){for(var t=e.lineHeight,n=e.availableHeight,r=e.metricNodes,a=r.length,i=r.map((function(e){return Math.max(t,e.childNodes.length*t)})),c=Array(a).fill(0),o=0,l=[],s=l.length;n>0&&s<a&&n>=t;){var d=i[o]-c[o];l[o]||(d>=t?(c[o]+=t,n-=t):(l[o]=!0,s=l.filter((function(e){return!0===e})).length)),o=++o%a}return c}function m(e,t){var n=0;return t.forEach((function(t){n+=parseInt(a.a.get(e,t,0),10)})),n}function O(e,t){var n=0;return n+=m(e,t),n=["entry","entry.icon","entry.label"].reduce((function(n,r){return n+=m(a.a.get(e,r,{}),t)}),n)}function x(e){return a.a.get(e,"active",!0)}function j(e){var t=e.metricsNode,n=e.height,r=e.lineHeight,a=Object(o.select)(t).selectAll("span").nodes(),i=n/r,c=a.slice(0,i),l=c.length-1;return{lines:c,ellipsis:l>-1&&a.length-1>l}}function L(e){var t,n,r,d,f,h=function(e){return D.height>=e.node().offsetHeight},m=function(e){return Object(c.max)(e.nodes(),(function(e){return e.offsetWidth}))},L=function(n){var i=e.container.append("div").styles({visbility:"hidden",position:"absolute",width:"5000px"}),c=i.append("span").styles(t),d=["B","X","M","W",l.ELLIPSIS].reduce((function(e,t){return c.text(t),Math.max(e,c.node().offsetWidth)}),0);c.remove();var p=Math.floor(T-k),v=Math.max(d,p),y=n.selectAll(".igc-legend-entry"),x=y.selectAll(".igc-legend-label"),L=!1;x.style("max-width",null);var I=O(r,["margin-top","margin-bottom"]),_=a.a.once((function(){I=5,r=g(u({},r),{"margin-top":"".concat(I,"px"),"margin-bottom":"0px"}),y.styles(r),L=!0}));0===I&&_(),x.text("");var H=x.append("span").styles(t).text((function(e){return e.title})),E=m(H),P=H.nodes(),M=D.height,N=n.select(".igc-legend-alignContainer"),z=h(N),A=E<=v;if(z&&A)i.remove();else if(z||(_(),E=m(H),z=h(N)),z&&A)i.remove();else{var C=I*(w.length-1);x.style("width","".concat(v,"px"));var F=parseInt(window.getComputedStyle(x.node()).getPropertyValue("line-height"),10),V=i.selectAll(".texts").data(w).enter().append("div").styles(t);V.each((function(){l.Text.wrapText(Object(o.select)(this),v,F,!0,"title")}));var G=V.nodes(),B=b({lineHeight:F,availableHeight:M-C,metricNodes:G}),R=B.indexOf(0),W=-1!==R;if(W&&!L&&(_(),C=I*(w.length-1),W=-1!==(R=(B=b({lineHeight:F,availableHeight:M-C,metricNodes:G})).indexOf(0))),!L)B.some((function(e,t){return j({metricsNode:G[t],height:e,lineHeight:F}).ellipsis}))&&(_(),C=I*(w.length-1),W=-1!==(R=(B=b({lineHeight:F,availableHeight:M-C,metricNodes:G})).indexOf(0)));if(W){for(var K=B.slice(R,B.length).length,J=M-C-B.reduce((function(e,t){return e+t}),0)+I*K,U=K,q=F+I,X=R,Y=X+(Math.floor(J/q)-1);X<Y;X++)B[X]+=F,U--;if(J<q){var Q=Math.max(0,R-1);B[Q]-=F,0===B[Q]&&U++}var Z=N.append("div").attr("class","igc-legend-entry").styles(r);Z.append("span").attr("class","igc-legend-ico").classed("igc-legend-ico-hint",!0).styles(g(u({},Object(s.kebabizeObject)(a.a.get(S,"entry.icon"))),{"border-color":f.toString()})),Z.append("span").attr("class","igc-legend-label").styles(Object(s.kebabizeObject)(a.a.get(S,"entry.label"))).styles(t).style("width","".concat(v,"px")).text("".concat(U).concat(l.ELLIPSIS))}B.forEach((function(e,t){var n=P[t];0===e&&Object(o.select)(n.parentNode.parentNode).remove();var r=j({metricsNode:G[t],height:e,lineHeight:F});r.ellipsis&&function(e,t){var n=Object(o.select)(e),r=n.text();if(n.text("".concat(r).concat(l.ELLIPSIS)),!(e.offsetWidth<t))for(var a=r.length;a-- >0;){if(n.text("".concat(r.substr(0,a)).concat(l.ELLIPSIS)),e.offsetWidth<t)return;if(0===a)return void n.text("")}}(r.lines[r.lines.length-1],v);var a=r.lines.map((function(e){return Object(o.select)(e).text()})).join(" ");Object(o.select)(n).text(""===a?" ":a)})),i.remove()}},w=[],I={},_=1,H={},E="",T=300,P=!1,M=p,S={},k=0,N=e.interaction,D=e.runtime;function z(e){d=e,k=O(S,["marginLeft","marginRight","width"]),t=a.a.pick(I,["font-size","font-weight","font-family","font-style"]),e.classed("align-middle",P&&v===M),e.classed("align-bottom",P&&y===M),n=a.a.omit(S,["entry"]),e.styles(Object(s.kebabizeObject)(n)),e.style("text-align",T<150?"left":"center"),e.style("width","".concat(T,"px"));var c=e.select(".igc-legend-alignContainer"),l=(c=c.size()?c:e.append("div").attr("class","igc-legend-alignContainer")).selectAll(".igc-legend-entry").data(w);l.exit().remove();var u=l.enter().append("div").attr("class","igc-legend-entry").attr("tabindex","0");u.append("span").attr("class","igc-legend-ico"),u.append("span").attr("class","igc-legend-label");var g=a.a.get(I,"color.label");f=Object(i.rgb)(g.active);var h=Object(i.rgb)(g.hover),p=Object(i.rgb)(g.inactive),b=Object(i.rgb)(a.a.get(I,"color.icon.inactive"));(l=l.merge(u)).on("mouseover focus",(function(e,t){Object(o.select)(this).select(".igc-legend-label").style("color",h.toString()),x(t)&&(z.sendListeners(t.groupId,_,"highlightStart"),N("legend","hover"))})).on("mouseout blur",(function(e,t){Object(o.select)(this).select(".igc-legend-label").style("color",(function(e){return(e.active?f:p).toString()})),x(t)&&z.sendListeners(t.groupId,_,"highlightEnd")})).on("click keypress",(function(e,t){"keypress"===e.type&&13!==e.keyCode||(z.sendListeners(t.groupId,_,"legendClick"),N("legend","click"))})),l.style("max-width","".concat(T,"px")),r=Object(s.kebabizeObject)(a.a.omit(a.a.get(S,"entry"),["icon","label"])),l.styles(r);var m=e.selectAll(".igc-legend-ico").data(w);m.styles(Object(s.kebabizeObject)(a.a.get(S,"entry.icon"))),m.style("background-color",(function(e){return e.active?e.color:b.toString()}));var j=e.selectAll(".igc-legend-label").data(w);j.styles(Object(s.kebabizeObject)(a.a.get(S,"entry.label"))),j.text((function(e){return e.title})).styles(t).style("color",(function(e){return(e.active?f:p).toString()})).style("max-width","".concat(Math.max(0,T-k),"px")),P&&w.length>0&&L(e)}var A={data:function(e){return arguments.length?(w=e,z):w},style:function(e){return arguments.length?(I=e,z):I},chartId:function(e){return arguments.length?(_=e,z):_},chartType:function(e){return arguments.length?(E=e,z):E},layout:function(e){return arguments.length?(T=e.width,P=e.side,M=e.align,S=e.legend,z):z},addListener:function(e){return arguments.length?(H[e.id]||(H[e.id]=[]),H[e.id].push(e.dispatch),z):z},sendListeners:function(e,t,n){var r=H["".concat(t,"_").concat(e)];if(void 0===r?r=H[t]:H[t]&&(r=r.concat(H[t])),r&&0!==r.length)return r.forEach((function(r){a.a.has(r,"_.".concat(n))&&r.call(n,null,e,t,E)})),z},redraw:function(){d&&(d.select(".igc-legend-alignContainer").selectAll("*").remove(),d.call(z))}};return Object.assign(z,A),z}},x5YE:function(e,t,n){"use strict";n.r(t);var r=n("hKMu");n.d(t,"LEGEND_POSITION",(function(){return r.LEGEND_POSITION})),n.d(t,"Layout",(function(){return r.Layout})),n.d(t,"Legend",(function(){return r.Legend}));var a=n("dayV");n.d(t,"Heatmap",(function(){return a.Heatmap})),n.d(t,"HeatmapEntryEvents",(function(){return a.HeatmapEntryEvents}));var i=n("BpKf");n.d(t,"HeatmapVertical",(function(){return i.HeatmapVertical}));var c=n("a7sT");n.d(t,"createMeasurement",(function(){return c.createMeasurement})),n.d(t,"TextItemMetrics",(function(){return c.TextItemMetrics}));var o=n("Fi9g");n.d(t,"legendHelper",(function(){return o.legendHelper})),n.d(t,"createLegendData",(function(){return o.createLegendData})),n.d(t,"legendFiltered",(function(){return o.legendFiltered})),n.d(t,"createLegendFilter",(function(){return o.createLegendFilter})),n.d(t,"createLegendFilterOpacity",(function(){return o.createLegendFilterOpacity})),n.d(t,"createListenToLegend",(function(){return o.createListenToLegend}))}}]);