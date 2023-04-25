import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	updateQuery,
	updateArtist,
	updateTrack,
	updateAlbum,
} from "../features/search/resultsSlice";
import {
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from "@mui/material";

const SearchHeader = ({ handleOnClick }: any) => {
	const dispatch = useDispatch();

	const [selectLabel, setSelectLabel] = useState("");
	const [searchText, setSearchText] = useState("");

	const handleSelectChange = (event: SelectChangeEvent) => {
		setSelectLabel(event.target.value as string);

		switch (event.target.value) {
			case "artist":
				dispatch(updateArtist(true));
				dispatch(updateAlbum(false));
				dispatch(updateTrack(false));
				break;
			case "album":
				dispatch(updateArtist(false));
				dispatch(updateAlbum(true));
				dispatch(updateTrack(false));
				break;
			case "track":
				dispatch(updateArtist(false));
				dispatch(updateAlbum(false));
				dispatch(updateTrack(true));
				break;
			case "all":
				dispatch(updateArtist(true));
				dispatch(updateAlbum(true));
				dispatch(updateTrack(true));
		}
	};

	const handleIncertText = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(event.target.value);
		dispatch(updateQuery(event.target.value));
	};

	return (
		<div className="search-header">
			<TextField
				className="search-header__search-input"
				value={searchText}
				onChange={handleIncertText}
			/>
			<FormControl className="search-header__select" fullWidth>
				<InputLabel id="select-label">Search by</InputLabel>
				<Select
					labelId="select-label"
					id="select"
					value={selectLabel}
					label="Search by"
					onChange={handleSelectChange}
				>
					<MenuItem value="artist">Artist</MenuItem>
					<MenuItem value="album">Album</MenuItem>
					<MenuItem value="track">Track</MenuItem>
					<MenuItem value="all">All</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default SearchHeader;
