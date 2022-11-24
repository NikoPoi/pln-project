<template>
  <div class="body">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6 card shadow">
          <div class="card-title text-center m-4">
            <div class="display-4">
              Login Please!!
            </div>
          </div>
          <div class="card-body">
            <div class="card-text mb-2">
              <label for="" class="h6">Username</label>
              <input type="text" class="form-control" v-model="username">
            </div>
            <div class="card-text mb-3">
              <label for="" class="h6">Password</label>
              <input type="text" class="form-control" v-model="password">
            </div>
            <div class="card-text row" style="margin: 0 1px 0 1px;">
              <button class="btn btn-primary" @click="submit()">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submit () {
      console.log(`Your username is ${this.username}, and your password is ${this.password}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
