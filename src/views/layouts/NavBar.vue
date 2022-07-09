<template>
   <nav class="navbar navbar-expand navbar-dark navbar-light d-flex justify-content-between">
        <ul class="navbar-nav">
            <li class="nav-item" v-for="(menu,index) in menus" :key="index">
                <router-link :to="menu.routeName" class="nav-link" tag="a">
                    {{menu.title}}
                </router-link>
            </li>
        </ul>
        <div class="nav-item">
            <a href="#" class="nav-link" @click.prevent="logout">Logout</a>
        </div>
    </nav>
</template>
<script>
import {mapActions} from 'vuex'
export default{
    name:'product',
    computed:{
        menus(){
            return[
                {
                    title:'Product',
                    routeName:'product'
                },
            ]
        }
    },
    methods:{
        ...mapActions({
            logoutUser: 'auth/logoutUser',
        }),
        logout(){
            this.logoutUser();
        }
    }
}
</script>