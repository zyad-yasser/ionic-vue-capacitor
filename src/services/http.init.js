import axios from 'axios'

import { AuthService } from '@/services/auth.service'
import { API_URL } from '@/config'

export class Http {
  constructor (status) {
    this.isAuth = status && status.auth ? status.auth : false
    this.instance = axios.create({
      baseURL: API_URL
    })

    return this.init()
  }

  init () {
    if (this.isAuth) {
      this.instance.interceptors.request.use(request => {
        request.headers.authorization = AuthService.getBearer()
        if (AuthService.isAccessTokenExpired() && AuthService.hasRefreshToken()) {
          return AuthService.debounceRefreshTokens()
            .then(response => {
              AuthService.setBearer(response.data.accessToken)
              request.headers.authorization = AuthService.getBearer()
              return request
            }).catch(error => Promise.reject(error))
        } else {
          return request
        }
      }, error => {
        return Promise.reject(error)
      })
    }

    return this.instance
  }
}
