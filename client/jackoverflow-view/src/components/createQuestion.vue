<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form @submit.prevent="createQuestion(formCreateQuestion)" class="form-horizontal" id="login">
          <fieldset>
            <div class="form-group">
              <label for="inputEmail" class="control-label">Title</label>
              <div>
                <input type="text" class="form-control" v-model="formCreateQuestion.title">
              </div>
            </div>
            <div class="form-group">
              <label for="textArea" class="control-label">Content</label>
              <div>
                <textarea class="form-control" rows="4" id="textArea" v-model="formCreateQuestion.content"></textarea>
              </div>
            </div>
            <div class="form-group">
              <div>
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
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formCreateQuestion: {
        title: '',
        content: '',
        UserId: this.getIdUser()
      }
    }
  },
  methods: {
    ...mapActions([
      'createQuestion'
    ]),
    getIdUser () {
      let token = JSON.parse(localStorage.getItem('token'))
      return token.id
    }
  },
  created () {
    this.getIdUser()
  }
}
</script>

<style lang="css">
</style>
