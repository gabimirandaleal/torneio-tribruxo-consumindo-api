import "./style.css"
function ItemSorteio({ campeao }) {
    return (
        <div className="container-item">
            <img className={`${campeao.house}-img`} src={campeao.image} alt="" />
            <h2 className={campeao.house}>{campeao.name}</h2>
            <h3 className={campeao.house}>{campeao.house}</h3>
        </div>
    )
}

export default ItemSorteio