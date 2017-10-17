<template>
    <v-container>
        <h3 class="my-3">Laboratorul 3</h3>

        <h4>Folosirea pipe-urilor. Duplicarea descriptorilor.</h4>

        <ul>
            <li><a href="https://profs.info.uaic.ro/~computernetworks/files/NetEx/S3/sendDataFifo.c">sendDataFifo.c</a></li>
            <li><a href="https://profs.info.uaic.ro/~computernetworks/files/NetEx/S3/recDataFifo.c">recDataFifo.c</a></li>
            <li><a href="https://profs.info.uaic.ro/~computernetworks/files/NetEx/S3/who_wc.c">who_wc.c</a></li>
        </ul>

        <h5 class="mt-3">- pipe</h5>
        <p class="my-3">
            A pipe is a system call that creates a unidirectional communication link between two file descriptors.
            The pipe system call is called with a pointer to an array of two integers. Upon return, the first element of the array contains the file descriptor that corresponds to the output of the pipe (buffer to be read). The second element of the array contains the file descriptor that corresponds to the input of the pipe (the place where you write buffer).
            Whatever bytes are sent into the input of the pipe can be read from the other end of the pipe.
        </p>
        <div class="px-2 py-4" style="background-color: white; text-align: center;">
            <img src="http://beej.us/guide/bgipc/output/html/multipage/pipe1-96-4.149.png">
        </div>

        <p class="my-3">
            Basically, a call to the <code>pipe()</code> function returns a pair of file descriptors. One of these descriptors is connected to the write end of the pipe, and the other is connected to the read end.<br/>
            Anything can be written to the pipe, and read from the other end in the order it came in. <br/>
        </p>

        <code class="px-3">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;errno.h&gt;
#include &lt;unistd.h&gt;

int main(void)
{
    int pfds[2];
    char buf[30];

    if (pipe(pfds) == -1) {
        perror("pipe");
        exit(1);
}

    printf("writing to file descriptor #%d\n", pfds[1]);
    write(pfds[1], "test", 5);
    printf("reading from file descriptor #%d\n", pfds[0]);
    read(pfds[0], buf, 5);
    printf("read \"%s\"\n", buf);

    return 0;
}
        </code>

        <p class="my-3">
            Next:
            <a href="http://beej.us/guide/bgipc/examples/pipe2.c">fork & pipe example</a>
        </p>

        <h5 class="mt-3">- dup</h5>

        <p class="my-3">
            <code>dup()</code> takes an open file descriptor and makes a clone (a duplicate) of it in the first available position
        </p>

        <code class="px-3">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;unistd.h&gt;

int main(void)
{
    int pfds[2];

    pipe(pfds);

    if (!fork()) {
        close(1);       /* close normal stdout */
        dup(pfds[1]);   /* make stdout same as pfds[1] */
        close(pfds[0]); /* we don't need this */
        execlp("ls", "ls", NULL);
    } else {
        close(0);       /* close normal stdin */
        dup(pfds[0]);   /* make stdin same as pfds[0] */
        close(pfds[1]); /* we don't need this */
        execlp("wc", "wc", "-l", NULL);
    }

    return 0;
}
        </code>
        <ul>
            <li><a href="https://linux.die.net/man/2/dup">dup()</a></li>
            <li><a href="https://linux.die.net/man/2/close">close()</a></li>
        </ul>

        <h5 class="mt-3">- fifo</h5>
        <p>
            FIFO ("First In, First Out") is a named pipe.<br/>
            A file that multiple processes can open() and read and write to.<br/>
            Creation example: <code>mknod("myfifo", S_IFIFO | 0644 , 0);</code> -> check man: <a href="https://www.systutorials.com/docs/linux/man/2-mknod/">mknod()</a>
        </p>
        <h4 class="mt-3">Bibliografie</h4>
        <ul>
            <li><a href="http://beej.us/guide/bgipc/output/html/multipage/pipes.html">pipes</a></li>
            <li><a href="http://beej.us/guide/bgipc/output/html/multipage/fifos.html">fifos</a></li>
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
