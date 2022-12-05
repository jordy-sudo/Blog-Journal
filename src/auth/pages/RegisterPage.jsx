import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWhitEmailPassword } from "../../store/auth/thunks";

const formData = {
  email: "",
  password: "",
  displayName: "",
}
const formValidations={
  email:[(value)=> value.includes('@'), 'El correo debe tener una @'],
  password:[(value)=> value.length >=6, 'El password debe tener mas de 6 letras.'],
  displayName:[(value)=> value.length >=1, 'El nombre es obligatorio.'],
}
export const RegisterPage = () => {
  const [formSubmited, setFormSubmited] = useState(false)
  const { email, password, onInputChange,displayName,formState, isFormValid,
  displayNameValid,emailValid,passwordValid } = useForm(formData, formValidations);
  const dispatch = useDispatch();
  const {status,errorMessage}=useSelector(state => state.auth);
  const isChekingAuthentication = useMemo(() => status=='checking', [status]);
  const onSubmit=(e)=>{
    e.preventDefault();
    setFormSubmited(true);
    if(!isFormValid) return;
    dispatch(startCreatingUserWhitEmailPassword(formState));
  }
  return (
    <AuthLayout title='Register'>
      <form onSubmit={onSubmit} className=" animate__animated animate__fadeIn">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Jhon Doe"
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error = {!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error = {!!emailValid && formSubmited}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="password"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              error = {!!passwordValid && formSubmited}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid 
              item xs={12} 
              display={!!errorMessage ? '' : 'none'}   
            >
              <Alert severity="error">{errorMessage}</Alert>  
            </Grid>
            <Grid item xs={12} >
              <Button 
                type="submit" 
                variant="contained" 
                fullWidth
                disabled={isChekingAuthentication}
                >
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            ¿Ya tienes cuenta?
            <Link sx={{ml:2}} component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
