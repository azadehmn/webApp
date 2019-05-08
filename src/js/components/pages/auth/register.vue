<template lang="pug">
  div.register-page
    div.col-lg-12.col-md-12.col-sm-12.col-xs-12
      div.zarin-logo.auto-margin
    div.box.register-page.box.init-page.login-box
      div.row
        div.col-lg-12.col-md-12.col-sm-12.col-xs-12.m-b-27
          p.title ثبت‌نام
          p.resister-new-user ثبت‌نام کاربر جدید فینوبوم

      div.row
        div.col-lg-6.col-md-6.col-sm-12.col-xs-12
            input(placeholder="نام" type="text"  v-validate="'required|min:3|max:255'" data-vv-as="نام" v-model="first_name" name="first_name" )
            span.err {{ errors.first('first_name') }}

        div.col-lg-6.col-md-6.col-sm-12.col-xs-12
            input(placeholder="نام و نام خانوادگی" type="text"  v-validate="'required|min:3|max:255'" data-vv-as="نام و نام خانوادگی" v-model="last_name" name="last_name" )
            span.err {{ errors.first('last_name') }}
        div.col-lg-12.col-md-12.col-sm-12.col-xs-12.m-t-10
            input(:class="{'input-danger': errors.has('year')}"  placeholder="شماره تلفن" type="text"  data-vv-as="شماره تلفن" v-model="cell_number" name="cell_number" v-validate="{rules: {required: true, regex: /^((\\+?[1-9]{1,2})|0)[1-9][0-9]{9,11}$/} }")
            span.err {{ errors.first('cell_number') }}
      div.row.m-b-30
        div.col-lg-9.col-md-9.col-xs-12.col-sm-9
            span.member  عضو هستید؟
              router-link.register.iransans-medium.pointer(tag="span"  :to="{name:'auth.login'}" )   وارد شوید
        div.col-lg-3.col-md-3.col-xs-12.col-sm-3.register-btn
            button.btn-gold(@click="submit") ثبت نام
</template>

<script>
  export default {
    name: 'auth-register',
    data () {
      return {
        first_name: '',
        last_name: '',
        cell_number: '',
      }
    },
    methods:{
      submit(){
        this.$validator.validateAll().then(() => {
          // success
        }).catch(() => {
          // Failed
        });
      }
    }
  }

</script>