<template>
    <div class="button-container">
        <div class="button-text">{{ buttonText }}</div>
        <div :id="id" class="spine-button"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import * as spine from "@esotericsoftware/spine-player";
import { v4 as uuidv4 } from "uuid";
export default defineComponent({
    name: "SpineButton",
    mounted() {
        console.log(document.getElementById("player"));

        this.id = uuidv4();
        setTimeout(() => {
            var player = new spine.SpinePlayer(this.id, {
                jsonUrl: "spine/snta_ui_btn_anim.json",
                atlasUrl: "spine/snta_ui_btn_anim.atlas",
                animation: "btn_select",
                premultipliedAlpha: false,
                backgroundColor: "#00000000",

                viewport: {
                    debugRender: true,
                },
                showControls: false,
                preserveDrawingBuffer: false,
                showLoading: false,
            });
            console.log(player);
            player.play();
        }, 1);
    },
    data() {
        return {
            id: null,
        };
    },
    props: {
        buttonText: String,
    },
    methods: {},
});
</script>

<style scoped>
.button-container {}

.button-text {
    position: absolute;
    z-index: 1;
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.spine-button {
    width: 561px;
    height: 124px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent !important;
}
</style>
