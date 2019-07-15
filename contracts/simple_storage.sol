pragma solidity ^0.5.0;

contract SimpleStorage {
  uint public storedData;

  event StoredDataChanged(uint data);

  constructor(uint initialValue) public {
    storedData = initialValue;
  }

  function set(uint x) public {
    storedData = x;
    emit StoredDataChanged(storedData);
  }

  function get() public view returns (uint retVal) {
    return storedData;
  }
}
