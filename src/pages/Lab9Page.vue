<template>
    <v-container>
        <h3 class="my-3">Laboratorul 9</h3>
        <h5>Comunicare Server / Client (continuare)</h5>
        <h6>Multiplexare I/O via select()</h6>

        <img style="background-color: white; padding: 5px; height:600px;" src="https://cezarmanea.github.io/interface/dist/assets/concurrent_select.jpg">
        <br/>

        <h6 class="mt-5">select()</h6>
        <code class="px-3">
#include &lt;sys/time.h&gt;
#include &lt;sys/types.h&gt;
#include &lt;unistd.h&gt;

int select(int nfds, fd_set *readfds, fd_set *writefds, fd_set *exceptfds, struct timeval *timeout);

FD_SET(int fd, fd_set *set); //Add fd to the set.
FD_CLR(int fd, fd_set *set); //Remove fd from the set.
FD_ISSET(int fd, fd_set *set); //Return true if fd is in the set.
FD_ZERO(fd_set *set); //Clear all entries from the set.
        </code>

        <p class="mt-2">Allows a program to monitor multiple file
            descriptors, waiting until one or more of the file descriptors become
            "ready" for some class of I/O operation</p>

        <h6 class="mt-5">Exercitii</h6>
        <ul>
            <li>Implementati un server TCP concurent care sa faca broadcast catre toti clientii mesajul primit de la fiecare client.</li>
        </ul>

        <h6 class="mt-5">Bibliografie</h6>
        <ul>
            <li><a href="http://beej.us/guide/bgnet/output/html/multipage/selectman.html">select()</a></li>
            <li><a href="https://notes.shichao.io/unp/ch6/#conditions-for-a-ready-descriptor">conditions-for-a-ready-descriptor</a></li>
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
