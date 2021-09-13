import React from 'react';
import {object as schema, string} from "yup";
import {useFormik} from "formik";
import {InputField} from "../Form";

const validationSchema = schema({
    firstName: string()
        .required('É preciso preencher o nome'),
    lastName: string()
        .required('É preciso preencher o sobrenome'),
    email: string()
        .email('Email inválido')
        .required('É preciso preencher o email'),
});

const PersonForm = ({
                        children, onSubmit = () => {
    }
                    }) => {
    const {
        values,
        handleChange,
        handleBlur,
        touched,
        errors,
        handleSubmit
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            onSubmit(values);
        }
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className="row mb-3">

                <div className="col-md-6">
                    <InputField
                        id="firstName"
                        label="Nome"
                        hint="Digite seu nome"
                        error={errors.firstName}
                        touched={touched.firstName}
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="col-md-6">
                    <InputField
                        id="lastName"
                        label="Sobrenome"
                        hint="Digite seu sobrenome"
                        error={errors.lastName}
                        touched={touched.lastName}
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>

            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <InputField
                        id="email"
                        label="E-mail"
                        hint="Digite seu e-mail"
                        error={errors.email}
                        touched={touched.email}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex flex-row justify-content-end">

                        {children}

                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Concluir
                        </button>

                    </div>
                </div>
            </div>
        </form>
    );
};

export default PersonForm;
