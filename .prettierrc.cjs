module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  printWidth: 100,
  bracketSpacing: true,
  importOrder: ["^components/(.*)$", "^[./]"],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  noInlineComments: false,
  plugins: [require("prettier-plugin-tailwindcss")],
};
