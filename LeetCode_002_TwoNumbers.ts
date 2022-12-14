/*
 * @Author: GKing
 * @Date: 2022-12-14 10:59:28
 * @LastEditors: GKing
 * @LastEditTime: 2022-12-14 14:45:43
 * @Description: 
 * @TODO: 
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