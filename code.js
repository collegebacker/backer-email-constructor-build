/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/plugin/controller.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/plugin/controller.ts":
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.skipInvisibleInstanceChildren = true;
console.clear();
const pluginFrameSize = {
    width: 800,
    height: 640
};
figma.showUI(__html__, pluginFrameSize);
const getSegments = (node) => {
    return node === null || node === void 0 ? void 0 : node.getStyledTextSegments(["fontName", "textDecoration", "textCase", "fills", "hyperlink", "listOptions"]);
};
const returnHeroContent = (node) => {
    const titleNode = node.findAll((child) => child.name === "title")[0];
    const textNode = node.findAll((child) => child.name === "text")[0];
    return {
        name: "hero",
        title: titleNode.characters,
        text: getSegments(textNode) || null
    };
};
const returnTextContent = (node) => {
    const textNode = node.findAll((child) => child.name === "text")[0];
    return {
        name: "text",
        text: getSegments(textNode)
    };
};
const returnFooter = () => {
    return {
        name: "footer"
    };
};
const returnHeadLogo = () => {
    return {
        name: "headlogo"
    };
};
const returnHighlightContent = (node) => __awaiter(this, void 0, void 0, function* () {
    var _a;
    const emojiNode = node.findAll((child) => child.name === "emoji")[0];
    const titleNode = node.findAll((child) => child.name === "title")[0];
    const textNode = node.findAll((child) => child.name === "text")[0];
    const buttonNode = node.findAll((child) => child.name === "button-link")[0];
    const emojiImage = yield (emojiNode === null || emojiNode === void 0 ? void 0 : emojiNode.exportAsync({
        format: "PNG",
        constraint: {
            type: "SCALE",
            value: 2
        }
    }));
    return {
        name: "highlight",
        emojiData: emojiImage || null,
        emojiName: (emojiNode === null || emojiNode === void 0 ? void 0 : emojiNode.characters) || null,
        title: (titleNode === null || titleNode === void 0 ? void 0 : titleNode.characters) || null,
        text: getSegments(textNode) || null,
        button: {
            label: (buttonNode === null || buttonNode === void 0 ? void 0 : buttonNode.characters) || null,
            href: ((_a = buttonNode === null || buttonNode === void 0 ? void 0 : buttonNode.hyperlink) === null || _a === void 0 ? void 0 : _a.value) || null
        }
    };
});
const returnEndingText = (node) => {
    const textNode = node.findAll((child) => child.name === "text")[0];
    return {
        name: "endingtext",
        text: getSegments(textNode) || null
    };
};
const returnButtons = (node) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const buttons = node.findAll((child) => child.name === "button");
    const buttonsText = node.findAll((child) => child.name === "button-link");
    const buttonsObj = {
        name: "buttons",
        items: [
            {
                label: ((_a = buttonsText[0]) === null || _a === void 0 ? void 0 : _a.characters) || null,
                href: ((_c = (_b = buttonsText[0]) === null || _b === void 0 ? void 0 : _b.hyperlink) === null || _c === void 0 ? void 0 : _c.value) || null,
                mode: ((_e = (_d = buttons[0]) === null || _d === void 0 ? void 0 : _d.variantProperties) === null || _e === void 0 ? void 0 : _e.mode) || null
            },
            {
                label: ((_f = buttonsText[1]) === null || _f === void 0 ? void 0 : _f.characters) || null,
                href: ((_h = (_g = buttonsText[1]) === null || _g === void 0 ? void 0 : _g.hyperlink) === null || _h === void 0 ? void 0 : _h.value) || null,
                mode: ((_k = (_j = buttons[1]) === null || _j === void 0 ? void 0 : _j.variantProperties) === null || _k === void 0 ? void 0 : _k.mode) || null
            }
        ]
    };
    return buttonsObj;
};
const returnTitle = (node) => {
    const titleNode = node.findAll((child) => child.name === "title")[0];
    return {
        name: "title",
        title: (titleNode === null || titleNode === void 0 ? void 0 : titleNode.characters) || null,
        size: node.variantProperties.size
    };
};
const returnImage = (node) => __awaiter(this, void 0, void 0, function* () {
    const imageData = yield node.children[0].exportAsync({
        format: "PNG",
        constraint: {
            type: "SCALE",
            value: 1.5
        }
    });
    return {
        name: "image",
        imageID: node.id,
        imageData: imageData
    };
});
const returnHeroImage = (node) => __awaiter(this, void 0, void 0, function* () {
    const imageNode = node.findAll((child) => child.name === "image-wrap")[0];
    const titleNode = node.findAll((child) => child.name === "title")[0];
    const imageData = yield imageNode.exportAsync({
        format: "PNG",
        constraint: {
            type: "SCALE",
            value: 2
        }
    });
    return {
        name: "heroimage",
        imageData: imageData || null,
        imageID: node.id,
        title: (titleNode === null || titleNode === void 0 ? void 0 : titleNode.characters) || null
    };
});
const returnTwoImages = (node) => __awaiter(this, void 0, void 0, function* () {
    const imageNodes = node.children[0].children;
    const imagesData = yield Promise.all(imageNodes.map((imageNode) => __awaiter(this, void 0, void 0, function* () {
        const imageData = yield imageNode.exportAsync({
            format: "PNG",
            constraint: {
                type: "SCALE",
                value: 1.5
            }
        });
        return {
            name: "image",
            imageID: imageNode.id,
            imageData: imageData
        };
    })));
    return {
        name: "twoimages",
        imagesData: yield imagesData
    };
});
const returnList = (node) => {
    const text = node.findAll((child) => child.name === "text")[0];
    const textSegments = getSegments(text);
    let listItemsCount = 0;
    let listItems = [[]];
    const isOrdered = textSegments[0].listOptions.type === "ORDERED";
    textSegments.forEach((segment) => {
        listItems[listItemsCount].push(segment);
        if (segment.characters.endsWith("\n")) {
            listItemsCount++;
            listItems.push([]);
        }
    });
    return {
        name: "list",
        listItems: listItems,
        isOrdered: isOrdered
    };
};
const chechkForSelection = () => {
    const selected = figma.currentPage.selection;
    if (selected.length > 1 || selected.length === 0 || selected[0].type !== "FRAME") {
        figma.ui.postMessage({
            type: "current-selection",
            isValid: false,
            message: "please select only one element"
        });
    }
    if (selected.length === 1 && selected[0].type === "FRAME") {
        figma.ui.postMessage({
            type: "current-selection",
            isValid: true,
            message: "You can convert the email now"
        });
    }
};
chechkForSelection();
figma.on("selectionchange", () => {
    console.log(figma.currentPage.selection);
    chechkForSelection();
});
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    if (msg.type === "convert-to-HTML") {
        const selection = figma.currentPage.selection[0];
        if (selection === undefined) {
            figma.notify("Please select one or more nodes");
            return;
        }
        const emailChildren = yield Promise.all(selection.children
            .map((child) => {
            switch (child.name) {
                case "hero-bckr-email-cmp":
                    return returnHeroContent(child);
                case "text-bckr-email-cmp":
                    return returnTextContent(child);
                case "highlight-bckr-email-cmp":
                    return returnHighlightContent(child);
                case "footer-bckr-email-cmp":
                    return returnFooter();
                case "endingtext-bckr-email-cmp":
                    return returnEndingText(child);
                case "buttons-bckr-email-cmp":
                    return returnButtons(child);
                case "title-bckr-email-cmp":
                    return returnTitle(child);
                case "headlogo-bckr-email-cmp":
                    return returnHeadLogo();
                case "image-bckr-email-cmp":
                    return returnImage(child);
                case "heroimage-bckr-email-cmp":
                    return returnHeroImage(child);
                case "twoimages-bckr-email-cmp":
                    return returnTwoImages(child);
                case "list-bckr-email-cmp":
                    return returnList(child);
            }
        })
            .filter(Boolean));
        console.log(emailChildren);
        if (emailChildren.length > 0) {
            figma.ui.postMessage({
                type: "figma-components",
                data: emailChildren
            });
        }
        if (emailChildren.length === 0) {
            figma.notify("Select a frame with the email components");
        }
    }
    if (msg.type === "show-notification") {
        figma.notify(msg.data.message);
    }
    if (msg.type === "change-size" || msg.type === "reset") {
        figma.ui.resize(pluginFrameSize.width, Math.round(msg.frameHeight));
    }
    if (msg.type === "manual-resize") {
        figma.ui.resize(Math.round(msg.size.width), Math.round(msg.size.height));
    }
});
figma.currentPage.setRelaunchData({ open: "" });


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELG1DQUFtQyxXQUFXIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wbHVnaW4vY29udHJvbGxlci50c1wiKTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZmlnbWEuc2tpcEludmlzaWJsZUluc3RhbmNlQ2hpbGRyZW4gPSB0cnVlO1xuY29uc29sZS5jbGVhcigpO1xuY29uc3QgcGx1Z2luRnJhbWVTaXplID0ge1xuICAgIHdpZHRoOiA4MDAsXG4gICAgaGVpZ2h0OiA2NDBcbn07XG5maWdtYS5zaG93VUkoX19odG1sX18sIHBsdWdpbkZyYW1lU2l6ZSk7XG5jb25zdCBnZXRTZWdtZW50cyA9IChub2RlKSA9PiB7XG4gICAgcmV0dXJuIG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5nZXRTdHlsZWRUZXh0U2VnbWVudHMoW1wiZm9udE5hbWVcIiwgXCJ0ZXh0RGVjb3JhdGlvblwiLCBcInRleHRDYXNlXCIsIFwiZmlsbHNcIiwgXCJoeXBlcmxpbmtcIiwgXCJsaXN0T3B0aW9uc1wiXSk7XG59O1xuY29uc3QgcmV0dXJuSGVyb0NvbnRlbnQgPSAobm9kZSkgPT4ge1xuICAgIGNvbnN0IHRpdGxlTm9kZSA9IG5vZGUuZmluZEFsbCgoY2hpbGQpID0+IGNoaWxkLm5hbWUgPT09IFwidGl0bGVcIilbMF07XG4gICAgY29uc3QgdGV4dE5vZGUgPSBub2RlLmZpbmRBbGwoKGNoaWxkKSA9PiBjaGlsZC5uYW1lID09PSBcInRleHRcIilbMF07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogXCJoZXJvXCIsXG4gICAgICAgIHRpdGxlOiB0aXRsZU5vZGUuY2hhcmFjdGVycyxcbiAgICAgICAgdGV4dDogZ2V0U2VnbWVudHModGV4dE5vZGUpIHx8IG51bGxcbiAgICB9O1xufTtcbmNvbnN0IHJldHVyblRleHRDb250ZW50ID0gKG5vZGUpID0+IHtcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IG5vZGUuZmluZEFsbCgoY2hpbGQpID0+IGNoaWxkLm5hbWUgPT09IFwidGV4dFwiKVswXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBcInRleHRcIixcbiAgICAgICAgdGV4dDogZ2V0U2VnbWVudHModGV4dE5vZGUpXG4gICAgfTtcbn07XG5jb25zdCByZXR1cm5Gb290ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogXCJmb290ZXJcIlxuICAgIH07XG59O1xuY29uc3QgcmV0dXJuSGVhZExvZ28gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogXCJoZWFkbG9nb1wiXG4gICAgfTtcbn07XG5jb25zdCByZXR1cm5IaWdobGlnaHRDb250ZW50ID0gKG5vZGUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgZW1vamlOb2RlID0gbm9kZS5maW5kQWxsKChjaGlsZCkgPT4gY2hpbGQubmFtZSA9PT0gXCJlbW9qaVwiKVswXTtcbiAgICBjb25zdCB0aXRsZU5vZGUgPSBub2RlLmZpbmRBbGwoKGNoaWxkKSA9PiBjaGlsZC5uYW1lID09PSBcInRpdGxlXCIpWzBdO1xuICAgIGNvbnN0IHRleHROb2RlID0gbm9kZS5maW5kQWxsKChjaGlsZCkgPT4gY2hpbGQubmFtZSA9PT0gXCJ0ZXh0XCIpWzBdO1xuICAgIGNvbnN0IGJ1dHRvbk5vZGUgPSBub2RlLmZpbmRBbGwoKGNoaWxkKSA9PiBjaGlsZC5uYW1lID09PSBcImJ1dHRvbi1saW5rXCIpWzBdO1xuICAgIGNvbnN0IGVtb2ppSW1hZ2UgPSB5aWVsZCAoZW1vamlOb2RlID09PSBudWxsIHx8IGVtb2ppTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZW1vamlOb2RlLmV4cG9ydEFzeW5jKHtcbiAgICAgICAgZm9ybWF0OiBcIlBOR1wiLFxuICAgICAgICBjb25zdHJhaW50OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlNDQUxFXCIsXG4gICAgICAgICAgICB2YWx1ZTogMlxuICAgICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IFwiaGlnaGxpZ2h0XCIsXG4gICAgICAgIGVtb2ppRGF0YTogZW1vamlJbWFnZSB8fCBudWxsLFxuICAgICAgICBlbW9qaU5hbWU6IChlbW9qaU5vZGUgPT09IG51bGwgfHwgZW1vamlOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbW9qaU5vZGUuY2hhcmFjdGVycykgfHwgbnVsbCxcbiAgICAgICAgdGl0bGU6ICh0aXRsZU5vZGUgPT09IG51bGwgfHwgdGl0bGVOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0aXRsZU5vZGUuY2hhcmFjdGVycykgfHwgbnVsbCxcbiAgICAgICAgdGV4dDogZ2V0U2VnbWVudHModGV4dE5vZGUpIHx8IG51bGwsXG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgbGFiZWw6IChidXR0b25Ob2RlID09PSBudWxsIHx8IGJ1dHRvbk5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbk5vZGUuY2hhcmFjdGVycykgfHwgbnVsbCxcbiAgICAgICAgICAgIGhyZWY6ICgoX2EgPSBidXR0b25Ob2RlID09PSBudWxsIHx8IGJ1dHRvbk5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbk5vZGUuaHlwZXJsaW5rKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWUpIHx8IG51bGxcbiAgICAgICAgfVxuICAgIH07XG59KTtcbmNvbnN0IHJldHVybkVuZGluZ1RleHQgPSAobm9kZSkgPT4ge1xuICAgIGNvbnN0IHRleHROb2RlID0gbm9kZS5maW5kQWxsKChjaGlsZCkgPT4gY2hpbGQubmFtZSA9PT0gXCJ0ZXh0XCIpWzBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IFwiZW5kaW5ndGV4dFwiLFxuICAgICAgICB0ZXh0OiBnZXRTZWdtZW50cyh0ZXh0Tm9kZSkgfHwgbnVsbFxuICAgIH07XG59O1xuY29uc3QgcmV0dXJuQnV0dG9ucyA9IChub2RlKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2osIF9rO1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBub2RlLmZpbmRBbGwoKGNoaWxkKSA9PiBjaGlsZC5uYW1lID09PSBcImJ1dHRvblwiKTtcbiAgICBjb25zdCBidXR0b25zVGV4dCA9IG5vZGUuZmluZEFsbCgoY2hpbGQpID0+IGNoaWxkLm5hbWUgPT09IFwiYnV0dG9uLWxpbmtcIik7XG4gICAgY29uc3QgYnV0dG9uc09iaiA9IHtcbiAgICAgICAgbmFtZTogXCJidXR0b25zXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICgoX2EgPSBidXR0b25zVGV4dFswXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoYXJhY3RlcnMpIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgaHJlZjogKChfYyA9IChfYiA9IGJ1dHRvbnNUZXh0WzBdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaHlwZXJsaW5rKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudmFsdWUpIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgbW9kZTogKChfZSA9IChfZCA9IGJ1dHRvbnNbMF0pID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC52YXJpYW50UHJvcGVydGllcykgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLm1vZGUpIHx8IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICgoX2YgPSBidXR0b25zVGV4dFsxXSkgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLmNoYXJhY3RlcnMpIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgaHJlZjogKChfaCA9IChfZyA9IGJ1dHRvbnNUZXh0WzFdKSA9PT0gbnVsbCB8fCBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2cuaHlwZXJsaW5rKSA9PT0gbnVsbCB8fCBfaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2gudmFsdWUpIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgbW9kZTogKChfayA9IChfaiA9IGJ1dHRvbnNbMV0pID09PSBudWxsIHx8IF9qID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfai52YXJpYW50UHJvcGVydGllcykgPT09IG51bGwgfHwgX2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9rLm1vZGUpIHx8IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH07XG4gICAgcmV0dXJuIGJ1dHRvbnNPYmo7XG59O1xuY29uc3QgcmV0dXJuVGl0bGUgPSAobm9kZSkgPT4ge1xuICAgIGNvbnN0IHRpdGxlTm9kZSA9IG5vZGUuZmluZEFsbCgoY2hpbGQpID0+IGNoaWxkLm5hbWUgPT09IFwidGl0bGVcIilbMF07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgICB0aXRsZTogKHRpdGxlTm9kZSA9PT0gbnVsbCB8fCB0aXRsZU5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRpdGxlTm9kZS5jaGFyYWN0ZXJzKSB8fCBudWxsLFxuICAgICAgICBzaXplOiBub2RlLnZhcmlhbnRQcm9wZXJ0aWVzLnNpemVcbiAgICB9O1xufTtcbmNvbnN0IHJldHVybkltYWdlID0gKG5vZGUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBpbWFnZURhdGEgPSB5aWVsZCBub2RlLmNoaWxkcmVuWzBdLmV4cG9ydEFzeW5jKHtcbiAgICAgICAgZm9ybWF0OiBcIlBOR1wiLFxuICAgICAgICBjb25zdHJhaW50OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlNDQUxFXCIsXG4gICAgICAgICAgICB2YWx1ZTogMS41XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBcImltYWdlXCIsXG4gICAgICAgIGltYWdlSUQ6IG5vZGUuaWQsXG4gICAgICAgIGltYWdlRGF0YTogaW1hZ2VEYXRhXG4gICAgfTtcbn0pO1xuY29uc3QgcmV0dXJuSGVyb0ltYWdlID0gKG5vZGUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBpbWFnZU5vZGUgPSBub2RlLmZpbmRBbGwoKGNoaWxkKSA9PiBjaGlsZC5uYW1lID09PSBcImltYWdlLXdyYXBcIilbMF07XG4gICAgY29uc3QgdGl0bGVOb2RlID0gbm9kZS5maW5kQWxsKChjaGlsZCkgPT4gY2hpbGQubmFtZSA9PT0gXCJ0aXRsZVwiKVswXTtcbiAgICBjb25zdCBpbWFnZURhdGEgPSB5aWVsZCBpbWFnZU5vZGUuZXhwb3J0QXN5bmMoe1xuICAgICAgICBmb3JtYXQ6IFwiUE5HXCIsXG4gICAgICAgIGNvbnN0cmFpbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiU0NBTEVcIixcbiAgICAgICAgICAgIHZhbHVlOiAyXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBcImhlcm9pbWFnZVwiLFxuICAgICAgICBpbWFnZURhdGE6IGltYWdlRGF0YSB8fCBudWxsLFxuICAgICAgICBpbWFnZUlEOiBub2RlLmlkLFxuICAgICAgICB0aXRsZTogKHRpdGxlTm9kZSA9PT0gbnVsbCB8fCB0aXRsZU5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRpdGxlTm9kZS5jaGFyYWN0ZXJzKSB8fCBudWxsXG4gICAgfTtcbn0pO1xuY29uc3QgcmV0dXJuVHdvSW1hZ2VzID0gKG5vZGUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBpbWFnZU5vZGVzID0gbm9kZS5jaGlsZHJlblswXS5jaGlsZHJlbjtcbiAgICBjb25zdCBpbWFnZXNEYXRhID0geWllbGQgUHJvbWlzZS5hbGwoaW1hZ2VOb2Rlcy5tYXAoKGltYWdlTm9kZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBpbWFnZURhdGEgPSB5aWVsZCBpbWFnZU5vZGUuZXhwb3J0QXN5bmMoe1xuICAgICAgICAgICAgZm9ybWF0OiBcIlBOR1wiLFxuICAgICAgICAgICAgY29uc3RyYWludDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiU0NBTEVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogMS41XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgaW1hZ2VJRDogaW1hZ2VOb2RlLmlkLFxuICAgICAgICAgICAgaW1hZ2VEYXRhOiBpbWFnZURhdGFcbiAgICAgICAgfTtcbiAgICB9KSkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IFwidHdvaW1hZ2VzXCIsXG4gICAgICAgIGltYWdlc0RhdGE6IHlpZWxkIGltYWdlc0RhdGFcbiAgICB9O1xufSk7XG5jb25zdCByZXR1cm5MaXN0ID0gKG5vZGUpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gbm9kZS5maW5kQWxsKChjaGlsZCkgPT4gY2hpbGQubmFtZSA9PT0gXCJ0ZXh0XCIpWzBdO1xuICAgIGNvbnN0IHRleHRTZWdtZW50cyA9IGdldFNlZ21lbnRzKHRleHQpO1xuICAgIGxldCBsaXN0SXRlbXNDb3VudCA9IDA7XG4gICAgbGV0IGxpc3RJdGVtcyA9IFtbXV07XG4gICAgY29uc3QgaXNPcmRlcmVkID0gdGV4dFNlZ21lbnRzWzBdLmxpc3RPcHRpb25zLnR5cGUgPT09IFwiT1JERVJFRFwiO1xuICAgIHRleHRTZWdtZW50cy5mb3JFYWNoKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGxpc3RJdGVtc1tsaXN0SXRlbXNDb3VudF0ucHVzaChzZWdtZW50KTtcbiAgICAgICAgaWYgKHNlZ21lbnQuY2hhcmFjdGVycy5lbmRzV2l0aChcIlxcblwiKSkge1xuICAgICAgICAgICAgbGlzdEl0ZW1zQ291bnQrKztcbiAgICAgICAgICAgIGxpc3RJdGVtcy5wdXNoKFtdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IFwibGlzdFwiLFxuICAgICAgICBsaXN0SXRlbXM6IGxpc3RJdGVtcyxcbiAgICAgICAgaXNPcmRlcmVkOiBpc09yZGVyZWRcbiAgICB9O1xufTtcbmNvbnN0IGNoZWNoa0ZvclNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMSB8fCBzZWxlY3RlZC5sZW5ndGggPT09IDAgfHwgc2VsZWN0ZWRbMF0udHlwZSAhPT0gXCJGUkFNRVwiKSB7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IFwiY3VycmVudC1zZWxlY3Rpb25cIixcbiAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJwbGVhc2Ugc2VsZWN0IG9ubHkgb25lIGVsZW1lbnRcIlxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA9PT0gMSAmJiBzZWxlY3RlZFswXS50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogXCJjdXJyZW50LXNlbGVjdGlvblwiLFxuICAgICAgICAgICAgaXNWYWxpZDogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGNhbiBjb252ZXJ0IHRoZSBlbWFpbCBub3dcIlxuICAgICAgICB9KTtcbiAgICB9XG59O1xuY2hlY2hrRm9yU2VsZWN0aW9uKCk7XG5maWdtYS5vbihcInNlbGVjdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKTtcbiAgICBjaGVjaGtGb3JTZWxlY3Rpb24oKTtcbn0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChtc2cudHlwZSA9PT0gXCJjb252ZXJ0LXRvLUhUTUxcIikge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XG4gICAgICAgIGlmIChzZWxlY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KFwiUGxlYXNlIHNlbGVjdCBvbmUgb3IgbW9yZSBub2Rlc1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbWFpbENoaWxkcmVuID0geWllbGQgUHJvbWlzZS5hbGwoc2VsZWN0aW9uLmNoaWxkcmVuXG4gICAgICAgICAgICAubWFwKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChjaGlsZC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImhlcm8tYmNrci1lbWFpbC1jbXBcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybkhlcm9Db250ZW50KGNoaWxkKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwidGV4dC1iY2tyLWVtYWlsLWNtcFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVGV4dENvbnRlbnQoY2hpbGQpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJoaWdobGlnaHQtYmNrci1lbWFpbC1jbXBcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybkhpZ2hsaWdodENvbnRlbnQoY2hpbGQpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJmb290ZXItYmNrci1lbWFpbC1jbXBcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybkZvb3RlcigpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRpbmd0ZXh0LWJja3ItZW1haWwtY21wXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5FbmRpbmdUZXh0KGNoaWxkKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYnV0dG9ucy1iY2tyLWVtYWlsLWNtcFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuQnV0dG9ucyhjaGlsZCk7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRpdGxlLWJja3ItZW1haWwtY21wXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5UaXRsZShjaGlsZCk7XG4gICAgICAgICAgICAgICAgY2FzZSBcImhlYWRsb2dvLWJja3ItZW1haWwtY21wXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5IZWFkTG9nbygpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJpbWFnZS1iY2tyLWVtYWlsLWNtcFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuSW1hZ2UoY2hpbGQpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJoZXJvaW1hZ2UtYmNrci1lbWFpbC1jbXBcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybkhlcm9JbWFnZShjaGlsZCk7XG4gICAgICAgICAgICAgICAgY2FzZSBcInR3b2ltYWdlcy1iY2tyLWVtYWlsLWNtcFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVHdvSW1hZ2VzKGNoaWxkKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwibGlzdC1iY2tyLWVtYWlsLWNtcFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuTGlzdChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pKTtcbiAgICAgICAgY29uc29sZS5sb2coZW1haWxDaGlsZHJlbik7XG4gICAgICAgIGlmIChlbWFpbENoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZpZ21hLWNvbXBvbmVudHNcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBlbWFpbENoaWxkcmVuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW1haWxDaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIlNlbGVjdCBhIGZyYW1lIHdpdGggdGhlIGVtYWlsIGNvbXBvbmVudHNcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcInNob3ctbm90aWZpY2F0aW9uXCIpIHtcbiAgICAgICAgZmlnbWEubm90aWZ5KG1zZy5kYXRhLm1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiY2hhbmdlLXNpemVcIiB8fCBtc2cudHlwZSA9PT0gXCJyZXNldFwiKSB7XG4gICAgICAgIGZpZ21hLnVpLnJlc2l6ZShwbHVnaW5GcmFtZVNpemUud2lkdGgsIE1hdGgucm91bmQobXNnLmZyYW1lSGVpZ2h0KSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJtYW51YWwtcmVzaXplXCIpIHtcbiAgICAgICAgZmlnbWEudWkucmVzaXplKE1hdGgucm91bmQobXNnLnNpemUud2lkdGgpLCBNYXRoLnJvdW5kKG1zZy5zaXplLmhlaWdodCkpO1xuICAgIH1cbn0pO1xuZmlnbWEuY3VycmVudFBhZ2Uuc2V0UmVsYXVuY2hEYXRhKHsgb3BlbjogXCJcIiB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=