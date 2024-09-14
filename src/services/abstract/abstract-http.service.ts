import { AxiosResponse } from 'axios'

abstract class AbstractHttpService {
  abstract post(url: string, body: any): Promise<AxiosResponse>
}

export default AbstractHttpService
