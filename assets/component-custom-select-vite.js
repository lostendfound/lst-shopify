(function(){var c=function(e){this.element=e,this.select=this.element.getElementsByTagName("select")[0],this.optGroups=this.select.getElementsByTagName("optgroup"),this.options=this.select.getElementsByTagName("option"),this.selectedOption=f(this),this.selectId=this.select.getAttribute("id"),this.trigger=!1,this.dropdown=!1,this.customOptions=!1,this.arrowIcon=this.element.getElementsByTagName("svg"),this.label=document.querySelector('[for="'+this.selectId+'"]'),this.labelContent="",this.label&&(this.labelContent=", "+this.label.textContent),this.optionIndex=0,b(this),w(this)};function b(e){e.element.insertAdjacentHTML("beforeend",y(e)+C(e)),e.dropdown=e.element.getElementsByClassName("js-select__dropdown")[0],e.trigger=e.element.getElementsByClassName("js-select__button")[0],e.customOptions=e.dropdown.getElementsByClassName("js-select__item"),e.select.classList.add("lst-hidden"),e.arrowIcon.length>0&&(e.arrowIcon[0].style.display="none"),e.minWidth=parseInt(getComputedStyle(e.dropdown).getPropertyValue("min-width")),u(e)}function w(e){h(e),e.trigger.addEventListener("click",function(){i(e,!1)}),e.label&&e.label.addEventListener("click",function(){r(e.trigger)}),e.dropdown.addEventListener("keydown",function(t){t.keyCode&&t.keyCode==38||t.key&&t.key.toLowerCase()=="arrowup"?p(e,"prev",t):(t.keyCode&&t.keyCode==40||t.key&&t.key.toLowerCase()=="arrowdown")&&p(e,"next",t)}),e.element.addEventListener("select-updated",function(t){E(e)})}function i(e,t){var s;if(t?s=t:s=e.trigger.getAttribute("aria-expanded")=="true"?"false":"true",e.trigger.setAttribute("aria-expanded",s),s=="true"){var n=f(e);r(n),e.dropdown.addEventListener("transitionend",function o(){r(n),e.dropdown.removeEventListener("transitionend",o)}),u(e)}}function u(e){e.dropdown.classList.remove("select__dropdown--right","select__dropdown--up");var t=e.trigger.getBoundingClientRect(),s=e.dropdown.offsetHeight;window.innerHeight-t.bottom-5<s&&t.top-5>s&&e.dropdown.classList.add("select__dropdown--up");var n=e.dropdown.offsetWidth;window.innerWidth-t.left<n&&e.dropdown.classList.add("select__dropdown--right")}function p(e,t,s){s.preventDefault();var n=Array.prototype.indexOf.call(e.customOptions,document.activeElement);n=t=="next"?n+1:n-1,n<0&&(n=e.customOptions.length-1),n>=e.customOptions.length&&(n=0),r(e.customOptions[n])}function h(e){e.dropdown.addEventListener("click",function(t){var s=t.target.closest(".js-select__item");s&&_(e,s)})}function _(e,t){if(t.hasAttribute("aria-selected")&&t.getAttribute("aria-selected")=="true")e.trigger.setAttribute("aria-expanded","false");else{var s=e.dropdown.querySelector('[aria-selected="true"]');s&&s.setAttribute("aria-selected","false"),t.setAttribute("aria-selected","true"),e.trigger.getElementsByClassName("js-select__label")[0].textContent=t.textContent,e.trigger.setAttribute("aria-expanded","false"),v(e,t.getAttribute("data-index")),g(e)}e.trigger.focus()}function v(e,t){e.select.selectedIndex=t,e.select.dispatchEvent(new CustomEvent("change",{bubbles:!0})),e.select.dispatchEvent(new CustomEvent("input",{bubbles:!0}))}function g(e){e.trigger.setAttribute("aria-label",e.options[e.select.selectedIndex].innerHTML+e.labelContent)}function f(e){var t=e.dropdown.querySelector('[aria-selected="true"]');return t||e.dropdown.getElementsByClassName("js-select__item")[0]}function r(e){e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus())}function y(e){var t=e.element.getAttribute("data-trigger-class")?" "+e.element.getAttribute("data-trigger-class"):"",s=e.options[e.select.selectedIndex].innerHTML+e.labelContent,n='<button type="button" class="js-select__button select__button'+t+'" aria-label="'+s+'" aria-expanded="false" aria-controls="'+e.selectId+'-dropdown"><span aria-lst-="true" class="js-select__label select__label">'+e.selectedOption+"</span>";if(e.arrowIcon.length>0&&e.arrowIcon[0].outerHTML){var o=e.arrowIcon[0].cloneNode(!0);o.classList.remove("select__icon"),n=n+o.outerHTML}return n+"</button>"}function C(e){var t='<div class="js-select__dropdown select__dropdown" aria-describedby="'+e.selectId+'-description" id="'+e.selectId+'-dropdown">';if(t=t+x(e),e.optGroups.length>0)for(var s=0;s<e.optGroups.length;s++){var n=e.optGroups[s].getElementsByTagName("option"),o='<li><span class="select__item select__item--optgroup">'+e.optGroups[s].getAttribute("label")+"</span></li>";t=t+'<ul class="select__list" role="listbox">'+o+m(e,n)+"</ul>"}else t=t+'<ul class="select__list" role="listbox">'+m(e,e.options)+"</ul>";return t}function x(e){return e.label?'<p class="lst-sr-only lst-px-2 lst-text-xs" id="'+e.selectId+'-description">'+e.label.textContent+"</p>":""}function E(e){var t=e.dropdown.querySelector('[aria-selected="true"]');t&&t.setAttribute("aria-selected","false");var s=e.dropdown.querySelector('.js-select__item[data-index="'+e.select.selectedIndex+'"]');s.setAttribute("aria-selected","true"),e.trigger.getElementsByClassName("js-select__label")[0].textContent=s.textContent,e.trigger.setAttribute("aria-expanded","false"),g(e)}function m(e,t){for(var s="",n=0;n<t.length;n++){var o=t[n].hasAttribute("selected")?' aria-selected="true"':' aria-selected="false"';s=s+'<li><button type="button" class="reset js-select__item select__item select__item--option" role="option" data-value="'+t[n].value+'" '+o+' data-index="'+e.optionIndex+'">'+t[n].text+"</button></li>",e.optionIndex=e.optionIndex+1}return s}var l=document.getElementsByClassName("js-select");if(l.length>0){for(var a=[],d=0;d<l.length;d++)(function(e){a.push(new c(l[e]))})(d);window.addEventListener("keyup",function(e){(e.keyCode&&e.keyCode==27||e.key&&e.key.toLowerCase()=="escape")&&a.forEach(function(t){r(t.trigger),i(t,"false")})}),window.addEventListener("click",function(e){a.forEach(function(t){var s=e.target.closest(".js-select");(!s||s!==t.element)&&i(t,"false")})})}return c})();
