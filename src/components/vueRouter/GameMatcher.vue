<template>
  <div v-if="currentGame === 'number-baseball'" ></div>
  <div v-else-if="currentGame === 'lotto-generator'" ></div>
  <div v-else>일치하는 게임이 없습니다.</div>
</template>

<script>
  import LottoGenerator from "@/components/LottoGenerator";
  export default {
    component:{
      LottoGenerator,

    },
    mounted() {
      console.log(this.$route);
      console.log(this.$router)
    },
    computed: {
      currentGame() {
        return this.$route.params.name;
      }
    }
  }
</script>

