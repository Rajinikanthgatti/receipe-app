(this["webpackJsonpreceipe-app"]=this["webpackJsonpreceipe-app"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(5),s=c.n(r),a=(c(12),c(13),c(0)),j=c(4),p=c.n(j),u=c(6),l=c(2),o=function(e){var t=e.title,c=e.img,n=e.ingredientLines,i=(e.resp,e.key);return Object(a.jsxs)("div",{className:"recipe-item",children:[Object(a.jsx)("h1",{children:t}),Object(a.jsxs)("div",{className:"ingredients-menu",children:[Object(a.jsx)("h4",{className:"title",children:" Ingredients"}),Object(a.jsx)("ul",{children:n.map((function(e){return Object(a.jsx)("li",{children:e},i)}))})]}),Object(a.jsx)("img",{src:c,alt:"Receie Img"})]})},b=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)([]),s=Object(l.a)(r,2),j=s[0],b=s[1],d=Object(n.useState)("ice cream"),h=Object(l.a)(d,2),m=h[0],O=h[1];return Object(n.useEffect)(Object(u.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/api/recipes/v2?type=public&q=".concat(m,"&app_id=").concat("37a6e374","&app_key=").concat("32848d0989d60b71397f17ef72e75f31"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,b(c.hits),console.log(c.hits);case 8:case"end":return e.stop()}}),e)}))),[m]),Object(a.jsx)("div",{className:"search-field",children:Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{type:"text",className:"search-box",value:c,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("button",{onClick:function(e){O(c),e.preventDefault()},className:"search-button",children:"Search"}),Object(a.jsx)("div",{className:"receipe-menu-con",children:j.map((function(e){return Object(a.jsx)(o,{title:e.recipe.label,img:e.recipe.image,ingredientLines:e.recipe.ingredientLines,resp:e},e.recipe.uri)}))})]})})};var d=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Receipe Search"}),Object(a.jsx)(b,{})]})};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3ea9aaed.chunk.js.map