import React, { useState } from 'react';
import './SortingAlgorithms.css'; // Import CSS file for additional styling
function SortingAlgorithms() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null); // State to track selected algorithm
  const [selectedLanguage, setSelectedLanguage] = useState(null); // State to track selected programming language
  const [showLanguages, setShowLanguages] = useState(false); // State to track whether to show language buttons

  // Function to handle click on algorithm button
  const handleAlgorithmClick = (algorithm) => {
    setSelectedAlgorithm((prevAlgorithm) => (prevAlgorithm === algorithm ? null : algorithm));
    setShowLanguages(algorithm === 'mergeSort'); // Show language buttons only when Merge Sort is clicked
  };

  // Function to handle click n programming language button
  const handleLanguageClick = (language) => {
    // Only update the selected language
    setSelectedLanguage((prevLanguage) => (prevLanguage === language ? null : language));
  };

  // Function to render content based on selected algorithm
  const renderAlgorithmContent = () => {
    switch (selectedAlgorithm) {
      case 'mergeSort':
        return (
          <div className="algorithm-description">
            <div className="algorithm-elements">
            </div>
            <p className="algorithm-text">
              <i><b>Merge Sort is a divide and conquer algorithm that divides the unsorted list into n sublists, each containing one element, and then repeatedly merges sublists to produce new sorted sublists until there is only one sublist remaining, which is the sorted list.</b>
              </i></p>

            <ul className="time-complexity-list">
              <h3 className="time-complexity-heading">Time Complexity</h3>
              <li>Best case: O(n log n)</li>
              <li>Average case: O(n log n)</li>
              <li>Worst case: O(n log n)</li>
            </ul>

            <div className="algorithm-content">
              <div className="algorithm-image">
                <h1 className="algorithm-heading">Merge Sort</h1>
                <h3 className="sorting-array-heading">Sorting array of elements: 5, 2, 4, 7, 1, 3, 2, 6</h3>
                <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*7Kox4Bll0Ddvb0td1tiXsg.png" alt="Merge Sort Illustration" />
              </div>
              <ol className="algorithm-steps">
                <h3><div class='algo'>Algorithm :</div></h3>
                <li><div class='ccc'>Divide Array into Two Parts.</div></li>
                <li><div class='ccc'>Merge Sort the first part of the array.</div></li>
                <li><div class='ccc'>Merge Sort the second part of the array.</div></li>
                <li><div class='ccc'>Merge Both the parts.</div></li>
                <li><div class='ccc'>Return the Sorted Array</div></li>
              </ol>
            </div>
          </div>
        );
        case 'countsort':
        return (
          <div className="algorithm-description">
            <div className="algorithm-elements">
            </div>
            <p className="algorithm-text">
              <i><b>Counting Sort is a non-comparison-based sorting algorithm that works well when there is limited range of input values. It is particularly efficient when the range of input values is small compared to the number of elements to be sorted.<br></br> The basic idea behind Counting Sort is to count the frequency of each distinct element in the input array and use that information to place the elements in their correct sorted positions.</b></i></p>

            <ul className="time-complexity-list">
              <h3 className="time-complexity-heading">Time Complexity</h3>
              <li>Best case: O(n * k)</li>
                <li>Average case: O(n * k)</li>
                <li>Worst case: O(n * k)</li>
            </ul>

            <div className="algorithm-content">
              <div className="algorithm-image">
                <h1 className="algorithm-heading">Counting Sort</h1>
                <h3 className="sorting-array-heading">Sorting array of elements: 9 , 5 , 2 , 4 , 2 , 8 , 5</h3>
                <img src='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lmzbRxK0FNgxzu8owsm4cA.png' alt='Count sort' width="600" height="600"/>
              </div>
              <ol className="algorithm-steps">
                <h3><div class='algo'>Algorithm :</div></h3>
                <li><div class='ccc'>Declare an auxiliary array countArray[] of size max(inputArray[])+1 and initialize it with 0.</div></li>
                <li><div class='ccc'>Traverse array inputArray[] and map each element of inputArray[] as an index of countArray[] array, i.e., <br></br>execute countArray[inputArray[i]]++ for i in 0 to N</div></li>
                <li><div class='ccc'>Calculate the prefix sum at every index of array inputArray[].</div></li>
                <li><div class='ccc'>Create an array outputArray[] of size N.</div></li>
                <li><div class='ccc'>Traverse array inputArray[] from end and update outputArray[ countArray[ inputArray[i] ] – 1] = inputArray[i].<br></br> Also, update countArray[ inputArray[i] ] = countArray[ inputArray[i] ]- – .</div></li>
              </ol>
            </div>
          </div>
        );
        case 'radixsort':
          return (
            <div className="algorithm-description">
              <div className="algorithm-elements">
              </div>
              <p className="algorithm-text">
                <i><b>Radix Sort is a linear sorting algorithm that sorts elements by processing them digit by digit. It is an efficient sorting algorithm for integers or strings with fixed-size keys. </b></i></p>
  
              <ul className="time-complexity-list">
                <h3 className="time-complexity-heading">Time Complexity</h3>
                <li>Best case: O(n * k)</li>
                <li>Average case: O(n * k)</li>
                <li>Worst case: O(n * k)</li>
              </ul>
  
              <div className="algorithm-content">
                <div className="algorithm-image">
                  <h1 className="algorithm-heading">Radix Sort</h1>
                  <h3 className="sorting-array-heading">Sorting array of elements: 329 ,457 ,657 ,839 ,436 ,720 ,355</h3>
                  <img src="https://ds055uzetaobb.cloudfront.net/brioche/uploads/IEZs8xJML3-radixsort_ed.png?width=1200" alt="Merge Sort Illustration" />
                </div>
                <ol className="algorithm-steps">
                  <h3><div class='algo'>Algorithm :</div></h3>
                  <li><div class='ccc'>Find the maximum element in the array to determine the number of digits in the largest number.</div></li>
                  <li><div class='ccc'>Perform counting sort for each digit position, starting from the least significant digit to the most significant digit.</div></li>
                  <li><div class='ccc'>Repeat the counting sort process for each digit position until all digits have been considered.</div></li>
                  <li><div class='ccc'>Concatenate the buckets back into the original array to obtain the sorted result.</div></li>
                  
                </ol>
                
              </div>
            </div>
          );
        
      case 'bubbleSort':
        return (
          <div className="algorithm-description">
            <div className="algorithm-elements">
            </div>
            <p className="algorithm-text">
              <i><b>Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.</b>
            </i></p>

            <ul className="time-complexity-list">
              <h3 className="time-complexity-heading">Time Complexity</h3>
              <li>Best case: O(n)</li>
              <li>Average case: O(n <sup>2</sup>)</li>
              <li>Worst case: O(n <sup>2</sup>)</li>
            </ul>

            <div className="algorithm-content">
              <h1 className="algorithm-heading">Bubble Sort</h1>
              <h3> <b>Sorting array of elements: 5, 3, 8, 4, 6</b></h3>
              <img src='https://miro.medium.com/v2/resize:fit:776/1*7QsZkfrRGhAu5yxxeDdzsA.png'></img>
            </div>
            <ol className="algorithm-steps">
                <h3><div class='algo'>Algorithm :</div></h3>
                <li><div class='ccc'>traverse from left and compare adjacent elements and the higher one is placed at right side.</div></li>
                <li><div class='ccc'>In this way, the largest element is moved to the rightmost end at first. </div></li>
                <li><div class='ccc'>This process is then continued to find the second largest and place it and so on until the data is sorted.</div></li>
              </ol>
          </div>
        );
        case 'SelectionSort':
        return (
          <div className="algorithm-description">
            <div className="algorithm-elements">
            </div>
            <p className="algorithm-text">
              <i><b>Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. </b>
            </i></p>

            <ul className="time-complexity-list">
              <h3 className="time-complexity-heading">Time Complexity</h3>
              <li>Best case: O(n <sup>2</sup>)</li>
              <li>Average case: O(n <sup>2</sup>)</li>
              <li>Worst case: O(n <sup>2</sup>)</li>
            </ul>

            <div className="algorithm-content">
              <h1 className="algorithm-heading">Selection Sort</h1>
              <h3> <b>Sorting array of elements: 4, 9, 5, 1, 0</b></h3>
              <img src='https://blogger.googleusercontent.com/img/a/AVvXsEj5Lz-7nyUmeVQR6GtbH14aGGOw6xuM-LVwLMJPxQS6ooS4e_V4TyU9qp1HX9U9xcGhoeL3cnAl1KL9HYmoFvr0A0Mp785d9kRmhZFVzdYKP4Qwhi2uxzRFKnPGdCnLy3PyxoZL9lTdyFERw0a-wcIxLFKvQK1pEVS3exYeSQiKg4F8PztW9n9ls7BVBDw' alt='unable to load at this moment'></img>
            </div>
            <ol className="algorithm-steps">
                <h3><div class='algo'>Algorithm :</div></h3>
                <li><div class='ccc'>Set the first element as minimum.</div></li>
                <li><div class='ccc'>Compare minimum with the second element. If the second element is smaller than minimum, assign the second element as minimum.
                  <br></br>
                  Compare minimum with the third element. Again, if the third element is smaller, then assign minimum to the third element otherwise do nothing. The process goes on until the last element.</div></li>
                <li><div class='ccc'>After each iteration, minimum is placed in the front of the unsorted list.</div></li>
                <li><div class='ccc'>For each iteration, indexing starts from the first unsorted element. Step 1 to 3 are repeated until all the elements are placed at their correct positions.</div></li>
              </ol>
          </div>
        );
        
      default:
        return null; // If no algorithm is selected, return null
    }
  };

  // Function to render code based on selected programming language
  const renderCode = () => {
    switch (selectedLanguage) {
      case 'C':
        if (selectedAlgorithm === 'bubbleSort'){
        return (
          <pre className="code-block c-code">
            {`// Optimized implementation of Bubble sort
#include <stdbool.h>
#include <stdio.h>

void swap(int* xp, int* yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

// An optimized version of Bubble Sort
void bubbleSort(int arr[], int n)
{
    int i, j;
    bool swapped;
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(&arr[j], &arr[j + 1]);
                swapped = true;
            }
        }

        // If no two elements were swapped by inner loop,
        // then break
        if (swapped == false)
            break;
    }
}

// Function to print an array
void printArray(int arr[], int size)
{
    int i;
    for (i = 0; i < size; i++)
        printf("%d ", arr[i]);
}

// Driver program to test above functions
int main()
{
    int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
    int n = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, n);
    printf("Sorted array: \n");
    printArray(arr, n);
    return 0;
}
`}
          </pre>
        );}
        if (selectedAlgorithm === 'countsort'){
          return (
            <pre className="code-block c-code">
              {`// Counting sort in C programming

#include <stdio.h>

void countingSort(int array[], int size) {
  int output[10];

  // Find the largest element of the array
  int max = array[0];
  for (int i = 1; i < size; i++) {
    if (array[i] > max)
      max = array[i];
  }

  // The size of count must be at least (max+1) but
  // we cannot declare it as int count(max+1) in C as
  // it does not support dynamic memory allocation.
  // So, its size is provided statically.
  int count[10];

  // Initialize count array with all zeros.
  for (int i = 0; i <= max; ++i) {
    count[i] = 0;
  }

  // Store the count of each element
  for (int i = 0; i < size; i++) {
    count[array[i]]++;
  }

  // Store the cummulative count of each array
  for (int i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Find the index of each element of the original array in count array, and
  // place the elements in output array
  for (int i = size - 1; i >= 0; i--) {
    output[count[array[i]] - 1] = array[i];
    count[array[i]]--;
  }

  // Copy the sorted elements into original array
  for (int i = 0; i < size; i++) {
    array[i] = output[i];
  }
}

// Function to print an array
void printArray(int array[], int size) {
  for (int i = 0; i < size; ++i) {
    printf("%d  ", array[i]);
  }
  printf("\n");
}

// Driver code
int main() {
  int array[] = {4, 2, 2, 8, 3, 3, 1};
  int n = sizeof(array) / sizeof(array[0]);
  countingSort(array, n);
  printArray(array, n);
}`}
            </pre>
          );}
        if (selectedAlgorithm === 'radixsort'){
          return (
            <pre className="code-block c-code">
              {`// C Program to implement Radix Sort
#include <stdio.h>

// A utility function to get maximum value in arr[]
int getMax(int arr[], int n)
{
	int mx = arr[0];
	for (int i = 1; i < n; i++)
		if (arr[i] > mx)
			mx = arr[i];
	return mx;
}

// A function to do counting sort of arr[] according to
// the digit represented by exp.
void countSort(int arr[], int n, int exp)
{
	// output array
	int output[n];
	int i, count[10] = { 0 };

	// Store count of occurrences in count[]
	for (i = 0; i < n; i++)
		count[(arr[i] / exp) % 10]++;

	// Change count[i] so that count[i] now contains actual
	// position of this digit in output[]
	for (i = 1; i < 10; i++)
		count[i] += count[i - 1];

	// Build the output array
	for (i = n - 1; i >= 0; i--) {
		output[count[(arr[i] / exp) % 10] - 1] = arr[i];
		count[(arr[i] / exp) % 10]--;
	}

	// Copy the output array to arr[], so that arr[] now
	// contains sorted numbers according to current digit
	for (i = 0; i < n; i++)
		arr[i] = output[i];
}

// The main function to that sorts arr[] of size n using
// Radix Sort
void radixsort(int arr[], int n)
{
	// Find the maximum number to know number of digits
	int m = getMax(arr, n);

	// Do counting sort for every digit. Note that instead
	// of passing digit number, exp is passed. exp is 10^i
	// where i is current digit number
	for (int exp = 1; m / exp > 0; exp *= 10)
		countSort(arr, n, exp);
}

// A utility function to print an array
void print(int arr[], int n)
{
	for (int i = 0; i < n; i++)
		printf("%d ", arr[i]);
}

// Driver program to test above functions
int main()
{
	int arr[] = { 170, 45, 75, 90, 802, 24, 2, 66 };
	int n = sizeof(arr) / sizeof(arr[0]);

	// Radix sort function
	radixsort(arr, n);

	print(arr, n);
	return 0;
}
`}
            </pre>
          );
        }

      case 'Java':
        if (selectedAlgorithm === 'bubbleSort'){
        return (
          <pre className="code-block java-code">
            {`// Optimized java implementation of Bubble sort

import java.io.*;

class GFG {
    
    // An optimized version of Bubble Sort
    static void bubbleSort(int arr[], int n)
    {
        int i, j, temp;
        boolean swapped;
        for (i = 0; i < n - 1; i++) {
            swapped = false;
            for (j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    
                    // Swap arr[j] and arr[j+1]
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }

            // If no two elements were
            // swapped by inner loop, then break
            if (swapped == false)
                break;
        }
    }

    // Function to print an array
    static void printArray(int arr[], int size)
    {
        int i;
        for (i = 0; i < size; i++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    // Driver program
    public static void main(String args[])
    {
        int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
        int n = arr.length;
        bubbleSort(arr, n);
        System.out.println("Sorted array: ");
        printArray(arr, n);
    }
}
`}
          </pre>
        );
      }
      if (selectedAlgorithm === 'countsort'){
        return (
          <pre className="code-block java-code">
            {`// Counting sort in Java programming

import java.util.Arrays;

class CountingSort {
  void countSort(int array[], int size) {
    int[] output = new int[size + 1];

    // Find the largest element of the array
    int max = array[0];
    for (int i = 1; i < size; i++) {
      if (array[i] > max)
        max = array[i];
    }
    int[] count = new int[max + 1];

    // Initialize count array with all zeros.
    for (int i = 0; i < max; ++i) {
      count[i] = 0;
    }

    // Store the count of each element
    for (int i = 0; i < size; i++) {
      count[array[i]]++;
    }

    // Store the cummulative count of each array
    for (int i = 1; i <= max; i++) {
      count[i] += count[i - 1];
    }

    // Find the index of each element of the original array in count array, and
    // place the elements in output array
    for (int i = size - 1; i >= 0; i--) {
      output[count[array[i]] - 1] = array[i];
      count[array[i]]--;
    }

    // Copy the sorted elements into original array
    for (int i = 0; i < size; i++) {
      array[i] = output[i];
    }
  }

  // Driver code
  public static void main(String args[]) {
    int[] data = { 4, 2, 2, 8, 3, 3, 1 };
    int size = data.length;
    CountingSort cs = new CountingSort();
    cs.countSort(data, size);
    System.out.println("Sorted Array in Ascending Order: ");
    System.out.println(Arrays.toString(data));
  }
}`}
          </pre>
        );
      }
      if (selectedAlgorithm === 'radixsort'){
        return (
          <pre className="code-block java-code">
            {`// Radix sort Java implementation

import java.io.*;
import java.util.*;

class Radix {

    // A utility function to get maximum value in arr[]
    static int getMax(int arr[], int n)
    {
        int mx = arr[0];
        for (int i = 1; i < n; i++)
            if (arr[i] > mx)
                mx = arr[i];
        return mx;
    }

    // A function to do counting sort of arr[] according to
    // the digit represented by exp.
    static void countSort(int arr[], int n, int exp)
    {
        int output[] = new int[n]; // output array
        int i;
        int count[] = new int[10];
        Arrays.fill(count, 0);

        // Store count of occurrences in count[]
        for (i = 0; i < n; i++)
            count[(arr[i] / exp) % 10]++;

        // Change count[i] so that count[i] now contains
        // actual position of this digit in output[]
        for (i = 1; i < 10; i++)
            count[i] += count[i - 1];

        // Build the output array
        for (i = n - 1; i >= 0; i--) {
            output[count[(arr[i] / exp) % 10] - 1] = arr[i];
            count[(arr[i] / exp) % 10]--;
        }

        // Copy the output array to arr[], so that arr[] now
        // contains sorted numbers according to current
        // digit
        for (i = 0; i < n; i++)
            arr[i] = output[i];
    }

    // The main function to that sorts arr[] of
    // size n using Radix Sort
    static void radixsort(int arr[], int n)
    {
        // Find the maximum number to know number of digits
        int m = getMax(arr, n);

        // Do counting sort for every digit. Note that
        // instead of passing digit number, exp is passed.
        // exp is 10^i where i is current digit number
        for (int exp = 1; m / exp > 0; exp *= 10)
            countSort(arr, n, exp);
    }

    // A utility function to print an array
    static void print(int arr[], int n)
    {
        for (int i = 0; i < n; i++)
            System.out.print(arr[i] + " ");
    }

    // Main driver method
    public static void main(String[] args)
    {
        int arr[] = { 170, 45, 75, 90, 802, 24, 2, 66 };
        int n = arr.length;

        // Function Call
        radixsort(arr, n);
        print(arr, n);
    }
}
`}
          </pre>
        );
      }
      if (selectedAlgorithm === 'SelectionSort'){
        return (
          <pre className="code-block java-code">
            {`// Java program for implementation of Selection Sort
import java.io.*;
public class SelectionSort
{
    void sort(int arr[])
    {
        int n = arr.length;

        // One by one move boundary of unsorted subarray
        for (int i = 0; i < n-1; i++)
        {
            // Find the minimum element in unsorted array
            int min_idx = i;
            for (int j = i+1; j < n; j++)
                if (arr[j] < arr[min_idx])
                    min_idx = j;

            // Swap the found minimum element with the first
            // element
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }

    // Prints the array
    void printArray(int arr[])
    {
        int n = arr.length;
        for (int i=0; i<n; ++i)
            System.out.print(arr[i]+" ");
        System.out.println();
    }

    // Driver code to test above
    public static void main(String args[])
    {
        SelectionSort ob = new SelectionSort();
        int arr[] = {64,25,12,22,11};
        ob.sort(arr);
        System.out.println("Sorted array");
        ob.printArray(arr);
    }
}
`}
          </pre>
        );
      }
      else {
        return (
          <pre className="code-block java-code">
            {`// Java program for Merge Sort
import java.io.*;

class MergeSort {

    // Merges two subarrays of arr[].
    // First subarray is arr[l..m]
    // Second subarray is arr[m+1..r]
    void merge(int arr[], int l, int m, int r)
    {
        // Find sizes of two subarrays to be merged
        int n1 = m - l + 1;
        int n2 = r - m;

        // Create temp arrays
        int L[] = new int[n1];
        int R[] = new int[n2];

        // Copy data to temp arrays
        for (int i = 0; i < n1; ++i)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; ++j)
            R[j] = arr[m + 1 + j];

        // Merge the temp arrays

        // Initial indices of first and second subarrays
        int i = 0, j = 0;

        // Initial index of merged subarray array
        int k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        // Copy remaining elements of L[] if any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        // Copy remaining elements of R[] if any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    // Main function that sorts arr[l..r] using
    // merge()
    void sort(int arr[], int l, int r)
    {
        if (l < r) {

            // Find the middle point
            int m = l + (r - l) / 2;

            // Sort first and second halves
            sort(arr, l, m);
            sort(arr, m + 1, r);

            // Merge the sorted halves
            merge(arr, l, m, r);
        }
    }

    // A utility function to print array of size n
    static void printArray(int arr[])
    {
        int n = arr.length;
        for (int i = 0; i < n; ++i)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    // Driver code
    public static void main(String args[])
    {
        int arr[] = { 12, 11, 13, 5, 6, 7 };

        System.out.println("Given array is");
        printArray(arr);

        MergeSort ob = new MergeSort();
        ob.sort(arr, 0, arr.length - 1);

        System.out.println("\nSorted array is");
        printArray(arr);
    }
}
`}
          </pre>
        );
      }

      case 'Python':
        if (selectedAlgorithm=="bubbleSort"){

        
        return (
          <pre className="code-block python-code">
            {`# Optimized Python program for implementation of Bubble Sort


def bubbleSort(arr):
    n = len(arr)
    
    # Traverse through all array elements
    for i in range(n):
        swapped = False

        # Last i elements are already in place
        for j in range(0, n-i-1):

            # Traverse the array from 0 to n-i-1
            # Swap if the element found is greater
            # than the next element
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if (swapped == False):
            break


# Driver code to test above
if __name__ == "__main__":
    arr = [64, 34, 25, 12, 22, 11, 90]

    bubbleSort(arr)

    print("Sorted array:")
    for i in range(len(arr)):
        print("%d" % arr[i], end=" ")

`}
          </pre>
        );}
        if (selectedAlgorithm=="bubbleSort"){

        
          return (
            <pre className="code-block python-code">
              {`# Counting sort in Python programming


def countingSort(array):
    size = len(array)
    output = [0] * size

    # Initialize count array
    count = [0] * 10

    # Store the count of each elements in count array
    for i in range(0, size):
        count[array[i]] += 1

    # Store the cummulative count
    for i in range(1, 10):
        count[i] += count[i - 1]

    # Find the index of each element of the original array in count array
    # place the elements in output array
    i = size - 1
    while i >= 0:
        output[count[array[i]] - 1] = array[i]
        count[array[i]] -= 1
        i -= 1

    # Copy the sorted elements into original array
    for i in range(0, size):
        array[i] = output[i]


data = [4, 2, 2, 8, 3, 3, 1]
countingSort(data)
print("Sorted Array in Ascending Order: ")
print(data)`}
            </pre>
          );}
        if (selectedAlgorithm=="radixsort"){

        
          return (
            <pre className="code-block python-code">
              {`# Python program for implementation of Radix Sort
# A function to do counting sort of arr[] according to
# the digit represented by exp.


def countingSort(arr, exp1):

    n = len(arr)

    # The output array elements that will have sorted arr
    output = [0] * (n)

    # initialize count array as 0
    count = [0] * (10)

    # Store count of occurrences in count[]
    for i in range(0, n):
        index = arr[i] // exp1
        count[index % 10] += 1

    # Change count[i] so that count[i] now contains actual
    # position of this digit in output array
    for i in range(1, 10):
        count[i] += count[i - 1]

    # Build the output array
    i = n - 1
    while i >= 0:
        index = arr[i] // exp1
        output[count[index % 10] - 1] = arr[i]
        count[index % 10] -= 1
        i -= 1

    # Copying the output array to arr[],
    # so that arr now contains sorted numbers
    i = 0
    for i in range(0, len(arr)):
        arr[i] = output[i]

# Method to do Radix Sort


def radixSort(arr):

    # Find the maximum number to know number of digits
    max1 = max(arr)

    # Do counting sort for every digit. Note that instead
    # of passing digit number, exp is passed. exp is 10^i
    # where i is current digit number
    exp = 1
    while max1 / exp >= 1:
        countingSort(arr, exp)
        exp *= 10


# Driver code
arr = [170, 45, 75, 90, 802, 24, 2, 66]

# Function Call
radixSort(arr)

for i in range(len(arr)):
    print(arr[i], end=" ")
`}
            </pre>
          );}
        if (selectedAlgorithm=="SelectionSort"){

        
          return (
            <pre className="code-block python-code">
              {`# Python program for implementation of Selection Sort
A = [64, 25, 12, 22, 11]

# Traverse through all array elements
for i in range(len(A)-1):
    
    # Find the minimum element in remaining 
    # unsorted array
    min_idx = i
    for j in range(i+1, len(A)):
        if A[min_idx] > A[j]:
            min_idx = j
            
    # Swap the found minimum element with 
    # the first element        
    A[i], A[min_idx] = A[min_idx], A[i]

# Driver code to test above
print ("Sorted array")
for i in range(len(A)):
    print(A[i],end=" ") 
`}
            </pre>
          );}
        else{
          return (
            <div class='xx'>
            <pre className="code-block java-code">
              {`# Python program for implementation of MergeSort

def merge(arr1,arr2):
    i=0
    j=0
    result=[]
    while(i<len(arr1) and j<len(arr2)):
        if arr2[j]>arr1[i]:
            result.append(arr1[i])
            i+=1
        else:
            result.append(arr2[j])
            j+=1
    while(i<len(arr1)):
        result.append(arr1[i])
        i+=1
    while(j<len(arr2)):
        result.append(arr2[j])
        j+=1
    
    return result
    
def mergeSort(arr):
    if len(arr)<=1:
        return arr
    mid = len(arr)//2
    left = mergeSort(arr[:mid])
    right = mergeSort(arr[mid:])
    
    return merge(left,right)
 
# Driver Code
if __name__ == '__main__':
    arr = [12, 11, 13, 5, 6, 7]
    print("Given array is")
    print(*arr)
    arr = mergeSort(arr)
    print("\nSorted array is ")
    print(*arr)
`}
</pre>
</div>
          );
        }
      default:
        return null;
    }
  };
  return (
    
    <div className="sorting-algorithms-container">
      
      <h1 className="title"><div class='headd'>Sort Craft</div></h1>
      <p className="description" color='white'>
        <i><div class="he">Here you can find explanations of various sorting algorithms such as Bubble Sort, Selection Sort, Counting Sort, Merge Sort, Radix Sort, etc.</div>
        </i></p>

      {/* Buttons to select algorithm */}
      <div className="algorithm-buttons">
        <button
          className={`algorithm-button ${selectedAlgorithm === 'mergeSort' ? 'active' : ''}`}
          onClick={() => handleAlgorithmClick('mergeSort')}
        >
          Merge Sort
        </button>
        
        <button
          className={`algorithm-button ${selectedAlgorithm === 'bubbleSort' ? 'active' : ''}`}
          onClick={() => handleAlgorithmClick('bubbleSort')}
        >
          Bubble Sort
        </button>
        <button
          className={`algorithm-button ${selectedAlgorithm === 'SelectionSort' ? 'active' : ''}`}
          onClick={() => handleAlgorithmClick('SelectionSort')}
        >
          Selection Sort
        </button>
        <button
          className={`algorithm-button ${selectedAlgorithm === 'radixsort' ? 'active' : ''}`}
          onClick={() => handleAlgorithmClick('radixsort')}
        >
          Radix Sort
        </button>
        <button
          className={`algorithm-button ${selectedAlgorithm === 'countsort' ? 'active' : ''}`}
          onClick={() => handleAlgorithmClick('countsort')}
        >
          Counting Sort
        </button>
        {/* Add buttons for other sorting algorithms here */}
      </div>
      
      {/* Render selected algorithm content */}
      {renderAlgorithmContent()}

      {/* Render language buttons and code section only if an algorithm is selected */}
      {selectedAlgorithm && (
        <>
          {/* Buttons to select programming language */}
          <div className="language-buttons">
            <button
              className={`language-button ${selectedLanguage === 'C' ? 'active' : ''}`}
              onClick={() => handleLanguageClick('C')}
            >
              C
            </button>
            <button
              className={`language-button ${selectedLanguage === 'Java' ? 'active' : ''}`}
              onClick={() => handleLanguageClick('Java')}
            >
              Java
            </button>
            <button
              className={`language-button ${selectedLanguage === 'Python' ? 'active' : ''}`}
              onClick={() => handleLanguageClick('Python')}
            >
              Python
            </button>
          </div>
          

          {/* Render selected code */}
          <div className="code-section">
            {renderCode()}
          </div>
        
        </>
      )}
    </div>
    
  );
}


export default SortingAlgorithms;