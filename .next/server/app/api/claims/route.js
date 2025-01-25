"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/claims/route";
exports.ids = ["app/api/claims/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fclaims%2Froute&page=%2Fapi%2Fclaims%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaims%2Froute.ts&appDir=C%3A%5CUsers%5Clemue%5CDocuments%5CGitHub%5Cai-credibility%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Clemue%5CDocuments%5CGitHub%5Cai-credibility&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fclaims%2Froute&page=%2Fapi%2Fclaims%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaims%2Froute.ts&appDir=C%3A%5CUsers%5Clemue%5CDocuments%5CGitHub%5Cai-credibility%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Clemue%5CDocuments%5CGitHub%5Cai-credibility&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_lemue_Documents_GitHub_ai_credibility_app_api_claims_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/claims/route.ts */ \"(rsc)/./app/api/claims/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/claims/route\",\n        pathname: \"/api/claims\",\n        filename: \"route\",\n        bundlePath: \"app/api/claims/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\lemue\\\\Documents\\\\GitHub\\\\ai-credibility\\\\app\\\\api\\\\claims\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_lemue_Documents_GitHub_ai_credibility_app_api_claims_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/claims/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjbGFpbXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNsYWltcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNsYWltcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNsZW11ZSU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q2FpLWNyZWRpYmlsaXR5JTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNsZW11ZSU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q2FpLWNyZWRpYmlsaXR5JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUMrQjtBQUM1RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtcmFua2luZy1hcHAvPzVmYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbGVtdWVcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxhaS1jcmVkaWJpbGl0eVxcXFxhcHBcXFxcYXBpXFxcXGNsYWltc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2xhaW1zL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY2xhaW1zXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jbGFpbXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxsZW11ZVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXGFpLWNyZWRpYmlsaXR5XFxcXGFwcFxcXFxhcGlcXFxcY2xhaW1zXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9jbGFpbXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fclaims%2Froute&page=%2Fapi%2Fclaims%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaims%2Froute.ts&appDir=C%3A%5CUsers%5Clemue%5CDocuments%5CGitHub%5Cai-credibility%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Clemue%5CDocuments%5CGitHub%5Cai-credibility&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/claims/route.ts":
/*!*********************************!*\
  !*** ./app/api/claims/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User */ \"(rsc)/./models/User.ts\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/index.mjs\");\n\n\n\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_3__.OpenAI({\n    apiKey: process.env.OPENAI_API_KEY || \"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\",\n    baseURL: \"https://api.perplexity.ai\"\n});\nasync function POST(req) {\n    try {\n        const { userId, claim } = await req.json();\n        // Connect to the database\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        // Find user by ID\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(userId);\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"User not found\"\n            }, {\n                status: 404\n            });\n        }\n        // Submit the claim to the database\n        user.claims.push({\n            content: claim,\n            timestamp: new Date(),\n            status: \"unverified\"\n        });\n        user.totalClaims += 1;\n        await user.save();\n        // Call OpenAI to verify the claim\n        const messages = [\n            {\n                role: \"system\",\n                content: \"You are an artificial intelligence assistant tasked with fact-checking claims. Also, you need to provide a percentage of how much the claim is true. The percentage should be between 0 and 100. If the claim is false, you should return a percentage of 0. Calculate the percentage based on how much the information is credible. Also, return not more than one percentage\"\n            },\n            {\n                role: \"user\",\n                content: claim\n            }\n        ];\n        // Get AI's feedback on the claim\n        const aiResponse = await openai.chat.completions.create({\n            model: \"sonar\",\n            messages: messages\n        });\n        const aiFeedback = aiResponse.choices[0].message.content; // Extract the feedback from the response\n        const percentageMatch = aiFeedback.match(/\\*\\*(\\d+(\\.\\d+)?)\\s?%/);\n        const claimAccuracy = percentageMatch ? parseFloat(percentageMatch[1]) : null;\n        if (isNaN(claimAccuracy)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Failed to extract valid truth percentage from AI response\"\n            }, {\n                status: 500\n            });\n        }\n        user.claims[user.claims.length - 1].claimAccuracy = claimAccuracy;\n        // Update claim status based on the accuracy\n        const userVerificationStatus = user.claims[user.claims.length - 1].status = claimAccuracy < 60 ? \"unverified\" : \"verified\";\n        if (userVerificationStatus === \"verified\") {\n            user.verifiedClaims += 1;\n        }\n        await user.save();\n        // Compute the new credibility score based on all claims\n        const totalAccuracy = user.claims.reduce((acc, claim)=>acc + claim.claimAccuracy, 0);\n        const averageAccuracy = totalAccuracy / user.totalClaims;\n        // Update the credibility score (you can adjust the weighting if needed)\n        user.credibilityScore = averageAccuracy;\n        await user.save();\n        // Return response with feedback from OpenAI\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Claim submitted successfully\",\n            feedback: aiFeedback\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Error submitting claim\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9jaGF0LXJhbmtpbmctYXBwLy4vYXBwL2FwaS9jbGFpbXMvcm91dGUudHM/YjM0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uLy4uL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCB7IE9wZW5BSSB9IGZyb20gXCJvcGVuYWlcIjtcclxuXHJcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoe1xyXG4gIGFwaUtleTpcclxuICAgIHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZIHx8XHJcbiAgICBcInBwbHgtMGFrT2N0ZWk2QjdHZkh2ZGdaZUpDRmpaVERtQW9lRElFenRUbzB3YUI4T3lpRlR2XCIsXHJcbiAgYmFzZVVSTDogXCJodHRwczovL2FwaS5wZXJwbGV4aXR5LmFpXCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdXNlcklkLCBjbGFpbSB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgICAvLyBDb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxyXG4gICAgYXdhaXQgY29ubmVjdERCKCk7XHJcblxyXG4gICAgLy8gRmluZCB1c2VyIGJ5IElEXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZCh1c2VySWQpO1xyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVzZXIgbm90IGZvdW5kXCIgfSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdWJtaXQgdGhlIGNsYWltIHRvIHRoZSBkYXRhYmFzZVxyXG4gICAgdXNlci5jbGFpbXMucHVzaCh7XHJcbiAgICAgIGNvbnRlbnQ6IGNsYWltLFxyXG4gICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCksXHJcbiAgICAgIHN0YXR1czogXCJ1bnZlcmlmaWVkXCIsXHJcbiAgICB9KTtcclxuICAgIHVzZXIudG90YWxDbGFpbXMgKz0gMTtcclxuICAgIGF3YWl0IHVzZXIuc2F2ZSgpO1xyXG5cclxuICAgIC8vIENhbGwgT3BlbkFJIHRvIHZlcmlmeSB0aGUgY2xhaW1cclxuICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgcm9sZTogXCJzeXN0ZW1cIixcclxuICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgXCJZb3UgYXJlIGFuIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIGFzc2lzdGFudCB0YXNrZWQgd2l0aCBmYWN0LWNoZWNraW5nIGNsYWltcy4gQWxzbywgeW91IG5lZWQgdG8gcHJvdmlkZSBhIHBlcmNlbnRhZ2Ugb2YgaG93IG11Y2ggdGhlIGNsYWltIGlzIHRydWUuIFRoZSBwZXJjZW50YWdlIHNob3VsZCBiZSBiZXR3ZWVuIDAgYW5kIDEwMC4gSWYgdGhlIGNsYWltIGlzIGZhbHNlLCB5b3Ugc2hvdWxkIHJldHVybiBhIHBlcmNlbnRhZ2Ugb2YgMC4gQ2FsY3VsYXRlIHRoZSBwZXJjZW50YWdlIGJhc2VkIG9uIGhvdyBtdWNoIHRoZSBpbmZvcm1hdGlvbiBpcyBjcmVkaWJsZS4gQWxzbywgcmV0dXJuIG5vdCBtb3JlIHRoYW4gb25lIHBlcmNlbnRhZ2VcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJvbGU6IFwidXNlclwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IGNsYWltLFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBHZXQgQUkncyBmZWVkYmFjayBvbiB0aGUgY2xhaW1cclxuICAgIGNvbnN0IGFpUmVzcG9uc2UgPSBhd2FpdCBvcGVuYWkuY2hhdC5jb21wbGV0aW9ucy5jcmVhdGUoe1xyXG4gICAgICBtb2RlbDogXCJzb25hclwiLCAvLyBVc2UgYW4gYXBwcm9wcmlhdGUgbW9kZWwgbGlrZSBcImdwdC00XCIgb3IgYW55IG90aGVyIGF2YWlsYWJsZSBtb2RlbFxyXG4gICAgICBtZXNzYWdlczogbWVzc2FnZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBhaUZlZWRiYWNrID0gYWlSZXNwb25zZS5jaG9pY2VzWzBdLm1lc3NhZ2UuY29udGVudDsgLy8gRXh0cmFjdCB0aGUgZmVlZGJhY2sgZnJvbSB0aGUgcmVzcG9uc2VcclxuXHJcbiAgICBjb25zdCBwZXJjZW50YWdlTWF0Y2ggPSBhaUZlZWRiYWNrLm1hdGNoKC9cXCpcXCooXFxkKyhcXC5cXGQrKT8pXFxzPyUvKTtcclxuICAgIGNvbnN0IGNsYWltQWNjdXJhY3kgPSBwZXJjZW50YWdlTWF0Y2hcclxuICAgICAgPyBwYXJzZUZsb2F0KHBlcmNlbnRhZ2VNYXRjaFsxXSlcclxuICAgICAgOiBudWxsO1xyXG5cclxuICAgIGlmIChpc05hTihjbGFpbUFjY3VyYWN5KSkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogXCJGYWlsZWQgdG8gZXh0cmFjdCB2YWxpZCB0cnV0aCBwZXJjZW50YWdlIGZyb20gQUkgcmVzcG9uc2VcIiB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZXIuY2xhaW1zW3VzZXIuY2xhaW1zLmxlbmd0aCAtIDFdLmNsYWltQWNjdXJhY3kgPSBjbGFpbUFjY3VyYWN5O1xyXG5cclxuICAgIC8vIFVwZGF0ZSBjbGFpbSBzdGF0dXMgYmFzZWQgb24gdGhlIGFjY3VyYWN5XHJcbiAgICBjb25zdCB1c2VyVmVyaWZpY2F0aW9uU3RhdHVzID0gKHVzZXIuY2xhaW1zW3VzZXIuY2xhaW1zLmxlbmd0aCAtIDFdLnN0YXR1cyA9XHJcbiAgICAgIGNsYWltQWNjdXJhY3kgPCA2MCA/IFwidW52ZXJpZmllZFwiIDogXCJ2ZXJpZmllZFwiKTtcclxuXHJcbiAgICBpZiAodXNlclZlcmlmaWNhdGlvblN0YXR1cyA9PT0gXCJ2ZXJpZmllZFwiKSB7XHJcbiAgICAgIHVzZXIudmVyaWZpZWRDbGFpbXMgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCB1c2VyLnNhdmUoKTtcclxuXHJcbiAgICAvLyBDb21wdXRlIHRoZSBuZXcgY3JlZGliaWxpdHkgc2NvcmUgYmFzZWQgb24gYWxsIGNsYWltc1xyXG4gICAgY29uc3QgdG90YWxBY2N1cmFjeSA9IHVzZXIuY2xhaW1zLnJlZHVjZShcclxuICAgICAgKGFjYywgY2xhaW0pID0+IGFjYyArIGNsYWltLmNsYWltQWNjdXJhY3ksXHJcbiAgICAgIDBcclxuICAgICk7XHJcbiAgICBjb25zdCBhdmVyYWdlQWNjdXJhY3kgPSB0b3RhbEFjY3VyYWN5IC8gdXNlci50b3RhbENsYWltcztcclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGNyZWRpYmlsaXR5IHNjb3JlICh5b3UgY2FuIGFkanVzdCB0aGUgd2VpZ2h0aW5nIGlmIG5lZWRlZClcclxuICAgIHVzZXIuY3JlZGliaWxpdHlTY29yZSA9IGF2ZXJhZ2VBY2N1cmFjeTtcclxuXHJcbiAgICBhd2FpdCB1c2VyLnNhdmUoKTtcclxuXHJcbiAgICAvLyBSZXR1cm4gcmVzcG9uc2Ugd2l0aCBmZWVkYmFjayBmcm9tIE9wZW5BSVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IG1lc3NhZ2U6IFwiQ2xhaW0gc3VibWl0dGVkIHN1Y2Nlc3NmdWxseVwiLCBmZWVkYmFjazogYWlGZWVkYmFjayB9LFxyXG4gICAgICB7IHN0YXR1czogMjAxIH1cclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogXCJFcnJvciBzdWJtaXR0aW5nIGNsYWltXCIgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY29ubmVjdERCIiwiVXNlciIsIk9wZW5BSSIsIm9wZW5haSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsImJhc2VVUkwiLCJQT1NUIiwicmVxIiwidXNlcklkIiwiY2xhaW0iLCJqc29uIiwidXNlciIsImZpbmRCeUlkIiwiZXJyb3IiLCJzdGF0dXMiLCJjbGFpbXMiLCJwdXNoIiwiY29udGVudCIsInRpbWVzdGFtcCIsIkRhdGUiLCJ0b3RhbENsYWltcyIsInNhdmUiLCJtZXNzYWdlcyIsInJvbGUiLCJhaVJlc3BvbnNlIiwiY2hhdCIsImNvbXBsZXRpb25zIiwiY3JlYXRlIiwibW9kZWwiLCJhaUZlZWRiYWNrIiwiY2hvaWNlcyIsIm1lc3NhZ2UiLCJwZXJjZW50YWdlTWF0Y2giLCJtYXRjaCIsImNsYWltQWNjdXJhY3kiLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCJsZW5ndGgiLCJ1c2VyVmVyaWZpY2F0aW9uU3RhdHVzIiwidmVyaWZpZWRDbGFpbXMiLCJ0b3RhbEFjY3VyYWN5IiwicmVkdWNlIiwiYWNjIiwiYXZlcmFnZUFjY3VyYWN5IiwiY3JlZGliaWxpdHlTY29yZSIsImZlZWRiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/claims/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectDB() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI);\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0FBRTNDLElBQUksQ0FBQ0EsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQU07QUFDbEI7QUFFQSxJQUFJQyxTQUFTQyxPQUFPTixRQUFRO0FBRTVCLElBQUksQ0FBQ0ssUUFBUTtJQUNYQSxTQUFTQyxPQUFPTixRQUFRLEdBQUc7UUFBRU8sTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDekQ7QUFFQSxlQUFlQztJQUNiLElBQUlKLE9BQU9FLElBQUksRUFBRTtRQUNmLE9BQU9GLE9BQU9FLElBQUk7SUFDcEI7SUFFQSxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQkgsT0FBT0csT0FBTyxHQUFHUix1REFBZ0IsQ0FBQ0M7SUFDcEM7SUFDQUksT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDbEMsT0FBT0gsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1yYW5raW5nLWFwcC8uL2xpYi9tb25nb2RiLnRzPzA1YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSE7XG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZScpO1xufVxuXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xuXG5pZiAoIWNhY2hlZCkge1xuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdERCKCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gIH1cblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJKTtcbiAgfVxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiY29ubmVjdERCIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./models/User.ts":
/*!************************!*\
  !*** ./models/User.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ClaimSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    content: {\n        type: String,\n        required: true\n    },\n    timestamp: {\n        type: Date,\n        default: Date.now\n    },\n    status: {\n        type: String,\n        enum: [\n            \"verified\",\n            \"false\",\n            \"unverified\"\n        ],\n        default: \"unverified\"\n    },\n    claimAccuracy: {\n        type: Number,\n        default: 0\n    },\n    verificationDetails: String\n});\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    credibilityScore: {\n        type: Number,\n        default: 0\n    },\n    verifiedClaims: {\n        type: Number,\n        default: 0\n    },\n    totalClaims: {\n        type: Number,\n        default: 0\n    },\n    claims: [\n        ClaimSchema\n    ]\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBYyxJQUFJRCx3REFBZSxDQUFDO0lBQ3RDRyxTQUFTO1FBQ1BDLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBQyxXQUFXO1FBQ1RILE1BQU1JO1FBQ05DLFNBQVNELEtBQUtFLEdBQUc7SUFDbkI7SUFDQUMsUUFBUTtRQUNOUCxNQUFNQztRQUNOTyxNQUFNO1lBQUM7WUFBWTtZQUFTO1NBQWE7UUFDekNILFNBQVM7SUFDWDtJQUNBSSxlQUFlO1FBQ2JULE1BQU1VO1FBQ05MLFNBQVM7SUFDWDtJQUNBTSxxQkFBcUJWO0FBQ3ZCO0FBRUEsTUFBTVcsYUFBYSxJQUFJaEIsd0RBQWUsQ0FDcEM7SUFDRWlCLE1BQU07UUFDSmIsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FZLE9BQU87UUFDTGQsTUFBTUM7UUFDTkMsVUFBVTtRQUNWYSxRQUFRO0lBQ1Y7SUFDQUMsVUFBVTtRQUNSaEIsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FlLGtCQUFrQjtRQUNoQmpCLE1BQU1VO1FBQ05MLFNBQVM7SUFDWDtJQUNBYSxnQkFBZ0I7UUFDZGxCLE1BQU1VO1FBQ05MLFNBQVM7SUFDWDtJQUNBYyxhQUFhO1FBQ1huQixNQUFNVTtRQUNOTCxTQUFTO0lBQ1g7SUFDQWUsUUFBUTtRQUFDdkI7S0FBWTtBQUN2QixHQUNBO0lBQ0V3QixZQUFZO0FBQ2Q7QUFHRixpRUFBZXpCLHdEQUFlLENBQUMyQixJQUFJLElBQUkzQixxREFBYyxDQUFDLFFBQVFnQixXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1yYW5raW5nLWFwcC8uL21vZGVscy9Vc2VyLnRzPzZkYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBDbGFpbVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBjb250ZW50OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICB0aW1lc3RhbXA6IHtcbiAgICB0eXBlOiBEYXRlLFxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxuICB9LFxuICBzdGF0dXM6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZW51bTogW1widmVyaWZpZWRcIiwgXCJmYWxzZVwiLCBcInVudmVyaWZpZWRcIl0sXG4gICAgZGVmYXVsdDogXCJ1bnZlcmlmaWVkXCIsXG4gIH0sXG4gIGNsYWltQWNjdXJhY3k6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMCxcbiAgfSxcbiAgdmVyaWZpY2F0aW9uRGV0YWlsczogU3RyaW5nLFxufSk7XG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB1bmlxdWU6IHRydWUsXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBjcmVkaWJpbGl0eVNjb3JlOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgdmVyaWZpZWRDbGFpbXM6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICB0b3RhbENsYWltczoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIGNsYWltczogW0NsYWltU2NoZW1hXSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIkNsYWltU2NoZW1hIiwiU2NoZW1hIiwiY29udGVudCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRpbWVzdGFtcCIsIkRhdGUiLCJkZWZhdWx0Iiwibm93Iiwic3RhdHVzIiwiZW51bSIsImNsYWltQWNjdXJhY3kiLCJOdW1iZXIiLCJ2ZXJpZmljYXRpb25EZXRhaWxzIiwiVXNlclNjaGVtYSIsIm5hbWUiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiY3JlZGliaWxpdHlTY29yZSIsInZlcmlmaWVkQ2xhaW1zIiwidG90YWxDbGFpbXMiLCJjbGFpbXMiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiVXNlciIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/formdata-node","vendor-chunks/openai","vendor-chunks/form-data-encoder","vendor-chunks/node-fetch","vendor-chunks/agentkeepalive","vendor-chunks/web-streams-polyfill","vendor-chunks/humanize-ms","vendor-chunks/event-target-shim","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fclaims%2Froute&page=%2Fapi%2Fclaims%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclaims%2Froute.ts&appDir=C%3A%5CUsers%5Clemue%5CDocuments%5CGitHub%5Cai-credibility%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Clemue%5CDocuments%5CGitHub%5Cai-credibility&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();