**1. Two Sum**

* **Problem:** Given an array of integers `nums` and an integer `target`, return *indices* of the two numbers such that they add up to `target`.
* **Example:**
    * `nums = [2, 7, 11, 15], target = 9`
    * **Output:** `[0, 1]`
    * **Explanation:** Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.

**2. Best Time to Buy and Sell Stock**

* **Problem:** You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
* **Example:**
    * `prices = [7,1,5,3,6,4]`
    * **Output:** 5
    * **Explanation:** Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

**3. Contains Duplicate**

* **Problem:** Given an integer array `nums`, return `true` if any value appears at least twice in the array, and `false` if every element is distinct.
* **Example:**
    * `nums = [1,2,3,1]`
    * **Output:** `true`

**4. Product of Array Except Self**

* **Problem:** Given an integer array `nums`, return *an array* `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.
* **Example:**
    * `nums = [1,2,3,4]`
    * **Output:** `[24,12,8,6]`

**5. Rotate Array**

* **Problem:** Given an array, rotate the array to the right by `k` steps, where `k` is a non-negative integer.
* **Example:**
    * `nums = [1,2,3,4,5,6,7], k = 3`
    * **Output:** `[5,6,7,1,2,3,4]`
    * **Explanation:**
        * rotate 1 step to the right: `[7,1,2,3,4,5,6]`
        * rotate 2 steps to the right: `[6,7,1,2,3,4,5]`
        * rotate 3 steps to the right: `[5,6,7,1,2,3,4]`

**6. Maximum Subarray**

* **Problem:** Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

**7. Valid Sudoku**

* **Problem:** Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
    * Each row must contain the digits 1-9 without repetition.
    * Each column must contain the digits 1-9 without repetition.
    * Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

**8. Merge Intervals**

* **Problem:** Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return *an array of non-overlapping intervals* that cover all the intervals in the input.

**9. 3Sum**

* **Problem:** Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

**10. Longest Consecutive Sequence**

* **Problem:** Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.


**Tips for Solving LeetCode Array Problems:**

* **Understand the Problem:** Carefully read the problem statement and examples.
* **Choose the Right Approach:** Consider different techniques like two pointers, sliding window, sorting, and hashing.
* **Write Clean Code:** Use meaningful variable names and comments to improve readability.
* **Test Thoroughly:** Test your solution with various inputs, including edge cases.
* **Practice Regularly:** Consistent practice is key to improving your problem-solving skills.
