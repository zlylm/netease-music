import { baseUrl } from './config.js'

function httpCommon(params){
	let {url, method='GET', data} = params
	return new Promise((resolve, reject)=>{
		uni.request({
			url: baseUrl + url,
			method,
			data,
			success: res=> {
				if (res.statusCode == 200) {
					resolve(res)
				}
			},
			fail: ()=> {
				
			}
		})
	})
}

// 各个榜单数据
export function topList(){
	return httpCommon({
		url: '/toplist/detail'
	})
}

export function listDetail(listId){
	return httpCommon({
		url: '/top/list?id=' + listId
	})
}