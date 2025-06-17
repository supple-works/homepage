export interface LinkProps {
	label: string;
	href: string;
}

export const linkQuery = ({
	multiple = false,
}: {
	multiple: boolean;
}): string => {
	return `link${multiple ? 's[]' : ''}{
			label,
			href,
	}`;
};
