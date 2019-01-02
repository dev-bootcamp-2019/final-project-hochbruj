### Reentrancy

In the pickWinner function the status is changed to "winner picked" before the transfer of the deposit occurs. The function cannot be executed again, because of the status check at beginning.

For the transfer of the reward to the winner the withdrawal pattern is used.

### Integer Over/Underflow

The SafeMath library is used for arithmetic operations.


