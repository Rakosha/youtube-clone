(this["webpackJsonphryhorii-youtube-clone"]=this["webpackJsonphryhorii-youtube-clone"]||[]).push([[0],{43:function(e,a,t){e.exports=t(64)},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),r=t(24),o=t.n(r),c=(t(48),t(49),t(41)),s=t(25),l=t.n(s),m=t(26),h=t.n(m),d=t(27),u=t.n(d),p=t(28),f=t.n(p),b=t(29),E=t.n(b),y=t(76),g=(t(50),t(13));var v=function(){var e=Object(i.useState)(""),a=Object(c.a)(e,2),t=a[0],r=a[1];return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"header__left"},n.a.createElement(l.a,null),n.a.createElement(g.b,{to:"/home"},n.a.createElement("img",{className:"header__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png",alt:"youtube-logo"}))),n.a.createElement("div",{className:"header__input"},n.a.createElement("input",{onChange:function(e){return r(e.target.value)},value:t,placeholder:"Search",type:"text"}),n.a.createElement(g.b,{to:"/search/".concat(t)},n.a.createElement(h.a,{className:"header__inputButton"}))),n.a.createElement("div",{className:"header__icons"},n.a.createElement(u.a,{className:"header__icon"}),n.a.createElement(f.a,{className:"header__icon"}),n.a.createElement(E.a,{className:"header__icon"}),n.a.createElement(y.a,{src:"https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.0-9/29573339_1846799815370055_3662978827016442340_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=klFsS6xiW3AAX-c4Bkp&_nc_ht=scontent.fyvr3-1.fna&oh=fc75699c4f628a774bc43873be834b09&oe=5FA9F88C",alt:"Avatar"})))};t(57),t(58);var w=function(e){var a=e.selected,t=e.Icon,i=e.title;return n.a.createElement("div",{className:"sidebarRow ".concat(a&&"selected")},n.a.createElement(t,{className:"sidebarRow__icon"}),n.a.createElement("h2",{className:"sidebarRow__title"},i))},_=t(30),x=t.n(_),H=t(31),M=t.n(H),N=t(32),W=t.n(N),D=t(33),I=t.n(D),B=t(34),O=t.n(B),j=t(35),J=t.n(j),q=t(36),Q=t.n(q),P=t(37),V=t.n(P),R=t(38),T=t.n(R);var L=function(){return n.a.createElement("div",{className:"sidebar"},n.a.createElement(w,{selected:!0,title:"Home",Icon:x.a}),n.a.createElement(w,{title:"Trending",Icon:M.a}),n.a.createElement(w,{title:"Subscription",Icon:W.a}),n.a.createElement("hr",null),n.a.createElement(w,{title:"Library",Icon:I.a}),n.a.createElement(w,{title:"History",Icon:O.a}),n.a.createElement(w,{title:"Your videos",Icon:J.a}),n.a.createElement(w,{title:"Watch Later",Icon:Q.a}),n.a.createElement(w,{title:"Liked videos",Icon:V.a}),n.a.createElement(w,{title:"Show more",Icon:T.a}),n.a.createElement("hr",null))};t(59);var Y=function(e){var a=e.image,t=e.title,i=e.channel,r=e.views,o=e.timestamp,c=e.channelImage;return n.a.createElement("div",{className:"videoCard"},n.a.createElement("img",{className:"videoCard__thumbnail",src:a,alt:""}),n.a.createElement("div",{className:"videoCard__info"},n.a.createElement(y.a,{className:"videoCard__avatar",alt:i,src:c}),n.a.createElement("div",{className:"videoCard__text"},n.a.createElement("h4",null,t),n.a.createElement("p",null,i),n.a.createElement("p",null,r," \xb7 ",o))))};t(60);var K=function(){return n.a.createElement("div",{className:"recommendedVideos"},n.a.createElement("h2",null,"Recommended"),n.a.createElement("div",{className:"recommendedVideos__videos"},n.a.createElement(Y,{title:"Test title for My Youtube Videos",views:"2.3M Views",timestamp:"3 days ago",channelImage:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80",channel:"Hryhorii Pertaia",image:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"}),n.a.createElement(Y,{title:"Test title for My Youtube Videos",views:"2.3M Views",timestamp:"3 days ago",channelImage:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80",channel:"Hryhorii Pertaia",image:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"}),n.a.createElement(Y,{title:"Test title for My Youtube Videos",views:"2.3M Views",timestamp:"3 days ago",channelImage:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80",channel:"Hryhorii Pertaia",image:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"}),n.a.createElement(Y,{title:"Test title for My Youtube Videos",views:"2.3M Views",timestamp:"3 days ago",channelImage:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80",channel:"Hryhorii Pertaia",image:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"}),n.a.createElement(Y,{title:"Test title for My Youtube Videos",views:"2.3M Views",timestamp:"3 days ago",channelImage:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80",channel:"Hryhorii Pertaia",image:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"}),n.a.createElement(Y,{title:"Test title for My Youtube Videos",views:"2.3M Views",timestamp:"3 days ago",channelImage:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80",channel:"Hryhorii Pertaia",image:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"}),n.a.createElement(Y,{title:"Test title for My Youtube Videos",views:"2.3M Views",timestamp:"3 days ago",channelImage:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80",channel:"Hryhorii Pertaia",image:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"}),n.a.createElement(Y,{title:"Test title for My Youtube Videos",views:"2.3M Views",timestamp:"3 days ago",channelImage:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80",channel:"Hryhorii Pertaia",image:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"})))},k=t(2),C=(t(61),t(40)),S=t.n(C),A=(t(62),t(39)),F=t.n(A);var X=function(e){var a=e.image,t=e.channel,i=e.subs,r=e.noOfVideos,o=e.description,c=e.verified;return n.a.createElement("div",{className:"channelRow"},n.a.createElement(y.a,{className:"channelRow__logo",src:a,alt:t}),n.a.createElement("div",{className:"channelRow__text"},n.a.createElement("h4",null,t," ",c&&n.a.createElement(F.a,null)),n.a.createElement("p",null,i," subscribers ",n.a.createElement("b",null,"\xb7")," ",r," videos"),n.a.createElement("p",null,o)))};t(63);var $=function(e){var a=e.views,t=e.subs,i=e.description,r=e.timestamp,o=e.channel,c=e.title,s=e.image;return n.a.createElement("div",{className:"videoRow"},n.a.createElement("img",{src:s,alt:""}),n.a.createElement("div",{className:"videoRow__text"},n.a.createElement("h3",null,c),n.a.createElement("p",{className:"videoRow__headline"},o," ",n.a.createElement("b",null,"\xb7")," ",n.a.createElement("span",{className:"videoRow__subs"},n.a.createElement("span",{className:"videoRow__subsNumber"},t)," Subscribers")," ",a," views ",n.a.createElement("b",null,"\xb7")," ",r),n.a.createElement("p",{className:"videoRow__description"},i)))};var z=function(){return n.a.createElement("div",{className:"searchPage"},n.a.createElement("div",{className:"searchPage__filter"},n.a.createElement(S.a,{className:""}),n.a.createElement("h2",null,"FILTER")),n.a.createElement("hr",null),n.a.createElement(X,{image:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80",channel:"Hryhorii Pertaia",verified:!0,subs:"1M",noOfVideos:382,description:"I am a description so be aware!"}),n.a.createElement("hr",null),n.a.createElement($,{views:"200K",subs:"300K",description:"I am a description so be aware!",timestamp:"2 months ago",channel:"Hryhorii Pertaia",title:"Hire Hryhorii Pertaia as a Lead Web Dev now!",image:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"}),n.a.createElement($,{views:"200K",subs:"300K",description:"I am a description so be aware!",timestamp:"2 months ago",channel:"Hryhorii Pertaia",title:"Hire Hryhorii Pertaia as a Lead Web Dev now!",image:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"}),n.a.createElement($,{views:"200K",subs:"300K",description:"I am a description so be aware!",timestamp:"2 months ago",channel:"Hryhorii Pertaia",title:"Hire Hryhorii Pertaia as a Lead Web Dev now!",image:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"}),n.a.createElement($,{views:"200K",subs:"300K",description:"I am a description so be aware!",timestamp:"2 months ago",channel:"Hryhorii Pertaia",title:"Hire Hryhorii Pertaia as a Lead Web Dev now!",image:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"}),n.a.createElement($,{views:"200K",subs:"300K",description:"I am a description so be aware!",timestamp:"2 months ago",channel:"Hryhorii Pertaia",title:"Hire Hryhorii Pertaia as a Lead Web Dev now!",image:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"}))};var G=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g.a,null,n.a.createElement(v,null),n.a.createElement(k.c,null,n.a.createElement(k.a,{path:"/search/:searchTerm"},n.a.createElement("div",{className:"app__page"},n.a.createElement(L,null),n.a.createElement(z,null))),n.a.createElement(k.a,{path:"/"},n.a.createElement("div",{className:"app__page"},n.a.createElement(L,null),n.a.createElement(K,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.a194448b.chunk.js.map