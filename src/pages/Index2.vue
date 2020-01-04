<template>
<div>
   <div class="q-pa-md row justify-center">
    <q-card
      v-touch-hold.mouse="handleHold"
      class="custom-area cursor-pointer bg-primary text-white shadow-2 relative-position row flex-center"
    >
      <div v-if="info" class="custom-info">
        <pre>{{ info }}</pre>
      </div>
      <div v-else class="text-center">
        Click/touch and hold for at least 600ms.
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
      <canvas ref="my-canvas" width="1000" height="1000"></canvas>
      <slot></slot>
      </div>
      </div>
      </q-card>
    </div>

  </div>    



</template>

<script>
export default {
  data() {
    return {
      info: null,
      datos:[],
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
			constructor(PP, SI=null,SD=null,II=null,ID=null) 
			{	
                this.pp  = new Punto(PP[0],PP[1]);

				this.si = SI;
				this.sd = SD;
                this.ii = II;
				this.id = ID;
			}
		}   
		class kdtree2d {
			constructor() 
			{	
                this.raiz = null;
			}

			insertar(valor)
			{	
            //     if (this.raiz==null)
            //     this.raiz = new Nodo((valor),0); //valor[g]
            // else
				this.ins(valor,this.raiz);
                //console.warn(valor,this.raiz)
			}
			ins(valor, R, eje)
			{	
                console.log(valor)
                const PP_x =valor[0];
                const PP_y =valor[1];

            if (this.raiz==null)
                this.raiz = new Nodo((valor)); //valor[g]
            else{
                if(PP_x<R.pp.x){
                    if(PP_y<R.pp.y)
        //             Ins(PP,R->Izq,1);
                        { if (R.si==null)
                              R.si = new Nodo((valor));
                        else
                            this.ins(valor,R.si);
                        }
        //         else
        //             Ins(PP,R->Der,1);
                    else
                    {	if (R.ii==null)
                            R.ii = new Nodo((valor));
                        else
                            this.ins(valor,R.ii);
                    }
                }
                else
                {   if(PP_y<R.pp.y)
        //             Ins(PP,R->Izq,0);
                        { if (R.sd==null)
                                R.sd = new Nodo((valor));
                        else
                            this.ins(valor,R.sd);
                        }
        //         else
        //             Ins(PP,R->Der,0);
                    else
                    {	if (R.id==null)
                            R.id = new Nodo((valor));
                        else
                            this.ins(valor,R.id);
                    }
                }
            }

             //   console.log( R.pp);
                
			}
			mostrar(canvas2d,x,y,a)
			{	if (this.raiz!=null)
					this.mos(canvas2d,this.raiz,x,y,a);
			}
			mos(canvas2d,R,x,y,a)
			{	                
                if (R.si!=null)
			    	this.mos(canvas2d,R.si,x-a/2,y+50,a/4);
				canvas2d.beginPath();
                canvas2d.fillText(R.pp.x,x,y);
                canvas2d.fillText(R.pp.y,x,y+10);
				canvas2d.stroke();

				if (R.sd!=null)
					this.mos(canvas2d,R.sd,x-a/6,y+50,a/4);

                if (R.ii!=null)
					this.mos(canvas2d,R.ii,x+a/6,y+50,a/4);

                if (R.id!=null)
					this.mos(canvas2d,R.id,x+a/2,y+50,a/4);
			}
		}
		var A=new kdtree2d();
		// A.insertar([114,143,0]);
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
        
          A.mostrar(canvas2d,500,10,500); 
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