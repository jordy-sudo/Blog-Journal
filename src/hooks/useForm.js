import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {}) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [validForm, setValidForm] = useState({});
    useEffect(() => {
        checkValidations();
    }, [formState]);

    useEffect(() => {
      setFormState(initialForm);
    }, [initialForm])
    
    
    const isFormValid =useMemo(() =>{
        for(const formValue of Object.keys(validForm)){
            if(validForm[formValue] !== null) return false;
        }
        return true
    }, [validForm])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }
    const checkValidations=()=>{
        const formCheckedValues={};
        for(const formField of Object.keys(formValidations)){
            const [fn,errorMessage]=formValidations[formField];
            formCheckedValues[`${formField}Valid`]=fn(formState[formField]) ? null : errorMessage;
        }
        setValidForm(formCheckedValues);
    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...validForm,
        isFormValid
    }
}