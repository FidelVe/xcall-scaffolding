const xcallAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_reqId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "int256",
        name: "_code",
        type: "int256"
      },
      {
        indexed: false,
        internalType: "string",
        name: "_msg",
        type: "string"
      }
    ],
    name: "CallExecuted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "_from",
        type: "string"
      },
      {
        indexed: true,
        internalType: "string",
        name: "_to",
        type: "string"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_sn",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_reqId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "CallMessage",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "string",
        name: "_to",
        type: "string"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_sn",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "int256",
        name: "_nsn",
        type: "int256"
      }
    ],
    name: "CallMessageSent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_sn",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "int256",
        name: "_code",
        type: "int256"
      },
      {
        indexed: false,
        internalType: "string",
        name: "_msg",
        type: "string"
      }
    ],
    name: "ResponseMessage",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_sn",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "int256",
        name: "_code",
        type: "int256"
      },
      {
        indexed: false,
        internalType: "string",
        name: "_msg",
        type: "string"
      }
    ],
    name: "RollbackExecuted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_sn",
        type: "uint256"
      }
    ],
    name: "RollbackMessage",
    type: "event"
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reqId",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "executeCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_sn",
        type: "uint256"
      }
    ],
    name: "executeRollback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getBtpAddress",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_net",
        type: "string"
      },
      {
        internalType: "bool",
        name: "_rollback",
        type: "bool"
      }
    ],
    name: "getFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getProtocolFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getProtocolFeeHandler",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_src",
        type: "string"
      },
      {
        internalType: "string",
        name: "_svc",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "_sn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_code",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "_msg",
        type: "string"
      }
    ],
    name: "handleBTPError",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_from",
        type: "string"
      },
      {
        internalType: "string",
        name: "_svc",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "_sn",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_msg",
        type: "bytes"
      }
    ],
    name: "handleBTPMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bmc",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_to",
        type: "string"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_rollback",
        type: "bytes"
      }
    ],
    name: "sendCallMessage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address"
      }
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      }
    ],
    name: "setProtocolFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address"
      }
    ],
    name: "setProtocolFeeHandler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "toAddr",
        type: "address"
      },
      {
        internalType: "string",
        name: "to",
        type: "string"
      },
      {
        internalType: "string",
        name: "from",
        type: "string"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "tryHandleCallMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

module.exports = { xcallAbi };
