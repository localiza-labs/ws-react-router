import React, {createContext, useCallback, useState} from 'react';

const initialSteps = [
    {
        name: 'first-step',
        path: '/dados-reserva',
        value: {
            pickUpAgency: '',
            pickUpDate: '',
            pickUpHour: '',
            specialRequest: ''
        },
        valid: false
    },
    {
        name: 'second-step',
        path: '/adicionais',
        value: {
            additionals: []
        },
        valid: true
    },
    {
        name: 'third-step',
        path: '/dados-pessoais',
        value: {
            firstName: '',
            lastName: '',
            email: '',
        },
        valid: true
    }
];

export const ReserveFlowContext = createContext({
    steps: initialSteps,
    updateStepValues: (stepName, values) => {
    },
    updateStepValidation: (stepName, valid) => {
    }
});

const ReserveFlowProvider = ({children}) => {
    const [steps, setSteps] = useState(initialSteps);

    const updateStepValues = useCallback((stepName, values) => {
        setSteps((steps) => {
            const step = steps.find(s => s.name === stepName);

            if (step) {
                step.value = {...values};

                return [...steps];
            }

            return steps;
        })
    }, [])

    const updateStepValidation = useCallback((stepName, valid) => {
        setSteps((steps) => {
            const step = steps.find(s => s.name === stepName);

            if (step) {
                step.valid = valid;

                return [...steps];
            }

            return steps;
        })
    }, []);

    return (
        <ReserveFlowContext.Provider
            value={{steps, updateStepValues, updateStepValidation}}
        >
            {children}
        </ReserveFlowContext.Provider>
    );
}

export default ReserveFlowProvider;
