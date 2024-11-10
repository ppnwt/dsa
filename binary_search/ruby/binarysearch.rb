def binarysearch(arr, target)
  # array must be sorted
  # 1. define left middle, right
  # 2. check left < right do -> check value of middle is == target
  # 3 Y -> return target
  # 4. N -> check value of left + right < target ? left = mid + 1: right = mid - 1
  # 5. return nil
  
  left = 0
  right = arr.length - 1
  
  while left < right
    mid = (left + right) / 2

    if arr[mid] == target
      return mid
    elsif arr[mid] < target
      left = mid + 1
    else
      right = mid - 1
    end
  end

  return nil
end

p binarysearch([1,2,3,4,5,6], 5)
