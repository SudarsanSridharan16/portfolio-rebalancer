import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import classNames from 'classnames/bind';
import PriceProgress from './PriceProgress';
import styles from '../../../css/components/portfolio/portfolio-table/price-cell';

const cx = classNames.bind( styles );

const PriceCell = ({index, price, priceSelect, securityTextFieldChange, fetchPrice}) => {
  const getDisplayValue = function getDisplayValue( givenValue, givenSetOnce ) {
    if ( givenSetOnce ) {
      return givenValue;
    }
    return '';
  };

  const displayValue = getDisplayValue( price.value, price.setOnce );

  const handleOnChange = function handleOnChange( event, newValue ) {
    securityTextFieldChange( index, 'price', newValue );
  };

  return (

  <div>
    <TextField
      id={'priceTextField' + index}

               value={ price.value }
               errorText={ priceSelect.errorText }
               onChange={ handleOnChange }
               hintText={priceSelect.hintText}
               errorStyle={ { float: 'left' } }
               className={ cx( 'price-text-field' ) } />
    <PriceProgress
                   index={ index }
                   fetchStatus={ price.fetchStatus }
                   onClick={ fetchPrice } />
  </div>
  );
};

PriceCell.propTypes = {
  index: PropTypes.number.isRequired,
  price: PropTypes.object.isRequired,
  priceSelect: PropTypes.object.isRequired,
  securityTextFieldChange: PropTypes.func.isRequired,
  fetchPrice: PropTypes.func.isRequired,
};

export default PriceCell;