import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import cinema from './Cinema'
import movie from './Movie'
import mine from './Mine'
import notfound from './notfound'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		cinema,movie,mine,notfound,
		{
			path:'/',
			redirect:'movie'
		},
		{
			path:"/*",
			redirect:'/notfound'
		},
		
	]
})
