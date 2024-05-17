<script setup>
import { defineProps } from "vue";
import lib from "@/scripts/lib.js";

const props = defineProps({
  item: {
    type: Object,
  },
});
</script>
<template>
  <div class="col">
    <div class="card shadow-sm">
      <span
        class="img"
        :style="{ backgroundImage: `url(${props.item.imgPath}` }"
      />
      <div class="card-body">
        <p class="card-text">{{ props.item.name }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              Edit
            </button>
          </div>
          <small class="text-body-secondary"
            >{{ lib.getNumberFormatted(props.item.price) }} 원</small
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card .img {
  display: inline-block;
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
}
</style>