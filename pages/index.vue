<script setup>
    import { ref } from 'vue';

    const router = useRouter

    const { data: products} = await useFetch('https://fakestoreapi.com/products?limit=4')

</script>

<template>
    <div class=" ">
        <!-- Painel Cinza -->
       <div class="rounded-2xl w-11/12  md:w-4/6 my-1 mx-auto h-full md:h-screen bg-zinc-300 max-w-xl">
            
            <div class="hidden md:flex md:items-center p-3">   
                <div class="text-yellow-300">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" fill="currentColor" class="size-6 "><path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" /></svg>
                </div>


                <div class="">
                    <h1 class="text-black text-2xl font-bold m-2">Moda</h1>
                </div>


                <div class="w-full flex flex-nowrap ">
                    <p class=" text-zinc-500 text-sm">Escollha sua peça</p>
                </div>


                <div class="flex w-full justify-end " > 
                    <button class="  border p-3 rounded-full bg-green-900 text-green-50 hover:bg-emerald-400">
                            Carregar <!-- Botao que carrega div com dados da api, apenas informativo, descartavel -->
                    </button>
                </div>                     
            </div>

            
            <CardList />
       </div>

       <Footer class="w-full">
       </Footer>
    </div>
</template>



<style lang="scss" scoped>

</style>