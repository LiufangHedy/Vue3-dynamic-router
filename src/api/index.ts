import axios from 'axios'
import { type User } from '../types/user.types'

export async function getUserList (): Promise<any> {
  try {
    const users = await axios.get<User[]>('http://127.0.0.1:3003/getAllUsers')
    console.log('users: ', users)

    return users
  } catch (error) {
    throw new Error(error as string)
  }
}
