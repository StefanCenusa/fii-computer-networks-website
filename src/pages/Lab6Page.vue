<template>
    <v-container>
        <h3 class="my-3">Laboratorul 6</h3>
        <h5>Comunicare Server / Client</h5>

        <img style="background-color: white; padding: 5px" src="https://cezarmanea.github.io/interface/dist/assets/figA1_2.gif">

        <h6 class="mt-5"><a href="https://linux.die.net/man/2/socket">Socket</a></h6>
        <code class="px-3">
#include &lt;sys/types.h&gt;
#include &lt;sys/socket.h&gt;

int socket(int domain, int type, int protocol);
        </code>

        <table class="mt-3 pa-2" style="border: 1px solid white;">
            <thead>
            <tr>
                <th>Domain</th>
                <th>Type</th>
                <th>Protocol</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="2" class="pa-3">AF_INET</td>
                    <td class="pa-3">SOCK_STREAM</td>
                    <td class="pa-3">TCP</td>
                </tr>
                <tr>
                    <td class="pa-3">SOCK_DGRAM</td>
                    <td class="pa-3">UDP</td>
                </tr>
            </tbody>
        </table>

        <h6 class="mt-5"><a href="https://linux.die.net/man/2/bind">Bind</a></h6>
        <code class="px-3">
#include &lt;sys/types.h&gt;
#include &lt;sys/socket.h&gt;

int bind(int sockfd, const struct sockaddr *addr, socklen_t addrlen);
        </code>

        <p><strong>bind()</strong> assigns the address specified by <strong>addr</strong> to the socket referred to by the file descriptor <strong>sockfd</strong></p>

        <code class="px-3">
// IPv4 AF_INET sockets:

struct sockaddr_in {
    short            sin_family;   // e.g. AF_INET, AF_INET6
    unsigned short   sin_port;     // e.g. htons(3490)
    struct in_addr   sin_addr;     // see struct in_addr, below
    char             sin_zero[8];  // zero this if you want to
};

struct in_addr {
    unsigned long s_addr;          // load with inet_pton()
};
        </code>
        <br/>

    <code class="px-3 mt-3">
// IPv4:

struct sockaddr_in ip4addr;
int s;

ip4addr.sin_family = AF_INET;
ip4addr.sin_port = htons(3490);
inet_pton(AF_INET, "10.0.0.1", &ip4addr.sin_addr);

s = socket(PF_INET, SOCK_STREAM, 0);
bind(s, (struct sockaddr*)&ip4addr, sizeof ip4addr);
        </code>

        <p class="mt-2">Assign <strong>INADDR_ANY</strong> to the s_addr field if you wanted to bind to your local IP address.</p>
        <code class="px-3">
#include &lt;arpa/inet.h&gt;

int inet_pton(int af, const char *src, void *dst);
        </code>
        <p class="mt-2">
            <strong>inet_pton()</strong> takes an address family (either AF_INET or AF_INET6) in the af parameter.
            The src parameter is a pointer to a string containing the IP address in printable form.
            Lastly the dst parameter points to where the result should be stored, which is probably a struct in_addr or struct in6_addr.
        </p>

        <h6 class="mt-5"><a href="https://linux.die.net/man/2/listen">Listen</a></h6>
        <code class="px-3">
#include &lt;sys/types.h&gt;
#include &lt;sys/socket.h&gt;

int listen(int sockfd, int backlog);
        </code>
        <p class="mt-2"><strong>backlog</strong> parameter means how many pending connections you can have before the kernel starts rejecting new ones. So as the new connections come in, you should be quick to accept() them so that the backlog doesn't fill</p>


        <h6 class="mt-5"><a href="https://linux.die.net/man/2/accept">Accept</a></h6>
        <code class="px-3">
#include &lt;sys/types.h&gt;
#include &lt;sys/socket.h&gt;

int accept(int s, struct sockaddr *addr, socklen_t *addrlen);
        </code>
        <ul class="mt-2">
            <li><strong>s</strong> - the listen()ing socket descriiptor</li>
            <li><strong>addr</strong> - this is filled in with the address of the site that's connecting to you</li>
            <li><strong>addrlen</strong> - this is filled in with the sizeof() the structure returned in the addr parameter</li>
        </ul>


        <h6 class="mt-5"><a href="https://linux.die.net/man/2/close">Close</a></h6>
        <code class="px-3">
#include &lt;unistd.h&gt;

int close(int s);
        </code>

        <h6 class="mt-5"><a href="https://linux.die.net/man/2/connect">Connect</a></h6>
        <code class="px-3">
#include &lt;sys/types.h&gt;
#include &lt;sys/socket.h&gt;

int connect(int sockfd, const struct sockaddr *serv_addr, socklen_t addrlen);
        </code>


        <h5 class="mt-5">Bibliografie</h5>
        <ul>
            <li><a href="https://www.ibm.com/support/knowledgecenter/en/SSB27U_6.4.0/com.ibm.zvm.v640.kiml0/asonetw.htm">network byte order and host byte order</a></li>
            <li><a href="http://beej.us/guide/bgnet/output/html/multipage/inet_ntopman.html">inet_ntop, inet_pton</a></li>
            <li><a href="http://beej.us/guide/bgnet/output/html/multipage/sockaddr_inman.html">struct sockaddr and pals</a></li>
            <li><a href="http://beej.us/guide/bgnet/output/html/multipage/listenman.html">listen</a></li>
            <li><a href="http://beej.us/guide/bgnet/output/html/multipage/acceptman.html">accept</a></li>
            <li><a href="http://beej.us/guide/bgnet/output/html/multipage/recvman.html">recv</a></li>
            <li><a href="http://beej.us/guide/bgnet/output/html/multipage/closeman.html">close</a></li>
            <li><a href="https://linux.die.net/man/3/inet_addr">inet_addr</a></li>
            <li><a href="http://beej.us/guide/bgnet/output/html/multipage/connectman.html">connect</a></li>
            <li><a href="http://www.cs.colby.edu/maxwell/courses/tutorials/maketutor/">make tutorial</a></li>
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
