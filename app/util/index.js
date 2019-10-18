/**
 * Map template file to intended file.
 * @example "package.json.template" becommes "package.json"
 * @example "index.html" stays as "index.html" if only one value is given.
 */
const templateToDestTuples = [
    [".env.template",".env"],
    ["package.json.template","package.json"],
    ["README.md.template","README.md"],
    ["src/env.d.ts.template","src/env.d.ts"],
    ["src/middleware/checks.ts.template","src/middleware/checks.ts"],
    ["src/middleware/common.ts.template","src/middleware/common.ts"],
    ["src/middleware/errorHandlers.ts.template","src/middleware/errorHandlers.ts"],
    ["src/middleware/index.ts.template","src/middleware/index.ts"],
    ["src/models/index.ts.template","src/models/index.ts"],
    ["src/models/video.ts.template","src/models/video.ts"],
    ["src/server.ts.template","src/server.ts"],
    ["src/services/index.ts.template","src/services/index.ts"],
    ["src/services/search/handlers.ts.template","src/services/search/handlers.ts"],
    ["src/services/search/routes.ts.template","src/services/search/routes.ts"],
    ["src/utils/ErrorHandler.ts.template","src/utils/ErrorHandler.ts"],
    ["src/utils/httpErrors.ts.template","src/utils/httpErrors.ts"],
    ["src/utils/index.ts.template","src/utils/index.ts"],
    ["tsconfig.json.template","tsconfig.json"]
];

module.exports = {
    templateToDestTuples
}