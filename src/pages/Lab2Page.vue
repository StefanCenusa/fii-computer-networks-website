<template>
    <v-container>
        <h3 class="my-3">Laboratorul 2</h3>

        <h4>Managementul proceselor & comunicarea intre procese via semnale</h4>

        <ul>
            <li><a href="https://profs.info.uaic.ro/~adria/teach/courses/net/files/NetEx/S2/fork.c">fork.c</a></li>
            <li><a href="https://profs.info.uaic.ro/~adria/teach/courses/net/files/NetEx/S2/exec.c">exec.c</a></li>
            <li><a href="https://profs.info.uaic.ro/~adria/teach/courses/net/files/NetEx/S2/sig.c">sig.c</a></li>
        </ul>

        <p class="my-2">
            System call <code>fork()</code>
            is used to create processes. It takes no arguments and returns a process ID. The purpose of fork() is to create a new process, which becomes the child process of the caller. After a new child process is created, both processes will execute the next instruction following the fork() system call. Therefore, we have to distinguish the parent from the child. This can be done by testing the returned value of fork():
        </p>
        <ul>
            <li>
                fork() returns a negative value, the creation of a child process was unsuccessful.
            </li>
            <li>
                fork() returns a zero to the newly created child process.
            </li>
            <li>
                fork() returns a positive value, the process ID of the child process, to the parent. The returned process ID is of type <code>pid_t</code>
                defined in <code>sys/types.h</code>. Normally, the process ID is an integer.
            </li>
        </ul>
        <p>Moreover, a process can use function getpid() to retrieve the process ID assigned to this process.</p>
        <p class="my-2">
            Therefore, after the system call to fork(), a simple test can tell which process is the child. <b>Please note that Unix will make an exact copy of the parent's address space and give it to the child. Therefore, the parent and child processes have separate address spaces.</b>
        </p>

        <p>If the call to fork() is executed successfully, Unix will:</p>
            <ul>
                <li>make two identical copies of address spaces, one for the parent and the other for the child.</li>
                <li>both processes will start their execution at the next statement following the fork() call.</li>
            </ul>
        <p class="my-2">
            Both processes start their execution right after the system call fork(). Since both processes have identical but separate address spaces, those variables initialized <b>before</b> the fork() call have the same values in both address spaces. Since every process has its own address space, any modifications will be independent of the others. In other words, if the parent changes the value of its variable, the modification will only affect the variable in the parent process's address space. Other address spaces created by fork() calls will not be affected even though they have identical variable names.
        </p>

        <ul class="my-2">
            <li>
                <a href="http://man7.org/linux/man-pages/man3/execl.3.html">exec family</a>
            </li>
            <li>
                <code>int execlp (const char *file, const char *arg, ...);</code>
            </li>
            <li>
                <a href="http://man7.org/linux/man-pages/man2/waitpid.2.html">wait ()</a>
            </li>
            <li>
                <a href="https://linux.die.net/man/2/signal"> signal ()</a>
            </li>
        </ul>

        <h4>Bibliografie</h4>
        <ul>
            <li><a href="http://www.csl.mtu.edu/cs4411.ck/www/NOTES/process/fork/create.html">fork</a></li>
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
