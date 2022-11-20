import Api from '@/sevices/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
