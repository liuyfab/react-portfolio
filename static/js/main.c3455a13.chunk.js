(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c.n(r),n=c(6),i=c.n(n),a=c(2),l=c(0),o=function(e){console.log("Nav props",e);return Object(l.jsx)("ul",{className:"nav-list",children:["About","Projects","Contact","Resume"].map((function(t){return Object(l.jsx)("li",{className:"list-item",children:Object(l.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.setCurrentPage(t)},className:e.currentPage===t?"navActive":"nav-link",children:Object(l.jsx)("h2",{children:t})})},t)}))})};var j=function(){return Object(l.jsx)("article",{className:"flexbox-container footer",children:Object(l.jsx)("div",{children:Object(l.jsxs)("ul",{className:"horizontal-list",children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("a",{href:"https://github.com/liuyfab",children:"GitHub"})," "]}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in//yongfeng-liu-37b9a918/",children:"LinkedIn"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://liuyfab.github.io/portfolio/",children:"Portfolio"})})]})})})},h=c.p+"static/media/Yongfeng.f4f6ec90.jpg";var d=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{className:"section-header",children:"About Me"}),Object(l.jsx)("img",{src:h,alt:"Yongfeng Liu"}),Object(l.jsx)("p",{children:"I majored in Education and have been working at UT as an excellent Foreign Language Instructor for more than 7 years. My background in Education have provided me with a unique perspectives on how end-users interact with websites and software platforms. Earned a certificate in Full Stack Web Development from the University Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, communication and building projects from ideation to execution.\xa0"})]})},b=[{name:"Run Buddy",liveURL:"https://liuyfab.github.io/run-buddy/",ghURL:"https://github.com/liuyfab/run-buddy",tech:"HTML/CSS",style:"run-buddy"},{name:"Robot Gladiators",liveURL:"https://liuyfab.github.io/robot-gladiators/",ghURL:"https://github.com/liuyfab/robot-gladiators",tech:"JavaScript",style:"robot-gladiators"},{name:"event survey",liveURL:"https://blooming-wildwood-16551.herokuapp.com/",ghURL:"https://github.com/liuyfab/Project2-EventSurvey",tech:"Node.js/Express/Sequelize/Handlebars",style:"fo-char-mgr"},{name:"weather gifinder",liveURL:"https://kanellakise.github.io/group1-groupProject1/",ghURL:"https://github.com/kanellakise/group1-groupProject1",tech:"Html/CSS/API",style:"APP"}],u=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{className:"section-header",children:"Projects"}),Object(l.jsx)("div",{className:"project-wrapper",children:b.map((function(e){return Object(l.jsxs)("div",{className:"".concat(e.style," project-item"),children:[Object(l.jsxs)("div",{className:"project-header",children:[Object(l.jsx)("a",{href:e.liveURL,target:"_blank",rel:"noopener noreferrer",className:"project-title",children:e.name}),Object(l.jsx)("a",{href:e.ghURL,target:"_blank",rel:"noopener noreferrer",className:"project-github",children:"GitHub"})]}),Object(l.jsx)("p",{className:"project-tech",children:e.tech})]},e.name)}))})]})},m=c(3),x=c(5);var O=function(e){e.preventDefault()};var p=function(){var e=Object(r.useState)({name:"",email:"",message:""}),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(r.useState)(""),i=Object(a.a)(n,2),o=i[0],j=i[1],h=c.name,d=c.email,b=c.message,u=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));o||(s(Object(x.a)(Object(x.a)({},c),{},Object(m.a)({},e.target.name,e.target.value))),console.log("Handle Form",c))};return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{className:"section-header",children:"Contact Me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:O,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:h,onBlur:u})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:d,onBlur:u})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"10",defaultValue:b,onBlur:u})]}),o&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:o})}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})]})};c.p;var g=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{href:"#",target:"_blank",children:"Link to my resume "}),Object(l.jsx)("hr",{}),Object(l.jsxs)("ul",{children:["Skills Achieved:",Object(l.jsx)("h3",{className:"list-header",children:"Front-end skills"}),Object(l.jsxs)("ul",{className:"prof-list",children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"CSS"}),Object(l.jsx)("li",{children:"JavaScript"}),Object(l.jsx)("li",{children:"jQuery"}),Object(l.jsx)("li",{children:"responsive design"}),Object(l.jsx)("li",{children:"React"}),Object(l.jsx)("li",{children:"Bootstrap"})]}),Object(l.jsx)("h3",{className:"list-header",children:"Back-end skills"}),Object(l.jsxs)("ul",{className:"prof-list",children:[Object(l.jsx)("li",{children:"APIs"}),Object(l.jsx)("li",{children:"Node"}),Object(l.jsx)("li",{children:"Express"}),Object(l.jsx)("li",{children:"MySQL, Sequelize"}),Object(l.jsx)("li",{children:"MongoDB, Mongoose"}),Object(l.jsx)("li",{children:"REST"})]})]})]})},f=function(){var e=Object(r.useState)("About"),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{children:"Yongfeng Liu"}),Object(l.jsx)(o,{currentPage:c,setCurrentPage:s})]}),Object(l.jsx)("main",{className:"content-wrapper",children:function(){switch(console.log("".concat(c," is clicked ")),c){case"Projects":return Object(l.jsx)(u,{});case"Contact":return Object(l.jsx)(p,{});case"Resume":return Object(l.jsx)(g,{});default:return Object(l.jsx)(d,{})}}()}),Object(l.jsx)(j,{})]})},v=function(){return Object(l.jsx)(f,{})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.c3455a13.chunk.js.map