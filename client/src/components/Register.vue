<!-- eslint-disable -->
<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6 card shadow">
          <div class="card-title display-4 text-center m-4">
            Register
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="" class="h6">Username</label>
              <input type="text" class="form-control mb-2" v-model="username">
            </div>
            <div class="form-group">
              <label for="" class="h6">Email</label>
              <input type="email" class="form-control mb-2" v-model="email">
            </div>
            <div class="form-group">
              <label for="" class="h6">Password</label>
              <input type="text" class="form-control mb-2" v-model="password">
            </div>
            <div class="form-group">
              <label for="" class="h6">Password Confirm</label>
              <input type="text" class="form-control mb-2" v-model="password_confirm">
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-md-4">
                  <button class="btn btn-primary" @click="register">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      password_confirm: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm
      })
      console.log(response.data)
    }
  }
}
</script>
