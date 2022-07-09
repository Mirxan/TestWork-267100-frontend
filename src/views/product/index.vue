<template>
  <div class="content">
    <div class="content-header">
      <div class="container-fluid">
        <div class="d-flex justify-content-between">
          <h1 class="m-0">Products</h1>
          <button 
            type="button" 
            class="btn btn-primary"
            @click="handleCreate"
          >
            Add new product
          </button>      
        </div>
      </div>
    </div>
    <div class="content">
      <div class="container-fluid">
        <div class="card">
          <div class="card-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in items" :key="item.id">
                  <td>{{index+1}}</td>
                  <td>
                    {{item.title}}
                  </td>
                  <td>
                    {{item.desciption}}
                  </td>
                  <td>
                    <div class="d-flex"> 
                      <button 
                        type="button" 
                        class="btn btn-info" 
                        @click.prevent="handleEdit(item)">
                        edit
                      </button> 
                      <button 
                        type="button" 
                        class="btn btn-danger ml-2" 
                        @click.prevent="handleDelete(item.id)">
                        delete
                      </button> 
                    </div>  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <Form 
      @handleSubmit="handleSubmit" 
      ref="form" 
      :title="title"
    />
  </div>
</template>
<script>
import Form from './form.vue'
import { mapGetters, mapActions } from 'vuex';
export default {
  components:{
    Form
  },
  data() {
    return{
      title:'',
    }
  },
  computed: {
    ...mapGetters({
      items: 'product/items',
    }),
  },
  async mounted() {
    await this.index()
  },
  methods: {
    ...mapActions({
      index: 'product/index',
      create: 'product/create',
      update: 'product/update',
      delete: 'product/delete',
    }),
    async handleDelete(id){
      this.loading = true;
      await this.delete(id);
      await this.index();
      await this.$refs.form.toggleModal(false);
      this.loading = false;
    },
    handleCreate(){
      this.title = 'Add Product';
      this.$refs.form.toggleModal(true,'create',null);
    },
    handleEdit(row){
      this.title = 'Edit Company';
      this.$refs.form.toggleModal(true,'update',row);
    },
    async handleSubmit(form,type){
      this.loading = true;
      await this[type](form);
      await this.$refs.form.defaultValues();
      await this.$refs.form.toggleModal(false);
      await this.index();
      this.loading = false;
    },
  },
};
</script>
<style scoped></style>
