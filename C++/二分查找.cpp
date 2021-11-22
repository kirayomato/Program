#include<vector>
int binary_search(vector<int>& nums, int target) 
{
    int left = 0, right = nums.size() - 1;
    while (left <= right)
    {
        int mid = left + (right - left) / 2;
        if (nums[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    if (left >= nums.size()|| nums[left] != target)
        return -1;
    return left;
}

int smaller_bound(vector<int>& nums, int target)
{
    int left = 0, right = nums.size() - 1;
    while (left <= right)
    {
        int mid = left + (right - left) / 2;
        if (nums[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return right;
}

int bigger_bound(vector<int>& nums, int target)
{
    int left = 0, right = nums.size() - 1;
    while (left <= right)
    {
        int mid = left + (right - left) / 2;
        if (nums[mid] > target)
            right = mid - 1;
        else
            left = mid + 1;
    }
    if (left== nums.size()||nums[left] <= target)
        return -1;
    return left;
}
int re_lower_bound(vector<int>&nums, int target)
{
    int left = 1, right = x;
    while (left < right)
    {
        int mid = left + (right - left) / 2 + 1;
        if (nums[mid] <= 2 * target)
            left = mid;
        else
            right = mid - 1;
    }
    return left;
}
int lower_bound(vector<int>& nums, int target)
{
    int left = 1, right = x;
    while (left < right)
    {
        int mid = left + (right - left) / 2;
        if (nums[mid] < 2 * target)
            left = mid+1;
        else
            right = mid;
    }
    return left;
}
