(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(29)},22:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(9),i=n.n(l),r=(n(22),n(5)),o=n(31),u=(n(23),n(12));var s=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),i=Object(r.a)(l,2),s=i[0],m=i[1],R=Object(a.useState)("Filter Results..."),p=Object(r.a)(R,2),E=p[0],v=p[1];return a.React.createElement("div",{className:"App"},a.React.createElement("h1",null,"Dictionary"),a.React.createElement("div",{className:"searchBox"},a.React.createElement("input",{type:"text",placeholder:"Search...",onChange:function(e){m(e.target.value)}}),a.React.createElement("button",{onClick:function(){o.a.get("https://api.dictionaryapi.dev/api/v2/entries/en/".concat(s)).then(function(e){c(e.data[0])})}}," ",a.React.createElement(u.a,{size:"20px"}))),a.React.createElement("div",{className:"Filter"},a.React.createElement("select",{value:E,onChange:function(e){v(e.target.value)}},a.React.createElement("option",{value:"Filter Results..."},"Filter Results..."),a.React.createElement("option",{value:"noun"},"noun"),a.React.createElement("option",{value:"pronoun"},"pronoun"),a.React.createElement("option",{value:"adjective"},"adjective"),a.React.createElement("option",{value:"verb"},"verb"),a.React.createElement("option",{value:"adverb"},"adverb"),a.React.createElement("option",{value:"conjunction"},"conjunction"),a.React.createElement("option",{value:"interjection"},"interjection"),a.React.createElement("option",{value:"preposition"},"preposition"))),n&&a.React.createElement("div",{className:"showResults"},function(){if("Filter Results..."!==E)return function(){var e=[];e[0]=a.React.createElement("div",null,a.React.createElement("h2",null,n.word," "),a.React.createElement("h5",null,n.phonetic));for(var t=1,c=0;c<n.meanings.length;c++)n.meanings[c].partOfSpeech===E&&(e[t]=a.React.createElement("div",{className:"definition"},a.React.createElement("h4",null,"Parts of speech:"),a.React.createElement("p",null,n.meanings[c].partOfSpeech),a.React.createElement("h4",null,"Definition:"),a.React.createElement("p",null,n.meanings[c].definitions[0].definition)),t++);return 1===e.length?a.React.createElement("p",null,"No Results Found"):a.React.createElement("div",null,a.React.createElement("p",null,"Showing ",e.length-1," Result(s)"),e)}();var e=[];e[0]=a.React.createElement("div",null,a.React.createElement("h2",null,n.word," "),a.React.createElement("h5",null,n.phonetic));for(var t=0;t<n.meanings.length;t++)e[t+1]=a.React.createElement("div",{className:"definition"},a.React.createElement("h4",null,"Parts of speech:"),a.React.createElement("p",null,n.meanings[t].partOfSpeech),a.React.createElement("h4",null,"Definition:"),a.React.createElement("p",null,n.meanings[t].definitions[0].definition));return 1===e.length?a.React.createElement("p",null,"No Results Found"):a.React.createElement("div",null,a.React.createElement("p",null,"Showing ",e.length-1," Result(s)"),e)}()))},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),l(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null))),m()}},[[13,1,2]]]);
//# sourceMappingURL=main.6bef48cf.chunk.js.map