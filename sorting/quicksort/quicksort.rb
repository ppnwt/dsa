def quicksort(arr)
  # base case
  return arr if arr.length < 2 

  # recursive case
  pivot = arr.first
  less = arr[1..-1].select{ |e| e < pivot }
  greater = arr[1..-1].select{ |e| e > pivot }

  return quicksort(less) + [pivot] + quicksort(greater)

end


p quicksort([10, 5, 2, 3])

# Quick sort is a divide and conquer algorithm
# Time complexity: O(n log n)
# Space complexity: O(n)

