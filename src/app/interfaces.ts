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

export interface ItemCardProps {
	title: string;
	type: string;
	image: string;
	year: string;
	format: string;
}

export interface ResultsProps {
	results: ResultProps[];
	error: boolean;
}

// export interface FavouriteInterface {
// 	id: number;
// 	title: string;
// }

export interface SearchState {
	query: string;
	artist: boolean;
	album: boolean;
	track: boolean;
	pagination: { page: 1; pages: 1 };
	results: [];
	favourites: { id: number; title: string }[];
	openModal: boolean;
}
