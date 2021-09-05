(this["webpackJsonpchess-concept"]=this["webpackJsonpchess-concept"]||[]).push([[0],{79:function(e,t,n){"use strict";n.r(t);var c,r=n(0),a=n.n(r),i=n(22),o=n.n(i),u=n(24),l=n(100),s=n(94),b=n(17),j=n(103),O=n(3),d=function(e){var t=e.classes,n=e.actions;return Object(O.jsx)(s.a,{item:!0,children:n.map((function(e){var n=e.id,c=e.onClick,r=e.color,a=e.label;return Object(O.jsx)(j.a,{variant:"contained",color:r,onClick:c,classes:{root:t.button},children:a},n)}))})},f=function(){return{button:{marginRight:"10px"}}},p=Object(b.a)(f)(d),h=function(e){var t=e.classes,n=e.Piece,c=e.onClick,r=e.isHighlighted,a=e.darkBackground;return Object(O.jsx)("div",{className:"".concat(t.square,"  ").concat(a?t.darkBackground:""),onClick:c,children:Object(O.jsx)("div",{className:"".concat(t.innerContainer," ").concat(r?t.highlighted:""),children:n&&Object(O.jsx)(n,{})})})},v=n(21),T=function(e){var t=e.palette,n=e.breakpoints;return{"@global":{"@keyframes pulse":{"0%":{border:"2px solid ".concat(t.grey[300])},"50%":{border:"2px solid ".concat(t.grey[400])},"100%":{border:"2px solid ".concat(t.grey[300])}}},square:{display:"flex"},innerContainer:Object(v.a)({display:"flex",alignItems:"center",justifyContent:"center",margin:2,border:"2px solid transparent",minHeight:"5rem",minWidth:"5rem"},n.down("sm"),{minHeight:"2rem",minWidth:"2rem"}),darkBackground:{backgroundColor:t.grey[100]},selected:{},highlighted:{animation:"pulse 2s ease-in-out infinite"}}},m=n(7),g=n(20),E=n(59),y=n.n(E),A=function(e){return function(t){var n=function(n){return{type:"".concat(e,"/").concat(t),payload:n}};return n.type="".concat(e,"/").concat(t),n}}("//models/BOARD"),x=(A("SET_BOARD"),A("RESET_GAME")),I=A("SQUARE_CLICKED"),N=A("START_GAME"),C=A("UPDATE_BOARD"),S=A("SET_GAME_STATUS"),_=A("REMOVE_BOARD_INDICATORS"),P=A("ON_PLACE_PAWN"),k=A("SELECT_PIECE"),R=A("MOVE_PIECE"),L=A("SET_SELECTED_SQUARE"),G=Object(g.compose)(Object(u.b)(null,(function(e){return{squareClicked:function(t){return e(I(t))}}})),(function(e){return function(t){var n=t.id,c=t.piece,r=t.squareClicked;return Object(O.jsx)(e,Object(m.a)(Object(m.a)({},t),{},{Piece:function(){return Object(O.jsx)(O.Fragment,{children:c?Object(O.jsx)(y.a,{piece:c}):null})},onClick:function(){r(n)}}))}}))(Object(b.a)(T)(h)),H=function(e,t){return e%2!==0&&t%2===0||e%2===0&&t%2!==0},D=function(e){var t=e.classes,n=e.board;return Object(O.jsx)("div",{className:t.container,children:n.map((function(e,t){return Object(O.jsxs)(s.a,{container:!0,children:[e.map((function(e,n){return Object(O.jsx)(G,{id:e.id,darkBackground:H(t,n),piece:e.piece,isHighlighted:e.isHighlighted},e.id)})),Object(O.jsx)("br",{})]},function(e){return"r-".concat(e)}(t))}))})},B=function(){return{container:{border:"2px solid #ccc"}}},W=n(102),w=n(60),M=n.n(w),q={NOT_STARTED:"NOT_STARTED",SELECTING_STARTING_POSITION:"SELECTING_STARTING_POSITION",PLAYING:"PLAYING"},F={WHITE:{color:"white",PAWN:"P"},BLACK:{color:"black",PAWN:"p"}},K=n(9),Y=function(e){return function(t,n,c){var r,a,i,o=e===F.WHITE.color,u=o?6:1,l=o?-1:1,s={INITIAL:{y:2*l,x:0},SIMPLE:{y:l,x:0},ATTACK_LEFT:{y:l,x:-1},ATTACK_RIGHT:{y:l,x:1}},b=[],j=0===n,O=7===n;if(t===(o?0:7))return b;var d=!!c[t+l][n].piece,f=!!(null===(r=c[t+2*l])||void 0===r?void 0:r[n].piece),p=!j&&!!(null===(a=c[t+l])||void 0===a?void 0:a[n-1].piece),h=!O&&!!(null===(i=c[t+l])||void 0===i?void 0:i[n+1].piece);return!(t===u)||f||d||(b=[].concat(Object(K.a)(b),[s.INITIAL])),d||(b=[].concat(Object(K.a)(b),[s.SIMPLE])),p&&(b=[].concat(Object(K.a)(b),[s.ATTACK_LEFT])),h&&(b=[].concat(Object(K.a)(b),[s.ATTACK_RIGHT])),b}},U=Y(F.WHITE.color),J=(Y(F.BLACK.color),function(e,t){var n=M()(t),c=Z(e),r=c.y,a=c.x;switch(t[r][a].piece){case F.WHITE.PAWN:return U(r,a,n);default:return[]}}),Q=function(e){return e.split("").reduce((function(e,t){if(!isNaN(Number(t))){var n=Number(t);return[].concat(Object(K.a)(e),Object(K.a)(Array(n).fill({piece:null,isHighlighted:!1})))}return[].concat(Object(K.a)(e),[{piece:t,isHighlighted:!1}])}),[])},V=function(){return Q("8")},z=function(){return[V(),Q("2p5")].concat(Object(K.a)(Array(6).fill(V())))},X=function(){return z().map((function(e,t){return e.map((function(e,n){return Object(m.a)(Object(m.a)({},e),{},{id:"".concat(t,"-").concat(n)})}))}))},Z=function(e){return{y:+e[0],x:+e[2]}},$=Z,ee=function(e,t){var n=$(e),c=n.y,r=n.x,a=t[c][r].piece,i=Object.values(F.WHITE);return null!==a&&i.includes(a)},te=function(e){return 6===$(e).y},ne={board:X(),status:q.NOT_STARTED,selectedSquare:null},ce=Object(W.a)((c={},Object(v.a)(c,x.type,(function(){return Object(m.a)({},ne)})),Object(v.a)(c,C.type,(function(e,t){var n=t.payload;return Object(m.a)(Object(m.a)({},e),{},{board:n})})),Object(v.a)(c,S.type,(function(e,t){var n=t.payload;return Object(m.a)(Object(m.a)({},e),{},{status:n})})),Object(v.a)(c,L.type,(function(e,t){var n=t.payload;return Object(m.a)(Object(m.a)({},e),{},{selectedSquare:n})})),c),ne),re=n(96),ae=n(104),ie=n(97),oe=n(80),ue=n(45),le=n(98),se=n(39),be=function(e){var t=e.game;return null===t||void 0===t?void 0:t.board},je=function(e){var t=e.game;return null===t||void 0===t?void 0:t.status},Oe=function(e){var t=e.game;return null===t||void 0===t?void 0:t.selectedSquare},de=Object(ae.a)((function(e,t){return e.pipe(Object(re.a)(I.type),Object(ie.a)("payload"),Object(oe.a)((function(){return je(t.value)!==q.NOT_STARTED})),Object(ue.a)((function(e){return je(t.value)===q.SELECTING_STARTING_POSITION?P(e):je(t.value)!==q.PLAYING||Oe(t.value)?je(t.value)===q.PLAYING&&Oe(t.value)?R(e):void 0:k(e)})))}),(function(e,t){return e.pipe(Object(re.a)(k.type),Object(ie.a)("payload"),Object(oe.a)((function(e){return ee(e,be(t.value))})),Object(le.a)((function(e){if(Oe(t.value)===e)return[L(null),_()];var n=Object(se.cloneDeep)(be(t.value)),c=Z(e),r=c.y,a=c.x,i=n[r][a];i.isHighlighted=!i.isHighlighted;var o=J(e,n);return o.forEach((function(e){var t=e.x,c=e.y,i=a+t;n[r+c][i].isHighlighted=!0})),o.length?[L(e),C(n)]:[_()]})))}),(function(e,t){return e.pipe(Object(re.a)(P.type),Object(ie.a)("payload"),Object(oe.a)(te),Object(le.a)((function(e){var n=Object(se.cloneDeep)(be(t.value)),c=Z(e),r=c.y,a=c.x;return n[r][a].piece=F.WHITE.PAWN,[C(n),_(),S(q.PLAYING)]})))}),(function(e,t){return e.pipe(Object(re.a)(N.type),Object(le.a)((function(){var e=be(t.value),n=e.filter((function(e,t){return 6===t})).map((function(e){return e.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{isHighlighted:!0})}))})),c=[].concat(Object(K.a)(e.slice(0,6)),Object(K.a)(n),Object(K.a)(e.slice(7)));return[C(c),S(q.SELECTING_STARTING_POSITION)]})))}),(function(e,t){return e.pipe(Object(re.a)(_.type),Object(ue.a)((function(){var e=Object(se.cloneDeep)(be(t.value));return e.forEach((function(e){return e.forEach((function(e){return e.isHighlighted=!1}))})),C(e)})))}),(function(e,t){return e.pipe(Object(re.a)(R.type),Object(ie.a)("payload"),Object(le.a)((function(e){var n=Object(se.cloneDeep)(be(t.value)),c=Z(e),r=c.y,a=c.x,i=Oe(t.value),o=Z(i),u=o.x,l=o.y,s=[];if(J(i,n).some((function(e){var t=e.x,n=e.y;return u+t===a&&l+n===r}))){var b=n[l][u].piece;n[r][a].piece=b,n[l][u].piece=null,s=[].concat(Object(K.a)(s),[C(n)])}return s=[].concat(Object(K.a)(s),[L(null),_()])})))})),fe=Object(u.b)((function(e){return{board:be(e)}}))(Object(l.a)(B)(D)),pe=n(99),he=function(){return Object(O.jsx)(s.a,{item:!0,children:Object(O.jsxs)(pe.a,{variant:"overline",children:[Object(O.jsx)("a",{href:"https://github.com/stacon/chess-concept",target:"_blank",rel:"noreferrer",children:"One Pawn Chess concept"})," ","created by"," ",Object(O.jsx)("a",{href:"https://github.com/stacon",target:"_blank",rel:"noreferrer",children:"stacon"})]})})},ve=function(e){var t=e.classes,n=e.actions;return Object(O.jsxs)(s.a,{container:!0,className:t.container,justifyContent:"center",alignItems:"center",children:[Object(O.jsxs)(s.a,{container:!0,justifyContent:"center",alignItems:"center",direction:"column",className:t.boardAreaContainer,children:[Object(O.jsx)("div",{className:t.boardContainer,children:Object(O.jsx)(fe,{})}),Object(O.jsx)(p,{actions:n})]}),Object(O.jsx)("div",{className:t.infoContainer,children:Object(O.jsx)(he,{})})]})},Te=function(){return{container:{minHeight:"90vh"},boardAreaContainer:{margin:"0 auto"},boardContainer:{marginBottom:"1rem"},infoContainer:{marginBottom:0}}},me=Object(g.compose)(Object(u.b)((function(e){return{status:je(e)}}),(function(e){return{startGame:function(){return e(N())},resetGame:function(){return e(x())}}})),(function(e){return function(t){var n=t.status,c=t.startGame,r=t.resetGame,a=[];return n===q.NOT_STARTED&&a.push({id:"place-pawn",label:"Place Pawn",color:"primary",onClick:c}),n!==q.NOT_STARTED&&a.push({id:"reset",label:"Reset",color:"secondary",onClick:r}),Object(O.jsx)(e,Object(m.a)(Object(m.a)({},t),{},{actions:a}))}}))(Object(l.a)(Te)(ve)),ge=n(101),Ee=n(61),ye={game:ce},Ae={game:ne},xe=Object(ae.a)(de),Ie=function(){var e=Object(ge.a)(),t=[e],n=Object(Ee.composeWithDevTools)({name:"chess-concept"}),c=Object(g.createStore)(Object(g.combineReducers)(ye),Ae,n(g.applyMiddleware.apply(void 0,t)));return e.run(xe),c}(),Ne=function(){return Object(O.jsx)(u.a,{store:Ie,children:Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(me,{})})})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,105)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(Ne,{})}),document.getElementById("root")),Ce()}},[[79,1,2]]]);
//# sourceMappingURL=main.684315c9.chunk.js.map