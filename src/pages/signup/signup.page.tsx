// Librarys
import { FiLogIn } from 'react-icons/fi'
import validator from 'validator'
import { useForm } from 'react-hook-form'
import {
  AuthError,
  AuthErrorCodes,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import { CustomButton } from '../../components/custom-button/custom-button.component'
import { CustomInput } from '../../components/custom-input/custom-input.component'
import { Header } from '../../components/header/header.component'
import { InputErrorMessage } from '../../components/input-error-message/input-error-message.component'

// Utilities
import { auth, db } from '../../config/firebase.config'
import { UserContext } from '../../contextx/user.context'

// Styles
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './signup.styles'

interface ISignUpForm {
  name: string
  email: string
  emailConfirmation: string
  password: string
  passwordConfirmation: string
}

export const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    getValues,
    setError
  } = useForm<ISignUpForm>()

  const { isAuthenticated } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  const handleSubmitPress = async (data: ISignUpForm) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        name: data.name,
        email: data.email,
        emailConfirmation: data.emailConfirmation,
        provider: 'firebase'
      })
    } catch (error) {
      const err = error as AuthError

      if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError('email', { type: 'alreadyInUse' })
      }
    }
  }

  return (
    <>
      <Header />

      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Create your account</SignUpHeadline>

          <SignUpInputContainer>
            <p>Full Name</p>
            <CustomInput
              placeholder="Type your full name"
              hasError={!!errors?.name}
              {...register('name', {
                required: true
              })}
            />
            {errors?.name?.type === 'required' && (
              <InputErrorMessage>The name is required</InputErrorMessage>
            )}

            {errors?.name?.type === 'validate' && (
              <InputErrorMessage>Please insert a valid name</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Email</p>
            <CustomInput
              placeholder="example: mail@mail.com"
              hasError={!!errors?.email}
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>The email is required</InputErrorMessage>
            )}

            {errors?.email?.type === 'alreadyInUse' && (
              <InputErrorMessage>
                This email is already in use, choose another
              </InputErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>Please insert a valid email</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirm your email</p>
            <CustomInput
              placeholder="example: mail@mail.com"
              hasError={!!errors?.email}
              {...register('emailConfirmation', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>The email is required</InputErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>Please insert a valid email</InputErrorMessage>
            )}

            {watch('emailConfirmation') !== watch('email') &&
            getValues('emailConfirmation') ? (
              <p>Emails does not match</p>) : null}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Password</p>
            <CustomInput
              placeholder="********"
              type="password"
              hasError={!!errors?.password}
              {...register('password', {
                required: true,
                minLength: 8
              })}
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>The password is required</InputErrorMessage>
            )}

            {errors?.password?.type === 'minLength' && (
              <InputErrorMessage>
                Password cannot be less than 8 characters
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Cofirm your Password</p>
            <CustomInput
              placeholder="********"
              type="password"
              hasError={!!errors?.password}
              {...register('passwordConfirmation', {
                required: true
              })}
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>The password is required</InputErrorMessage>
            )}

            {watch('passwordConfirmation') !== watch('password') &&
            getValues('passwordConfirmation') ? (
              <p>Password does not match</p>) : null}

            {errors?.password?.type === 'minLength' && (
              <InputErrorMessage>
                Password confirmation cannot be less than 8 characters
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <CustomButton
            onClick={() => handleSubmit(handleSubmitPress)()}
            startIcon={<FiLogIn size={20} />}>
            Create Account
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}
