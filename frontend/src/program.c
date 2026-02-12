#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};  // Initialize an array with elements
    int n = sizeof(arr) / sizeof(arr[0]);  // Calculate the size of the array

    printf("Array elements are:\n");
    for(int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    
    return 0;
}
