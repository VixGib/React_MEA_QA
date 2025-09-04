function ItemCard({symbol, name, unicodeVal}) {
    return (
        <div className="item-card">
            <div className="symbol">{symbol}</div>
            <h3>{name}</h3>
            <p>{unicodeVal}</p>

        </div>
    )
}
export default ItemCard;