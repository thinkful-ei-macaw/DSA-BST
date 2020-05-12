/* eslint-disable */

const BinarySearchTree = require("./BST");

function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}
function treeLarge(t) {
  let first = [];

  if (!t) {
    return 0;
  }

  if (!t.right) {
    return console.log(first);
  }
  first.push(t.right.value);
  treeLarge(t.right);
  return "something";
}
function heightTrak(bst) {
  if (!bst) {
    return 0;
  }

  let leftHeight = heightTrak(bst.left);
  let rightHeigth = heightTrak(bst.right);
  return Math.max(leftHeight, rightHeigth) + 1;
}

function isBST(bst) {
  if (!bst) {
    return false;
  }
  let leftHeight = heightTrak(bst.left);
  let rightHeigth = heightTrak(bst.right);
  let difference = leftHeight - rightHeigth;
  console.log(difference);
  if (difference <= 1 && difference >= -1) {
    return true;
  }

  return false;

}

function thirdLarge(bst, arr = new Array()) {


  if (bst !== null) {
    thirdLarge(bst.left, arr);
    arr.push(bst.key);
    thirdLarge(bst.right, arr);
  }

  return arr;

}

function main() {
  const BST = new BinarySearchTree();
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);

  console.log(thirdLarge(BST));

  // console.log(BST);
}

main();
