import React, {useState} from 'react';
import classnames from "classnames";
import {AdditionalCardStyled} from "./styles";

const priceTransform = (price) => {
    return `R$ ${price.toFixed(2)} por dia`;
}

const AdditionalCard = ({selected: initialSelection, label, id, price, onSelect}) => {
    const [selected, setSelected] = useState(initialSelection || false);

    const toggle = () => {
        setSelected((isSelected) => {
            const value = !isSelected;
            onSelect({id, selected: value});
            return value;
        });
    }

    return (
        <AdditionalCardStyled>
            <div
                className={
                    classnames('additional-card', {
                        'additional-card--selected': selected
                    })
                }
                onClick={toggle}
            >
                <div className="additional-card__content">
                    <h4 className="additional-card__label">
                        {label}
                    </h4>
                    <div className="additional-card__price">
                        {priceTransform(price)}
                    </div>
                </div>
            </div>
        </AdditionalCardStyled>
    );
};

export default AdditionalCard;
