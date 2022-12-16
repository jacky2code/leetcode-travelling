/*
 * @Author: GKing
 * @Date: 2022-12-16 15:05:48
 * @LastEditors: GKing
 * @LastEditTime: 2022-12-16 16:25:52
 * @Description: 盛最多水的容器
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。
 * 
 * @TODO: 
 * 从两端开始比较，找出其中较小的数值往中间推（因为推更大的数值面积可能更小），计算出面积保存后和下一个面积取最大值
 * 从两端开始比较数字大小，左边小往右推，右边小往左推，计算最大面积。
 */
function maxArea(height: number[]): number {
    const len: number = height.length;
    if (len <=1 ) return 0;
    let left: number = 0, right: number = len - 1, result: number = 0;
    while(left < right) {
        if(height[left] < height[right]) {
            result = Math.max(result, (right - left)* height[left]);
            left++;
        }else {
            result = Math.max(result, (right - left) * height[right]);
            right --;
        }
    }

    return result;
};

function GKMaxArea(height: number[]): number { 
    let i: number = 0, j: number = height.length - 1, result: number = 0;
    while(i < j) {
        result = height[i] < height[j] ? 
            Math.max(result, (j - i) * height[i++]) : 
            Math.max(result, (j - i) * height[j--]);
    }
    return result;
}