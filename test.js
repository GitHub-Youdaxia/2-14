var data = [{
    username:'张三',
    goodsname:'iphone',
    time:'2017-02-29',
    money:'1888.00',
},
{
    username:'李四',
    goodsname:'ipad',
    time:'2017-02-28',
    money:'10000.00',
},
{
    username:'楼下小黑',
    goodsname:'mac',
    time:'2017-02-28',
    money:'5000.00',
},
{
    username:'隔壁老王',
    goodsname:'s8',
    time:'2017-02-27',
    money:'10000.00',
}]
var result = data.reduce((result,cur,arr,index)=>{
	let ele = result.find(item => { return item.time === cur.time})
    if(!ele){
			result.push({
				time:cur.time,
				total:+cur.money,
				data:[cur]
			})
    }else{
			ele.total+=+cur.money
			ele.data.push(cur)
		}
		return result
},[])
console.log(result);