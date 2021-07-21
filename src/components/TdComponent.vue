<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
import EventBus from "@/components/EventBus";

export default {
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Number,
  },
  methods: {
    onClickTd() {
      if (this.cellData) return;

      EventBus.$emit('clickTd', this.rowIndex, this.cellIndex); // emit을 적으면 Event.on이 실행됨

    }
  }
};
</script>