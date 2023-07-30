import style from "./style/style.module.scss";
import styleForm from "./style/styleForm.module.scss";
import { FormCards } from "./components/formCards";
import { Amount } from "./components/amount";
import { CardList } from "./components/cardList";
import { Header } from "./components/header";
import { useEffect, useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    id: 1,
    des: "",
    money: 0,
    type: "",
  });

  const [cards, setCards] = useState([]);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    updateTotalAmount();
  }, [cards]);

  const updateTotalAmount = () => {
    const total = cards.reduce((acc, card) => {
      const value = Number(card.money);
      return card.type === "Despesa" ? acc - value : acc + value;
    }, 0);
    setTotalAmount(total);
  };

  const handleSubmit = (data) => {
    if (!data.des || data.money === 0 || data.type == false) {
      alert("Preencha todos os campos antes de adicionar um novo card.");
      return;
    }

    setCards([...cards, data]);
    setFormData({
      id: cards.length + 1,
      des: "",
      money: 0,
      type: "",
    });
    updateTotalAmount();
  };

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
    updateTotalAmount();
  };

  return (
    <div className={style.bodyContainner}>
      <Header />
      <div className={style.prinContainner}>
        <form
          className={styleForm.formValue}
          onSubmit={(e) => e.preventDefault()}
        >
          <FormCards
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
          <Amount totalAmount={totalAmount} />
        </form>
        <CardList cards={cards} handleDeleteCard={handleDeleteCard} />
      </div>
    </div>
  );
}

export default App;
