<!-- eslint-disable -->
<template>
    <div>
        <div class="container">
            <h1>Register</h1>
            <div class="row mt-4">
                <div class="col-6">
                    <label for="" class="h6">Email</label>
                    <input v-model="email" type="email" name="email" placeholder="email" class="form-control">
                </div>
                <div class="col-6">
                    <label for="" class="h6">Password</label>
                    <input v-model="password" type="text" name="password" placeholder="password" class="form-control">
                </div>
            </div>
            <div class="row">
                <button class="btn btn-primary mt-2" @click="register">Submit</button>
            </div>
        </div>
    </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
