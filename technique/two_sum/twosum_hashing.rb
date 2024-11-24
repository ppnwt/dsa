def twosum_hashing(nums, target)
  hash = {}
  nums.each_with_index do |num, i|
    hash[num] = i
  end

  nums.each_with_index do |num, i|
    complement = target - num
    if hash.key?(complement) && hash[complement] != i
      return [i, hash[complement]]
    end
  end
  nil
end

p twosum_hashing([2, 7, 11, 15], 13)