module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/component/Categories.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CategorySearchBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function CategorySearchBar({ jobs }) {
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get unique categories
    const categories = [
        ...new Set(jobs.map((job)=>job.category))
    ];
    // Filter categories based on search term
    const filteredCategories = categories.filter((category)=>typeof category === "string" && category.toLowerCase().includes(searchTerm.toLowerCase()));
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative max-w-2xl mx-auto my-6",
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search categories...",
                        className: "w-full p-4 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-lg",
                        value: searchTerm,
                        onChange: (e)=>{
                            setSearchTerm(e.target.value);
                            setIsDropdownOpen(true);
                        },
                        onFocus: ()=>setIsDropdownOpen(true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/Categories.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/Categories.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/Categories.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/Categories.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            isDropdownOpen && filteredCategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "py-1",
                    children: filteredCategories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/jobs/category/${category.replaceAll(/\s+/g, '-').toLowerCase()}`,
                                className: "block px-4 py-3 text-gray-800 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200",
                                onClick: ()=>{
                                    setSearchTerm("");
                                    setIsDropdownOpen(false);
                                },
                                children: category
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/Categories.jsx",
                                lineNumber: 65,
                                columnNumber: 17
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/app/component/Categories.jsx",
                            lineNumber: 64,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/component/Categories.jsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/component/Categories.jsx",
                lineNumber: 61,
                columnNumber: 9
            }, this),
            isDropdownOpen && searchTerm && filteredCategories.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg p-4 text-gray-500",
                children: [
                    'No categories found for "',
                    searchTerm,
                    '"'
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/Categories.jsx",
                lineNumber: 82,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/Categories.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/component/LoginButton.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Button)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Button({ title }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleClick = ()=>{
        const slug = typeof title === 'string' ? title.toLowerCase().replace(/\s+/g, '-') : '';
        router.push(`/DashNav/${slug}`);
    // This will navigate to the job description page with the title as a slug
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleClick,
        className: "flex flex-col items-center bg-black text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-all duration-300 capitalize cursor-pointer",
        children: "Login"
    }, void 0, false, {
        fileName: "[project]/src/app/component/LoginButton.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/component/SignupButton.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Button)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Button({ title }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleClick = ()=>{
        const slug = typeof title === 'string' ? title.toLowerCase().replace(/\s+/g, '-') : '';
        router.push(`/signup/${slug}`);
    // This will navigate to the job description page with the title as a slug
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleClick,
        className: "flex flex-col items-center bg-black text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-all duration-300 capitalize cursor-pointer",
        children: "Sign Up"
    }, void 0, false, {
        fileName: "[project]/src/app/component/SignupButton.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/data/jobs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        category: "Frontend",
        company: "TechNova Inc.",
        location: "Remote",
        description: "Build responsive user interfaces with React, TypeScript, and Next.js. Collaborate with UX designers and backend developers. Mentor juniors and contribute to frontend architecture. This role offers opportunities for growth and exposure to cutting-edge frontend technologies in a collaborative environment.",
        requirements: [
            "3+ years of professional frontend development experience",
            "Strong proficiency in JavaScript/TypeScript and React ecosystem",
            "Experience with state management (Redux, Context API, or Zustand)",
            "Familiarity with version control (Git) and CI/CD pipelines",
            "Understanding of web performance optimization techniques",
            "Experience with responsive design and cross-browser compatibility"
        ],
        postedAt: "2025-07-01",
        endDate: "2025-07-31"
    },
    {
        id: 2,
        title: "Backend Engineer",
        category: "Backend",
        company: "ByteWorks",
        location: "Lagos, Nigeria",
        description: "Design and maintain scalable backend microservices using Node.js and PostgreSQL. Optimize queries, implement authentication, and ensure high availability. Collaborate with DevOps and lead technical initiatives. You will be part of a dynamic team focused on building robust backend solutions for modern applications.",
        requirements: [
            "4+ years experience building production backend systems",
            "Expertise in RESTful API design and GraphQL implementation",
            "Strong database skills (PostgreSQL, MongoDB, or MySQL)",
            "Experience with caching strategies using Redis",
            "Knowledge of authentication protocols (OAuth2, JWT)",
            "Familiarity with containerization and orchestration tools"
        ],
        postedAt: "2025-07-02",
        endDate: "2025-08-02"
    },
    {
        id: 3,
        title: "Cybersecurity Analyst",
        category: "Cybersecurity",
        company: "SecureLink",
        location: "Remote",
        description: "Monitor networks for security breaches and investigate incidents. Conduct vulnerability assessments and maintain SIEM solutions. Develop security policies and train employees. Join our team to help safeguard digital assets and contribute to a secure organizational environment.",
        requirements: [
            "3+ years in cybersecurity or related IT security role",
            "Deep understanding of firewalls, VPNs, IDS/IPS systems",
            "Hands-on experience with SIEM tools like Splunk or ELK",
            "Knowledge of MITRE ATT&CK framework and threat modeling",
            "Experience with incident response and forensic analysis",
            "Relevant certifications (CISSP, CEH, Security+) preferred"
        ],
        postedAt: "2025-07-03",
        endDate: "2025-08-03"
    },
    {
        id: 4,
        title: "Product Designer",
        category: "Product Design",
        company: "CreateLab",
        location: "Abuja, Nigeria",
        description: "Lead design from concept to launch, creating wireframes and prototypes. Collaborate with product managers and engineers using Figma. Mentor junior designers and evolve design processes. This position allows you to shape user experiences and drive innovation in product design.",
        requirements: [
            "5+ years experience in UI/UX design for digital products",
            "Expert proficiency in Figma, Sketch, or Adobe XD",
            "Strong portfolio demonstrating user-centered design solutions",
            "Experience conducting user research and usability testing",
            "Knowledge of design systems and component libraries",
            "Understanding of frontend development constraints"
        ],
        postedAt: "2025-07-04",
        endDate: "2025-08-04"
    },
    {
        id: 5,
        title: "Project Manager",
        category: "Project Management",
        company: "AgileTeams Ltd.",
        location: "Hybrid - Lagos",
        description: "Oversee software project lifecycles using Agile methodologies. Manage plans, budgets, risks, and stakeholder expectations. Facilitate standups, sprints, and retrospectives. You will play a key role in delivering successful projects and driving team performance.",
        requirements: [
            "PMP or Scrum Master certification preferred",
            "5+ years managing software development projects",
            "Expertise in JIRA, Confluence, and project management tools",
            "Strong financial acumen for budget management",
            "Excellent communication and conflict resolution skills",
            "Technical background to understand development challenges"
        ],
        postedAt: "2025-07-05",
        endDate: "2025-08-05"
    },
    {
        id: 6,
        title: "Fullstack Developer",
        category: "Fullstack",
        company: "DevSphere",
        location: "Remote",
        description: "Build web applications across React, Node.js, and PostgreSQL. Optimize performance and reliability, contribute to architecture, and mentor juniors. Participate in all SDLC phases. This role provides exposure to both frontend and backend technologies in a fast-paced environment.",
        requirements: [
            "4+ years professional fullstack development experience",
            "Strong knowledge of React and modern JavaScript/TypeScript",
            "Backend experience with Node.js and Express/Nest.js",
            "Database skills (SQL and NoSQL solutions)",
            "Experience with testing frameworks (Jest, Cypress)",
            "Understanding of cloud platforms (AWS, Azure, or GCP)"
        ],
        postedAt: "2025-07-06",
        endDate: "2025-08-06"
    },
    {
        id: 7,
        title: "Data Scientist",
        category: "Data Science",
        company: "DataCrux",
        location: "Remote",
        description: "Analyze large datasets to build predictive models and visualizations. Work with product teams to drive data-driven improvements. Tackle NLP, recommendation systems, and analytics. You will have the chance to solve complex problems and influence product direction through data insights.",
        requirements: [
            "Advanced degree in Computer Science, Statistics, or related field",
            "3+ years experience in data science or machine learning roles",
            "Expertise in Python data stack (pandas, NumPy, scikit-learn)",
            "Experience with machine learning model deployment",
            "Strong SQL skills and experience with big data technologies",
            "Excellent communication and data storytelling abilities"
        ],
        postedAt: "2025-07-07",
        endDate: "2025-08-07"
    },
    {
        id: 8,
        title: "DevOps Engineer",
        category: "DevOps",
        company: "CloudCore",
        location: "Remote",
        description: "Architect and maintain cloud infrastructure and CI/CD pipelines on AWS. Automate deployments and monitor system health. Collaborate with developers and implement security best practices. This position offers the opportunity to work with modern cloud technologies and automation tools.",
        requirements: [
            "3+ years professional DevOps/SRE experience",
            "Deep knowledge of AWS services and cloud architecture",
            "Expertise in containerization (Docker) and orchestration (Kubernetes)",
            "Strong scripting skills (Bash, Python, or Go)",
            "Experience with monitoring tools (Prometheus, Grafana, ELK)",
            "Knowledge of security best practices in cloud environments"
        ],
        postedAt: "2025-07-08",
        endDate: "2025-08-08"
    },
    {
        id: 9,
        title: "Mobile App Developer",
        category: "Mobile Development",
        company: "AppForge",
        location: "Lagos, Nigeria",
        description: "Build cross-platform mobile apps with Flutter and Dart. Collaborate with designers and backend teams to optimize performance. Contribute to open-source projects and mentor juniors. You will help shape the future of mobile experiences for a diverse user base.",
        requirements: [
            "3+ years professional mobile development experience",
            "Expertise in Flutter framework and Dart language",
            "Understanding of native Android/iOS development",
            "Experience with state management solutions",
            "Knowledge of mobile app security best practices",
            "Published apps on Play Store/App Store"
        ],
        postedAt: "2025-07-09",
        endDate: "2025-08-09"
    },
    {
        id: 10,
        title: "Quality Assurance Engineer",
        category: "QA/Testing",
        company: "BugTrackers",
        location: "Remote",
        description: "Ensure software quality through test plans and automation. Work with developers to track and resolve bugs. Build and maintain test frameworks and CI/CD pipelines. This role is crucial for delivering reliable products and improving user satisfaction.",
        requirements: [
            "4+ years experience in software quality assurance",
            "Strong knowledge of test automation frameworks",
            "Experience with both manual and automated testing",
            "Programming skills in JavaScript, Python, or Java",
            "Understanding of CI/CD integration for testing",
            "ISTQB certification or similar is a plus"
        ],
        postedAt: "2025-07-10",
        endDate: "2025-08-10"
    },
    {
        id: 11,
        title: "AI Research Engineer",
        category: "AI/ML",
        company: "NeuroNet",
        location: "Remote",
        description: "Develop novel AI/ML algorithms and train models on large datasets. Publish research papers and collaborate with academic partners. Lead research teams and contribute to real-world solutions. You will be at the forefront of AI innovation and have the opportunity to impact the industry.",
        requirements: [
            "PhD or MS in Computer Science, Mathematics, or related field",
            "Strong publication record in AI/ML conferences/journals",
            "Expertise in deep learning frameworks (TensorFlow/PyTorch)",
            "Experience with distributed training of large models",
            "Strong mathematical foundation in linear algebra and statistics",
            "Ability to translate research into production-ready solutions"
        ],
        postedAt: "2025-07-11",
        endDate: "2025-08-11"
    },
    {
        id: 12,
        title: "Technical Writer",
        category: "Technical Writing",
        company: "DocuTech",
        location: "Remote",
        description: "Create documentation for developer products including APIs and SDKs. Work with engineers to translate technical concepts. Maintain knowledge base and improve onboarding materials. This role is ideal for those who enjoy making complex information accessible and clear.",
        requirements: [
            "3+ years technical writing experience in software",
            "Ability to understand and explain complex technical concepts",
            "Experience with docs-as-code workflows and Markdown",
            "Familiarity with version control (Git)",
            "Basic understanding of programming concepts",
            "Portfolio of technical writing samples"
        ],
        postedAt: "2025-07-12",
        endDate: "2025-08-12"
    },
    {
        id: 13,
        title: "Business Analyst",
        category: "Business Analysis",
        company: "InsightOps",
        location: "Hybrid - Abuja",
        description: "Bridge business stakeholders and technical teams by gathering requirements. Document processes and propose data-driven solutions. Analyze metrics and recommend system enhancements. You will help drive business transformation and improve operational efficiency.",
        requirements: [
            "4+ years experience in business analysis roles",
            "Strong analytical and problem-solving skills",
            "Experience with requirements gathering techniques",
            "Proficiency in data analysis tools (Excel, SQL, Power BI)",
            "Excellent communication and stakeholder management",
            "CBAP or similar certification is a plus"
        ],
        postedAt: "2025-07-13",
        endDate: "2025-08-13"
    },
    {
        id: 14,
        title: "Systems Administrator",
        category: "IT Support",
        company: "SysNet",
        location: "On-site - Lagos",
        description: "Maintain corporate infrastructure including servers and networks. Troubleshoot issues, implement backups, and respond to incidents. Automate tasks and provide technical support. This position is essential for ensuring reliable IT operations and business continuity.",
        requirements: [
            "5+ years systems administration experience",
            "Expertise in Windows Server and Linux administration",
            "Strong networking knowledge (TCP/IP, DNS, VPN, firewalls)",
            "Experience with virtualization technologies (VMware/Hyper-V)",
            "Knowledge of backup and disaster recovery solutions",
            "Relevant certifications (MCSE, RHCE, CCNA) preferred"
        ],
        postedAt: "2025-07-14",
        endDate: "2025-08-14"
    },
    {
        id: 15,
        title: "UX Researcher",
        category: "User Research",
        company: "HumanTech",
        location: "Remote",
        description: "Lead user research to inform product strategy and design. Conduct studies and synthesize findings into actionable insights. Create personas, journey maps, and research reports. You will influence product decisions and help create user-centric solutions.",
        requirements: [
            "3+ years professional UX research experience",
            "Proficiency with research tools (UserTesting, Optimal Workshop)",
            "Strong analytical skills for qualitative/quantitative data",
            "Ability to communicate research findings effectively",
            "Background in psychology, HCI, or related field",
            "Portfolio demonstrating research impact on products"
        ],
        postedAt: "2025-07-15",
        endDate: "2025-08-15"
    },
    {
        id: 16,
        title: "Technical Support Specialist",
        category: "Customer Support",
        company: "HelpDeskPro",
        location: "Remote",
        description: "Troubleshoot software issues and guide users through solutions. Document support tickets and escalate bugs. Contribute to knowledge base and maintain high customer satisfaction. This role is perfect for those who enjoy helping others and solving technical problems.",
        requirements: [
            "2+ years technical support experience",
            "Excellent problem-solving and communication skills",
            "Basic understanding of software systems and networking",
            "Ability to learn complex technical products quickly",
            "Experience with support ticketing systems (Zendesk, Freshdesk)",
            "Customer-focused attitude and patience"
        ],
        postedAt: "2025-07-16",
        endDate: "2025-08-16"
    },
    {
        id: 17,
        title: "Cloud Architect",
        category: "Cloud Computing",
        company: "SkyScale Technologies",
        location: "Remote",
        description: "Design and implement scalable, secure cloud solutions for enterprise clients. Lead migration projects and optimize cloud spend. Mentor engineering teams and ensure compliance. You will have the opportunity to shape cloud strategies and drive digital transformation.",
        requirements: [
            "7+ years experience in cloud engineering/architecture",
            "Expert-level certification in AWS, Azure, or GCP",
            "Deep knowledge of cloud security and networking",
            "Experience with Terraform or CloudFormation",
            "Strong understanding of distributed systems",
            "Excellent communication and presentation skills"
        ],
        postedAt: "2025-07-17",
        endDate: "2025-08-17"
    },
    {
        id: 18,
        title: "Blockchain Developer",
        category: "Blockchain",
        company: "ChainInnovate",
        location: "Remote",
        description: "Develop decentralized apps and smart contracts using Ethereum and Solidity. Research new protocols and optimize gas fees. Collaborate on open-source blockchain projects. This role offers the chance to work on innovative blockchain solutions and emerging technologies.",
        requirements: [
            "3+ years software development experience",
            "1+ years hands-on blockchain development",
            "Proficiency in Solidity and smart contract development",
            "Understanding of cryptographic principles",
            "Experience with Truffle/Hardhat and testing frameworks",
            "Knowledge of Ethereum improvement proposals"
        ],
        postedAt: "2025-07-18",
        endDate: "2025-08-18"
    },
    {
        id: 19,
        title: "AR/VR Developer",
        category: "Extended Reality",
        company: "RealityLabs",
        location: "Lagos, Nigeria",
        description: "Create immersive AR/VR experiences using Unity and Unreal Engine. Develop interactive 3D applications and optimize performance. Collaborate with artists and designers on XR projects. You will help shape the future of interactive technology and virtual experiences.",
        requirements: [
            "2+ years AR/VR development experience",
            "Strong Unity or Unreal Engine skills",
            "Understanding of 3D graphics and shaders",
            "Experience with C# or C++ programming",
            "Knowledge of performance optimization for XR",
            "Portfolio of AR/VR projects"
        ],
        postedAt: "2025-07-10",
        endDate: "2025-08-10"
    },
    {
        id: 20,
        title: "Growth Marketing Manager",
        category: "Marketing",
        company: "ScaleUp Digital",
        location: "Remote",
        description: "Lead growth marketing for SaaS products across multiple channels. Analyze metrics, optimize funnels, and manage automation tools. Align messaging with user needs and drive user acquisition. This position is ideal for creative marketers who thrive on data-driven strategies.",
        requirements: [
            "5+ years digital marketing experience",
            "Proven track record of driving user growth",
            "Expertise in marketing analytics and attribution",
            "Experience with marketing automation tools",
            "Strong copywriting and messaging skills",
            "Understanding of SaaS business models"
        ],
        postedAt: "2025-07-11",
        endDate: "2025-08-11"
    },
    {
        id: 21,
        title: "Chief Technology Officer",
        category: "Executive",
        company: "NexGen Innovations",
        location: "Hybrid - Lagos",
        description: "Lead technology strategy and engineering teams. Set technical vision, manage technical debt, and scale systems for growth. Represent company at events and foster engineering excellence. This executive role is pivotal for driving innovation and shaping company direction.",
        requirements: [
            "10+ years technology leadership experience",
            "Proven track record of scaling engineering teams",
            "Deep technical expertise in modern software development",
            "Strong business acumen and strategic thinking",
            "Excellent leadership and communication skills",
            "Experience with fundraising and investor relations"
        ],
        postedAt: "2025-07-12",
        endDate: "2025-08-12"
    },
    {
        id: 22,
        title: "Site Reliability Engineer",
        category: "DevOps",
        company: "InfraSecure",
        location: "Remote",
        description: "Ensure high availability and performance of production systems. Implement monitoring, alerting, and incident response procedures. Automate operational tasks and improve system resilience. You will be instrumental in maintaining reliable and scalable infrastructure.",
        requirements: [
            "4+ years SRE or DevOps experience",
            "Strong coding skills in Python or Go",
            "Experience with infrastructure as code (Terraform, Ansible)",
            "Knowledge of distributed systems and microservices",
            "Familiarity with service mesh technologies",
            "Experience with chaos engineering principles"
        ],
        postedAt: "2025-07-13",
        endDate: "2025-08-13"
    },
    {
        id: 23,
        title: "Data Engineer",
        category: "Data Science",
        company: "DataFlow Systems",
        location: "Remote",
        description: "Design and build scalable data pipelines and warehouses. Optimize ETL processes and ensure data quality. Work with analytics teams to enable data-driven decision making. This role is key to unlocking the value of data for business insights.",
        requirements: [
            "3+ years data engineering experience",
            "Expertise in SQL and data modeling",
            "Experience with big data technologies (Spark, Hadoop)",
            "Knowledge of cloud data services (Redshift, BigQuery)",
            "Programming skills in Python or Scala",
            "Understanding of data governance principles"
        ],
        postedAt: "2025-07-14",
        endDate: "2025-08-14"
    },
    {
        id: 24,
        title: "Game Developer",
        category: "Gaming",
        company: "PlaySphere Studios",
        location: "Lagos, Nigeria",
        description: "Develop engaging games for mobile and desktop platforms. Implement game mechanics, physics, and AI systems. Collaborate with artists and designers to bring creative visions to life. You will have the opportunity to work on exciting projects in the gaming industry.",
        requirements: [
            "3+ years game development experience",
            "Strong Unity or Unreal Engine proficiency",
            "Experience with C# or C++ programming",
            "Understanding of game physics and mathematics",
            "Knowledge of optimization techniques for games",
            "Published game titles is a plus"
        ],
        postedAt: "2025-07-15",
        endDate: "2025-08-15"
    },
    {
        id: 25,
        title: "Digital Product Manager",
        category: "Product Management",
        company: "ProductLabs",
        location: "Remote",
        description: "Lead product development from conception to launch. Define roadmaps, prioritize features, and work with cross-functional teams. Analyze metrics and drive product improvements. This role is ideal for strategic thinkers passionate about building impactful products.",
        requirements: [
            "5+ years product management experience",
            "Proven track record of successful product launches",
            "Strong analytical and problem-solving skills",
            "Experience with Agile methodologies",
            "Technical background to understand development constraints",
            "Excellent communication and leadership abilities"
        ],
        postedAt: "2025-07-16",
        endDate: "2025-08-16"
    },
    {
        id: 26,
        title: "IT Security Consultant",
        category: "Cybersecurity",
        company: "CyberShield",
        location: "Hybrid - Abuja",
        description: "Assess client security postures and recommend improvements. Conduct penetration testing and vulnerability assessments. Develop security policies and provide expert guidance. You will help organizations strengthen their security and protect critical assets.",
        requirements: [
            "5+ years cybersecurity experience",
            "Offensive Security certifications (OSCP, CEH)",
            "Experience with penetration testing tools",
            "Knowledge of compliance frameworks (ISO 27001, NIST)",
            "Strong report writing and presentation skills",
            "Ability to explain technical concepts to non-technical audiences"
        ],
        postedAt: "2025-07-17",
        endDate: "2025-08-17"
    },
    {
        id: 27,
        title: "Content Designer",
        category: "Design",
        company: "WordCraft",
        location: "Remote",
        description: "Create compelling content that enhances user experiences. Develop microcopy, error messages, and onboarding flows. Collaborate with UX designers to ensure cohesive messaging. This position is perfect for creative writers who want to shape digital products.",
        requirements: [
            "3+ years content design or UX writing experience",
            "Portfolio demonstrating content design work",
            "Understanding of information architecture",
            "Experience working with design systems",
            "Strong editing and proofreading skills",
            "Ability to adapt tone and style for different audiences"
        ],
        postedAt: "2025-07-18",
        endDate: "2025-08-18"
    },
    {
        id: 28,
        title: "Sales Engineer",
        category: "Sales",
        company: "TechSolutions Ltd.",
        location: "Hybrid - Lagos",
        description: "Bridge technical and sales teams by demonstrating product capabilities. Conduct technical presentations and proof-of-concepts. Address customer technical concerns and support sales cycles. You will help drive business growth by connecting technology with customer needs.",
        requirements: [
            "3+ years technical sales or engineering experience",
            "Strong technical background in software solutions",
            "Excellent presentation and communication skills",
            "Ability to translate technical features to business value",
            "Experience with CRM systems",
            "Willingness to travel to client sites"
        ],
        postedAt: "2025-07-10",
        endDate: "2025-08-10"
    },
    {
        id: 29,
        title: "Community Manager",
        category: "Marketing",
        company: "DevConnect",
        location: "Remote",
        description: "Build and engage developer communities around technical products. Organize events, create content, and foster discussions. Gather community feedback to inform product development. This role is ideal for those passionate about building and nurturing communities.",
        requirements: [
            "3+ years community management experience",
            "Technical background to understand developer needs",
            "Experience with social media and community platforms",
            "Excellent written and verbal communication skills",
            "Ability to organize and host virtual/in-person events",
            "Passion for building inclusive communities"
        ],
        postedAt: "2025-07-11",
        endDate: "2025-08-11"
    },
    {
        id: 30,
        title: "IT Project Coordinator",
        category: "Project Management",
        company: "TechImplement",
        location: "On-site - Lagos",
        description: "Support IT project managers with planning, documentation, and communication. Track project progress and coordinate between teams. Manage project documentation and reporting. You will help ensure projects run smoothly and meet their objectives.",
        requirements: [
            "2+ years project coordination experience",
            "Familiarity with project management methodologies",
            "Strong organizational and multitasking skills",
            "Proficiency with project management tools",
            "Excellent communication and interpersonal skills",
            "Basic understanding of IT systems and terminology"
        ],
        postedAt: "2025-07-12",
        endDate: "2025-08-12"
    },
    {
        id: 31,
        title: "Network Engineer",
        category: "IT Support",
        company: "NetLink Solutions",
        location: [
            "Lagos",
            "Abuja",
            "Port Harcourt"
        ],
        description: "Design, implement and maintain network infrastructure including routers, switches and firewalls. Troubleshoot network issues and optimize performance. This role is vital for ensuring seamless connectivity and reliable network operations.",
        requirements: [
            "CCNA or equivalent certification",
            "3+ years network engineering experience",
            "Knowledge of BGP, OSPF and other routing protocols",
            "Experience with network monitoring tools",
            "Strong troubleshooting skills"
        ],
        postedAt: "2025-07-19",
        endDate: "2025-08-19"
    },
    {
        id: 32,
        title: "ERP Consultant",
        category: "Business Analysis",
        company: "EnterpriseSoft",
        location: [
            "Lagos (Hybrid)",
            "Kano (Hybrid)",
            "Abuja (Hybrid)"
        ],
        description: "Implement and customize ERP solutions for clients across various industries. Train users and provide ongoing support. You will help organizations streamline operations and maximize the value of their ERP systems.",
        requirements: [
            "3+ years ERP implementation experience",
            "Knowledge of SAP, Oracle or Microsoft Dynamics",
            "Strong business process understanding",
            "Excellent communication skills"
        ],
        postedAt: "2025-07-19",
        endDate: "2025-08-19"
    },
    {
        id: 33,
        title: "3D Animator",
        category: "Design",
        company: "MotionFX",
        location: [
            "Lagos (Hybrid)",
            "Port Harcourt (Hybrid)"
        ],
        description: "Create high-quality 3D animations for games, films and advertisements using Maya and Blender. This role offers creative freedom and the chance to work on visually stunning projects.",
        requirements: [
            "2+ years professional animation experience",
            "Strong portfolio of 3D work",
            "Knowledge of rigging and skinning",
            "Understanding of animation principles"
        ],
        postedAt: "2025-07-20",
        endDate: "2025-08-20"
    },
    {
        id: 34,
        title: "Database Administrator",
        category: "Backend",
        company: "DataFort",
        location: [
            "Abuja (Hybrid)",
            "Kaduna (Hybrid)",
            "Enugu (Hybrid)"
        ],
        description: "Manage and optimize database systems including SQL Server, Oracle and MySQL. Implement backups and ensure data security. You will play a key role in maintaining data integrity and supporting business operations.",
        requirements: [
            "4+ years DBA experience",
            "Expertise in database tuning",
            "Knowledge of backup/recovery procedures",
            "Relevant certifications preferred"
        ],
        postedAt: "2025-07-20",
        endDate: "2025-08-20"
    },
    {
        id: 35,
        title: "SEO Specialist",
        category: "Marketing",
        company: "DigitalGrowth",
        location: [
            "Lagos (Hybrid)",
            "Ibadan (Hybrid)",
            "Port Harcourt (Hybrid)"
        ],
        description: "Optimize website content and structure for search engines. Conduct keyword research and analyze performance metrics. This position is ideal for those who enjoy driving online visibility and growth.",
        requirements: [
            "2+ years SEO experience",
            "Knowledge of SEO tools (Ahrefs, SEMrush)",
            "Understanding of technical SEO",
            "Analytical mindset"
        ],
        postedAt: "2025-07-21",
        endDate: "2025-08-21"
    },
    {
        id: 36,
        title: "Embedded Systems Engineer",
        category: "Engineering",
        company: "IoTech Solutions",
        location: [
            "Lagos (Hybrid)",
            "Abuja (Hybrid)"
        ],
        description: "Develop firmware for embedded devices using C/C++. Work with hardware engineers on IoT products. You will help create innovative solutions for the rapidly growing IoT sector.",
        requirements: [
            "Degree in Computer/Electrical Engineering",
            "3+ years embedded development",
            "Experience with RTOS",
            "Knowledge of communication protocols"
        ],
        postedAt: "2025-07-21",
        endDate: "2025-08-21"
    },
    {
        id: 37,
        title: "IT Trainer",
        category: "Education",
        company: "TechAcademy",
        location: [
            "Abuja (Hybrid)",
            "Kano (Hybrid)",
            "Enugu (Hybrid)",
            "Calabar (Hybrid)"
        ],
        description: "Deliver technical training on programming, networking and other IT topics. Develop course materials. This role is perfect for those who enjoy sharing knowledge and empowering others.",
        requirements: [
            "3+ years training experience",
            "Strong technical knowledge",
            "Excellent presentation skills",
            "Patience and teaching ability"
        ],
        postedAt: "2025-07-22",
        endDate: "2025-08-22"
    },
    {
        id: 38,
        title: "UI Designer",
        category: "Design",
        company: "PixelPerfect",
        location: [
            "Lagos (Hybrid)",
            "Port Harcourt (Hybrid)",
            "Abeokuta (Hybrid)"
        ],
        description: "Create visually appealing user interfaces for web and mobile applications. Work with UX designers and developers. You will help shape the look and feel of digital products for diverse audiences.",
        requirements: [
            "3+ years UI design experience",
            "Strong portfolio",
            "Proficiency in Figma/Sketch",
            "Understanding of design systems"
        ],
        postedAt: "2025-07-22",
        endDate: "2025-08-22"
    },
    {
        id: 39,
        title: "IT Auditor",
        category: "Cybersecurity",
        company: "AuditSecure",
        location: [
            "Abuja (Hybrid)",
            "Lagos (Hybrid)",
            "Kaduna (Hybrid)"
        ],
        description: "Assess IT systems and processes for compliance with regulations and best practices. Identify risks and recommend controls. This position is crucial for maintaining organizational compliance and security.",
        requirements: [
            "CISA certification",
            "3+ years IT audit experience",
            "Knowledge of COBIT framework",
            "Attention to detail"
        ],
        postedAt: "2025-07-23",
        endDate: "2025-08-23"
    },
    {
        id: 40,
        title: "Scrum Master",
        category: "Project Management",
        company: "AgileWorks",
        location: [
            "Lagos (Hybrid)",
            "Port Harcourt (Hybrid)",
            "Ibadan (Hybrid)"
        ],
        description: "Facilitate Agile processes and remove impediments for development teams. Coach teams on Scrum practices. You will help teams deliver value efficiently and foster a culture of continuous improvement.",
        requirements: [
            "CSM or PSM certification",
            "3+ years Scrum Master experience",
            "Excellent facilitation skills",
            "Conflict resolution ability"
        ],
        postedAt: "2025-07-23",
        endDate: "2025-08-23"
    },
    {
        id: 41,
        title: "Digital Forensics Analyst",
        category: "Cybersecurity",
        company: "CyberInvestigate",
        location: [
            "Abuja (Hybrid)",
            "Lagos (Hybrid)"
        ],
        description: "Investigate cyber incidents and recover digital evidence. Prepare forensic reports for legal proceedings. This role is essential for protecting organizations and supporting legal investigations.",
        requirements: [
            "3+ years forensics experience",
            "Knowledge of forensic tools (FTK, EnCase)",
            "Understanding of chain of custody",
            "Attention to detail"
        ],
        postedAt: "2025-07-24",
        endDate: "2025-08-24"
    },
    {
        id: 42,
        title: "Cloud Security Engineer",
        category: "Cloud Computing",
        company: "SecureCloud",
        location: [
            "Lagos (Hybrid)",
            "Abuja (Hybrid)",
            "Port Harcourt (Hybrid)",
            "Kano (Hybrid)"
        ],
        description: "Implement security controls for cloud environments. Monitor for threats and respond to incidents. You will help organizations protect their cloud assets and maintain regulatory compliance.",
        requirements: [
            "3+ years cloud security experience",
            "Knowledge of AWS/Azure security",
            "Relevant certifications",
            "Scripting skills"
        ],
        postedAt: "2025-07-24",
        endDate: "2025-08-24"
    },
    {
        id: 43,
        title: "IT Sales Executive",
        category: "Sales",
        company: "TechDeploy",
        location: [
            "Lagos (Hybrid)",
            "Abuja (Hybrid)",
            "Port Harcourt (Hybrid)",
            "Enugu (Hybrid)"
        ],
        description: "Sell IT solutions and services to businesses. Build client relationships and meet sales targets. This position is ideal for driven individuals who enjoy working in a fast-paced sales environment.",
        requirements: [
            "2+ years IT sales experience",
            "Technical knowledge",
            "Strong negotiation skills",
            "Driven personality"
        ],
        postedAt: "2025-07-25",
        endDate: "2025-08-25"
    },
    {
        id: 44,
        title: "GIS Specialist",
        category: "Data Science",
        company: "GeoData",
        location: [
            "Abuja (Hybrid)",
            "Port Harcourt (Hybrid)",
            "Uyo (Hybrid)"
        ],
        description: "Analyze geographic data using GIS software. Create maps and spatial visualizations. You will help organizations make informed decisions using spatial data analysis.",
        requirements: [
            "Degree in Geography/GIS",
            "2+ years GIS experience",
            "Knowledge of ArcGIS/QGIS",
            "Analytical skills"
        ],
        postedAt: "2025-07-25",
        endDate: "2025-08-25"
    },
    {
        id: 45,
        title: "IT Procurement Specialist",
        category: "Operations",
        company: "TechBuy",
        location: [
            "Lagos (Hybrid)",
            "Abuja (Hybrid)"
        ],
        description: "Source and purchase IT equipment and software. Negotiate with vendors and manage contracts. This role is crucial for ensuring organizations have the right technology resources.",
        requirements: [
            "3+ years procurement experience",
            "Knowledge of IT products",
            "Negotiation skills",
            "Attention to detail"
        ],
        postedAt: "2025-07-26",
        endDate: "2025-08-26"
    },
    {
        id: 46,
        title: "E-commerce Specialist",
        category: "Marketing",
        company: "ShopOnline",
        location: [
            "Lagos (Hybrid)",
            "Port Harcourt (Hybrid)",
            "Abeokuta (Hybrid)"
        ],
        description: "Manage online stores and optimize product listings. Analyze sales data and implement marketing strategies. You will help drive online sales and improve customer experiences.",
        requirements: [
            "2+ years e-commerce experience",
            "Knowledge of Shopify/Magento",
            "Digital marketing skills",
            "Analytical ability"
        ],
        postedAt: "2025-07-26",
        endDate: "2025-08-26"
    },
    {
        id: 47,
        title: "IT Help Desk Technician",
        category: "IT Support",
        company: "SupportTech",
        location: [
            "Lagos (Hybrid)",
            "Abuja (Hybrid)",
            "Port Harcourt (Hybrid)",
            "Benin (Hybrid)"
        ],
        description: "Provide technical support to end-users. Troubleshoot hardware and software issues. This role is perfect for those who enjoy solving problems and helping others.",
        requirements: [
            "1+ years help desk experience",
            "Knowledge of Windows/Mac OS",
            "Customer service skills",
            "Patience"
        ],
        postedAt: "2025-07-27",
        endDate: "2025-08-27"
    },
    {
        id: 48,
        title: "Digital Marketing Analyst",
        category: "Marketing",
        company: "AdMetrics",
        location: [
            "Lagos (Hybrid)",
            "Abuja (Hybrid)",
            "Ibadan (Hybrid)"
        ],
        description: "Analyze digital marketing campaigns and optimize performance. Prepare reports and recommendations. You will help organizations make data-driven marketing decisions.",
        requirements: [
            "2+ years digital analytics experience",
            "Knowledge of Google Analytics",
            "Excel skills",
            "Data visualization ability"
        ],
        postedAt: "2025-07-27",
        endDate: "2025-08-27"
    },
    {
        id: 49,
        title: "IT Compliance Officer",
        category: "Cybersecurity",
        company: "RegTech",
        location: [
            "Abuja (Hybrid)",
            "Lagos (Hybrid)"
        ],
        description: "Ensure IT systems comply with regulations. Develop policies and conduct audits. This role is essential for maintaining regulatory compliance and protecting organizational interests.",
        requirements: [
            "3+ years compliance experience",
            "Knowledge of GDPR/NDPR",
            "Attention to detail",
            "Communication skills"
        ],
        postedAt: "2025-07-28",
        endDate: "2025-08-28"
    },
    {
        id: 50,
        title: "Web Analytics Specialist",
        category: "Data Science",
        company: "WebMetrics",
        location: [
            "Lagos (Hybrid)",
            "Port Harcourt (Hybrid)"
        ],
        description: "Implement tracking and analyze website traffic. Provide insights to improve user experience. You will help organizations optimize their web presence and achieve business goals.",
        requirements: [
            "2+ years analytics experience",
            "Knowledge of Google Tag Manager",
            "Data analysis skills",
            "Problem-solving ability"
        ],
        postedAt: "2025-07-28",
        endDate: "2025-08-28"
    },
    {
        id: 51,
        title: "IT Asset Manager",
        category: "Operations",
        company: "AssetTrack",
        location: [
            "Lagos (Hybrid)",
            "Abuja (Hybrid)",
            "Kano (Hybrid)"
        ],
        description: "Track and manage IT assets throughout their lifecycle. Maintain inventory records. This position is key for ensuring efficient use and management of technology resources.",
        requirements: [
            "2+ years asset management",
            "Organizational skills",
            "Attention to detail",
            "Knowledge of ITAM tools"
        ],
        postedAt: "2025-07-29",
        endDate: "2025-08-29"
    },
    {
        id: 52,
        title: "VoIP Engineer",
        category: "IT Support",
        company: "VoiceTech",
        location: [
            "Lagos (Hybrid)",
            "Abuja (Hybrid)",
            "Port Harcourt (Hybrid)"
        ],
        description: "Design and maintain VoIP systems. Troubleshoot call quality issues. You will help organizations maintain reliable communication systems.",
        requirements: [
            "3+ years VoIP experience",
            "Knowledge of SIP protocols",
            "Troubleshooting skills",
            "Network knowledge"
        ],
        postedAt: "2025-07-29",
        endDate: "2025-08-29"
    },
    {
        id: 53,
        title: "IT Recruiter",
        category: "HR",
        company: "TalentFind",
        location: [
            "Lagos (Hybrid)",
            "Abuja (Hybrid)",
            "Port Harcourt (Hybrid)",
            "Enugu (Hybrid)"
        ],
        description: "Source and recruit IT professionals. Build relationships with candidates and clients. This role is ideal for those who enjoy connecting talent with opportunities in the tech industry.",
        requirements: [
            "2+ years IT recruitment",
            "Technical knowledge",
            "Communication skills",
            "Networking ability"
        ],
        postedAt: "2025-07-30",
        endDate: "2025-08-30"
    },
    {
        id: 54,
        title: "IT Business Development Manager",
        category: "Sales",
        company: "TechExpand",
        location: [
            "Lagos (Hybrid)",
            "Abuja (Hybrid)"
        ],
        description: "Identify new business opportunities for IT services. Develop proposals and close deals. You will help drive growth and expand the company's market presence.",
        requirements: [
            "5+ years IT business development",
            "Strong network",
            "Negotiation skills",
            "Technical understanding"
        ],
        postedAt: "2025-07-30",
        endDate: "2025-08-30"
    },
    {
        id: 55,
        title: "IT Service Delivery Manager",
        category: "Operations",
        company: "ServicePro",
        location: [
            "Lagos (Hybrid)",
            "Abuja (Hybrid)",
            "Port Harcourt (Hybrid)"
        ],
        description: "Ensure quality delivery of IT services. Manage SLAs and client relationships. This role is crucial for maintaining high standards of service and customer satisfaction.",
        requirements: [
            "5+ years service delivery",
            "ITIL certification",
            "Customer service focus",
            "Problem-solving skills"
        ],
        postedAt: "2025-07-31",
        endDate: "2025-08-31"
    },
    {
        id: 56,
        title: "IT Finance Manager",
        category: "Finance",
        company: "TechCapital",
        location: [
            "Lagos (Hybrid)",
            "Abuja (Hybrid)"
        ],
        description: "Manage IT budgets and financial planning. Analyze costs and ROI of IT projects. You will help organizations make informed financial decisions regarding technology investments.",
        requirements: [
            "5+ years IT finance",
            "Accounting qualification",
            "Analytical skills",
            "IT knowledge"
        ],
        postedAt: "2025-07-31",
        endDate: "2025-08-31"
    },
    {
        id: 57,
        title: "IT Legal Consultant",
        category: "Legal",
        company: "TechLaw",
        location: [
            "Lagos (Hybrid)",
            "Abuja (Hybrid)"
        ],
        description: "Provide legal advice on IT contracts and compliance. Handle intellectual property matters. This position is ideal for legal professionals interested in technology and innovation.",
        requirements: [
            "Law degree",
            "3+ years IT law",
            "Contract drafting",
            "Communication skills"
        ],
        postedAt: "2025-08-01",
        endDate: "2025-09-01"
    },
    {
        id: 58,
        title: "IT Health Specialist",
        category: "Healthcare",
        company: "HealthIT",
        location: [
            "Lagos (Hybrid)",
            "Abuja (Hybrid)",
            "Port Harcourt (Hybrid)",
            "Enugu (Hybrid)"
        ],
        description: "Implement and support healthcare IT systems. Train medical staff on technology use. You will help improve healthcare delivery through innovative technology solutions.",
        requirements: [
            "3+ years health IT",
            "Knowledge of EMR systems",
            "Healthcare understanding",
            "Training skills"
        ],
        postedAt: "2025-08-01",
        endDate: "2025-09-01"
    },
    {
        id: 59,
        title: "EdTech Specialist",
        category: "Education",
        company: "LearnTech",
        location: [
            "Lagos (Hybrid)",
            "Abuja (Hybrid)",
            "Ibadan (Hybrid)"
        ],
        description: "Develop and implement educational technology solutions. Train teachers on digital tools. This role is perfect for those passionate about transforming education through technology.",
        requirements: [
            "3+ years EdTech",
            "Teaching background",
            "Technical skills",
            "Communication ability"
        ],
        postedAt: "2025-08-02",
        endDate: "2025-09-02"
    },
    {
        id: 60,
        title: "AgriTech Developer",
        category: "Engineering",
        company: "FarmTech",
        location: [
            "Abuja (Hybrid)",
            "Kano (Hybrid)",
            "Oyo (Hybrid)"
        ],
        description: "Develop software solutions for agricultural applications. Work with farmers to understand needs. You will help modernize agriculture and improve productivity through technology.",
        requirements: [
            "2+ years AgriTech",
            "Programming skills",
            "Agriculture interest",
            "Problem-solving"
        ],
        postedAt: "2025-08-02",
        endDate: "2025-09-02"
    },
    {
        id: 61,
        title: "FinTech Developer",
        category: "Finance",
        company: "PayTech",
        location: [
            "Lagos",
            "Abuja"
        ],
        description: "Build financial technology applications. Implement secure payment solutions. This role is ideal for developers interested in shaping the future of financial services.",
        requirements: [
            "3+ years FinTech",
            "Financial knowledge",
            "Security awareness",
            "Coding skills"
        ],
        postedAt: "2025-08-03",
        endDate: "2025-09-03"
    },
    {
        id: 62,
        title: "GovTech Specialist",
        category: "Government",
        company: "CivicTech",
        location: [
            "Abuja",
            "Lagos"
        ],
        description: "Implement technology solutions for government agencies. Digitize public services. You will help improve public sector efficiency and service delivery through technology.",
        requirements: [
            "3+ years public sector IT",
            "Process improvement",
            "Stakeholder management",
            "Technical knowledge"
        ],
        postedAt: "2025-08-03",
        endDate: "2025-09-03"
    },
    {
        id: 63,
        title: "Maritime IT Specialist",
        category: "Logistics",
        company: "PortTech",
        location: [
            "Lagos",
            "Port Harcourt"
        ],
        description: "Support IT systems for maritime operations. Implement port management software. This role is crucial for ensuring efficient and secure maritime logistics.",
        requirements: [
            "3+ years maritime IT",
            "Logistics knowledge",
            "Technical skills",
            "Problem-solving"
        ],
        postedAt: "2025-08-04",
        endDate: "2025-09-04"
    },
    {
        id: 64,
        title: "Aviation IT Specialist",
        category: "Transportation",
        company: "AirTech",
        location: [
            "Lagos",
            "Abuja"
        ],
        description: "Maintain IT systems for airline operations. Support airport technology infrastructure. You will help ensure safe and efficient air travel through reliable IT systems.",
        requirements: [
            "3+ years aviation IT",
            "Airline systems knowledge",
            "Technical troubleshooting",
            "Communication skills"
        ],
        postedAt: "2025-08-04",
        endDate: "2025-09-04"
    },
    {
        id: 65,
        title: "Telecom Engineer",
        category: "Telecommunications",
        company: "CommsTech",
        location: [
            "Lagos",
            "Abuja",
            "Port Harcourt",
            "Kano"
        ],
        description: "Design and maintain telecom networks. Troubleshoot connectivity issues. This position is vital for supporting modern communication infrastructure.",
        requirements: [
            "3+ years telecom",
            "Network knowledge",
            "Problem-solving",
            "Technical skills"
        ],
        postedAt: "2025-08-05",
        endDate: "2025-09-05"
    },
    {
        id: 66,
        title: "Broadcast Engineer",
        category: "Media",
        company: "MediaTech",
        location: [
            "Lagos",
            "Abuja"
        ],
        description: "Maintain broadcast equipment and systems. Support live productions. You will help deliver high-quality media content to audiences.",
        requirements: [
            "3+ years broadcast",
            "Technical knowledge",
            "Troubleshooting",
            "Attention to detail"
        ],
        postedAt: "2025-08-05",
        endDate: "2025-09-05"
    },
    {
        id: 67,
        title: "Energy IT Specialist",
        category: "Energy",
        company: "PowerTech",
        location: [
            "Lagos",
            "Port Harcourt"
        ],
        description: "Support IT systems for energy companies. Implement SCADA solutions. This role is essential for ensuring efficient and secure energy operations.",
        requirements: [
            "3+ years energy IT",
            "SCADA knowledge",
            "Technical skills",
            "Industry understanding"
        ],
        postedAt: "2025-08-06",
        endDate: "2025-09-06"
    },
    {
        id: 68,
        title: "Mining IT Specialist",
        category: "Mining",
        company: "MineTech",
        location: [
            "Abuja",
            "Jos"
        ],
        description: "Implement technology solutions for mining operations. Support geological software. You will help modernize mining processes and improve operational efficiency.",
        requirements: [
            "3+ years mining IT",
            "Geological knowledge",
            "Technical skills",
            "Remote work ability"
        ],
        postedAt: "2025-08-06",
        endDate: "2025-09-06"
    },
    {
        id: 69,
        title: "Construction IT Manager",
        category: "Construction",
        company: "BuildTech",
        location: [
            "Lagos",
            "Abuja"
        ],
        description: "Manage IT systems for construction projects. Implement BIM solutions. This role is crucial for supporting successful construction project delivery.",
        requirements: [
            "3+ years construction IT",
            "BIM knowledge",
            "Project management",
            "Technical skills"
        ],
        postedAt: "2025-08-07",
        endDate: "2025-09-07"
    },
    {
        id: 70,
        title: "Hospitality IT Manager",
        category: "Hospitality",
        company: "HotelTech",
        location: [
            "Lagos",
            "Abuja",
            "Port Harcourt",
            "Calabar"
        ],
        description: "Manage IT systems for hotels and resorts. Support property management software. You will help deliver excellent guest experiences through reliable technology.",
        requirements: [
            "3+ years hospitality IT",
            "PMS knowledge",
            "Customer service",
            "Technical skills"
        ],
        postedAt: "2025-08-07",
        endDate: "2025-09-07"
    },
    {
        id: 71,
        title: "Retail IT Specialist",
        category: "Retail",
        company: "ShopTech",
        location: [
            "Lagos",
            "Abuja",
            "Kano"
        ],
        description: "Support POS systems and retail technology. Troubleshoot store IT issues. This role is essential for ensuring smooth retail operations and customer satisfaction.",
        requirements: [
            "2+ years retail IT",
            "POS knowledge",
            "Customer service",
            "Technical skills"
        ],
        postedAt: "2025-08-08",
        endDate: "2025-09-08"
    },
    {
        id: 72,
        title: "Manufacturing IT Specialist",
        category: "Manufacturing",
        company: "FactoryTech",
        location: [
            "Lagos",
            "Port Harcourt",
            "Onitsha"
        ],
        description: "Implement IT systems for manufacturing plants. Support production software. You will help improve manufacturing efficiency and product quality through technology.",
        requirements: [
            "3+ years manufacturing IT",
            "ERP knowledge",
            "Technical skills",
            "Process understanding"
        ],
        postedAt: "2025-08-08",
        endDate: "2025-09-08"
    }
];
const __TURBOPACK__default__export__ = jobs;
}}),
"[project]/src/app/component/navigation/NavData.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NavData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/im/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$Categories$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/Categories.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$jobs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/jobs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$LoginButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/LoginButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SignupButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/SignupButton.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function NavData() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-left space-x-4 md:space-x-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImFlattr"], {
                            className: "text-8xl text-white bg-amber-600 p-2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/navigation/NavData.jsx",
                            lineNumber: 13,
                            columnNumber: 36
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/navigation/NavData.jsx",
                        lineNumber: 13,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/component/navigation/NavData.jsx",
                    lineNumber: 12,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/component/navigation/NavData.jsx",
                lineNumber: 11,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "flex flex-col items-center bg-black text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-all duration-300 capitalize cursor-pointer",
                            href: "/jobs",
                            children: "Jobs"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/navigation/NavData.jsx",
                            lineNumber: 18,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/navigation/NavData.jsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "flex flex-col items-center bg-black text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-all duration-300 capitalize cursor-pointer",
                            href: "/about",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/navigation/NavData.jsx",
                            lineNumber: 22,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/navigation/NavData.jsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "flex flex-col items-center bg-black text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-all duration-300 capitalize cursor-pointer",
                            href: "/dashboard",
                            children: "Dash Board"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/navigation/NavData.jsx",
                            lineNumber: 26,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/navigation/NavData.jsx",
                        lineNumber: 25,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "flex flex-col items-center bg-black text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-all duration-300 capitalize cursor-pointer",
                            href: "/contact",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/navigation/NavData.jsx",
                            lineNumber: 30,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/navigation/NavData.jsx",
                        lineNumber: 29,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "flex flex-col items-center bg-black text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-all duration-300 capitalize cursor-pointer",
                            href: "/post-job",
                            children: "Post Job"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/navigation/NavData.jsx",
                            lineNumber: 34,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/navigation/NavData.jsx",
                        lineNumber: 33,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/navigation/NavData.jsx",
                lineNumber: 16,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row items-center justify-end space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$Categories$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        jobs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$jobs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/navigation/NavData.jsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$LoginButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/component/navigation/NavData.jsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SignupButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/component/navigation/NavData.jsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/navigation/NavData.jsx",
                lineNumber: 38,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/component/navigation/Mobile.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Mobile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$navigation$2f$NavData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/navigation/NavData.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Mobile() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-slate-50 bg-emerald-700 h-16 flex justify-between items-center px-4 md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-2xl font-bold",
                        children: "HR Platform"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/navigation/Mobile.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiHandshake"], {
                        className: "text-green-700",
                        onClick: toggleMenu
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/navigation/Mobile.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/navigation/Mobile.jsx",
                lineNumber: 18,
                columnNumber: 5
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex flex-col items-center justify-center border-green-700 text-slate-50 font-semibold text-2xl capitalize space-y-4 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$navigation$2f$NavData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/component/navigation/Mobile.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/component/navigation/Mobile.jsx",
                lineNumber: 27,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/providers.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SideContext": (()=>SideContext),
    "SideProvider": (()=>SideProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const SideContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
const SideProvider = ({ children })=>{
    const [likes, setLikes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [updates, setUpdates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [removed, setRemoved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        ...updates
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SideContext.Provider, {
        value: {
            likes,
            setLikes,
            updates,
            setUpdates,
            removed,
            setRemoved
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/providers.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__22c2d182._.js.map