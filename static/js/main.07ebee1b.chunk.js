(this.webpackJsonpmaclaurin=this.webpackJsonpmaclaurin||[]).push([[0],{176:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(60),i=a.n(o),c=(a(68),a(0)),u=a(1),l=a(4),s=a(3),d=(a(69),a(7)),b=a(63),h=function e(t){return t?t*e(t-1):1},p=function(e,t,a){for(var n=1,r=a,o=[];r<a+20;){t+=(n*=-1)*(Math.pow(e,r)/h(r)),r+=2,o.push(t)}return o},f=function(e){return p(e,1,2)},j=(a(176),a(5)),g=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={value:"Introduce el valor de X"},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(j.jsx)("form",{className:"formulario",onSubmit:this.handleSubmit,children:Object(j.jsxs)("label",{className:"form-container",children:[Object(j.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleChange}),Object(j.jsx)("input",{type:"submit",value:"Calcular",onClick:function(){return e.props.onClick(e.state.value)}})]})})}}]),a}(r.a.Component),v=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).changeState=n.changeState.bind(Object(d.a)(n)),n.state={labels:p(0,1,2).map(String),datasets:[{label:"Grafica de serie de MacLaurin para Cos(x)",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:f(0)}]},n}return Object(u.a)(a,[{key:"changeState",value:function(e){this.setState({labels:p(e,1,2).map(String),datasets:[{label:"Grafica de serie de MacLaurin para Cos(x)",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:f(e)}]})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Grafica para serie de MacLaurin"}),Object(j.jsx)(g,{onClick:this.changeState}),Object(j.jsx)(b.a,{data:this.state})]})}}]),a}(r.a.Component),C=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(v,{})})}}]),a}(r.a.Component),O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,179)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),O()},68:function(e,t,a){},69:function(e,t,a){}},[[178,1,2]]]);
//# sourceMappingURL=main.07ebee1b.chunk.js.map