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
              <div class="form-group card-text mb-2">
                <label for="" class="h6">Username</label>
                <input type="text" class="form-control" v-model="username">
              </div>
              <div class="form-group card-text mb-2">
                <label for="" class="h6">Password</label>
                <input type="text" class="form-control" v-model="password">
              </div>
              <div class="form-group card-text mb-2">
                <label for="" class="h6">Password Confirm</label>
                <input type="text" class="form-control" v-model="password_confirm">
              </div>
              <div class="card-text row">
                <button class="btn btn-primary" @click="register">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
// import AuthenticationService from '@/services/AuthenticationService'
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: '',
      password_confirm: ''
    }
  },
  methods: {
    // async register () {
    //   const response = await AuthenticationService.register({
    //     email: this.email,
    //     password: this.password
    //   })
    //   console.log(response.data)
    // }
    register () {
      const data = {
        username: this.username,
        password: this.password,
        password_confirm: this.password_confirm
      }
      axios.post('https://localhost:8080/#/register', data)
        .then(
          res => {
            console.log(res)
          }
        ).catch(
          err => {
            console.log(err)
          }
        )
    }
  }
}
</script>
