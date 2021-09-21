<template>
    <div>
        <div v-if="galeris.length > 0">
            <vueper-slides slide-image-inside autoplay>
                 <template v-slot:arrow-left>
                    <i class="icon icon-arrow-left" />
                </template>
                    <vueper-slide v-for="(galeri, i) in galeris" :key="i" :image="galeri.image" />
                <template v-slot:arrow-right>
                    <i class="icon icon-arrow-right" />
                </template>
            </vueper-slides>
        </div>
        <div v-else>
            <ContentLoader />
        </div>
    </div>
</template>

<script>
    //hook vue
    import { computed, onMounted  } from 'vue'

    //vuex
    import { useStore } from 'vuex'

    //content loader
    import { ContentLoader } from 'vue-content-loader'
    
    //vueper galeri
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'

    export default {

        components: {
            ContentLoader,
            VueperSlides, 
            VueperSlide
        },

        setup() {

            //store vuex
            const store = useStore()

            //onMounted akan menjalankan action "getGaleri" di module "galeri"
            onMounted(() => {
                store.dispatch('galeri/getGaleri')
            })

            //digunakan untuk get data state "galeris" di module "galeri" 
            const galeris = computed(() => {
                return store.state.galeri.galeris
            })

            return {
                galeris,   // <-- galeris
            }

        }

    }
</script>

<style scoped>
    .vueperslide__image {
        transform: scale(1.5) rotate(-10deg);
    }

    .vueperslide__title {
        font-size: 7em;
        opacity: 0.7;
    }
</style>