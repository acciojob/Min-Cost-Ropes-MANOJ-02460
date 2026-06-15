function mincost(arr)
{ 
//write your code here
// return the min cost

	let mincost = 0;

	while(arr.length>1){

		arr.sort((a,b)=>a-b);

		let first = arr.shift();

		let second = arr.shift();

		let newRope = first+second;

		mincost+= newRope;

		arr.push(newRope)

		
	}

	return mincost
  
}

module.exports=mincost;
