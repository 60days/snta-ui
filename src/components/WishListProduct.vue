<template>
    <div class="wishlist-product">
        <div class="product-image flex-image" v-bind:style="{
          backgroundImage: 'url(img/product_images/' + product.image + ')',
        }"></div>
        <h2 class="product-title">{{ product.name }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <a :href="product.url" class="add-to-cart solid-purple-button">
            Add to cart
        </a>
    </div>
</template>

<script lang="ts">
import SntaButton from "./SntaButton.vue";
import { defineComponent } from "vue";
import sntaData from "@/data/snta_data.json";

export default defineComponent({
    name: "WishListProduct",
    components: {},
    created() { },
    data() { },
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
});
</script>

<style scoped>
.wishlist-product {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: white;
    border-radius: 5px;
    margin-left: 20px;
    margin-right: 20px;
    width: calc(100% - 40px);
    margin-bottom: 24px;
    color: #270027;
    padding: 20px;
}

.product-image {
    height: 250px;
    width: 100%;
    background-size: contain;
}

.product-title {
    color: #270027;
    font-family: "avenirmedium";
    font-size: 24px;
    margin-bottom: 12px;
}

.product-description {
    text-align: center;
    margin-bottom: 20px;
}
</style>
