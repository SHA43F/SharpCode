let l=arr.length

let maxs=0

let maxrow=-1

for(let i=0;i<l;i++)

{

   let count=0

   for(let j=0;j<arr[i].length;j++)

   {

       if(arr[i][j]==1)

       {

           count+=1

       }

       if(count>maxs)

       {

           maxs=count

           maxrow=i

       }

   }

}

console.log(maxrow)
