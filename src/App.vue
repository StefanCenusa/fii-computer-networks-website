<template>
    <v-app id="example-1" toolbar footer dark>
        <v-navigation-drawer persistent v-model="drawer" dark>
            <v-list dense>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title >
                            <span>Menu</span>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                <template v-for="(item, index) in items">
                    <v-list-tile :href="item.href" :to="{name: item.href}">
                        <v-list-tile-action>
                            <v-icon light v-html="item.icon"></v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed dark>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Retele de calculatoare</v-toolbar-title>
        </v-toolbar>
        <main>
            <v-fade-transition mode="out-in">
                <router-view></router-view>
            </v-fade-transition>
        </main>
        <v-footer dark>
            <span>© Retele de Calculatoare 2017-2018</span>
        </v-footer>
    </v-app>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        drawer: true,
        items: [{
          href: 'home',
          router: true,
          title: 'Home',
          icon: 'home',
        }, {
          href: 'lab1',
          router: true,
          title: 'Laboratorul 1',
          icon: 'label',
        },
        {
            href: 'lab2',
            router: true,
            title: 'Laboratorul 2',
            icon: 'label',
            },
            {
                href: 'lab3',
                router: true,
                title: 'Laboratorul 3',
                icon: 'label',
            },
            {
                href: 'lab4',
                router: true,
                title: 'Laboratorul 4',
                icon: 'label',
            },
            {
                href: 'lab5',
                router: true,
                title: 'Laboratorul 5',
                icon: 'label',
            },
            {
                href: 'lab6',
                router: true,
                title: 'Laboratorul 6',
                icon: 'label',
            },
            {
                href: 'lab7',
                router: true,
                title: 'Laboratorul 7',
                icon: 'label',
            },
            {
                href: 'lab9',
                router: true,
                title: 'Laboratorul 9',
                icon: 'label',
            },
            {
                href: 'lab10',
                router: true,
                title: 'Laboratorul 10',
                icon: 'label',
            }
        ],
      };
    }
  };
</script>

<style lang="stylus">
    @import '../node_modules/vuetify/src/stylus/main';
    @import 'stylus/main.styl';
</style>
