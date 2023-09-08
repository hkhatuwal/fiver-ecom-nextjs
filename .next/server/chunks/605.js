"use strict";
exports.id = 605;
exports.ids = [605];
exports.modules = {

/***/ 4927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NavBarLight)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/assets/images/globe.svg
var globe = __webpack_require__(5501);
;// CONCATENATED MODULE: ./public/assets/images/logo-black.png
/* harmony default export */ const logo_black = ({"src":"/_next/static/media/logo-black.836ffe9c.png","height":88,"width":197,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAeklEQVR42mMoTU70L0yOcRZzDdL1CInQZkAHibGxy0PCwteauvlddPEN2jlz6jS1FXOWcFzafpYJrCAzM0MvKDik3SvA17e4rlSjvaNtbmdn+5KOzrZlzW1NaWBFdqo20uKJ4kbKqSr1punmHU5ZztNcs90WWKRbtgMAsesoj6NZZRgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/common/NavBarLight.js
/* __next_internal_client_entry_do_not_use__ default auto */ 





const NavbarLight = ()=>{
    const [isVisible, setIsVisible] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "absolute flex items-center justify-between flex-wrap lg:px-40  md:px-8    py-5  w-full z-10 top-0 ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center flex-shrink-0 text-white mr-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    className: "text-white no-underline hover:text-white hover:no-underline",
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "w-16 lg:w-48",
                        src: logo_black,
                        alt: "Logo",
                        height: 150,
                        width: 150
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "block lg:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    id: "nav-toggle",
                    onClick: ()=>{
                        setIsVisible(!isVisible);
                    },
                    className: "flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600   ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        className: "fill-current h-3 w-3",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                children: "Menu"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `w-full flex-grow lg:flex lg:items-center lg:w-auto lg:bg-none  h-screen lg:h-auto  pt-6 lg:pt-0 ${isVisible ? "bg-green_dark" : "hidden"}`,
                id: "nav-content",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "list-reset lg:flex justify-end flex-1 items-center text-xl tracking-wider",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mr-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "inline-block py-2 px-4  no-underline ",
                                href: "#",
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mr-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "inline-block py-2 px-4  no-underline ",
                                href: "/search",
                                children: "Products"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mr-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "inline-block py-2 px-4  no-underline ",
                                href: "#",
                                children: "About"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mr-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "inline-block py-2 px-4  no-underline ",
                                href: "#",
                                children: "Service"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mr-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "inline-block py-2 px-4  no-underline ",
                                href: "#",
                                children: "FAQ"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mr-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "inline-block py-2 px-4  no-underline rounded-full border border-[#158319] ",
                                href: "#",
                                children: "Contact Us"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "mt-4 ml-4 flex gap-2 items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: globe["default"],
                                    alt: "Language Icon"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-white",
                                    children: "en"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "h-5 w-0.5 bg-white/60"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-white/30",
                                    children: "Fr"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const NavBarLight = (NavbarLight);


/***/ }),

/***/ 4541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3074);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(908);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const ProductImageSlider = ({ product })=>{
    const [thumbsSwiper, setThumbsSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
                style: {
                    "--swiper-navigation-color": "#333333",
                    "--swiper-pagination-color": "#333333"
                },
                loop: true,
                spaceBetween: 10,
                navigation: true,
                thumbs: {
                    swiper: thumbsSwiper
                },
                modules: [
                    swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* .FreeMode */ .Rv,
                    swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* .Navigation */ .W_,
                    swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* .Thumbs */ .o3
                ],
                className: "mySwiper2",
                children: product.images.map((image)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            className: "w-full h-full ",
                            src: image,
                            height: 500,
                            width: 500,
                            alt: "product image"
                        })
                    }, image))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
                onSwiper: setThumbsSwiper,
                loop: true,
                spaceBetween: 10,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesProgress: true,
                modules: [
                    swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* .FreeMode */ .Rv,
                    swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* .Navigation */ .W_,
                    swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* .Thumbs */ .o3
                ],
                className: "mySwiper mt-6",
                children: product.images.map((image)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            className: "w-full h-full ",
                            src: image,
                            height: 200,
                            width: 200,
                            alt: "product image"
                        })
                    }, image))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductImageSlider);


/***/ }),

/***/ 6137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Projects\Fiver\yvanjo\nextjs website\ecom\components\common\NavBarLight.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 4911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4178);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6663);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4980);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);






const Product = ({ slug, image, title, price, rating, hideRating = false, hidePrice = false })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/product/" + slug,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex justify-center items-center flex-col cursor-pointer ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    className: "w-full p-6",
                    src: image,
                    alt: "",
                    width: 300,
                    height: 300
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                    className: `text-3xl font-extrabold ${hidePrice ? "hidden" : ""}`,
                    children: [
                        "$",
                        price
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    className: "text-xl font-bold ",
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `flex gap-1 ${hideRating ? "hidden" : ""}`,
                    children: [
                        Array.from(Array(rating).keys()).map((i)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__/* .BsStarFill */ .kRm, {
                                className: "text-yellow-500",
                                size: 22,
                                color: "yellow/70"
                            }, i);
                        }),
                        Array.from(Array(5 - rating).keys()).map((i)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__/* .BsStar */ .RrZ, {
                                size: 22,
                                color: "yellow/70"
                            }, i);
                        }),
                        "(",
                        rating,
                        ")"
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);


/***/ }),

/***/ 8828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Projects\Fiver\yvanjo\nextjs website\ecom\components\common\ProductImageSlider.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 3311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9806);
/* harmony import */ var _components_common_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4911);




const RelatedProducts = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "lg:px-40 flex flex-col gap-y-3 py-16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: " font-bold uppercase text-5xl khula-family",
                children: "Related Products"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "products flex flex-row gap-y-3 flex-wrap justify-between",
                children: _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .products */ .RB.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full md:w-1/2 lg:w-1/3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            ...product
                        })
                    }, product.id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedProducts);


/***/ })

};
;