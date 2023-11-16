const {createApp} = Vue
createApp({
    data(){
        return {
            slides : [
                {
                    immagine : "https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg",
                    titolo : "Tramonto sulla spiaggia",
                    descrizione : "Un meraviglioso tramonto con colori caldi che si riflettono sull\'acqua."
                },
                {
                    immagine : "https://img.freepik.com/free-photo/beautiful-shot-mountains-trees-covered-snow-fog_181624-17590.jpg",
                    titolo : "Montagne innevate",
                    descrizione : "Un panorama mozzafiato delle montagne coperte di neve."
                },
                {
                    immagine : "https://img.freepik.com/free-photo/countryside-field-sunny-day-countryside_181624-24010.jpg",
                    titolo : "Campi verdi",
                    descrizione : "Vaste distese di campi verdi che si estendono all\'orizzonte."
                }
            ],
            srcImmagine : "",
            h2Immagine : "",
            pImmagine : "",
            i : 0,
            autoPlay : ""     
        }
    },
    methods : {
        mostraFoto : function(){
            this.srcImmagine = this.slides[this.i].immagine;
            this.h2Immagine = this.slides[this.i].titolo;
            this.pImmagine = this.slides[this.i].descrizione;
        },
        scorriAvanti : function(){
            if(this.i < (this.slides.length-1)){
                this.i++;
            }else{
                this.i = 0;
            }
        },
        scorriIndietro : function(){
            if(this.i == 0){
                this.i = (this.slides.length - 1);
            }else{
                this.i--;
            }
        },
        stopAutoPlay : function(){
            clearInterval(this.autoPlay);
        }
    },
    mounted(){
        this.autoPlay = setInterval(this.scorriAvanti, 3000);
    }
}).mount('#app')