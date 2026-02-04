class Solution {
    public int[] getFinalState(int[] nums, int k, int multiplier) {
         int counter =0 ;
        while (counter <k) {
            int min = nums[0];
            int index = 0 ; 
            
            for (int i = 0; i < nums.length; i++) {
                if (min>nums[i]) {
                    min = nums[i];
                    index =i;
                }
            }
            nums[index] =  nums[index]*multiplier; 
            counter ++ ;
        }
        return nums;
    }
}