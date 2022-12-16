/*
 * @Author: GKing
 * @Date: 2022-12-14 10:59:28
 * @LastEditors: GKing
 * @LastEditTime: 2022-12-16 10:04:00
 * @Description: 两数相加
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * @TODO: 
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const newList = new ListNode(0);
    let cur = newList;
    let curry = 0;
    while (l1 || l2) {
        const val1 = l1?.val ?? 0;
        const val2 = l2?.val ?? 0;
        const val = val1 + val2 + curry;
        curry = Math.floor(val / 10);
        cur.next = new ListNode(val % 10);
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        cur = cur.next;
    }
    if (curry) {
        cur.next = new ListNode(curry);
    }
    return newList.next;
};

function GKaddTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null { 
    // 初始化哑巴节点
    let dmy = new ListNode(0);
    let curr = dmy;
    // 进位
    let addOne = 0;
    while(l1 || l2) {
        // 把两个链表补位0，使两个表位数相等
        let val1 = l1?.val ?? 0;
        let val2 = l2?.val ?? 0;
        // 计算两个值的和
        let sum = val1 + val2 + addOne;
        // 计算进位
        sum >= 10 ? addOne = 1 : addOne = 0;
        // 取余10，计算当前位的值
        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    // 链表位数循环完以后，addOne还是1，链表增加位数
    if(addOne) curr.next = new ListNode(addOne);
    return dmy.next;
}

function GKaddTwoNumbers20221216(l1: ListNode | null, l2: ListNode | null): ListNode | null { 
    let newList: ListNode = new ListNode();
    let curr: ListNode = newList;
    let addOne: number = 0;
    while(l1 || l2) {
        let val1 = l1?.val ?? 0;
        let val2 = l2?.val ?? 0;
        let sum = val1 + val2 + addOne;
        sum >= 10 ? addOne = 1 : addOne = 0;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    if(addOne) curr.next = new ListNode(addOne);

    return newList.next;
}

