import styleForm from "../style/styleForm.module.scss";
import { useState } from "react";

export const FormCards = ({ formData, setFormData, handleSubmit }) => {
  const submit = (e) => {
    e.preventDefault();
    handleSubmit({ ...formData, id: Date.now() });
    setDefaultValue("  0");
    setInputValue("");
  };

  const [defaultValue, setDefaultValue] = useState("  0");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styleForm.divValue}>
      <div>
        <h4>Descrição</h4>
        <input
          type="text"
          className={styleForm.box}
          placeholder="  Digite aqui sua descrição"
          value={formData.des}
          onChange={(e) => setFormData({ ...formData, des: e.target.value })}
        />
        <span className={styleForm.ex}>Ex: Compra de roupas</span>
      </div>

      <div>
        <h4>Valor (R$)</h4>
        <input
          type="number"
          className={styleForm.box}
          placeholder={defaultValue}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => {
            if (inputValue === "") {
              setDefaultValue("0");
            }
            setFormData({ ...formData, money: inputValue });
          }}
        />
      </div>

      <div>
        <h4>Tipo de valor</h4>
        <select
          name="typeValue"
          className={styleForm.box}
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <option>Selecionar</option>
          <option id="2" value="Entrada">
            Entrada
          </option>
          <option id="3" value="Despesa">
            Despesa
          </option>
        </select>
      </div>

      <button
        type="submit"
        className={styleForm.buttonInsertValue}
        onClick={submit}
      >
        Inserir Valor
      </button>
    </div>
  );
};
