(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{225:function(e,a,t){"use strict";t.r(a),t.d(a,"aboutPropTypes",(function(){return g})),t.d(a,"imageListPropTypes",(function(){return q})),t.d(a,"query",(function(){return E})),t.d(a,"iconsNameMap",(function(){return y}));t(46),t(86),t(116);var n=t(1),i=t.n(n),r=t(45),s=t.n(r),o=t(114),u=t.n(o),l=t(222),c=t(223),m=t(10),p=t.n(m),d=t(270),h=t.n(d);function f(e,a){e.prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a}var g={data:s.a.shape({profilePhoto:s.a.shape({childImageSharp:s.a.shape({fluid:s.a.object.isRequired}).isRequired}).isRequired,flagIt:s.a.shape({childImageSharp:s.a.shape({fixed:s.a.object.isRequired})}),flagEn:s.a.shape({childImageSharp:s.a.shape({fixed:s.a.object.isRequired})}),skillIcons:s.a.object.isRequired,toolIcons:s.a.object.isRequired})},b=function(e){function a(){return e.apply(this,arguments)||this}return f(a,e),a.prototype.render=function(){var e=this.props.data,a=e.profilePhoto,t=e.flagIt,n=e.skillIcons,r=e.toolIcons;return i.a.createElement(l.a,null,i.a.createElement(c.a,{title:"About",description:"A brief summary of this blog",path:"about"}),i.a.createElement("div",{className:h.a.container},i.a.createElement("div",{className:h.a.photo},i.a.createElement(u.a,{fluid:a.childImageSharp.fluid})),i.a.createElement("div",{className:h.a.content},i.a.createElement("h1",null,"Hi, I'm Luigi!"),i.a.createElement("h2",null,"Software Developer"),i.a.createElement("p",null,"Per la versione italiana clicca qui"),i.a.createElement("a",{href:p.a.resolvePageUrl("../","it","about")},i.a.createElement(u.a,{fixed:t.childImageSharp.fixed,style:{display:"block",margin:"auto"}})),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus venenatis arcu, cursus pretium enim lacinia nec. Duis viverra sagittis neque. Fusce non luctus urna. Vivamus suscipit metus ac posuere egestas. Nunc a pulvinar purus. Vivamus nisi mi, fringilla quis lacus et, sagittis mollis massa. Cras tempus massa quis lobortis laoreet. Pellentesque metus odio, sagittis nec venenatis non, maximus congue eros. Suspendisse pellentesque purus sit amet ante commodo, et molestie mauris aliquet. Proin non nibh libero. Fusce at nulla euismod, condimentum augue quis, convallis justo."),i.a.createElement("br",null),i.a.createElement("h2",null,"Skills"),i.a.createElement(v,{edges:n.edges}),i.a.createElement("h2",null,"Tools"),i.a.createElement(v,{edges:r.edges}))))},a}(i.a.Component),q={edges:s.a.arrayOf(s.a.shape({node:s.a.shape({name:s.a.string.isRequired,childImageSharp:s.a.shape({fixed:s.a.object.isRequired}).isRequired}).isRequired})).isRequired},v=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).render=function(){return i.a.createElement("div",{className:h.a.iconsContainer},a.props.edges.sort((function(e,a){return e.node.name.toLowerCase()>a.node.name.toLowerCase()?1:-1})).map((function(e){var a=e.node,t=a.name,n=a.childImageSharp;return i.a.createElement("div",{className:h.a.iconWrapper,key:t},i.a.createElement(u.a,{fixed:n.fixed,alt:t+" logo",title:t}),i.a.createElement("label",null,y[t]?y[t]:p.a.capitalize(t)))})))},a}return f(a,e),a}(i.a.Component),E="3573639707",y={css:"CSS",html:"HTML",jquery:"JQuery",nodejs:"Node.js",vuejs:"Vue.js",gruntjs:"Grunt.js"};a.default=b}}]);
//# sourceMappingURL=component---src-pages-about-index-js-d76ab09bec9dd8874f12.js.map