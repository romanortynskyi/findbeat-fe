import Axios, { AxiosResponse } from 'axios'

import AbstractHttpService from '../abstract/abstract-http.service'

class HttpService implements AbstractHttpService {
  post(url: string, body: any): Promise<AxiosResponse> {
    return Axios.post(url, body)
  }
}

export default HttpService
