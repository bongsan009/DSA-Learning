
//=> 1-Brute-force Approach ::
const twoSumUsingBruteForceApproach = (nums, target) => {
    // Get length of the array.
    const n = nums.length;

    for(let i = 0; i < n - 1; i++)
    {
        for(let j = i + 1; j < n; i++)
        {
            let currentSum = nums[i] + nums[j];

            if(currentSum == target)
            {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}
// Time and Space Complexity
// + Time : O(n^2)
// + Space : O(1)


// => 2-Sorting Approch ::
const twoSumUsingSortingApproach = (nums, target) => {
    const A = [];

    for(let i = 0; i < nums.length; i++)
    {
        A.push([nums[i], i]);
    }

    A.sort((a, b) => a[0] - b[0]);

    let l = 0;
    let r = nums.length - 1;

    while(l < r)
    {
        let curr = A[l][0] + A[r][0];

        if(curr == target)
        {
            return [Math.min(A[l][1], A[r][1]), Math.max(A[l][1], A[r][1])]
        }else if(curr < target)
        {
            l++;
        }else{
            r--;
        }
    }
    return [-1, -1]
}
// Time and Space Complexity
// + Time : O(nlogn)
// + Space : O(n)





// Example usage :
const nums = [2, 7, 11, 15], target = 9;

let result = twoSumUsingSortingApproach(nums, target);

console.log("Result = ", result);
