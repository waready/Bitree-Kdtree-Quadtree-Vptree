<template>
  <div class="q-pa-md">
    <q-parallax>
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax2.jpg">
        
      </template>
        
      <template v-slot:content="scope">
      
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.7 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 20) + '%',
            left: 0,
            right: 0
          }"
        >
        <div class="text-h3 text-white text-center">Feliz Navidad & Prospero año Nuevo </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Arbol_Navidad_03.gif/220px-Arbol_Navidad_03.gif" style="width: 150px; height: 210px">
          
          <div class="text-h3 text-white text-center">Arboles </div>
            <q-btn color="green" class="center" label="Iniciar" to="1" />
        </div>
      </template>
    </q-parallax>
  </div>
</template>