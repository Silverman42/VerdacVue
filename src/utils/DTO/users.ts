import { registerdUsers } from '../../utils/models/users'
export interface IUserDTO {
  id: number
  name: string
  email: string
  address_street: string
  address_suite: string
  address_city: string
  address_zipcode: string
  phone: string
  website: string
}

export const RegisteredUsersDTO = (): IUserDTO[] => {
  return registerdUsers.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    address_street: user.address.street,
    address_suite: user.address.suite,
    address_city: user.address.city,
    address_zipcode: user.address.zipcode,
    phone: user.phone,
    website: user.website,
    amount: 'NGN 0.00'
  }))
}
