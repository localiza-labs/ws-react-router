import React, {useState} from 'react';
import {AdditionalGridStyled} from "./styles";
import AdditionalCard from "./AdditionalCard";

const AdditionalGrid = ({additionals = [], selected: initialSelection, onSelect = () => {}}) => {
    const [selected, setSelected] = useState(initialSelection || []);

    const select = ({id: additionalId, selected: isSelected}) => {
        let currentSelection = selected.filter(id => id !== additionalId);

        if(isSelected){
            currentSelection = [...currentSelection, additionalId];
        }

        onSelect(currentSelection);
        setSelected(currentSelection);
    }

    return (
        <AdditionalGridStyled>
            <div className="additional-grid">
                {
                    additionals.map((additional) =>
                        <AdditionalCard
                            key={additional.id}
                            {...additional}
                            onSelect={select}
                        />
                    )
                }
            </div>
        </AdditionalGridStyled>
    );
};

export default AdditionalGrid;
