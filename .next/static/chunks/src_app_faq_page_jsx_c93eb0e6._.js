(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/faq/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FAQPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const faqs = [
    {
        id: 1,
        question: "What is the purpose of Nija Jobs?",
        answer: "Nija Jobs connects talented professionals with top employers across Nigeria, streamlining the job search and hiring process.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        question: "How can I contact support?",
        answer: "You can contact our support team via email at support@nijajobs.com or through our live chat feature available Monday-Friday, 9am-5pm WAT.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        question: "Is my personal data secure?",
        answer: "Yes, we use industry-standard encryption and security measures to protect your data. We never share your information without your consent.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        question: "How do I apply for jobs?",
        answer: "Create a profile, upload your resume, and browse available positions. Click 'Apply' on any job posting to submit your application.",
        image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        question: "What's the cost for employers to post jobs?",
        answer: "We offer flexible pricing plans starting with a free basic option. Premium plans with more features start at ₦15,000 per month.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        question: "Can I edit my application after submitting?",
        answer: "Yes, you can update your application materials anytime, but changes won't affect already-submitted applications.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];
function FAQPage() {
    _s();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newQuestion, setNewQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userQuestions, setUserQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const toggleFAQ = (id)=>{
        setActiveId(activeId === id ? null : id);
    };
    const handleSubmitQuestion = (e)=>{
        e.preventDefault();
        if (newQuestion.trim()) {
            setUserQuestions([
                ...userQuestions,
                {
                    id: Date.now(),
                    question: newQuestion,
                    answer: "Our team will respond to this question shortly."
                }
            ]);
            setNewQuestion("");
        }
    };
    const filteredFaqs = [
        ...faqs,
        ...userQuestions
    ].filter((faq)=>faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "faq-page container items-center mx-auto p-6",
        style: {
            fontFamily: 'Inter, Arial, sans-serif',
            background: '#f9fafb',
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "faq-hero",
                style: {
                    background: 'orange linear-gradient(90deg, #f97316 0%, #fb923c 100%)',
                    color: '#fff',
                    borderRadius: '12px',
                    padding: '2rem 1.5rem',
                    marginBottom: '2rem',
                    textAlign: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: '2.5rem',
                                fontWeight: 700,
                                marginBottom: '0.5rem'
                            },
                            children: "Frequently Asked Questions"
                        }, void 0, false, {
                            fileName: "[project]/src/app/faq/page.jsx",
                            lineNumber: 86,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: '1.2rem',
                                opacity: 0.95
                            },
                            children: "Find answers to common questions about Nija Jobs"
                        }, void 0, false, {
                            fileName: "[project]/src/app/faq/page.jsx",
                            lineNumber: 87,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/faq/page.jsx",
                    lineNumber: 85,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/faq/page.jsx",
                lineNumber: 77,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "faq-container",
                style: {
                    background: '#fff',
                    borderRadius: '10px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                    padding: '2rem',
                    maxWidth: '700px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "search-container",
                        style: {
                            marginBottom: '1.5rem',
                            textAlign: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search FAQs...",
                            value: searchTerm,
                            onChange: (e)=>setSearchTerm(e.target.value),
                            className: "search-input",
                            style: {
                                width: '100%',
                                maxWidth: '400px',
                                padding: '0.75rem 1rem',
                                borderRadius: '6px',
                                border: '1px solid #d1d5db',
                                fontSize: '1rem',
                                outline: 'none',
                                boxSizing: 'border-box'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/faq/page.jsx",
                            lineNumber: 100,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/faq/page.jsx",
                        lineNumber: 99,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "faq-list",
                        children: filteredFaqs.length > 0 ? filteredFaqs.map((faq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `faq-item ${activeId === faq.id ? 'active' : ''}`,
                                style: {
                                    borderBottom: '1px solid #e5e7eb',
                                    padding: '1rem 0',
                                    transition: 'background 0.2s',
                                    background: activeId === faq.id ? '#f3f4f6' : 'transparent'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "faq-question",
                                        onClick: ()=>toggleFAQ(faq.id),
                                        style: {
                                            cursor: 'pointer',
                                            fontWeight: 600,
                                            fontSize: '1.1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        },
                                        children: [
                                            faq.question,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "toggle-icon",
                                                style: {
                                                    fontSize: '1.5rem',
                                                    marginLeft: '1rem',
                                                    color: 'orange',
                                                    fontWeight: 700
                                                },
                                                children: activeId === faq.id ? '−' : '+'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/faq/page.jsx",
                                                lineNumber: 145,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/faq/page.jsx",
                                        lineNumber: 132,
                                        columnNumber: 29
                                    }, this),
                                    activeId === faq.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "faq-answer-container",
                                        style: {
                                            marginTop: '0.75rem'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "faq-answer",
                                            style: {
                                                fontSize: '1rem',
                                                color: '#374151'
                                            },
                                            children: [
                                                faq.answer,
                                                faq.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "faq-image",
                                                    style: {
                                                        marginTop: '1rem'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: faq.image,
                                                        alt: "FAQ illustration",
                                                        style: {
                                                            width: '100%',
                                                            maxWidth: '320px',
                                                            borderRadius: '8px',
                                                            boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/faq/page.jsx",
                                                        lineNumber: 160,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/faq/page.jsx",
                                                    lineNumber: 159,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/faq/page.jsx",
                                            lineNumber: 156,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/faq/page.jsx",
                                        lineNumber: 155,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, faq.id, true, {
                                fileName: "[project]/src/app/faq/page.jsx",
                                lineNumber: 122,
                                columnNumber: 25
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "no-results",
                            style: {
                                textAlign: 'center',
                                color: '#ef4444',
                                fontWeight: 500,
                                padding: '2rem 0'
                            },
                            children: [
                                'No results found for "',
                                searchTerm,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/faq/page.jsx",
                            lineNumber: 178,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/faq/page.jsx",
                        lineNumber: 119,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ask-question",
                        style: {
                            marginTop: '2.5rem',
                            background: '#f3f4f6',
                            borderRadius: '8px',
                            padding: '1.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '1.2rem',
                                    fontWeight: 600,
                                    marginBottom: '1rem'
                                },
                                children: "Can't find what you're looking for?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/faq/page.jsx",
                                lineNumber: 195,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmitQuestion,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: newQuestion,
                                        onChange: (e)=>setNewQuestion(e.target.value),
                                        placeholder: "Ask your question here...",
                                        rows: "3",
                                        required: true,
                                        style: {
                                            width: '100%',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '6px',
                                            border: '1px solid #d1d5db',
                                            fontSize: '1rem',
                                            marginBottom: '1rem',
                                            resize: 'vertical',
                                            boxSizing: 'border-box'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/faq/page.jsx",
                                        lineNumber: 199,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "submit-btn",
                                        style: {
                                            background: 'black',
                                            color: '#fff',
                                            fontWeight: 600,
                                            padding: '0.75rem 1.5rem',
                                            borderRadius: '6px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontSize: '1rem'
                                        },
                                        onMouseOver: (e)=>e.currentTarget.style.background = '#c86b0eff',
                                        onMouseOut: (e)=>e.currentTarget.style.background = 'black',
                                        children: "Submit Question"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/faq/page.jsx",
                                        lineNumber: 216,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/faq/page.jsx",
                                lineNumber: 198,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/faq/page.jsx",
                        lineNumber: 189,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/faq/page.jsx",
                lineNumber: 91,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/faq/page.jsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(FAQPage, "kScN+ma5Tqgot/3VSiWPV1R4T4o=");
_c = FAQPage;
var _c;
__turbopack_context__.k.register(_c, "FAQPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_faq_page_jsx_c93eb0e6._.js.map