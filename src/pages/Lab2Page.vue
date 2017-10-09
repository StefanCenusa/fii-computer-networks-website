<template>
    <v-container>
        <h3 class="my-3">Laboratorul 2</h3>

        <h4>Managementul proceselor & comunicarea intre procese via semnale</h4>

        <ul>
            <li><a href="https://profs.info.uaic.ro/~adria/teach/courses/net/files/NetEx/S2/fork.c">fork.c</a></li>
            <li><a href="https://profs.info.uaic.ro/~adria/teach/courses/net/files/NetEx/S2/exec.c">exec.c</a></li>
            <li><a href="https://profs.info.uaic.ro/~adria/teach/courses/net/files/NetEx/S2/sig.c">sig.c</a></li>
        </ul>

        <h5 class="mt-3">- fork</h5>
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

        <h5 class="mt-3 ">- exec family</h5>
        <p>All varieties of exec() system call perform the same function: they transform the calling process by loading a new program into its address space. If the exec() is successful the calling program is completely overlaid (replaced) by the new program, which is then started from its beginning.
            The process ID does not change across an exec().
        </p>
        <p>
            exec() is commonly used with fork(). The fork function creates a new process (the child) that then causes another program to be executed by calling one of the exec functions.
        </p>
        <ul class="my-2">
            <li>
                <a href="http://man7.org/linux/man-pages/man3/execl.3.html">exec family</a>
            </li>
            <li>
                Functions in the <code>exec()</code> family have different behaviours:

                <ul>
                    <li>l : arguments are passed as a list of strings</li>
                    <li>v : arguments are passed as an array of strings</li>
                    <li>p : path/s to search for the new running program</li>
                    <li>e : the environment can be specified by the caller</li>
                </ul>

                <div>
                    <p>You can mix them, therefore you have:</p>
                    <code class="px-3">
int execl(const char *path, const char *arg, ...);
int execlp(const char *file, const char *arg, ...);
int execle(const char *path, const char *arg, ..., char * const envp[]);
int execv(const char *path, char *const argv[]);
int execvp(const char *file, char *const argv[]);
int execvpe(const char *file, char *const argv[], char *const envp[]);
                    </code>

                    <ul>
                        <li>The initial argument for these functions is the pathname of a file which is to be executed</li>
                        <li>The const <b>char *arg</b> and subsequent ellipses in the execl, execlp, and execle functions can be thought of as arg0, arg1, ..., argn. Together they describe a list of one or more pointers to null-terminated strings that represent the argument list available to the executed program. The first argument, by convention, should point to the file name associated with the file being executed. The list of arguments <b>must be terminated by a NULL pointer</b>.</li>
                        <li>The execv and execvp functions provide an array of pointers to null-terminated strings that represent the argument list available to the new program. The first argument, by convention, should point to the file name associated with the file being executed. The array of pointers <b>must be terminated by a NULL pointer.</b></li>
                    </ul>
                </div>
                <div class="mt-3">
                    <code class="px-3">
+--------+
| pid=7  |
| ppid=4 |
| bash   |
+--------+
|
| calls fork
V
+--------+             +--------+
| pid=7  |    forks    | pid=22 |
| ppid=4 | ----------> | ppid=7 |
| bash   |             | bash   |
+--------+             +--------+
|                      |
| waits for pid 22     | calls exec to run ls
|                      V
|                  +--------+
|                  | pid=22 |
|                  | ppid=7 |
|                  | ls     |
V                  +--------+
+--------+                 |
| pid=7  |                 | exits
| ppid=4 | <---------------+
| bash   |
+--------+
|
| continues
V
                    </code>
                </div>
            </li>
        </ul>
        <h5 class="mt-3">- wait</h5>
        <ul>
            <li>
                wait (and waitpid in it's blocking form) temporarily suspends the execution of a parent process while a child process is running. Once the child has finished, the waiting parent is restarted.
                <ul>
                    <li><a href="http://man7.org/linux/man-pages/man2/waitpid.2.html">wait ()</a></li>
                    <li><a href="https://linux.die.net/man/3/waitpid"> waitpid ()</a></li>
                </ul>
            </li>
        </ul>

        <h5 class="mt-3">- signals</h5>
        <ul>
            <li>
                <a href="https://linux.die.net/man/2/signal"> signal ()</a>
            </li>
            <li>
                <a href="https://linux.die.net/man/3/kill"> kill ()</a>
            </li>
        </ul>

        <p>A signal is a notification to a process that an event has occurred. Signals are sometimes called "software interrupts". They usually occur asynchronously; a process does not know ahead of time exactly when a signal will occur.</p>

        <ul>
            Conditions that can generate signals:

            <li>
                The <b>kill() system call.</b> <br/>
                Declaration:

            <code>int kill(int pid, int sig);</code><br/>

            A process is not able to send a signal to any other arbitrary process. To send a signal, the sending process and the receiving process must both have the same effective user ID, or the sending process must be the superuser
            </li>
            <li>
                The <b>kill command</b>.<br/>
            This command is a program that takes its command line arguments and issues a kill system call, so all the restrictions and options of the above kill() system call apply here.
            </li>
            <li>
                Certain terminal characters generate signals.<br/>
<code class="px-3">
Ctrl-C  = SIGINT
Ctrl-\  = SIGQUIT
Ctrl-Z  = SIGTSTP
</code>
            </li>
        </ul>

        <p>The <b>signal()</b> system call installs a new signal handler for a specified signal. <br/>
            Conceptually, for each process, the UNIX system maintains a table of the action that should be performed for each kind of signal.
            When the process calls the signal() function, the table entry for the signal type named as the first argument is changed to the value provided by the second argument.</p>
        <code class="px-3">
/* Sigfunc = a function-type that takes an integer argument,
*           and returns nothing
*/
typedef void Sigfunc(int);

Sigfunc *signal(int signum, Sigfunc *handler);
        </code>

        <h4 class="mt-3">Bibliografie</h4>
        <ul>
            <li><a href="http://www.csl.mtu.edu/cs4411.ck/www/NOTES/process/fork/create.html">fork</a></li>
            <li><a href="https://webdocs.cs.ualberta.ca/~tony/C379/C379Labs/Lab3/wait.html">wait</a></li>
            <li><a href="https://webdocs.cs.ualberta.ca/~tony/C379/C379Labs/Lab5/signals.html">signals</a></li>
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
