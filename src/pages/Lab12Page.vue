<template>
    <v-container>
        <h3 class="my-3">Laboratorul 12</h3>

        <h5> TCP/IP concurrent server implementation using threads.</h5>

        <p>
            <strong>Threads</strong> (firele de executie) pot fi vazute ca cea mai mica sectiune de cod ce poate fi administrata de sistemul de operare.
            Daca in cazul proceselor copil se creea un nou proces propriu-zis, threadurile nu reprezinta un proces, nu i se aloca memorie, pid etc.
            Threadurile si procesul principal impart aceeasi memorie, ceea ce implica ca variabilele de la nivelul procesului sunt accessibile oricarui thread.
            Un proces contine unul sau mai multe threaduri.
            <br/>
            <br/>
            Deoarece threadurile impart memoria si au access la codul executabil al procesului, pentru a administra accessul la resurse si a evita 'race conditions',
            accessul la resurse sau cod (ex. cod care gestioneaza variabile ce trebuie manipulate doar de un proces intr-un moment din timp),
            se pot folosi mecanisme de tip mutex, semafoare etc.
        </p>

        <h6>Exemple</h6>
        <ul>
            <li>
                A concurrent server that creates a thread for each connected client:
                <a href="https://profs.info.uaic.ro/~computernetworks/files/NetEx/S12/ServerConcThread/servTcpConcTh2.c">servTcpConcTh2.c</a>;
                <a href="https://profs.info.uaic.ro/~computernetworks/files/NetEx/S12/ServerConcThread/cliTcpNr.c">cliTCPNr.c</a>
            </li>
            <li>
                A prethreaded server, which uses mutexes for protecting accept():
                <a href="https://profs.info.uaic.ro/~computernetworks/files/NetEx/S12/ServerPreThread/servTcpPreTh.c">servTcpPreTh.c</a>;
                <a href="https://profs.info.uaic.ro/~computernetworks/files/NetEx/S12/ServerPreThread/cliTcpNr.c">cliTcpNr.c</a>
            </li>
        </ul>

        <h6 class="mt-5">Bibliografie</h6>
        <ul>
            <li><a href="https://profs.info.uaic.ro/~eonica/rc/lab11.html">threads</a></li>
        </ul>

    </v-container>
</template>

<script>
    export default {
        data() {
            return {};
        },
    };
</script>
