<template>
<div>
   <div class="q-pa-md row justify-center">
    <q-card class="my-card bg-purple-5 text-white">
      <q-card-section>
        <div class="text-h6">ARBOL Binario</div>
        
        <div class="text-subtitle2">
          
          <q-avatar square>
            <img src="statics/unnamed.jpg">
          </q-avatar>   yosef gomez
        </div>
      </q-card-section>

      <q-card-actions class="justify-center">
        <q-btn flat @click="arbolgg1('genera')">Generar Arbol</q-btn>
      </q-card-actions>
    </q-card>

    {{datos}}


  </div>
    <div class=" q-pa-md q-gutter-md row items-start">
      <q-input
        v-model.number="model"
        type="number"
        filled
        style="max-width: 200px"
      />
      <q-btn color="green" @click="handleHold"> agregar</q-btn>
    </div>
    <div class="q-pa-sm">
      <q-card
        class=" shadow-2 row flex-center"
      >
      <div  class="text-center">
      <div class="my-canvas-wrapper">
        <br>
      <canvas ref="my-canvas" width="1000" height="1000"></canvas>
      <slot></slot>
      </div>
      </div>
      </q-card>
    </div>
    <!-- <TreeChart :json="treeData" /> -->
  </div>    



</template>

<script>
import TreeChart from "vue-tree-chart";
export default {
  components: {
    	TreeChart
	},
  data() {
    return {
      info: null,
      model:'',
      datos:[],
      treeData: {
          name: 'asd',
          image_url: "asd",
        // children: [
        //   {
        //     name: 'children1',
        //     image_url: "https://static.refined-x.com/avat1.jpg"
        //   },
        //   {
        //     name: 'children2',
        //     image_url: "https://static.refined-x.com/avat2.jpg",
          
        //   },
        // ]
      },
      // By creating the provider in the data property, it becomes reactive,
      // so child components will update when `context` changes.
      provider: {
        // This is the CanvasRenderingContext that children will draw to.
        context: null
      }
    }
  },
    methods: {
    handleHold () {
      if(this.model != ''){
        this.datos.push(this.model);
        this.arbolgg('push')
        this.model='';
      }
      

        
    },
    arbolgg(recive){
        console.log('tag', recive)
        // var point_x = info.position.top;
        // var point_y = info.position.left;
        // this.datos.push({point_x,point_y});
    // We can't access the rendering context until the canvas is mounted to the DOM.
    // Once we have it, provide it to all child components.
    this.provider.context = this.$refs['my-canvas'].getContext('2d')

    // Resize the canvas to fit its parent's width.
    // Normally you'd use a more flexible resize system.
    this.$refs['my-canvas'].width = this.$refs['my-canvas'].parentElement.clientWidth
    this.$refs['my-canvas'].height = this.$refs['my-canvas'].parentElement.clientHeight
    
    		class Nodo {
			constructor(clave_xx,clave_yy,izq=null,der=null) 
			{	this.clave = clave_xx;
				this.clave_y = clave_yy;
				this.izq = izq;
				this.der = der;
			}
		}
		class Arbol {
			constructor() 
			{	this.raiz = null;
			}
			insertar(valor)
			{	if (this.raiz==null)
					this.raiz = new Nodo(valor);
				else
					this.ins(valor,this.raiz);
			}
			ins(valor, R)
			{	if (valor<R.clave) //genera
				{	if (R.izq==null)
						R.izq = new Nodo(valor);
					else
						this.ins(valor,R.izq);
				}
				else
				{	if (R.der==null)
						R.der = new Nodo(valor);
					else
						this.ins(valor,R.der);
				}
			}
			mostrar(canvas2d,x,y,a)
			{	if (this.raiz!=null)
					this.mos(canvas2d,this.raiz,x,y,a);
			}
			mos(canvas2d,R,x,y,a)
			{	if (R.izq!=null)
					this.mos(canvas2d,R.izq,x-a,y+50,a/2);
				canvas2d.beginPath();
				canvas2d.fillText(R.clave,x,y);
		
				canvas2d.stroke();

				if (R.der!=null)
					this.mos(canvas2d,R.der,x+a,y+50,a/2);
			}
		}
		var A=new Arbol();
		// A.insertar(17);
		// A.insertar(9);
		// A.insertar(4);
		// A.insertar(14);
		// A.insertar(21);
		// A.insertar(9);
		// A.insertar(4);
		// A.insertar(14);
		// A.insertar(21);

		const canvas = document.querySelector("#canvas"); // Obtener el elemento del DOM
		//canvas.width = 1000, canvas.height = 1000;
		const canvas2d = this.$refs['my-canvas'].getContext('2d')


        //console.log(point);
        // for (var i = 0; i < 10; i++) {
        //     var point = {
        //         x: Math.floor(Math.random()*20)
        //     };
        //   A.insertar(point.x);
        // }
        for (var i = 0; i < this.datos.length; i++) {
            var point = {
                x: this.datos[i],

            };
           A.insertar(point.x);
        }
        
        A.mostrar(canvas2d,300,10,150); 
    },
    arbolgg1(recive){
        console.log('tag', recive)
        // var point_x = info.position.top;
        // var point_y = info.position.left;
        // this.datos.push({point_x,point_y});
    // We can't access the rendering context until the canvas is mounted to the DOM.
    // Once we have it, provide it to all child components.
    this.provider.context = this.$refs['my-canvas'].getContext('2d')

    // Resize the canvas to fit its parent's width.
    // Normally you'd use a more flexible resize system.
    this.$refs['my-canvas'].width = this.$refs['my-canvas'].parentElement.clientWidth
    this.$refs['my-canvas'].height = this.$refs['my-canvas'].parentElement.clientHeight
    
    		class Nodo {
			constructor(clave_xx,clave_yy,izq=null,der=null) 
			{	this.clave = clave_xx;
				this.clave_y = clave_yy;
				this.izq = izq;
				this.der = der;
			}
		}
		class Arbol {
			constructor() 
			{	this.raiz = null;
			}
			insertar(valor)
			{	if (this.raiz==null)
					this.raiz = new Nodo(valor);
				else
					this.ins(valor,this.raiz);
			}
			ins(valor, R)
			{	if (valor<R.clave)
				{	if (R.izq==null)
						R.izq = new Nodo(valor);
					else
						this.ins(valor,R.izq);
				}
				else
				{	if (R.der==null)
						R.der = new Nodo(valor);
					else
						this.ins(valor,R.der);
				}
			}
			mostrar(canvas2d,x,y,a)
			{	if (this.raiz!=null)
					this.mos(canvas2d,this.raiz,x,y,a);
			}
			mos(canvas2d,R,x,y,a)
			{	if (R.izq!=null)
					this.mos(canvas2d,R.izq,x-a,y+50,a/2);
				canvas2d.beginPath();
				canvas2d.fillText(R.clave,x,y);
		
				canvas2d.stroke();

				if (R.der!=null)
					this.mos(canvas2d,R.der,x+a,y+50,a/2);
			}
		}
		var A=new Arbol();
		// A.insertar(17);
		// A.insertar(9);
		// A.insertar(4);
		// A.insertar(14);
		// A.insertar(21);
		// A.insertar(9);
		// A.insertar(4);
		// A.insertar(14);
		// A.insertar(21);

		const canvas = document.querySelector("#canvas"); // Obtener el elemento del DOM
		//canvas.width = 1000, canvas.height = 1000;
		const canvas2d = this.$refs['my-canvas'].getContext('2d')


        console.log(point);
        for (var i = 0; i < 10; i++) {
            var point = {
                x: Math.floor(Math.random()*20)
            };
          A.insertar(point.x);
        }
        // for (var i = 0; i < this.datos.length; i++) {
        //     var point = {
        //         x: this.datos[i],

        //     };
        //    A.insertar(point.x);
        // }
        
        A.mostrar(canvas2d,300,10,150); 
    }
    
  },

  // Allows any child component to `inject: ['provider']` and have access to it.
  provide () {
    return {
      provider: this.provider
    }
  },

  mounted () {
  

  }
}
</script>
<style lang="sass" scoped>
.custom-area
  width: 50%
  height: 200px
  border-radius: 3px
  padding: 8px

.custom-info pre
  width: 190px
  font-size: 12px
</style>