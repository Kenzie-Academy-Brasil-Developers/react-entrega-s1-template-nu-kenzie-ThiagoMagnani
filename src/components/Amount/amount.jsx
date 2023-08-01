import styleAmount from "../../style/amount/styleAmount.module.scss";

export const Amount = ({ totalAmount }) => {
  return (
    <div className={styleAmount.amount}>
      <div className={styleAmount.valueAmount}>
        <h4>Valor Total:</h4>
        <span className={styleAmount.rs}>
          {parseFloat(totalAmount).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div>
        <span className={styleAmount.textAmount}>
          O valor se refere ao saldo
        </span>
      </div>
    </div>
  );
};
