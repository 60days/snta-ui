<template>
    <div class="button-container">
        <div class="button-text">{{ buttonText }}</div>
        <!--<div :id="id" class="spine-button"></div>-->
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import * as spine from "@esotericsoftware/spine-player";
//import { v4 as uuidv4 } from "uuid";
export default defineComponent({
    name: "SpineButton",
    mounted() {
        console.log(document.getElementById("player"));

        // this.id = uuidv4();
        /*
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
                                                                                                */
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
.button-container {
    /* Gradient/Purple */
    width: calc(100% - 80px);
    background: linear-gradient(115.36deg,
            #2e0077 16.44%,
            #4a1097 119.39%,
            #772bcb 138.61%);
    /* White */
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 40px;
    border: 2px solid #ffffff;
    border-radius: 4px;
    height: 65px;
    -webkit-touch-callout: none;
    /* iOS Safari */
    -webkit-user-select: none;
    /* Safari */
    -khtml-user-select: none;
    /* Konqueror HTML */
    -moz-user-select: none;
    /* Old versions of Firefox */
    -ms-user-select: none;
    /* Internet Explorer/Edge */
    user-select: none;
    /* Non-prefixed */
}

.button-text {
    height: 100%;
    z-index: 1;
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.spine-button {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent !important;
}
</style>
