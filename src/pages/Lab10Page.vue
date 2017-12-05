<template>
    <v-container>
        <h3 class="my-3">Laboratorul 10</h3>
        <h5>Server/Client UDP/IP</h5>

        <img style="background-color: white; padding: 5px; height:600px;" src="http://www.cs.dartmouth.edu/~campbell/cs60/UDPsockets.jpg">

        <h6 class="mt-5"><a href="https://linux.die.net/man/2/recvfrom">recvfrom()</a></h6>

        <code class="px-3">
#include &lt;sys/types.h&gt;
#include &lt;sys/socket.h&gt;

ssize_t recvfrom(int s, void *buf, size_t len, int flags, struct sockaddr *from, socklen_t *fromlen);
        </code>

        <h6 class="mt-5"><a href="https://linux.die.net/man/2/sendto">sendto()</a></h6>
        <code class="px-3">
#include &lt;sys/types.h&gt;
#include &lt;sys/socket.h&gt;

ssize_t sendto(int s, const void *buf, size_t len, int flags, const struct sockaddr *to, socklen_t tolen);
        </code>

        <h6 class="mt-5">Exercitii</h6>
        <ul>
            <li>Modificati serverul UDP dat ca exemplu pentru a afisa adresa IP a clientului de la care ati primit mesajul.</li>
            <li>
                Implementati un server UDP care sa simuleze un sistem minimal de DNS.<br/>
                Serverul va primi un DNS name si va transmite inapoi clientului IP-ul corespunzatoar domeniului.
            </li>
            <li>
                Implementati un server UDP care sa poata trata mai multi clienti in paralel (folosind fork()). <br/>
                Clientul ar trebui sa trimita 2 numere si o operatie, iar serverul va raspunde cu rezultatul aferent. <br/>
                Clientul nu se va termina dupa trimiterea primei operatii ci va permite introducerea de noi operatii.
            </li>
        </ul>

        <h6 class="mt-5">Bibliografie</h6>
        <ul>
            <li><a href="http://beej.us/guide/bgnet/output/html/multipage/recvman.html">recvfrom</a></li>
            <li><a href="http://beej.us/guide/bgnet/output/html/multipage/sendman.html">sendto</a></li>
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
