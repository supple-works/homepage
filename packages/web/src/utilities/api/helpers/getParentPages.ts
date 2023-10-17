// TODO: type safety

export const getPageFolder = (page: any): string | undefined => {
	let slug = '';

	// iterate over subFolderReferences without recursion
	if (page.parentPage) {
		const stack = [page.parentPage];
		while (stack?.length > 0) {
			const currentObj = stack.pop();
			Object.keys(currentObj).forEach((key) => {
				if (key === 'slug') {
					slug = `/${currentObj[key]}${slug}`;
				}
				if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
					stack.push(currentObj[key]);
				}
			});
		}
	}

	return slug === '' ? undefined : slug.replace('/', '');
};

export const getFullPageUrl = (page: any): string => {
	const subFolder = getPageFolder(page);

	return `${subFolder ? `${subFolder}/` : ''}${page.slug}`;
};
