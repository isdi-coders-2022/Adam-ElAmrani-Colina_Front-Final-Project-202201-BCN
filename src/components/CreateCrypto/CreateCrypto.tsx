import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Crypto, { FormProps } from "../../interfaces/Crypto";
import {
  createCryptoThunk,
  updateCryptoThunk,
} from "../../redux/thunks/cryptoThunks";
import { cryptoToUpdate, emptyForm } from "../../utils/formFields";
import Button from "../Button/Button";
import StyledFormular from "./StyledFormular";

const StyledBox = styled.div`
  border-radius: 20px;
  margin: 20px;
  padding: 30px;
  background-color: rgb(24, 41, 88);
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 70vw;

  @media (max-width: 450px) {
    width: 290px;
    border-radius: 20px;
    padding: 30px;
    background-color: rgb(24, 41, 88);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    display: flex;
    flex-direction: column;
    margin: 0px;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
`;

const CreateCrypto: React.FunctionComponent<any> = ({
  crypto,
}: FormProps): JSX.Element => {
  const image: any = {
    imageDefault: "",
  };

  const [formData, setFormData] = useState(
    crypto ? cryptoToUpdate({ crypto }) : emptyForm
  );

  const [imgData, setImgData] = useState(image);
  const createCryptoEvent = (event: {
    target: { id: string; value: string };
  }) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const changeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFileData: any = event.target.files;
    setFormData({ ...formData, img: imageFileData[0] });

    const reader = new FileReader();
    reader.onload = async () => {
      if (reader.readyState === 2) {
        await setImgData({ ...imgData, imageDefault: reader.result });
      }
    };

    if (imageFileData[0]) {
      await reader.readAsDataURL(imageFileData[0]);
    }
  };

  const invalidForm =
    formData.name === "" ||
    formData.symbol === "" ||
    formData.slug === "" ||
    formData.tags === [""] ||
    formData.max_supply === 0 ||
    formData.total_supply === 0 ||
    formData.platform === [""] ||
    formData.price === 0 ||
    formData.percent_change_1h === 0 ||
    formData.percent_change_24h === 0 ||
    formData.percent_change_7d === 0 ||
    formData.market_cap === 0 ||
    formData.img === "";

  const router = useRouter();
  const dispatch = useDispatch();
  const submitCrypto = (event: any) => {
    event.preventDefault();
    if (crypto) {
      const cryptoUpdated: Crypto = formData;
      dispatch(updateCryptoThunk(crypto.id as string, cryptoUpdated));
    } else {
      dispatch(createCryptoThunk(formData));
    }

    setTimeout(() => {
      router.push("/");
    }, 1300);
  };

  return (
    <StyledBox>
      <StyledFormular
        title="create-form"
        autoComplete="off"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="form-blocks">
          <div className="first-block">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Introduzca un nombre"
              value={formData.name}
              onChange={createCryptoEvent}
            />
            <label htmlFor="symbol">S??mbolo:</label>
            <input
              type="text"
              name="symbol"
              id="symbol"
              placeholder="Introduzca un symbolo, por ejemplo: BTC>"
              value={formData.symbol}
              onChange={createCryptoEvent}
            />
            <label htmlFor="slug">Slug:</label>
            <input
              type="text"
              name="slug"
              id="slug"
              placeholder="Introduzca alg??n slug..."
              value={formData.slug}
              onChange={createCryptoEvent}
            />
            <label htmlFor="tags">Tags:</label>
            <textarea
              name="tags"
              id="tags"
              placeholder="Cryptos"
              value={formData.tags}
              onChange={createCryptoEvent}
            />
            <label htmlFor="max_supply">Stock m??ximo:</label>
            <input
              type="number"
              name="max_supply"
              id="max_supply"
              min={0}
              placeholder="Introduzca el stock m??ximo"
              value={formData.max_supply}
              onChange={createCryptoEvent}
            />
            <label htmlFor="total_supply">Stock total:</label>
            <input
              type="number"
              min={0}
              name="total_supply"
              id="total_supply"
              placeholder="Introduzca el stock total"
              value={formData.total_supply}
              onChange={createCryptoEvent}
            />
          </div>
          <div className="second-block">
            <label htmlFor="platform">Plataformas:</label>
            <textarea
              name="platform"
              id="platform"
              placeholder="Plataformas, por ejemplo: BSC."
              value={formData.platform}
              onChange={createCryptoEvent}
            />
            <label htmlFor="price">Precio:</label>
            <input
              type="number"
              name="price"
              min={0}
              id="price"
              placeholder="Introduzca el precio de la moneda:"
              value={formData.price}
              onChange={createCryptoEvent}
            />
            <label htmlFor="market_cap">Capital de mercado:</label>
            <input
              type="number"
              name="market_cap"
              min={0}
              id="market_cap"
              placeholder="Introduzca el capital de mercado"
              value={formData.market_cap}
              onChange={createCryptoEvent}
            />
            <label htmlFor="percent_change_1h">
              Porcentaje de cambio ??ltima hora:
            </label>
            <input
              type="number"
              name="percent_change_1h"
              id="percent_change_1h"
              placeholder="Variaci??n ??ltima hora"
              value={formData.percent_change_1h}
              onChange={createCryptoEvent}
            />
            <label htmlFor="percent_change_24h">
              Porcentaje de cambio ??ltimas 24 horas:
            </label>
            <input
              type="number"
              name="percent_change_24h_"
              id="percent_change_24h"
              placeholder="Variaci??n ??ltimas 24 horas"
              value={formData.percent_change_24h}
              onChange={createCryptoEvent}
            />
            <label htmlFor="percent_change_7d">
              Porcentaje de cambio ??ltimos 7 d??as:
            </label>
            <input
              type="number"
              name="percent_change_7d"
              id="percent_change_7d"
              placeholder="Variaci??n ??ltimos 7 d??as"
              value={formData.percent_change_7d}
              onChange={createCryptoEvent}
            />
          </div>
          <div className="img-form">
            <label className="img-label" htmlFor="img">
              Logo de su Cryptoactivo:
            </label>
            <input type="file" name="img" id="img" onChange={changeFile} />
          </div>
        </div>
        <Button
          disableCondition={invalidForm}
          actionOnClick={submitCrypto}
          text={crypto ? "Editar" : "Crear"}
        />
      </StyledFormular>
    </StyledBox>
  );
};

export default CreateCrypto;
