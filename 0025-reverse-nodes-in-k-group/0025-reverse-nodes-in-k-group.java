/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
      public  ListNode reverseK(ListNode head, int k) {
    ListNode prev = null;
    ListNode curr = head;
    ListNode next = null;
    int count = 0;

    while (count < k && curr != null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }

    return prev; // new head of the reversed segment
}
    public ListNode reverseKGroup(ListNode head, int k) {
    if (head == null || k == 1) return head;

    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode prevGroupEnd = dummy;

    while (true) {
       
        ListNode kth = prevGroupEnd;
        for (int i = 0; i < k && kth != null; i++) {
            kth = kth.next;
        }
        if (kth == null) break;

        
        ListNode groupStart = prevGroupEnd.next;
        ListNode nextGroupStart = kth.next;

       
        kth.next = null;

        ListNode newGroupHead = reverseK(groupStart, k);

        
        prevGroupEnd.next = newGroupHead;

        
        groupStart.next = nextGroupStart;

        
        prevGroupEnd = groupStart;
    }

    return dummy.next;
}

}