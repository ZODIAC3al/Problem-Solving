class Solution {
   public  void setZeroes(int[][] matrix) {
    int rows = matrix.length;
    int cols = matrix[0].length;

    int[][] zerosMatrix = new int[rows][cols];

    
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            zerosMatrix[i][j] = matrix[i][j];
        }
    }

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (zerosMatrix[i][j] == 0) {

                Arrays.fill(matrix[i], 0);

                for (int k = 0; k < rows; k++) {
                    matrix[k][j] = 0;
                }
            }
        }
    }
   
System.out.println(Arrays.deepToString(matrix));

}

}