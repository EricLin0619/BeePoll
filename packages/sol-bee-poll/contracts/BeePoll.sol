// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract BeePoll {
    struct Voter {
        bool voted;
    }

    struct Proposal {
        string name;
        address creater;
        uint acceptCount;
        uint denyCount;
        uint256 endTime;
    }

    mapping(address => mapping(uint256 => Voter)) public voters;

    mapping(uint256 => Proposal) public proposals;

    uint public totalProposals = 0;
    
    function createProposals (string calldata name, uint256 continueSec) public{
        Proposal storage poll = proposals[totalProposals];
        poll.name = name;
        poll.endTime = block.timestamp + continueSec;
        totalProposals += 1;
    }

    function vote(uint256 proposal, bool accept) public {
        Voter storage sender = voters[msg.sender][proposal];
        require(block.timestamp < proposals[proposal].endTime, "Vote End");
        require(!sender.voted, "Already voted.");
        sender.voted = true;
        if (accept) proposals[proposal].acceptCount += 1;
        else proposals[proposal].denyCount += 1;
    }

   function getResult (uint256 proposal) public view returns (bool) {
        require(block.timestamp > proposals[proposal].endTime, "Vote Not End");
        if(proposals[proposal].acceptCount > proposals[proposal].denyCount) return true;
        else return false;
   }
   function getBlockTime () public view returns(uint256) {
        return block.timestamp;
   }
}