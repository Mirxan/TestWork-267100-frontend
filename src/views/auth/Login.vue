<template>
  <div class="login-page">
    <div class="login-box">
      <div class="card">
        <div class="card-body">
          <p class="login-box-msg">Sign in!</p>
          <form @submit.enter="handleSubmit">
            <div class="input-group mb-3">
              <input 
                type="email" 
                class="form-control" 
                placeholder="Email" 
                v-model="form.email"
                :class="requiredInput(form.email)"
              >
            </div>
            <div class="input-group mb-3">
              <input 
                type="password" 
                class="form-control" 
                placeholder="Password"
                v-model="form.password"
                :class="requiredInput(form.password)"
              >
            </div>
            <div>
              <button type="submit" class="btn btn-primary btn-block">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data(){
    return{
      isRequired:false,
      form:{
        email:'',
        password:'',
      }
    }
  },
  computed:{
    ...mapGetters({ isAuthenticated: 'auth/isAuthenticated' }),
    checkInputs(){
      return !this.form.email || !this.form.password;
    }
  },
  methods:{
    ...mapActions({
      login: 'auth/login',
    }),
    requiredInput(input){
      return this.isRequired && !input ? 'requiredInput' : '';
    },
    async handleSubmit(){
      if(this.checkInputs){
        this.isRequired = true;
        return;
      }
      await this.login(this.form);
      if (this.isAuthenticated)this.$router.push({ name: 'product' });
    }
  }
};
</script>
<style scoped>
.requiredInput{
  border:1px solid red;
}
</style>
