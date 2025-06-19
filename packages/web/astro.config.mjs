import process from "node:process";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import { loadEnv } from "vite";

const { PUBLIC_SANITY_STUDIO_PROJECT_ID, PUBLIC_SANITY_STUDIO_DATASET }
	= loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
	image: {
		// Example: Allow remote image optimization from a single domain
		domains: ["cdn.sanity.io"],
	},
	integrations: [
		sanity({
			projectId: PUBLIC_SANITY_STUDIO_PROJECT_ID,
			dataset: PUBLIC_SANITY_STUDIO_DATASET,
			// Set useCdn to false if you're building statically.
			useCdn: false,
		}),
	],
	vite: {
		css: {
			transformer: "lightningcss",
		},

		plugins: [tailwindcss()],
	},
});
