<template>
    <div class="wishlist">
        <div class="spark-logo flex-image"></div>
        <div class="snta-logo flex-image"></div>
        <h2 class="mobile">
            Based off your answers, you’re shopping for a Music Lover
        </h2>
        <p class="bodytext mobile">
            See our staff instore or share your SNTA list to help you shop the smart
            way this Christmas.
        </p>

        <SpineButton buttonText="Share Wishlist"></SpineButton>
        <WishListProduct :product="product" v-for="product in products" :key="product.id" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Product } from "@/data/types";
import sntaData from "@/data/snta_data.json";
import WishListProduct from "./WishListProduct.vue";
import SpineButton from "./SpineButton.vue";
import SntaButton from "./SntaButton.vue";

export default defineComponent({
    name: "WishList",
    components: { WishListProduct, SpineButton },
    created() { },
    data() {
        return {
            products: sntaData.products,
        };
    },

    methods: {},
});
</script>

<style scoped>
.wishlist {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1024px;
}

.spark-logo {
    height: 70px;
    width: 165px;
    background-image: url("img/spark-logo-only.png");
    margin-top: 20px;
}

.snta-logo {
    height: 50px;
    width: 165px;
    background-image: url("img/SNTA.png");

    margin-top: 20px;
    margin-bottom: 40px;
}

h2 {
    padding-top: 12px;
}

.bodytext {
    margin-bottom: 40px;
}
</style>
