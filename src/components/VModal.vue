<template>
    <div v-if="value" class="modal-custom">
        <div class="modal fade show" style="display:block" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="mymodalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">{{title}}</h5>
                        <button type="button" class="close btn-sm"  @click="closeModal">
                        <span aria-hidden="true">&times;</span> 
                        </button>
                    </div>
                    <div class="modal-body">
                        <slot name="modal-content"/>    
                    </div>
                    <div class="modal-footer" >
                        <slot name="modal-footer"/>    
                    </div>
                </div>
            </div>
            <div @click="closeModal" class="modal-close"></div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        value:{
            required:true,
        },
        title:{
            type: String,
            default:'Modal Title',
        }
    },
    methods:{
        closeModal(){
            this.$emit('input', !this.value);
        }
    }
}
</script>

<style scoped>
.modal-custom {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .7s ease;
}
.modal {
  overflow: auto;
}
.modal::-webkit-scrollbar {
  width: 0;
}
.modal-dialog {
  position: relative;
  z-index: 1;
}
.modal-close {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
