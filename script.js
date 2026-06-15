function mincost(arr)
{ 
//write your code here
// return the min cost

	let minCost = 0;

	while(arr.length>1){

		arr.sort();

		let first = arr.shift();

		let second = arr.shift();

		let newRope = first+second;

		mincost+= newRope;

		arr.push(newRope)

		
	}

	return mincost
  
}

module.exports=mincost;
