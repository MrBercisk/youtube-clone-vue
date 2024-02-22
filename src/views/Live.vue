<template>
    <div class="home">
        <Navbar />
        <div class="content">
            <div class="container ms-4">
                <div class="row">
                    <div class="col-md-4" v-for="(card, index) in cards" :key="index">
                        <div class="card border-0" style="width: 100%">
                            <img :src="card.imgUrl" class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-2">
                                        <img :src="card.profil" width="60px" alt="">
                                    </div>
                                    <div class="col-md-10">
                                        <h5 class="card-title">{{ card.judul }}</h5>
                                        <p class="card-subtitle">{{ card.name }}<font-awesome-icon icon="check"
                                                class="check-icon" /> </p>
                                        <p class="card-text">{{ card.penonton }}</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>

import Navbar from '@/components/Navbar.vue';

export default {
    name: 'Live',
    components: {
        Navbar,

    },
    data() {
        return {
            cards: []
        }
    },
    mounted() {
        fetch('data/data.json')
            .then(response => response.json())
            .then(data => {
                const liveKategori = data.filter(cards => cards.kategori === 'live');
                this.cards = liveKategori
            })
            .catch(error => console.error(error))
    },
};
</script>
  
  
  