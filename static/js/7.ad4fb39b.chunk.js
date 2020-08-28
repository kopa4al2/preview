(this.webpackJsonppreview=this.webpackJsonppreview||[]).push([[7],{148:function(e,t,n){"use strict";n.r(t);var A=n(0),r=n.n(A),a=n(4),i=n(13),c=n(7),o=n(69),u=n(3),l=n(2),d=n(17),f=n(6);function s(){var e=Object(u.a)(["\n  position: absolute;\n  font-size: 1rem;\n  font-family: 'Roboto', sans-serif;\n  padding: 5px 10px;\n  width: 90%;\n  left: 5%;\n  background: ",";\n  color: ",";\n  z-index: ",";\n"]);return s=function(){return e},e}function v(){var e=Object(u.a)(["\n  grid-area: p;\n"]);return v=function(){return e},e}function p(){var e=Object(u.a)(["\n  grid-area: m;\n  justify-self: flex-end;\n"]);return p=function(){return e},e}function b(){var e=Object(u.a)(["\n  z-index: ",";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]);return b=function(){return e},e}function m(){var e=Object(u.a)(["\n  grid-area: v;\n  position: relative;\n"]);return m=function(){return e},e}function j(){var e=Object(u.a)(['\n  width: 48%;\n  display: grid;\n  grid-template-areas: " v v "\n                       " p m ";\n                       \n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto min-content;\n  grid-row-gap: 10px;                     \n']);return j=function(){return e},e}var O=l.c.div(j()),L=l.c.div(m()),g=l.c.video(b(),d.c),y=l.c.div(p()),x=l.c.div(v()),S=Object(l.c)(i.d)(s(),(function(e){return e.theme.surface}),(function(e){return e.theme.error}),d.c+1),k=function(){var e=Object(c.d)(),t=Object(A.useRef)(),n=Object(A.useState)(null),u=Object(a.a)(n,2),l=u[0];u[1];function d(){var n=t.current.files[0];n.type.includes("video")||"video/avi"===n.type||"video/mp4"===n.type?(e(Object(o.e)("VIDEO",URL.createObjectURL(n))),"video/mp4"!==n.type&&e(Object(o.e)("VIDEO_PREVIEW_ERROR","Video will be uploaded, but preview is unavailable.You can only preview mp4 video format"))):alert("Wrong video format")}return Object(A.useEffect)((function(){if(t.current)return t.current.addEventListener("change",d),function(){t.current.removeEventListener("change",d)}}),[t.current]),r.a.createElement(y,null,l&&r.a.createElement("progress",{max:100,value:l}),r.a.createElement(i.a,{text:"Upload movie",onClick:function(e){e.preventDefault(),t.current.click()}}),r.a.createElement("input",{type:"file",hidden:!0,ref:t}))},E=function(e){var t=Object(A.useRef)();function n(){var e=t.current.files[0];"image/jpeg"!==e.type&&e.type}return Object(A.useEffect)((function(){if(t.current)return t.current.addEventListener("change",n),function(){t.current.removeEventListener("change",n)}}),[t.current]),r.a.createElement(x,null,r.a.createElement(i.a,{text:"Upload poster",onClick:function(e){e.preventDefault(),t.current.click()}}),r.a.createElement("input",{type:"file",hidden:!0,ref:t}))},T=n(32),h=function(){var e=Object(c.e)((function(e){var t=e.moderatorReducer;return{poster:t.movieData.Poster,isLoading:t.movieData.isLoading,videoPreview:t.uploadInfo.VIDEO,previewError:t.uploadInfo.VIDEO_PREVIEW_ERROR}})),t=e.poster,n=e.isLoading,A=e.videoPreview,a=e.previewError;return r.a.createElement(L,null,n&&r.a.createElement(T.e,null),a&&r.a.createElement(S,{elevation:t?8:0},a),r.a.createElement(g,{poster:t,controls:!!A&&!a},A&&!a&&r.a.createElement("source",{src:A})))},J=function(){return r.a.createElement(O,null,r.a.createElement(h,null),r.a.createElement(k,null),r.a.createElement(E,null))},R=n(20),w=n(9),K=n(91);function D(){var e=Object(u.a)(["\n  color: ",";\n  font-size: 1rem;\n  padding: 10px;\n  cursor: pointer;\n \n"]);return D=function(){return e},e}function M(){var e=Object(u.a)(["\n  color: ",";\n  font-size: 1.1rem;\n  text-align: center;\n  width: 100%;\n"]);return M=function(){return e},e}function P(){var e=Object(u.a)(["\n  position: absolute;\n  width: 100%;\n  height: 200px;\n  left: 0;\n  top: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background: ",";\n  z-index: ",";\n  visibility: ",";\n  box-shadow: ","\n"]);return P=function(){return e},e}function V(){var e=Object(u.a)(["\n  position: relative;\n"]);return V=function(){return e},e}var W=l.c.div(V()),X=l.c.ul(P(),(function(e){return e.theme.surface}),d.a,(function(e){return e.isShown?"visible":"hidden"}),Object(f.a)(10)),U=l.c.p(M(),(function(e){return e.theme.error})),z=l.c.div(D(),(function(e){return e.theme.onSurface})),N=Object(K.a)((function(e){var t=e.title,n=e.id,A=e.handleClick,a=Object(w.a)(e,["title","id","handleClick"]);return r.a.createElement(z,Object.assign({onClick:function(){A(n)}},a),t)})),q=function(e){var t=Object(c.d)(),n=Object(A.useCallback)(Object(R.debounce)((function(e){O(e.target.value),x(!0),t(Object(o.d)(e.target.value))}),300),[]),u=Object(c.e)((function(e){var t=e.moderatorReducer;return{suggestedMovies:t.movies,movieData:t.movieData,isLoading:t.isLoading,error:t.error,totalResults:t.totalResults}})),l=u.suggestedMovies,d=void 0===l?[]:l,f=u.movieData,s=u.isLoading,v=u.error,p=u.totalResults,b=Object(A.useState)(f.Title),m=Object(a.a)(b,2),j=m[0],O=m[1],L=Object(A.useState)(!1),g=Object(a.a)(L,2),y=g[0],x=g[1];function S(e){t(Object(o.c)(e)),t(Object(o.a)()),x(!1)}function k(e){if(e.preventDefault(),e.stopPropagation(),38===e.keyCode)(e.target.previousSibling||e.target.parentNode.lastChild).focus();else if(40===e.keyCode){(e.target.nextSibling||e.target.parentNode.firstChild).focus()}else 13===e.keyCode&&S(e.target.id)}return Object(A.useEffect)((function(){O(f.Title)}),[f.Title]),r.a.createElement(W,null,r.a.createElement(i.c,{label:"Movie title*",helperText:"*Required. Start typing then select the desired movie from the list",onChange:n,value:j,loading:f.isLoading,autoComplete:"off"}),r.a.createElement(X,{isShown:y},s&&r.a.createElement(T.e,null),v&&r.a.createElement(U,null,v),d.map((function(e,t){return r.a.createElement(N,{hocProps:{id:e.imdbID,onKeyUpCapture:k,tabIndex:t},tag:"li",key:e.imdbID,title:e.Title,id:e.imdbID,handleClick:S})})),d.length>0&&p>d.length&&r.a.createElement(N,{style:{textAlign:"center"},handleClick:function(){var e=d.length/10+1;t(Object(o.d)(j,e))},title:"Load more",tag:"li"})))};function H(){var e=Object(u.a)(["\n  width: 48%;\n  display: flex;\n  flex-direction: column;\n  \n  & > *:not(:last-child):not(:first-child) {\n    margin: 10px 0;\n  }\n  \n  & > * {\n    flex: 1 1 0;\n  }\n"]);return H=function(){return e},e}var G=l.c.div(H()),Z=function(){var e=Object(c.e)((function(e){var t=e.moderatorReducer.movieData;return{isLoading:t.isLoading,year:t.Year,director:t.Director,summary:t.Plot,actors:t.Actors,writer:t.Writer}})),t=e.isLoading,n=void 0!==t&&t,A=e.year,a=e.summary,o=e.director,u=e.writer;return r.a.createElement(G,null,r.a.createElement(i.c,{inputType:"textarea",label:"Summary",value:a,loading:n,helperText:"Enter a summary for the movie"}),r.a.createElement(i.c,{helperText:"Enter the year of release",label:"Year",loading:n,value:A}),r.a.createElement(i.c,{value:o,loading:n,helperText:"Enter the director of the movie",label:"Director"}),r.a.createElement(i.c,{value:u,loading:n,helperText:"Enter the writer of the movie",label:"Writer"}))},C=n(51),B=function(e){var t=e.onClose,n=e.text;return r.a.createElement(i.b,{leadingIcon:{src:"data:image/jpeg;base64,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",alt:"User photo"},color:"secondary",chipText:n,onClose:function(){t(n)}})};function F(){var e=Object(u.a)(["\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  \n  & > * {\n    margin: 4px;\n  }\n"]);return F=function(){return e},e}function I(){var e=Object(u.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]);return I=function(){return e},e}var Q=l.c.div(I()),Y=l.c.div(F()),_=function(e){var t=e.isLoading,n=e.data,c=e.updateData,o=e.inputLabel,u=e.inputHelperText,l=Object(A.useState)(""),d=Object(a.a)(l,2),f=d[0],s=d[1];var v=0!==n.filter((function(e){return e.toLowerCase()===f.toLowerCase()})).length,p=0===f.trim().length||v,b=v?"Actor already added":"";function m(e){e.preventDefault(),p||(s(""),c([].concat(Object(C.a)(n),[f])))}function j(e){c(n.filter((function(t){return t!==e})))}return r.a.createElement(Q,null,t&&r.a.createElement(T.e,null),r.a.createElement(Y,null,r.a.createElement(i.c,{label:o,helperText:u,errorText:b,value:f,onChange:function(e){s(e.target.value)},onKeyDown:function(e){13===e.keyCode&&m(e)}}),r.a.createElement(i.a,{text:"Add",disabled:p,onClick:m})),r.a.createElement(Y,null,n&&n.map((function(e){return r.a.createElement(B,{text:e,onClose:j})}))))},$=function(){var e=Object(c.e)((function(e){var t=e.moderatorReducer.movieData;return{isLoading:t.isLoading,actors:t.Actors}})),t=e.isLoading,n=void 0!==t&&t,i=e.actors,o=void 0===i?"":i,u=Object(A.useState)([]),l=Object(a.a)(u,2),d=l[0],f=l[1];return Object(A.useEffect)((function(){o&&f(o.split(","))}),[o]),r.a.createElement(_,{data:d,updateData:f,isLoading:n,inputLabel:"Add Actor"})},ee=function(){var e=Object(c.e)((function(e){var t=e.moderatorReducer.movieData;return{isLoading:t.isLoading,genres:t.Genre}})),t=e.isLoading,n=void 0!==t&&t,i=e.genres,o=void 0===i?"":i,u=Object(A.useState)([]),l=Object(a.a)(u,2),d=l[0],f=l[1];return Object(A.useEffect)((function(){o&&f(o.split(","))}),[o]),r.a.createElement(_,{data:d,updateData:f,isLoading:n,inputLabel:"Add Genre"})};function te(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return te=function(){return e},e}function ne(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n"]);return ne=function(){return e},e}var Ae=l.c.form(ne()),re=l.c.div(te()),ae=function(){return r.a.createElement(Ae,{autoComplete:"off"},r.a.createElement(q,null),r.a.createElement(re,null,r.a.createElement(J,null),r.a.createElement(Z,null)),r.a.createElement($,null),r.a.createElement(ee,null))};function ie(){var e=Object(u.a)(["\n  width: 100%;\n  height: 100%; \n"]);return ie=function(){return e},e}l.c.div(ie()),t.default=function(){return r.a.createElement(ae,null)}}}]);
//# sourceMappingURL=7.ad4fb39b.chunk.js.map