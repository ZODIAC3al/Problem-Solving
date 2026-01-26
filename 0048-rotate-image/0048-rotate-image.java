class Solution {
 public  void rotate(int[][] matrix) {
        int[][] rotatedArr = new int[matrix.length][matrix[0].length];

        for (int i = matrix.length - 1; i >= 0; i--) {
            for (int j = 0; j < matrix.length; j++) {
                rotatedArr[j][matrix.length - 1 - i] = matrix[i][j];
            }
        }
        for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix.length; j++) {
        matrix[i][j] = rotatedArr[i][j];
    }
}

        System.out.println(Arrays.deepToString(matrix));
    }
  }
