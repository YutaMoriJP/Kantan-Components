

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
var kantanHooks = require('kantan-hooks');

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

var Center = styled__default["default"].span(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: fixed;\n  margin: 0;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%);\n  background: ", ";\n  color: ", ";\n  padding: 10px;\n"], ["\n  position: fixed;\n  margin: 0;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%);\n  background: ", ";\n  color: ", ";\n  padding: 10px;\n"])), function (props) { return props.bgColor || "#212529"; }, function (props) { return props.color || "#ecf6ff"; });
var Position = styled__default["default"].span(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  width: fit-content;\n  color: ", ";\n  background: ", ";\n  opacity: 0.9;\n  text-align: center;\n  border-radius: 5px;\n  padding: 6px;\n  position: absolute;\n\n  /* BOTTOM */\n  ", "\n  /* TOP */\n  ", "\n    /* LEFT */\n    ", "\n      /* RIGHT */\n      ", "\n"], ["\n  width: fit-content;\n  color: ", ";\n  background: ", ";\n  opacity: 0.9;\n  text-align: center;\n  border-radius: 5px;\n  padding: 6px;\n  position: absolute;\n\n  /* BOTTOM */\n  ", "\n  /* TOP */\n  ", "\n    /* LEFT */\n    ", "\n      /* RIGHT */\n      ", "\n"])), function (props) { return props.color || "white"; }, function (props) { return props.bgColor || "#212529"; }, function (props) {
    return props.position === "bottom" && styled.css(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n      z-index: 1;\n      top: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "], ["\n      z-index: 1;\n      top: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "])));
}, function (props) {
    return props.position === "top" && styled.css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n      z-index: 1;\n      bottom: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "], ["\n      z-index: 1;\n      bottom: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "])));
}, function (props) {
    return props.position === "left" && styled.css(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n      position: absolute;\n      z-index: 1;\n      top: -5px;\n      right: 105%;\n    "], ["\n      position: absolute;\n      z-index: 1;\n      top: -5px;\n      right: 105%;\n    "])));
}, function (props) {
    return props.position === "right" && styled.css(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n      z-index: 1;\n      top: -5px;\n      left: 105%;\n    "], ["\n      z-index: 1;\n      top: -5px;\n      left: 105%;\n    "])));
});
var Fixed = styled__default["default"].span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  border-radius: 5px;\n  transform: translate(-50%);\n  padding: 10px;\n  margin-bottom: 10px;\n  font-size: 1rem;\n  width: max-content;\n\n  color: ", ";\n  background: ", ";\n"], ["\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  border-radius: 5px;\n  transform: translate(-50%);\n  padding: 10px;\n  margin-bottom: 10px;\n  font-size: 1rem;\n  width: max-content;\n\n  color: ", ";\n  background: ", ";\n"])), function (props) { return props.color || "white"; }, function (props) { return props.bgColor || "#212529"; });
/**
 *
 * @param {String} children rendered message
 * @param {Function} onClose unmounts Message component
 * @param {Number} ms time value that closes the Message component
 * @param {Boolean} position optional value that renders the Message component on the given positional value
 * @param {Boolean} bottom optional value that renders the Message component at the bottom of the viewport
 * @param {Boolean} center optional value that renders the Message component at the center of the viewport
 * @param {String} color sets the text color for the bottom/position options
 * @param {String} bgColor sets the background color for the bottom/position options
 * @returns
 */
var Message = function (_a) {
    var children = _a.children, onClose = _a.onClose, _b = _a.ms, ms = _b === void 0 ? 2000 : _b, bottom = _a.bottom, color = _a.color, bgColor = _a.bgColor, position = _a.position, center = _a.center, rest = __rest(_a, ["children", "onClose", "ms", "bottom", "color", "bgColor", "position", "center"]);
    var timerRef = React__namespace.useRef(null);
    React__namespace.useEffect(function () {
        timerRef.current = setTimeout(onClose, ms);
        return function () {
            clearTimeout(timerRef.current);
        };
    }, [ms, onClose]);
    //position can only be "top" | "right" | "bottom" | "left";
    if (position) {
        return (React__namespace.createElement(Position, __assign({ bgColor: bgColor, color: color, position: position }, rest), children));
    }
    if (center) {
        return (React__namespace.createElement(Center, __assign({ bgColor: bgColor, color: color }, rest), children));
    }
    //if fixed is true, the text is placed at the bottom of the page
    if (bottom)
        return (React__namespace.createElement(Fixed, __assign({ bgColor: bgColor, color: color }, rest), children));
    return React__namespace.createElement(React__namespace.Fragment, null, children);
};
var templateObject_1$3, templateObject_2$1, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6$1, templateObject_7;

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
    var handleClose = _a.handleClose, children = _a.children, color = _a.color, rest = __rest(_a, ["handleClose", "children", "color"]);
    var handleClick = function (event) {
        event.stopPropagation(); //event will NOT bubble up to parent element
    };
    return (React__namespace.createElement(framerMotion.AnimatePresence, { exitBeforeEnter: true },
        React__namespace.createElement(Backdrop, { onClick: handleClose },
            React__namespace.createElement(ModalMotion, __assign({ onClick: handleClick, variants: dropIn, initial: "hidden", animate: "visible", exit: "exit", color: color }, rest), children))));
};
var templateObject_1$1;

var Wrapper = styled__default["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  :hover .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  :hover .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n  }\n"])));
var Span = styled__default["default"].span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  visibility: hidden;\n  width: 100px;\n  background-color: #212529;\n  color: #fff;\n  text-align: center;\n  border-radius: 5px;\n  padding: 5px 0;\n  opacity: 0;\n  transition: opacity 0.8s ease-in-out;\n  /* BOTTOM */\n  ", "\n  /* TOP */\n  ", "\n    /* LEFT */\n    ", "\n      /* RIGHT */\n      ", "\n"], ["\n  visibility: hidden;\n  width: 100px;\n  background-color: #212529;\n  color: #fff;\n  text-align: center;\n  border-radius: 5px;\n  padding: 5px 0;\n  opacity: 0;\n  transition: opacity 0.8s ease-in-out;\n  /* BOTTOM */\n  ", "\n  /* TOP */\n  ", "\n    /* LEFT */\n    ", "\n      /* RIGHT */\n      ", "\n"])), function (props) {
    return props.bottom && styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      position: absolute;\n      z-index: 1;\n      top: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "], ["\n      position: absolute;\n      z-index: 1;\n      top: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "])));
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

//returns an array with numbers with their floor
var getFloor = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return rest.map(Math.floor);
};
//calculates actual available space from top, right, bottom, and left
var calculateActualRect = function (rect, w, h) {
    var l = rect.left, r = rect.right, t = rect.top, b = rect.bottom;
    //gets the floor of all numbers
    var _a = getFloor(l, r, t, b, w, h), left = _a[0], right = _a[1], top = _a[2], bottom = _a[3], width = _a[4], height = _a[5];
    //calculates actual space available on the right side
    var calcualtedRight = width - right;
    //calculates actual space available below
    var calculatedBottom = height - bottom;
    return {
        top: top,
        right: calcualtedRight,
        bottom: calculatedBottom,
        left: left,
    };
};
//returns which side has the most space available, if left:500px is the highest integer
//then getPlacement returns left
//NEEDS TO BE IMPROVED!
var getPlacement = function (_a) {
    var top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
    if (100 > left && right > 150)
        return "right";
    if (100 > right && left > 150)
        return "left";
    if (bottom > 150 && right > 150 && left > 150)
        return "bottom";
    if (top > 150 && right > 150 && left > 150)
        return "top";
    if (right > 200 && top > 100 && bottom > 100)
        return "right";
    if (left > 200 && top > 100 && bottom > 100)
        return "left";
    var formattedRect = [
        ["top", top],
        ["right", right],
        ["bottom", bottom],
        ["left", left],
    ];
    return formattedRect.sort(function (_a, _b) {
        _a[0]; var a = _a[1];
        _b[0]; var b = _b[1];
        return +b - +a;
    })[0][0];
};
//returns placement like right, top, bottom, or left
var calculatePlacement = function (rect, width, height) {
    var adjustedSpace = calculateActualRect(rect, width, height);
    return getPlacement(adjustedSpace);
};

var Clipboard = function (_a) {
    var children = _a.children, toBeCopied = _a.toBeCopied, _b = _a.message, message = _b === void 0 ? "COPIED" : _b, rest = __rest(_a, ["children", "toBeCopied", "message"]);
    //used to manage message state
    var _c = kantanHooks.useToggle(false), open = _c.open, onOpen = _c.onOpen, onClose = _c.onClose;
    //used to manage clipboard state
    var _d = kantanHooks.useToggle(), copied = _d.open, toggle = _d.toggle;
    //manages the copying operation
    var _e = kantanHooks.useClipboard(toBeCopied, copied, onOpen), resolved = _e.resolved, rejected = _e.rejected, error = _e.error;
    //has reference on span element
    var spanRef = React__namespace.useRef(null);
    //points at viewport height
    var windowHeight = kantanHooks.useHeight({ current: window });
    //points at viewport width
    var windowWidth = kantanHooks.useWidth({ current: window });
    //points at HTMLElement or null in initial render
    var element = spanRef.current;
    //points at DOMRect or null in initial render
    var rect = element ? element.getBoundingClientRect() : element;
    //points at placement i.e. what side has the most available space, like 'left'
    var position = element
        ? calculatePlacement(rect, windowWidth, windowHeight)
        : null;
    //controls the button text content
    //the string "Copied" should logically never be evaluated, but still used as a safeguard.
    var buttonText = open && resolved
        ? message
        : open && rejected
            ? error.message || "Not copied"
            : "Copied";
    //if operation has rejected then error message might be longer
    //so keep Message mounted for 4 seconds
    var ms = resolved ? 1000 : rejected ? 4000 : 2000;
    var handleClick = function () {
        toggle();
        onOpen();
    };
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement("span", __assign({ onClick: handleClick, style: {
                position: "relative",
            }, ref: spanRef }, rest),
            children,
            open ? (React__namespace.createElement(Message, { onClose: onClose, ms: ms, position: position, color: "white" }, buttonText)) : null)));
};

exports.Clipboard = Clipboard;
exports.Message = Message;
exports.Modal = Modal;
exports.Tooltip = Tooltip;
