var canvaswidth=970;var subnavwidth="190px";var timer=200;var wheretostartleftalign=6;var effectDuration=100;var thirdlevelduration=120;var topoffsetID="header_wrapper";var MainNav=[];var MainNavInit=false;function initNavEvents(){var d=null;var e=null;for(var c=0;c<MainNav.length;c++){if(!MainNav[c].submenu){continue}MainNav[c].submenu.style.width=subnavwidth}for(var c=0;c<MainNav.length;c++){function f(k){var a=k.data;clearTimeout(a.outtimer);clearTimeout(a.subnavtimer);a.overtimer=setTimeout(function(){a.parentItem.className="main_nav_wrapperOn";if(a.submenu&&a.submenu.style.display!="block"){a.submenu.style.visibility="visible";a.parentItem.className="main_nav_wrapperOn";a.submenu.style.zIndex=1;jQuery("#main_nav").css("z-index",600);a.parentItem.style.zIndex=999;jQuery(a.submenu).show("blind",{},effectDuration,function(){a.parentItem.style.position="relative";jQuery("#main_nav").css("position","relative");a.submenu.style.zIndex=1})}else{if(a.submenu==null){a.parentItem.className="main_nav_wrapperOn";jQuery("#main_nav").css("z-index",600);a.parentItem.style.zIndex=999;a.parentItem.style.position="relative";jQuery("#main_nav").css("position","relative")}}},timer)}jQuery(MainNav[c].parentItem).bind("mouseover",MainNav[c],f);function g(k){var a=k.data;clearTimeout(a.overtimer);a.parentItem.className="";a.outtimer=setTimeout(function(){if(a.submenu&&a.submenu.style.display!="none"){a.submenu.style.zIndex="0";jQuery("#main_nav").css("z-index",5);jQuery(a.submenu).hide("blind",{},effectDuration)}else{if(a.submenu==null){jQuery("#main_nav").css("z-index",5)}}},timer)}jQuery(MainNav[c].parentItem).bind("mouseout",MainNav[c],g)}for(var c=0;c<MainNav.length;c++){if(MainNav[c].submenu){function h(k){var a=k.data;a.parentItem.className="main_nav_wrapperOn";a.submenu.style.visibility="visible";a.submenu.style.display="block";clearTimeout(a.subnavtimer);clearTimeout(a.outtimer)}jQuery(MainNav[c].submenu).bind("mouseover",MainNav[c],h);function b(k){var a=k.data;a.subnavtimer=setTimeout(function(){a.parentItem.className="";jQuery("#main_nav").css("z-index",5);jQuery(a.submenu).hide("blind",{},effectDuration,function(){a.submenu.style.visibility="hidden";a.submenu.style.display="none"})},timer)}jQuery(MainNav[c].submenu).bind("mouseout",MainNav[c],b)}}}function setSubnavLeft(f){var o=jQuery("#main_nav a, #sidebar a");var b=null;var n=(jQuery("#body").length>0?jQuery("#body"):jQuery("#home")).width();var c=(jQuery("#body").length>0?jQuery("#body"):jQuery("#home")).height();var h={width:n,height:c};if(h.width<canvaswidth){h.width=canvaswidth}var d=h.width/2;var p=d-canvaswidth/2;var e=[];for(var l=0;l<o.length;l++){var q=o.eq(l).outerWidth();e.push(q)}e.reverse();var q=0;var g=0;var k=0;for(var l=0;l<(e.length-f);l++){q=q+e[l];if(l>(e.length-wheretostartleftalign-1)){g=0}else{g=e[l]-parseInt(subnavwidth)-1}}for(var l=0;l<e.length;l++){k=k+e[l]}p=p-q+g-1+k-5+(45*f);return p}function reposNav(){if(!MainNavInit){return}var d=jQuery("#main_nav a");var a=0;for(var b=0;b<d.length;b++){if(MainNav[b].submenu){MainNav[b].submenu.style.left=setSubnavLeft(b)+"px"}++a}for(var b=0;b<MainNav.length;b++){if(MainNav[b].thirdLvL){for(var c=0;c<MainNav[b].thirdLvL.length;c++){MainNav[b].thirdLvL[c].thirdmenuNode.style.left=MainNav[b].thirdLvL[c].thirdmenuleft+"px";MainNav[b].thirdLvL[c].thirdmenuNode.style.top=MainNav[b].thirdLvL[c].thirdmenutop+"px"}}}}function initNavPos(){jQuery("#subnav_wrapper").css("top",(jQuery("#header_wrapper").height()+33)+"px");var d=jQuery("#main_nav a");for(var c=0;c<d.length;c++){var b={parentItem:null,submenu:null,submenuleft:null,overtimer:null,outtimer:null,subnavtimer:null};var a=d[c].id+"_subnav";if(jQuery("#"+a).length>0){jQuery("#"+a+" *").filter(function(){return(this.innerHTML=="")}).remove();b.parentItem=d[c];b.submenu=jQuery("#"+a)[0];if(jQuery("#"+a+" div").length>0){b.thirdLvL=[]}MainNav.push(b)}else{b.parentItem=d[c];b.submenu=null;b.thirdLvL=null;MainNav.push(b)}}MainNavInit=true}function initNav(){initNavPos();reposNav();initNavEvents();jQuery("#Communities_subnav").width("385px")}function initListPopups(b){for(var a=0;a<b.childNodes.length;a++){var c=b.childNodes[a];if(c.nodeName=="LI"){c.onmouseover=function(){this.className+=" over"};c.onmouseout=function(d){this.className=this.className.replace(" over","")}}initListPopups(c)}}function initMenus(){var b=document.getElementsByTagName("div");if(b){if(b.length>0){for(var a=0;a<b.length;a++){if(b[a].className=="primary-menu"){initListPopups(b[a])}}}}}startList=function(){if(!/MSIE (5|6)/.test(navigator.userAgent)){return}if(document.all&&document.getElementById){navRoot=document.getElementById("primarynav");if(navRoot){initListPopups(navRoot)}}initMenus()};initPopups=function(){var a=document.getElementById("channels");if(a){a=a.getElementsByTagName("a")}if(a){for(var b=0;b<a.length;b++){if(a[b].className=="popupLink"){if(!a[b].onclick){a[b].onclick=function(){var g=800;var d=600;var c=1;var f=1;var e=1;var h=this.href;var k=this.target;if(k=="_blank"||k==""){k="default"}if(k=="wDownloadHelp"){g=640;d=480;e=0}if(k=="wForm"){g=640;d=480;c=0;e=0}if(k=="wDownload"){e=0}popup(h,k,g,d,c,f,e);return false}}}}}};initFilter=function(){var e=document.getElementById("langfilter");if(e){e.style.display="none";var d=document.getElementsByTagName("pre");if(d){if(d.length>0){var a=new Array();for(var h=0;h<d.length;h++){var b=d[h].attributes.item("language");if(b){if(b.specified&&b.name=="language"&&b.value.length>0){langName=b.value;langFound=false;for(j=0;j<a.length;j++){if(a[j]==langName){langFound=true;break}}if(!langFound){a[a.length]=langName}}}}if(a.length>1){a=a.sort();e.style.display="";if(e.tagName=="DIV"){e.style.display="block";jQuery("#article-inner-div").css("margin-left","28px")}var f=document.getElementById("langfiltertable");for(j=a.length-1;j>=0;j--){var l=f.insertRow(0);var g=l.insertCell(0);var k=a[j];if(k.indexOf("lt")==0){k=k.substr(2)}if(k=="CSharp"){k="C#"}g.innerHTML="<a>"+k+"</a>";var c=g.getElementsByTagName("a");c[0].href="javascript:showLanguage('"+a[j]+"', '"+k+"');"}}}}}};execOnLoad=function(){startList();initPopups();initFilter()};window.onload=execOnLoad;function popup(g,a,n,e,l,b,d,k){var c="";if(l){l="yes"}else{l="no"}if(b){b="yes"}else{b="no"}if(d){d="yes"}else{d="no"}if(!k){k="no"}else{k="yes"}c="width="+n+",height="+e+",directories=no,location="+k+",menubar="+k+",resizable="+b+",scrollbars="+l+",status="+d+",toolbar="+k;var f=window.open(g,a,c);f.focus()}function makeNewWindowLogin(a){popup(a,"newWindow",800,600,1,1,1,1)}function setCookie(c,e,a,g,d,f){if(a){if(!isNaN(parseInt(a))){var b=new Date();b.setTime(b.getTime()+(a*24*60*60*1000));a=b}a="; expires="+a.toGMTString()}else{a=""}if(!g){g=""}document.cookie=c+"="+escape(e)+a+"; path="+g}function getCookie(b){var e=b+"=";var a=document.cookie.split(";");for(var d=0;d<a.length;d++){var f=a[d];while(f.charAt(0)==" "){f=f.substring(1,f.length)}if(f.indexOf(e)==0){return unescape(f.substring(e.length,f.length))}}return null}function delCookie(a){createCookie(a,"",-1)}function rememberWW(b,d){var c=90;var a=document.getElementById("remember");if((a&&a.checked)||d){setCookie("preferredCountry",b,c,"/")}return false}function toggleImage(b,d){var c=1;var a=document.getElementById(b+c);while(a){if(d!=c){a.style.visibility="hidden"}a=document.getElementById(b+(++c))}document.getElementById(b+d).style.visibility="visible"}function showLanguage(f,a){var d=document.getElementById("langfiltername");if(d){d.innerHTML="["+a+"]"}var e=document.getElementsByTagName("pre");if(e){if(e.length>0){for(var c=0;c<e.length;c++){var b=e[c].attributes.item("language");if(b){if(b.specified&&b.name=="language"&&b.value.length>0){langName=b.value;if(f==""||langName==f){e[c].style.display=""}else{e[c].style.display="none"}}}}}}hideLangFilter()}var docClick=null;function showLangFilter(){var a=document.getElementById("langfiltertable");if(a){a.style.display="";docClick=document.onclick;document.onclick=function(b){outsideFilterClick(b)}}}function hideLangFilter(){var a=document.getElementById("langfiltertable");if(a){a.style.display="none";document.onclick=docClick}}function outsideFilterClick(b){b=b||window.event;var a=b.target||b.srcElement;while(a.id!="langfilter"&&a.parentNode){a=a.parentNode}if(a.id!="langfilter"){hideLangFilter()}}function showElement(a){var b=document.getElementById(a);b.style.visibility="visible"}function hideElement(a){var b=document.getElementById(a);b.style.visibility="hidden"}function highlightLinkBar(c){var d=document.getElementById("linkbar");if(!d){return}var o=location.pathname;if(o.substr(0,c.length)==c){o=o.substr(c.length)}var p=getChildElementsByTagName(d,"table")[0];p=getChildElementsByTagName(p,"tbody")[0];p=getChildElementsByTagName(p,"tr")[0];var h=getChildElementsByTagName(p,"td");var n=null;var r=0;for(var k=0;k<h.length;++k){var f=h[k];var e=getChildElementsByTagName(f,"a");if(e.length<1){continue}var q=e[0];var b=q.pathname;if(b.length>0&&b[0]!="/"){b="/"+b}if(b.length>0&&b[b.length-1]=="/"){b=b.substr(0,b.length-1)}var g=b.indexOf("/",1);var l;if(g>-1){l=b.substr(g)}else{l=b}if(o.substr(0,b.length)==b){if(b.length>r){n=f;r=b.length}}else{if(o.substr(0,l.length)==l){if(l.length>r){n=f;r=l.length}}}}if(n){n.className+=" hovered"}}function addEvent(b,a,c){if(window.addEventListener){b.addEventListener(a,c,false)}else{if(window.attachEvent){b.attachEvent("on"+a,c)}}}function deleteEvent(b,a,c){if(window.removeEventListener){b.removeEventListener(a,c,false)}else{if(window.detachEvent){b.detachEvent("on"+a,c)}}}function getScreenRect(b){var a={};a.width=b.offsetWidth;a.height=b.offsetHeight;a.left=0;a.top=0;while(b){a.left+=b.offsetLeft;a.top+=b.offsetTop;if(b.offsetParent){a.left-=b.scrollLeft;a.top-=b.scrollTop}b=b.offsetParent}a.right=a.left+a.width;a.bottom=a.top+a.height;return a}function hideShowImage(b,a){spanElement=document.getElementById(b);imgElement=document.getElementById(a);if(imgElement.style.display=="none"){imgElement.style.display="";spanElement.innerHTML="Hide image";spanElement.className="imagehide"}else{imgElement.style.display="none";spanElement.innerHTML="Show image";spanElement.className="imageshow"}}function hideShowElement(b,a){spanElement=document.getElementById(b);targetElement=document.getElementById(a);if(targetElement.style.display=="none"){spanElement.title="Collapse section";spanElement.className=spanElement.className.replace("sectionexpand","sectioncollapse");jQuery(targetElement).slideDown(250)}else{jQuery(targetElement).slideUp(250);spanElement.title="Expand section";spanElement.className=spanElement.className.replace("sectioncollapse","sectionexpand")}}function collapseAll(){var pc=document.getElementById("primary-channel");if(!pc){pc=document.getElementById("article-div")}var items=pc.getElementsByTagName("span");for(var i=0;i<items.length;++i){if(items[i].className.indexOf("sectioncollapse")>-1){var ah=items[i].getElementsByTagName("A")[0].href;if(ah.substr(0,11)=="javascript:"){ah=ah.substr(11);eval(unescape(ah))}}}}function expandAll(){var pc=document.getElementById("primary-channel");if(!pc){pc=document.getElementById("article-div")}var items=pc.getElementsByTagName("span");for(var i=0;i<items.length;++i){if(items[i].className.indexOf("sectionexpand")>-1){var ah=items[i].getElementsByTagName("A")[0].href;if(ah.substr(0,11)=="javascript:"){ah=ah.substr(11);eval(unescape(ah))}}}}function getChildElementsByTagName(d,b){var a=new Array();var c=d.firstChild;while(c){if(c.nodeType==1){if(c.tagName.toUpperCase()==b.toUpperCase()){a.push(c)}}c=c.nextSibling}return a}function collapseAllFeatures(featuresDiv){var table=getChildElementsByTagName(document.getElementById(featuresDiv),"table")[1];var tbody=table.getElementsByTagName("tbody")[0];var rows=getChildElementsByTagName(tbody,"tr");for(var i=0;i<rows.length;++i){var td=rows[i].getElementsByTagName("td")[0];var span=td.getElementsByTagName("h2")[0];span=span.getElementsByTagName("span")[0];span=span.getElementsByTagName("span")[0];if(span.className=="sectioncollapse"){var ah=span.getElementsByTagName("A")[0].href;if(ah.substr(0,11)=="javascript:"){ah=ah.substr(11);eval(unescape(ah))}}var list=getChildElementsByTagName(td.getElementsByTagName("div")[0].getElementsByTagName("ul")[0],"li");for(var j=0;j<list.length;++j){var span=list[j].getElementsByTagName("span")[0];if(span.className=="sectioncollapse"){var ah=span.getElementsByTagName("A")[0].href;if(ah.substr(0,11)=="javascript:"){ah=ah.substr(11);eval(unescape(ah))}}}}}function expandAllFeatures(featuresDiv){var table=getChildElementsByTagName(document.getElementById(featuresDiv),"table")[1];var tbody=table.getElementsByTagName("tbody")[0];var rows=getChildElementsByTagName(tbody,"tr");for(var i=0;i<rows.length;++i){var td=rows[i].getElementsByTagName("td")[0];var span=td.getElementsByTagName("h2")[0].getElementsByTagName("span")[0].getElementsByTagName("span")[0];if(span.className=="sectionexpand"){var ah=span.getElementsByTagName("A")[0].href;if(ah.substr(0,11)=="javascript:"){ah=ah.substr(11);eval(unescape(ah))}}var list=getChildElementsByTagName(td.getElementsByTagName("div")[0].getElementsByTagName("ul")[0],"li");for(var j=0;j<list.length;++j){var span=list[j].getElementsByTagName("span")[0];if(span.className=="sectionexpand"){var ah=span.getElementsByTagName("A")[0].href;if(ah.substr(0,11)=="javascript:"){ah=ah.substr(11);eval(unescape(ah))}}}}}function showExpandCollapseAll(){var e=false;var c=document.getElementById("docsectionheader1")||document.getElementById("docsectionheader2")||document.getElementById("docsectionheader3");a=document.getElementById("primary-channel");if(!a){return}a=a.getElementsByTagName("p");for(d=0;d<a.length;++d){f=a[d];if(f.className=="new"||f.className=="enhanced"){e=true;break}}if(c||e){var b=(/MSIE (5|6)/.test(navigator.userAgent));document.getElementById("primary-channel").style.padding="0 20px 0 42px";document.getElementById("primary-channel").style.position="relative";if(c){document.getElementById("expand-all").style.display="inline";document.getElementById("collapse-all").style.display="inline";document.getElementById("expand-collapse-all").style.display="block";if(b){document.getElementById("expand-collapse-all").style.setExpression("left","2 - parentNode.offsetLeft")}var d,f,a=document.getElementById("primary-channel").getElementsByTagName("span");for(d=0;d<a.length;++d){f=a[d];if(f.className=="toclink"||((f.className=="sectioncollapse"||f.className=="sectionexpand")&&f.id.substr(0,16)=="docsectionheader")){f.className+=" sectiongutter";if(b){if(f.className.indexOf("toclink")>-1){f.style.setExpression("left","11 - parentNode.offsetLeft")}else{f.style.setExpression("left","25 - parentNode.offsetLeft")}}}}}a=document.getElementById("primary-channel").getElementsByTagName("p");for(d=0;d<a.length;++d){f=a[d];if(f.className=="new"||f.className=="enhanced"){f.style.left="-40px"}}}}function getCategoryRowLevel(b){var a=b.className.indexOf(" level");return parseInt(b.className.substr(a+6))}function hideShowForumCategory(f){var e=document.getElementById(f);var c=getCategoryRowLevel(e);var b=document.getElementById(f+"CatLink");var d=(b.className!="jive-collapsecategory");while(e=e.nextSibling){if(e.tagName=="TR"){if(e.className.indexOf("categoryrow")>-1){if(getCategoryRowLevel(e)<=c){break}else{if(d){document.getElementById(e.id+"CatLink").className="jive-collapsecategory";document.getElementById(e.id+"ForumLink").className="jive-collapseforums"}else{document.getElementById(e.id+"CatLink").className="jive-expandcategory";document.getElementById(e.id+"ForumLink").className="jive-expandforums"}}}if(d){e.style.display=""}else{e.oldDisplay=e.style.display;e.style.display="none"}}}if(!d){b.className="jive-expandcategory";if(document.getElementById(f+"ForumLink")){document.getElementById(f+"ForumLink").className="jive-expandforums"}}else{b.className="jive-collapsecategory";if(document.getElementById(f+"ForumLink")){document.getElementById(f+"ForumLink").className="jive-collapseforums"}}}function hideShowForumCategoryForums(k){var h=document.getElementById(k);var e=getCategoryRowLevel(h);var c=document.getElementById(k+"ForumLink");var g=(c.className!="jive-collapseforums");var f=false;var b=e;while(h=h.nextSibling){if(h.tagName=="TR"){var d=(h.className.indexOf("categoryrow")>-1);if(d){b=getCategoryRowLevel(h);if(b>e){f=true}if(b<=e){break}else{if(b>(e+1)){continue}}if(!g){document.getElementById(h.id+"CatLink").className="jive-expandcategory";document.getElementById(h.id+"ForumLink").className="jive-expandforums"}}if(g&&(d||b==e)){h.style.display=""}else{h.oldDisplay=h.style.display;h.style.display="none"}}}if(!g){c.className="jive-expandforums";document.getElementById(k+"CatLink").className="jive-expandcategory"}else{c.className="jive-collapseforums";if(!f){document.getElementById(k+"CatLink").className="jive-collapsecategory"}}}function showHeaders(b){var a=document.getElementById("jive-message-headers-"+b);if(a.className.indexOf("message-headers-hidden")>-1){a.className=a.className.replace(" message-headers-hidden","")}else{a.className+=" message-headers-hidden"}}var doCreateEditContentHovers=true;var editContentHighlightType=1;var enableContentHovers=false;var StrContentEditingEnabled="Content editing is enabled. Click to switch.";var StrContentEditingDisabled="Content editing is disabled. Click to switch.";var i=document.cookie.indexOf("hovers=");if(i>-1){enableContentHovers=(document.cookie.substring(i+7,i+11)=="true");setHoverModeCookie()}function createEditContentHovers(){if(!doCreateEditContentHovers){return}doCreateEditContentHovers=false;var d,a=false,g=document.getElementsByTagName("DIV");for(var c=0;c<g.length;++c){d=g[c];if(d.className.indexOf("edit-content-link")>-1){createEditContentHover(d);a=true}}if(editContentHighlightType==0){jQuery("body").append('<div id="left-module-dimmer" class="module-highlight module-dimmer"></div>');jQuery("body").append('<div id="right-module-dimmer" class="module-highlight module-dimmer"></div>');jQuery("body").append('<div id="top-module-dimmer" class="module-highlight module-dimmer"></div>');jQuery("body").append('<div id="bottom-module-dimmer" class="module-highlight module-dimmer"></div>')}else{if(editContentHighlightType==1){jQuery("body").append('<div id="left-module-dimmer" class="module-highlight module-left-border"></div>');jQuery("body").append('<div id="right-module-dimmer" class="module-highlight module-right-border"></div>');jQuery("body").append('<div id="top-module-dimmer" class="module-highlight module-top-border"></div>');jQuery("body").append('<div id="bottom-module-dimmer" class="module-highlight module-bottom-border"></div>')}}if(a){var b=document.getElementById("CountryLoginBox");if(b){var e=b.getElementsByTagName("TR")[0];if(e){var f=document.createElement("TD");f.className="separator";f.innerHTML="|";e.appendChild(f);f=document.createElement("TD");f.innerHTML='<a id="hover-mode-switch" href="#" onclick="switchHoverMode(); return false;" title="'+getContentHoverSwitchHint()+'">'+getContentHoverSwitchCode()+"</a>";f.style.width="20px";e.appendChild(f);if(document.cookie.indexOf("hovers=")<0){jQuery(window).load(function(){jQuery("#hover-mode-switch").effect("shake",{times:3,distance:5,direction:"left"},300);jQuery("#hover-mode-switch").effect("shake",{times:3,distance:5,direction:"up"},300)});setHoverModeCookie()}}}else{if(jQuery("#mininav_bar").length){jQuery("#mininav_bar").prepend('<div id="hover-mode-switch-cont" style="float: right;"></div>');jQuery("#hover-mode-switch-cont").html('<a id="hover-mode-switch" href="#" onclick="switchHoverMode(); return false;" title="'+getContentHoverSwitchHint()+'">'+getContentHoverSwitchCode()+"</a>");if(document.cookie.indexOf("hovers=")<0){jQuery(window).load(function(){jQuery("#hover-mode-switch").effect("shake",{times:3,distance:5,direction:"left"},300);jQuery("#hover-mode-switch").effect("shake",{times:3,distance:5,direction:"up"},300)});setHoverModeCookie()}}}}}function getContentHoverSwitchCode(){return(enableContentHovers?'<img src="/images/buttons/edit.gif" border="0">':'<img src="/images/buttons/edit_no.gif" border="0">')}function getContentHoverSwitchHint(){return(enableContentHovers?StrContentEditingEnabled:StrContentEditingDisabled)}function setHoverModeCookie(){var a=new Date();a.setMonth(a.getMonth()+3);var b=window.location.hostname;b=b.match(/^[a-zA-Z0-9\-\.]+?(\.[a-zA-Z0-9\-]+\.[a-zA-Z]+)$/);if(b!=null){b=b[1]}else{b=".codegear.com"}document.cookie="hovers="+(enableContentHovers?"true":"false")+"; expires="+a.toUTCString()+"; domain="+b+"; path=/"}function switchHoverMode(){var a=document.getElementById("hover-mode-switch");enableContentHovers=!enableContentHovers;a.innerHTML=getContentHoverSwitchCode();a.title=getContentHoverSwitchHint();setHoverModeCookie()}function createEditContentHover(c){var d=(/MSIE/.test(navigator.userAgent));var a=document.body;var b=c;while((b=b.parentNode)&&b!=a){if(b.className.indexOf("module")>-1){addEvent(b,"mouseover",function(){if(enableContentHovers){c.style.display="block";showDimmerForModule(b)}});addEvent(b,"mouseout",function(){if(enableContentHovers){c.style.display="none";hideDimmer()}});break}}}function showDimmerForModule(a){var e=document.getElementById("left-module-dimmer");var f=document.getElementById("right-module-dimmer");var b=document.getElementById("top-module-dimmer");var d=document.getElementById("bottom-module-dimmer");var c=getScreenRect(a);if(editContentHighlightType==0){e.style.left="0px";e.style.top="0px";e.style.height=document.body.offsetHeight+"px";e.style.width=c.left+"px";f.style.left=c.right+"px";f.style.top="0px";f.style.height=document.body.offsetHeight+"px";f.style.width=Math.max(document.body.offsetWidth-c.right-2,0)+"px";b.style.left=c.left+"px";b.style.top="0px";b.style.height=c.top+"px";b.style.width=Math.max(c.right-c.left)+"px";d.style.left=c.left+"px";d.style.top=c.bottom+"px";d.style.height=Math.max(document.body.offsetHeight-c.bottom,0)+"px";d.style.width=Math.max(c.right-c.left,0)+"px"}else{if(editContentHighlightType==1){e.style.left="0px";e.style.top=c.top+"px";e.style.height=Math.max(c.bottom-c.top,0)+"px";e.style.width=c.left+"px";f.style.left=c.right+"px";f.style.top=c.top+"px";f.style.height=Math.max(c.bottom-c.top,0)+"px";f.style.width=Math.max(document.body.offsetWidth-c.right-2,0)+"px";b.style.left=c.left+"px";b.style.top="0px";b.style.height=c.top+"px";b.style.width=Math.max(c.right-c.left,0)+"px";d.style.left=c.left+"px";d.style.top=c.bottom+"px";d.style.height=Math.max(document.body.offsetHeight-c.bottom,0)+"px";d.style.width=Math.max(c.right-c.left,0)+"px"}}e.style.display="block";f.style.display="block";b.style.display="block";d.style.display="block"}function hideDimmer(){var c=document.getElementById("left-module-dimmer");var d=document.getElementById("right-module-dimmer");var a=document.getElementById("top-module-dimmer");var b=document.getElementById("bottom-module-dimmer");c.style.display="none";d.style.display="none";a.style.display="none";b.style.display="none"}function correctTOC(){jQuery("#article-toc .toclist li a").each(function(a){if(this.name!=""){this.innerHTML="";this.className="tocentry"}})}function showTaggedArticles(){var a="http://edn.embarcadero.com/tag/";if((document.body.id=="home")&&(location.href.toLowerCase().indexOf(a)>=0)){$(".colleft, .pe-home-content-container, .communities-container, .events-div, .blog-feed-container").hide();$(".article-list").show()}}jQuery(window).ready(function(){correctTOC();createEditContentHovers();showTaggedArticles()});var chatRoomServer=(ednSSL?"https":"http")+"://chat.embarcadero.com/";var chatRoomHasPeopleFormat='<a href="{ROOMURL}" target="_blank" title="Chat with the {PEOPLE} {PEOPLESTR} in the {ROOM} room."><img src="/images/w3/icons-small-communication.gif" />Join the chat!</a>';var chatRoomNoPeopleFormat='<a href="{ROOMURL}" target="_blank" title="Start a chat in the {ROOM} room."><img src="/images/w3/icons-small-communication.gif" />Start a chat!</a>';var chatRoomNoModeratorFormat="{ROOM} chat room closed.";var joinMeIfUserInRoomFormat='<a href="{ROOMURL}" target="_blank">Join me in the {ROOM} chat room.</a>';var joinMeIfUserNotInRoomFormat="Not in the {ROOM} chat room right now, come back later.";var chatWithMeUserAvailableFormat="Chat with me now!";var chatWithMeUserNotAvailableFormat="Not available to chat.";function showRoomInfo(d,b,a,e,c,f){if(typeof(b)=="undefined"){b=null}if(typeof(a)=="undefined"){a=false}if(typeof(e)=="undefined"){e=chatRoomHasPeopleFormat}if(typeof(c)=="undefined"){c=chatRoomNoModeratorFormat}if(typeof(f)=="undefined"){f=chatRoomNoPeopleFormat}chatRoomInfoSections.push(new Array(d,b,a,e,c,f));document.write('<span id="chatRoomStatus_'+d+"_"+(chatRoomInfoSections.length-1)+'" class="chatroominfo">Please wait...</span>')}function joinMe(e,d,b,f,c,a,g){if(typeof(b)=="undefined"){b=null}if(typeof(f)=="undefined"){b=null}if(typeof(c)=="undefined"){c=false}if(typeof(a)=="undefined"){a=joinMeIfUserInRoomFormat}if(typeof(g)=="undefined"){g=joinMeIfUserNotInRoomFormat}joinMeSections.push(new Array(e,d,b,f,c,a,g));document.write('<span id="joinMe_'+(joinMeSections.length-1)+'" class="joinmeinfo">Please wait...</span>')}function chatWithMe(b,d,a,c){if(typeof(d)=="undefined"){roomName=null}if(typeof(a)=="undefined"){a=chatWithMeUserAvailableFormat}if(typeof(c)=="undefined"){c=chatWithMeUserNotAvailableFormat}chatWithMeSections.push(new Array(b,d,a,c));document.write('<span id="chatWithMe_'+(chatWithMeSections.length-1)+'" class="chatwithmeinfo">Please wait...</span>')}var chatRoomInfoSections=new Array();var joinMeSections=new Array();var chatWithMeSections=new Array();var currentJoinMeIndex=0;var currentChatWithMeIndex=0;if(window.addEventListener){window.addEventListener("load",refreshChatRoomStatus,false);window.addEventListener("load",refreshJoinMeStatus,false);window.addEventListener("load",refreshChatWithMeStatus,false)}else{if(window.attachEvent){window.attachEvent("onload",refreshChatRoomStatus);window.attachEvent("onload",refreshJoinMeStatus);window.attachEvent("onload",refreshChatWithMeStatus)}}function refreshChatRoomStatus(){if(chatRoomInfoSections.length>0){chatAjax(chatRoomServer+"roominfo","onGotChatRoomInfo")}}function onGotChatRoomInfo(a){updateChatRooms()}function updateChatRooms(){for(var a=0;a<chatRoomInfoSections.length;++a){updateChatRoom(a)}setTimeout("refreshChatRoomStatus()",15000)}function updateChatRoom(a){var c=chatRoomInfoSections[a];var g="";roomID=c[0];roomName=c[1];onlyIfModeratorPresent=c[2];hasPeopleFormat=c[3];noModeratorFormat=c[4];noPeopleFormat=c[5];if(typeof(ChatRoomInfo[roomID])=="object"){if(!roomName){roomName=ChatRoomInfo[roomID][2]}var d=ChatRoomInfo[roomID][3];var b=ChatRoomInfo[roomID][0];var e=ChatRoomInfo[roomID][1];var f=b-e;if(onlyIfModeratorPresent&&e==0){g=noModeratorFormat}else{if(b==0){g=noPeopleFormat}else{g=hasPeopleFormat}}g=g.replace(/\{PEOPLE\}/g,b);g=g.replace(/\{MODERATORS\}/g,e);g=g.replace(/\{USERS\}/g,f);g=g.replace(/\{ROOM\}/g,roomName);g=g.replace(/\{ROOMDESC\}/g,d);g=g.replace(/\{PEOPLESTR\}/g,((b!=1)?"people":"person"));g=g.replace(/\{MODERATORSTR\}/g,((e!=1)?"moderators":"moderator"));g=g.replace(/\{USERSTR\}/g,((f!=1)?"users":"user"));g=g.replace(/\{ROOMURL\}/g,getRoomURL(roomID))}else{g="<!-- Room doesn't exist '"+roomID+"' -->";document.getElementById("chatRoomStatus_"+roomID+"_"+a).style.display="none"}document.getElementById("chatRoomStatus_"+roomID+"_"+a).innerHTML=g}function refreshJoinMeStatus(){currentJoinMeIndex=0;refreshCurrentJoinMe()}function refreshCurrentJoinMe(){if(currentJoinMeIndex>=joinMeSections.length){setTimeout("refreshJoinMeStatus()",15000);return}var b=joinMeSections[currentJoinMeIndex][0];var a=joinMeSections[currentJoinMeIndex][1];chatAjax(chatRoomServer+"occupantinfo?room="+escape(b)+"&uid="+escape(a),"onGotOccupantInfo")}function onGotOccupantInfo(c){var b=parseData(c);var a=parseInt(b.isInRoom);if(!isNaN(a)){updateJoinMe(currentJoinMeIndex,a,b.friendlyRoomName)}++currentJoinMeIndex;refreshCurrentJoinMe()}function updateJoinMe(a,d,c){var b=joinMeSections[a];roomID=b[0];userID=b[1];roomName=b[2];userFriendlyName=b[3];showIfNotInRoom=b[4];ifUserInRoomFormat=b[5];ifUserNotInRoomFormat=b[6];if(!roomName){if(c){roomName=c}else{roomName=roomID}}if(!userFriendlyName){userFriendlyName=userID}var e;if(d==1){e=ifUserInRoomFormat}else{if(showIfNotInRoom){e=ifUserNotInRoomFormat}else{e=""}}e=e.replace(/\{ROOMID\}/g,roomID);e=e.replace(/\{ROOM\}/g,roomName);e=e.replace(/\{USERID\}/g,userID);e=e.replace(/\{USER\}/g,userFriendlyName);e=e.replace(/\{ROOMURL\}/g,getRoomURL(roomID));document.getElementById("joinMe_"+a).innerHTML=e}function refreshChatWithMeStatus(){currentChatWithMeIndex=0;refreshCurrentChatWithMe()}function refreshCurrentChatWithMe(){if(currentChatWithMeIndex>=chatWithMeSections.length){setTimeout("refreshChatWithMeStatus()",15000);return}var a=chatWithMeSections[currentChatWithMeIndex][0];chatAjax(chatRoomServer+"occupantinfo?uid="+escape(a),"onGotChatWithMeOccupantInfo")}function onGotChatWithMeOccupantInfo(c){var b=parseData(c);var a=parseInt(b.isOpenChat);if(!isNaN(a)){updateChatWithMe(currentChatWithMeIndex,a)}++currentChatWithMeIndex;refreshCurrentChatWithMe()}function updateChatWithMe(a,c){var b=chatWithMeSections[a];userID=b[0];userFriendlyName=b[1];userAvailableFormat=b[2];userNotAvailableFormat=b[3];if(!userFriendlyName){userFriendlyName=userID}var d;if(c==1){d=makePrivateChatLink(userID,userAvailableFormat)}else{d=userNotAvailableFormat}d=d.replace(/\{USERID\}/g,userID);d=d.replace(/\{USER\}/g,userFriendlyName);d=d.replace(/\{CHATURL\}/g,getPrivateChatURL(userID));document.getElementById("chatWithMe_"+a).innerHTML=d}function getRoomURL(a){return chatRoomServer+a}function getPrivateChatURL(a){return chatRoomServer+"/index.html?chatwith="+escape(a)}function makePrivateChatLink(a,b){return'<a href="'+getPrivateChatURL(a)+'" target="_blank">'+b+"</a>"}function chatAjax(b,a,c){if(typeof(window.chatAjaxID)=="undefined"){window.chatAjaxID=1}else{++window.chatAjaxID}if(b.indexOf("?")==-1){b+="?"}else{b+="&"}b+="cb="+a+"&id="+window.chatAjaxID;scriptObj=document.createElement("script");scriptObj.setAttribute("type","text/javascript");scriptObj.setAttribute("src",b);scriptObj.setAttribute("id","cgAutoUpdateScriptSection"+window.chatAjaxID);document.getElementsByTagName("head").item(0).appendChild(scriptObj)}function chatAjaxCallback(callbackFunction,id){var scriptObject=document.getElementById("cgAutoUpdateScriptSection"+id);if(scriptObject){var parentNode=scriptObject.parentNode;parentNode.removeChild(scriptObject)}eval(callbackFunction+"()")}function parseData(d){var a=d.split("\r\n");var e=new Array();for(var c=0;c<a.length;++c){var b=a[c].split("=",2);if(b.length==2){e[b[0]]=b[1]}}return e}if(typeof(ChatRoomInfo)=="undefined"){ChatRoomInfo=new Array()}if(typeof XMLHttpRequest=="undefined"){XMLHttpRequest=function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(a){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){}return null}}function callScriptServiceAsync(serviceLocation,methodName,parameters,callBack,callBackParams){var request=new XMLHttpRequest();var ifModifiedSince=new Date(0);request.open("POST",serviceLocation+"/"+methodName,true);request.setRequestHeader("Content-type","application/json; charset=utf-8");request.onreadystatechange=function(){if(request.readyState==4&&request.status==200){if(request.responseText){callBack(eval(request.responseText),callBackParams)}}};if(parameters!=null){parameters=toJSONString(parameters)}request.send(parameters)}function callASPXService(c,d,e,f,g){var b;if(typeof(window.aspxServiceCall)!="undefined"){b=document.getElementById("cgAutoUpdateScriptSection-"+d);if(b){var a=b.parentNode;a.removeChild(b)}}if(typeof(window.aspxServiceCall)=="undefined"){window.aspxServiceCall=1}else{++window.aspxServiceCall}if(c.indexOf("?")==-1){c+="?"}else{c+="&"}c+="method="+encodeURIComponent(d);c+="&callback="+encodeURIComponent("function callBackMethod(data) { "+f+'(data, "'+g+'"); } callBackMethod');c+="&params="+encodeURIComponent(e);c+="&id="+window.aspxServiceCall;b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("src",c);b.setAttribute("id","cgAutoUpdateScriptSection-"+d);document.getElementsByTagName("head").item(0).appendChild(b)}function toJSONString(a){return s.object(a)}var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};var s={array:function(d){var g=["["],c,n,k,e=d.length,h;for(k=0;k<e;k+=1){h=d[k];n=s[typeof h];if(n){h=n(h);if(typeof h=="string"){if(c){g[g.length]=","}g[g.length]=h;c=true}}}g[g.length]="]";return g.join("")},"boolean":function(a){return String(a)},"null":function(a){return"null"},number:function(a){return isFinite(a)?String(a):"null"},object:function(d){if(d){if(d instanceof Array){return s.array(d)}var e=["{"],c,k,h,g;for(h in d){g=d[h];k=s[typeof g];if(k){g=k(g);if(typeof g=="string"){if(c){e[e.length]=","}e.push(s.string(h),":",g);c=true}}}e[e.length]="}";return e.join("")}return"null"},string:function(a){if(/["\\\x00-\x1f]/.test(a)){a=a.replace(/([\x00-\x1f\\"])/g,function(e,d){var f=m[d];if(f){return f}f=d.charCodeAt();return"\\u00"+Math.floor(f/16).toString(16)+(f%16).toString(16)})}return'"'+a+'"'}};var searchTimeout=-1;var searchIndex=-1;var searchCount=0;var searchHint=null;var searchServiceURL="";var approxHitsText="Approx hits";function registerSearchBox(a){document.write('<div id="'+a+'HintBox" class="search-hint-box"><div id="'+a+'HintBoxHitCount" class="hitcount"></div><div id="'+a+'HintBoxPhraseList" class="phraselist"></div></div>');addEvent(document.getElementById(a),"keypress",searchKeyPress);addEvent(document.getElementById(a),"keydown",searchKeyUp);addEvent(document,"click",searchHintHide)}function searchKeyPress(c){var b=c||window.event;var d=(b.srcElement)?b.srcElement:b.target;var f=d.id;var a=b.keyCode;if(searchTimeout!=-1){clearTimeout(searchTimeout)}if(a!=38&&a!=40&&a!=9&&a!=13&&a!=10&&a!=27){searchTimeout=setTimeout("searchTrigger('"+d.id+"');",1000)}}function searchKeyUp(d){var c=d||window.event;var f=(c.srcElement)?c.srcElement:c.target;var g=f.id;var b=c.keyCode;if(searchTimeout!=-1){clearTimeout(searchTimeout)}if(document.getElementById(g+"HintBox").style.display=="block"){var a=searchIndex;if(b==38){searchIndex=Math.max(0,searchIndex-1)}else{if(b==40){searchIndex=Math.min(searchCount-1,searchIndex+1)}else{if((b==9||b==13||b==10)&&searchIndex>0){f.value=document.getElementById(g+"HintBoxItem"+searchIndex).innerHTML;document.getElementById(g+"HintBox").style.display="none"}else{if(b==27){document.getElementById(g+"HintBox").style.display="none"}}}}if(a!=searchIndex){if(a>-1){document.getElementById(g+"HintBoxItem"+a).className=""}if(searchIndex>-1){document.getElementById(g+"HintBoxItem"+searchIndex).className="selected"}}}if(b!=38&&b!=40&&b!=9&&b!=13&&b!=10&&b!=27){searchTimeout=setTimeout("searchTrigger('"+f.id+"');",1000)}}function searchBlur(b){var a=b||window.event;var c=(a.srcElement)?a.srcElement:a.target;var d=c.id}function searchTrigger(b){var a=document.getElementById(b);if(a.value==""){document.getElementById(b+"HintBox").style.display="none"}else{document.getElementById(b+"HintBoxPhraseList").innerHTML="";document.getElementById(b+"HintBoxHitCount").innerHTML="";callASPXService(searchServiceURL,"RetrieveMatchingKeywords",a.value,"searchHintCallback",b);callASPXService(searchServiceURL,"GuessFullQueryHitCount",a.value,"searchHitCountCallback",b)}searchTimeout=-1}function searchHintCallback(c,d){if(c!=null&&typeof(c)=="object"&&c.length>0){var b="";for(var a=0;a<c.length;++a){b+='<a id="'+d+"HintBoxItem"+a+'" href="#" onclick="searchSelect(\''+d+"', "+a+'); return false;">'+c[a]+"</a>\r\n"}document.getElementById(d+"HintBoxPhraseList").innerHTML=b;searchIndex=-1;searchCount=c.length;showSearchHint(true,d)}else{showSearchHint(false,d)}}function searchHitCountCallback(a,b){if(a!=null){if(a==""){a="0"}document.getElementById(b+"HintBoxHitCount").innerHTML=approxHitsText+": "+a;showSearchHint(true,b)}else{showSearchHint(false,b)}}function showSearchHint(c,f){var e=document.getElementById(f+"HintBox");if(c==(e.style.display=="block")){return}if(c){var d=document.getElementById(f);var a=0,b=d.offsetHeight+2;if(searchHint&&searchHint.style.display=="block"){searchHint.style.display="none"}e.style.display="block";while(d!=e.offsetParent&&d!=null){a+=d.offsetLeft;b+=d.offsetTop;d=d.offsetParent}e.style.left=a+"px";e.style.top=b+"px";searchHint=e}else{e.style.display="none"}}function searchSelect(c,a){var b=document.getElementById(c);b.value=document.getElementById(c+"HintBoxItem"+a).innerHTML;if(b.onkeypress){b.onkeypress({keyCode:0})}document.getElementById(c+"HintBox").style.display="none";b.form.submit()}function searchHintHide(){if(searchHint&&searchHint.style.display=="block"){searchHint.style.display="none"}}function addEvent(b,a,c){if(window.addEventListener){b.addEventListener(a,c,false)}else{if(window.attachEvent){b.attachEvent("on"+a,c)}}}function deleteEvent(b,a,c){if(window.removeEventListener){b.removeEventListener(a,c,false)}else{if(window.detachEvent){b.detachEvent("on"+a,c)}}};