<template>
    <v-container>
        <h3 class="my-3">Laboratorul 4</h3>

        <h4>Socketpair</h4>
        <ul>
            <li><a href="https://profs.info.uaic.ro/~computernetworks/files/NetEx/S4/socketpair.c">socketpair.c</a></li>
        </ul>
        <p class="mt-4">
            <code class="px-3">
#include &lt;sys/types.h&gt;
#include &lt;sys/socket.h&gt;

int socketpair(int domain, int type, int protocol, int sv[2]);
            </code><br/>
            - <a href="http://man7.org/linux/man-pages/man2/socketpair.2.html">socketpair()</a><br/>
            - socketpair creates an anonymous pair of sockets, usually unix/local sockets<br/>
            - like pipes but <b>bidirectional</b><br/>
            - AF_UNIX (also known as AF_LOCAL) socket family is used to communicate between processes on the same machine efficiently <br/>
            - Valid socket types in the UNIX domain are: SOCK_STREAM, for a stream-oriented socket; SOCK_DGRAM, for a datagram-oriented socket thatpreserves message boundaries
        </p>
        <img height="500px" src="http://slideplayer.com/slide/6502023/22/images/29/IPC+Using+Socketpair+Figure+10.5.+The+socketpair+before+and+after+the+process+forks..jpg">
        <h4 class="mt-3">Bibliografie</h4>
        <ul>
            <li><a href="http://beej.us/guide/bgipc/output/html/singlepage/bgipc.html#socketpair">socketpair</a></li>
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
