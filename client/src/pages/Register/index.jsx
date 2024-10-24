import React, { useState } from 'react'
import { Container, LoginScreenBox, Title, Center } from '../../styles/login-screen.style'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { MdEmail, MdPassword, MdPermIdentity } from 'react-icons/md'
import Spinner from 'react-bootstrap/Spinner'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerUser } from '../../services/auth'
import { registrationSchema } from '../../schemas/validationSchemas'

const Register = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(registrationSchema),
    defaultValues: { username: '', email: '', password: '' },
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = async (data) => {
    setLoading(true)
    const register = await registerUser(data.username, data.email, data.password)
    if (register === true) {
      navigate('/')
    }
    setLoading(false)
  }

  return (
    <Container>
      <LoginScreenBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Center>
            <h1>Create Your account</h1>
          </Center>
          <Input
            leftIcon={<MdPermIdentity />}
            label={'username'}
            type={'text'}
            placeHolder={'type your username'}
            errorMessage={errors.username?.message}
            register={register}
            registerName={'username'}
          />
          <Input
            leftIcon={<MdEmail />}
            label={'email'}
            type={'email'}
            placeHolder={'type your email'}
            errorMessage={errors.email?.message}
            register={register}
            registerName={'email'}
          />
          <Input
            leftIcon={<MdPassword />}
            label={'password'}
            type={'password'}
            placeHolder={'********'}
            errorMessage={errors.password?.message}
            register={register}
            registerName={'password'}
          />
          <Input
            leftIcon={<MdPassword />}
            label={'confirm password'}
            type={'password'}
            placeHolder={'********'}
            errorMessage={errors.passwordConfirmation?.message}
            register={register}
            registerName={'passwordConfirmation'}
          />
          <Center>
            {' '}
            Already have an account? <Link to={'/'}>Sign in</Link>{' '}
          </Center>
          {loading ? (
            <Button
              variant={'userauth'}
              isValid={!loading}
              title={<Spinner style={{ fontSize: '32px' }} />}
            />
          ) : (
            <Button variant={'userauth'} isValid={isValid} title={'Sign up'} type="submit" />
          )}
        </form>
      </LoginScreenBox>
      <Title>
        <h1>My Chat</h1>
      </Title>
    </Container>
  )
}

export default Register
