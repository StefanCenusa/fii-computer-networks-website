<template>
    <v-container>
        <h3 class="my-3">Laboratorul 7</h3>
        <h5>Comunicare Server / Client (continuare)</h5>

        <img style="background-color: white; padding: 5px" src="https://cezarmanea.github.io/interface/dist/assets/figA1_3.gif">
<code class="px-3">
    /* servTCPIt.c - Exemplu de server TCP iterativ
    Asteapta un nume de la clienti; intoarce clientului sirul
    "Hello nume".
    */

    #include &lt;sys/types.h&gt;
    #include &lt;sys/socket.h&gt;
    #include &lt;netinet/in.h&gt;
    #include &lt;errno.h&gt;
    #include &lt;unistd.h&gt;
    #include &lt;stdio.h&gt;
    #include &lt;string.h&gt;
    #include &lt;stdlib.h&gt;

    /* portul folosit */
    #define PORT 2024

    /* codul de eroare returnat de anumite apeluri */
    extern int errno;

    int main ()
    {
    struct sockaddr_in server;	// structura folosita de server
    struct sockaddr_in from;
    char msg[100];		//mesajul primit de la client
    char msgrasp[100]=" ";        //mesaj de raspuns pentru client
    int sd;			//descriptorul de socket

    /* crearea unui socket */
    if ((sd = socket (AF_INET, SOCK_STREAM, 0)) == -1)
    {
    perror ("[server]Eroare la socket().\n");
    return errno;
    }

    /* pregatirea structurilor de date */
    bzero (&server, sizeof (server));
    bzero (&from, sizeof (from));

    /* umplem structura folosita de server */
    /* stabilirea familiei de socket-uri */
    server.sin_family = AF_INET;
    /* acceptam orice adresa */
    server.sin_addr.s_addr = htonl (INADDR_ANY);
    /* utilizam un port utilizator */
    server.sin_port = htons (PORT);

    /* atasam socketul */
    if (bind (sd, (struct sockaddr *) &server, sizeof (struct sockaddr)) == -1)
    {
    perror ("[server]Eroare la bind().\n");
    return errno;
    }

    /* punem serverul sa asculte daca vin clienti sa se conecteze */
    if (listen (sd, 1) == -1)
    {
    perror ("[server]Eroare la listen().\n");
    return errno;
    }

    /* servim in mod concurent clientii... */
    while (1)
    {
    int client;
    int length = sizeof (from);

    printf ("[server]Asteptam la portul %d...\n",PORT);
    fflush (stdout);

    /* acceptam un client (stare blocanta pina la realizarea conexiunii) */
    client = accept (sd, (struct sockaddr *) &from, &length);

    /* eroare la acceptarea conexiunii de la un client */
    if (client < 0)
    {
    perror ("[server]Eroare la accept().\n");
    continue;
    }

    int pid;
    if ((pid = fork()) == -1) {
    close(client);
    continue;
    } else if (pid > 0) {
    // parinte
    close(client);
    while(waitpid(-1,NULL,WNOHANG));
    continue;
    } else if (pid == 0) {
    // copil
    close(sd);

    /* s-a realizat conexiunea, se astepta mesajul */
    bzero (msg, 100);
    printf ("[server]Asteptam mesajul...\n");
    fflush (stdout);

    /* citirea mesajului */
    if (read (client, msg, 100) <= 0)
    {
    perror ("[server]Eroare la read() de la client.\n");
    close (client);	/* inchidem conexiunea cu clientul */
    continue;		/* continuam sa ascultam */
    }

    printf ("[server]Mesajul a fost receptionat...%s\n", msg);

    /*pregatim mesajul de raspuns */
    bzero(msgrasp,100);
    strcat(msgrasp,"Hello ");
    strcat(msgrasp,msg);

    printf("[server]Trimitem mesajul inapoi...%s\n",msgrasp);


    /* returnam mesajul clientului */
    if (write (client, msgrasp, 100) <= 0)
    {
    perror ("[server]Eroare la write() catre client.\n");
    continue;		/* continuam sa ascultam */
    }
    else
    printf ("[server]Mesajul a fost trasmis cu succes.\n");
    /* am terminat cu acest client, inchidem conexiunea */
    close (client);
    exit(0);
    }

    }				/* while */
    }				/* main */
</code>
        <h6>Exercitii</h6>
        <ul>
            <li>Implementati un server TCP concurent care sa permita descarcarea unui fisier in paralel de catre mai multi clienti.</li>
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
