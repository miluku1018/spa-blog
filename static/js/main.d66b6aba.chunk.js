(this["webpackJsonpspa-blog"]=this["webpackJsonpspa-blog"]||[]).push([[0],{38:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),o=e(22),i=e.n(o),a=e(5),u=e(3),s=e(2),b="token",d=function(n){localStorage.setItem(b,n)},j=function(){return localStorage.getItem(b)},l="https://student-json-api.lidemy.me",f=function(){var n=j();return fetch("".concat(l,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))},p=Object(c.createContext)(null),x=e(4);function h(){var n=Object(u.a)(["\n  margin-top: 20px;\n  cursor: pointer;\n  width: 200px;\n  height: 30px;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  background-color: #8ce7ec;\n  :hover {\n    background-color: #000000de;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    color: #ec8c9b;\n  }\n"]);return h=function(){return n},n}function O(){var n=Object(u.a)(["\n  margin: 10px 0;\n  width: 200px;\n  height: 25px;\n  border-radius: 3px;\n  border: 1px solid #8ce7ec;\n"]);return O=function(){return n},n}function v(){var n=Object(u.a)(["\n  text-align: center;\n  border: 5px solid #ec8c9b;\n  width: 500px;\n  margin: 60px auto 0;\n  padding: 30px 0;\n  border-radius: 3px;\n"]);return v=function(){return n},n}function g(){var n=Object(u.a)(["\n  color: red;\n"]);return g=function(){return n},n}var m=s.b.div(g()),w=s.b.form(v()),k=s.b.input(O()),S=s.b.button(h());function y(){var n=Object(c.useContext)(p).setUser,t=Object(c.useState)(""),e=Object(a.a)(t,2),o=e[0],i=e[1],u=Object(c.useState)(""),s=Object(a.a)(u,2),b=s[0],j=s[1],h=Object(c.useState)(),O=Object(a.a)(h,2),v=O[0],g=O[1],y=Object(x.f)();return Object(r.jsxs)(w,{onSubmit:function(t){t.preventDefault(),g(null),function(n,t){return fetch("".concat(l,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:t})}).then((function(n){return n.json()}))}(o,b).then((function(t){if(0===t.ok)return g(t.message);d(t.token),f().then((function(t){if(1!==t.ok)return d(null),g(t.toString());n(t.data),y.push("/")}))}))},children:[Object(r.jsxs)("div",{children:["username:"," ",Object(r.jsx)(k,{value:o,onChange:function(n){return i(n.target.value)}})]}),Object(r.jsxs)("div",{children:["password:"," ",Object(r.jsx)(k,{type:"password",value:b,onChange:function(n){return j(n.target.value)}})]}),Object(r.jsx)(S,{children:"\u767b\u5165"}),v&&Object(r.jsx)(m,{children:v})]})}var C=e(26),P=e(10);function _(){var n=Object(u.a)(["\n  cursor: pointer;\n  width: 150px;\n  height: 30px;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  background-color: pink;\n\n  & + & {\n    margin-left: 5px;\n  }\n  :hover {\n    background-color: #000000de;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    color: #ec8c9b;\n  }\n"]);return _=function(){return n},n}function z(){var n=Object(u.a)(["\n  padding-top: 10px;\n"]);return z=function(){return n},n}function N(){var n=Object(u.a)(["\n  margin: 30px 0;\n  text-align: center;\n"]);return N=function(){return n},n}function $(){var n=Object(u.a)(["\n  color: rgba(0, 0, 0, 0.8);\n"]);return $=function(){return n},n}function D(){var n=Object(u.a)(["\n  font-size: 24px;\n  color: #333;\n  text-decoration: none;\n"]);return D=function(){return n},n}function E(){var n=Object(u.a)(["\n  border-bottom: 1px solid #f09fac;\n  padding: 16px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n"]);return E=function(){return n},n}function J(){var n=Object(u.a)(["\n  height: 70vh;\n"]);return J=function(){return n},n}function A(){var n=Object(u.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]);return A=function(){return n},n}var B=s.b.div(A()),T=s.b.div(J()),U=s.b.div(E()),I=Object(s.b)(P.b)(D()),L=s.b.div($()),M=s.b.div(N()),R=s.b.div(z()),q=s.b.button(_());function F(n){var t=n.post;return Object(r.jsxs)(U,{children:[Object(r.jsx)(I,{to:"/posts/".concat(t.id),children:t.title}),Object(r.jsx)(L,{children:new Date(t.createdAt).toLocaleString()})]})}function G(n){var t=n.setCurrentPage,e=n.currentPage,c=n.totoalPages,o=function(n){var r=n.target.innerText;return"prev"===r&&e>="2"?t(Number(e)-1):"next"===r&&Number(e)!==c.length?t(Number(e)+1):"first"===r?t(1):"last"===r?t(c.length):"prev"!==r&&"next"!==r?t(r):void 0};return Object(r.jsxs)(M,{children:[Object(r.jsx)(q,{onClick:o,children:"first"}),Object(r.jsx)(q,{onClick:o,children:"prev"}),Object(r.jsx)(q,{onClick:o,children:"next"}),Object(r.jsx)(q,{onClick:o,children:"last"}),Object(r.jsxs)(R,{children:["\u7b2c ",e," \u9801 / \u5171 ",c.length," \u9801"]})]})}function H(){var n=Object(c.useState)([]),t=Object(a.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)("1"),u=Object(a.a)(i,2),s=u[0],b=u[1],d=Object(c.useState)([]),j=Object(a.a)(d,2),f=j[0],p=j[1];return Object(c.useEffect)((function(){fetch("".concat(l,"/posts?_sort=createdAt&_order=desc")).then((function(n){return n.json()})).then((function(n){for(var t=Math.ceil(n.length/5),e=function(n){p((function(t){return[].concat(Object(C.a)(t),[n])}))},r=1;r<t;r++)e(r)}))}),[]),Object(c.useEffect)((function(){(function(n,t){return fetch("".concat(l,"/posts?_sort=createdAt&_order=desc&_page=").concat(n,"&_limit=").concat(t)).then((function(n){return n.json()}))})(s,5).then((function(n){return o(n)}))}),[s]),Object(r.jsxs)(B,{children:[Object(r.jsx)(T,{children:e.map((function(n){return Object(r.jsx)(F,{post:n},n.id)}))}),Object(r.jsx)(G,{setCurrentPage:b,currentPage:s,totoalPages:f})]})}function K(){var n=Object(u.a)(["\n  margin-top: 20px;\n  cursor: pointer;\n  width: 200px;\n  height: 30px;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  background-color: #8ce7ec;\n  :hover {\n    background-color: #000000de;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    color: #ec8c9b;\n  }\n"]);return K=function(){return n},n}function Q(){var n=Object(u.a)(["\n  margin: 10px 0;\n  width: 200px;\n  height: 25px;\n  border-radius: 3px;\n  border: 1px solid #8ce7ec;\n"]);return Q=function(){return n},n}function V(){var n=Object(u.a)(["\n  text-align: center;\n  border: 5px solid #ec8c9b;\n  width: 500px;\n  margin: 60px auto 0;\n  padding: 30px 0;\n  border-radius: 3px;\n"]);return V=function(){return n},n}function W(){var n=Object(u.a)(["\n  color: red;\n"]);return W=function(){return n},n}var X=s.b.div(W()),Y=s.b.form(V()),Z=s.b.input(Q()),nn=s.b.button(K());function tn(){var n=Object(c.useContext)(p).setUser,t=Object(c.useState)(""),e=Object(a.a)(t,2),o=e[0],i=e[1],u=Object(c.useState)(""),s=Object(a.a)(u,2),b=s[0],j=s[1],h=Object(c.useState)(""),O=Object(a.a)(h,2),v=O[0],g=O[1],m=Object(c.useState)(),w=Object(a.a)(m,2),k=w[0],S=w[1],y=Object(x.f)();return Object(r.jsxs)(Y,{onSubmit:function(t){t.preventDefault(),S(null),function(n,t,e){return fetch("".concat(l,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,nickname:t,password:e})}).then((function(n){return n.json()}))}(o,b,v).then((function(t){if(0===t.ok)return S(t.message);f().then((function(t){if(1!==t.ok)return d(null),S(t.toString());n(t.data),y.push("/")}))}))},children:[Object(r.jsxs)("div",{children:["username:"," ",Object(r.jsx)(Z,{value:o,onChange:function(n){return i(n.target.value)}})]}),Object(r.jsxs)("div",{children:["nickname:"," ",Object(r.jsx)(Z,{value:b,onChange:function(n){return j(n.target.value)}})]}),Object(r.jsxs)("div",{children:["password:"," ",Object(r.jsx)(Z,{type:"password",value:v,onChange:function(n){return g(n.target.value)}})]}),Object(r.jsx)(nn,{children:"\u8a3b\u518a"}),k&&Object(r.jsx)(X,{children:k})]})}function en(){var n=Object(u.a)(["\n  font-size: 20px;\n  margin: 25px;\n"]);return en=function(){return n},n}function rn(){var n=Object(u.a)(["\n  width: 60%;\n  margin: 10px auto;\n"]);return rn=function(){return n},n}var cn=s.b.div(rn()),on=s.b.div(en());function an(){return Object(r.jsx)(cn,{children:Object(r.jsx)(on,{children:"\u7b2c\u4e00\u500b React \u6280\u8853\u90e8\u843d\u683c\uff0c\u5c0f\u5c0f\u83dc\u9ce5\uff0c\u8acb\u5404\u4f4d\u591a\u591a\u6307\u6559! \u6b61\u8fce\u5927\u5bb6\u4e00\u540c\u5beb\u6280\u8853\u6587\u7ae0\u3002"})})}function un(){var n=Object(u.a)(["\n  color: rgba(0, 0, 0, 1);\n"]);return un=function(){return n},n}function sn(){var n=Object(u.a)(["\n  color: rgba(0, 0, 0, 0.8);\n"]);return sn=function(){return n},n}function bn(){var n=Object(u.a)(["\n  font-size: 24px;\n  color: #333;\n  text-decoration: none;\n"]);return bn=function(){return n},n}function dn(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 25px 0;\n  font-weight: bold;\n"]);return dn=function(){return n},n}function jn(){var n=Object(u.a)(["\n  width: 80%;\n  margin: 30px auto;\n  border-bottom: 1px solid #f09fac;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n"]);return jn=function(){return n},n}var ln=s.b.div(jn()),fn=s.b.div(dn()),pn=s.b.div(bn()),xn=s.b.div(sn()),hn=s.b.div(un());function On(){var n=Object(x.h)().slug,t=Object(c.useState)(),e=Object(a.a)(t,2),o=e[0],i=e[1];return Object(c.useEffect)((function(){var t;(t=n,fetch("".concat(l,"/posts/").concat(t)).then((function(n){return n.json()}))).then((function(n){return i(n)}))}),[n]),Object(r.jsx)("div",{children:o&&Object(r.jsxs)(ln,{children:[Object(r.jsxs)(fn,{children:[Object(r.jsx)(pn,{children:o.title}),Object(r.jsx)(xn,{children:new Date(o.createdAt).toLocaleString()})]}),Object(r.jsx)(hn,{children:o.body})]})})}function vn(){var n=Object(u.a)(["\n  background-color: pink;\n  border: 1px solid transparent;\n  border-radius: 5px;\n  width: 300px;\n  height: 35px;\n  cursor: pointer;\n  :hover {\n    background-color: #000000de;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    color: #ec8c9b;\n  }\n"]);return vn=function(){return n},n}function gn(){var n=Object(u.a)(["\n  margin: 10px 0;\n  border: 1px solid #f09fac;\n  border-radius: 3px;\n"]);return gn=function(){return n},n}function mn(){var n=Object(u.a)(["\n  width: 400px;\n  height: 30px;\n  border: 1px solid #f09fac;\n  border-radius: 3px;\n"]);return mn=function(){return n},n}function wn(){var n=Object(u.a)(["\n  text-align: center;\n  margin-top: 30px;\n"]);return wn=function(){return n},n}function kn(){var n=Object(u.a)(["\n  color: red;\n"]);return kn=function(){return n},n}var Sn=s.b.div(kn()),yn=s.b.div(wn()),Cn=s.b.input(mn()),Pn=s.b.textarea(gn()),_n=s.b.button(vn());function zn(){var n=Object(c.useState)(""),t=Object(a.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)(""),u=Object(a.a)(i,2),s=u[0],b=u[1],d=Object(c.useState)(),f=Object(a.a)(d,2),p=f[0],h=f[1],O=Object(x.f)();return Object(r.jsxs)(yn,{onSubmit:function(n){n.preventDefault(),h(null),function(n,t){var e=j();return fetch("".concat(l,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(e)},body:JSON.stringify({title:n,body:t})}).then((function(n){return n.json()}))}(e,s).then((function(n){if(0===n.ok)return h(n.message);O.push("/")}))},children:[Object(r.jsxs)("div",{children:["\u6a19\u984c: ",Object(r.jsx)(Cn,{value:e,onChange:function(n){return o(n.target.value)}})]}),Object(r.jsx)("div",{children:Object(r.jsx)(Pn,{cols:"55",rows:"20",value:s,onChange:function(n){return b(n.target.value)}})}),Object(r.jsx)(_n,{children:"\u9001\u51fa"}),p&&Object(r.jsx)(Sn,{children:p})]})}function Nn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n\n  "," {\n    margin-left: 64px;\n  }\n"]);return Nn=function(){return n},n}function $n(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100px;\n  box-sizing: border-box;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n\n  ","\n"]);return $n=function(){return n},n}function Dn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  height: 64px;\n"]);return Dn=function(){return n},n}function En(){var n=Object(u.a)(["\n  font-size: 32px;\n  font-weight: bold;\n"]);return En=function(){return n},n}function Jn(){var n=Object(u.a)(["\n  height: 64px;\n  display: flex;\n  justify-content: space-space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid #f09fac;\n  padding: 0 32px;\n  box-sizing: border-box;\n  background-color: white;\n"]);return Jn=function(){return n},n}var An=s.b.div(Jn()),Bn=s.b.div(En()),Tn=s.b.div(Dn()),Un=Object(s.b)(P.b)($n(),(function(n){return n.$active&&"\n    background: #f8ccd3\n  "})),In=s.b.div(Nn(),Tn);function Ln(){var n=Object(x.g)(),t=Object(x.f)(),e=Object(c.useContext)(p),o=e.user,i=e.setUser;return Object(r.jsxs)(An,{children:[Object(r.jsxs)(In,{children:[Object(r.jsx)(Bn,{children:"Miao Blog"}),Object(r.jsxs)(Tn,{children:[Object(r.jsx)(Un,{to:"/",$active:"/"===n.pathname,children:"\u9996\u9801"}),Object(r.jsx)(Un,{to:"/about",$active:"/about"===n.pathname,children:"\u95dc\u65bc\u6211"}),o&&Object(r.jsx)(Un,{to:"/new-post",$active:"/new-post"===n.pathname,children:"\u767c\u5e03\u6587\u7ae0"})]})]}),Object(r.jsxs)(Tn,{children:[!o&&Object(r.jsx)(Un,{to:"/login",$active:"/login"===n.pathname,children:"\u767b\u5165"}),!o&&Object(r.jsx)(Un,{to:"/register",$active:"/register"===n.pathname,children:"\u8a3b\u518a"}),o&&Object(r.jsx)(Un,{onClick:function(){d(""),i(null),"/"!==n.pathname&&t.push("/")},children:"\u767b\u51fa"})]})]})}function Mn(){var n=Object(u.a)(["\n  padding-top: 64px;\n  background: #eecfd438;\n  width: 100%;\n  height: 100vh;\n"]);return Mn=function(){return n},n}var Rn=s.b.div(Mn());function qn(){var n=Object(c.useState)(null),t=Object(a.a)(n,2),e=t[0],o=t[1];return Object(c.useEffect)((function(){f().then((function(n){n.ok&&o(n.data)}))}),[]),Object(r.jsx)(p.Provider,{value:{user:e,setUser:o},children:Object(r.jsx)(Rn,{children:Object(r.jsxs)(P.a,{children:[Object(r.jsx)(Ln,{}),Object(r.jsxs)(x.c,{children:[Object(r.jsx)(x.a,{exact:!0,path:"/",children:Object(r.jsx)(H,{})}),Object(r.jsx)(x.a,{exact:!0,path:"/posts/:slug",children:Object(r.jsx)(On,{})}),Object(r.jsx)(x.a,{path:"/new-post",children:Object(r.jsx)(zn,{})}),Object(r.jsx)(x.a,{path:"/about",children:Object(r.jsx)(an,{})}),Object(r.jsx)(x.a,{path:"/login",children:Object(r.jsx)(y,{})}),Object(r.jsx)(x.a,{path:"/register",children:Object(r.jsx)(tn,{})})]})]})})})}i.a.render(Object(r.jsx)(s.a,{theme:{colors:{primary_300:"#3333dd",primary_400:"#e33e3e",primary_500:"#af0505"}},children:Object(r.jsx)(qn,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d66b6aba.chunk.js.map