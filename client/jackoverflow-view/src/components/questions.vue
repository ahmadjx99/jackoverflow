<template lang="html">
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="list-group">
            <div v-for="question in questions" id="question">
              <div class="list-group-item">
                <h4 class="list-group-item-heading" id="header"><router-link :to="'/questions/' + question.id">{{question.title}}</router-link></h4>
                <p class="list-group-item-text">{{questionContentHighlight(question.content)}}</p>
                <br>
                <div class="row" id="footer">
                  <div class="col-md-3"><div id="kiri">
                    <img :src="question.photo" alt="">  {{question.name}}
                  </div>
                  </div>
                  <div class="col-md-6"></div>
                  <div class="col-md-3">
                    <div id="kanan">
                      <a class="btn btn-sm">edit</a>
                      <a class="btn btn-sm" @click="deleteQuestion(question.id)">delete</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'questions'
    ])
  },
  methods: {
    ...mapActions([
      'getAllQuestions',
      'deleteQuestion'
    ]),
    questionContentHighlight (content) {
      if (content !== null) {
        if (content.length > 150) {
          return content.substring(0, 150) + '...'
        } else {
          return content
        }
      }
    }
  },
  created () {
    this.getAllQuestions()
  }
}
</script>

<style lang="css">
  .panel-footer {
    display: block;
    text-align: left;
  }
  
  img {
    width: 20px;
    height: auto;
  }
  
  #kiri {
    display: block;
    text-align: left;
  }
  
  #kanan {
    display: block;
    text-align: right;
  }
  
  #footer {
    padding-top: 20px;
    padding-bottom: 0px;
  }
  
  #question {
    padding-top: 10px;
  }
  
  #header {
    background-color: #e3e3e3;
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>
