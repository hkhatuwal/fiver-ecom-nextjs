exports.id = 197;
exports.ids = [197];
exports.modules = {

/***/ 8442:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1024));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5600))

/***/ }),

/***/ 4347:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 1024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_images_globe_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5501);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Navbar = ()=>{
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "absolute flex items-center justify-between flex-wrap lg:px-40  md:px-8    py-5  w-full z-10 top-0 ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center flex-shrink-0 text-white mr-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    className: "text-white no-underline hover:text-white hover:no-underline",
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "w-16 lg:w-48",
                        src: "/assets/images/logo.png",
                        alt: "Logo",
                        height: 150,
                        width: 150
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "block lg:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    id: "nav-toggle",
                    onClick: ()=>{
                        setIsVisible(!isVisible);
                    },
                    className: "flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        className: "fill-current h-3 w-3",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                children: "Menu"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `w-full flex-grow lg:flex lg:items-center xl:w-auto lg:bg-none  h-screen xl:h-auto  pt-6 lg:pt-0  ${isVisible ? "bg-green_dark" : "hidden"}`,
                id: "nav-content",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "list-reset lg:flex justify-end flex-1 items-center text-xl tracking-wider",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "mr-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                className: "inline-block py-2 px-4 text-white no-underline ",
                                href: "#",
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "mr-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                className: "inline-block py-2 px-4 text-white no-underline ",
                                href: "/search",
                                children: "Products"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "mr-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                className: "inline-block py-2 px-4 text-white no-underline ",
                                href: "#",
                                children: "About"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "mr-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                className: "inline-block py-2 px-4 text-white no-underline ",
                                href: "#",
                                children: "Service"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "mr-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                className: "inline-block py-2 px-4 text-white no-underline ",
                                href: "#",
                                children: "FAQ"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "mr-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "inline-block py-2 px-4 text-white no-underline rounded-full border border-[#158319] ",
                                href: "#",
                                children: "Contact Us"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "mt-4 ml-4 flex gap-2 items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: _public_assets_images_globe_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
                                    alt: "Language Icon"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-white",
                                    children: "en"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "h-5 w-0.5 bg-white/60"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 5634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.js","import":"Quicksand","arguments":[{"subsets":["latin"]}],"variableName":"quicksand"}
var target_path_app_layout_js_import_Quicksand_arguments_subsets_latin_variableName_quicksand_ = __webpack_require__(9263);
var target_path_app_layout_js_import_Quicksand_arguments_subsets_latin_variableName_quicksand_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_js_import_Quicksand_arguments_subsets_latin_variableName_quicksand_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
// EXTERNAL MODULE: ./components/common/Navbar.js
var Navbar = __webpack_require__(1417);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/images/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.da7ac74a.png","height":88,"width":197,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAT0lEQVR42gFEALv/APdP90P0LfUr9gD9APkA+gAA9qf2rfXR77n1Jv8I9wL/AAD6LvaH9U35KPmd+qT6pvpmAO4A8Bv3Mvl/+Yj5lvmg+YdUXClvCg9QagAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});
// EXTERNAL MODULE: ../node_modules/react-icons/bi/index.esm.js
var index_esm = __webpack_require__(3926);
;// CONCATENATED MODULE: ./components/common/Footer.js





const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-green_dark",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "md:flex md:justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-6 md:mb-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "flex items-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: logo,
                                        alt: "logo",
                                        width: 150,
                                        height: 150
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-white/70 max-w-lg  md:p-5",
                                    children: "is a leading provider of high-quality fiber equipment solutions for businesses and individuals. With a commitment to excellence, we deliver reliable products and exceptional customer service to meet your networking needs."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "mb-6 text-2xl font-semibold text-green",
                                            children: "Resources"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "text-gray-500 dark:text-gray-400 font-medium",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mb-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "",
                                                        className: "hover:underline text-white",
                                                        children: "Home"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mb-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "",
                                                        className: "hover:underline text-white",
                                                        children: "About"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mb-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "",
                                                        className: "hover:underline text-white",
                                                        children: "Services"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mb-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "",
                                                        className: "hover:underline text-white",
                                                        children: "Products"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mb-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "",
                                                        className: "hover:underline text-white",
                                                        children: "FAQ"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "mb-6 text-2xl font-semibold text-green",
                                            children: "Company"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "text-gray-500 dark:text-gray-400 font-medium",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mb-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "",
                                                        className: "hover:underline text-white",
                                                        children: "Address"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mb-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "",
                                                        className: "hover:underline text-white",
                                                        children: "About"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mb-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "",
                                                        className: "hover:underline text-white",
                                                        children: "Services"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mb-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "",
                                                        className: "hover:underline text-white",
                                                        children: "Products"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mb-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "",
                                                        className: "hover:underline text-white",
                                                        children: "FAQ"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "mb-6 text-2xl font-semibold text-green",
                                            children: "Join Our Newsletter"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-white text-2xl",
                                            children: "Send Email To Join"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "p-1 bg-white flex mt-2 rounded",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "email",
                                                    className: " border-none ",
                                                    placeholder: "Send Email"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "bg-green_dark p-2 rounded text-white",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BiSend */.PRb, {
                                                        size: 22
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    className: "my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "sm:flex sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-sm text-gray-500 sm:text-center dark:text-gray-400",
                            children: "Copyright 2023.All Right Reserved"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex mt-4 space-x-5 sm:justify-center sm:mt-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-white",
                                children: "Privacy Policy / Terms & Condition"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const common_Footer = (Footer);

;// CONCATENATED MODULE: ./app/layout.js






const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (target_path_app_layout_js_import_Quicksand_arguments_subsets_latin_variableName_quicksand_default()).className,
            children: [
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(common_Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 1417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Projects\Fiver\yvanjo\nextjs website\ecom\components\common\Navbar.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 9806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RB: () => (/* binding */ products),
/* harmony export */   bd: () => (/* binding */ categories),
/* harmony export */   uZ: () => (/* binding */ services)
/* harmony export */ });
/* unused harmony export faqs */
const services = [
    {
        title: "Fiber Equipment Sales",
        icon: "/assets/images/cable.svg",
        description: "we offer a wide selection of top-quality fiber optic products, including cables, connectors, transceivers, media converters, and switches.Our products are sourced from reputable manufacturers and undergo rigorous testing to ensure reliability and performance."
    },
    {
        title: "Customized Solutions",
        icon: "/assets/images/tool.svg",
        description: "We understand that each project has unique requirements. That's why we provide tailored solutions to meet your specific needs. From designing custom fiber optic solutions to addressing specialized applications, we strive to deliver the best solution for your business or project."
    },
    {
        title: "Customized Solutions",
        icon: "/assets/images/gear.svg",
        description: " We understand that each project has unique requirements. That's why we provide tailored solutions to meet your specific needs. From designing custom fiber optic solutions to addressing specialized applications, we strive to deliver the best solution for your business or project."
    }
];
const products = [
    {
        title: "LC Connector",
        price: 599,
        rating: 3,
        slug: "product-1",
        description: "Your Crossflow Filtration Experts. Innovative solutions for efficient separation processes. Trusted by industries worldwide for quality and performance. Elevate your filtration with CF Crossings. Leading provider of crossflow filtration solutions. Innovative technology and advanced systems. Wide range of industrial applications. High-quality membranes for efficient separation processes. Trusted by global industries for reliability and performance. Streamlined and cost-effective filtration solutions. Expertise in optimizing crossflow filtration processes. Dedicated to customer satisfaction and support.",
        features: [
            {
                id: 1,
                title: "With high-quality membranes",
                description: "We provide top-quality membranes that ensure effective and reliable separation processes, contributing to enhanced productivity and reduced downtime."
            },
            {
                id: 2,
                title: "Enhanced Filtration Efficiency",
                description: "Our LC Connector offers enhanced filtration efficiency, resulting in cleaner and purer outcomes for your industrial applications."
            },
            {
                id: 3,
                title: "Streamlined and Cost-effective",
                description: "Our LC Connector is designed for cost-effectiveness without compromising on quality. It helps you save on operational costs while achieving superior results."
            }
        ],
        category: "Cable",
        reviews: [
            {
                description: "Your Crossflow Filtration Experts. Innovative solutions for efficient separation processes. Trust.",
                user: {
                    avatar: "/assets/images/user.png",
                    name: "John Doe"
                },
                rating: 3
            }
        ],
        image: "/assets/images/products/product1.png",
        images: [
            "/assets/images/products/product1.png",
            "/assets/images/products/product2.png",
            "/assets/images/products/product3.png",
            "/assets/images/products/product4.png"
        ]
    },
    {
        title: "AC Connector",
        price: 559,
        rating: 3,
        slug: "product-2",
        description: "The AC Connector is a versatile solution for your industrial needs. Whether you require high-quality membranes for separation processes or advanced technology for efficiency, our product has it all. With a focus on cost-effectiveness and reliable performance, the AC Connector is trusted by industries worldwide. Elevate your filtration with AC Connector today!",
        category: "Cable",
        // Assigned to the "Connectors" category
        features: [
            {
                id: 1,
                title: "High-Quality Membranes",
                description: "Our AC Connector comes equipped with top-quality membranes that ensure effective separation processes, contributing to enhanced productivity and reduced downtime."
            },
            {
                id: 2,
                title: "Advanced Technology",
                description: "The AC Connector utilizes advanced technology to deliver superior filtration efficiency, making it an ideal choice for demanding industrial applications."
            },
            {
                id: 3,
                title: "Cost-Effective Solution",
                description: "We understand the importance of cost-effectiveness. The AC Connector is designed to help you save on operational costs while maintaining high standards of performance."
            }
        ],
        reviews: [
            {
                description: "The AC Connector exceeded my expectations. It's a game-changer in the field of filtration. Highly recommended!",
                user: {
                    avatar: "/assets/images/user.png",
                    name: "Jane Smith"
                },
                rating: 4
            }
        ],
        image: "/assets/images/products/product4.png",
        images: [
            "/assets/images/products/product4.png"
        ]
    },
    {
        title: "LC Connector",
        price: 339,
        rating: 3,
        slug: "product-3",
        description: "Introducing the LC Connector, your solution for efficient and reliable separation processes. Our LC Connector is designed to meet the demands of various industrial applications. With a focus on high-quality membranes and advanced technology, it's trusted by global industries for its reliability and performance. Experience streamlined and cost-effective filtration solutions with the LC Connector.",
        category: "Connectors",
        features: [
            {
                id: 1,
                title: "Reliable Membranes",
                description: "Our LC Connector is equipped with top-quality membranes that ensure effective separation processes, minimizing downtime and maximizing productivity."
            },
            {
                id: 2,
                title: "Versatile Applications",
                description: "The LC Connector is suitable for a wide range of industrial applications, making it a versatile choice for your filtration needs."
            },
            {
                id: 3,
                title: "Customer Satisfaction",
                description: "We are dedicated to customer satisfaction and support. Our team is here to assist you in optimizing your crossflow filtration processes."
            }
        ],
        reviews: [
            {
                description: "I've been using the LC Connector for a year now, and it has never disappointed. The results speak for themselves.",
                user: {
                    avatar: "/assets/images/user.png",
                    name: "Alice Johnson"
                },
                rating: 5
            }
        ],
        image: "/assets/images/products/product2.png",
        images: [
            "/assets/images/products/product2.png"
        ]
    },
    {
        title: "LC Connector",
        price: 299,
        rating: 5,
        slug: "product-4",
        description: "Experience the LC Connector, a product designed for excellence. With its cutting-edge technology and top-notch membranes, it ensures optimal separation processes in various industrial settings. Trust in the LC Connector for cost-effective, efficient, and reliable filtration solutions.",
        category: "Connectors",
        features: [
            {
                id: 1,
                title: "Cutting-Edge Technology",
                description: "Our LC Connector incorporates cutting-edge technology that sets new standards for filtration efficiency and performance."
            },
            {
                id: 2,
                title: "High-Performance Membranes",
                description: "Experience the power of high-performance membranes that enable the LC Connector to deliver consistent and superior results."
            },
            {
                id: 3,
                title: "Cost-Efficiency",
                description: "The LC Connector is not just about performance; it's also about cost-efficiency. Save on operational costs while achieving exceptional outcomes."
            }
        ],
        reviews: [
            {
                description: "I'm amazed by the LC Connector's performance. It's worth every penny and has become an integral part of our industrial processes.",
                user: {
                    avatar: "/assets/images/user.png",
                    name: "Robert Anderson"
                },
                rating: 5
            }
        ],
        image: "/assets/images/products/product3.png",
        images: [
            "/assets/images/products/product3.png"
        ]
    },
    {
        title: "LC Connector",
        price: 499,
        rating: 2,
        slug: "product-5",
        description: "The LC Connector is your solution for efficient separation processes. While maintaining a focus on quality and performance, it offers a cost-effective filtration solution for various industries. Despite its affordable price point, the LC Connector ensures reliable results that meet your expectations.",
        category: "Connectors",
        features: [
            {
                id: 1,
                title: "Quality and Reliability",
                description: "Trust in the LC Connector's commitment to quality and reliability. It delivers consistent results that you can depend on."
            },
            {
                id: 2,
                title: "Affordable Excellence",
                description: "Experience excellence without breaking the bank. The LC Connector is a testament to affordability and outstanding performance."
            },
            {
                id: 3,
                title: "Cost-Effective Filtration",
                description: "The LC Connector is all about cost-effective filtration solutions. It helps you achieve your desired outcomes without the high price tag."
            }
        ],
        reviews: [
            {
                description: "The LC Connector has been a valuable addition to our operations. While the price is reasonable, the results are outstanding.",
                user: {
                    avatar: "/assets/images/user.png",
                    name: "Emily Williams"
                },
                rating: 2
            }
        ],
        image: "/assets/images/products/product4.png",
        images: [
            "/assets/images/products/product4.png"
        ]
    },
    {
        title: "AC Connector",
        price: 599,
        rating: 4,
        slug: "product-6",
        description: "Elevate your filtration processes with the LC Connector. It's designed to be your crossflow filtration expert, offering innovative solutions for separation processes. With top-quality membranes, advanced technology, and a commitment to customer satisfaction, the LC Connector is the choice for industries worldwide.",
        category: "Connectors",
        features: [
            {
                id: 1,
                title: "Top-Quality Membranes",
                description: "Our LC Connector is equipped with top-quality membranes, ensuring efficient and reliable separation processes that enhance productivity."
            },
            {
                id: 2,
                title: "Advanced Filtration Technology",
                description: "Experience the benefits of advanced filtration technology that sets the LC Connector apart in terms of efficiency and performance."
            },
            {
                id: 3,
                title: "Dedicated Support",
                description: "We are dedicated to your satisfaction and success. Our team is here to support you in optimizing your crossflow filtration processes."
            }
        ],
        reviews: [
            {
                description: "The LC Connector has significantly improved our filtration processes. It's a game-changer!",
                user: {
                    avatar: "/assets/images/user.png",
                    name: "Michael Clark"
                },
                rating: 4
            }
        ],
        image: "/assets/images/products/product1.png",
        images: [
            "/assets/images/products/product1.png"
        ]
    },
    {
        title: "High-Speed HDMI Cable",
        price: 19.99,
        rating: 5,
        slug: "product-7",
        description: "Experience crystal-clear video and audio with our High-Speed HDMI Cable. This cable is perfect for connecting your devices to your TV, projector, or monitor. It supports 4K Ultra HD resolution, 3D video, and high-quality audio. Whether you're a gamer, movie enthusiast, or professional, our HDMI cable delivers exceptional performance.",
        category: "Cable",
        features: [
            {
                id: 1,
                title: "4K Ultra HD",
                description: "Enjoy stunning 4K Ultra HD resolution for your movies, games, and presentations."
            },
            {
                id: 2,
                title: "High-Quality Audio",
                description: "Experience immersive audio with support for high-quality sound formats."
            },
            {
                id: 3,
                title: "Durable Design",
                description: "Our HDMI cable features a durable and long-lasting design for reliable connectivity."
            }
        ],
        reviews: [
            {
                description: "This HDMI cable is fantastic! It makes a noticeable difference in video and audio quality. Highly recommended!",
                user: {
                    avatar: "/assets/images/user.png",
                    name: "Sarah Miller"
                },
                rating: 5
            }
        ],
        image: "/assets/images/products/product1.png",
        images: [
            "/assets/images/products/product1.png"
        ]
    }
];
const faqs = [
    {
        id: 1,
        question: "What is the return policy?",
        answer: "Our return policy allows you to return items within 30 days of purchase for a full refund."
    },
    {
        id: 2,
        question: "How can I track my order?",
        answer: "You can track your order by logging into your account or using the tracking number provided in the confirmation email."
    },
    {
        id: 3,
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to most countries. Shipping rates and delivery times may vary depending on your location."
    }
];
const categories = [
    {
        id: 1,
        title: "Cable",
        slug: "cable",
        image: "/assets/images/categories/cable.png"
    },
    {
        id: 2,
        title: "Boxes",
        slug: "boxes",
        image: "/assets/images/categories/boxes.svg"
    },
    {
        id: 3,
        title: "Connectors",
        slug: "connectors",
        image: "/assets/images/categories/connector.png"
    },
    {
        id: 4,
        slug: "tools",
        title: "Tools",
        image: "/assets/images/categories/tools.png"
    },
    {
        id: 5,
        slug: "welder",
        title: "Welder",
        image: "/assets/images/categories/welder.png"
    },
    {
        id: 6,
        slug: "pigtails",
        title: "Pigtails",
        image: "/assets/images/categories/pigtails.png"
    }
];


/***/ }),

/***/ 5501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/globe.09d78171.svg","height":24,"width":25,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 5600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.da7ac74a.png","height":88,"width":197,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAT0lEQVR42gFEALv/APdP90P0LfUr9gD9APkA+gAA9qf2rfXR77n1Jv8I9wL/AAD6LvaH9U35KPmd+qT6pvpmAO4A8Bv3Mvl/+Yj5lvmg+YdUXClvCg9QagAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;