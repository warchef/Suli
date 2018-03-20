/* Start JQuery_UI */
/*
 * jQuery UI 1.7.2
 *
 * Aperto modified (options will be created with deep parameter)
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
;jQuery.ui || (function($) {
var _remove = $.fn.remove;
//Helper functions and ui object
$.ui = {
     version: "1.7.2",
     contains: function(a, b) {
          return document.compareDocumentPosition
               ? a.compareDocumentPosition(b) & 16
               : a !== b && a.contains(b);
     },
     keyCode: {
          BACKSPACE: 8,
          CAPS_LOCK: 20,
          COMMA: 188,
          CONTROL: 17,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          INSERT: 45,
          LEFT: 37,
          NUMPAD_ADD: 107,
          NUMPAD_DECIMAL: 110,
          NUMPAD_DIVIDE: 111,
          NUMPAD_ENTER: 108,
          NUMPAD_MULTIPLY: 106,
          NUMPAD_SUBTRACT: 109,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          PERIOD: 190,
          RIGHT: 39,
          SHIFT: 16,
          SPACE: 32,
          TAB: 9,
          UP: 38
     }
};
// $.widget is a factory to create jQuery plugins
// taking some boilerplate code out of the plugin code
function getter(namespace, plugin, method, args) {
     function getMethods(type) {
          var methods = $[namespace][plugin][type] || [];
          return (typeof methods == 'string' ? methods.split(/,?\s+/) : methods);
     }
     var methods = getMethods('getter');
     if (args.length == 1 && typeof args[0] == 'string') {
          methods = methods.concat(getMethods('getterSetter'));
     }
     return ($.inArray(method, methods) != -1);
}
$.widget = function(name, prototype) {
     var namespace = name.split(".")[0];
     name = name.split(".")[1];
     // create plugin method
     $.fn[name] = function(options) {
          var isMethodCall = (typeof options == 'string'),
               args = Array.prototype.slice.call(arguments, 1);
          // prevent calls to internal methods
          if (isMethodCall && options.substring(0, 1) == '_') {
               return this;
          }
          // handle getter methods
          if (isMethodCall && getter(namespace, name, options, args)) {
               var instance = $.data(this[0], name);
               return (instance ? instance[options].apply(instance, args)
                    : undefined);
          }
          // handle initialization and non-getter methods
          return this.each(function() {
               var instance = $.data(this, name);
               // constructor
               (!instance && !isMethodCall &&
                    $.data(this, name, new $[namespace][name](this, options))._init());
               // method call
               (instance && isMethodCall && $.isFunction(instance[options]) &&
                    instance[options].apply(instance, args));
          });
     };
     // create widget constructor
     $[namespace] = $[namespace] || {};
     $[namespace][name] = function(element, options) {
          var self = this;
          this.namespace = namespace;
          this.widgetName = name;
          this.widgetEventPrefix = $[namespace][name].eventPrefix || name;
          this.widgetBaseClass = namespace + '-' + name;
          this.options = $.extend(true, {},
               $.widget.defaults,
               $[namespace][name].defaults,
               $.metadata && $.metadata.get(element)[name],
               options);
          this.element = $(element)
               .bind('setData.' + name, function(event, key, value) {
                    if (event.target == element) {
                         return self._setData(key, value);
                    }
               })
               .bind('getData.' + name, function(event, key) {
                    if (event.target == element) {
                         return self._getData(key);
                    }
               })
               .bind('remove', function() {
                    return self.destroy();
               });
     };
     // add widget prototype
     $[namespace][name].prototype = $.extend({}, $.widget.prototype, prototype);
     // TODO: merge getter and getterSetter properties from widget prototype
     // and plugin prototype
     $[namespace][name].getterSetter = 'option';
};
$.widget.prototype = {
     _init: function() {},
     destroy: function() {
          this.element.removeData(this.widgetName)
               .removeClass(this.widgetBaseClass + '-disabled' + ' ' + this.namespace + '-state-disabled')
               .removeAttr('aria-disabled');
     },
     option: function(key, value) {
          var options = key,
               self = this;
          if (typeof key == "string") {
               if (value === undefined) {
                    return this._getData(key);
               }
               options = {};
               options[key] = value;
          }
          $.each(options, function(key, value) {
               self._setData(key, value);
          });
     },
     _getData: function(key) {
          return this.options[key];
     },
     _setData: function(key, value) {
          this.options[key] = value;
          if (key == 'disabled') {
               this.element
                    [value ? 'addClass' : 'removeClass'](
                         this.widgetBaseClass + '-disabled' + ' ' +
                         this.namespace + '-state-disabled')
                    .attr("aria-disabled", value);
          }
     },
     enable: function() {
          this._setData('disabled', false);
     },
     disable: function() {
          this._setData('disabled', true);
     },
     _trigger: function(type, event, data) {
          var callback = this.options[type],
               eventName = (type == this.widgetEventPrefix
                    ? type : this.widgetEventPrefix + type);
          event = $.Event(event);
          event.type = eventName;
          // copy original event properties over to the new event
          // this would happen if we could call $.event.fix instead of $.Event
          // but we don't have a way to force an event to be fixed multiple times
          if (event.originalEvent) {
               for (var i = $.event.props.length, prop; i;) {
                    prop = $.event.props[--i];
                    event[prop] = event.originalEvent[prop];
               }
          }
          this.element.trigger(event, data);
          return !($.isFunction(callback) && callback.call(this.element[0], event, data) === false
               || event.isDefaultPrevented());
     }
};
$.widget.defaults = {
     disabled: false
};
})(jQuery);
/* Ende JQuery_UI */
/* Start JQuery_UI_Effects */
/*
 * jQuery UI Effects 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/
 */
;jQuery.effects || (function($) {
$.effects = {
     version: "1.7.2",
     // Saves a set of properties in a data storage
     save: function(element, set) {
          for(var i=0; i < set.length; i++) {
               if(set[i] !== null) element.data("ec.storage."+set[i], element[0].style[set[i]]);
          }
     },
     // Restores a set of previously saved properties from a data storage
     restore: function(element, set) {
          for(var i=0; i < set.length; i++) {
               if(set[i] !== null) element.css(set[i], element.data("ec.storage."+set[i]));
          }
     },
     setMode: function(el, mode) {
          if (mode == 'toggle') mode = el.is(':hidden') ? 'show' : 'hide'; // Set for toggle
          return mode;
     },
     getBaseline: function(origin, original) { // Translates a [top,left] array into a baseline value
          // this should be a little more flexible in the future to handle a string & hash
          var y, x;
          switch (origin[0]) {
               case 'top': y = 0; break;
               case 'middle': y = 0.5; break;
               case 'bottom': y = 1; break;
               default: y = origin[0] / original.height;
          };
          switch (origin[1]) {
               case 'left': x = 0; break;
               case 'center': x = 0.5; break;
               case 'right': x = 1; break;
               default: x = origin[1] / original.width;
          };
          return {x: x, y: y};
     },
     // Wraps the element around a wrapper that copies position properties
     createWrapper: function(element) {
          //if the element is already wrapped, return it
          if (element.parent().is('.ui-effects-wrapper'))
               return element.parent();
          //Cache width,height and float properties of the element, and create a wrapper around it
          var props = { width: element.outerWidth(true), height: element.outerHeight(true), 'float': element.css('float') };
          element.wrap('<div class="ui-effects-wrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');
          var wrapper = element.parent();
          //Transfer the positioning of the element to the wrapper
          if (element.css('position') == 'static') {
               wrapper.css({ position: 'relative' });
               element.css({ position: 'relative'} );
          } else {
               var top = element.css('top'); if(isNaN(parseInt(top,10))) top = 'auto';
               var left = element.css('left'); if(isNaN(parseInt(left,10))) left = 'auto';
               wrapper.css({ position: element.css('position'), top: top, left: left, zIndex: element.css('z-index') }).show();
               element.css({position: 'relative', top: 0, left: 0 });
          }
          wrapper.css(props);
          return wrapper;
     },
     removeWrapper: function(element) {
          if (element.parent().is('.ui-effects-wrapper'))
               return element.parent().replaceWith(element);
          return element;
     },
     setTransition: function(element, list, factor, value) {
          value = value || {};
          $.each(list, function(i, x){
               unit = element.cssUnit(x);
               if (unit[0] > 0) value[x] = unit[0] * factor + unit[1];
          });
          return value;
     },
     //Base function to animate from one class to another in a seamless transition
     animateClass: function(value, duration, easing, callback) {
          var cb = (typeof easing == "function" ? easing : (callback ? callback : null));
          var ea = (typeof easing == "string" ? easing : null);
          return this.each(function() {
               var offset = {}; var that = $(this); var oldStyleAttr = that.attr("style") || '';
               if(typeof oldStyleAttr == 'object') oldStyleAttr = oldStyleAttr["cssText"]; /* Stupidly in IE, style is a object.. */
               if(value.toggle) { that.hasClass(value.toggle) ? value.remove = value.toggle : value.add = value.toggle; }
               //Let's get a style offset
               var oldStyle = $.extend({}, (document.defaultView ? document.defaultView.getComputedStyle(this,null) : this.currentStyle));
               if(value.add) that.addClass(value.add); if(value.remove) that.removeClass(value.remove);
               var newStyle = $.extend({}, (document.defaultView ? document.defaultView.getComputedStyle(this,null) : this.currentStyle));
               if(value.add) that.removeClass(value.add); if(value.remove) that.addClass(value.remove);
               // The main function to form the object for animation
               for(var n in newStyle) {
                    if( typeof newStyle[n] != "function" && newStyle[n] /* No functions and null properties */
                    && n.indexOf("Moz") == -1 && n.indexOf("length") == -1 /* No mozilla spezific render properties. */
                    && newStyle[n] != oldStyle[n] /* Only values that have changed are used for the animation */
                    && (n.match(/color/i) || (!n.match(/color/i) && !isNaN(parseInt(newStyle[n],10)))) /* Only things that can be parsed to integers or colors */
                    && (oldStyle.position != "static" || (oldStyle.position == "static" && !n.match(/left|top|bottom|right/))) /* No need for positions when dealing with static positions */
                    ) offset[n] = newStyle[n];
               }
               that.animate(offset, duration, ea, function() { // Animate the newly constructed offset object
                    // Change style attribute back to original. For stupid IE, we need to clear the damn object.
                    if(typeof $(this).attr("style") == 'object') { $(this).attr("style")["cssText"] = ""; $(this).attr("style")["cssText"] = oldStyleAttr; } else $(this).attr("style", oldStyleAttr);
                    if(value.add) $(this).addClass(value.add); if(value.remove) $(this).removeClass(value.remove);
                    if(cb) cb.apply(this, arguments);
               });
          });
     }
};
function _normalizeArguments(a, m) {
     var o = a[1] && a[1].constructor == Object ? a[1] : {}; if(m) o.mode = m;
     var speed = a[1] && a[1].constructor != Object ? a[1] : (o.duration ? o.duration : a[2]); //either comes from options.duration or the secon/third argument
          speed = $.fx.off ? 0 : typeof speed === "number" ? speed : $.fx.speeds[speed] || $.fx.speeds._default;
     var callback = o.callback || ( $.isFunction(a[1]) && a[1] ) || ( $.isFunction(a[2]) && a[2] ) || ( $.isFunction(a[3]) && a[3] );
     return [a[0], o, speed, callback];
    
}
//Extend the methods of jQuery
$.fn.extend({
     //Save old methods
     _show: $.fn.show,
     _hide: $.fn.hide,
     __toggle: $.fn.toggle,
     _addClass: $.fn.addClass,
     _removeClass: $.fn.removeClass,
     _toggleClass: $.fn.toggleClass,
     // New effect methods
     effect: function(fx, options, speed, callback) {
          return $.effects[fx] ? $.effects[fx].call(this, {method: fx, options: options || {}, duration: speed, callback: callback }) : null;
     },
     show: function() {
          if(!arguments[0] || (arguments[0].constructor == Number || (/(slow|normal|fast)/).test(arguments[0])))
               return this._show.apply(this, arguments);
          else {
               return this.effect.apply(this, _normalizeArguments(arguments, 'show'));
          }
     },
     hide: function() {
          if(!arguments[0] || (arguments[0].constructor == Number || (/(slow|normal|fast)/).test(arguments[0])))
               return this._hide.apply(this, arguments);
          else {
               return this.effect.apply(this, _normalizeArguments(arguments, 'hide'));
          }
     },
     toggle: function(){
          if(!arguments[0] ||
               (arguments[0].constructor == Number || (/(slow|normal|fast)/).test(arguments[0])) ||
               ($.isFunction(arguments[0]) || typeof arguments[0] == 'boolean')) {
               return this.__toggle.apply(this, arguments);
          } else {
               return this.effect.apply(this, _normalizeArguments(arguments, 'toggle'));
          }
     },
     addClass: function(classNames, speed, easing, callback) {
          return speed ? $.effects.animateClass.apply(this, [{ add: classNames },speed,easing,callback]) : this._addClass(classNames);
     },
     removeClass: function(classNames,speed,easing,callback) {
          return speed ? $.effects.animateClass.apply(this, [{ remove: classNames },speed,easing,callback]) : this._removeClass(classNames);
     },
     toggleClass: function(classNames,speed,easing,callback) {
          return ( (typeof speed !== "boolean") && speed ) ? $.effects.animateClass.apply(this, [{ toggle: classNames },speed,easing,callback]) : this._toggleClass(classNames, speed);
     },
     morph: function(remove,add,speed,easing,callback) {
          return $.effects.animateClass.apply(this, [{ add: add, remove: remove },speed,easing,callback]);
     },
     switchClass: function() {
          return this.morph.apply(this, arguments);
     },
     // helper functions
     cssUnit: function(key) {
          var style = this.css(key), val = [];
          $.each( ['em','px','%','pt'], function(i, unit){
               if(style.indexOf(unit) > 0)
                    val = [parseFloat(style), unit];
          });
          return val;
     }
});
/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */
// We override the animation for all of these color styles
$.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
          $.fx.step[attr] = function(fx) {
                    if ( fx.state == 0 ) {
                              fx.start = getColor( fx.elem, attr );
                              fx.end = getRGB( fx.end );
                    }
                    fx.elem.style[attr] = "rgb(" + [
                              Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0],10), 255), 0),
                              Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1],10), 255), 0),
                              Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2],10), 255), 0)
                    ].join(",") + ")";
               };
});
// Color Conversion functions from highlightFade
// By Blair Mitchelmore
// http://jquery.offput.ca/highlightFade/
// Parse strings looking for color tuples [255,255,255]
function getRGB(color) {
          var result;
          // Check if we're already dealing with an array of colors
          if ( color && color.constructor == Array && color.length == 3 )
                    return color;
          // Look for rgb(num,num,num)
          if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
                    return [parseInt(result[1],10), parseInt(result[2],10), parseInt(result[3],10)];
          // Look for rgb(num%,num%,num%)
          if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
                    return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];
          // Look for #a0b1c2
          if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
                    return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];
          // Look for #fff
          if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
                    return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];
          // Look for rgba(0, 0, 0, 0) == transparent in Safari 3
          if (result = /rgba\(0, 0, 0, 0\)/.exec(color))
                    return colors['transparent'];
          // Otherwise, we're most likely dealing with a named color
          return colors[$.trim(color).toLowerCase()];
}
function getColor(elem, attr) {
          var color;
          do {
                    color = $.curCSS(elem, attr);
                    // Keep going until we find an element that has color, or we hit the body
                    if ( color != '' && color != 'transparent' || $.nodeName(elem, "body") )
                              break;
                    attr = "backgroundColor";
          } while ( elem = elem.parentNode );
          return getRGB(color);
};
// Some named colors to work with
// From Interface by Stefan Petre
// http://interface.eyecon.ro/
var colors = {
     aqua:[0,255,255],
     azure:[240,255,255],
     beige:[245,245,220],
     black:[0,0,0],
     blue:[0,0,255],
     brown:[165,42,42],
     cyan:[0,255,255],
     darkblue:[0,0,139],
     darkcyan:[0,139,139],
     darkgrey:[169,169,169],
     darkgreen:[0,100,0],
     darkkhaki:[189,183,107],
     darkmagenta:[139,0,139],
     darkolivegreen:[85,107,47],
     darkorange:[255,140,0],
     darkorchid:[153,50,204],
     darkred:[139,0,0],
     darksalmon:[233,150,122],
     darkviolet:[148,0,211],
     fuchsia:[255,0,255],
     gold:[255,215,0],
     green:[0,128,0],
     indigo:[75,0,130],
     khaki:[240,230,140],
     lightblue:[173,216,230],
     lightcyan:[224,255,255],
     lightgreen:[144,238,144],
     lightgrey:[211,211,211],
     lightpink:[255,182,193],
     lightyellow:[255,255,224],
     lime:[0,255,0],
     magenta:[255,0,255],
     maroon:[128,0,0],
     navy:[0,0,128],
     olive:[128,128,0],
     orange:[255,165,0],
     pink:[255,192,203],
     purple:[128,0,128],
     violet:[128,0,128],
     red:[255,0,0],
     silver:[192,192,192],
     white:[255,255,255],
     yellow:[255,255,0],
     transparent: [255,255,255]
};
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/
// t: current time, b: begInnIng value, c: change In value, d: duration
$.easing.jswing = $.easing.swing;
$.extend($.easing,
{
     def: 'easeOutQuad',
     swing: function (x, t, b, c, d) {
          //alert($.easing.default);
          return $.easing[$.easing.def](x, t, b, c, d);
     },
     easeInQuad: function (x, t, b, c, d) {
          return c*(t/=d)*t + b;
     },
     easeOutQuad: function (x, t, b, c, d) {
          return -c *(t/=d)*(t-2) + b;
     },
     easeInOutQuad: function (x, t, b, c, d) {
          if ((t/=d/2) < 1) return c/2*t*t + b;
          return -c/2 * ((--t)*(t-2) - 1) + b;
     },
     easeInCubic: function (x, t, b, c, d) {
          return c*(t/=d)*t*t + b;
     },
     easeOutCubic: function (x, t, b, c, d) {
          return c*((t=t/d-1)*t*t + 1) + b;
     },
     easeInOutCubic: function (x, t, b, c, d) {
          if ((t/=d/2) < 1) return c/2*t*t*t + b;
          return c/2*((t-=2)*t*t + 2) + b;
     },
     easeInQuart: function (x, t, b, c, d) {
          return c*(t/=d)*t*t*t + b;
     },
     easeOutQuart: function (x, t, b, c, d) {
          return -c * ((t=t/d-1)*t*t*t - 1) + b;
     },
     easeInOutQuart: function (x, t, b, c, d) {
          if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
          return -c/2 * ((t-=2)*t*t*t - 2) + b;
     },
     easeInQuint: function (x, t, b, c, d) {
          return c*(t/=d)*t*t*t*t + b;
     },
     easeOutQuint: function (x, t, b, c, d) {
          return c*((t=t/d-1)*t*t*t*t + 1) + b;
     },
     easeInOutQuint: function (x, t, b, c, d) {
          if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
          return c/2*((t-=2)*t*t*t*t + 2) + b;
     },
     easeInSine: function (x, t, b, c, d) {
          return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
     },
     easeOutSine: function (x, t, b, c, d) {
          return c * Math.sin(t/d * (Math.PI/2)) + b;
     },
     easeInOutSine: function (x, t, b, c, d) {
          return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
     },
     easeInExpo: function (x, t, b, c, d) {
          return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
     },
     easeOutExpo: function (x, t, b, c, d) {
          return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
     },
     easeInOutExpo: function (x, t, b, c, d) {
          if (t==0) return b;
          if (t==d) return b+c;
          if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
          return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
     },
     easeInCirc: function (x, t, b, c, d) {
          return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
     },
     easeOutCirc: function (x, t, b, c, d) {
          return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
     },
     easeInOutCirc: function (x, t, b, c, d) {
          if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
          return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
     },
     easeInElastic: function (x, t, b, c, d) {
          var s=1.70158;var p=0;var a=c;
          if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
          if (a < Math.abs(c)) { a=c; var s=p/4; }
          else var s = p/(2*Math.PI) * Math.asin (c/a);
          return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
     },
     easeOutElastic: function (x, t, b, c, d) {
          var s=1.70158;var p=0;var a=c;
          if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
          if (a < Math.abs(c)) { a=c; var s=p/4; }
          else var s = p/(2*Math.PI) * Math.asin (c/a);
          return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
     },
     easeInOutElastic: function (x, t, b, c, d) {
          var s=1.70158;var p=0;var a=c;
          if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
          if (a < Math.abs(c)) { a=c; var s=p/4; }
          else var s = p/(2*Math.PI) * Math.asin (c/a);
          if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
          return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
     },
     easeInBack: function (x, t, b, c, d, s) {
          if (s == undefined) s = 1.70158;
          return c*(t/=d)*t*((s+1)*t - s) + b;
     },
     easeOutBack: function (x, t, b, c, d, s) {
          if (s == undefined) s = 1.70158;
          return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
     },
     easeInOutBack: function (x, t, b, c, d, s) {
          if (s == undefined) s = 1.70158;
          if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
          return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
     },
     easeInBounce: function (x, t, b, c, d) {
          return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
     },
     easeOutBounce: function (x, t, b, c, d) {
          if ((t/=d) < (1/2.75)) {
               return c*(7.5625*t*t) + b;
          } else if (t < (2/2.75)) {
               return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
          } else if (t < (2.5/2.75)) {
               return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
          } else {
               return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
          }
     },
     easeInOutBounce: function (x, t, b, c, d) {
          if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
          return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
     }
});
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
})(jQuery);

/**
 * @author trixta
 */
(function($){
if(!window.console){
 window.console = {};
}
if(!console.log){
 console.log = function(){};
}
var head = /h\d/,
 form = /input|select|button|textarea/,
 exp = $.expr.filters
;
exp.srfocusable = function(elem){
 var name = elem.nodeName.toLowerCase();
 return ( (head.test( name )) || (name === 'area') || (name === 'a' && elem.href) || (form.test(name) && !elem.disabled && elem.type !== 'hidden'));
};
var semanticAtom = ['p', 'li', 'dt', 'dd', 'blockquote', 'address', 'th', 'td', 'dfn'];
exp.semanticAtom = function(elem){
 var name = elem.nodeName.toLowerCase();
 return ( exp.srfocusable(elem) || $.inArray(name, semanticAtom) !== -1);
};
$.fn.firstExpOf = function(sel){
 var elems = $('*', this),
 len = elems.length,
 ret
 ;
 for(var i = 0; i < len; i++){
 if(exp[sel](elems[i], i)){
 ret = [elems[i]];
 break;
 }
 }
 return this.pushStack(ret);
};
$.fn.getHrefHash = function(sel){
 var ret = '';
 if(this[0]){
 ret = this[0].href.split('#')[1];
 ret = (ret) ? '#'+ret : '';
 }
 return ret;
};
$.fn.lastExpOf = function(sel){
 var elems = $('*', this),
 len = elems.length,
 ret
 ;
 while(len--){
 if(exp[sel](elems[i], i)){
 ret = [elems[len]];
 break;
 }
 }
 return this.pushStack(ret);
};
})(jQuery);
(function($){
var allowFocus = true;
function stopFocus(){
 allowFocus = false;
 setTimeout(function(){
 allowFocus = true;
 }, 1);
}
function testDomTarget(e){
 var oE = e.originalEvent;
 if(e.target === document || e.target === window || $.nodeName(e.target, 'body') || $.nodeName(e.target, 'html')){
 stopFocus();
 return false;
 }
 if(oE){
 if(
 allowFocus && e.target && e.target.nodeType === 1 &&
 (oE.explicitOriginalTarget && oE.explicitOriginalTarget && oE.explicitOriginalTarget !== window &&  oE.explicitOriginalTarget !== document && !$(oE.explicitOriginalTarget).is('html, body') ||
 oE.toElement || oE.fromElement)
 ) {
 return true;
 } else {
 return false;
 }
 }
 return true;
}
$.each(['focusin', 'focusout'], function(i, eType){
 $.event.special['dom'+ eType] = {
 setup: function(){
 $(this)
 .bind(eType, $.event.special['dom'+ eType].handler);
                return true;
            },
 teardown: function(){
                $(this).unbind(eType, $.event.special['dom'+ eType].handler);
                return true;
            },
            handler: function(e){
 if(testDomTarget(e)){
                e = $.extend({}, e, {type: 'dom'+ eType});
                return $.event.handle.call(this, e);
 }
            }
 };
});
})(jQuery);



/* Start jquery.cookie */
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
/* Ende jquery.cookie */
/* Start Addon_Clearfields */
(function($){

jQuery.fn.attachToField = function (id, defaultValue){
    var field = $('#'+id);
    var input_text = field.attr('value');
    return jQuery(field).bind('focus',function(){
       if( input_text == defaultValue ) {
          field.attr('value','');
        }
      }).bind('blur',function(){
        if(field.attr('value')==''){  
          field.attr('value',input_text);
        }
        input_text = field.attr('value');
      });
};
jQuery.init_clearfields = function(){

// attach events to search form input
      jQuery('#f46400d46406').attachToField('f46400d46406','Suchbegriff');
      jQuery('#f46500d46512').attachToField('f46500d46512','');
      jQuery('#f46590d46592').attachToField('f46590d46592','Ihre E-Mail-Adresse');
return;
};

})(jQuery);
/* Ende Addon_Clearfields */
/* Start js_allgemein */
/* *****************************
Schriftgröße ändern
***************************** */
var fontSizeArray = [ '0.68em', '0.75em', '0.9em', '1em' ];
var statusFontSize = 0;
var cookieFontSize = $.cookie("FontSize");
if (cookieFontSize == null) cookieFontSize = 1;
setFontSize(cookieFontSize);
function setFontSize(val)
{
 // validate data
 val = parseInt(val);
 if (isNaN(val)) val = 0;
 statusFontSize += val;
 if (statusFontSize < 0) statusFontSize = 0;
 if (statusFontSize > fontSizeArray.length - 1) statusFontSize = fontSizeArray.length - 1;
 // change current font size
 if (statusFontSize == 0) {
  $('#buttonFontMinus').attr("src", "/SiteGlobals/StyleBundles/Bilder/SAT/toolbar_but_minus_inactive.png?__blob=normal");
 } else {
  $('#buttonFontMinus').attr("src", "/SiteGlobals/StyleBundles/Bilder/SAT/toolbar_but_minus.png?__blob=normal");
 }
  if (statusFontSize == (fontSizeArray.length - 1)) {
  $('#buttonFontPlus').attr("src", "/SiteGlobals/StyleBundles/Bilder/SAT/toolbar_but_plus_inactive.png?__blob=normal")
 } else {
  $('#buttonFontPlus').attr("src", "/SiteGlobals/StyleBundles/Bilder/SAT/toolbar_but_plus.png?__blob=normal")
 }
$('#buttonFontMinus').toggleClass ('noHand', statusFontSize == 0);
 $('#buttonFontPlus').toggleClass ('noHand', statusFontSize == (fontSizeArray.length - 1));
 document.body.style.fontSize = fontSizeArray[statusFontSize];
 if(document.getElementsByTagName("select").length > 0) {
  var dropdowns = document.getElementsByName('downloadKategorie')[0];
  if (dropdowns) dropdowns.style.fontSize = '0.75em';
 }
 //save to cookie
    $.cookie("FontSize", statusFontSize, { path: '/' });
}

/* *********************
Shadowbox mit JS öffnen
********************* */
function openShadowbox(content, player, width, height, title)
{
 Shadowbox.open({
        content:    content,
        player:     player,
        title:      title,
        height:     height,
        width:      width
    });
}
/* *********************
Lightbox SiteAdmin
********************* */
function lightboxSAClose() {
$('.wrapperLightbox').hide('slow');
$('#mask').hide();
}
/**********************
siemensGlobal öffnen/verbergen
siteShareLayer öffnen/verbergen
********************* */
jQuery(function($) {
   initSiteShare();
 initSiemensGlobal();
});
function initSiteShare() {
 var isAjaxLoad = false;
 var flip = 0;
 var $c = $('#siteShareLayer .siteShareContent');
 var $src = '#socialBookmarking > *';
 $('#siteShare .siteShareLink, #siteShareLayer .siteShareClose').click( function(e) {
   if ($('.countrySelectionFlag').attr('src') == '/Resources/Images/_Global/misc/flags_small/World_black.png?__blob=normal' ) {
      $('.countrySelectionFlag').attr('src', '/Resources/Images/_Global/misc/flags_small/World_white.png?__blob=normal');
   }
  e.preventDefault();
  $('#siteShareLayer').toggle(flip++ % 2 == 0);
  if($(this).attr('href')!='#' && ! isAjaxLoad ) {
   loadContent($c, $(this).attr('href'), $src);
   isAjaxLoad = true;
  }
 });
}
function initSiemensGlobal() {
 var isAjaxLoad = false;
 var flip = 1;
 var $c = $('#siemensglobal');
 var $src = '#siemensglobal.visible > *';
 $('.flagge a, #siemensglobalButton a, #siemensglobalClose a').live( 'click', function(e) {
 if ($('.countrySelectionFlag').attr('src') == '/Resources/Images/_Global/misc/flags_small/World_black.png?__blob=normal' ) {
   $('.countrySelectionFlag').attr('src', '/Resources/Images/_Global/misc/flags_small/World_white.png?__blob=normal');
 }
  e.preventDefault();
  //$('#siemensglobal').toggle(flip++ % 2 == 0);
$('#siemensglobal').hide();
  if($(this).attr('href')!='#' && ! isAjaxLoad ) {
   loadContent($c, $(this).attr('href'), $src);
   isAjaxLoad = true;
  }
 });
}
function loadContent($c, $href, $src) {
 $c.load($href + " " + $src, function() {
  $c.prev('.ajaxLoading').remove();
 });
}
/* Ende js_allgemein */
/* Start lightbox */
/**
 * @author jkuschel
 */
(function ($) {

var lbWrapper = '<div id="sb-container"><div id="sb-overlay"></div><div id="sb-wrapper"><div id="sb-title"><div id="sb-title-inner"><a href="#" id="lightboxClose"><img width="19" height="19" src="/SiteGlobals/StyleBundles/Bilder/SAT/lightbox_close.png?__blob=normal" alt="lightbox_close"/></a></div></div><div id="sb-wrapper-inner"><div id="sb-body"><div id="sb-body-inner"></div><div id="sb-loading"><div id="sb-loading-inner"><span>lade</span></div></div></div></div></div></div>';
 jQuery.fn.findCenter =  function (){
   var center = new Object;
   center.X = $(window).width() / 2;
   center.Y = $(window).height() / 2;
   return center;
 };
jQuery.extend({
 updateLocation: function(){
  var url = window.location.href;
  var newurl = url.substr(0,url.indexOf('&'));
  window.location.href = newurl;
 }
});
 var getUrlVars = function() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
 };
var satLightbox = function(target, options, number, url){
     var lightbox = this;
        lightbox.settings = options;
     var $target = $(target),
          target = target;
        
   
    var resizeLightbox = function(){
     var winWidth = $(window).width();
     var winHeight = $(window).height();
     var lbDim = new Object;
     lbDim.Y = $(this).height();
     lbDim.X = $(this).width();
 
     if(winWidth < 1024){
      lbDim.X = winWidth -20;
     } else lbDim.X = 920;
     if(winHeight < $(this).height()){
      lbDim.Y = winHeight-20;
     } else if (winHeight > $(this).height() && winHeight < 480) {
      lbDim.Y = winHeight-20;
     } else lbDim.Y = 480;
     return lbDim;
    };
    var animateLightbox = function(wrapper) {
     var effect = lightbox.settings.animation;
     var dimensions = resizeLightbox();
     var center = wrapper.findCenter();
     var lbContent = wrapper.find('.wrapperLightbox');
     lbContent.show().css({opacity:0,display:'block'});
     switch (effect){
      case 'center':
        if (center.X - dimensions.X / 2 > 0) {
         leftPosition = center.X - dimensions.X / 2;
       } else leftPosition = 10;
       if (center.Y - dimensions.Y / 2 > 0) {
         topPosition = center.Y - dimensions.Y / 2;
       } else topPosition = 5;             
        wrapper.css({
         top: center.Y,
         left: center.X
        }).animate({top:topPosition, left:leftPosition, width: dimensions.X, height: dimensions.Y+24},1000, function(){
          lbContent.css({top:25,left:0,width: dimensions.X - 25, height: dimensions.Y})
       .animate({opacity:1},500);
       $('#sb-loading').css('z-index','-1');
        });
         break;
      default:
       if (center.X - dimensions.X / 2 > 0) {
         center.X = center.X - dimensions.X / 2;
       } else center.X = 10;
       if (center.Y - dimensions.Y / 2 > 0) {
        center.Y = center.Y - dimensions.Y / 2;
       } else center.Y = 5;
     
         wrapper.css({
           top: center.Y,
           left: center.X
         }).animate({width: dimensions.X, height: dimensions.Y+24},1000, function(){
          lbContent.css({top:25,left:0,width: dimensions.X - 25, height: dimensions.Y})
       .animate({opacity:1},500);
       $('#sb-loading').css('z-index','-1');
        });    
         break;
       }
    };
    var findLbContent = function(){
     if(lightbox.settings.findId == 'select'){
      lbId = target.siblings('select').val();
     } else if (lightbox.settings.findId == 'info'){
      lbId = target.parent().attr('id')+target.parent().find('select').val();
     } else if (lightbox.settings.findId == 'new'){
      lbId = target.attr('rel').replace(/tr/g,"lb");
     }
     content = $('div[id*='+lbId+']');
     return content;
    }
    var getAjax = function(url){
     var baseUrl, params;
     if (url == null) {
      baseUrl = target.attr('href');
      params = lightbox.settings.location;
     } else {
      baseUrl = unescape(url);
      params = lightbox.settings.location;
     }
     return jQuery.ajax({
        url: baseUrl,
        data: params,
        dataType:'html',
        async:false,
        success: function(data){
        },
        error: function(a, b, c){
         console.log(a, b, c);
        },
        complete: function (e, data, opt) {
         if(e.respone != null){
          setCloseButton(e.response);
            return e.response;
         } else {
          setCloseButton(e.responeText);
            return e.responseText;
         }
         
        }
       });
    }
    var attachEvents = function(elem){
     $(elem).click(function(){  
      lightbox.show();
      return false;
     });
     $(window).resize(function(){
     var el = $('#sb-wrapper');
     var dimensions = resizeLightbox();
      var center = el.findCenter();
      if (center.X - dimensions.X / 2 > 0) {
         center.X = center.X - dimensions.X / 2;
       } else center.X = 10;
   if (center.Y - dimensions.Y / 2 > 0) {
        center.Y = center.Y - dimensions.Y / 2;
   } else center.Y = 5;
      el.css({top:center.Y, left: center.X,width: dimensions.X, height: dimensions.Y})
      .find('.wrapperLightbox').css({width: dimensions.X - 25, height: dimensions.Y});
   });
     }
 
     var setCloseButton = function(content) {
      button = $(content).find('#lightboxClose');
     if (!button.length){
      $(content).prepend('<a href="#" id="lightboxClose"><img width="19" height="19" src="/SiteGlobals/StyleBundles/Bilder/SAT/lightbox_close.png?__blob=normal" alt="lightbox_close"/></a>');
      button = $(content).find('#lightboxClose');
     };
     if (lightbox.settings.ajax == 'on'){
      button = $('body').find('#lightboxClose');
     }
     return button.click(function(){
        lightbox.close($(this));
        return false;
     });
   };
     lightbox.init = function() {
      var content;
      var button;
      $('body').remove('#sb-container');
      if (lightbox.settings.onload){
       content = $('.lightboxOnLoad');
       if (!$(content).length){
        return;
       }
       content.hide();
       lightbox.show(content);
      } else {
       if(target != null){
       target.each(function(){
         attachEvents($(this));
       });
       }
      }
     };
     lightbox.show = function(content, url) {
       if(lightbox.settings.ajax == 'on') {
        if (url == null){
         retVal = getAjax();
        } else {
         retVal = getAjax(url);
        }
        content = retVal.responseText;  
       }  
       if(!$(content).length){
        content = findLbContent();
        $(content).show().addClass('wrapperLightbox');
       } 
       $(content).addClass(function(index, currentClass) {
       var addedClass;
       if ( currentClass === "lightboxOnLoad" ) {
         addedClass = "wrapperLightbox";
       }
        return addedClass;
     });
     $('body').append(lbWrapper).find('#sb-body-inner').append(content).end().find('#sb-container').addClass('on');
     if($('.jsPlain').length > 0){
        $('.jsPlain').each(function(){
        var mediaPlayerId = $(this).parent().attr('id');
       if(jQuery.browser.msie && jQuery.browser.version < 9){
         var elem = $(this).text();
         var script = "<SCRIPT DEFER=TRUE>";
         script = script + elem +"</SCRIPT>";
         $(this).html(script);
        } else {
          var $newScript = $('<script></script>').attr('type','text/javascript').html($(this));
          $(content).append($newScript);   
        };
        video_init(mediaPlayerId);
       })
       }
     var wrapper = $('#sb-wrapper');
     animateLightbox(wrapper);   
     setCloseButton(content);
     $('#sb-overlay').click(function(){
        lightbox.close($(this));
        return false;
     });
     content = "";
     };
     lightbox.close = function(elem) {
      if (lightbox.settings.ajax == 'on'){
       return elem.closest('#sb-container').remove(); 
      } else if(lightbox.settings.findId != ''){
       $('div[id*='+lbId+']').appendTo('body').hide();
       return $('#sb-container').remove();
      } else {
       if (lightbox.settings.onload){
        jQuery.updateLocation();
       };
       return elem.closest('#sb-container').hide();
      }
     };
   
     lightbox.getNumber = function() {
      return number;
     }
};
jQuery.fn.satLightbox = function(options){
 options = jQuery.extend({}, jQuery.fn.satLightbox.defaults, options);
   var params = getUrlVars();
   var i = 1;
   if("imgDoc" in params){
    var url = params.imgDoc;
    var newLb = new satLightbox(null ,options, i);
    newLb.init();
    newLb.show(null, url);
  }
 return this.each(function(){
  $(this).next().hide();
  var lb = new satLightbox($(this),options, i);
  lb.init();
  i++;
  if ("showLightbox" in params) {
   var number = params.showLightbox;
   if(number == null){
     number = 1;
   }
   if(number == lb.getNumber()){
     lb.show();
   }
  } 
 });
};
jQuery.fn.satLightbox.defaults = {
   ajax: 'off',
   location: 'view=render[Lightbox]',
   onload:false,
   findId:'',
   animation:'topleft'
};
})(jQuery);
/* Ende lightbox */
/* Start replaceCountrySelectionLink */
jQuery(function() {
 var link = "SiteGlobals/Functions/CountrySelection/CountrySelection.html?nn=50588";
 jQuery(".flag a").click(function(event) {
  event.preventDefault();
  if(jQuery('#siemensglobal').is(":visible")) {
   var countrySelect;
    //$('.countrySelectionFlag').attr('src', 'http://media.hearing.siemens.com/includes/css/_images/World_black.png');
   jQuery('#siemensglobal').hide();
   jQuery('.flag').each(function() {
    jQuery(this).attr('class', 'flag')
   });
  } else {
   try {
    if(localStorage.getItem('countrySelect')) {
     countrySelect = localStorage.getItem('2');
    } else {
     countrySelect = null;
    }
   } catch(e) {
    countrySelect = null;
   }
   if((countrySelect == null || typeof (countrySelect) == "undefined" || countrySelect == 'undefined' || countrySelect == 'null') && !jQuery('#siemensglobal').children().length) {
    jQuery.ajax({
     url : '/SiteGlobals/Functions/CountrySelection/CountrySelection.html',
     data : 'view=render[StandardOhneLayout]',
     cache : false,
     dataType : 'html',
     complete : function(e, textStatus) {
      countrySelect = e.responseText;
      try {
       localStorage.setItem('countrySelect', countrySelect);
      } catch(ex) {
      }
      jQuery('#siemensglobal').append(countrySelect);
     }
    });
   } else if(!jQuery('#siemensglobal').children().length && (countrySelect != null || typeof (countrySelect) != "undefined" || countrySelect != 'undefined')) {
    jQuery('#siemensglobal').append(countrySelect);
   }
   jQuery('#siemensglobal').show();
    //$('.countrySelectionFlag').attr('src', '/Resources/Images/_Global/misc/flags_small/World_black.png?__blob=normal');
   jQuery('.flag').each(function() {
    jQuery(this).attr('class', 'flag active')
   });
   jQuery('#wrapperOuter').bind('click', function() {
     //$('.countrySelectionFlag').attr('src', '/Resources/Images/_Global/misc/flags_small/World_white.png?__blob=normal');
    jQuery('#siemensglobal').hide();
    jQuery('.flag').each(function() {
     jQuery(this).attr('class', 'flag')
    });
   });
  }
  return false;
 });
});
/* Ende replaceCountrySelectionLink */
/* Start imageSwitcher */
/**
 * @author jkuschel
 */
;(function($) {
 var imageSwitcher = function(target, options) {
  var switcher = this;
  switcher.settings = options;
  var $target = $(target), target = target;
  var $container = $target.parent().find('.eventPicture').first();
  var image = $container.find('img');
  var changeImage = function(control) {
   var control = control, newImage, newTitle, videoScript;
   if(switcher.settings.ajax == "true") {
    return jQuery.get(control.attr('href'), function(data,status, xhr) {
      newImage = $(data).find('.eventPicture');
      newGallery = $(data).find('.eventGallery');
      $container.html(newImage);
      if($container.find('h2').length > 0){
         if($container.prev()[0].nodeName == 'H2'){
            $container.prev().remove();
         }
      }
      $(newGallery).find('a').each(function() {
       $(this).click(function() {
        changeImage($(this));
        return false;
       });
      });
      $target.children().remove().end().append($(newGallery).children());
      if($('.jsPlain').length > 0){
        $('.jsPlain').each(function(){
        var mediaPlayerId = $(this).parent().attr('id');
       if(jQuery.browser.msie && jQuery.browser.version < 9){
         var elem = $(this).text();
         var script = "<SCRIPT DEFER=TRUE>";
         script = script + elem +"</SCRIPT>";
         $(this).html(script);
        } else {
          var $newScript = $('<script></script>').attr('type','text/javascript').html($(this));
          $container.append($newScript);   
        };
        video_init(mediaPlayerId);
       })
       }
      });
   } else {
    newImage = control.find('img').attr('src');
    newImage = newImage.replace(/thumbnail/g, "poster")
    var newLightbox = newImage.replace(/normal/g, "poster");
    image.attr('src', newImage);
    image.parent().attr('href', newLightbox);
    return;
   }
  };
  switcher.init = function() {
   var buttons = target.find('a');
   return buttons.each(function() {
    $(this).click(function() {
     changeImage($(this));
     return false;
    });
   });
  }
 };
 jQuery.fn.imageSwitcher = function(options) {
  options = jQuery.extend({}, jQuery.fn.imageSwitcher.defaults, options);
  return this.each(function() {
   var switcher = new imageSwitcher($(this), options);
   switcher.init();
  });
 };
 jQuery.fn.imageSwitcher.defaults = {
  ajax : 'false'
 };
})(jQuery);
/* Ende imageSwitcher */
/* Start profiler */
function addInfoIconListener(){
jQuery('tr.info_icon_row td:first-child').hover(
function(event){
var box = jQuery("#" + jQuery(this).parent('tr').attr("id").replace("text", "infobox") );
var offset = jQuery(this).offset();
var x = offset.left + 100;
var y = offset.top;

box.css("left", x)
box.css("top", y)

box.show();
},function(event){
jQuery('.info_box').hide();
}
)
}
/* Ende profiler */
/* Start keyVisual */
// Init key Visual Video

jQuery(document).ready(function(){
 var setCloseButton = function(container,content) {
      $(container).prepend('<a href="#" id="lightboxClose"><img width="19" height="19" src="/SiteGlobals/StyleBundles/Bilder/SAT/lightbox_close.png?__blob=normal" alt="video_close"/></a>');    
      button = $(container).find('#lightboxClose');
      return button.click(function(){  
        $(container).html(content);
        return false;
     });
 };
 if(typeof(videoDoc) != 'undefined') { 
  if(videoDoc.currentVideo){
    jQuery("#keyVisualVideo").click(function(e){
       $elem = $("#keyVisual");
       $cont = $elem.children().clone(true,true);
       e.preventDefault();
       jQuery.ajax({
         url: videoDoc.currentVideo,
         success: function(data, status, xhr){
           $elem.html(data);
           setCloseButton($elem,$cont);
         }
       });
   });

  }
}
});
/* Ende keyVisual */
/* Start Addon_ToggleFAQ */
/*!
 * Addon_toggleFAQ
 * Author: @dsorge
 * Licensed under the MIT license
 */
;(function(jQuery) {
 if(!jQuery.materna) {
  jQuery.materna = {};
 };
 jQuery.materna.Addon_ToggleFAQ = function(el, myFunctionParam, options) {
  // To avoid scope issues, use 'base' instead of 'this'
  // to reference this class from internal events and functions.
  var base = this, questionBtn, btn, answer;
  ;
  // Access to jQuery and DOM versions of element
  base.$el = jQuery(el);
  base.el = el;
  // Add a reverse reference to the DOM object
  base.$el.data("materna.Addon_ToggleFAQ", base);
  base.init = function() {
   base.myFunctionParam = myFunctionParam;
   base.options = $.extend({}, $.materna.Addon_ToggleFAQ.defaultOptions, options);
   // Put your initialization code here
   questionBtn = base.$el.find('.question').css({
    'cursor' : 'pointer',
    'width' : '89%'
   });
   btn = jQuery('<strong class="toggle"> answer </strong>').css({
    'float' : 'right',
    'width' : '8%',
    'text-align' : 'center',
    'cursor' : 'pointer',
    'background-color' : '#006487',
    'border' : '0 none',
    'border-radius' : '3px 3px 3px 3px',
    'color' : '#FFFFFF',
    'font-size' : '0.8em',
    'padding' : '3px 6px'
   }).bind('click', function(e) {
    base.clickFunction();
    return false;
   });
   answer = base.$el.find('.answer').toggle();
   ;
   questionBtn.after(btn);
   questionBtn.bind('click', function(e) {
    base.clickFunction();
    return false;
   });
  };
  base.clickFunction = function() {
   answer.toggle();
   if(answer.is(":visible")) {
    btn.html('close');
   } else {
    btn.html('answer')
   }
  };
  // Run initializer
  base.init();
 };
 jQuery.materna.Addon_ToggleFAQ.defaultOptions = {
  myDefaultValue : ""
 };
 jQuery.fn.materna_Addon_ToggleFAQ = function(myFunctionParam, options) {
  return this.each(function() {(new jQuery.materna.Addon_ToggleFAQ(this, myFunctionParam, options));
  });
 };
})(jQuery);
/* Ende Addon_ToggleFAQ */
/* Start registration */
var countryMappings = {};
         countryMappings['Select_region'] = 'SiteGlobals/Functions/Registration/PleaseChooseARegion.html?nn=50588'
      countryMappings['Select_region'] = 'SiteGlobals/Functions/Registration/PleaseChooseARegion.html?nn=50588';
      countryMappings['Australia'] = 'SiteGlobals/Functions/Registration/AU_RegistrationPage.html?nn=50588';
      countryMappings['Austria'] = 'SiteGlobals/Functions/Registration/AT_RegistrationPage.html?nn=50588';
      countryMappings['Brazil'] = 'SiteGlobals/Functions/Registration/BR_RegistrationPage.html?nn=50588';
      countryMappings['Canada'] = 'SiteGlobals/Functions/Registration/CA_RegistrationPage.html?nn=50588';
      countryMappings['China'] = 'SiteGlobals/Functions/Registration/CN_RegistrationPage.html?nn=50588';
      countryMappings['Czech Republic'] = 'SiteGlobals/Functions/Registration/CZ_RegistrationPage.html?nn=50588';
      countryMappings['Denmark'] = 'SiteGlobals/Functions/Registration/DK_RegistrationPage.html?nn=50588';
      countryMappings['France'] = 'SiteGlobals/Functions/Registration/FR_RegistrationPage.html?nn=50588';
      countryMappings['Germany'] = 'SiteGlobals/Functions/Registration/DE_RegistrationPage.html?nn=50588';
      countryMappings['Hungary'] = 'SiteGlobals/Functions/Registration/HU_RegistrationPage.html?nn=50588';
      countryMappings['India'] = 'SiteGlobals/Functions/Registration/IN_RegistrationPage.html?nn=50588';
      countryMappings['Japan'] = 'SiteGlobals/Functions/Registration/JP_RegistrationPage.html?nn=50588';
      countryMappings['South Korea'] = 'SiteGlobals/Functions/Registration/KR_RegistrationPage.html?nn=50588';
      countryMappings['Netherlands'] = 'SiteGlobals/Functions/Registration/NL_RegistrationPage.html?nn=50588';
      countryMappings['New Zealand'] = 'SiteGlobals/Functions/Registration/NZ_RegistrationPage.html?nn=50588';
      countryMappings['Norway'] = 'SiteGlobals/Functions/Registration/NO_RegistrationPage.html?nn=50588';
      countryMappings['Poland'] = 'SiteGlobals/Functions/Registration/PL_RegistrationPage.html?nn=50588';
      countryMappings['Russia'] = 'SiteGlobals/Functions/Registration/RU_RegistrationPage.html?nn=50588';
      countryMappings['Singapore'] = 'SiteGlobals/Functions/Registration/SG_RegistrationPage.html?nn=50588';
      countryMappings['South Africa'] = 'SiteGlobals/Functions/Registration/ZA_RegistrationPage.html?nn=50588';
      countryMappings['Singapore'] = 'SiteGlobals/Functions/Registration/SG_RegistrationPage.html?nn=50588';
      countryMappings['Sweden'] = 'SiteGlobals/Functions/Registration/SE_RegistrationPage.html?nn=50588';
      countryMappings['Suisse'] = 'SiteGlobals/Functions/Registration/CH_FR_RegistrationPage.html?nn=50588';
      countryMappings['Switzerland'] = 'SiteGlobals/Functions/Registration/CH_DE_RegistrationPage.html?nn=50588';
      countryMappings['Taiwan'] = 'SiteGlobals/Functions/Registration/TW_RegistrationPage.html?nn=50588';
      countryMappings['United Kingdom'] = 'SiteGlobals/Functions/Registration/UK_RegistrationPage.html?nn=50588';
      countryMappings['UnitedStates'] = 'SiteGlobals/Functions/Registration/USA_RegistrationPage.html?nn=50588';
      countryMappings['Bangladesh'] = 'SiteGlobals/Functions/Registration/SG_RegistrationPage.html?nn=50588';
      countryMappings['Hong Kong'] = 'SiteGlobals/Functions/Registration/SG_RegistrationPage.html?nn=50588';
      countryMappings['Indonesia'] = 'SiteGlobals/Functions/Registration/SG_RegistrationPage.html?nn=50588';
      countryMappings['Malaysia'] = 'SiteGlobals/Functions/Registration/SG_RegistrationPage.html?nn=50588';
      countryMappings['Myanmar'] = 'SiteGlobals/Functions/Registration/SG_RegistrationPage.html?nn=50588';
      countryMappings['Pakistan'] = 'SiteGlobals/Functions/Registration/SG_RegistrationPage.html?nn=50588';
      countryMappings['Phillippines'] = 'SiteGlobals/Functions/Registration/SG_RegistrationPage.html?nn=50588';
      countryMappings['Sri Lanka'] = 'SiteGlobals/Functions/Registration/SG_RegistrationPage.html?nn=50588';
      countryMappings['Thailand'] = 'SiteGlobals/Functions/Registration/SG_RegistrationPage.html?nn=50588';
      countryMappings['Vietnam'] = 'SiteGlobals/Functions/Registration/SG_RegistrationPage.html?nn=50588';

jQuery(function(){
   if(jQuery('.error') != null && jQuery('.error').length > 0){
      jQuery("#regFormElements").show();
      jQuery(".addtionalLoginRegistration").show();
    }
   jQuery("form[name='Registrierung'] select").change(function(e){
     if(jQuery('.errorJumpLinks, .formError').length > 0){
        jQuery('.errorJumpLinks, .formError').remove();
        jQuery(this).closest('form').parent().prev().text('Registration');
       jQuery('.error').removeClass('error');
     }
     jQuery('.Basepage').hide();
     if( countryMappings[e.target.value] ){
         jQuery('#regFormElements').hide();
         jQuery('.addtionalLoginRegistration').hide();
         var secureUrl = 'https://' + window.location.href.split('/')[2] + '/' + countryMappings[e.target.value];
         jQuery.ajax({
            url : secureUrl,
            data : 'view=render[Standard]',
            success: function(data){
               jQuery('#content .altGrid .HTMLFormEnt').after(jQuery(data));
           }
         });
       } else {
          jQuery("#regFormElements").show();
          jQuery(".addtionalLoginRegistration").show();
       }
    });
});
/* Ende registration */
/* Start countryselect */
/****************************************************************************************
Script to provide the correct countries for each continent using only one pulldown menu
Written by Mark Wilton-Jones, 13/9/2001
*****************************************************************************************
Please see http://www.howtocreate.co.uk/jslibs/ for details and a demo of this script
Please see http://www.howtocreate.co.uk/jslibs/termsOfUse.html for terms of use
To use this, the form must be called 'mainform' and the continent and country menus must
exactly match those shown below. If you change anything on the menus, you will have to
work out what to change in the script. Don't use any <body onload="whatever"> code.
The full countires list is given after the script.
To use this script, insert the following line between the <head> tags:
<script src="PATH TO SCRIPT/countryselect.js" type="text/javascript" language="javascript1.2"></script>
_______________________________________________________________________________________*/
if (jQuery("form[name='mainform']").length){
var contin = new Array(); //each cell will hold an array of all the countries in a continent
var numincont = new Array(0,10,19,1,40,14,3,17); //number of countries in each continent
//prepare the continent arrays
for( var z = 1; z < numincont.length; z++ ) { contin[z] = new Array(); }
//tell it to set up the select menu when the page loads
window.onload = myprep;
}
function myprep() {
//now that the document has fully loaded, take out all of the countries and put them into
//an array representing that continent (the continent arrays)
var y = 1; //y = number of options to bypass at the start - 1
for( var z = 1; z < numincont.length; z++ ) {
//each continent in turn. start at 1 because options[0] is 'Please select one'
for( x = 1; x <= numincont[z]; x++ ) {
//insert countries into arrays
contin[z][x] = new Option(document.mainform.cl2Categories_Gebiet.options[x+y].text,document.mainform.cl2Categories_Gebiet.options[x+y].value);
}
//offset by the number we have already done
y += numincont[z] +1; //the 1 allows for the ' ------ Continent name ------' options
}
refillme();
}
function refillme() {
//erase the select menu then refill it with all countries from the selected continent
//the reason I deconstruct then reconstruct is to allow non JavaScript browsers to work
while( document.mainform.cl2Categories_Gebiet.options.length ) { document.mainform.cl2Categories_Gebiet.options[0] = null; }
if( document.mainform.Continent.selectedIndex ) {
//they have selected a continent. insert a 'Please select one' option
document.mainform.cl2Categories_Gebiet.options[0] = new Option("Select country","");
for( var z = 1; z < contin[document.mainform.Continent.selectedIndex].length; z++ ) {
//for the selected continent, put in each country
document.mainform.cl2Categories_Gebiet.options[z] = contin[document.mainform.Continent.selectedIndex][z];
}
//give them an 'Other' option and enable the select menu (if it was disabled)
document.mainform.cl2Categories_Gebiet.disabled = false;
} else {
//wait for them to select a continent
document.mainform.cl2Categories_Gebiet.options[0] = new Option("Select country","");
document.mainform.cl2Categories_Gebiet.disabled = true;
}
//document.mainform.cl2Categories_Gebiet.options[0].selected = true;
}
/* Ende countryselect */
jQuery(document).ready(function (){
   $ ('body').addClass('js-on');
   window.bmas_jspath = window.bmas_jspath || "../../../SiteGlobals/Functions/JavaScript/";
  window.bmas_swfpath = window.bmas_swfpath || "../../../SiteGlobals/flash/";
  window.bmas_globalConfigBlob = window.bmas_globalConfigBlob || "";
   $ .init_clearfields();
   jQuery('a.lightbox').satLightbox({ajax:'on',location:'view=render[Standard]&lightbox=true',animation:'center'});
   jQuery('.eventGallery').imageSwitcher({ajax:'true'});
   addInfoIconListener();
   if(jQuery('.pageFAQResultListing').length){
     jQuery('.pageFAQResultListing').materna_Addon_ToggleFAQ();
   }

   if($('.jsPlain').length > 0){
        $('.jsPlain').each(function(){
        var mediaPlayerId = $(this).parent().attr('id');
        if(jQuery.browser.msie && jQuery.browser.version < 9){ 
         var elem = $(this).text();
         var script = "<SCRIPT DEFER=TRUE>";
         script = script + elem +"</SCRIPT>";
         $(this).html(script);
        } else {
          var $newScript = $('<script></script>').attr('type','text/javascript').html($(this));
          $(this).append($newScript);    
        };
      video_init(mediaPlayerId);
       });

    };

if(jQuery.browser.msie && jQuery.browser.version == 7){
 $('.homepage #stepsToBox ul li:last-child a span').css("margin-top", "11px");
 $('#productSpecifications td:last-child').css("border-right", "0px");
}

  var orderMarketingMaterialCountry = $("#orderMarketingMaterialCountry");
  if(orderMarketingMaterialCountry.length>0){
    var select = orderMarketingMaterialCountry.find("select");
    select.bind("change",function(){
      var fieldset = $(this).parent().parent().parent();
      fieldset.find(".errorJumpLinks").remove();
      fieldset.find(".formError").remove();
      fieldset.find(".error").removeClass("error");
    });
  }


});   