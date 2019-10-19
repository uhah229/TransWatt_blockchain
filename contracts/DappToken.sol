pragma solidity ^0.5.8;

contract DappToken {
  string public name = "TransWatt Token";
  string public symbol = "TWTT";
  string public standard = "TransWatt Token v1.0";
  uint256 public totalSupply;

  mapping(address => uint256) public balanceOf;

  constructor(uint256 _initialSupply) public {
    balanceOf[msg.sender] = _initialSupply;
    totalSupply = _initialSupply;
    // allocate the initial supply

  }
}
