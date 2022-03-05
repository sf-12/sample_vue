import Vue from 'vue';
import Router from 'vue-router'; // urlごとに異なるページを表示する公式プラグイン
import Home from './pages/Home.vue';

Vue.use(Router) // vue-routerプラグインを使用する宣言

export default new Router({
	// ここでurlとページを対応させる
	mode: 'history',
	routes: [
			{path: '/', component: Home}
	]
});