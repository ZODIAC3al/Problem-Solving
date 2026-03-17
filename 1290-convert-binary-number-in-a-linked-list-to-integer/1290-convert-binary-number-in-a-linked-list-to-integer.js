/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let current = head;
    let result = 0;

    // If head is null, the loop never runs, result stays 0
    while (current) {
        result = result * 2 + current.val;
        current = current.next;
    }

    return result; // always an integer
};