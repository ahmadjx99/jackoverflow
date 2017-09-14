<template lang="html">
  <nav class="navbar navbar-default">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link to="/" class="navbar-brand" href="#">Jackoverflow</router-link>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><router-link to="/questions">Questions</router-link></li>
        <li><router-link to="/users">Users</router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><router-link to="/signin">Sign In</router-link></li>
        <li><router-link to="/signup">Sign Up</router-link></li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  #navbar {
    position: fixed;
  }
  
  #logo {
    width: 40px;
    height: auto;
  }
  
  .navbar {
    border-radius: 0px;
  }
</style>
