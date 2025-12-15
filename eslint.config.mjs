import antfu from "@antfu/eslint-config";

export default antfu({
	formatters: true,
	astro: true,
	typescript: true,
	stylistic: {
		indent: "tab",
		semi: true,
		quotes: "double",
		jsx: true,
	},
});
