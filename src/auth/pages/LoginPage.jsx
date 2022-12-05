import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { checkingAuthentication, startGoogleSigIn, startLoginWidthEmailPassword } from "../../store/auth";
 
const initalForm={
  email: "",
  password: "",
}

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status,errorMessage } = useSelector((state) => state.auth);
  const isAuthenticating = useMemo(() => status === "checking", [status]);


  const { email, password, onInputChange,formState } = useForm(initalForm);
  const onSubmit = (e) => {
    e.preventDefault();
    // dispatch(checkingAuthentication());
    dispatch(startLoginWidthEmailPassword(formState));
  };
  const onSigInGoogle = () => {
    dispatch(startGoogleSigIn());
    // console.log("google");
  };

  return (
    <AuthLayout title="Login" >
      <form onSubmit={onSubmit} className=" animate__animated animate__fadeIn">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid 
            item xs={12} 
            sm={12}
            display={!!errorMessage ? '' : 'none'}  
          >
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
              disabled={isAuthenticating}
              onClick={onSigInGoogle} 
              variant="contained" 
              fullWidth
              >
                <Google />
                <Typography sx={{ ml: 2 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear Cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
