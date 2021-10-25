// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// create contract for the PictureAssets with 4 field (id, name, description, vote)
contract PictureAssets {
	uint public pictureCount = 0;

	struct Picture {
		uint id;
		string ipfsInfo;
		string name;
		string description;
		uint vote;
	}

	mapping(uint => Picture) public pictures;

	event PictureCreated (
		uint id,
		string ipfsInfo,
		string name,
		string description,
		uint vote
	);

	constructor() {
		// createPicture("Check out derektruong.com");
	}

	function createPicture(string memory ipfsInfo, string memory name, string memory description, uint vote) public {
		pictureCount ++;
		pictures[pictureCount] = Picture(pictureCount, ipfsInfo, name, description, vote);

		emit PictureCreated(pictureCount, ipfsInfo, name, description, vote);
	}
	
}