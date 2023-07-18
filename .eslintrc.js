module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier",
    ],
    rules: {
        // добавьте ваши правила линтера здесь
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};