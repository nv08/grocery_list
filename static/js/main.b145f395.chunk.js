(this.webpackJsonpgrocery=this.webpackJsonpgrocery||[]).push([[0],{23:function(t,e,n){},25:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),r=n(7),j=n.n(r),u=(n(23),n(4)),a=n(11),s=n(3),o=n(1);function d(t){var e=t.onadd,n=Object(c.useState)(""),i=Object(s.a)(n,2),r=i[0],j=i[1],u=Object(c.useState)(""),a=Object(s.a)(u,2),d=a[0],b=a[1],l=Object(c.useState)(""),O=Object(s.a)(l,2),h=O[0],x=O[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"text",value:r,onChange:function(t){j(t.target.value)}}),Object(o.jsx)("input",{type:"text",value:d,onChange:function(t){b(t.target.value)}}),Object(o.jsx)("input",{type:"text",value:h,onChange:function(t){x(t.target.value)}}),Object(o.jsx)("button",{type:"submit",onClick:function(){e(r,d,h),j(""),b(""),x("")},children:"Add Item"})]})}n(25);var b=n(8),l=n(15),O=n.n(l),h=n(17),x=n.n(h);function f(t){var e=t.data,n=t.onDelete,i=t.onEdit,r=Object(c.useState)(!1),j=Object(s.a)(r,2),a=j[0],d=j[1],l=Object(c.useState)({item:e.item,units:e.units,unitPrice:e.unitPrice}),h=Object(s.a)(l,2),f=h[0],g=h[1],v=function(t,e){var n=parseInt(t.target.innerText)?parseInt(t.target.innerText):t.target.innerText;g(Object(u.a)(Object(u.a)({},f),{},Object(b.a)({},e,n)))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{contentEditable:a,onBlur:function(t){return v(t,"item")},children:e.item}),Object(o.jsx)("td",{contentEditable:a,onBlur:function(t){return v(t,"units")},children:e.units}),Object(o.jsx)("td",{contentEditable:a,onBlur:function(t){return v(t,"unitPrice")},children:e.unitPrice}),Object(o.jsxs)("td",{children:["\u20b9",e.units*e.unitPrice]}),a?Object(o.jsx)("td",{children:Object(o.jsx)("button",{onClick:function(){d(!1),i(e.id,f)},children:"Save"})}):Object(o.jsxs)("td",{children:[Object(o.jsx)("span",{children:Object(o.jsx)(O.a,{onClick:function(){return n(e.id)}})}),Object(o.jsx)("span",{children:Object(o.jsx)(x.a,{onClick:function(){return d(!0)}})})]})]})})}function g(t){var e=t.groceries;return Object(o.jsx)("div",{children:e.length>0?Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Item Name"}),Object(o.jsx)("th",{children:"Units"}),Object(o.jsx)("th",{children:"Price Per Unit"}),Object(o.jsx)("th",{children:"Total Price"}),Object(o.jsx)("th",{children:"Action"})]})}),Object(o.jsx)("tbody",{children:e.map((function(e,n){return Object(o.jsx)(f,{data:e,onEdit:t.onEdit,onDelete:t.onDelete})}))})]}):"No data"})}function v(t){var e=t.groceries.reduce((function(t,e){return t+=e.units*e.unitPrice}),0);return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("span",{children:[" Grand Total: \u20b9 ",e]})})}var p=function(){var t=Object(c.useState)([{id:1,item:"Bread",units:12,unitPrice:10},{id:2,item:"Milk",units:5,unitPrice:30}]),e=Object(s.a)(t,2),n=e[0],i=e[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h2",{children:" Grocery List"}),Object(o.jsx)(d,{onadd:function(t,e,c){return function(t,e,c){var r={id:Math.floor(1e6*Math.random()),item:t,units:e,unitPrice:c};i([].concat(Object(a.a)(n),[r]))}(t,e,c)}}),Object(o.jsx)(g,{groceries:n,onDelete:function(t){return function(t){var e=n.filter((function(e){return e.id!==Number(t)}));i(e)}(t)},onEdit:function(t,e){return function(t,e){var c=n.findIndex((function(e){return e.id===t}));n[c]=Object(u.a)({id:t},e),i(Object(a.a)(n))}(t,e)}}),Object(o.jsx)(v,{groceries:n})]})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,j=e.getTTFB;n(t),c(t),i(t),r(t),j(t)}))};j.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),m()}},[[32,1,2]]]);
//# sourceMappingURL=main.b145f395.chunk.js.map