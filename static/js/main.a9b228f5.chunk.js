(this.webpackJsonpline_counter=this.webpackJsonpline_counter||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(3),a=n.n(i),o=(n(12),n(13),n(4)),d=n(5),l=n(7),r=n(6),u=(n(14),n(0)),h=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleMinuteChange1=function(e){s.setState({minute_1:e.target.value})},s.handleMinuteChange2=function(e){s.setState({minute_2:e.target.value})},s.handleSecondChange1=function(e){s.setState({second_1:e.target.value})},s.handleSecondChange2=function(e){s.setState({second_2:e.target.value})},s.Add=function(){s.setState({minute_1:parseInt(s.state.minute_1)+parseInt(s.state.minute_2),second_1:parseInt(s.state.second_1)+parseInt(s.state.second_2)}),console.log("-----"),console.log("Minute - ",s.state.minute_2),console.log("Second - ",s.state.second_2)},s.Refresh=function(){window.location.reload(!1)},s.state={minute_1:0,minute_2:"",second_1:0,second_2:""},s.minuteInput=c.a.createRef(),s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.minuteInput.current.focus(),document.title="Line Counter"}},{key:"render",value:function(){var e=this.state,t=e.minute_1,n=e.minute_2,s=e.second_1,c=e.second_2;return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"heading",children:Object(u.jsx)("h1",{children:Object(u.jsx)("b",{children:"Line Counter"})})}),Object(u.jsx)("div",{className:"leftPlane",children:Object(u.jsxs)("div",{className:"leftPanel",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{className:"minuteBox",value:n,onChange:this.handleMinuteChange2,ref:this.minuteInput}),Object(u.jsx)("b",{children:":"}),Object(u.jsx)("input",{className:"secondBox",value:c,onChange:this.handleSecondChange2})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"add",type:"submit",onClick:this.Add,children:"Add"}),Object(u.jsx)("button",{className:"reset",onClick:this.Refresh,children:"Reset"})]})]})}),Object(u.jsx)("div",{className:"rightPlane",children:Object(u.jsxs)("div",{className:"rightPanel",children:[Object(u.jsxs)("h2",{children:["Hours - ",parseInt((60*t+s)/60/60)]}),Object(u.jsxs)("h2",{children:["Minutes - ",parseInt((60*t+s)/60)]}),Object(u.jsxs)("h2",{children:["Seconds - ",60*t+s]}),Object(u.jsxs)("h2",{children:["Total Time - ",parseInt(t/60)," :"," ",parseInt((60*t+s)/60%60)," :"," ",(60*t+s)%60]}),Object(u.jsxs)("h2",{children:["Total Lines -"," ",Number((60*t+s)/60*8).toFixed(2)]})]})}),Object(u.jsx)("div",{className:"footer",children:"By Anudeep Reddy Raavi"})]})}}]),n}(c.a.Component);var j=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(h,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),i(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.a9b228f5.chunk.js.map