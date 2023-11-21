import { useState } from "react"
import { nameRegex, emailRegex, passwordRegex } from "../utils/validations"

export const useForm = () => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    //error states
    const [firstNameError, setFirstNameError] = useState<string>('')
    const [lastNameError, setLastNameError] = useState<string>('')
    const [emailError, setEmailError] = useState<string>('')
    const [passwordError, setPasswordError] = useState<string>('')
    //validate fns
    const validateFirstName = (value: string) => {
        return nameRegex.test(value);
    };

    const validateLastName = (value: string) => {
        return nameRegex.test(value);
    };

    const validateEmail = (value: string) => {
        return emailRegex.test(value);
    };

    const validatePassword = (value: string) => {
        return passwordRegex.test(value);
    };

    const onChange = (value: string, name: string) => {
        console.log(value);
        console.log(name);
        switch (name) {
            case 'firstName':
                setFirstNameError(validateFirstName(value) ? '' : 'Invalid Field');
                setFirstName(value);
                break;
            case 'lastName':
                setLastNameError(validateLastName(value) ? '' : 'Invalid Field');
                setLastName(value);
                break;
            case 'email':
                setEmailError(validateEmail(value) ? '' : 'Invalid Field');
                setEmail(value);
                break;
            case 'password':
                setPasswordError(validatePassword(value) ? '' : 'Invalid Field');
                setPassword(value);
                break;
            default:
                console.error('Error input')
        }

    }

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setFirstNameError('')
        setLastNameError('')
        setEmailError('')
        setPasswordError('')
    };

    const isSubmit = ():boolean => {
        if(!firstNameError&&!lastNameError&&!emailError&&!passwordError&&firstName&&lastName&&email&&password){
            return true
        }
        else{
            return false
        }
    }

    return {
        firstName,
        lastName,
        email,
        password,
        firstNameError,
        lastNameError,
        emailError,
        passwordError,
        clearForm,
        onChange,
        isSubmit,
    };

}