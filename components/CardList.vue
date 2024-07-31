<script setup>
    const router = useRouter

    const { data: products} = await useFetch('https://fakestoreapi.com/products?limit=4')
</script>

<template>
    <div>
        <div v-for="(item, index) in products"  :key="index" class=" flex flex-col justify-center  mx-5 mb-4 min-w-80 max-w-xl hover:scale-105 transition-all bg-white rounded-2xl">
            <!-- RouterLink levando os parametros  e query necessários para serem carregados na proxima pagina -->
            
            <NuxtLink class="w-full" :to="{ name: 'users-id', params: {id:item.id}, query: {title: item.title, price: item.price, image: item.image}}">             
                <div v-if="index == 0"> <!-- Verificando se o indice é 0 -->
                    <div  class="flex">
                        <img :src="item.image" 
                        class="object-fill p-5  h-64 w-full min-w-80  max-w-xl rounded-tl-lg rounded-tr-2xl" alt=""> 
                    </div>                  

                    <div class="bg-white  h-20 rounded-bl-2xl rounded-br-2xl w-full text-start " >
                        <div class="ml-5 pt-4">
                            <p>{{item.title}} <br> {{'$' + item.price }} </p>
                        </div>
                    </div>
                </div>
             

                <div v-else class="flex">
                    <div v-if="item.image != ''">
                        <img :src="item.image"
                        class="object-cover h-32 p-3 w-32 rounded-tl-2xl rounded-bl-2xl" alt="">
                    </div>

                    <div v-else class="">
                            <img :src="item.image"
                            class="object-cover h-32  w-32 rounded-tl-2xl rounded-bl-2xl" alt="">             
                    </div>

                    <div class="w-full h-32  rounded-xl">    
                        <div class="">
                            <div class="bg-white h-32 rounded-br-2xl rounded-tr-2xl w-full text-start border-collapse" >
                                <div class="ml-5 pt-4">
                                    <p class="uppercase"> {{ item.title }} </p>
                                    <p> {{'$'+ item.price.toFixed(2)}} </p>
                                </div>
                            </div>
                        </div>
                    </div>      
                </div>    
            </NuxtLink>   

        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>