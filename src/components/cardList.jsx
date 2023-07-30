import styleListCard from "../style/styleListCard.module.scss";
import styleCard from "../style/styleCard.module.scss";

export const CardList = ({ cards, handleDeleteCard }) => {
  return (
    <div className={styleListCard.divCards}>
      <h4>Resumo Financeiro</h4>
      <ul className={styleListCard.listCard}>
        {cards.map((card) => (
          <li
            className={`${styleCard.cards} ${
              card.type === "Entrada"
                ? styleCard.greenBorder
                : styleCard.grayBorder
            }`}
            key={card.id}
          >
            <div>
              <h2 className={styleCard.des}>{card.des}</h2>
              <p className={styleCard.type}>{card.type}</p>
            </div>
            <div className={styleCard.valueButton}>
              <p className={styleCard.value}>
                {parseFloat(card.money).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <button
                className={styleCard.buttonRemove}
                onClick={() => handleDeleteCard(card.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
