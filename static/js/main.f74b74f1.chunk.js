(this.webpackJsonpconnect4=this.webpackJsonpconnect4||[]).push([[0],{12:function(n,e,t){},13:function(n,e,t){},15:function(n,e,t){"use strict";t.r(e);var l=t(1),r=t.n(l),c=t(3),u=t.n(c),a=(t(12),t(13),t(4)),o=t(5),i=t(7),s=t(6),d=function(n,e,t){return!(n<0||n>=t.length||e<0||e>=t[n].length)},h=function(n,e,t,l){return 4===function(n,e,t,l){var r={};return function n(e,c){!1===d(e,c,t)||t[e][c]!==l||r[[e,c]]||r[[e,c]]||(r[[e,c]]=!0,n(e+1,c+1),n(e-1,c-1))}(n,e),Object.keys(r).length}(n,e,t,l)||4===function(n,e,t,l){var r={};return function n(e,c){!1===d(e,c,t)||t[e][c]!==l||r[[e,c]]||r[[e,c]]||(r[[e,c]]=!0,n(e+1,c-1),n(e-1,c+1))}(n,e),Object.keys(r).length}(n,e,t,l)||4===function(n,e,t,l){var r={};return function n(e,c){!1===d(e,c,t)||t[e][c]!==l||r[[e,c]]||r[[e,c]]||(r[[e,c]]=!0,n(e,c-1),n(e,c+1))}(n,e),Object.keys(r).length}(n,e,t,l)||4===function(n,e,t,l){var r={};return function n(e,c){!1===d(e,c,t)||t[e][c]!==l||r[[e,c]]||r[[e,c]]||(r[[e,c]]=!0,n(e+1,c))}(n,e),Object.keys(r).length}(n,e,t,l)},j=t(0),f=function(n){var e=n.col,t=n.colIndex,l=n.handleClick,r="";return 1===e?r="red":0===e&&(r="yellow"),Object(j.jsx)("td",{value:e,onClick:function(){return l(t,e)},children:Object(j.jsx)("div",{className:"cell ".concat(r)})})},b=function(n){var e=n.row,t=(n.value,n.handleClick);return Object(j.jsx)("tr",{children:e.map((function(n,e){return Object(j.jsx)(f,{col:n,colIndex:e,handleClick:t},e)}))})},g=function(n){var e=n.gameBoard,t=n.handleClick;return Object(j.jsx)("table",{children:Object(j.jsx)("tbody",{children:e.map((function(n,e){return Object(j.jsx)(b,{row:n,value:e,handleClick:t},e)}))})})},v=function(n){var e=n.isWon,t=n.currPlayer,l=n.reset;return Object(j.jsxs)("div",{className:"heading",children:[Object(j.jsx)("h1",{children:"Connect 4"}),Object(j.jsxs)("div",{className:"scoreboard",children:[!0===e?Object(j.jsxs)("h2",{children:["\ud83c\udf89 WINNER: ",t," \ud83c\udf89"]}):Object(j.jsxs)("h2",{children:["Current Player: ",t]}),Object(j.jsx)("button",{onClick:l,children:"Reset"})]})]})},y=function(n){Object(i.a)(t,n);var e=Object(s.a)(t);function t(n){var l;return Object(a.a)(this,t),(l=e.call(this,n)).reset=function(){for(var n=l.state.gameBoard,e=[],t=0;t<n.length;t++)e[t]=new Array(n[t].length).fill(null);l.setState({gameBoard:e,currentPlayer:1,isWon:!1})},l.togglePlayer=function(){1===l.state.currentPlayer?l.setState({currentPlayer:0}):l.setState({currentPlayer:1})},l.checkForWin=function(n,e){var t=l.state,r=t.gameBoard,c=t.currentPlayer;return!0===h(n,e,r,c)&&(l.setState({isWon:!0}),!0)},l.handleClick=function(n){1===l.state.currentPlayer&&l.dropChecker(n)},l.dropChecker=function(n){var e,t=l.state,r=t.gameBoard,c=t.isWon,u=t.currentPlayer,a=null!==r[0][n],o=r,i=o.length-1;if(!0!==c&&!a){for(;i>=0;){if(null===o[i][n]){o[e=i][n]=u;break}i--}!1===l.checkForWin(e,n)&&l.togglePlayer(),l.setState({gameBoard:o})}},l.randomizer=function(){var n=l.state.gameBoard,e=Math.floor(Math.random()*n.length);l.dropChecker(e)},l.getCurrentPlayer=function(){return 1===l.state.currentPlayer?"Human":"AI"},l.state={currentPlayer:1,isWon:!1,gameBoard:[[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null]]},l}return Object(o.a)(t,[{key:"componentDidUpdate",value:function(n,e){var t=this;0===this.state.currentPlayer&&setTimeout((function(){return t.randomizer()}),2e3)}},{key:"render",value:function(){var n=this.state,e=n.gameBoard,t=n.isWon,l=this.getCurrentPlayer();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(v,{currPlayer:l,isWon:t,reset:this.reset}),Object(j.jsx)(g,{gameBoard:e,handleClick:this.handleClick})]})}}]),t}(l.Component);var O=function(){return Object(j.jsx)(y,{})},m=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(e){var t=e.getCLS,l=e.getFID,r=e.getFCP,c=e.getLCP,u=e.getTTFB;t(n),l(n),r(n),c(n),u(n)}))};u.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.f74b74f1.chunk.js.map