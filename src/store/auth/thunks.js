import { loginWidthEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication =(email,password)=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
    }
}

export const startGoogleSigIn = ()=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const result = await singInWithGoogle();
        if(!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
    }
}

export const startCreatingUserWhitEmailPassword = ({email,password,displayName})=>{
    return async (dispatch)=>{
        dispatch(checkingCredentials());
        // console.log(email,password,displayName);
        const result= await registerUserWithEmailPassword({displayName,email,password});
        if(!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result))
    }
}
export const startLoginWidthEmailPassword = ({email,password})=>{
    return async (dispatch)=>{
        dispatch(checkingCredentials());

        const result = await loginWidthEmailPassword({email,password});
        if(!result.ok) return dispatch(logout(result));
        dispatch(login(result))
    }
}

export const startLogout=()=>{
    return async()=>{
        await logoutFirebase();
        dispatch(clearNotesLogout());
        dispatch(logout());
    }
}
