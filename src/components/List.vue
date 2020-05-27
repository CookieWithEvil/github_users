<template>
  <div>
  <el-table
    v-loading="!users"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="#FFF"
    :data="users"
    :default-sort = "{prop: 'login', order: 'descending'}">
    <el-table-column
      label="Login"
      sortable>
      <template slot-scope="scope">
        <router-link :to="{ name: 'details', params: { login: scope.row.login }}">
          <el-link href="html_url" type="danger" target="_blank">{{scope.row.login}}</el-link>
        </router-link>
      </template>
    </el-table-column>
    <el-table-column
      label="Address">
      <template slot-scope="scope">
        <el-link href="scope.row.html_url"  type="primary" target="_blank">{{scope.row.html_url}}</el-link>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'List',
  computed: {
    ...mapState(['users'])
  },
  methods: {
    getList () {
      this.$store.dispatch('list')
    },
    formatter(row) {
      return row.address;
    }
  },
  beforeMount(){
    this.getList()
  }
}
</script>

<style scoped>

</style>
