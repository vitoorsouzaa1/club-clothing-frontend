export interface IUser {
  id: string
  name: string
  email: string
  emailConfirmation: string
  provider: 'firebase' | 'google'
}
