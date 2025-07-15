module.exports = {

"[project]/src/app/data/locations.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const locations = [
    {
        id: 1,
        name: "Lagos"
    },
    {
        id: 2,
        name: "Abuja"
    },
    {
        id: 3,
        name: "Port Harcourt"
    },
    {
        id: 4,
        name: "Ibadan"
    },
    {
        id: 5,
        name: "Kano"
    },
    {
        id: 6,
        name: "Enugu"
    },
    {
        id: 7,
        name: "Benin City"
    },
    {
        id: 8,
        name: "Kaduna"
    },
    {
        id: 9,
        name: "Owerri"
    },
    {
        id: 10,
        name: "Aba"
    },
    {
        id: 11,
        name: "Calabar"
    },
    {
        id: 12,
        name: "Ilorin"
    },
    {
        id: 13,
        name: "Jos"
    },
    {
        id: 14,
        name: "Maiduguri"
    },
    {
        id: 15,
        name: "Sokoto"
    },
    {
        id: 16,
        name: "Uyo"
    },
    {
        id: 17,
        name: "Warri"
    },
    {
        id: 18,
        name: "Zaria"
    },
    {
        id: 19,
        name: "Ogbomosho"
    },
    {
        id: 20,
        name: "Ife"
    },
    {
        id: 21,
        name: "Abeokuta"
    },
    {
        id: 22,
        name: "Akure"
    },
    {
        id: 23,
        name: "Onitsha"
    },
    {
        id: 24,
        name: "Yenagoa"
    },
    {
        id: 25,
        name: "Asaba"
    },
    {
        id: 26,
        name: "Lokoja"
    },
    {
        id: 27,
        name: "Gombe"
    },
    {
        id: 28,
        name: "Bauchi"
    },
    {
        id: 29,
        name: "Katsina"
    },
    {
        id: 30,
        name: "Jalingo"
    },
    {
        id: 31,
        name: "Birnin Kebbi"
    },
    {
        id: 32,
        name: "Yola"
    },
    {
        id: 33,
        name: "Dutse"
    },
    {
        id: 34,
        name: "Damaturu"
    },
    {
        id: 35,
        name: "Kogi"
    },
    {
        id: 36,
        name: "Ekiti"
    }
];
const __TURBOPACK__default__export__ = locations;
}}),
"[project]/src/app/component/Categories.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Categories)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$locations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/locations.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Categories({ locations }) {
    const [selectedLocation, setSelectedLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedJob, setSelectedJob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [job, setJob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSearch = (e)=>{
        e.preventDefault();
        // Implement search logic here, e.g., navigate or filter
        console.log("Searching for:", {
            locations,
            job
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSearch,
        className: "flex flex-row gap-4 items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Search location",
                value: location,
                onChange: (e)=>setLocation(e.target.value),
                style: {
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/component/Categories.jsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Search jobs",
                value: job,
                onChange: (e)=>setJob(e.target.value),
                style: {
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/component/Categories.jsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                style: {
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    border: "none",
                    background: "black",
                    color: "#fff",
                    transition: "background 0.3s"
                },
                onMouseEnter: (e)=>e.currentTarget.style.background = "green",
                onMouseLeave: (e)=>e.currentTarget.style.background = "black",
                children: "Search"
            }, void 0, false, {
                fileName: "[project]/src/app/component/Categories.jsx",
                lineNumber: 34,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/Categories.jsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=src_app_8a13b9ae._.js.map