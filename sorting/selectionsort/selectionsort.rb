def selectionsort(arr)
  left = 0
  right = arr.length - 1

  while left < right
    min = left
    for i in (left + 1)..right
      if arr[i] < arr[min]
        min = i
      end
    end
    arr[left], arr[min] = arr[min], arr[left]
    left += 1
  end
  return arr
end

  
