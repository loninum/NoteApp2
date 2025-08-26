<template>
    <div class="wrapper">
        <Header> </Header>
        
        <div class="wrapper-content">
            <div class="container">
            <!-- <h1>Hello</h1> -->
            <router-view></router-view>
                <!-- {{ site }} -->
   
            </div>
        </div>
        <Footer></Footer>
        

    </div>
</template>

<script>
// import {site} from "@/_config"
// import
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
// import Test from "@/components/test.vue";
// import Home from "./home.vue";
export default {
    components: {
        // Test,
        // Home,
        Header,
        Footer
    },
    data() {
        return {
            // site:site.home
         
        }
    }
     
}
</script>

<style lang="scss">
</style>
