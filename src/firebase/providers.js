import { GoogleAuthProvider, signInWithPopup ,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
})
export const singInWithGoogle = async ()=>{
    try {
        const result = await signInWithPopup(FirebaseAuth,googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const {displayName,email,photoURL,uid} = result.user;
        return{
            ok:true,
            displayName,email,photoURL,uid
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message ;
        return{
            ok:false,
            errorMessage
        }   
    }
}
export const registerUserWithEmailPassword = async ({email,password})=>{
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password);
        const {uid,photoURL,displayName}= resp.user;
        return{
            ok:true,
            uid,photoURL,email,displayName
        }
    } catch (error) {
        return {ok:false, errorMessage:error.message}
    }
}

export const loginWidthEmailPassword =async ({email,password})=>{
    
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth,email,password);
        const {uid,photoURL,displayName} = resp.user;
        return{
            ok:true,
            uid,photoURL,email,displayName
        }
    } catch (error) {
        return {ok:false, errorMessage:error.message}
    }
    
}

export const logoutFirebase=async()=>{
    return await FirebaseAuth.signOut();
}