import axios from 'axios';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { FormControl, FormLabel, FormErrorMessage, Button, Input, Box, Container, Center, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { endpoints } from '../../api';
import { routes } from '../../routes'
import { setCurrentStep } from '../../redux/reducers';


export interface ForgotPasswordUser { username: string };
export interface ForgotPasswordCode { recoveryCode: string };
export interface ForgotPasswordForm { password: string; repeatPassowrd: string; };

export const UsernameForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues: ForgotPasswordUser = {
    username: '',
  }

  const handleSubmit = async (formValues: ForgotPasswordUser, actions: FormikHelpers<ForgotPasswordUser>) => {
    try {
      setTimeout(() => {
        console.log('Usuario enviado!');
        dispatch(setCurrentStep(2))
        // dispatch(setUserToken(authToken));
      }, 2000);
      // const authToken = await axios.post(endpoints['login'], formValues).then((res) => res.data.token);
    } catch {
      // dispatch(removeUserToken())
    }
  }

  return (
    <Container mt={50}>
      <Box borderRadius={5} shadow={'lg'} p={5}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Field name='username'>
                {({ field, form }: any) => (
                  <FormControl isInvalid={form.errors.username && form.touched.username}>
                    <FormLabel htmlFor='username'>Nombre de usuario</FormLabel>
                    <Input {...field} id='username' placeholder='Nombre de usuario' />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Center>
                <Button
                  mt={4}
                  colorScheme='pink'
                  isLoading={isSubmitting}
                  type='submit'
                >
                  Enviar usuario
                </Button>
              </Center>
            </Form>
          )}
        </Formik>
      </Box>
      <Box borderRadius={5} shadow={'md'} p={5}>
        Te enviaremos un c??digo de recuperaci??n a tu correo, revisa tu bandeja luego de enviarnos el usuario. <br/>
      </Box>
    </Container>
  )
};

export const CodeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues: ForgotPasswordCode = { recoveryCode: '' };

  const handleSubmit = async (formValues: ForgotPasswordCode, actions: FormikHelpers<ForgotPasswordCode>) => {
    try {
      setTimeout(() => {
        console.log('Codigo enviado!')
        dispatch(setCurrentStep(3))
        // dispatch(setUserToken(authToken));
      }, 2000);
      // const authToken = await axios.post(endpoints['login'], formValues).then((res) => res.data.token);
    } catch {
      // dispatch(removeUserToken())
    }
  }

  return (
    <Container mt={50}>
      <Box borderRadius={5} shadow={'lg'} p={5}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Field name='recoveryCode'>
                {({ field, form }: any) => (
                  <FormControl isInvalid={form.errors.recoveryCode && form.touched.recoveryCode}>
                    <FormLabel htmlFor='recoveryCode'>C??digo de recuperaci??n</FormLabel>
                    <Input {...field} id='recoveryCode' placeholder='C??digo de recuperaci??n' />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Center>
                <Button
                  mt={4}
                  colorScheme='pink'
                  isLoading={isSubmitting}
                  type='submit'
                >
                  Cambiar contrase??a
                </Button>
              </Center>
            </Form>
          )}
        </Formik>
      </Box>
      <Box borderRadius={5} shadow={'md'} p={5}>
        Ingresa el c??digo de recuperaci??n para crear tu nueva clave. <br/>
      </Box>
    </Container>
  )
};


export const CreatePasswordForm = () => {
  const initialValues: ForgotPasswordForm = { password: '', repeatPassowrd: '' };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (formValues: ForgotPasswordForm, actions: FormikHelpers<ForgotPasswordForm>) => {
    try {
      setTimeout(() => {
        console.log('Creando clave...')
        dispatch(setCurrentStep(0))
        // dispatch(setUserToken(authToken));
      }, 2000);
      // const authToken = await axios.post(endpoints['login'], formValues).then((res) => res.data.token);
    } catch {
      // dispatch(removeUserToken())
    }
  }

  return (
    <Container mt={50}>
      <Box borderRadius={5} shadow={'lg'} p={5}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Field name='password'>
                {({ field, form }: any) => (
                  <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <FormLabel htmlFor='password'>Nueva clave</FormLabel>
                    <Input {...field} id='password' placeholder='Nueva clave' />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name='repeatPassowrd'>
                {({ field, form }: any) => (
                  <FormControl isInvalid={form.errors.repeatPassowrd && form.touched.repeatPassowrd}>
                    <FormLabel htmlFor='repeatPassowrd'>Repita nueva clave</FormLabel>
                    <Input type={'repeatPassowrd'} {...field} id='repeatPassowrd' placeholder='Repita nueva clave' />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Center>
                <Button
                  mt={4}
                  colorScheme='pink'
                  isLoading={isSubmitting}
                  type='submit'
                >
                  Confirmar
                </Button>
              </Center>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  )
}