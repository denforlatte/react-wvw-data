(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e){e.exports=[{id:1001,name:"Anvil Rock",population:"Medium"},{id:1002,name:"Borlis Pass",population:"Medium"},{id:1003,name:"Yak's Bend",population:"Full"},{id:1004,name:"Henge of Denravi",population:"High"},{id:1005,name:"Maguuma",population:"VeryHigh"},{id:1006,name:"Sorrow's Furnace",population:"Medium"},{id:1007,name:"Gate of Madness",population:"Medium"},{id:1008,name:"Jade Quarry",population:"Full"},{id:1009,name:"Fort Aspenwood",population:"VeryHigh"},{id:1010,name:"Ehmry Bay",population:"Medium"},{id:1011,name:"Stormbluff Isle",population:"VeryHigh"},{id:1012,name:"Darkhaven",population:"High"},{id:1013,name:"Sanctum of Rall",population:"Medium"},{id:1014,name:"Crystal Desert",population:"VeryHigh"},{id:1015,name:"Isle of Janthir",population:"Medium"},{id:1016,name:"Sea of Sorrows",population:"High"},{id:1017,name:"Tarnished Coast",population:"Full"},{id:1018,name:"Northern Shiverpeaks",population:"High"},{id:1019,name:"Blackgate",population:"Full"},{id:1020,name:"Ferguson's Crossing",population:"Medium"},{id:1021,name:"Dragonbrand",population:"High"},{id:1022,name:"Kaineng",population:"Medium"},{id:1023,name:"Devona's Rest",population:"Medium"},{id:1024,name:"Eredon Terrace",population:"Medium"},{id:2001,name:"Fissure of Woe",population:"Medium"},{id:2002,name:"Desolation",population:"VeryHigh"},{id:2003,name:"Gandara",population:"VeryHigh"},{id:2004,name:"Blacktide",population:"Medium"},{id:2005,name:"Ring of Fire",population:"Medium"},{id:2006,name:"Underworld",population:"Medium"},{id:2007,name:"Far Shiverpeaks",population:"VeryHigh"},{id:2008,name:"Whiteside Ridge",population:"Medium"},{id:2009,name:"Ruins of Surmia",population:"Medium"},{id:2010,name:"Seafarer's Rest",population:"Full"},{id:2011,name:"Vabbi",population:"Medium"},{id:2012,name:"Piken Square",population:"VeryHigh"},{id:2013,name:"Aurora Glade",population:"High"},{id:2014,name:"Gunnar's Hold",population:"High"},{id:2101,name:"Jade Sea [FR]",population:"VeryHigh"},{id:2102,name:"Fort Ranik [FR]",population:"Medium"},{id:2103,name:"Augury Rock [FR]",population:"High"},{id:2104,name:"Vizunah Square [FR]",population:"VeryHigh"},{id:2105,name:"Arborstone [FR]",population:"Medium"},{id:2201,name:"Kodash [DE]",population:"Full"},{id:2202,name:"Riverside [DE]",population:"VeryHigh"},{id:2203,name:"Elona Reach [DE]",population:"VeryHigh"},{id:2204,name:"Abaddon's Mouth [DE]",population:"VeryHigh"},{id:2205,name:"Drakkar Lake [DE]",population:"VeryHigh"},{id:2206,name:"Miller's Sound [DE]",population:"Medium"},{id:2207,name:"Dzagonur [DE]",population:"Medium"},{id:2301,name:"Baruch Bay [SP]",population:"VeryHigh"}]},27:function(e,t,a){e.exports=a(39)},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(22),o=a.n(i),l=a(13);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(12),c=a(11),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MATCHUP_DATA_PENDING":return Object(c.a)({},e,{fetching:!0});case"FETCH_MATCHUP_DATA_FULFILLED":return Object(c.a)({},e,{firstFetchSuccess:!0,fetching:!1});case"SELECT_NEW_SERVER":return Object(c.a)({},e,{firstFetchSuccess:!1,selectedServer:t.payload});default:return e}},d=a(10);function p(e){var t;for(t=0;t<d.length;t++)if(d[t].id===e)return d[t].name;return e.toString()}function m(e){var t,a=e.toLowerCase();for(t=0;t<d.length;t++)if(d[t].name.toLowerCase()===a)return d[t].id;return e}function h(e,t){var a,n="";for(a=0;a<t.length;a++)t[a]!==e&&(""!==n&&(n="& "),n+=p(t[a]));var r=p(e);return t.length>1&&(r="".concat(r," with ").concat(n)),r}function v(e,t){return Number(Math.round(e+"e"+t)+"e-"+t)}function y(e){if(e>=1e4){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),t.join(".")}return e}var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MATCHUP_DATA_FULFILLED":t.payload.worlds||console.warn("Server code not found.");var a=t.payload.skirmishes[t.payload.skirmishes.length-1].scores;return Object(c.a)({},e,{red:Object(c.a)({},e.red,{name:h(t.payload.worlds.red,t.payload.all_worlds.red),kills:t.payload.kills.red,deaths:t.payload.deaths.red,ratio:v(t.payload.kills.red/t.payload.deaths.red,2),skirmishScore:a.red,victoryPoints:t.payload.victory_points.red}),green:Object(c.a)({},e.green,{name:h(t.payload.worlds.green,t.payload.all_worlds.green),kills:t.payload.kills.green,deaths:t.payload.deaths.green,ratio:v(t.payload.kills.green/t.payload.deaths.green,2),skirmishScore:a.green,victoryPoints:t.payload.victory_points.green}),blue:Object(c.a)({},e.blue,{name:h(t.payload.worlds.blue,t.payload.all_worlds.blue),kills:t.payload.kills.blue,deaths:t.payload.deaths.blue,ratio:v(t.payload.kills.blue/t.payload.deaths.blue,2),skirmishScore:a.blue,victoryPoints:t.payload.victory_points.blue})});case"UPDATE_PPT":default:return e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1?arguments[1]:void 0).type,e},g=Object(s.c)({displayState:u,serverOverviewState:f,activityAnalyticsState:E}),b=a(24),S=a.n(b),w=a(26),k=Object(s.d)(g,{displayState:{selectedServer:"",firstFetchSuccess:!1,fetching:!1},serverOverviewState:{red:{name:"Red Server",ppt:999,kills:0,deaths:0,ratio:0,skirmishScore:0,victoryPoints:0},green:{name:"Green Server",ppt:999,kills:0,deaths:0,ratio:0,skirmishScore:0,victoryPoints:0},blue:{name:"Blue Server",ppt:999,kills:0,deaths:0,ratio:0,skirmishScore:0,victoryPoints:0}},activityAnalyticsState:{}},Object(s.a)(S.a,Object(w.a)())),O=a(41),j=a(42),M=a(43),D=a(4),F=a(5),H=a(7),C=a(6),N=a(8),R=a(40),_=function(e){function t(){return Object(D.a)(this,t),Object(H.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.props,t=e.buttonText,a=e.dropdownContent;return r.a.createElement("div",{className:"dropdown-container"},r.a.createElement("button",{className:"btn-dropdown btn-white"},t),r.a.createElement("div",{className:"dropdown-content"},a))}}]),t}(r.a.Component),P=function(e){function t(e){var a;return Object(D.a)(this,t),(a=Object(H.a)(this,Object(C.a)(t).call(this,e))).state={serverList:[],filteredServers:[]},a.handleClick=a.handleClick.bind(),a}return Object(N.a)(t,e),Object(F.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.continent,a=[];"EU"===t?a=d.filter(function(e){return e.id>=2e3}):"NA"===t?a=d.filter(function(e){return e.id<2e3}):(a=d,console.warn("Continent for ServerSelector not set correctly")),this.setState({filteredServers:a},function(){return e.compileDropdownMenu()})}},{key:"componentDidUpdate",value:function(e,t,a){e.selectedServer!==this.props.selectedServer&&this.compileDropdownMenu()}},{key:"render",value:function(){return r.a.createElement(_,{buttonText:this.props.continent,dropdownContent:this.state.serverList})}},{key:"handleClick",value:function(){this.setState({serverList:[]})}},{key:"compileDropdownMenu",value:function(){var e,t=this,a=[];for(e=0;e<this.state.filteredServers.length;e++){var n=this.state.filteredServers[e];n.id==this.props.selectedServer?a.push(r.a.createElement(R.a,{to:"#",key:"dropdown "+n.id,className:"dropdown-active"},n.name)):a.push(r.a.createElement(R.a,{to:"/"+n.id,key:"dropdown "+n.id,onClick:function(){return t.handleClick()}},n.name))}this.setState({serverList:a})}}]),t}(r.a.Component),T=function(e){function t(){return Object(D.a)(this,t),Object(H.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.props.displayState,t=e.selectedServer,a=e.firstFetchSuccess;return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,r.a.createElement(R.a,{to:"/",className:"reset-a"},"Guild Wars 2 WvW Intel")),r.a.createElement("div",null,r.a.createElement("div",{className:"btn-container"},r.a.createElement("br",null),r.a.createElement("h2",null,"Select world:\xa0"),r.a.createElement(P,{continent:"EU",selectedServer:t,firstFetchSuccess:a}),r.a.createElement("br",null),r.a.createElement(P,{continent:"NA",selectedServer:t,firstFetchSuccess:a}))))}}]),t}(r.a.Component),A=Object(l.b)(function(e){return{displayState:e.displayState}})(T),V=function(e){function t(){return Object(D.a)(this,t),Object(H.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",null,"Introduction"),r.a.createElement("p",null,"Welcome to my Guild Wars 2 world versus world intelligence web app."),r.a.createElement("p",null,'This app will show you the key details of the week long match up between the selected world (game server) and its two opponents. Low population worlds are often linked with other worlds and where this is the case the app with display "Primary Server" with "Linked Servers".'),r.a.createElement("p",null,"The long term goal for this app is to show how active each of the four maps in the match up are without having to log in. My rough plan for this is to check which objectives have been won and lost in the last five minutes and watch the kills/deaths of the map and graph the changes."),r.a.createElement("p",null,"Whether or not that will give an accurate measure of map activity remains to be seen but it should be interesting none the less and I'm having fun making this..."),r.a.createElement("p",null,"So select a server and see how the match up is going!"))}}]),t}(r.a.Component),L=function(e){function t(){return Object(D.a)(this,t),Object(H.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.colour,n=e.ppt,i=e.kills,o=e.deaths,l=e.ratio,s=e.score,c=e.victoryPoints,u="card ".concat(a);return r.a.createElement("div",{className:u},r.a.createElement("div",{className:"row-fixed"},r.a.createElement("h2",null,t),r.a.createElement("h2",{className:"ppt"},"+",n," PPT")),r.a.createElement("div",{className:"row-fixed"},r.a.createElement("div",null,r.a.createElement("h3",null,"Kills"),r.a.createElement("p",null,i)),r.a.createElement("div",null,r.a.createElement("h3",null,"Deaths"),r.a.createElement("p",null,o)),r.a.createElement("div",null,r.a.createElement("h3",null,"Ratio"),r.a.createElement("p",null,l))),r.a.createElement("div",{className:"row-fixed"},r.a.createElement("div",null,r.a.createElement("h3",null,"Skirmish Score"),r.a.createElement("p",null,s)),r.a.createElement("div",null,r.a.createElement("h3",null,"Victory Points"),r.a.createElement("p",null,c))))}}]),t}(r.a.Component),W=(r.a.Component,function(e){function t(e){var a;return Object(D.a)(this,t),(a=Object(H.a)(this,Object(C.a)(t).call(this,e))).state={currentServer:""},a}return Object(N.a)(t,e),Object(F.a)(t,[{key:"componentDidMount",value:function(){var e=m(this.props.match.params.serverName);this.updateMatchupData(e),this.setState({currentServer:e}),k.dispatch({type:"SELECT_NEW_SERVER",payload:e})}},{key:"componentDidUpdate",value:function(){var e=m(this.props.match.params.serverName);return e!==this.state.currentServer&&(this.setState({currentServer:e}),this.updateMatchupData(e),k.dispatch({type:"SELECT_NEW_SERVER",payload:e})),!0}},{key:"componentWillUnmount",value:function(){k.dispatch({type:"SELECT_NEW_SERVER",payload:""})}},{key:"render",value:function(){var e=this.props.displayState;if(!1===e.firstFetchSuccess||!0===e.fetching)return r.a.createElement("p",null,"Loading...");var t=this.compileServerOverviews();return r.a.createElement("div",null,r.a.createElement("div",{className:"row-responsive"},t),r.a.createElement("div",{className:"bar"}))}},{key:"updateMatchupData",value:function(e){k.dispatch({type:"FETCH_MATCHUP_DATA",payload:fetch("https://api.guildwars2.com/v2/wvw/matches?world=".concat(e)).then(function(e){return e.json()})})}},{key:"compileServerOverviews",value:function(){var e,t=this.props.serverOverview,a=Object.getOwnPropertyNames(t),n=[];for(e=0;e<3;e++){var i=a[e],o=t[i];n.push(r.a.createElement(L,{key:i,name:o.name,colour:i,ppt:o.ppt,kills:y(o.kills),deaths:y(o.deaths),ratio:y(o.ratio),score:y(o.skirmishScore),victoryPoints:o.victoryPoints}))}return n}}]),t}(r.a.Component)),U=Object(l.b)(function(e){return{displayState:e.displayState,serverOverview:e.serverOverviewState}})(W),B=r.a.createElement(O.a,{basename:"/react-wvw-data"},r.a.createElement(n.Fragment,null,r.a.createElement(A,null),r.a.createElement(j.a,null,r.a.createElement(M.a,{path:"/",component:V,exact:!0}),">",r.a.createElement(M.a,{path:"/:serverName",component:U}),r.a.createElement(M.a,{component:V}))));a(37);o.a.render(r.a.createElement(l.a,{store:k},B),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.7467dd8d.chunk.js.map