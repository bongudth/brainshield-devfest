export const PICTURE_LIST_ADDRESS = "0x9D7EF1204dade9d97c64f54Ac446E6aA1FDf5dd5";

export const PICTURE_LIST_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "ipfsInfo",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "nameAuthor",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "namePicture",
				"type": "string"
			}
		],
		"name": "PictureCreated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "pictureCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "pictures",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ipfsInfo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "nameAuthor",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "namePicture",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ipfsInfo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "nameAuthor",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "namePicture",
				"type": "string"
			}
		],
		"name": "createPicture",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];