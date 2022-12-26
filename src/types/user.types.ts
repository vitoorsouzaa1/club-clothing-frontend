export interface IUser {
  name: string
  email: string
  emailConfirmation: string
  provider: 'firebase' | 'google'
}
