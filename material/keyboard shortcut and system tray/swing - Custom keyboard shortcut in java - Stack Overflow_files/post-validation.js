StackExchange.postValidation=function(){function e(e,t,n,i){var r=e.find('input[type="submit"]:visible'),a=r.length&&r.is(":enabled");a&&r.attr("disabled",!0),o(e,i),s(e,t,n,i),l(e),u(e),d(e);var f=function(){1!=t||e.find(C).length?(c(e),a&&r.attr("disabled",!1)):setTimeout(f,250)};f()}function t(t,i,o,s,c){e(t,i,s,o);var l,u=function(e){if(e.success)if(c)c(e);else{var n=window.location.href.split("#")[0],r=e.redirectTo.split("#")[0];0==r.indexOf("/")&&(r=window.location.protocol+"//"+window.location.hostname+r),l=!0,window.location=e.redirectTo,n.toLowerCase()==r.toLowerCase()&&window.location.reload(!0)}else e.captchaHtml?StackExchange.captcha.init(e.captchaHtml,u):e.errors?(t.find("input[name=priorAttemptCount]").val(function(e,t){return(+t+1||0).toString()}),h(e.errors,t,i,o,e.warnings)):t.find('input[type="submit"]:visible').parent().showErrorMessage(e.message)};t.submit(function(){if(t.find("#answer-from-ask").is(":checked"))return!0;var e=t.find(E);if("[Edit removed during grace period]"==$.trim(e.val()))return m(e,["Comment reserved for system use. Please use an appropriate comment."],f()),!1;if(a(),StackExchange.navPrevention&&StackExchange.navPrevention.stop(),t.find('input[type="submit"]:visible').parent().addSpinner(),StackExchange.helpers.disableSubmitButton(t),StackExchange.options.site.enableNewTagCreationWarning){var i=t.find(C).parent().find("input#tagnames"),s=i.prop("defaultValue");if(i.val()!==s)return $.ajax({"type":"GET","url":"/posts/new-tags-warning","dataType":"json","data":{"tags":i.val()},"success":function(e){n(e,t,l,o,u)}}),!1}return setTimeout(function(){r(t,o,l,u)},0),!1})}function n(e,t,n,a,o){if(e.showWarning){var s=$(e.html);s.bind("popupClose",function(){i(t,n)}),s.find(".popup-actions-cancel, .popup-close a").click(function(){StackExchange.helpers.closePopups(".popup"),i(t,n)}),s.find(".cancel-post").click(function(e){return StackExchange.helpers.closePopups(".popup"),e.preventDefault(),!1}),s.find(".submit-post").click(function(e){return StackExchange.helpers.closePopups(".popup"),r(t,a,n,o),e.preventDefault(),!1}),s.insertBefore(t.find('input[type="submit"]:visible')),StackExchange.helpers.bindMovablePopups(),s.show()}else r(t,a,n,o)}function i(e,t){StackExchange.helpers.removeSpinner(),t||StackExchange.helpers.enableSubmitButton(e)}function r(e,t,n,r){$.ajax({"type":"POST","dataType":"json","data":e.serialize(),"url":e.attr("action"),"success":r,"error":function(){var n;switch(t){case"question":n="An error occurred submitting the question.";break;case"answer":n="An error occurred submitting the answer.";break;case"edit":n="An error occurred submitting the edit.";break;case"tags":n="An error occurred submitting the tags.";break;case"post":default:n="An error occurred submitting the post."}e.find('input[type="submit"]:visible').parent().showErrorMessage(n)},"complete":function(){i(e,n)}})}function a(){for(var e=0;e<_.length;e++)clearTimeout(_[e]);_=[]}function o(e,t){var n=e.find(k);n.length&&n.blur(function(){_.push(setTimeout(function(){var i=n.val(),r=$.trim(i);if(0==r.length)return y(e,n),void 0;var a=n.data("min-length");if(a&&r.length<a)return m(n,[function(e){return 1==e.minLength?"Title must be at least "+e.minLength+" character.":"Title must be at least "+e.minLength+" characters."}({"minLength":a})],f()),void 0;var o=n.data("max-length");return o&&r.length>o?(m(n,[function(e){return 1==e.maxLength?"Title cannot be longer than "+e.maxLength+" character.":"Title cannot be longer than "+e.maxLength+" characters."}({"maxLength":o})],f()),void 0):($.ajax({"type":"POST","url":"/posts/validate-title","data":{"title":i},"success":function(i){i.success?y(e,n):m(n,i.errors.Title,f()),"edit"!=t&&g(e,n,i.warnings.Title)},"error":function(){y(e,n)}}),void 0)},A))})}function s(e,t,n,i){var r=e.find(S);r.length&&r.blur(function(){_.push(setTimeout(function(){var a=r.val(),o=$.trim(a);if(0==o.length)return y(e,r),void 0;if(5==t){var s=r.data("min-length");return s&&o.length<s?m(r,[function(e){return"Wiki Body must be at least "+e.minLength+" characters. You entered "+e.actual+"."}({"minLength":s,"actual":o.length})],f()):y(e,r),void 0}(1==t||2==t)&&$.ajax({"type":"POST","url":"/posts/validate-body","data":{"body":a,"oldBody":r.prop("defaultValue"),"isQuestion":1==t,"isSuggestedEdit":n},"success":function(t){t.success?y(e,r):m(r,t.errors.Body,f()),"edit"!=i&&g(e,r,t.warnings.Body)},"error":function(){y(e,r)}})},A))})}function c(e){var t=e.find(C);if(t.length){var n=t.parent().find("input#tagnames");n.blur(function(){_.push(setTimeout(function(){var i=n.val(),r=$.trim(i);return 0==r.length?(y(e,t),void 0):($.ajax({"type":"POST","url":"/posts/validate-tags","data":{"tags":i,"oldTags":n.prop("defaultValue")},"success":function(n){n.success?y(e,t):m(t,n.errors.Tags,f())},"error":function(){y(e,t)}}),void 0)},A))})}}function l(e){var t=e.find(E);t.length&&t.blur(function(){_.push(setTimeout(function(){var n=t.val(),i=$.trim(n);if(0==i.length)return y(e,t),void 0;var r=t.data("min-length");if(r&&i.length<r)return m(t,[function(e){return 1==e.minLength?"Your edit summary must be at least "+e.minLength+" character.":"Your edit summary must be at least "+e.minLength+" characters."}({"minLength":r})],f()),void 0;var a=t.data("max-length");return a&&i.length>a?(m(t,[function(e){return 1==e.maxLength?"Your edit summary cannot be longer than "+e.maxLength+" character.":"Your edit summary cannot be longer than "+e.maxLength+" characters."}({"maxLength":a})],f()),void 0):(y(e,t),void 0)},A))})}function u(e){var t=e.find(T);t.length&&t.blur(function(){_.push(setTimeout(function(){var n=t.val(),i=$.trim(n);if(0==i.length)return y(e,t),void 0;var r=t.data("min-length");if(r&&i.length<r)return m(t,[function(e){return"Wiki Excerpt must be at least "+e.minLength+" characters; you entered "+e.actual+"."}({"minLength":r,"actual":i.length})],f()),void 0;var a=t.data("max-length");return a&&i.length>a?(m(t,[function(e){return"Wiki Excerpt cannot be longer than "+e.maxLength+" characters; you entered "+e.actual+"."}({"maxLength":a,"actual":i.length})],f()),void 0):(y(e,t),void 0)},A))})}function d(e){var t=e.find(I);t.length&&t.blur(function(){_.push(setTimeout(function(){var n=t.val(),i=$.trim(n);return 0==i.length?(y(e,t),void 0):/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,20}$/i.test(n)?(y(e,t),void 0):(m(t,["This email does not appear to be valid."],p()),void 0)},A))})}function f(){var e=$("#sidebar, .sidebar").first().width()||270;return{"position":{"my":"left top","at":"right center"},"css":{"max-width":e,"min-width":e},"closeOthers":!1}}function p(){var e=$("#sidebar, .sidebar").first().width()||270;return{"position":{"my":"left top","at":"right center"},"css":{"min-width":e},"closeOthers":!1}}function h(e,t,n,i,r){if(e){var a=function(){var n=0,a=t.find(k),o=t.find(S);m(a,e.Title,f())?n++:y(t,a),r&&g(t,a,r.Title),m(o,e.Body,f())?n++:y(t,o),r&&g(t,o,r.Body),m(t.find(C),e.Tags,f())?n++:y(t,t.find(C)),m(t.find(E),e.EditComment,f())?n++:y(t,t.find(E)),m(t.find(T),e.Excerpt,f())?n++:y(t,t.find(T)),m(t.find(I),e.Email,p())?n++:y(t,t.find(I));var s=t.find(".general-error"),c=e.General&&e.General.length>0;if(c||n>0){if(!s.length){var l=t.find('input[type="submit"]:visible');l.before('<div class="general-error-container"><div class="general-error"></div><br class="cbt" /></div>'),s=t.find(".general-error")}if(c)m(s,e.General,{"position":"inline","css":{"float":"left","margin-bottom":"10px"},"closeOthers":!1,"dismissable":!1});else{y(t,s);var u;switch(i){case"question":u=function(e){return 1==e.specificErrorCount?"Your question couldn't be submitted. Please see the error above.":"Your question couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"answer":u=function(e){return 1==e.specificErrorCount?"Your answer couldn't be submitted. Please see the error above.":"Your answer couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"edit":u=function(e){return 1==e.specificErrorCount?"Your edit couldn't be submitted. Please see the error above.":"Your edit couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"tags":u=function(e){return 1==e.specificErrorCount?"Your tags couldn't be submitted. Please see the error above.":"Your tags couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"post":default:u=function(e){return 1==e.specificErrorCount?"Your post couldn't be submitted. Please see the error above.":"Your post couldn't be submitted. Please see the errors above."}({"specificErrorCount":n})}s.text(u)}}else t.find(".general-error-container").remove();var d;x()&&($("#sidebar").animate({"opacity":.4},500),d=setInterval(function(){x()||($("#sidebar").animate({"opacity":1},500),clearInterval(d))},500));var h;t.find(".validation-error").each(function(){var e=$(this).offset().top;(!h||h>e)&&(h=e)});var v=function(){for(var e=0;3>e;e++)t.find(".message").animate({"left":"+=5px"},100).animate({"left":"-=5px"},100)};if(h){var b=$(".review-bar").length;h=Math.max(0,h-(b?125:30)),$("html, body").animate({"scrollTop":h},v)}else v()},o=function(){1!=n||t.find(C).length?a():setTimeout(o,250)};o()}}function g(e,t,n){var i=f();if(i.type="warning",!n||0==n.length)return b(e,t),!1;var r=t.data("error-popup"),a=0;return r&&(a=r.height()+5),v(t,n,i,a)}function m(e,t,n){return n.type="error",v(e,t,n)}function v(e,t,n,i){var r,o=n.type;if(!(t&&0!=t.length&&e.length&&$("html").has(e).length))return!1;if(r=1==t.length?t[0]:"<ul><li>"+t.join("</li><li>")+"</li></ul>",r&&r.length>0){var s=e.data(o+"-popup");if(s&&s.is(":visible")){var c=e.data(o+"-message");if(c==r)return s.animateOffsetTop(i||0),!0;s.fadeOutAndRemove()}i>0&&(n.position.offsetTop=i);var l=StackExchange.helpers.showMessage(e,r,n);return l.find("a").attr("target","_blank"),l.click(a),e.addClass("validation-"+o).data(o+"-popup",l).data(o+"-message",r),!0}return!1}function b(e,t){w("warning",e,t)}function y(e,t){w("error",e,t)}function w(e,t,n){if(!n||0==n.length)return!1;var i=n.data(e+"-popup");return i&&i.is(":visible")&&i.fadeOutAndRemove(),n.removeClass("validation-"+e),n.removeData(e+"-popup"),n.removeData(e+"-message"),t.find(".validation-"+e).length||t.find(".general-"+e+"-container").remove(),!0}function x(){var e=!1,t=$("#sidebar, .sidebar").first();if(!t.length)return!1;var n=t.offset().left;return $(".message").each(function(){var t=$(this);return t.offset().left+t.outerWidth()>n?(e=!0,!1):void 0}),e}var k="input#title",S="textarea.wmd-input:first",C=".tag-editor",E="input[id^=edit-comment]",T="textarea#excerpt",I="input#m-address",_=[],A=250;return{"initOnBlur":e,"initOnBlurAndSubmit":t,"showErrorsAfterSubmission":h,"getSidebarPopupOptions":f}}();