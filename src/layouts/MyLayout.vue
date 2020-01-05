<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
        
          <img width="30" src="https://previews.123rf.com/images/yupiramos/yupiramos1801/yupiramos180105189/93332526-ilustraci%C3%B3n-de-vector-de-celebraci%C3%B3n-de-dibujos-animados-de-%C3%A1rbol-de-navidad-kawaii.jpg" alt="">
            Arbolitos!! 
        </q-toolbar-title>

        <div>By:Antony Japura Paredes</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Arbolitos</q-item-label>

        <q-item clickable tag="a"  to="1">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Arbol Binario</q-item-label>
        
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="2">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Arbol Kdtree</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="3">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Arbol QuadTree</q-item-label>
        
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="4">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Arbol VpTree</q-item-label>
  
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
