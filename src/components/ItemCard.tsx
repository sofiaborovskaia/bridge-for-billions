import { ItemCardProps } from "../app/interfaces";

const ItemCard = ({ title, type, image, year, format }: ItemCardProps) => {
	const formatItems =
		format &&
		Object.values(format).map((formatItem) => {
			return <li className="item-card__format">{formatItem}</li>;
		});

	return (
		<div className="item-card">
			<div className="item-card__image">
				<img src={image} alt={title} />
			</div>
			<div className="item-card__info">
				<span className="item-card__title">{title}</span>
				<span className="item-card__subtitle">{type}</span>
				{year && <span className="item-card__subtitle">{year}</span>}
				{format && (
					<div className="item-card__formats-wrapper">
						<span className="item-card__subtitle">
							available {formatItems.length > 1 ? "formats" : "format"}
						</span>
						<ul className="item-card__formats">{formatItems}</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default ItemCard;
