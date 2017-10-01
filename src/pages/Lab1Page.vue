<template>
    <v-container>
        <h3 class="my-3">Laboratorul 1</h3>

        <h4>Comenzi</h4>
        <div class="text-comanda">
            <p>Forma generala de lansare în executie a unei comenzi:</p>
            <code class="px-1 py-1">$ comanda [optiuni] [argumente]</code>
        </div>

        <p>
            Pentru a obtine help despre comenzile externa (si despre functiile de biblioteca C)
            sunt disponibile urmatoarele comenzi:
            <strong>man, whatis, whereis, apropos, info</strong>
        </p>


        <div class="text-comanda">
            <p>Afiseaza pagina de manual (din sectiunea specificata) pentru comanda sau functia specificata:</p>
            <code class="px-1 py-1">$ man [sectiune] nume</code>
        </div>


        <div class="text-comanda">
            <p>Compilarea unu program C se face cu comanda</p>
            <code class="px-1 py-1">$ gcc surca.c [- o executabil]</code>
        </div>


        <div class="text-comanda">
            <p>Compilarea unu program C++ se face cu comanda</p>
            <code class="px-1 py-1">$ g++ surca.cpp [- o executabil]</code>
        </div>


        <p class="note">Pentru depanarea programelor se poate utiliza depanatorul GNU DeBugger, accesibil prin comanda <strong>gdb</strong>.</p>

    </v-container>
</template>

<script>
    export default {
        data() {
            return {};
        },
    };
</script>
