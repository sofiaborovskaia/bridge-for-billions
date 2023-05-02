// Props passed from parent components to child components
export interface ResultProps {
	id: number;
	type: string;
	title: string;
	thumb: string;
	cover_image: string;
	year: string;
	format: string;
	isClicked: boolean;
	isFavourite: boolean;
}

export interface ResultsProps {
	results: ResultProps[];
	error: boolean;
}

export interface ItemCardProps {
	title: string;
	type: string;
	image: string;
	year: string;
	format: string;
}

export interface FavouriteProps {
	title: string;
	id: number;
}
