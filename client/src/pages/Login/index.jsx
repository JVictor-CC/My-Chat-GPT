import React, { useState } from 'react'
import { Container, LoginScreenBox, Title, Center } from '../../styles/login-screen.style'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { MdEmail, MdPassword } from 'react-icons/md'
import Spinner from 'react-bootstrap/Spinner'

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { loginUser } from '../../services/auth'
import { loginSchema } from '../../schemas/validationSchemas'

const Login = () => {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState:{ errors, isValid } } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })
  
  const onSubmit = async data => {
    setLoading(true)
    const login = await loginUser(data.email, data.password)
    if(login){
      localStorage.setItem('userToken', login.token)
      navigate('/chat')
    }
    setLoading(false)
  }

  return (
    <Container>
      <Title>Fake GPT</Title>
      <LoginScreenBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Center><h1>sign in to continue</h1></Center>
          <Center><p>Don't have an account? <Link to="/register">Create a account</Link> <br /> It takes less than a minute.</p></Center>
          <Input leftIcon={<MdEmail />} label={'email'} type={'email'} placeHolder={'type your email'} errorMessage={errors.email?.message} register={register} registerName={'email'}/>
          <Input leftIcon={<MdPassword />} label={'password'} type={'password'} placeHolder={'********'} errorMessage={errors.password?.message} register={register} registerName={'password'}/>
          <Center> <Link to={'/'}>Forgot password?</Link> </Center>
          {loading ? <Button variant={'userauth'} isValid={!loading} title={<Spinner style={{fontSize: '32px'}}/>}/>  : <Button variant={'userauth'} isValid={isValid} title={'Sign in'} type="submit"/> }
        </form>
      </LoginScreenBox>
    </Container>
  )
}

export default Login