export interface ResultInterface {
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

export interface ItemCardInterface {
	title: string;
	type: string;
	image: string;
	year: string;
	format: string;
}

export interface SearchResultsPropsInterface {
	results: ResultInterface[];
	error: boolean;
}
