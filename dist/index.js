

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var framerMotion = require('framer-motion');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Text = styled__default["default"].span(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: absolute;\n  padding: 6px;\n  border-radius: 5px;\n  top: 115%;\n  left: 45%;\n  font-size: 0.6rem;\n  transform: translate(-50%);\n  background: ", ";\n  color: #f8f9fa;\n  font-weight: 500;\n  width: max-content;\n  z-index: 10000;\n"], ["\n  position: absolute;\n  padding: 6px;\n  border-radius: 5px;\n  top: 115%;\n  left: 45%;\n  font-size: 0.6rem;\n  transform: translate(-50%);\n  background: ", ";\n  color: #f8f9fa;\n  font-weight: 500;\n  width: max-content;\n  z-index: 10000;\n"])), function (props) { return props.color || "#212529"; });
var Fixed = styled__default["default"].aside(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  border-radius: 5px;\n  transform: translate(-50%);\n  padding: 10px;\n  margin-bottom: 10px;\n  font-size: 1rem;\n  color: white;\n  width: max-content;\n  background: ", ";\n"], ["\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  border-radius: 5px;\n  transform: translate(-50%);\n  padding: 10px;\n  margin-bottom: 10px;\n  font-size: 1rem;\n  color: white;\n  width: max-content;\n  background: ", ";\n"])), function (props) { return props.color || "#212529"; });
/**
 *
 * @param {String} children rendered message
 * @param {Function} onClose unmounts Message component
 * @param {Number} ms time value that closes the Message component
 * @param {Boolean} below optional value that renders the Message component right below the parent
 * @param {Boolean} bottom optional value that renders the Message component at the bottom of the viewport
 * @param {String} color sets the background color for the bottom/fixed options
 * @returns
 */
var Message = function (_a) {
    var children = _a.children, onClose = _a.onClose, _b = _a.ms, ms = _b === void 0 ? 2000 : _b, below = _a.below, bottom = _a.bottom, color = _a.color;
    var timerRef = React__namespace.useRef(null);
    React__namespace.useEffect(function () {
        timerRef.current = setTimeout(onClose, ms);
        return function () {
            clearTimeout(timerRef.current);
        };
    }, [ms, onClose]);
    //if bottom is true, text is placed right below the containing element, like a button (must have position:relaitve CSS RULE)
    if (below)
        return React__namespace.createElement(Text, { color: color }, children);
    //if fixed is true, the text is placed at the bottom of the page
    if (bottom)
        return React__namespace.createElement(Fixed, { color: color }, children);
    return React__namespace.createElement(React__namespace.Fragment, null, children);
};
var templateObject_1$3, templateObject_2$1;

var BackDropMotion = styled__default["default"](framerMotion.motion.div)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  top: 0;\n  left: 0;\n  background: #000000e1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: ", ";\n"], ["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  top: 0;\n  left: 0;\n  background: #000000e1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: ", ";\n"])), function (props) { return props.zIndex || 10000; });
var Backdrop = function (_a) {
    var children = _a.children, onClick = _a.onClick, zIndex = _a.zIndex;
    return (React__namespace.createElement(BackDropMotion, { onClick: onClick, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, zIndex: zIndex }, children));
};
var templateObject_1$2;

var ModalMotion = styled__default["default"](framerMotion.motion.div)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), function (props) { return props.color; });
//for animation
var dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};
var Modal = function (_a) {
    var handleClose = _a.handleClose, children = _a.children, color = _a.color;
    var handleClick = function (event) {
        event.stopPropagation(); //event will NOT bubble up to parent element
    };
    return (React__namespace.createElement(framerMotion.AnimatePresence, { exitBeforeEnter: true },
        React__namespace.createElement(Backdrop, { onClick: handleClose },
            React__namespace.createElement(ModalMotion, { onClick: handleClick, variants: dropIn, initial: "hidden", animate: "visible", exit: "exit", color: color }, children))));
};
var templateObject_1$1;

var Wrapper = styled__default["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  :hover .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  :hover .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n  }\n"])));
var Span = styled__default["default"].span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  visibility: hidden;\n  width: 100px;\n  background-color: #212529;\n  color: #fff;\n  text-align: center;\n  border-radius: 5px;\n  padding: 5px 0;\n  opacity: 0;\n  transition: opacity 0.8s ease-in-out;\n  ", "\n  ", "\n    ", "\n      ", "\n"], ["\n  visibility: hidden;\n  width: 100px;\n  background-color: #212529;\n  color: #fff;\n  text-align: center;\n  border-radius: 5px;\n  padding: 5px 0;\n  opacity: 0;\n  transition: opacity 0.8s ease-in-out;\n  ", "\n  ", "\n    ", "\n      ", "\n"])), function (props) {
    return props.bottom && styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      /* Position the tooltip */\n      position: absolute;\n      z-index: 1;\n      top: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "], ["\n      /* Position the tooltip */\n      position: absolute;\n      z-index: 1;\n      top: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "])));
}, function (props) {
    return props.top && styled.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: absolute;\n      z-index: 1;\n      bottom: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "], ["\n      position: absolute;\n      z-index: 1;\n      bottom: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "])));
}, function (props) {
    return props.left && styled.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      position: absolute;\n      z-index: 1;\n      top: -5px;\n      right: 105%;\n    "], ["\n      position: absolute;\n      z-index: 1;\n      top: -5px;\n      right: 105%;\n    "])));
}, function (props) {
    return props.right && styled.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      position: absolute;\n      z-index: 1;\n      top: -5px;\n      left: 105%;\n    "], ["\n      position: absolute;\n      z-index: 1;\n      top: -5px;\n      left: 105%;\n    "])));
});
var Tooltip = function (_a) {
    var children = _a.children, text = _a.text; _a.toolTipProps; var rest = __rest(_a, ["children", "text", "toolTipProps"]);
    var _c = React__namespace.useState(true), hidden = _c[0], setHidden = _c[1];
    var handleMouseOver = function () { return setHidden(false); };
    var handleMouseOut = function () { return setHidden(true); };
    //apply default position, if all top/bottom/left/right are false, bottom is true
    var top = rest.top, bottom = rest.bottom, left = rest.left, right = rest.right;
    var defaultPosition = !top && !bottom && !left && !right ? true : false;
    return (React__namespace.createElement(Wrapper, { onMouseOver: handleMouseOver, onMouseOut: handleMouseOut },
        children,
        React__namespace.createElement(Span, __assign({ className: "tooltiptext", "aria-hidden": hidden, "aria-label": text, bottom: defaultPosition }, rest), text)));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

exports.Message = Message;
exports.Modal = Modal;
exports.Tooltip = Tooltip;
