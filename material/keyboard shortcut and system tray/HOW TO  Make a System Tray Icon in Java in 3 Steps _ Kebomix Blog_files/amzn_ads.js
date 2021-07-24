function amzn_ads(e){"use strict";try{amznads.updateAds(e)}catch(a){try{console.log("amzn_ads: "+a)}catch(t){}}}function aax_render_ad(e){var a=e.html;document.write(a)}var amzn_console=function(){"use strict";var e={};e.log=function(){};return e}();if(window.console){amzn_console=window.console}var amznads=function(e,a,t,n){"use strict";var d="https:"===a.location.protocol;e.protocol=d?"https://":"http://";e.host="aax.amazon-adsystem.com";e.dtb_svc="/e/dtb/bid";e.pb_svc="/x/getad";e.debug_mode=e.debug_mode||false;e.MIN_TIMEOUT=0;e.DEFAULT_TIMEOUT=1e3;e.targetingKey="amznslots";e.vidKey="amzn_vid";e.tasks=e.tasks||[];e.log=function(e){try{n.log(e)}catch(a){}};if(e.debug_mode){e.log("Initiating amznads")}if(!e.ads){e.ads={}}e.updateAds=function(a){e.ads=a.ads;if(a.vads){if(!e.ads){e.ads={}}var t;for(t in a.vads){if(a.vads.hasOwnProperty(t)){e.ads[t]=a.vads[t];e.amzn_vid=a.vads[t]}}}if(e.debug_mode){e.log("Updated ads. Executing rest of the task queue")}e.doAllTasks();e.tasks.push=function(a){e.doTask(a)}};e.saveAds=function(a){e.saved_ads=a.ads;e.updateAds(a)};e.getAdForSlot=function(t,n,d){e.src_id=t;var o=o||{};var r=o.u;if(!r){r=e.getReferrerURL()}if(r&&r.indexOf("amzn_debug_mode")!==-1){e.debug_mode=true}if(e.debug_mode){e.log("amznads.getAdForSlot: Using url="+r)}var s="src="+e.src_id+"&slot_uuid="+n+"&c=100"+"&u="+r+"&cb="+Math.round(Math.random()*1e7);var i=e.protocol+e.host+e.pb_svc+"?"+s;if(e.debug_mode){e.log("amznads.getAdAdForSlot: "+(d?"Async ":"")+"Call to: "+i)}if(d){e.appendScriptTag(i)}else{a.write("<script type='text/javascript' src='"+i+"'></script>");a.close()}};e.getAdsCallback=function(a,t,n,d,o){var r=null;var o=o||{};try{if(t&&typeof t==="function"){r=e.handleCallBack(t,n)}}catch(s){if(e.debug_mode){e.log("amznads.getAdsAsyncWithCallback(): Error occured in setting up callback functionality."+s)}}if(!o.to){o.to=n}e.doGetAdsAsync(a,d,o,r)};e.getAdsAsync=function(a,t,n){e.doGetAdsAsync(a,t,n)};e.handleCallBack=function(a,n){var d=false;var o=null;var r=function(e){if(!d){try{a(e);if(o){clearTimeout(o)}}catch(t){}d=true}};var s=e.getValidMilliseconds(n);if(s){o=t.setTimeout(r,s)}else{o=t.setTimeout(r,e.DEFAULT_TIMEOUT)}return r};e.getValidMilliseconds=function(a){if(!a){return false}try{var t=~~Number(a);if(t>e.MIN_TIMEOUT){return t}}catch(n){if(e.debug_mode){e.log("amznads.isValidMilliseconds(): Invalid timeout specified."+n)}return false}return false};e.getAds=function(t,n,d,o){if(o){e.doGetAdsAsync(t,n,d);return}else{var r=e.getScriptSource(t,n,d);if(e.debug_mode){e.log("amznads.getAds: Call to: "+r)}a.write("<script type='text/javascript' src='"+r+"'></script>");a.close()}};e.doGetAdsAsync=function(a,t,n,d){var o=e.getScriptSource(a,t,n);if(e.debug_mode){e.log("amznads.getAds: Async Call to: "+o)}e.appendScriptTag(o,d)};e.getScriptSource=function(t,n,d){e.src_id=t;var d=d||{};var o=d.u;var r=d.d;var s=d.to;if(!o){o=e.getReferrerURL()}if(o&&o.indexOf("amzn_debug_mode")!==-1){e.debug_mode=true}if(e.ads){if(e.debug_mode){e.log("amznads.getAds(): clear out existing ads")}e.clearTargetingFromGPTAsync();e.ads={}}if(e.saved_ads){e.ads=e.saved_ads}if(r){try{a.domain=r;if(e.debug_mode){e.log("amznads.getAds(): Using domain="+r)}}catch(i){if(e.debug_mode){e.log("amznads.getAds(): Unable to override document domain with '"+r+"'; exception="+i)}}}if(e.debug_mode){e.log("amznads.getAds(): Using url="+o)}var g="src="+t+"&u="+o+"&cb="+Math.round(Math.random()*1e7);if(n){g+="&sz="+n}if(s){g+="&t="+s}var c=e.protocol+e.host+e.dtb_svc+"?"+g;return c};e.getReferrerURL=function(){var n=encodeURIComponent(a.documentURI);try{n=encodeURIComponent(t.top.location.href);if(!n||n=="undefined")n=e.detectIframeAndGetURL()}catch(d){n=e.detectIframeAndGetURL()}return n};e.detectIframeAndGetURL=function(){try{if(t.top!==t.self){if(e.debug_mode){e.log("Script is loaded within iFrame. url="+url)}return encodeURIComponent(a.referrer)}}catch(n){return encodeURIComponent(a.documentURI)}};e.appendScriptTag=function(t,n){var d=a.getElementsByTagName("script")[0];var o=a.createElement("script");o.type="text/javascript";o.async=true;o.src=t;try{if(n&&typeof n==="function"){if(o.readyState){o.onreadystatechange=function(){if(o.readyState=="loaded"||o.readyState=="complete"){o.onreadystatechange=null;n(true)}};if(e.debug_mode){e.log("amznads.appendScriptTag: setting callBack function for < IE-8 ")}}else{o.onload=function(){n(true)};if(e.debug_mode){e.log("amznads.appendScriptTag: setting callBack function for all other browsers exluding  < IE-8")}}}}catch(r){if(e.debug_mode){e.log("amznads.appendScriptTag: Could not associate callBack function; "+r)}}d.parentNode.insertBefore(o,d)};e.renderAd=function(a,t){if(e.debug_mode){e.log("amznads.renderAd: key="+t+"; ad-tag="+e.ads[t])}if(e.ads[t]){a.write(e.ads[t]);a.close()}else{var n=new Object;n.c="dtb";n.src=e.src_id;n.kvmismatch=1;n.pubReturnedKey=t;n.aaxReturnedKeys=e.getTokens();n.cb=Math.round(Math.random()*1e7);try{n.u=encodeURIComponent(location.host+location.pathname);if(navigator){n.ua=encodeURIComponent(navigator.userAgent)}}catch(d){}var o=encodeURIComponent(JSON.stringify(n));var r=e.protocol+e.host+"/x/px/p/0/"+o;if(e.debug_mode){e.log("amznads.renderAd: keyValueMismatch detected, "+"pubReturnedKey="+t+", aaxReturnedKeys="+e.getTokens())}a.write("<img src='"+r+"'/>");a.close()}};e.hasAds=function(a){var t;if(!a){try{return Object.keys(e.ads).length>0}catch(n){if(e.debug_mode){e.log("amznads.hasAds: looks like IE 8 (and below): "+n)}for(t in e.ads){if(e.ads.hasOwnProperty(t)){return true}}}}for(t in e.ads){if(e.ads.hasOwnProperty(t)){if(t.indexOf(a)>0){return true}}}return false};e.getTargeting=function(a){var t={};var n=e.getTokens();if(n&&n.length>0){t[e.targetingKey]=n}var d=e.amzn_vid;if(d){t[e.vidKey]=d}return t};e.setTargeting=function(a,t){var n;for(n in e.ads){if(e.ads.hasOwnProperty(n)){if(t&&n.indexOf(t)<0){continue}a(n,"1")}}};e.setTargetingForGPTAsync=function(a){try{if(a){e.targetingKey=a;var t=e.getTokens();if(typeof t!="undefined"&&t.length>0){googletag.cmd.push(function(){googletag.pubads().setTargeting(a,t);googletag.pubads().setTargeting(e.vidKey,e.amzn_vid)})}}else{var n;for(n in e.ads){if(e.ads.hasOwnProperty(n)){(function(){var a=n;if(e.debug_mode){e.log("amznads.setTargetingForGPTAsync: pushing localKey="+a)}googletag.cmd.push(function(){if(amznads.debug_mode){amznads.log("amznads.setTargetingForGPTAsync: localKey="+a)}googletag.pubads().setTargeting(a,"1");googletag.pubads().setTargeting(e.vidKey,e.amzn_vid)})})()}}}if(e.debug_mode){e.log("amznads.setTargetingForGPTAsync: Completed successfully. Number of ads returned by Amazon: "+Object.keys(e.ads).length)}}catch(d){if(e.debug_mode){e.log("amznads.setTargetingForGPTAsync: ERROR - "+d)}}};e.setTargetingForGPTSync=function(a){try{if(a){e.targetingKey=a;var t=e.getTokens();if(typeof t!="undefined"&&t.length>0){googletag.pubads().setTargeting(a,t);googletag.pubads().setTargeting(e.vidKey,e.amzn_vid)}}else{var n;for(n in e.ads){if(e.ads.hasOwnProperty(n)){googletag.pubads().setTargeting(n,"1");googletag.pubads().setTargeting(e.vidKey,e.amzn_vid)}}}if(e.debug_mode){e.log("amznads.setTargetingForGPTSync: Completed successfully. Number of ads returned by Amazon: "+Object.keys(e.ads).length)}}catch(d){if(e.debug_mode){e.log("amznads.setTargetingForGPTSync: ERROR - "+d)}}};e.clearTargetingFromGPTAsync=function(){try{if(googletag&&googletag.pubads())googletag.pubads().clearTargeting(e.targetingKey);googletag.pubads().clearTargeting(e.vidKey)}catch(a){}};e.appendTargetingToAdServerUrl=function(a){var t=a;try{if(a.indexOf("?")===-1){a=a+"?"}var n;for(n in e.ads){if(e.ads.hasOwnProperty(n)){a+="&"+n+"=1"}}if(e.debug_mode){e.log("amznads.appendTargetingToAdServerUrl: Completed successfully. Number of ads returned by Amazon: "+e.ads.length)}}catch(d){if(e.debug_mode){e.log("amznads.appendTargetingToAdServerUrl: ERROR - "+d)}}if(e.debug_mode){e.log("amznads.appendTargetingToAdServerUrl: input url: "+t+"\nreturning url: "+a)}return a};e.appendTargetingToQueryString=function(a){var t=a;try{var n;for(n in e.ads){if(e.ads.hasOwnProperty(n)){a+="&"+n+"=1"}}}catch(d){if(e.debug_mode){e.log("amznads.appendTargetingToQueryString: ERROR - "+d)}}if(e.debug_mode){e.log("amznads.appendTargetingToQueryString: input query-string:"+t+"\nreturning query-string:"+a)}return a};e.getTokens=function(a){var t,n=[];try{for(t in e.ads){if(e.ads.hasOwnProperty(t)){if(a&&t.indexOf(a)<0){continue}n.push(t)}}}catch(d){if(e.debug_mode){e.log("amznads.getTokens: ERROR - "+d)}}if(e.debug_mode){e.log("amznads.getTokens: returning tokens = "+n)}return n};e.getKeys=e.getTokens;e.getVid=function(){return e.amzn_vid};e.doAllTasks=function(){while(e.tasks.length>0){var a=e.tasks.shift();e.doTask(a)}};e.doTask=function(a){try{a.call()}catch(t){if(e.debug_mode){e.log("Failed calling task: "+t)}}};e.tryGetAdsAsync=function(){if(e.asyncParams){e.getAdsCallback(e.asyncParams.id,e.asyncParams.callbackFn,e.asyncParams.timeout,e.asyncParams.size,e.asyncParams.data)}};return e}(amznads||{},document,window,amzn_console);amznads.tryGetAdsAsync();window["amzn_ads"]=amzn_ads;window["amznads"]=amznads;