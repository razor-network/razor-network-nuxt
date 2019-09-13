let blockManagergAbi = [
    {
        constant: true,
        inputs: [
            {
                name: "account",
                type: "address"
            }
        ],
        name: "isWriter",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "stateManager",
        outputs: [
            {
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "voteManager",
        outputs: [
            {
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "stakeManager",
        outputs: [
            {
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "uint256"
            },
            {
                name: "",
                type: "address"
            }
        ],
        name: "disputes",
        outputs: [
            {
                name: "accWeight",
                type: "uint256"
            },
            {
                name: "median",
                type: "uint256"
            },
            {
                name: "lastVisited",
                type: "uint256"
            },
            {
                name: "assetId",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "uint256"
            },
            {
                name: "",
                type: "uint256"
            }
        ],
        name: "proposedBlocks",
        outputs: [
            {
                name: "proposerId",
                type: "uint256"
            },
            {
                name: "iteration",
                type: "uint256"
            },
            {
                name: "biggestStake",
                type: "uint256"
            },
            {
                name: "valid",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "account",
                type: "address"
            }
        ],
        name: "addWriter",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "renounceWriter",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        name: "blocks",
        outputs: [
            {
                name: "proposerId",
                type: "uint256"
            },
            {
                name: "iteration",
                type: "uint256"
            },
            {
                name: "biggestStake",
                type: "uint256"
            },
            {
                name: "valid",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "epoch",
                type: "uint256"
            },
            {
                indexed: false,
                name: "stakerId",
                type: "uint256"
            },
            {
                indexed: false,
                name: "medians",
                type: "uint256[]"
            },
            {
                indexed: false,
                name: "iteration",
                type: "uint256"
            },
            {
                indexed: false,
                name: "biggestStakerId",
                type: "uint256"
            }
        ],
        name: "Proposed",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "epoch",
                type: "uint256"
            },
            {
                indexed: false,
                name: "stakerId",
                type: "uint256"
            },
            {
                indexed: false,
                name: "medians",
                type: "uint256[]"
            }
        ],
        name: "BlockConfirmed",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address"
            }
        ],
        name: "WriterAdded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address"
            }
        ],
        name: "WriterRemoved",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "a",
                type: "uint256"
            }
        ],
        name: "DebugUint256",
        type: "event"
    },
    {
        constant: true,
        inputs: [
            {
                name: "epoch",
                type: "uint256"
            }
        ],
        name: "getBlock",
        outputs: [
            {
                components: [
                    {
                        name: "proposerId",
                        type: "uint256"
                    },
                    {
                        name: "medians",
                        type: "uint256[]"
                    },
                    {
                        name: "iteration",
                        type: "uint256"
                    },
                    {
                        name: "biggestStake",
                        type: "uint256"
                    },
                    {
                        name: "valid",
                        type: "bool"
                    }
                ],
                name: "_block",
                type: "tuple"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "epoch",
                type: "uint256"
            }
        ],
        name: "getBlockMedians",
        outputs: [
            {
                name: "_blockMedians",
                type: "uint256[]"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "epoch",
                type: "uint256"
            },
            {
                name: "proposedBlock",
                type: "uint256"
            }
        ],
        name: "getProposedBlock",
        outputs: [
            {
                components: [
                    {
                        name: "proposerId",
                        type: "uint256"
                    },
                    {
                        name: "medians",
                        type: "uint256[]"
                    },
                    {
                        name: "iteration",
                        type: "uint256"
                    },
                    {
                        name: "biggestStake",
                        type: "uint256"
                    },
                    {
                        name: "valid",
                        type: "bool"
                    }
                ],
                name: "_block",
                type: "tuple"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "epoch",
                type: "uint256"
            },
            {
                name: "proposedBlock",
                type: "uint256"
            }
        ],
        name: "getProposedBlockMedians",
        outputs: [
            {
                name: "_blockMedians",
                type: "uint256[]"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "epoch",
                type: "uint256"
            }
        ],
        name: "getNumProposedBlocks",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_stakeManagerAddress",
                type: "address"
            },
            {
                name: "_stateManagerAddress",
                type: "address"
            },
            {
                name: "_voteManagerAddress",
                type: "address"
            }
        ],
        name: "init",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "epoch",
                type: "uint256"
            },
            {
                name: "medians",
                type: "uint256[]"
            },
            {
                name: "iteration",
                type: "uint256"
            },
            {
                name: "biggestStakerId",
                type: "uint256"
            }
        ],
        name: "propose",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "epoch",
                type: "uint256"
            },
            {
                name: "assetId",
                type: "uint256"
            },
            {
                name: "sorted",
                type: "uint256[]"
            }
        ],
        name: "giveSorted",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "epoch",
                type: "uint256"
            }
        ],
        name: "resetDispute",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "epoch",
                type: "uint256"
            },
            {
                name: "blockId",
                type: "uint256"
            }
        ],
        name: "finalizeDispute",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "iteration",
                type: "uint256"
            },
            {
                name: "biggestStakerId",
                type: "uint256"
            },
            {
                name: "stakerId",
                type: "uint256"
            }
        ],
        name: "isElectedProposer",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "confirmBlock",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    }
];

export default blockManagergAbi