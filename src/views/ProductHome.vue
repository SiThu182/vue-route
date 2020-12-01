<template>
   <div class="container">
       <div class="row">
           <div class="col-md-4 text-center my-3" v-for="product in products" :key="product.id">
               <div class="card" >  
                   <div class="card-body ">
                       <img :src="product.image" alt="Product Image" class="p-img ">
                        <p class="text-muted h5">{{product.title}}</p>
                       <h3 class="my-4">{{product.price}}</h3>
                       <router-link class="btn btn-primary btn-block" :to="`/product/${product.id}`">
                           More Detail</router-link> 
                   </div>
               </div>
           </div>
       </div>
   </div>
  
</template>

<script>
import axios from 'axios';
export default {
    name: 'PrdocutHome',
    data(){
        return {
            products: []
        }
    },
    created(){
        axios.get('https://fakestoreapi.com/products')
        .then(response => 
        this.products = response.data)
    }

}
</script>

<style>
.p-img{
    height: 150px;
}
</style>
