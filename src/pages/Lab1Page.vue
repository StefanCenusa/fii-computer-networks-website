<template>
    <v-container>
        <h3 class="my-3">Laboratorul 1</h3>

        <h4>Recapitulare bash. Comenzi uzuale</h4>
        <ul>
            <li>/ - directorul radacina</li>
            <li>
                bin - diverse executabile necesare sistemului, aici aflandu-se de exemplu shellurile si comenzile externe
            </li>
            <li>
                boot - fisiere necesare la incarcarea sistemului, printre care si imaginea binara a kernelului sistemului de operare
            </li>
            <li>dev - fisiere utilizate pentru interfatarea cu dispoztivele sistemului (fizice si logice)</li>
            <li>
                etc - fisiere de configurare ale sistemului cum ar fi /etc/passwd - informatii despre utilizatori, /etc/group - informatii despre grupurile de utilizatori, /etc/services - informatii despre serviciile de retea (indicativele numerice ale porturilor), /etc/protocols - protocoalele de retea suportate
            </li>
            <li>home - subdirectoarele utilizatorilor</li>
            <li>lib - librarii partajabile ce sunt utilizate de sistem sau de catre diverse aplicatii</li>
            <li>
                mnt - sisteme de fisiere temporar atasate arborelui de directoare curent (montate utilizand comanda mount) in vederea accesarii, cum ar fi de exemplu cdrom-ul sau partitiile de windows
            </li>
            <li>
                proc - intrari virtuale corespunzatoare proceselor din sistem cu informatii despre acestea si date despre resursele utilizate (CPU, RAM)
            </li>
            <li>sbin - executabile de administrare destinate utilizarii de catre root</li>
            <li>tmp - director pentru datele temporare</li>
            <li>usr - aplicatii destinate utilizatorilor sistemului</li>
            <li>usr/bin - executabile ale aplicatiilor</li>
            <li>usr/doc - documentatie pentru aplicatii</li>
            <li>usr/include - fisiere header pentru dezvoltarea de programe C/C++</li>
            <li>usr/lib - librarii utilizate de aplicatii</li>
            <li>
                usr/local - aplicatii ce in mod normal sunt destinate doar utilizarii pe masina locala (ca exemplu directorul usr poate fi plasat fizic pe alta masina si partajat de mai multe statii de lucru; in acest caz aplicatiile de pe masina curenta vor fi instalate in usr/local)
            </li>
            <li>usr/sbin - alte executabile decat cele din sbin pentru administrarea sistemului</li>
            <li>usr/src - sursele aplicatiilor</li>
            <li>var - fisiere de dimensiune variabila ce se modifica frecvent (cum ar fi log-urile de exemplu)</li>
        </ul>
        <br/>

        <h4>Comenzi pentru operatii asupra sistemului de fisiere</h4>

        <!--<div class="text-comanda">-->
        <!--<p>Forma generala de lansare în executie a unei comenzi:</p>-->
        <!--<code class="px-1 py-1">$ comanda [optiuni] [argumente]</code>-->
        <!--</div>-->

        <!--<p>-->
        <!--Pentru a obtine help despre comenzile externa (si despre functiile de biblioteca C)-->
        <!--sunt disponibile urmatoarele comenzi:-->
        <!--<strong>man, whatis, whereis</strong>-->
        <!--</p>-->


        <!--<div class="text-comanda">-->
        <!--<p>Afiseaza pagina de manual (din sectiunea specificata) pentru comanda sau functia specificata:</p>-->
        <!--<code class="px-1 py-1">$ man [sectiune] nume</code>-->
        <!--</div>-->


        <!--<div class="text-comanda">-->
        <!--<p>Compilarea unu program C se face cu comanda</p>-->
        <!--<code class="px-1 py-1">$ gcc surca.c [- o executabil]</code>-->
        <!--</div>-->


        <!--<div class="text-comanda">-->
        <!--<p>Compilarea unu program C++ se face cu comanda</p>-->
        <!--<code class="px-1 py-1">$ g++ surca.cpp [- o executabil]</code>-->
        <!--</div>-->

        <ul>
            <li><b>ls</b>
                - Listeaza fisierele dintr-un director, implicit cel curent. Folosind optiunea -l intrarile despre fisiere sunt afisate in format detaliat. Optiunea -a are ca rezultat si afisarea fisierelor ascunse (al caror nume incepe cu .)
            </li>
            <li><b>stat [optiuni] [cale]</b>
                - Afiseaza diverse informatii in functie de optiunile date despre fisierul/directorul aflat in calea introdusa ca parametru
            </li>
            <li><b>cp [sursa] [destinatie]</b>
                - Copie fisierul sursa in locatia destinatie. Comanda poate avea si rol de redenumire in cazurile unde calea destinatie este terminata cu (sau chiar reprezinta) un nume de fisier. Comanda este utilizata si in copierea directoarelor, caz in care este folosita in general optiunea -r ce are ca efect copierea recursiva si a subdirectoarelor incluse.
            </li>
            <li><b>mv [sursa] [destinatie]</b>
                - Muta sursa in destinatie. Are practic acelasi efect ca si cp, cu deosebirea ca sursa este stearsa ulterior operatiei de mutare
            </li>
            <li><b>rm [cale]</b>
                - Sterge fisierul specificat in cale. Pentru ca apelul comenzii sa nu necesite o confirmare aditionala se utilizeaza optiunea -f (force). Pentru stergerea directoarelor se foloseste optiunea -r pentru ca stergerea sa se realizeze recursiv si la nivel de subdirectoare.
            </li>
            <li><b>cd [cale]</b> - Schimbarea caii curente</li>
            <li><b>mkdir [cale]</b> - Crearea directorului specificat in cale</li>
        </ul>

        <h4>Comenzi pentru operatii cu fisiere text</h4>
        <ul>
            <li><b>cat [fisier]</b>
                - Apelata in acest mod afiseaza continutul intregului fisier pe ecran (destinatia principala a comenzii este de fapt de a concatena fisiere)
            </li>
            <li><b>less [fisier]</b>
                - Afiseaza continutul fisierului pagina cu pagina, permitand actiuni avansate cum ar fi de exemplu cautarea in cadrul fisierului.
            </li>
            <li><b>head [fisier]</b>
                - Afiseaza primele linii din cadrul fisierului (implicit 10, numarul acestora se poate specifica prin optiunea -n; ex: -n9 pentru 9 linii)
            </li>
            <li><b>tail [fisier]</b> - Similar cu head pentru ultimele linii din cadrul fisierului</li>
            <li><b>grep [expresie regulata] [fisier]</b>
                - Cauta si afiseaza liniile din cadrul fisierului care respecta expresia regulata.
            </li>
            <li><b>cut [optiuni] [fisier]</b>
                - Extrage anumite campuri din liniile unui fisier pe baza optiunilor selectate.
            </li>
            <li><b>diff [fisier1] [fisier2]</b> - Compara fisierele si evidentiaza diferentele</li>
            <li><b>wc [fisier]</b> - (word count) Afiseaza numarul de linii, cuvinte si caractere dintr-un fisier
            </li>
        </ul>

        <h4>Drepturi de acces</h4>
        <p>
            Modificarea drepturilor de acces se poate realiza prin intermediul comenzii <code>chmod [categorie utilizatori] [+-=] [drepturi] [cale]</code>. Categoria utilizatori arata caror utilizatori (subcamp din campul drepturilor) li se aplica modificarea si poate fi 'u' - proprietar, 'g' - grup, 'o' - ceilalti sau 'a' - toate categoriile. '+' , '-' sau '=' indica adaugarea, eliminarea, sau setarea directa a unor drepturi fata de, sau respectiv in locul celor existente deja. Drepturile sunt specificate prin caracterele asociate specificate deja mai sus ('r', 'w', 'x', etc). Urmatorul argument reprezinta calea spre fisierul sau directorul asupra caruia se realizeaza modificarea drepturilor. Comanda chmod poate fi apelata si utilizand valori octale specificate direct pentru setarea drepturilor pentru cele trei categorii de utilizatori. Pentru mai multe informatii, consultati manualul.
        </p>

        <h4>Redirectarea intrarilor si iesirilor</h4>
        <p>
            Dizpozitivile logice de intrare/iesire sunt urmatoarele:
        </p>
        <ul>
            <li>
                intrarea standard  - stdin, de unde se citesc datele de intrare, avand asociata implicit tastatura;
            </li>
            <li>
                iesirea standard - stdout, unde sunt afisate datele de iesire, avand asociat implicit terminalul;
            </li>
            <li>
                iesirea de eroare standard - stderr, unde sunt afisate erorile, avand asociat implicit deasemeni terminalul;
            </li>
        </ul>
        <br/>
        <p>
            Redirectarea intrarii se realizeaza prin intermediul operatorului '<'. Spre exemplu, <code>[program] < [fisierin]</code>, va prelua datele de intrare pentru program din fisierin, chiar daca in mod normal acestea ar fi preluate de la tastatura.
        </p>
        <p>
            Redirectarea iesirii se face prin intermediul operatorului '>'. Extinzand exemplul anterior, <code>[program] < [fisierin] > [fisierout]</code>, pe langa redirectarea intrarii, va scrie datele de iesire in fisierout, in loc de a le afisa la nivelul terminalului. Daca pentru redirectarea iesirii se foloseste operatorul '>>', datele vor fi adaugate la sfarsitul noii destinatii de iesire, fara a suprascrie fisierul. Redirectarea iesirii de eroare se face prin operatorul '2>'.
        </p>
        <p>
            Redirectarea iesirii unei comenzi, ca intrare pentru o alta comanda, se poate face intr-un singur pas prin utilizarea mecanismului pipe, prin inlantuirea comenzilor, separate de operatorul '|'. Spre exemplu, daca ne-am afla intr-un director ce contine foarte multe fisiere, am putea afisa continutul acestuia, treptat, utilizand ls | less .
        </p>
        <br/>

        <h4>Programare C sub Linux</h4>
        <p>
            Compilarea unei surse C sub Linux se va realiza utilizand gcc (in cazul unei surse C++ compilatorul este g++). Apelarea gcc pasand ca argument un fisier C fara o alta optiune, de exemplu:
        </p>
        <code>gcc file.c</code>
        <p>
            va produce (in cazul in care nu sunt intalnite erori) un executabil cu numele implicit <i>a.out</i>
            plasat in directorul curent, in urma compilarii si linkarii fisierului initial. <br/>
            Pentru a specifica un nume pentru fisierul output se foloseste optiunea <i>-o</i>
            urmata de acest nume. Exemplu:</p>
        <code>gcc file.c -o outexe</code>
        <p>
            In mod implicit, pentru a include headerele specificate in sursele compilate, gcc va cauta in directorul curent si in directoarele ce contin headerele librariilor standard. Daca este necesara includerea de fisiere header din alta sursa se va folosi optiunea <i>-I</i>
            urmata de calea respectiva:
        </p>
        <code>gcc -I ./custom/include file.c -o outexe</code>
        <p>
            Pentru linkarea unei librarii (biblioteca), in vederea obtinerii executabilului final se va folosi optiunea <i>-l</i>
            urmata imediat de partea din numele librariei aflata dupa prefixul <i>lib</i>
            si inainte de sufixul (extensia) <i>.a</i>
            (acest format de nume este cel intalnit in mod normal pentru biblioteci). Spre exemplu libraria de functii matematice standard se numeste <i>libm.a</i>
            . Pentru a linka aceasta librarie se va folosi un apel gcc de genul:
        </p>
        <code>gcc -lm file.c -o outexe</code>
        <p>
            Daca libraria nu se gaseste in locatiile standard pentru librarii, pentru a fi gasita de linker, este necesara specificarea explicita a locatiei (inclusiv cazul directorului curent), folosind optiunea <i>-L</i>, intr-un mod similar utilizarii optiunii <i>-I</i>
            pentru locatii de headere
        </p>

        <h4>Rutine de sistem pentru manipularea fisierelor</h4>

        <p>
            Un descriptor de fisier este un simplu intreg utilizat ca index intr-o tabela de fisiere deschise de un proces.<br/>
            Reamintim descriptorii standard:
        </p>
        <ul>
            <li>0 asociat stdin - intrarea standard</li>
            <li>1 asociat stdout - iesirea standard</li>
            <li>2 asociat stderr - streamul de eroare standard</li>
        </ul>

        <p>
            Rutinele I/O cele mai utilizate pentru accesul si manipularea fisierelor prin intermediul descriptorilor sunt:
        </p>
        <ul>
            <li>
                <h5>open()</h5> - deschiderea unui fisier
                <p>Headerele necesare si prototipurile functiei:</p>
                <code class="px-3">
#include &lt;sys/types.h&gt;
#include &lt;sys/stat.h&gt;
#include &lt;fcntl.h&gt;

int open(const char *pathname, int flags);
int open(const char *pathname, int flags, mode_t mode);
                </code>
                <ul>
                    <li>pathname - calea catre fisier</li>
                    <li>flags - optiuni de deschidere a fisierului (ex: O_RDONLY, O_WRONLY, O_RDWR, O_APPEND, O_CREAT, O_TRUNC, O_EXCL)</li>
                    <li>
                        mode - specificarea explicita a permisiunilor asupra fisierului in cazul crearii acestuia (ex: S_IRWXU - utilizatorul owner are drepturi de citire, scriere si executie)
                    </li>
                </ul>
                <p>Functia returneaza descriptorul asociat fisierului in caz de succes si -1 in caz de eroare</p>
            </li>

            <li>
                <h5>close()</h5> - inchiderea unui fisier
                <p>Headerele necesare si prototipurile functiei:</p>
                <code class="px-3">
#include &lt;unistd.h&gt;

int close(int fd);
                </code>
                <ul>
                    <li>fd - descriptorul asociat fisierului (cel returnat la deschidere)</li>
                </ul>
                <p>Functia returneaza 0 in caz de succes si -1 in caz de eroare</p>
            </li>

            <li>
                <h5>read()</h5> - citirea dintr-un fisier
                <p>Headerele necesare si prototipurile functiei:</p>
                <code class="px-3">
#include &lt;unistd.h&gt;

ssize_t read(int fd, void *buf, size_t count);
</code>
                <ul>
                    <li>fd - descriptorul asociat fisierului (cel returnat la deschidere)</li>
                    <li>buf - pointer la bufferul destinatie ce va retine datele citite</li>
                    <li>count - numarul de bytes specificat pentru a fi citit</li>
                </ul>
                <p>Functia returneaza numarul de bytes cititi cu succes in caz de reusita si -1 in caz de eroare</p>
            </li>

            <li>
                <h5>write()</h5> - scrierea intr-un fisier
                <p>Headerele necesare si prototipurile functiei:</p>
                <code class="px-3">
#include &lt;unistd.h&gt;

ssize_t write(int fd, void *buf, size_t count);
                </code>
                <ul>
                    <li>fd - descriptorul asociat fisierului (cel returnat la deschidere)</li>
                    <li>buf - pointer la bufferul sursa ce contine datele ce vor fi scrise in fisier</li>
                    <li>count - numarul de bytes specificat pentru a fi scris</li>
                </ul>
                <p>Functia returneaza numarul de bytes scrisi cu succes in caz de reusita si -1 in caz de eroare</p>
            </li>

            <li>
                <h5>fcntl()</h5> - File control - executia a diverse comenzi asupra fisierului
                <p>Headerele necesare si prototipurile functiei:</p>
                <code class="px-3">
#include &lt;unistd.h&gt;
#include &lt;fcntl.h&gt;

int fcntl(int fd, int cmd);
int fcntl(int fd, int cmd, long arg);
int fcntl(int fd, int cmd, struct flock *lock);
                </code>
                <ul>
                    <li>fd - descriptorul asociat fisierului (cel returnat la deschidere)</li>
                    <li>
                        cmd - constanta ce defineste comanda de executat (ex: F_GETFL - obtinerea flagurilor de stare a fisierului)
                    </li>
                    <li>arg - argument specific in functie de comanda</li>
                    <li>
                        lock - structura specifica utilizata in cazul comenzilor legate de lock (ex: pt blocaj la scriere/citire)
                    </li>
                </ul>
                <p>Valoarea de retur a functiei depinde de comanda</p>
            </li>

            <li>
                <h5>lseek()</h5> - setarea pozitiei curente in cadrul fisierului
                <p>Headerele necesare si prototipurile functiei:</p>
                <code class="px-3">
#include &lt;sys/types.h&gt;
#include &lt;unistd.h&gt

off_t lseek(int fildes, off_t offset, int whence);
                </code>
                <ul>
                    <li>fildes - descriptorul asociat fisierului (cel returnat la deschidere)</li>
                    <li>
                        offset - noua pozitie specificata in bytes fata de referinta (negativ - inainte, pozitiv - dupa)
                    </li>
                    <li>
                        whence - referinta: SEEK_SET inceputul fisierului, SEEK_CUR pozitia curenta in fisier, SEEK_END sfarsitul fisierului
                    </li>
                </ul>
                <p>
                    Functia returneaza offsetul in bytes fata de inceputul fisierului in caz de reusita si -1 in caz de eroare</p>
            </li>

        </ul>

        <h5>Alte rutine: </h5>
        <ul>
            <li>fstat() - returneaza informatii despre un fisier intr-o structura specializata (stat)</li>
            <li>fchown() - modifica owner-ul sau grupul asociat cu un fisier deschis</li>
            <li>fchmod() - modifica permisiunile de acces la fisier</li>
            <li>fchdir() - schimba calea, directorul curent</li>
        </ul>
        <br/>

        <h4>Manipularea fisierelor prin functii de librarie</h4>

        <p>
            In afara de utilizarea rutinelor de sistem ce permit accesul la fisiere prin intermediul descriptorilor, acestea pot fi manipulate de asemeni prin intermediul pointerului FILE * si a functiilor oferite de libraria stdio, ce permit optiuni mai avansate in anumite cazuri cum ar fi spre exemplu scrierea si citirea din fisier din perspectiva formatarii datelor.
        </p>
        <p>
            Asemeni descriptorilor de fisier, la pornirea unui program ce utilizeaza libraria stdio, la fiecare din cele trei streamuri standard deschise, exista cate un pointer de tip FILE * cu numele stdin, stdout si stderr
        </p>

        <p>
            Principalele operatii cu fisiere utilizand libraria stdio sunt:
        </p>
        <ul>

            <li>
                <h5>Deschiderea si inchiderea fisierelor</h5>
                <ul>
                    <li>
                        <code>FILE *fopen(const char *path, const char *mode);</code>
                        Deschide un fisier.<br/>
                        Parametri: path - calea catre fisier, mode - mod deschidere (ex: "r+" - read si write)<br/>
                        Retur: pointer la fisierul deschis si NULL in caz de eroare<br/><br/>
                    </li>
                    <li>
                        <code>int fclose(FILE * stream);</code>
                        Inchide un fisier.  <br/>
                        Parametri: stream - pointer la un fisierul ce va fi inchis<br/>
                        Retur: 0 in caz de succes, -1 (EOF - End Of File) in caz de eroare<br/><br/>
                    </li>
                </ul>
            </li>

            <li>
                <h5>Citirea si scrierea in fisier</h5>
                <h6>Varianta neformatata</h6>
                <code class="px-3">
size_t fread( void *ptr, size_t size, size_t nmemb, FILE *stream);
size_t fwrite( const void *ptr, size_t size, size_t nmemb, FILE *stream);
</code>
                <ul>
                    <li>
                        ptr - pointer la un buffer destinatie pentru datele citite, respectiv sursa pentru cele scrise
                    </li>
                    <li>size - dimensiunea unui bloc (record) de citit/scris in bytes</li>
                    <li>nmemb - numarul de blocuri (records) de citit/scris</li>
                    <li>stream - pointer la fisierul din care se citeste/in care se scrie</li>
                    <li>Retur: numarul de blocuri (records) citite/scrise cu succes</li>
                </ul>
                <h6>Varianta formatata</h6>
                <p>
                    Familii de functii bazate pe utilizarea de specificatori de format pentru formatarea datelor (ex.: "%d" - intreg, etc)
                </p>
                <p>
                    Signatura tipica: functie (destinatie/sursa, specificator de format, date scrise/citite);
                </p>
                <p>
                    Scriere
                </p>
                <code class="px-3">
int printf(const char *format, ...); - scrie implicit la stdout
int fprintf(FILE *stream, const char *format, ...); - scrie in fisierul specificat de stream
int sprintf(char *str, const char *format, ...); - scrie intr-un buffer de caractere specificat de str
</code>
                <p>Citire (similar cu cele de la scriere)</p>
                <code class="px-3">
int scanf( const char *format, ...);
int fscanf( FILE *stream, const char *format, ...);
int sscanf( const char *str, const char *format, ...);
</code>
                <p>
                    Returneaza numarul de caractere scrise/citite fara terminatorul de sir adaugat implicit ('\0') si o valoare negativa in caz de eroare</p>
                <h6>Varianta bazata pe functii cu efect la nivel de caracter si linie</h6>
                <p>
                    Este vorba de familiile de functii utilizate pentru a scrie/citi cate un caracter sau o linie din fisier la un singur apel</p>
                <code class="px-3">
int fgetc(FILE *stream);			- citeste un caracter din stream
char *fgets(char *s, int size, FILE *stream);	- citeste size-1 caractere din stream pana la maxim sfarsitul liniei curente
int getc(FILE *stream);				- la fel ca fgetc
int getchar(void);				- citeste un caracter de la stdin implicit
char *gets(char *s);				- citeste o linie de la stdin implicit

int fputc(int c, FILE *stream);			- scrie un caracter in stream
int fputs(const char *s, FILE *stream);		- scrie o linie in stream
int putc(int c, FILE *stream);			- la fel ca fputc
int putchar(int c);				- scrie un caracter la stdout implicit
int puts(const char *s);			- scrie o linie la stdout implicit
</code>
            </li>

            <li>
                <h5>Functii pentru obtinerea starii fisierului</h5>
                <code class="px-3">
int feof( FILE *stream);
int ferror( FILE *stream);
void clearerr( FILE *stream);
</code>
                <ul>
                    <li>
                        feof - in cazul incercarii de citire dupa ce se ajunge la finalul fisierului va fi setat un flag intern de End Of File iar valoarea returnata de aceasta functie va fi diferita de 0
                    </li>
                    <li>
                        ferror - returneaza o valoare nenula daca un flag intern de eroare al fisierului este setat (de exemplu daca incercam sa scriem intr-un fisier deschis doar cu drepturi de citire)
                    </li>
                    <li>clearerr - reseteaza flagurile de EOF si de eroare</li>
                </ul>
            </li>
            <br/>
            <li>
                <h5>Functii de pozitionare in fisier</h5>
                <code class="px-3">
int fseek( FILE *stream, long offset, int whence);
long ftell( FILE *stream);
void rewind( FILE *stream);
</code>
                <ul>
                    <li>fseek - seteaza pozitia in fisier fata de referinta; argumentele sunt similare lseek</li>
                    <li>ftell - returneaza pozitia curenta in fisier</li>
                    <li>rewind - seteaza pozitia in fisier la 0</li>
                </ul>
            </li>

        </ul>

        <p>
            In general, in cazul esecului unei functii din cele mentionate, codul de eroare va fi retinut in variabila globala errno. Pentru detalii asupra diverselor coduri de eroare consultati intrarea din manual corespunzatoare functiei (in general man 2 functie sau man 3 functie)</p>
        <br/>

        <h4>Lucrul cu directoare</h4>
        <p>
            Operatiile legate de accesul la directoare sunt facilitate prin structurile de date si functiile puse la dispozitie de headerul dirent.h<br/>
            Structurile de date necesare pentru operatiile cu directoare sunt: <br/>
            DIR - reprezinta, s-ar putea spune, intrarea efectiva pe disc de tip director, in sensul unui stream - fisier - ce contine o serie de intrari (subdirectoare si alte fisiere)<br/>
            struct dirent - reprezinta o structura de informatii asociata unei structuri DIR ce contine diverse informatii relativ la o intrare din respectivul director cum ar fi numele in campul <i>d_name</i>
            de tip vector de char sau tipul intrarii (fisier sau director) in campul <i>d_type</i><br/>
            Functiile disponibile pentru lucrul cu directoare sunt urmatoarele:</p>
        <ul>

            <li>
                <h5>opendir()</h5> - "deschiderea" unui director
                <code>DIR* opendir(const char* dirname)</code>
                <ul>
                    <li>dirname - pointer la calea respectivului director</li>
                    <li>
                        retur - un pointer la o structura DIR, corespunzand primei intrari din respectivul director in caz de succes si null in caz de eroare
                    </li>
                </ul>
            </li>
            <br/>
            <li>
                <h5>readdir()</h5> - citirea informatiilor despre o intrare din director
                <code>struct dirent* readdir(DIR* dirp)</code>
                <ul>
                    <li>dirp - pointer la o intrare din cadrul directorului</li>
                    <li>
                        retur - un pointer la o structura dirent corespunzatoare intrarii indicate de pointerul DIR, urmata de avansarea la urmatoarea intrare din acelasi director sau null in caz ca nu mai exista alta intrare si de asemeni in caz de eroare (cu diferenta ca in acest ultim caz este setata si variabila errno)
                    </li>
                </ul>
            </li>
            <br/>
            <li>
                <h5>rewinddir()</h5> - repozitionarea la prima intrare din cadrul directorului
                <pre>void rewinddir(DIR* dirp)</pre>
                <ul>
                    <li>
                        dirp - pointer la o intrare oarecare din cadrul directorului in care se realizeaza repozitionarea
                    </li>
                </ul>
            </li>
            <br/>
            <li>
                <h5>telldir()</h5> - obtinerea indexului unei intrari din cadrul directorului
                <code>off_t telldir(DIR* dirp)</code>
                <ul>
                    <li>dirp - pointer la o intrare din cadrul directorului</li>
                    <li>
                        retur - un intreg ce reprezinta pozitia curenta a intrarii in cadrul directorului si -1 in caz de eroare
                    </li>
                </ul>
            </li>
            <br/>
            <li>
                <h5>seekdir()</h5> - pozitionarea la o anumita intrare in cadrul directorului
                <code>void seekdir(DIR *dir, off_t offset)</code>
                <ul>
                    <li>dir - pointer la intrarea curenta in cadrul directorului</li>
                    <li>offset - noua pozitie care va indica intrarea curenta</li>
                </ul>
            </li>
            <br/>
            <li>
                <h5>closedir()</h5> - "inchiderea" directorului
                <code>int closedir(DIR* dirp)</code>
                <ul>
                    <li>dirp - pointer la o intrare in cadrul directorului</li>
                    <li>
                        retur - 0 daca inchiderea s-a efectuat cu succes, insemnand ca pointerul dirp nu va mai fi valid pentru respectivul director, sau -1 in caz de esec
                    </li>
                </ul>
            </li>

        </ul>
        <br/>

        <h4>Managementul memoriei - quick reminder</h4>

        <p>
            In aceasta sectiune reamintim principalele functii de management a memoriei din limbajul C. Acestea cer includerea in program a stdlib.h:</p>

        <ul>

            <li>
                <h5>malloc()</h5> - alocarea neinitializata a unui bloc de memorie
                <code>void *malloc(size_t size);</code>
                <ul>
                    <li>size - numarul de octeti de alocat</li>
                    <li>retur - pointer la locatia de memorie alocata, NULL in caz de eroare</li>
                </ul>
            </li>
            <br/>
            <li>
                <h5>calloc()</h5> - alocarea initializata cu 0 a unui bloc de memorie
                <code>void *calloc(size_t nmemb, size_t size);</code>
                <ul>
                    <li>nmemb - numarul de blocuri de alocat</li>
                    <li>size - dimensiunea in octeti de alocat</li>
                    <li>retur - pointer la locatia de memorie alocata, NULL in caz de eroare</li>
                </ul>
            </li>
            <br/>
            <li>
                <h5>free()</h5> - eliberarea unui bloc de memorie
                <code>void free(void *ptr);</code>
                <ul>
                    <li>ptr - pointer la o locatie de memorie alocata cu una din functiile anterioare</li>
                </ul>
            </li>
        </ul>
        <br/>

        <h4>Exercitii</h4>
        <p>
            1. Ce efect are urmatoarea linie de comenzi: echo <code>who | cut -c1-9 | sort | uniq >> users</code>? (hint: folositi man pentru a afla efectul comenzilor). Redenumiti fisierul 'users' in 'accounts' si copiati-l intr-un subdirector 'users' creat in directorul curent.
        </p>
        <p>
            2. Sa se afiseze toti utilizatorii care au numele conturilor terminate in x.
        </p>
        <code>cat /etc/passwd | cut -f1 -d: | grep x$</code>
        <p>
            3. Scrieti un program in C care sa afiseze eroare daca nu a primit niciun argument, respectiv primul argument.
        </p>
        <code class="px-3">
#include &lt;stdio.h&gt;

int main(int argc, char* argv[])
{
if(argc<2)
{
printf("Nu ai introdus niciun parametru!");
}
else
{
printf("%s",argv[1]);
}

return 1;
}
        </code>
        <p>
            4. Sa se scrie un program C care primeste de la linia de comanda numele unui fisier si afiseaza numarul de aparitii pentru fiecare caracter ce apare in acel fisier.
        </p>
        <code class="px-3">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;sys/types.h&gt;
#include &lt;sys/stat.h&gt;
#include &lt;fcntl.h&gt;

int main (int argc, char* argv[])
{
int file;
int count[256];
char ch;
int r;
int i;

if (argc == 1)
{
printf("Argumente insuficiente");
exit(1);
}

for (i=0; i<256; i++) {
count[i] = 0;
}

file = open(argv[1], O_RDONLY);

if (file == -1)
{
printf("Eroare la deschidere fisier");
exit(2);
}

while(1)
{
r = read(file, &ch, 1);
if (r == -1)
{
printf("Eroare la cititre");
exit(3);
}

if (r == 0) break;

count[ch]++;
}

if (close(file) == -1)
{
printf("Eroare la inchidere");
exit(4);
}

for (i=0; i<256; i++)
if (count[i])
printf("Caracterul %c cu codul ASCII %d apare de %d ori in fisier.\n", i, i, count[i]);

return 0;
}
        </code>
        <br/>
        <br/>
        <h6>Studiu individual</h6>
        <p>
            5. Acelasi lucru ca la (4.), doar ca programul primeste un <b>director</b> ca argument si se vor numara toate aparitiile pentru fiecare caracter din fiecare fisier alfat in directorul primit.
        </p>
        <p>
            6. Acelasi lucru ca la (5.), doar ca directorul primit ca argument <b>poate contine subdirectoare</b>.
        </p>

        <h4>Bibliografie</h4>
        <p><a href="https://profs.info.uaic.ro/~eonica/rc/lab01.html">Emanuel Onica - Retele de Calculatoare 2017</a></p>
    </v-container>

</template>

<script>
    export default {
        data() {
            return {};
        },
    };
</script>
