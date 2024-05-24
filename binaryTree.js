class TreeNode {
    constructor(val=0, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function evaluate(root) {
    if (!root) {
        return false;
    }

    if (!root.left && !root.right) {
        return !!root.val;
    }

    if (root.val === 0) {
        return false;
    }

    if (root.val === 1) {
        return true;
    }

    if (root.val === 2) { // AND node
        return evaluate(root.left) && evaluate(root.right);
    }

    if (root.val === 3) { // OR node
        return evaluate(root.left) || evaluate(root.right);
    }
}

// Test cases
// Example 1
const root1 = new TreeNode(2);
root1.left = new TreeNode(1);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(0);
root1.left.right = new TreeNode(1);
console.log(evaluate([2,1,3,null,null,0,1])); // Output: true

// Example 2
const root2 = new TreeNode(0);
console.log(evaluate([2,1,3,null,null,0,1])); // Output: false
