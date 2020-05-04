import axios from 'axios'

import { Http } from './http.init'
import { ResponseWrapper, ErrorWrapper } from './util'
import $router from '../router'

import { API_URL } from '@/config'

export class AuthService {
  static async makeLogin ({ email, password }) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`,
        { email, password, fingerprint },
        { withCredentials: true })
      _setAuthData({
        accessToken: response.data.data.accessToken,
        exp: _parseTokenData(response.data.data.accessToken).exp
      })
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      throw new ErrorWrapper(error)
    }
  }

  static async makeLogout () {
    try {
      const response = await new Http({ auth: true }).post('auth/logout', {}, { withCredentials: true })
      _resetAuthData()
      $router.push({ name: 'login' }).catch(() => {})
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      throw new ErrorWrapper(error)
    }
  }
}
