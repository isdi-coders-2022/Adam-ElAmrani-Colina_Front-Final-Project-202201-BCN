import styled from "styled-components";

const StyledFormular = styled.form`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  width: 700px;
  margin: 10px;

  .form-blocks {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .img-form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 40px;
  }

  .first-block,
  .second-block {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    input,
    textarea {
      width: 300px;
      height: 30px;
    }
    label,
    input,
    textarea {
      margin: 10px;
    }
  }

  @media (max-width: 450px) {
    .form-blocks {
      display: flex;
      flex-flow: row wrap;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: center;
      align-items: center;
    }
    .img-form {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin: 40px;
    }

    label {
      display: flex;
      width: 250px;
    }

    .first-block,
    .second-block {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: center;

      input,
      textarea {
        width: 250px;
        height: 30px;
      }
    }
  }
`;
export default StyledFormular;
