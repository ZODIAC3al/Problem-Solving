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
    public boolean isPalindrome(ListNode head) {
        // maaking the slow pointer in the middle 
      ListNode slow = head ;
      ListNode fast  = head ;
      while (fast.next != null && fast.next.next!=null ) {
        slow = slow.next;
        fast = fast.next.next;
      }
     // reverse the second half 
     ListNode curr = slow.next;
     ListNode prev = null ;
    ListNode next = null;
    while (curr!=null ) {
        next = curr.next;
        curr.next = prev ;
        prev = curr;
        curr = next ; 
    }

    // compare between the two lists 
    ListNode left = head;
    ListNode right = prev;

    while (right != null) {
        if (left.val != right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }
   return true ; 
    }
}