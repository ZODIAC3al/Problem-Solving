/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head) return null;

    let fast = head;
    let slow = head;

   
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // remove head case
    if (!fast) {
        return head.next;
    }

    // move both pointers
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // remove node
    slow.next = slow.next.next;

    return head;
};