<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div v-if="signupData.notif === 'berhasil signup'">
          <div class="alert alert-dismissible alert-success">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Sukses sign up</strong>
          </div>
        </div>
        <form @submit.prevent="signup(formSignup)"class="form-horizontal" id="login">
          <fieldset>
            <div class="form-group">
              <label for="inputEmail" class="col-lg-2 control-label">Fullname</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" placeholder="fullname" v-model="formSignup.fullname">
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword" class="col-lg-2 control-label">Username</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" placeholder="username" v-model="formSignup.username">
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword" class="col-lg-2 control-label">Email</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" placeholder="email" v-model="formSignup.email">
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword" class="col-lg-2 control-label">Password</label>
              <div class="col-lg-10">
                <input type="password" class="form-control" placeholder="Password" v-model="formSignup.password">
              </div>
            </div>
            <div class="form-group">
              <label for="inputPhoto" class="col-lg-2 control-label">Photo</label>
              <div class="col-lg-10">
                <input type="texy" class="form-control" placeholder="photo as link image" v-model="formSignup.photo">
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-10 col-lg-offset-2">
                <button type="reset" class="btn btn-default">Cancel</button>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      formSignup: {
        fullname: '',
        username: '',
        password: '',
        email: '',
        photo: ''
      }
    }
  },
  computed: {
    ...mapState([
      'signupData'
    ])
  },
  methods: {
    ...mapActions([
      'signup'
    ])
  }
}
</script>

<style lang="css">
  #login {
    padding-top: 50px;
  }
</style>
