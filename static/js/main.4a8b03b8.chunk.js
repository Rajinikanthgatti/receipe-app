(this["webpackJsonpreceipe-app"]=this["webpackJsonpreceipe-app"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(5),r=c.n(i),a=(c(12),c(13),c(0)),j=c(4),l=c.n(j),u=c(6),d=c(2),p=function(e){var t=e.title,c=e.img,n=e.ingredientLines,s=(e.resp,e.key);return Object(a.jsxs)("div",{className:"recipe-item",children:[Object(a.jsx)("h1",{children:t}),Object(a.jsxs)("div",{className:"ingredients-menu",children:[Object(a.jsx)("h4",{className:"title",children:" Ingredients"}),Object(a.jsx)("ul",{children:n.map((function(e){return Object(a.jsx)("li",{children:e},s)}))})]}),Object(a.jsx)("img",{src:c,alt:"Receie Img"})]})},o=function(){var e=Object(n.useState)("ice cream"),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([]),r=Object(d.a)(i,2),j=r[0],o=r[1],b=Object(n.useState)("ice cream"),h=Object(d.a)(b,2),m=h[0],O=h[1],x=Object(n.useState)("true"),f=Object(d.a)(x,2),v=f[0],g=f[1];return Object(n.useEffect)(Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g("true"),e.next=3,fetch("https://api.edamam.com/api/recipes/v2?type=public&q=".concat(m,"&app_id=").concat("37a6e374","&app_key=").concat("32848d0989d60b71397f17ef72e75f31"));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,o(c.hits),console.log(c.hits),g("false");case 10:case"end":return e.stop()}}),e)}))),[m]),Object(a.jsxs)("div",{className:"true"===v?"loader-div search-field ":"search-field",children:["true"===v?Object(a.jsx)("div",{className:"loader"}):"",Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{type:"text",className:"search-box",value:c,onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("button",{onClick:function(e){O(c),e.preventDefault()},className:"search-button",children:"Search"}),Object(a.jsx)("div",{className:"receipe-menu-con",children:j.length<1&&"true"!==v?Object(a.jsx)("div",{className:"no-items",children:"No Items to display"}):j.map((function(e){return Object(a.jsx)(p,{title:e.recipe.label,img:e.recipe.image,ingredientLines:e.recipe.ingredientLines,resp:e},e.recipe.uri)}))})]})]})};var b=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Receipe Search"}),Object(a.jsx)(o,{})]})};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4a8b03b8.chunk.js.map