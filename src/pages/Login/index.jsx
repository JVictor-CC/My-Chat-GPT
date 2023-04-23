import React from 'react'
import { Container, LoginScreenBox, Title, Center } from '../../styles/login-screen.style'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { MdEmail, MdPassword } from 'react-icons/md'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required('Email Required!').email('Invalid Email'),
  password: yup.string().required('Password Required').min(8, 'Password must be more than 8 characters').matches(/^\S*$/, 'No Whitespaces Allowed')
}).required()

const Login = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState:{ errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: '', password: '' },
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });
  
  const onSubmit = data => {
    //console.log( data );
    navigate('/chat')
  }

  return (<>
    <Container>
      <Title>Fake GPT</Title>
      <LoginScreenBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Center><h1>sign in to continue</h1></Center>
          <Center><p>Don't have an account? <Link to="/register">Create a account</Link> <br /> It takes less than a minute.</p></Center>
          <Input leftIcon={<MdEmail />} label={'email'} type={'email'} placeHolder={'type your email'} errorMessage={errors.email?.message} register={register} registerName={'email'}/>
          <Input leftIcon={<MdPassword />} label={'password'} type={'password'} placeHolder={'********'} errorMessage={errors.password?.message} register={register} registerName={'password'}/>
          <Center> <Link to={'/'}>Forgot password?</Link> </Center>
          <Button variant={'userauth'} isValid={isValid} title={'Sign in'} type="submit"/>
        </form>
      </LoginScreenBox>
    </Container>
  </>)
}

export default Login