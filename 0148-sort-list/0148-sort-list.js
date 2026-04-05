/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) {
        return head; 
    }

    let l1 = head; 
    let l2 = splitMiddle(head); 

    l1 = sortList(l1);
    l2 = sortList(l2);

    let dummy = new ListNode(0);
    let res = dummy;

    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            res.next = l1;
            l1 = l1.next;
        } else {
            res.next = l2;
            l2 = l2.next;
        }
        res = res.next;
    }

    if (l2 != null) {
        res.next = l2;
    } else {
        res.next = l1; 
    }

    return dummy.next;
};

function splitMiddle(head) {
    if (!head || !head.next) return null;

    let prev = null;
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

  
    if (prev) {
        prev.next = null;
    }

    return slow; 
}