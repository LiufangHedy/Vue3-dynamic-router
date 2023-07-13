import axios from 'axios'
import type { User, UserDetail } from '../types/user.types'

export async function getUserList (): Promise<any> {
  try {
    const users = await axios.get<User[]>('http://127.0.0.1:3003/getAllUsers')
    console.log('users: ', users)

    return users
  } catch (error) {
    throw new Error(error as string)
  }
}
export async function getUserDetails (userid: number): Promise<any> {
  try {
    const userDetails = await axios.get<UserDetail>(`http://127.0.0.1:3003/getUserDetails?id=${userid}`)
    return userDetails
  } catch (error) {
    throw new Error(error as string)
  }
}
