(function(window){var svgSprite='<svg><symbol id="ali-icon-huihua" viewBox="0 0 1024 1024"><path d="M222.218104 804.357558c-5.417383 75.442226-66.2294 111.557772-76.06235 103.697757 0 0 154.540725 88.488357 264.358877-41.48074 15.366989-18.198477 32.229029-43.002396 40.11565-71.189366L326.911538 671.339008C326.911538 671.339008 229.4099 703.989639 222.218104 804.357558zM376.86116 538.776853c23.787776-23.814382 47.430242-47.12325 70.89056-70.037123L259.304767 414.882102l318.245158-176.744423 39.460734 71.102385c27.861558-25.001417 53.490262-47.25321 77.263711-67.240427L620.457154 109.062951 7.131421 449.585485l356.907713 102.07377C368.316553 547.361369 372.541785 543.089066 376.86116 538.776853zM689.496553 644.748397l271.490298 77.651544L832.695976 491.305679C791.966343 536.914436 744.426607 587.879178 689.496553 644.748397zM378.744044 582.352301c-3.63069 3.663436-7.336082 7.343245-10.945283 11.021008-0.77055 0.641613-1.514493 1.296529-2.230808 2.012843l-18.10945 18.122753c-10.378371 10.398838-12.440333 25.12319-4.613064 32.94432l136.504954 136.498814c7.80578 7.812943 22.544459 5.765307 32.923854-4.619204l18.10331-18.122753c0.723477-0.701988 1.407046-1.439792 2.040473-2.198062 3.957125-3.910053 7.9296-7.90197 11.887748-11.825326L378.744044 582.352301zM1007.085772 121.044844c-41.875736-41.890063-170.34262 15.092743-512.258896 346.481246l-22.818705 22.291702c-19.590174 19.125593-39.406498 38.779212-59.248406 58.546418l165.540244 163.812903c19.461237-19.556405 38.84061-39.104623 57.68684-58.395992l22.306029-22.824845C989.645564 289.041022 1048.949228 162.893974 1007.085772 121.044844z"  ></path></symbol><symbol id="ali-icon-tianjia" viewBox="0 0 1024 1024"><path d="M938.666667 426.666667H597.333333V85.333333a85.333333 85.333333 0 0 0-85.333333-85.333333 85.333333 85.333333 0 0 0-85.333333 85.333333v341.333334H85.333333a85.333333 85.333333 0 0 0-85.333333 85.333333 85.333333 85.333333 0 0 0 85.333333 85.333333h341.333334v341.333334a85.333333 85.333333 0 0 0 85.333333 85.333333 85.333333 85.333333 0 0 0 85.333333-85.333333V597.333333h341.333334a85.333333 85.333333 0 0 0 85.333333-85.333333 85.333333 85.333333 0 0 0-85.333333-85.333333z"  ></path></symbol><symbol id="ali-icon-shanchu" viewBox="0 0 1024 1024"><path d="M150.356901 874.201762c-48.800729-48.800729-86.599291-105.735129-112.343169-169.220537C13.160344 643.692881 0.557367 578.952749 0.558663 512.557367c0-66.396678 12.601681-131.13681 37.455069-192.423858 25.742582-63.485408 63.542441-120.419808 112.343169-169.220537 48.802025-48.800729 105.735129-86.599291 169.221833-112.343169C380.864486 13.716415 445.604618 1.114734 512.001296 1.114734s131.13681 12.601681 192.423858 37.455069c63.485408 25.743878 120.418511 63.541144 169.220537 112.343169s86.599291 105.736425 112.344466 169.221833c24.853387 61.287048 37.455068 126.028476 37.453772 192.423858 0 66.396678-12.600385 131.13681-37.453772 192.423859-25.745175 63.485408-63.542441 120.418511-112.344466 169.221832-48.799433 48.799433-105.735129 86.599291-169.220537 112.34317C643.138106 1011.398319 578.397975 1024 512 1024s-131.135514-12.602977-192.423858-37.455068c-63.484111-25.745175-120.418511-63.542441-169.219241-112.34317z m631.633013-631.634309c-148.872749-148.872749-391.104486-148.872749-539.977236 0-148.871453 148.871453-148.872749 391.104486 0 539.978532 148.872749 148.872749 391.107078 148.871453 539.977236 0 148.872749-148.872749 148.872749-391.105782 0-539.978532z"  ></path><path d="M750.384608 659.286197L603.65837 512.558663 750.384608 365.831129c25.309651-25.309651 25.309651-66.346127 0-91.655777s-66.346127-25.309651-91.655778 0L512.001296 420.902886 365.275058 274.175352c-25.309651-25.309651-66.346127-25.309651-91.655777 0s-25.308354 66.346127 0 91.654481L420.346815 512.557367 273.619281 659.284901c-25.310947 25.310947-25.309651 66.346127 0 91.655777s66.346127 25.310947 91.655777 0.001297l146.727534-146.727534L658.730127 750.941975c25.308354 25.308354 66.34483 25.309651 91.654481 0s25.310947-66.347423 0-91.655778z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)