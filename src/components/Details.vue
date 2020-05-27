<template>
  <el-container
    v-loading="!singleUser"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="#FFF">
    <el-aside>
      <img :src="singleUser.avatar_url" alt="avatar"/>
    </el-aside>
    <el-main>
      <h1>{{singleUser.login}}</h1>
      <p><b>GitHub:</b> <el-link type="primary" target="_blank" :href="singleUser.html_url">{{singleUser.html_url}}</el-link></p>
      <p><b>Followers:</b> {{singleUser.followers}}</p>
      <p><b>Following:</b> {{singleUser.following}}</p>
      <p><b>Public Repositories:</b> {{singleUser.public_repos}}</p>
      <p v-if="singleUser.public_gists"><b>Public Gists:</b> {{singleUser.public_gists}}</p>
      <p v-if="singleUser.location"><b>Lives in:</b> {{singleUser.location}}</p>
    </el-main>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Details',
  props: {
    login: String
  },
  computed: {
    ...mapState(['singleUser'])
  },
  methods: {
    getList () {
      this.$store.dispatch('list', this.login)
    }
  },
  beforeMount(){
    this.getList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    height: auto;
    width: 100%;
  }
  h1, p{
    text-align: left;
  }
</style>
