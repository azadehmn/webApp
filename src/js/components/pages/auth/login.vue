<template lang="pug">
  div
    div.col-lg-12.col-md-12.col-sm-12.col-xs-12
      div.zarin-logo.auto-margin
    div.col-lg-12.col-md-12.col-sm-12.col-xs-12.box.init-page.login-box
      div.row
        div.col-lg-12.col-md-12.col-sm-12.col-xs-12
          p.login-account ورود به حساب کاربری
        div.col-lg-12.col-md-12.col-sm-12.col-xs-12
          p.title-init برای استفاده از خدمات ابتدا وارد شوید
      div.row
        div.col-lg-12.col-md-12.col-sm-12.col-xs-12
          input(:class="{'input-danger': errors.has('year')}"   data-vv-as="شماره تلفن یا ایمیل" type="text"  v-model="username" name="username"  placeholder= "شماره تلفن یا ایمیل" v-validate="{rules: {required: true, regex: /^((\\+?[1-9]{1,2})|0)[1-9][0-9]{9,11}$|^[^@]+@[a-z]+\\.[a-z]+$/} }")
          span.err {{ errors.first('username') }}
      div.row
          div.col-lg-9.col-md-9.col-xs-12.col-sm-9.m-t-5
            span.iransans-medium عضو نیستید؟
              router-link.register.iransans-medium.pointer(tag="span" :to="{name:'auth.register'}") ثبت‌‌نام
          div.col-lg-3.col-md-3.col-xs-12.col-sm-3.login-button
            button.btn-gold(@click="submit")  ورود به حساب
</template>
<script>
  export default {
    name: 'auth_loginInit',
    data(){
      return{
        username: "",
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

  };

</script>