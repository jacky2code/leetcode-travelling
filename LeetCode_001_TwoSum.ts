/*
 * @Author: GKing
 * @Date: 2022-12-12 18:35:37
 * @LastEditors: GKing
 * @LastEditTime: 2022-12-16 09:46:23
 * @Description: Two Sum
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @TODO: 
 */
const nums:number[] = (() => {
    return (():number[] => {
        let nums:number[] = [];
        for (let i:number = 0; i < 1000000; i++) {
            nums.push(i);       
        }
        return nums;
    })();
})();

const target:number = nums[nums.length - 20000] + nums[nums.length - 20003];
console.log('nums: ', nums);
console.log('target: ', target);

// Map - for
function twoSum(nums: number[], target: number): number[] {
    const len:number = nums.length;
    if (len <= 1) {
        return [];
    }
    let map:Map<number, any> = new Map();
        for(let i = 0; i<len; i++ ) {
            const num = nums[i];
            // 获取差值
            const diff = target - num;
            // 如果包含差值
            if (map.has(diff)) {
                return [map.get(diff), i];
            }
            map.set(num, i);
        }
    return [];
}

function GKMapTwoSum(nums: number[], target: number): number[] {
    const lenNums: number = nums.length;
    if (lenNums <= 1) return [];

    let mapNums: Map<number, any> = new Map();
    for (let i:number = 0; i < lenNums; i++) {
        let num: number = nums[i];
        let diff: number = target - num;
        if(mapNums.has(diff)) return [mapNums.get(diff), i];
        mapNums.set(num, i);
    }

    return [];
}

// 双指针
function DPTwoSum(nums:number[], target:number): number[] {
    const lenNums = nums.length;
    if (lenNums <= 1) return [];

    const numsWithIndex = nums.map((num, index) => {
        return {
            value: num,
            index: index
        }
    }).sort((one, two) => one.value - two.value);

    let left:number = 0
    let right: number = numsWithIndex.length - 1;

    while(left < right) {
        const sum = numsWithIndex[left].value + numsWithIndex[right].value;
        if (sum < target) {
            left ++;
        } else if (sum > target) {
            right --;
        } else {
            return [
                Math.min(numsWithIndex[left].index, numsWithIndex[right].index),
                Math.max(numsWithIndex[left].index, numsWithIndex[right].index)
            ]
        }
    }


    return [];
}

function GKDPTwoSum(nums: number[], target: number): number[] {
    const lenNums = nums.length;
    if (lenNums <= 1) return [];

    const numsWithIndex = nums.map((num, index) => {
        return {
            num: num,
            index
        }
    }).sort((one, two)=> one.num - two.num);

    let left: number = 0;
    let right: number = numsWithIndex.length - 1;

    while(left < right) {
        const sum: number = numsWithIndex[left].num + numsWithIndex[right].num;
        if(sum < target) {
            left ++;
        } else if (sum > target) {
            right --;
        } else {
            return [
                Math.min(numsWithIndex[left].index, numsWithIndex[right].index),
                Math.max(numsWithIndex[left].index, numsWithIndex[right].index)
            ]
        }
    }

    return [];
}

function GKTwoSum20221224(nums: number[], target: number): number[] {
    const len: number = nums.length;
    if(len <= 1) return [];
    const map: Map<number, any> = new Map();
    for(let i: number = 0; i<len; i++) {
        let num = nums[i];
        let diff = target - num;
        if(map.has(diff)) return [
            map.get(diff),
            i
        ];


        map.set(num, i);
    }
    return [];
}

function GKDPTwoSum20221214(nums: number[], target: number): number[] {
    const len = nums.length;
    if(len <= 1) return [];

    const numsWithIndex = nums.map((num, index) => {
        return {
            num,
            index
        }
    }).sort((one, two) => one.num - two.num);

    let left = 0;
    let right = numsWithIndex.length - 1;

    while(left < right) {
        let sum = numsWithIndex[left].num + numsWithIndex[right].num;
        if(sum < target) {
            left ++;
        } else if (sum > target) {
            right --;
        } else {
            return [
                Math.min(numsWithIndex[left].index, numsWithIndex[right].index),
                Math.max(numsWithIndex[left].index, numsWithIndex[right].index)
            ]
        }
    }

    return [];
}

function GKTwoSum20221216 (nums: number[], target: number): number[] {
    const len: number = nums.length;
    if(len <= 1) return [];
    let map: Map<number, number> = new Map();
    for(let i = 0; i < len; i++) {
        let num: number = nums[i];
        let diff: number = target - num;
        if(map.has(diff)) {
            return [
                Math.min(<number>map.get(diff), i),
                Math.max(<number>map.get(diff), i)
            ]
        }
        map.set(num, i);
    }

    return [];
}


console.log(GKTwoSum20221216([3, 3], 6));
console.log(GKTwoSum20221216([2, 4, 5], 7));
console.time('time');
console.log(GKTwoSum20221216(nums, target));
console.timeEnd('time');





