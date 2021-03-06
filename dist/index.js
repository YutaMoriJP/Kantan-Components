

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
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var reactTransitionGroup = require('react-transition-group');

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
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespace(CheckboxPrimitive);

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Center = styled__default["default"].span(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  position: fixed;\n  margin: 0;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%);\n  background: ", ";\n  color: ", ";\n  padding: 10px;\n"], ["\n  position: fixed;\n  margin: 0;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%);\n  background: ", ";\n  color: ", ";\n  padding: 10px;\n"])), function (props) { return props.bgColor || "#212529"; }, function (props) { return props.color || "#ecf6ff"; });
var Position = styled__default["default"].span(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  width: fit-content;\n  color: ", ";\n  background: ", ";\n  opacity: 0.9;\n  text-align: center;\n  border-radius: 5px;\n  padding: 6px;\n  position: absolute;\n\n  /* BOTTOM */\n  ", "\n  /* TOP */\n  ", "\n    /* LEFT */\n    ", "\n      /* RIGHT */\n      ", "\n"], ["\n  width: fit-content;\n  color: ", ";\n  background: ", ";\n  opacity: 0.9;\n  text-align: center;\n  border-radius: 5px;\n  padding: 6px;\n  position: absolute;\n\n  /* BOTTOM */\n  ", "\n  /* TOP */\n  ", "\n    /* LEFT */\n    ", "\n      /* RIGHT */\n      ", "\n"])), function (props) { return props.color || "white"; }, function (props) { return props.bgColor || "#212529"; }, function (props) {
    return props.position === "bottom" && styled.css(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n      z-index: 1;\n      top: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "], ["\n      z-index: 1;\n      top: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "])));
}, function (props) {
    return props.position === "top" && styled.css(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n      z-index: 1;\n      bottom: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "], ["\n      z-index: 1;\n      bottom: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "])));
}, function (props) {
    return props.position === "left" && styled.css(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n      position: absolute;\n      z-index: 1;\n      top: -5px;\n      right: 105%;\n    "], ["\n      position: absolute;\n      z-index: 1;\n      top: -5px;\n      right: 105%;\n    "])));
}, function (props) {
    return props.position === "right" && styled.css(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n      z-index: 1;\n      top: -5px;\n      left: 105%;\n    "], ["\n      z-index: 1;\n      top: -5px;\n      left: 105%;\n    "])));
});
var Fixed = styled__default["default"].span(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  border-radius: 5px;\n  transform: translate(-50%);\n  padding: 10px;\n  margin-bottom: 10px;\n  font-size: 1rem;\n  width: max-content;\n\n  color: ", ";\n  background: ", ";\n"], ["\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  border-radius: 5px;\n  transform: translate(-50%);\n  padding: 10px;\n  margin-bottom: 10px;\n  font-size: 1rem;\n  width: max-content;\n\n  color: ", ";\n  background: ", ";\n"])), function (props) { return props.color || "white"; }, function (props) { return props.bgColor || "#212529"; });
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
var templateObject_1$9, templateObject_2$5, templateObject_3$4, templateObject_4$4, templateObject_5$3, templateObject_6$2, templateObject_7$1;

var BackDropMotion = styled__default["default"](framerMotion.motion.div)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  top: 0;\n  left: 0;\n  background: #000000e1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: ", ";\n"], ["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  top: 0;\n  left: 0;\n  background: #000000e1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: ", ";\n"])), function (props) { return props.zIndex || 10000; });
var Backdrop = function (_a) {
    var children = _a.children, onClick = _a.onClick, zIndex = _a.zIndex;
    return (React__namespace.createElement(BackDropMotion, { onClick: onClick, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, zIndex: zIndex }, children));
};
var templateObject_1$8;

var ModalMotion = styled__default["default"](framerMotion.motion.div)(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), function (props) { return props.color; });
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
            React__namespace.createElement(ModalMotion, __assign({ "aria-modal": true, role: "dialog", tabIndex: -1, onClick: handleClick, variants: dropIn, initial: "hidden", animate: "visible", exit: "exit", color: color }, rest), children))));
};
var templateObject_1$7;

var Wrapper = styled__default["default"].span(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  :hover .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  :hover .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n  }\n"])));
var Span = styled__default["default"].span(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  visibility: hidden;\n  width: 100px;\n  background-color: #212529;\n  color: #fff;\n  text-align: center;\n  border-radius: 5px;\n  padding: 5px 0;\n  opacity: 0;\n  transition: opacity 0.8s ease-in-out;\n  /* BOTTOM */\n  ", "\n  /* TOP */\n  ", "\n    /* LEFT */\n    ", "\n      /* RIGHT */\n      ", "\n"], ["\n  visibility: hidden;\n  width: 100px;\n  background-color: #212529;\n  color: #fff;\n  text-align: center;\n  border-radius: 5px;\n  padding: 5px 0;\n  opacity: 0;\n  transition: opacity 0.8s ease-in-out;\n  /* BOTTOM */\n  ", "\n  /* TOP */\n  ", "\n    /* LEFT */\n    ", "\n      /* RIGHT */\n      ", "\n"])), function (props) {
    return props.bottom && styled.css(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n      position: absolute;\n      z-index: 1;\n      top: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "], ["\n      position: absolute;\n      z-index: 1;\n      top: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "])));
}, function (props) {
    return props.top && styled.css(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n      position: absolute;\n      z-index: 1;\n      bottom: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "], ["\n      position: absolute;\n      z-index: 1;\n      bottom: 100%;\n      left: 50%;\n      margin-left: -50px;\n    "])));
}, function (props) {
    return props.left && styled.css(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n      position: absolute;\n      z-index: 1;\n      top: -5px;\n      right: 105%;\n    "], ["\n      position: absolute;\n      z-index: 1;\n      top: -5px;\n      right: 105%;\n    "])));
}, function (props) {
    return props.right && styled.css(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n      position: absolute;\n      z-index: 1;\n      top: -5px;\n      left: 105%;\n    "], ["\n      position: absolute;\n      z-index: 1;\n      top: -5px;\n      left: 105%;\n    "])));
});
var Tooltip = function (_a) {
    var children = _a.children, text = _a.text; _a.toolTipProps; var describedBy = _a.describedBy, rest = __rest(_a, ["children", "text", "toolTipProps", "describedBy"]);
    var _c = React__namespace.useState(true), hidden = _c[0], setHidden = _c[1];
    var handleMouseOver = function () { return setHidden(false); };
    var handleMouseOut = function () { return setHidden(true); };
    //apply default position, if all top/bottom/left/right are false, bottom is true
    var top = rest.top, bottom = rest.bottom, left = rest.left, right = rest.right;
    //if no positions are passed, then defaultPosition wil be true, which is BOTTOM
    var defaultPosition = !top && !bottom && !left && !right ? true : false;
    return (React__namespace.createElement(Wrapper, { onMouseOver: handleMouseOver, onMouseOut: handleMouseOut },
        children,
        React__namespace.createElement(Span, __assign({ className: "tooltiptext", "aria-hidden": hidden, "aria-label": text, bottom: defaultPosition, id: describedBy }, rest), text)));
};
var templateObject_1$6, templateObject_2$4, templateObject_3$3, templateObject_4$3, templateObject_5$2, templateObject_6$1;

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

var PointerEvent$1 = styled__default["default"].span(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  text-decoration: none;\n  ", ";\n"], ["\n  text-decoration: none;\n  ", ";\n"])), function (props) {
    return props.disabled && styled.css(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n      cursor: wait;\n    "], ["\n      cursor: wait;\n    "])));
});
var Link = styled__default["default"].a(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  text-decoration: none;\n  color: inherit;\n  ", ";\n\n  ", ";\n"], ["\n  text-decoration: none;\n  color: inherit;\n  ", ";\n\n  ", ";\n"])), function (props) {
    return props.disabled && styled.css(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n      pointer-events: none;\n    "], ["\n      pointer-events: none;\n    "])));
}, function (props) {
    return !props.disabled && styled.css(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n      pointer-events: auto;\n    "], ["\n      pointer-events: auto;\n    "])));
});
var templateObject_1$5, templateObject_2$3, templateObject_3$2, templateObject_4$2, templateObject_5$1;

var initialState = {
    status: "idle",
    href: "",
    error: null,
};
var reducer = function (state, action) {
    switch (action.type) {
        case "pending":
            return { status: action.type, href: "", error: null };
        case "resolved":
            return { status: action.type, href: action.href, error: null };
        case "rejected":
            return { status: action.type, href: "", error: action.error };
        default:
            return state;
    }
};
var Download = function (_a) {
    var url = _a.url, _b = _a.fileName, fileName = _b === void 0 ? "file" : _b, setTextContent = _a.setTextContent, children = _a.children, _c = _a.wait, wait = _c === void 0 ? true : _c, _d = _a.pending, pending = _d === void 0 ? "Loading..." : _d, _e = _a.resolved, resolved = _e === void 0 ? "Download: " + (fileName || "file") : _e, options = _a.options, onOpen = _a.onOpen, setMessageText = _a.setMessageText;
    //manages status, error, download link as href
    var _f = React.useReducer(reducer, initialState), state = _f[0], dispatch = _f[1];
    var status = state.status, error = state.error, href = state.href;
    //if true, download process is started AFTER click event, if false, starts after mounting
    var _g = React.useState(wait), shouldWait = _g[0], setshouldWait = _g[1];
    //if options object is passed then use the passed object
    var option = React.useMemo(function () {
        return options
            ? options
            : {
                method: "GET",
                headers: {
                    "Content-Type": "application/json, image/*, text/*, charset=utf-8",
                },
            };
    }, []);
    //sets wait to false and starts downloading
    var handleClick = function () {
        setshouldWait(false);
    };
    React.useEffect(function () {
        var didCancel = false;
        //no need to fetch since an URL is not passed
        if (!url)
            return;
        //if shouldWait is true, then fetch request happens after click event
        if (shouldWait)
            return;
        var controller = new AbortController();
        var signal = controller.signal;
        var downloadAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var href_1, res, blob, href_2, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!Blob.prototype.isPrototypeOf(url)) return [3 /*break*/, 1];
                        dispatch({ type: "pending" });
                        //updates text content of DOM node, like HTMLButtonElement
                        setTextContent(pending);
                        href_1 = URL.createObjectURL(url);
                        if (!didCancel) {
                            dispatch({ type: "resolved", href: href_1 });
                            setTextContent(resolved);
                        }
                        return [3 /*break*/, 4];
                    case 1:
                        dispatch({ type: "pending" });
                        //updates text content of DOM node, like HTMLButtonElement
                        setTextContent(pending);
                        return [4 /*yield*/, fetch(url, option)];
                    case 2:
                        res = _a.sent();
                        if (!res.ok && !didCancel) {
                            //updates text content of DOM node, like HTMLButtonElement
                            setTextContent("An error occured. Status code is " + res.status);
                            dispatch({
                                type: "rejected",
                                error: new Error("An error occured. Status code is " + res.status),
                            });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, res.blob()];
                    case 3:
                        blob = _a.sent();
                        href_2 = URL.createObjectURL(blob);
                        //this is necessary to check that the component was NOT unmounted
                        if (!didCancel) {
                            //updates text content of DOM node, like HTMLButtonElement
                            setTextContent(resolved);
                            //udate state
                            dispatch({ type: "resolved", href: href_2 });
                        }
                        _a.label = 4;
                    case 4:
                        //check if onOpen is a function
                        //could be a function that renders a message component like 'SUCCESS'
                        if (typeof onOpen === "function")
                            onOpen();
                        //should be the message state rendered by the message component
                        if (typeof setMessageText === "function")
                            setMessageText({
                                messageText: "Content is ready to be downloaded!",
                                color: "seagreen",
                            });
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        //request is canceled - don't update state
                        if (didCancel || signal.aborted) {
                            return [2 /*return*/];
                        }
                        if (!didCancel) {
                            //updates text content of DOM node, like HTMLButtonElement
                            setTextContent(error_1.message || "An error occured. Try refreshing the page.");
                            dispatch({ type: "rejected", error: error_1 });
                            //message state can be updated
                            if (typeof setMessageText === "function")
                                setMessageText({
                                    messageText: "Error " + error_1.message,
                                    color: "red",
                                });
                        }
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        downloadAsync();
        return function () {
            URL.revokeObjectURL(href); //revoking the url object here allows for multiple downloads or else a network error will happen
            didCancel = true;
            controller.abort();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, onOpen, shouldWait]);
    //while pending, content cannot be downloaded, sets CSS declaration - pointer:event: none
    var disabled = status === "idle" ? false : status === "pending" ? true : false;
    var hrefProp = status === "idle" || status === "pending" || status === "rejected"
        ? {}
        : { href: href };
    var downloadProp = status === "idle" || status === "pending"
        ? {}
        : { download: fileName || "file" };
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(PointerEvent$1, { disabled: disabled },
            React__namespace.createElement(Link, __assign({ disabled: disabled, onClick: handleClick }, downloadProp, hrefProp), children)),
        status === "rejected" ? (React__namespace.createElement("p", { role: "alert" }, error.message || "Error. Try refreshing the page.")) : null));
};

var Cursor = styled__default["default"].span(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  text-decoration: none;\n  cursor: ", ";\n"], ["\n  text-decoration: none;\n  cursor: ", ";\n"])), function (props) { return (props.disabled ? props.cursor || "not-allowed" : "auto"); });
var PointerEvent = styled__default["default"].span(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  text-decoration: none;\n  color: inherit;\n  ", ";\n  ", ";\n"], ["\n  text-decoration: none;\n  color: inherit;\n  ", ";\n  ", ";\n"])), function (props) {
    return props.disabled && styled.css(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n      pointer-events: none;\n    "], ["\n      pointer-events: none;\n    "])));
}, function (props) {
    return !props.disabled && styled.css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n      pointer-events: auto;\n    "], ["\n      pointer-events: auto;\n    "])));
});
var Pointer = function (_a) {
    var disabled = _a.disabled, children = _a.children, _b = _a.cursor, cursor = _b === void 0 ? "not-allowed" : _b, rest = __rest(_a, ["disabled", "children", "cursor"]);
    return (React__namespace.createElement(Cursor, { "aria-disabled": disabled, disabled: disabled, cursor: cursor },
        React__namespace.createElement(PointerEvent, __assign({ disabled: disabled }, rest), children)));
};
var templateObject_1$4, templateObject_2$2, templateObject_3$1, templateObject_4$1;

var Fade$1 = styled__default["default"].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  opacity: 0;\n  transition: opacity 2s ease-in-out;\n  ", "\n"], ["\n  opacity: 0;\n  transition: opacity 2s ease-in-out;\n  ", "\n"])), function (props) {
    return props.on && styled.css(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n      && {\n        opacity: 1;\n      }\n    "], ["\n      && {\n        opacity: 1;\n      }\n    "])));
});
var templateObject_1$3, templateObject_2$1;

/**
 * @param {Number} ms - time value in ms that controls when the content is rendered
 * @param {React.ReactNode} children - content that will be rendered with a fade in animation
 */
var Fade = function (_a) {
    var ms = _a.ms, children = _a.children;
    var _b = kantanHooks.useToggle(), open = _b.open, onOpen = _b.onOpen;
    //used to clean up timer
    var timerID = React.useRef(null);
    React.useEffect(function () {
        timerID.current = setTimeout(onOpen, ms);
        //cleans up timer if component is unmounted
        return function () { return clearTimeout(timerID.current); };
    }, [onOpen, ms]);
    return React__namespace.createElement(Fade$1, { on: open }, children);
};

var colorTokens = {
    dark: "#5f3dc4",
    medium: "rgb(87, 70, 175)",
    light: "#f3f0ff",
};
var BaseStyle = styled.css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  all: unset;\n  font-size: 13px;\n  line-height: 1;\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  height: 25px;\n  padding: 0 5px;\n  position: relative;\n  padding-left: 25px;\n  color: ", ";\n  :focus {\n    background: ", ";\n    color: ", ";\n  }\n  &[data-disabled] {\n    color: grey !important;\n    opacity: 0.5;\n  }\n"], ["\n  all: unset;\n  font-size: 13px;\n  line-height: 1;\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  height: 25px;\n  padding: 0 5px;\n  position: relative;\n  padding-left: 25px;\n  color: ", ";\n  :focus {\n    background: ", ";\n    color: ", ";\n  }\n  &[data-disabled] {\n    color: grey !important;\n    opacity: 0.5;\n  }\n"])), colorTokens.medium, colorTokens.dark, colorTokens.light);
var StyledContent = styled__default["default"](DropdownMenuPrimitive__namespace.Content)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-width: 220px;\n  background: white;\n  border-radius: 6px;\n  box-shadow: 5px 5px 14px #495057;\n  padding: 5px;\n  /* this overrides the default css above */\n  ", "\n"], ["\n  min-width: 220px;\n  background: white;\n  border-radius: 6px;\n  box-shadow: 5px 5px 14px #495057;\n  padding: 5px;\n  /* this overrides the default css above */\n  ", "\n"])), function (props) { return props.$contentStyle; });
var StyledItem = styled__default["default"](DropdownMenuPrimitive__namespace.Item)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  /* this overrides the default css */\n  ", "\n"], ["\n  ", "\n  /* this overrides the default css */\n  ", "\n"])), BaseStyle, function (props) { return props.$baseStyle; });
var StyledSeperator = styled__default["default"](DropdownMenuPrimitive__namespace.Separator)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 1px;\n  margin: 5px;\n  background-color: ", ";\n"], ["\n  height: 1px;\n  margin: 5px;\n  background-color: ", ";\n"])), colorTokens.medium);
var StyledTriggerItem = styled__default["default"](DropdownMenuPrimitive__namespace.TriggerItem)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n  /* this overrides the default css */\n  ", "\n"], ["\n  ", "\n  /* this overrides the default css */\n  ", "\n"])), BaseStyle, function (props) { return props.$baseStyle; });
var StyledCheckboxItem = styled__default["default"](DropdownMenuPrimitive__namespace.CheckboxItem)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n  /* this overrides the default css */\n  ", "\n"], ["\n  ", "\n  /* this overrides the default css */\n  ", "\n"])), BaseStyle, function (props) { return props.$baseStyle; });
var StyledItemIndicator = styled__default["default"](DropdownMenuPrimitive__namespace.ItemIndicator)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  width: 25px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  position: absolute;\n  left: 0;\n  width: 25px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n"])));
var StyledRadioItem = styled__default["default"](DropdownMenuPrimitive__namespace.RadioItem)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", "\n  /* this overrides the default css */\n  ", "\n"], ["\n  ", "\n  /* this overrides the default css */\n  ", "\n"])), BaseStyle, function (props) { return props.$baseStyle; });
var StyledRadioLabel = styled__default["default"](DropdownMenuPrimitive__namespace.Label)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-size: 12px;\n  line-height: 25px;\n  color: grey;\n  opacity: 0.5;\n  padding-left: 25px;\n"], ["\n  font-size: 12px;\n  line-height: 25px;\n  color: grey;\n  opacity: 0.5;\n  padding-left: 25px;\n"])));
//should be wrapped in item like <MenuItem>More <RightSlot>+</RightSlot></MenuItem>
//should wrap SVG ICON
var RightSlot = styled__default["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  margin-left: auto;\n  padding-left: 20px;\n"], ["\n  margin-left: auto;\n  padding-left: 20px;\n"])));
//Container for MAIN Menu but also NESTED MENU
var DropdownMenu = DropdownMenuPrimitive__namespace.Root;
//Main Trigger opening main Menu
var TriggerMain = DropdownMenuPrimitive__namespace.Trigger;
//Nested Trigger opening nested menu
var TriggerItem = StyledTriggerItem;
//Displays Menu Content - renders menu item - used for BOTH Main/Nested
var MenuContent = StyledContent;
//Menu Item
var MenuItem = StyledItem;
//Seperator
var Seperator = StyledSeperator;
var CheckboxItem = function (_a) {
    var checked = _a.checked, setChecked = _a.setChecked, children = _a.children, rest = __rest(_a, ["checked", "setChecked", "children"]);
    return (React__namespace.createElement(StyledCheckboxItem, __assign({ checked: checked, onCheckedChange: setChecked }, rest), children));
};
//if checked state is true, item is rendered, wrapped by CheckboxItem/RadioItem
var ItemIndicator = StyledItemIndicator;
var RadioGroup = function (_a) {
    var value = _a.value, setValue = _a.setValue, children = _a.children, rest = __rest(_a, ["value", "setValue", "children"]);
    return (React__namespace.createElement(DropdownMenuPrimitive__namespace.RadioGroup, __assign({ value: value, onValueChange: setValue }, rest), children));
};
//Radio Item
var RadioItem = StyledRadioItem;
//label for radio item
var RadioLabel = StyledRadioLabel;
var Dropdown = function (_a) {
    var children = _a.children;
    return (React__namespace.createElement(DropdownMenu, null, children));
};
var index$2 = {
    Dropdown: Dropdown,
    DropdownMenu: DropdownMenu,
    TriggerMain: TriggerMain,
    TriggerItem: TriggerItem,
    MenuContent: MenuContent,
    MenuItem: MenuItem,
    Seperator: Seperator,
    RightSlot: RightSlot,
    CheckboxItem: CheckboxItem,
    ItemIndicator: ItemIndicator,
    RadioGroup: RadioGroup,
    RadioItem: RadioItem,
    RadioLabel: RadioLabel,
};
var templateObject_1$2, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;

var StyledCheckbox = styled__default["default"](CheckboxPrimitive__namespace.Root)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  all: unset;\n  background-color: ", ";\n  width: 25px;\n  height: 25px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 2px 10px grey;\n  transition: background-color 300ms ease-in-out;\n"], ["\n  all: unset;\n  background-color: ", ";\n  width: 25px;\n  height: 25px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 2px 10px grey;\n  transition: background-color 300ms ease-in-out;\n"])), function (props) { return props.$bgColor; });
var Checkbox = StyledCheckbox;
var CheckboxIndicator = function (_a) {
    var children = _a.children;
    return (React__namespace.createElement(CheckboxPrimitive__namespace.Indicator, null, children));
};
var index$1 = (function (_a) {
    var _b = _a.checkedColor, checkedColor = _b === void 0 ? "#2b8a3e" : _b, _c = _a.uncheckedColor, uncheckedColor = _c === void 0 ? "#f8f9fa" : _c, children = _a.children, checked = _a.checked, onCheckedChange = _a.onCheckedChange, rest = __rest(_a, ["checkedColor", "uncheckedColor", "children", "checked", "onCheckedChange"]);
    return (React__namespace.createElement(Checkbox, __assign({ "$bgColor": checked ? checkedColor : uncheckedColor, checked: checked, onCheckedChange: onCheckedChange }, rest),
        React__namespace.createElement(CheckboxIndicator, null, children)));
});
var templateObject_1$1;

var Container = styled__default["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .fade-enter {\n    opacity: 0;\n  }\n\n  .fade-enter-active {\n    opacity: 1;\n    transition: opacity 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);\n  }\n\n  .fade-exit {\n    opacity: 1;\n  }\n\n  .fade-exit-active {\n    opacity: 0;\n    transition: opacity 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  }\n"], ["\n  .fade-enter {\n    opacity: 0;\n  }\n\n  .fade-enter-active {\n    opacity: 1;\n    transition: opacity 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);\n  }\n\n  .fade-exit {\n    opacity: 1;\n  }\n\n  .fade-exit-active {\n    opacity: 0;\n    transition: opacity 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  }\n"])));
var Text = function (_a) {
    var children = _a.children, text = _a.text;
    return (React__namespace.createElement(reactTransitionGroup.SwitchTransition, null,
        React__namespace.createElement(reactTransitionGroup.CSSTransition, { classNames: "fade", addEndListener: function (node, done) {
                node.addEventListener("transitionend", done, false);
            }, key: text }, children)));
};
var index = { Container: Container, Text: Text };
var templateObject_1;

exports.Checkbox = index$1;
exports.Clipboard = Clipboard;
exports.Download = Download;
exports.Fade = Fade;
exports.MainDropdown = index$2;
exports.MainTransition = index;
exports.Message = Message;
exports.Modal = Modal;
exports.Pointer = Pointer;
exports.Tooltip = Tooltip;
