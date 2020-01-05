<template>
<div>
   <div class="q-pa-md row justify-center">
    <q-card
      v-touch-hold.mouse="handleHold"
      class="custom-area cursor-pointer bg-info text-white shadow-2 relative-position row flex-center"
    >
      <div v-if="info" class="custom-info">
        <pre>{{ info }}</pre>
      </div>
      <div v-else class="text-center">
        Click/touch and hold por 3 segundos para capturar su punto.
      </div>
    </q-card>
      {{datos}}

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
    handleHold ({ evt, ...info }) {
      this.info = info
      this.arbolgg(info);
      console.log('tag', evt)
    },
    arbolgg(info){
        console.log('tag', info.position)
        var point_x = info.position.top;
        var point_y = info.position.left;
        this.datos.push({point_x,point_y});
    // We can't access the rendering context until the canvas is mounted to the DOM.
    // Once we have it, provide it to all child components.
    this.provider.context = this.$refs['my-canvas'].getContext('2d')

    // Resize the canvas to fit its parent's width.
    // Normally you'd use a more flexible resize system.
    this.$refs['my-canvas'].width = this.$refs['my-canvas'].parentElement.clientWidth
    this.$refs['my-canvas'].height = this.$refs['my-canvas'].parentElement.clientHeight
    
     class Punto{
            constructor(xx=0,yy=0){
                this.x=xx;
                this.y=yy;
            }
        }
		class Nodo {
			constructor(PP, eje, izq=null,der=null) 
			{	
                this.pp  = new Punto(PP[0],PP[1]);
                this.eje = eje;

				this.izq = izq;
				this.der = der;
			}
		}   
		class kdtree2d {
			constructor() 
			{	
                this.raiz = null;
			}

			insertar(valor)
			{	
                if (this.raiz==null)
                this.raiz = new Nodo((valor),0); //valor[g]
            else
				this.ins(valor,this.raiz,0);
                //console.warn(valor,this.raiz,0)
			}
			ins(valor, R, eje)
			{	
                console.log( "eje", eje)
                const PP_x =valor[0];
                const PP_y =valor[1];

            // if (this.raiz==null)
            //     this.raiz = new Nodo((valor),eje); //valor[g]
            // else{
                if(R.eje==0){
                    if(PP_x<R.pp.x)
        //             Ins(PP,R->Izq,1);
                        { if (R.izq==null)
                              R.izq = new Nodo((valor),eje+1);
                        else
                            this.ins(valor,R.izq,1);
                        }
        //         else
        //             Ins(PP,R->Der,1);
                    else
                    {	if (R.der==null)
                            R.der = new Nodo((valor),eje+1);
                        else
                            this.ins(valor,R.der,1);
                    }
                }
                else
                {   if(PP_y<R.pp.y)
        //             Ins(PP,R->Izq,0);
                        { if (R.izq==null)
                                R.izq = new Nodo((valor),eje-1);
                        else
                            this.ins(valor,R.izq,0);
                        }
        //         else
        //             Ins(PP,R->Der,0);
                    else
                    {	if (R.der==null)
                            R.der = new Nodo((valor),eje-1);
                        else
                            this.ins(valor,R.der,0);
                    }
                }
           // }

             //   console.log( R.pp);
                
      }
			mostrar(canvas2d,x,y,a)
			{	if (this.raiz!=null)
          this.mos(canvas2d,this.raiz,x,y,a);

        
			}
			mos(canvas2d,R,x,y,a)
			{	if (R.izq!=null)
			    	this.mos(canvas2d,R.izq,x-a,y+50,a/2);
				canvas2d.beginPath();
                canvas2d.fillText(R.pp.x,x,y);
                canvas2d.fillText(R.pp.y,x,y+10);
                canvas2d.fillText(R.eje,x,y+20);
                
				canvas2d.stroke();

				if (R.der!=null)
					this.mos(canvas2d,R.der,x+a,y+50,a/2);
			}
    }
    console.warn('tag',this.treeData.name)   

		var A=new kdtree2d();
		 //A.insertar([point_x,point_y]);
		// A.insertar([39,147,1]);
		//  A.insertar([160,151,1]);
        //  A.insertar([76,90,0]);
		// A.insertar([54,207,0]);
		//  A.insertar([157,185,0]);
        //  A.insertar([152,84,0]);
		// A.insertar([42,104,1]);
        // A.insertar([69,167,1]);
		//  A.insertar([2,4,0]);
        //  A.insertar([1,2,1]);
		// A.insertar([9,4,0]);
		//  A.insertar([2,4,1]);
		// // A.insertar(14);
		// A.insertar(21);
		// A.insertar(9);
		// A.insertar(4);
		// A.insertar(14);
		// A.insertar(21);

		const canvas = document.querySelector("#canvas"); // Obtener el elemento del DOM
		//canvas.width = 1000, canvas.height = 1000;
		const canvas2d = this.$refs['my-canvas'].getContext('2d')


        //console.log(point);
        for (var i = 0; i < 7; i++) {
            var point = {
                x: Math.floor(Math.random()*209),
                y: Math.floor(Math.random()*249)
            };
        //    A.insertar([point.x,point.y]);

        }
        for (var i = 0; i < this.datos.length; i++) {
            var point = {
                x: this.datos[i].point_x,
                y: this.datos[i].point_y,
            };
           A.insertar([point.x,point.y]);
        }
        
        A.mostrar(canvas2d,400,10,150); 
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