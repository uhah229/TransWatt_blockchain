pragma solidity ^0.5.8;

contract DappToken {
  // Constructor
  // set the total number of tokens
  // read the total number of tokens
  uint256 public totalSupply;

  constructor() public {
    totalSupply = 1000000;
  }
}
