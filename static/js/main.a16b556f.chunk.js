(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},27:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAQlBMVEX39/e6urqtra23t7ewsLCysrK1tbXu7u68vLzv7+/7+/vY2Ni/v7/8/Pyrq6vg4ODMzMzT09Pj4+PIyMjo6OilpaXOEdeAAAAEQElEQVR4nO3b25KjKhiGYRQQBSLb3P+tDqjZTdAkM6myMN9zsNbBdKqa11/UVEsIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDPkNnev8SeJJFRmRjJz1YYnFODbpJ+719lL9JSalyfNeqnBmE+//N/BKXW034WfymCyUh0Lv0vRr0k6MPpZ7ZGEfKClaLN7JKgb5zxUQhCTsmhLxXS9jrx18N/M/XI/6itVcp7MQzD9BF5sKunnBap/XOCv3o0DaWpSLDp0qHyhNwGpPYcSwPzosF9i7uTJoS8i6Qz5m5C9l7R5z5sUByPeUCCtVOQ095L+tjUoE8NmtcrfmM8Ug897L2mT+UG/dTgW6irbRK+36Dp0aBpam3wxQS6ugbTnvbNBjSgwYEb0IsDN6Av6JDukZWzoele/KSr7VbxvQba+uV2mJDB2P54DdJWvt0gFSDpoTH6/E1DzM/bW7NQY4MmN9gaAuNTAGHSmeBspgTx/WqFzlTXYNrHthpoY/IMqMXUwRCh1yIcsEFvVD4PUgVzV8EJshah0gZpoWsJGuXEsBDXCjmCWNkZedx7TZ+a52C1QWddHG7iXQQS+VEa0O05UJbcNbiOgst7gi2eDTU2yNYapDHww6NbhCjKF1Sx95o+dW3QlVAVhr8tEdIlklhe+szBGqQdkYhHl9MhDQKJ7AcaaGcG8eQyCJE0pW71fZ+42cCG+NxguTo460konAwVfqeahpd2jSkm4FaLwhzMZ4NLG4J6bsArbUBXG4RSAhEvDcxRGuRz2HS8ZGUO5mtDngP2/Jmw95I+Jvlmg1BsMA9Cukv6hQbalq4Ly46Q9kR3kAZ8o0Hjnu4PZj43EOm6UJid2h4brw2KCXinQrlBPhncQOjzR1iVDRK60oDlp4Ki1MAQ3/5AA06fb5avDYQMhe2AVfd1IpFsswFLdwjFXdE4T3xpE2H1/VHf6UWDbmUQjCJSF8aAt4drwFlvTCmCF8QVdoO6G7AVbVBDIcIgVfkjra+vQZsisI0GrNWePEUgRLUrP37EBqztFSEPG2N6KrJrH6izQdJtNWBtG7yUlwz5sdD0K1PA2CiqbbCRIFfgWl2/IhNKs9UEbKzu0fnNBnkW2j5Yp2zQvF0vUHMD9arBnGGy/VPj3iv63NSgTQ3aLxlr+yuU3KD9boNzlQ0Srr6VoNI5+G4DigZjdX+V9t0GY0LruzSS05h/+X9tMF6kjZXzXltX47uhHzcYb85n3mm9vMpC5PRmz97r+ReSje81uB5w3nVNumVUxi9jX+kbPDcyrDe4O+DntsuTfnuZq/Z1PxA0nw2Gj4UjTps+v9eXJz072jt9NyKk42zt+XLER96kI27yER/ySX7UdT+QMhpDfH4qNHGQJ3m4lzjfkt/5/pEjDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwH/4Ayw5qzf07zNIAAAAASUVORK5CYII="},29:function(e,t,a){e.exports=a(49)},39:function(e,t,a){},41:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),l=a.n(o),i=a(51),c=a(16),s=a(14),u=a(11),m=a(10),p={filmovi:[],filtered:[],isLoaded:!1,password:""},d=(a(39),a(4)),A=a(5),h=a(7),v=a(6),f=a(8),E=(a(41),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=(new Date).toLocaleDateString("sr");return r.a.createElement("footer",null,r.a.createElement("p",null,"Danas je ",e," "))}}]),t}(n.Component)),b=a(53),g=a(52),j=a(50),O="https://baza-filmova.herokuapp.com/dodaj-film/",y="https://baza-filmova.herokuapp.com/obrisi-film/",S=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).deleteMovie=function(e){e.preventDefault();var t=a.props.podaci,n=t.naziv,r=t._id;window.confirm('Delete movie: "'.concat(n,'" ?'))&&fetch(y,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:r})}).then(function(e){return e.text()}).then(function(e){alert(e),window.location.reload()})},a}return Object(f.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props.podaci,t=e.naziv,a=e.godina,n=e.slika,o=this.props.loggedIn;return r.a.createElement("div",null,r.a.createElement("h3",null,t),r.a.createElement("div",{className:"image-holder"},o?r.a.createElement("span",{onClick:this.deleteMovie,className:"delete-btn",title:"Delete movie"},"X"):null,r.a.createElement("img",{src:n,alt:t})),r.a.createElement("p",null,a))}}]),t}(n.Component),C=a(12);function w(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;fetch(O,{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({naziv:e,godina:t,slika:a,comments:n})}).then(function(t){alert('Movie " '.concat(e.toUpperCase(),'" has been added to movie base. Thank you for updating!')),window.location.reload()}).catch(function(e){return alert("Do\u0161lo je do gre\u0161ke")})}a(21);var D=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={movieName:"",movieImg:"",movieYear:"",visible:!1},a.togle=function(){console.log("TOGLE"),a.setState({visible:!a.state.visible})},a.handleInput=function(e){var t=e.target;a.setState(Object(C.a)({},t.name,t.value)),console.log("STATE",a.state)},a.addMovie=function(e){e.preventDefault(),w(a.state.movieName,a.state.movieYear,a.state.movieImg)},a}return Object(f.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.state.visible;return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.togle},"Quick Add"),r.a.createElement("form",{onSubmit:this.addMovie,style:e?{display:"block"}:{display:"none"}},r.a.createElement("input",{name:"movieName",onChange:this.handleInput,placeholder:"Add title",required:!0}),r.a.createElement("input",{name:"movieYear",onChange:this.handleInput,placeholder:"Add year",required:!0}),r.a.createElement("input",{name:"movieImg",onChange:this.handleInput,placeholder:"Add img url",required:!0}),r.a.createElement("input",{type:"submit",value:"Confirm"})))}}]),t}(n.Component),k=a(26),I=a.n(k),N=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){a.props.setPassword(e.target.value)},a.onClickLogin=function(){"8fa0999540532f709fafa537818c17f1"===I()(a.props.password)?(localStorage.setItem("loggedIn","true"),alert("Uspesno ste se ulogovali"),window.location.reload()):alert("Uneli ste pogresnu lozinku")},a.onClickLogout=function(){localStorage.setItem("loggedIn","false"),alert("Izlogovali ste se"),window.location.reload()},a}return Object(f.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://baza-filmova.herokuapp.com/filmovi/").then(function(e){return e.json()}).then(function(t){e.props.setFiltered(t),e.props.setFilmovi(t),e.props.fetchSuccess()})}},{key:"render",value:function(){var e=this,t="true"===localStorage.getItem("loggedIn"),a=this.props.filtered.map(function(e){return r.a.createElement(j.a,{key:e._id,to:{pathname:"/singlemovie/".concat(e._id),state:e}},r.a.createElement(S,{podaci:e,loggedIn:t}))});return r.a.createElement("div",null,t?r.a.createElement("button",{onClick:this.onClickLogout},"Logout"):r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"password",placeholder:"Enter password",onChange:this.handleChange}),r.a.createElement("button",{onClick:this.onClickLogin},"Login")),r.a.createElement(D,null),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.props.sortByYearAsc},"Sort by year Asc"),r.a.createElement("button",{onClick:this.props.sortByYearDesc},"Sort by year Desc"),r.a.createElement("button",{onClick:this.props.sortAlpha},"Sort A-Z"),r.a.createElement("button",{onClick:this.props.sortAlphaZ},"Sort Z-A")),r.a.createElement("input",{type:"text",placeholder:"Search for movie",onChange:function(t){return e.props.searchMovie(t.target.value)}}),r.a.createElement("div",{className:"movies-wrapper"},this.props.isLoaded?null:"U\u010ditava se...",a))}}]),t}(n.Component);var z={setFilmovi:function(e){return{type:"SET_FILMOVI",payload:e}},setFiltered:function(e){return{type:"SET_FILTERED",payload:e}},setPassword:function(e){return{type:"SET_PASSWORD",payload:e}},fetchSuccess:function(){return{type:"FETCH_SUCCESS"}},sortByYearDesc:function(){return{type:"SORT_BY_YEAR_DESC"}},sortByYearAsc:function(){return{type:"SORT_BY_YEAR_ASC"}},sortAlpha:function(){return{type:"SORT_ALPHA"}},sortAlphaZ:function(){return{type:"SORT_ALPHA_Z"}},searchMovie:function(e){return{type:"SEARCH_MOVIE",fraza:e}}},L=Object(c.b)(function(e){return{filtered:e.filtered,isLoaded:e.isLoaded,password:e.password}},z)(N),T=(a(46),a(27)),M=a.n(T),R=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={movieName:"",movieImg:"",movieYear:""},a.handleInput=function(e){var t=e.target;a.setState(Object(C.a)({},t.name,t.value))},a.addMovie=function(e){e.preventDefault(),w(a.state.movieName,a.state.movieYear,a.state.movieImg)},a}return Object(f.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=""!==this.state.movieImg?this.state.movieImg:M.a;return r.a.createElement("form",{onSubmit:this.addMovie},r.a.createElement("h2",null,"Dodaj film"),r.a.createElement("input",{className:"input",name:"movieName",onChange:this.handleInput,placeholder:"Add title",required:!0}),r.a.createElement("input",{type:"number",className:"input",name:"movieYear",onChange:this.handleInput,placeholder:"Add year",required:!0}),r.a.createElement("input",{className:"input",name:"movieImg",onChange:this.handleInput,placeholder:"Add img url",required:!0}),r.a.createElement("div",{className:"imagePreviewDiv"},r.a.createElement("img",{className:"imagePreview",src:e,alt:this.state.movieName})),r.a.createElement("button",{type:"submit"},"Confirm"))}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleSubmit=function(e){e.preventDefault();var t=a.props.location.state,n=t.naziv,r=t.godina,o=t.slika,l=t.comments,i={user:e.target.ime.value,comment:e.target.komentar.value};w(n,r,o,l?Object(u.a)(l).concat([i]):[i])},a}return Object(f.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e;try{e=this.props.location.state.comments.map(function(e){return r.a.createElement("div",null,r.a.createElement("small",null,e.user),r.a.createElement("p",null,e.comment))})}catch(t){e=r.a.createElement("p",null,"Budite prvi koji \u0107e ostaviti komentar")}return r.a.createElement("div",null,r.a.createElement(j.a,{to:"/"},"< Back")," ",r.a.createElement(S,{podaci:this.props.location.state}),e,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Dodaj komentar"),r.a.createElement("label",null,"Ime:"),r.a.createElement("br",null),r.a.createElement("input",{name:"ime"}),r.a.createElement("br",null),r.a.createElement("label",null,"Komentar: "),r.a.createElement("br",null),r.a.createElement("textarea",{name:"komentar"}),r.a.createElement("br",null),r.a.createElement("button",null,"Submit")))}}]),t}(n.Component),Q=function(){return r.a.createElement("main",null,r.a.createElement(b.a,null,r.a.createElement(g.a,{exact:!0,path:"/",component:L}),r.a.createElement(g.a,{path:"/add",component:R}),r.a.createElement(g.a,{path:"/singlemovie/:id",component:B})))},U={color:"white"},Y=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("nav",null,r.a.createElement(j.a,{style:U,to:"/"},"Home")," ",r.a.createElement(j.a,{style:U,to:"/add"},"Add movie")),r.a.createElement("h1",null,"Baza filmova"))}}]),t}(n.Component),P=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Y,null),r.a.createElement(Q,null),r.a.createElement(E,{umanjenje:this.counterMin,uvecanje:this.counterMax}))}}]),t}(n.Component),V=Object(s.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILMOVI":return Object(m.a)({},e,{filmovi:t.payload});case"SET_FILTERED":return Object(m.a)({},e,{filtered:t.payload});case"FETCH_SUCCESS":return Object(m.a)({},e,{isLoaded:!0});case"SET_PASSWORD":return Object(m.a)({},e,{password:t.payload});case"SORT_BY_YEAR_DESC":var a=Object(u.a)(e.filtered).sort(function(e,t){return t.godina-e.godina});return Object(m.a)({},e,{filtered:a});case"SORT_BY_YEAR_ASC":var n=Object(u.a)(e.filtered).sort(function(e,t){return e.godina-t.godina});return Object(m.a)({},e,{filtered:n});case"SORT_ALPHA":var r=Object(u.a)(e.filtered).sort(function(e,t){var a=e.naziv.toLowerCase(),n=t.naziv.toLowerCase();return a<n?-1:a>n?1:0});return Object(m.a)({},e,{filtered:r});case"SORT_ALPHA_Z":var o=Object(u.a)(e.filtered).sort(function(e,t){var a=e.naziv.toLowerCase(),n=t.naziv.toLowerCase();return n<a?-1:n>a?1:0});return Object(m.a)({},e,{filtered:o});case"SEARCH_MOVIE":var l=e.filmovi.filter(function(e){return e.naziv.toLowerCase().includes(t.fraza.toLowerCase())});return Object(m.a)({},e,{filtered:l});default:return e}});l.a.render(r.a.createElement(c.a,{store:V},r.a.createElement(i.a,null,r.a.createElement(P,null))),document.getElementById("root"))}},[[29,2,1]]]);
//# sourceMappingURL=main.a16b556f.chunk.js.map