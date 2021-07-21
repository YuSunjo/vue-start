import Vue from 'vue';
import VueRouter from 'vue-router';
import LottoGenerator from "@/components/LottoGenerator";
import TieTactoe from "@/components/TieTactoe";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',   // 기본은 hash  /#/ 특징: 새로 고침하면 화면이 잘 나옴
    routes:[
        {path: '/lotto-generator', component: LottoGenerator},
        {path: '/tic', component: TieTactoe},
    ]
});