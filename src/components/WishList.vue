<template>
    <div class="wishlist">
        <div class="spark-logo flex-image"></div>
        <div class="snta-logo flex-image"></div>
        <h2 class="mobile">
            {{ wishlistTitle }}
        </h2>
        <p class="bodytext mobile">
            See our staff instore or share your SNTA list to help you shop the smart
            way this Christmas.
        </p>

        <SpineButton buttonText="Share Wishlist" :onClick="share"></SpineButton>
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
    created() {
        //get query string for wishlist type
        const urlParams = new URLSearchParams(window.location.search);
        const typeParam = urlParams.get("type");
        //remove all spaces from wishlist type

        if (typeParam !== null) {
            const wishlistType = typeParam.replace(/\s/g, "").toLocaleLowerCase();
            //get products for wishlist type
            this.products = sntaData.products.filter((product) => {
                return (
                    product.cat!.includes(wishlistType) || product.cat === "giftcard"
                );
            });
            // sentences is type {string: string}
            const sentences = {
                musiclover: "You've got a Music Lover who's now easy to shop for",
                gamer: "You've got a Gamer who's now easy to shop for.",
                moviebuff: "You've got a Movie Buff who's now easy to shop for.",
                entertainer: "You've got an Entertainer who's now easy to shop for.",
            };

            this.wishlistTitle = (sentences as any)[wishlistType];
        }
    },
    data() {
        return {
            type: "music",
            products: sntaData.products,
            wishlistTitle:
                "Based off your answers, you're shopping for a Music Lover",
        };
    },

    methods: {
        async share() {
            const shareData = {
                title: "SNTA Wishlist",
                url: window.location.href,
            };
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error("Share failed:", err.message);
            }
        },
    },
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
    background-image: url("/img/spark-logo-only.png");
    margin-top: 20px;
}

.snta-logo {
    height: 50px;
    width: 165px;
    background-image: url("/img/SNTA.png");

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
