import{_ as g,o as t,c as s,a as e,n as _,r as y,w as p,F as u,b as v,t as l,d as w,e as x,f as k,g as $,h as b}from"./index.c041d088.js";const M={mounted(){setInterval(this.animName,2e3)},methods:{animName(){let n=this.$refs.name.children,c=Math.floor(Math.random()*n.length);const d="active";n[c].classList.add(d),setTimeout(()=>{n[c].classList.remove(d)},400)},nextColorScheme(){this.$store.dispatch("nextColorScheme")}},computed:{color_scheme(){return this.$store.state.color_scheme.current}}},T=e("span",{class:"icon-dark-theme"},null,-1),j=e("span",{class:"icon-light-theme"},null,-1),F=[T,j],A={class:"intro-container"},P=e("p",{class:"greeting"},"Hola!, soy",-1),J={class:"name",ref:"name"},z=e("span",null,"g",-1),N=e("span",null,"u",-1),H=e("span",null,"s",-1),I=e("span",null,"s",-1),L=e("span",null,"t",-1),R=e("span",null,"a",-1),B=e("span",null,"v",-1),D=e("span",null,"o",-1),V=[z,N,H,I,L,R,B,D],q=e("p",{class:"service"},"Desarrollador web",-1);function G(n,c,d,f,m,r){return t(),s("div",{id:"Home",class:_(`intro-comp ${r.color_scheme}`)},[e("button",{class:"switch-scheme",onClick:c[0]||(c[0]=(...i)=>r.nextColorScheme&&r.nextColorScheme(...i))},F),e("div",A,[P,e("h1",J,V,512),q])],2)}var E=g(M,[["render",G]]);const K={data(){return{frontend_skills_c1:{React:"avanzado",Vue:"intermedio",JS:"avanzado"},frontend_skills_c2:{HTML:"avanzado",CSS:"avanzado",SASS:"intermedio"},backend_skills_c1:{NodeJS:"intermedio",Django:"avanzado"}}},computed:{color_scheme(){return this.$store.state.color_scheme.current}}},O={class:"about-me-container",initial:{opacity:0},visible:{opacity:1},enter:{opacity:1}},Q=w('<h2>~ Acerca de m\xED</h2><h3>Gustavo Renter\xEDa</h3><p class="cite">Programador autodidacta, tengo mas de 2 a\xF1os de experiencia trabajando en desarrollo web Front-end y Back-end.</p><div class="contact"><div class="contact-container"> contactame ~ <a href="https://www.linkedin.com/in/gustavo-renter%C3%ADa-317577238/" class="icon-linkedin"></a><a href="https://api.whatsapp.com/send?phone=523321469421&amp;text=hola,%20qu\xE9%20tal?" target="_blank" rel="noopener noreferrer" class="icon-whatsapp"></a></div></div>',4),U=[Q],W={class:"about-me-skills"},X={class:"front-end-skills",initial:{opacity:0,x:40},visible:{opacity:1,x:0},enter:{opacity:1}},Y=e("h3",null,"Habilidades Front-end",-1),Z={class:"col"},ee=e("span",{class:"icon-check-circle"},"\xA0",-1),te={key:0,class:"icon-caret-up"},se={key:1,class:"icon-caret-right"},oe={class:"col"},ae=e("span",{class:"icon-check-circle"},"\xA0",-1),ne={key:0,class:"icon-caret-up"},re={key:1,class:"icon-caret-right"},ie={class:"back-end-skills",initial:{opacity:0,x:40},visible:{opacity:1,x:0},enter:{opacity:1}},ce=e("h3",null,"Habilidades Back-end",-1),le=e("span",{class:"icon-check-circle"},"\xA0",-1),_e={key:0,class:"icon-caret-up"},de={key:1,class:"icon-caret-right"};function me(n,c,d,f,m,r){const i=y("motion");return t(),s("div",{id:"About-me",class:_(`about-me-comp ${r.color_scheme}`)},[p((t(),s("div",O,U)),[[i]]),e("div",W,[p((t(),s("div",X,[Y,e("div",Z,[(t(!0),s(u,null,v(m.frontend_skills_c1,(o,a)=>(t(),s("div",{class:"skill",key:a},[ee,o=="avanzado"?(t(),s("span",te)):(t(),s("span",se)),e("h4",null,l(a),1),e("p",null,"- "+l(o),1)]))),128))]),e("div",oe,[(t(!0),s(u,null,v(m.frontend_skills_c2,(o,a)=>(t(),s("div",{class:"skill",key:a},[ae,o=="avanzado"?(t(),s("span",ne)):(t(),s("span",re)),e("h4",null,l(a),1),e("p",null,"- "+l(o),1)]))),128))])])),[[i]]),p((t(),s("div",ie,[ce,(t(!0),s(u,null,v(m.backend_skills_c1,(o,a)=>(t(),s("div",{class:"skill",key:a},[le,o=="avanzado"?(t(),s("span",_e)):(t(),s("span",de)),e("h4",null,l(a),1),e("p",null,"- "+l(o),1)]))),128))])),[[i]])])],2)}var he=g(K,[["render",me]]),pe="/mi-portafolio/assets/sunnyside.03f28f18.png",ue="/mi-portafolio/assets/ecommerce-product.e046bf29.png",ve="/mi-portafolio/assets/mi-neovim.0f0ef3a5.png",ge="/mi-portafolio/assets/advice-generator.d24eaaf5.png",fe="/mi-portafolio/assets/expenses-chart.41e669c5.png",$e="/mi-portafolio/assets/time-tracking-dashboard.5c5fba1f.png",be="/mi-portafolio/assets/frontend-tareas.0b1d739d.png",ke="/mi-portafolio/assets/backend-tareas.0a3edaa9.png",ye="/mi-portafolio/assets/sunnyside.fdbace1f.gif",Se="/mi-portafolio/assets/ecommerce-product.dce7d0ee.gif",xe="/mi-portafolio/assets/mi-neovim.2a99bf94.gif",Ce="/mi-portafolio/assets/advice-generator.acd23b78.gif",we=[{name:"P\xE1gina principal 'Sunnyside'",img:pe,gif:ye,icon_theme:"dark",live_url:"https://sunnyside-agency-landing-page-main-fm.vercel.app/",code_url:"https://github.com/guss-renteria/sunnyside-agency-landing-page-main-FM",tags:["HTML","SCSS","CSS","JS"]},{name:"Producto de tienda en l\xEDnea",img:ue,gif:Se,icon_theme:"dark",live_url:"https://ecommerce-product-page-main-fm.vercel.app/",code_url:"https://github.com/guss-renteria/ecommerce-product-page-main-FM",tags:["React","Redux","SCSS","JS"]},{name:"Mi neovim",img:ve,gif:xe,icon_theme:"light",code_url:"https://github.com/guss-renteria/mi-neovim",tags:["Lua","Vim"]},{name:"Generador de consejos",img:ge,gif:Ce,icon_theme:"light",live_url:"https://advice-generator-app-main-fm.vercel.app/",code_url:"https://github.com/guss-renteria/advice-generator-app-main-FM",tags:["React","Axios","SCSS","JS"]},{name:"Frontend 'Tareas'",img:be,icon_theme:"dark",live_url:"https://tareas-react-frontend.vercel.app/",code_url:"https://github.com/guss-renteria/tareas-react-frontend",tags:["React","Axios","Redux","SCSS","JS"]},{name:"Backend 'Tareas'",img:ke,icon_theme:"dark",live_url:"https://tareas-nodejs-backend.herokuapp.com/",code_url:"https://github.com/guss-renteria/tareas-nodejs-backend",tags:["Express","NodeJS","JS","Json"]},{name:"Gr\xE1fico de gastos",img:fe,icon_theme:"dark",live_url:"https://expenses-chart-component-main-fm.vercel.app/",code_url:"https://github.com/guss-renteria/expenses-chart-component-main-FM",tags:["HTML","SCSS","CSS","JS"]},{name:"Reporte de tiempo personal",img:$e,icon_theme:"light",live_url:"https://time-tracking-dashboard-main-fm.vercel.app/",code_url:"https://github.com/guss-renteria/time-tracking-dashboard-main-FM",tags:["HTML","SCSS","CSS","JS"]}];const Me={data:()=>({projects:we,filter_by:"top4",img_hover:[]}),computed:{color_scheme(){return this.$store.state.color_scheme.current}},methods:{getProjects(){switch(this.filter_by){case"top4":return this.projects.filter((n,c)=>c<4);default:return this.projects}}}},Te=e("h2",null,"~ Proyectos",-1),je={class:"project-container"},Fe=["onMouseover","onMouseleave"],Ae=["src","alt"],Pe=["src","alt"],Je={class:"data-container"},ze={class:"text"},Ne={class:"links"},He=["href"],Ie=["href"],Le={class:"project-tags"},Re=e("a",{href:"https://github.com/guss-renteria?tab=repositories",target:"_blank",rel:"noopener noreferrer",class:"more-projects"},[e("span",{class:"icon-share"}),x(),e("span",{class:"icon-child"}),x(" m\xE1s proyectos ")],-1);function Be(n,c,d,f,m,r){const i=y("motion");return p((t(),s("div",{id:"Projects",class:_(`projects-comp ${r.color_scheme}`),initial:{opacity:0},visible:{opacity:1}},[Te,e("div",je,[(t(!0),s(u,null,v(r.getProjects(),(o,a)=>(t(),s("div",{class:"project-card",key:a},[e("div",{class:"image-container",onMouseover:h=>n.img_hover[a]=!0,onMouseleave:h=>n.img_hover[a]=!1},[e("img",{src:o.img,alt:o.name},null,8,Ae),n.img_hover[a]?(t(),s("img",{key:0,src:o.gif,alt:o.name},null,8,Pe)):k("",!0)],40,Fe),e("div",Je,[e("div",ze,[e("h3",null,l(o.name),1),e("div",Ne,[o.code_url?(t(),s("a",{key:0,href:o.code_url,target:"_blank",rel:"noopener noreferrer",class:_(`icon-github-alt ${o.icon_theme}`)},null,10,He)):k("",!0),o.live_url?(t(),s("a",{key:1,href:o.live_url,target:"_blank",rel:"noopener noreferrer",class:_(`icon-eye ${o.icon_theme}`)},null,10,Ie)):k("",!0)])]),e("div",Le,[(t(!0),s(u,null,v(o.tags,(h,S)=>(t(),s("div",{class:_(`tag ${h}`),key:S},l(h),3))),128))])])]))),128))]),Re],2)),[[i]])}var De=g(Me,[["render",Be]]),C="/mi-portafolio/assets/user.b4c1cec1.png",Ve=[{name:"Estefan\xEDa Cort\xE9s",img:C,text:"Su trabajo fue impecable, entregado en el tiempo que se le demand\xF3, cumpliendo detenidamente con todos los requerimentos asignados."},{name:"Isaac Chitala",img:C,text:"Buen compa\xF1ero de equipo, dedicado con su trabajo y creando soluciones."}];const qe={data:()=>({testimonials:Ve}),computed:{color_scheme(){return this.$store.state.color_scheme.current}}},Ge=e("h2",null,"~ Testimonios",-1),Ee={class:"testimonial-container"},Ke=["src","alt"];function Oe(n,c,d,f,m,r){const i=y("motion");return p((t(),s("div",{id:"Testimonials",class:_(`testimonials-comp ${r.color_scheme}`),initial:{opacity:0},visible:{opacity:1}},[Ge,e("div",Ee,[(t(!0),s(u,null,v(n.testimonials,(o,a)=>(t(),s("div",{class:"testimonial-card",key:a},[o.img?(t(),s("img",{key:0,src:o.img,alt:o.name},null,8,Ke)):k("",!0),e("h3",null,l(o.name),1),e("p",null,l(o.text),1)]))),128))])],2)),[[i]])}var Qe=g(qe,[["render",Oe]]);const Ue={computed:{color_scheme(){return this.$store.state.color_scheme.current}}},We=w('<div class="nav-footer"><a href="#Intro">Inicio</a><a href="#About-me">Acerca de m\xED</a><a href="#Projects">Proyectos</a><a href="#Testimonials">Testimonios</a></div><h2 class="footer-name">Gusstavo</h2><div class="contact-me"><a href="https://www.linkedin.com/in/gustavo-renter%C3%ADa-317577238/" target="_blank" rel="noopener noreferrer" class="icon-linkedin"></a><a href="https://github.com/guss-renteria" target="_blank" rel="noopener noreferrer" class="icon-github-alt"></a><a href="https://api.whatsapp.com/send?phone=523321469421&amp;text=hola,%20qu\xE9%20tal?" target="_blank" rel="noopener noreferrer" class="icon-whatsapp"></a></div>',3),Xe=[We];function Ye(n,c,d,f,m,r){const i=y("motion");return p((t(),s("div",{class:_(`footer-comp ${r.color_scheme}`),initial:{y:40},visible:{y:0}},Xe,2)),[[i]])}var Ze=g(Ue,[["render",Ye]]);const et={components:{Intro:E,AboutMe:he,Projects:De,Testimonials:Qe,Footer:Ze},computed:{color_scheme(){return this.$store.state.color_scheme.current}}};function tt(n,c,d,f,m,r){const i=$("Intro"),o=$("AboutMe"),a=$("Projects"),h=$("Testimonials"),S=$("Footer");return t(),s("section",{id:"Intro",class:_(`home-view ${r.color_scheme}`)},[b(i),b(o),b(a),b(h),b(S)],2)}var ot=g(et,[["render",tt]]);export{ot as default};
