import React from 'react'
import { Container, LoginScreenBox, Title, Center } from '../../styles/login-screen.style'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { MdEmail, MdPassword, MdPermIdentity } from 'react-icons/md'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { registerUser } from '../../services/auth'

const schema = yup.object({
  username: yup.string().required('Username Required!').min(3, 'Username must have at least 3 characters'),
  email: yup.string().required('Email Required!').email('Invalid Email'),
  password: yup.string().required('Password Required').min(8, 'Password must be more than 7 characters').matches(/^\S*$/, 'No Whitespaces Allowed'),
  confirmPassword: yup.string().required('Password Required').min(8, 'Password must be more than 7 characters').matches(/^\S*$/, 'No Whitespaces Allowed').oneOf([yup.ref('password')], 'Password doesnt match')
}).required()

const Register = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState:{ errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { username: '', email: '', password: '' },
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });

  const onSubmit = async data => {
    const register = await registerUser(data.username, data.email, data.password)
    if(register === true){
      navigate('/')
    }
  }

  return (<>
    <Container>
      <Title>Fake GPT</Title>
      <LoginScreenBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Center><h1>Create Your account</h1></Center>
          <Input leftIcon={<MdPermIdentity />} label={'username'} type={'text'} placeHolder={'type your username'} errorMessage={errors.username?.message} register={register} registerName={'username'}/>
          <Input leftIcon={<MdEmail />} label={'email'} type={'email'} placeHolder={'type your email'} errorMessage={errors.email?.message} register={register} registerName={'email'}/>
          <Input leftIcon={<MdPassword />} label={'password'} type={'password'} placeHolder={'********'} errorMessage={errors.password?.message} register={register} registerName={'password'}/>
          <Input leftIcon={<MdPassword />} label={'comfirm password'} type={'password'} placeHolder={'********'} errorMessage={errors.confirmPassword?.message} register={register} registerName={'confirmPassword'}/>
          <Center> Already have an account? <Link to={'/'}>Sign in</Link> </Center>
          <Button variant={'userauth'} isValid={isValid} title={'Sign up'}/>
        </form>
      </LoginScreenBox>
    </Container>
  </>)
}

export default Register