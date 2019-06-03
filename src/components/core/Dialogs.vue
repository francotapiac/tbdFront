<template>
    <v-container>
        <!--dialogo dinámico-->
        <v-dialog
        v-model="loading.estado"
        hide-overlay
        persistent
        width="300"
        >
            <v-card :color="loading.color" dark>
                <v-card-text>
                {{loading.titulo}}
                <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                >
                </v-progress-linear>
            </v-card-text>
        </v-card>
        </v-dialog>
    </v-container>
</template>

<script>

import {mapState} from "vuex";
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState(['loading'])
    }
    
}
</script>

