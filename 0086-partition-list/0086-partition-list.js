/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head) return null;

    let d1 = new ListNode(0);
    let d2 = new ListNode(0);
    let prev1 = d1;
    let prev2 = d2;
    let current = head;

    while (current) {
        let nextNode = current.next; // save next
        current.next = null;         // detach current node

        if (current.val < x) {
            prev1.next = current;
            prev1 = current;
        } else {
            prev2.next = current;
            prev2 = current;
        }

        current = nextNode;
    }

    // connect the two lists
    prev1.next = d2.next;

    return d1.next; // new head of the partitioned list
};