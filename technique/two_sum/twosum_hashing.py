def twosum_hashing(nums, target):
  nums_map = {}
  for i, num in enumerate(nums):
    complement = target - num
    if complement in nums_map:
      return [nums_map[complement], i]
    nums_map[num] = i
  return [-1, -1]


print(twosum_hashing([2, 7, 11, 15], 9))