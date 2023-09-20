var fotos = [
    {
        "foto": "img/foto1.jpg",
        "nome": "Cruze",
        "check": false
    },

    {
        "foto": "img/foto2.jpg",
        "nome": "Mobi",
        "check": false
    },

    {
        "foto": "img/foto3.jpg",
        "nome": "Uno",
        "check": false
    }
];

const mudaFoto = {
    data(){
        return{
            fotos:window.fotos
        }
    }
};

Vue.createApp(mudaFoto).mount('#app');