import styled from 'styled-components';

export const ItemCard = styled.div`
  width: 35%;
  height: 15em;
  margin-bottom: 2em;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  box-shadow: 0px 8px 12px 3px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 1000px) {
    width: 90%;
    height: 10em;
  }
`;

export const Poster = styled.img`
  margin: 2em 2em;
  width: 7em;
  float: left;
  border-radius: 10px;
  @media screen and (max-width: 1000px) {
    width: 4em;
    margin: 1em 1em;
  }
`;

export const Info = styled.div`
  overflow-wrap: break-word;
  position: absolute;
  margin: 2.5em 11em;
  font-size: 1em;
  float: right;
  width: 27em;
  @media screen and (max-width: 1000px) {
    width: 14em;
    margin: 1.3em 7em;
    font-size: 0.8em;
  }
`;

export const Offers = styled.div`
  text-align: center;
  float: left;
  display: inline-flex;
  margin-top: -1em;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Year = styled.span`
  font-size: 0.6em;
  font-variant: normal;
`;

export const Provider = styled.div`
  width: 100%;
  margin-top: 2em;
  width: 6em;
  text-align: center;
  @media screen and (max-width: 1000px) {
    width: 3em;
  }
`;
