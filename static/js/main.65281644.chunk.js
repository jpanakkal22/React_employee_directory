(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),c=n.n(l),s=n(12),o=n(13),u=n(16),i=n(15),m=n(14),d=n.n(m),f=function(){return d.a.get("https://randomuser.me/api/?results=200&nat=us")};n(39);var p=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};n(40);var b=function(e){return r.a.createElement("h1",{className:"title"},e.children)},E=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={result:[],filteredResults:[]},e.handleClick=function(t){if("both"===t)return e.setState({filteredResults:e.state.result});e.setState((function(e){return{filteredResults:e.filteredResults.filter((function(e){return e.gender===t}))}}))},e.sortEvent=function(t){"ascending"===t?e.setState((function(e){return{filteredResults:e.filteredResults.sort((function(e,t){var n=e.name.last.toLowerCase(),a=t.name.last.toLowerCase();return n<a?-1:n>a?1:0}))}})):e.setState((function(e){return{filteredResults:e.filteredResults.sort((function(e,t){var n=e.name.last.toLowerCase(),a=t.name.last.toLowerCase();return n>a?-1:n<a?1:0}))}}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){return e.setState({result:t.data.results,filteredResults:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return console.log(this.state.filteredResults[0]),r.a.createElement(p,null,r.a.createElement(b,null,"Employee Directory"),r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.handleClick("male")}},"Male"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.handleClick("female")}},"Female"),r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return e.handleClick("both")}},"Both")),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.sortEvent("ascending")}},"A-Z"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.sortEvent("desceding")}},"Z-A")),r.a.createElement("table",{class:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Gender"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"Phone"))),r.a.createElement("tbody",null,this.state.filteredResults.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:e.picture.large,alt:e.name.first})),r.a.createElement("td",null,"".concat(e.name.first," ").concat(e.name.last)),r.a.createElement("td",null,e.gender),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.phone))})))))}}]),n}(a.Component);c.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.65281644.chunk.js.map