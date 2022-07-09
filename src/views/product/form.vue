<template>
    <v-modal v-model="showModal" :title="title">
      <template slot="modal-content">
        <div class="form-group">
            <label for="name">
                Title 
                <span class="text-danger">*</span>
            </label>
            <input 
                type="text"  
                v-model="form.title" 
                id="name" 
                class="form-control"
                :class="inputRequired(form.title)"
            >
        </div>
        <div class="form-group">
            <label for="name">
                Description 
                <span class="text-danger">*</span>
            </label>
            <textarea
                v-model="form.desciption" 
                id="name" 
                class="form-control"
                :class="inputRequired(form.desciption)"
            ></textarea>    
        </div>
      </template>
      <template slot="modal-footer">
        <button type="button" class="btn btn-primary btn-sm" @click="handleSubmit">Save</button>
      </template>
    </v-modal>
</template>
<script>
export default {
  props:['title'],
  data(){
      return{
          form:{
            title:'',
            desciption:'',
          },
          isRequired:false,
          showModal:false,
          type:'create',
      }
  },
  watch:{
    showModal:{
      handler(){
        if(!this.showModal)this.defaultValues();
      }
    },
  },
  computed:{
    checkInputs(){
        return !this.form.title || !this.form.desciption
    }
  },
  methods:{
    inputRequired(input){
        return this.isRequired && !input ? 'isRequired' : '';
    },
    handleSubmit(){
        if(this.checkInputs){
            this.isRequired = true;
            return;
        }
        this.$emit('handleSubmit',this.form,this.type);
    },
    toggleModal(func,type,item=null){
      this.showModal = func;
      this.type = type;
      if(item){
        this.form.id = item.id
        this.form.title = item.title
        this.form.desciption = item.desciption
      }else{
        this.defaultValues();
      }
    },
    defaultValues(){
        this.isRequired = false;
      this.form = {
        title:'',
        desciption:'',
      };
    }
  }
}
</script>
<style scoped>
.checkbox-label{
  margin-top: 3px;
  margin-right: 3px;
}
.isRequired{
    border:1px solid red;
}
</style>
