<script setup>
    import { useRoute, useRouter} from 'vue-router'

    const route = useRoute()

    const id = route.params.id
    const title = route.query.title
    const price = route.query.price
    const image = route.query.image

    import { ref } from 'vue';

    const iftemporario = false

    const clickCotas = (number) => {
        if (number == 1 ) {
        display_number.value += 1
        } 
        if (number == 3 ) {
        display_number.value += 3
        } 
        if (number == 5 ) {
        display_number.value += 5
        } 
        if (number == 10 ) {
        display_number.value += 10
        } 
        if (number == 30 ) {
        display_number.value += 30
        } 
        if (number == 0 ) {
        display_number.value = 1
        } 
    }

    const display_number = ref(1)

    const clickminus = () => {
        if (display_number.value > 1 ) {
        display_number.value--
    } else {
        alert("A quantidade mínima de compra é 1")
        //FAZER MIDDLEWARE
        }
    }
    const clickplus = () => {
        if (display_number.value >= 1 ) {
        display_number.value++
        } 
    }

    const desc_opened = ref(false)
    const clickDiv = () => {
        desc_opened.value = !desc_opened.value
    }

    //objeto dos premiados
    const premiados = [{
            valor: "30+",
            premio: "Desconto 20%",
            nome: "Maicon"
        },
        {
            valor: "10+",
            premio: "Desconto 10%",
            nome: "Junior"
        },
        {
            valor: "5+",
            premio: "Desconto 5%",
            nome: "Disponivel"
        },
        {
            valor: "5+",
            premio: "Desconto 5%",
            nome: "Disponivel"
        },
        {
            valor: "5+",
            premio: "Desconto 5%",
            nome: "Disponivel"
        },
        {
            valor: "5+",
            premio: "Desconto 5%",
            nome: "Disponivel"
        },
        {
            valor: "5+",
            premio: "Desconto 5%",
            nome: "Disponivel"
        }
        ]

</script>

<template>
   <div class="flex flex-col items-center h-screen mt-2">


<div class="flex justify-center fixed end-2 top-2/4 md:end-4/4 xl:end-1/4  bg-green-500 p-2 rounded-lg w-32 hover:scale-110">
    <button class="text-white text-sm font-bold ">Suporte</button>
</div>


<!-- PAINEL CINZA  -->
<div class="flex flex-col mb-4 p-5 bg-zinc-200  rounded-xl max-w-2xl"> 
   

    <div class="mb-5 flex flex-col w-full h-4/6 rounded-2xl ">
        <!-- CARD -->  
      
        <div class="flex h-full bg-white p-10">   <!-- SE VAZIO pega imagem 'sem imagem'-->  
            <img :src="image" 
                class=" object-fill rounded-tl-2xl rounded-tr-2xl w-4/6 mx-auto "  alt="">  
        </div>
 
        <div class="h-20 pb-24  rounded-b-2xl w-full text-center  bg-white" >
            <div class="ml-5 pt-4 p-2">
                <p class="text-md font-bold"> {{ title }} </p> 
                <p class="text-5xl font-extralight"> {{ '$' + price }} </p> 
            </div>
        </div>
    </div> 


    <!-- Label -->
    <div class="flex flex-col justify-center items-center text-center ">
        <div class="flex">
            <div class="p-1 mr-2">
                <p>POR APENAS</p>
            </div>
            <div class="p-1 bg-black text-white font-bold rounded-lg">
                <p class="ml-2 mr-2"> {{ '$'+ price  }}</p>
            </div>
        </div>
    </div>

    <!-- Label -->
    <div class="mb-2 flex flex-col items-start text-center">
        <div class="flex">
            <div class="text-yellow-300 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 ">
                    <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="font-bold text-2xl">
                <p>Unidades</p>
            </div>
        </div>
    </div>


    <!-- Cotas de cima -->
    <div class="flex mb-2 ">
        <div class="flex justify-between  w-full  cotas">
            <div @click="clickCotas(1)" class="text-center p-8 w-2/4  bg-black text-white rounded-2xl hover:scale-105 cursor-pointer">
                <div>
                    <p>+1</p>
                </div>
                <div>
                    <p>SELECIONAR</p>
                </div>
            </div>
            <div @click="clickCotas(3)" class="text-center p-8 w-2/4 bg-green-400 text-white rounded-2xl ml-2 mr-2 hover:scale-105 cursor-pointer">
                <div>
                    <p>+3</p>
                </div>
                <div>
                    <p>SELECIONAR</p>
                </div>
            </div>
            <div @click="clickCotas(5)" class="text-center p-8 w-2/4 bg-black text-white rounded-2xl hover:scale-105 cursor-pointer">
                <div>
                    <p>+5</p>
                </div>
                <div>
                    <p>SELECIONAR</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Cotas de baixo -->
    <div class="flex mb-8">
        <div class="flex justify-between  w-full  cotas">
            <div @click="clickCotas(10)" class="text-center p-8 w-2/4 rounded-2xl  bg-black text-white hover:scale-105 cursor-pointer">
                <div>
                    <p>+10</p>
                </div>
                <div>
                    <p>SELECIONAR</p>
                </div>
            </div>
            <div @click="clickCotas(30)" class="text-center p-8 w-2/4 bg-black text-white rounded-2xl ml-2 mr-2 hover:scale-105 cursor-pointer">
                <div>
                    <p>+30</p>
                </div>
                <div>
                    <p>SELECIONAR</p>
                </div>
            </div>
            <div @click="clickCotas(0)" class="text-center p-8 w-2/4 bg-zinc-100 text-black border border-zinc-300 rounded-2xl hover:outline outline-zinc-900 hover:scale-105 cursor-pointer">
                <div>
                    <p>INICIO</p>
                </div>
                <div>
                    <p>SELECIONAR</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Formularios -->
    <div class="mb-8 flex">
        <div class="flex items-center justify-center bg-white w-full p-2 rounded-lg mr-5 ">
            <div class="mt-2 mr-2">
                <button @click="clickminus">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
        
            <div class="border border-zinc-300 rounded-lg w-full mr-3 text-center text-4xl font-extralight">
                <p>{{ display_number }}</p>
            </div>
            
            <div class="mt-2 ml-2">
                <button @click="clickplus">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>


        <div class="p-1 flex items-center bg-green-600 text-white rounded-lg w-full hover:bg-green-700 hover:scale-105">
            <div class=" bg-white text-green-600 rounded-md p-2 ml-4 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z" clip-rule="evenodd" />
                </svg>
            </div>

            <div class="flex flex-col ">
                <div class="">
                    <p class="text-2xl font-bold">Comprar</p>
                </div>
                <div class="">
                    <p>{{'R$' + (display_number * price).toFixed(2) }}</p>
                </div>
            </div>
        </div>
    </div>

      <!-- Regulamentos -->
    <div @click="clickDiv" class="mb-2 p-3 flex flex-col items-center w-full bg-white rounded-2xl">
        <div class="flex">
            <div class="mr-1"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path d="M12 1.5a.75.75 0 0 1 .75.75V7.5h-1.5V2.25A.75.75 0 0 1 12 1.5ZM11.25 7.5v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
                </svg>
            </div>
            <div>
                <p>Descrição/Regulamentos</p>
            </div>
        </div>
        <div v-if="desc_opened" class="flex w-full  bg-white">
            <textarea class="w-full h-48 p-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt culpa cupiditate itaque incidunt temporibus eveniet exercitationem dolor delectus voluptatibus ducimus, eum magnam saepe placeat unde perspiciatis animi eos aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt culpa cupiditate itaque incidunt temporibus eveniet exercitationem dolor delectus voluptatibus ducimus, eum magnam saepe placeat unde perspiciatis animi eos aliquid. 
            </textarea>
        </div>
    </div>
   

      <!-- Titulos Premiados -->
    <div class="mb-2 flex text-start items-center w-full  rounded-2xl">
        <div class="text-yellow-400 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7">
                <path fill-rule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clip-rule="evenodd" />
            </svg>
        </div>
       
        <div class="mr-3">
            <h1 class="text-2xl font-bold">Clientes Premiados</h1>
        </div>
        
        <div>
            <p class="text-sm text-slate-500">Tempo Real</p>
        </div> 
    </div>


    <!-- Premiados -->
    <div class="mb-8 flex flex-col bg-white rounded-lg">
      
        <div v-for="(item, index) in premiados" :key="index" :class="index > 1 && 'bg-slate-300'" class="m-1 bg-slate-800 text-white flex justify-between items-center text-center rounded-lg"> 
            <div class="m-2 bg-white text-black  rounded-2xl w-1/6">
                <p>{{ item.valor }}</p>
            </div>

            <div :class="index > 1 && 'text-black'">
                <p> {{ item.premio }} </p>
            </div>
           
            <div class="flex">
                <div :class="index > 1 && 'text-black'">
                    <p> {{ item.nome }} </p>
                </div>
        
                <div  v-if="item.nome != 'Disponivel'" class="text-yellow-400 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div v-else class="mr-3">

                </div>
            </div>
        </div>
    </div>

    <!-- Ranking Premiados LABEL-->
    <div class="mb-2 flex text-start items-center w-full  rounded-2xl">
        <div class="text-yellow-400 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7">
                <path fill-rule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clip-rule="evenodd" />
            </svg>
        </div>

        <div class="mr-3">
            <h1 class="text-2xl font-bold">Ranking Premiados</h1>
        </div>
    </div>   


    <!-- Ranking Premiados -->
    <div class="flex flex-col">
        <div class="mb-4 pb-10 flex justify-between w-full bg-white rounded-lg">
            <!-- PRIMEIRO LUGAR -->
            <div class=" m-2 flex flex-col items-center p-5 text-yellow-400 mr-2 rounded-lg border border-black ">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                        <path fill-rule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div class="text-black text-center text-sm">
                    <p>Junior</p>
                    <p>13 Peças</p>
                    <p>TOTAL R$151,00  de Desconto</p>
                </div>
            </div>
            
            <!-- SEGUNDO LUGAR -->
            <div class=" m-2 flex flex-col items-center p-5 text-slate-400 mr-2 rounded-lg border border-black ">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                        <path fill-rule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div class="text-black text-center text-sm">
                    <p>Teste</p>
                    <p>10 Peças</p>
                    <p>TOTAL R$91.00 de Desconto</p>
                </div>
            </div>

            <!-- TERCEIRO LUGAR -->
            <div class=" m-2 flex flex-col items-center p-5 text-red-400 mr-2 rounded-lg border border-black ">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                        <path fill-rule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div class="text-black text-center text-sm">
                    <p>Henrique</p>
                    <p>5 Peças</p>
                    <p>TOTAL R$34,00 de Desconto</p>
                </div>
            </div>
        </div>

        <div class="mb-3 ml-3 text-zinc-400">
            <p>Continue comprando!</p>
        </div>
    </div>
</div>  
<Footer class="w-full">
</Footer>
</div>
</template>

<style lang="scss" scoped>
    
</style>