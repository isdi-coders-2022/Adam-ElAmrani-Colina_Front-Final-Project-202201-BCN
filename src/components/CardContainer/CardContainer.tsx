import React from "react";
import { useSelector } from "react-redux";
import { Cryptos } from "../../interfaces/cryptoProps";
import RootState from "../../interfaces/RootState";
import CryptoCard from "../CryptoCard/CryptoCard";
import StyledCard from "../CryptoCard/StyledCard";
import StyledCardContainer from "./StyledCardContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import Crypto, { CryptoId } from "../../interfaces/Crypto";

const CardContainer: React.FunctionComponent = (): JSX.Element => {
  const cryptoList: Cryptos = useSelector<RootState, any>(
    (state) => state.cryptosList
  );

  return (
    <>
      <StyledCardContainer>
        <thead>
          <StyledCard>
            <FontAwesomeIcon icon={faArrowsUpDown} width={16} height={20} />
            <th className="empty"></th>
            <th className="th-name">Nombre</th>
            <th>Precio</th>
            <th>% 24h</th>
            <th>% 7d</th>
            <th>Capital de mercado</th>
            <th>Stock máximo</th>
            <th>Stock total</th>
          </StyledCard>
        </thead>
        <tbody>
          {cryptoList.map(
            (crypto: Crypto): JSX.Element => (
              <StyledCard key={(crypto as CryptoId).id}>
                <CryptoCard crypto={crypto} />
              </StyledCard>
            )
          )}
        </tbody>
      </StyledCardContainer>
    </>
  );
};

export default CardContainer;
