<template>
  <el-row>
      <el-col :span="8" :offset="8" class="center">
      <el-form ref="form" :model="form">

        <el-form-item label="Email">
          <el-input
          ref="email"
          v-model="form.name"
          v-on:blur="validateEmail" />
        </el-form-item>

        <el-form-item label="Password">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.native.prevent="redirectList">Log In</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Login',
  data() {
     return {
       form: {
         name: '',
         password: ''
       }
     }
   },
   computed: {
    ...mapState(['validEmail'])
  },
   methods: {
     redirectList () {
       if(this.validEmail){
         this.$router.push('/list')
       }else{
         this.validateEmail()
       }
    },
    validateEmail () {
      const isValid = /\S+@\S+\.\S+/.test(this.form.name);

      this.$store.dispatch('email', isValid)
      this.toggleValidClass(isValid)
    },
    toggleValidClass (isValid) {
      let elem = this.$refs.email.$el.firstElementChild;
      
      let inputClasses = elem.className.split(' ')
      if(!isValid){
        if(!inputClasses.includes('invalid')) elem.className += ' invalid'
      }else{
        if(inputClasses.includes('invalid')){
          inputClasses.splice(inputClasses.indexOf('invalid'), 1)
          elem.className = inputClasses
        }
      }

    }
 }
}
</script>

<style>
  input.invalid{
    border-color: #F56C6C!important;
  }
</style>
