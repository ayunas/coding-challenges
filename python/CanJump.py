class CanJump(object):
    
    def canJump(self, nums):
        max_reach = nums[0]
        end_index = len(nums)-1
        if max_reach >= end_index:
            return True
        for i in range(1, len(nums)):
            if i > max_reach:
                return False
            max_reach = max(max_reach, i+nums[i])
            if max_reach >= end_index:
                return True            
        return False 