<template>
  <div class="container">
    <div class="btn-panel">
      <button @click="prevImage">Prev</button>
      <button @click="nextImage">Next</button>
      <button @click="playImage" :class="intervalId ? 'active' : ''">
        {{ intervalId ? "Stop" : "Play" }}
      </button>
    </div>
    <div>영국 > 흑인 > 산 > 맥주 > 골목 ></div>
  </div>
  <div class="img-container">
    <img v-if="carousel" :src="currentImageUrl" alt="" />
  </div>
</template>
<script>
import carousel from "../classes/carousel";
export default {
  data() {
    return {
      images: null,
      carousel: null,
      currentImageUrl: null,
      intervalId: null,
    };
  },
  methods: {
    playImage() {
      if (!this.intervalId) {
        this.intervalId = setInterval(() => {
          this.nextImage();
        }, 1000);
      } else {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    nextImage() {
      const nextImage = this.carousel.nextImage();
      this.currentImageUrl = nextImage.url;
    },
    prevImage() {
      const prevImage = this.carousel.prevImage();
      this.currentImageUrl = prevImage.url;
    },
  },
  mounted() {
    this.carousel = new carousel();
    this.carousel.addImage(
      "https://images.unsplash.com/photo-1674574124792-3be232f1957f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    );
    this.carousel.addImage(
      "https://images.unsplash.com/photo-1687226197732-f91552499640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    );
    this.carousel.addImage(
      "https://images.unsplash.com/photo-1687190380431-c7cef1378247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    );
    this.carousel.addImage(
      "https://images.unsplash.com/photo-1687193913636-f48ac75b089b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80"
    );
    this.carousel.addImage(
      "https://images.unsplash.com/photo-1687184758976-69de7725cfde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    );
    this.currentImageUrl = this.carousel.images.current.url;
  },
};
</script>
<style scoped>
.container {
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
}
.btn-panel {
  display: flex;
  column-gap: 1rem;
}
.img-container {
  display: flex;
  padding-top: 50px;
  justify-content: center;
}
.active {
  background-color: salmon;
}
</style>
