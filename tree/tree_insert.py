class TreeNode:
  def __init__(self, val):
    self.left = None
    self.right = None
    self.value = val
  
def add_child(root, val):
  if root is None:
    return TreeNode(val)
  else:
    if root.value == val:
      return root
    
    if root.value < val:
      root.left = add_child(root.left, val)
    else:
      root.right = add_child(root.right, val)
    return root
  

if __name__ == "__main__":
  root = None
  root = add_child(root, 10)
  root = add_child(root, 5)
  root = add_child(root, 20)
  root = add_child(root, 8)
  root = add_child(root, 30)