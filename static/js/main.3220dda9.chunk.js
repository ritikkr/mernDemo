(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(21),r=n.n(c),o=(n(27),n(10)),i=(n(28),n(2)),l=n(5),d=n.n(l),j=n(9),b=(n(19),n(4)),u=n(0),m=function(e){var t=function(){var t=Object(j.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/checkLog",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"});case 3:n=t.sent,console.log("Already Logged in",n.status),200===n.status?e.setIsLoggediN(!0):e.setIsLoggediN(!1),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){t()}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)("a",{className:"navbar-brand",to:"#",children:"Navbar"}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(u.jsxs)("ul",{className:"navbar-nav mr-0 mb-2 mb-lg-0 ",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(b.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(b.b,{className:"nav-link",to:"/about",children:"About"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(b.b,{className:"nav-link",to:"/contact",children:"Contact"})}),e.isLoggediN?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(b.b,{className:"nav-link",to:"/logout",children:"Logout"})})}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(b.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(b.b,{className:"nav-link",to:"/signup",children:"Registration"})})]})]})})]})})})},h=(n(36),function(){return Object(u.jsxs)("div",{className:"home-container",children:[Object(u.jsx)("p",{children:"Welcome"}),Object(u.jsx)("h1",{children:"We're the Mern Developer"})]})}),g=n(13),p=n(18),O=(n(37),function(){var e=Object(a.useState)({name:"",email:"",phone:"",work:"",password:"",cpassword:""}),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(i.e)(),r=function(e){var t=e.target.name,a=e.target.value;s(Object(p.a)(Object(p.a)({},n),{},Object(g.a)({},t,a))),console.log(n)},l=function(){var e=Object(j.a)(d.a.mark((function e(){var t,a,s,r,o,i,l,j;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.name,a=n.email,s=n.phone,r=n.work,o=n.password,i=n.cpassword,e.next=3,fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,phone:s,email:a,work:r,password:o,cpassword:i})});case 3:return l=e.sent,e.next=6,l.json();case 6:j=e.sent,422!==l.status&&j?(window.alert("Registraion Sucessfull"),console.log("Registraion Sucessfull"),c.push("/login")):(window.alert("!Invalid Registration"),console.log("!Invalid Registration"));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{class:"container register-form",children:Object(u.jsxs)("div",{class:"form",children:[Object(u.jsx)("div",{class:"note",children:Object(u.jsx)("p",{children:"Make Yourself Register with our website."})}),Object(u.jsxs)("div",{class:"form-content",children:[Object(u.jsxs)("div",{class:"row",children:[Object(u.jsxs)("div",{class:"col-md-6 mb-2",children:[Object(u.jsx)("div",{class:"form-group mb-2",children:Object(u.jsx)("input",{type:"text",class:"form-control",name:"name",placeholder:"Your Name *",defaultValue:n.name,onChange:r})}),Object(u.jsx)("div",{class:"form-group mb-2",children:Object(u.jsx)("input",{type:"text",name:"phone",class:"form-control",placeholder:"Phone Number *",defaultValue:n.phone,onChange:r})}),Object(u.jsx)("div",{class:"form-group mb-2",children:Object(u.jsx)("input",{type:"text",class:"form-control",name:"password",placeholder:"Your Password *",defaultValue:n.password,onChange:r})})]}),Object(u.jsxs)("div",{class:"col-md-6 mb-2",children:[Object(u.jsx)("div",{class:"form-group mb-2",children:Object(u.jsx)("input",{type:"text",name:"email",class:"form-control",placeholder:"Your Email *",defaultValue:n.email,onChange:r})}),Object(u.jsx)("div",{class:"form-group mb-2",children:Object(u.jsx)("input",{type:"text",name:"work",class:"form-control",placeholder:"Your Work *",defaultValue:n.work,onChange:r})}),Object(u.jsx)("div",{class:"form-group mb-2",children:Object(u.jsx)("input",{type:"text",class:"form-control",name:"cpassword",placeholder:"Confirm Password *",defaultValue:n.cpassword,onChange:r})})]})]}),Object(u.jsx)("button",{type:"button",class:"btnSubmit",onClick:function(){return l()},children:"Submit"})]})]})})})}),x=(n(38),function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),b=l[0],m=l[1],h=Object(i.e)(),g=function(){var t=Object(j.a)(d.a.mark((function t(n){var a,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:b})});case 4:a=t.sent,200===(c=a).status?(window.alert("Login Suceesfuuly"),e.setIsLoggediN(!0),h.push("/")):400===c.status?window.alert("wrong password"):window.alert("Invalid Credentials"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("Error",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{id:"login",children:[Object(u.jsx)("h3",{className:"text-center text-white pt-5",children:"Login form"}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{id:"login-row",className:"row justify-content-center align-items-center",children:Object(u.jsx)("div",{id:"login-column",className:"col-md-6",children:Object(u.jsx)("div",{id:"login-box",className:"col-md-12",children:Object(u.jsxs)("form",{id:"login-form",className:"form",action:"",method:"post",children:[Object(u.jsx)("h3",{className:"text-center text-info",children:"Login"}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"username",className:"text-info",children:"Email:"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",name:"email",id:"email",onChange:function(e){return c(e.target.value)},className:"form-control"})]}),Object(u.jsxs)("div",{className:"form-group mb-5",children:[Object(u.jsx)("label",{htmlFor:"password",className:"text-info",children:"Password:"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",name:"password",id:"password",onChange:function(e){return m(e.target.value)},className:"form-control"})]}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{type:"submit",name:"submit",className:"btn btn-info btn-md",value:"submit",onClick:function(e){return g(e)}})}),Object(u.jsx)("div",{id:"register-link",className:"text-right",children:Object(u.jsx)("a",{href:"/signup",className:"text-info",children:"Register here"})})]})})})})})]})})}),f=function(){return Object(a.useEffect)((function(){console.log()}),[]),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Contact"})})},v=(n(39),function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),s=n[0],c=n[1],r=Object(i.e)(),l=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/about",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),console.log(n),console.log(t.status),401===t.status&&r.push("/login"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("Error: ",e.t0),r.push("/login");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){l()}),[e.isLoggediN]),Object(u.jsx)("div",{className:"about-container",children:Object(u.jsxs)("div",{className:"card",style:{width:"18rem",backgroundColor:"#0093E9",backgroundImage:"linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"},children:[Object(u.jsx)("img",{src:"data:image/png;base64,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",className:"card-img-top",alt:"..."}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("p",{className:"card-text",style:{borderBottom:"1px dashed gray"},children:s.name}),Object(u.jsx)("p",{className:"card-text",style:{borderBottom:"1px dashed gray"},children:s.email}),Object(u.jsx)("p",{className:"card-text",style:{borderBottom:"1px dashed gray"},children:s.phone}),Object(u.jsx)("p",{className:"card-text",style:{borderBottom:"1px dashed gray"},children:s.work})]})]})})}),w=(n(40),function(e){var t=Object(i.e)(),n=function(){var n=Object(j.a)(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/logout",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:200===n.sent.status&&(console.log("Im here"),e.setIsLoggediN(!1),t.push("/login")),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Error in logout",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){!0===e.isLoggediN&&n()}),[e.isLoggediN]),Object(u.jsx)("div",{})});var N=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{isLoggediN:n,setIsLoggediN:s}),Object(u.jsx)(i.a,{exact:!0,path:"/",children:Object(u.jsx)(h,{})}),Object(u.jsx)(i.a,{path:"/about",children:Object(u.jsx)(v,{isLoggediN:n})}),Object(u.jsx)(i.a,{path:"/contact",children:Object(u.jsx)(f,{})}),Object(u.jsx)(i.a,{path:"/login",children:Object(u.jsx)(x,{setIsLoggediN:s})}),Object(u.jsx)(i.a,{path:"/signup",children:Object(u.jsx)(O,{})}),Object(u.jsx)(i.a,{path:"/logout",children:Object(u.jsx)(w,{setIsLoggediN:s,isLoggediN:n})})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(b.a,{children:Object(u.jsx)(N,{})})}),document.getElementById("root")),A()}},[[41,1,2]]]);
//# sourceMappingURL=main.3220dda9.chunk.js.map