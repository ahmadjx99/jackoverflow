<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <div class="panel panel-default">
          <div class="panel-heading"> <img :src="userQuestion.photo"> <b>{{ userQuestion.fullname }}</b> ask:</div>
          <div class="panel-body">
            <b>{{questionbyid.title}}</b>
            <br>
            {{questionbyid.content}}
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading"></div>
          <div class="panel-body">
          </div>
        </div>
        <form class="form-horizontal">
          <fieldset>
            <legend>Answer</legend>
            <div class="form-group">
                <textarea class="form-control" rows="4" id="textArea"></textarea>
            </div>
            <div class="form-group">
              <div class="col-md-8 col-md-offset-2">
                <button type="reset" class="btn btn-default">Cancel</button>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: ['id'],
  computed: {
    ...mapState([
      'questionbyid',
      'userAnswer',
      'userQuestion'
    ])
  },
  methods: {
    ...mapActions([
      'getQuestionsById'
    ])
  },
  created () {
    this.getQuestionsById(this.id)
  }
}
</script>

<style lang="css">
  .panel-footer {
    text-align: left;
  }
  
  img {
    height: 35px;
    width: auto;
  }
  
  .pager {
    text-align: right;
  }
</style>
