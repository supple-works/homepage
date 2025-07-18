import { getCliClient } from "sanity/cli";
import { languages } from "../languages";

/**
 * This script will create one or many "singleton" documents for each language
 * It works by appending the language ID to the document ID
 * and creating the translations.metadata document
 *
 * 1. Take a backup of your dataset with:
 * `npx sanity@latest dataset export`
 *
 * 2. Copy this file to the root of your Sanity Studio project
 *
 * 3. Update the SINGLETONS and LANGUAGES constants to your needs
 *
 * 4. Run the script (replace <schema-type> with the name of your schema type):
 * npx sanity@latest exec ./createSingletons.ts --with-user-token
 *
 * 5. Update your desk structure to use the new documents
 */

const SINGLETONS = [
	{ id: "page-home", _type: "page-home", title: "Homepage" },
	{ id: "settings", _type: "settings", title: "Settings" },
];

// This will use the client configured in ./sanity.cli.ts
const client = getCliClient();

async function createSingletons() {
	const documents = SINGLETONS.map((singleton) => {
		const translations = languages.map(language => ({
			_id: `${singleton.id}-${language.id}`,
			_type: singleton._type,
			language: language.id,
		}));

		const metadata = {
			_id: `${singleton.id}-translation-metadata`,
			_type: `translation.metadata`,
			translations: translations.map(translation => ({
				_key: translation.language,
				value: {
					_type: "reference",
					_ref: translation._id,
				},
			})),
			schemaTypes: Array.from(new Set(translations.map(translation => translation._type))),
		};

		return [metadata, ...translations];
	}).flat();

	const transaction = client.transaction();

	documents.forEach((doc) => {
		transaction.createOrReplace(doc);
	});

	await transaction
		.commit()
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.error(err);
		});
}

createSingletons();
