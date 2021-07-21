<template>
  <div>
    <div>{{turn}}님의 턴입니다.</div>
    <table-component :table-data="tableData" />
<!--    <table-component :table-data="tableData" >-->
<!--      <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">-->
<!--        <td></td>-->
<!--      </tr>-->
<!--    </table-component>-->
<!--    이런식으로 table-component안에 태그들이 들어간것을 tableComponent.vue에서 <slot>으로 넘겨줄 수 있다. -->
    <div v-if="winner">{{winner}}님의 승리!</div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import TableComponent from './TableComponent';
import EventBus from './EventBus';
import store from './store';
export default {
  store,
  components: {
    TableComponent,
  },
  computed: {
    // winner() {
    //   return this.$store.state.winner;
    // },
    // turn() {
    //   return this.$store.state.turn;
    // }
    ...mapState(['winner', 'turn']),   // 위에 처럼 다 쓰는 것을 mapState로 한번에
    // ...mapState({
    //   winner: state => state.winner,
    //   turn: 'turn',
    //   winner2(state) {
    //     return state.winner + this.data;
    //   }
    // })
  },
  methods: {
    onChangeData() {
      // this.tableData[1][0] = 'X'; 작동하지 않음
      this.$set(this.tableData[1], 0, 'X'); // Vue.set과 동일
    },
  },
  created() {
    EventBus.$on('clickTd', this.onClickTd);
  }
};
</script>

<style>
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>