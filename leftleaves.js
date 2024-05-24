/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    const inorder = (root, isLeft) => {
        if(root === null) return;
        inorder(root.left, true);
        if(isLeft && root.left === null && root.right === null) {
            sum += root.val;
        }
        inorder(root.right, false);
    }
    inorder(root, false);
    return sum;
};