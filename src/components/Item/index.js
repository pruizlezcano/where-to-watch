import React from 'react';
import providers from '../../others/providersList';

const Item = ({ poster, title, original_release_year, offers }) => {
  let haveData = false;
  const getProviders = () => {
    const prov = {};
    const provNames = [];
    if (offers) {
      for (const e of offers) {
        if (
          e.monetization_type === 'flatrate' &&
          provNames.indexOf(providers[e.provider_id]) === -1
        ) {
          provNames.push(providers[e.provider_id].name);
          prov[
            providers[e.provider_id].name
          ] = `https://images.justwatch.com${providers[
            e.provider_id
          ].icon.replace('{profile}', 's100')}`;

          haveData = true;
        }
      }
      return prov;
    }
  };
  const offersList = getProviders();
  if (haveData) {
    return (
      <div className="item">
        <img
          src={`https://images.justwatch.com${poster.replace(
            '{profile}',
            's592'
          )}`}
          alt={title}
          className="poster"
        />
        <div className="info">
          <h2>
            {title}
            <span className="year"> ({original_release_year})</span>
          </h2>
          <div className="offers">
            {Object.keys(offersList).map((e) => (
              <div className="provider">
                <img src={offersList[e]} alt={e} width="50px" />
                <p style={{ 'word-break': 'inherit' }}>{e}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return '';
};

export default Item;
