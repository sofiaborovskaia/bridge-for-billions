import { ItemCardInterface } from "../app/interfaces";

const ItemCard = ({ title, type, image, year, format }: ItemCardInterface) => {
	return (
		<div className="item-card">
			<div className="item-card__image">
				<img src={image} alt={title} />
			</div>
			<div className="item-card__info">
				<span className="item-card__title">{title}</span>
				{year && <span className="item-card__title">release year: {year}</span>}
				{format && (
					<span className="item-card__title">alailable as: {format}</span>
				)}
			</div>
		</div>
	);
};

export default ItemCard;
