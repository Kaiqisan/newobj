export default {
	path: '/movie',
	component: () => import('@/views/Movie'),
	children: [
		{
			path:'city',
			component:() => import('@/components/City')
		},
		{
			path:'nowPlaying',
			component:() => import('@/components/NowPlaying')
		},
		{
			path:'willPlaying',
			component:() => import('@/components/WillPlaying')
		},
		{
			path:'search',
			component:() => import('@/components/Search')
		},
		{
			path:'/movie',
			redirect:'/movie/nowPlaying'
		}
		
	]

	
}
