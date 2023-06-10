// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DynamicArrays {
    uint256[] public array;

    function push(uint256 value) public { // First transaction: ~70,000 gas, subsequent transactions: ~50,000 gas
        array.push(value);
    }

    function pop() public { // ~30,000 gas, removes/deletes the last element
        array.pop();
    }

    function deleteLast() public { // ~25,000 gas, Sets last value to 0 & doesn't change length
        delete array[array.length - 1];
    }

    function get(uint256 index) public view returns (uint256) {
        return array[index];
    }

    function length() public view returns (uint256) {
        return array.length;
    }
}