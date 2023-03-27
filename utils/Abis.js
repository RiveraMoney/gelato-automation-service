const oracleAbi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
        ],
        name: "PricePosted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "ReporterAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "ReporterRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "TokenAdded",
        type: "event",
    },
    {
        inputs: [],
        name: "PRICE_FEED_ERROR",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "PRICE_FEED_ERROR_SPREAD",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "PRICE_FEED_INACTIVE",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "PRICE_FEED_INACTIVE_SPREAD",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "reporter", type: "address" },
        ],
        name: "addReporter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "token", type: "address" },
            { internalType: "uint256", name: "tokenDecimals", type: "uint256" },
            { internalType: "address", name: "priceFeed", type: "address" },
            { internalType: "uint256", name: "priceDecimals", type: "uint256" },
            {
                internalType: "uint256",
                name: "chainlinkTimeout",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "chainlinkDeviation",
                type: "uint256",
            },
        ],
        name: "configToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "token", type: "address" }],
        name: "getLastPrice",
        outputs: [
            { internalType: "uint256", name: "lastPrice", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address[]", name: "tokens", type: "address[]" },
            { internalType: "bool", name: "max", type: "bool" },
        ],
        name: "getMultiplePrices",
        outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "token", type: "address" },
            { internalType: "bool", name: "max", type: "bool" },
        ],
        name: "getPrice",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "isReporter",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "lastAnswerBlock",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "lastAnswerTimestamp",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "lastAnswers",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address[]", name: "tokens", type: "address[]" },
            { internalType: "uint256[]", name: "prices", type: "uint256[]" },
        ],
        name: "postPrices",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "reporter", type: "address" },
        ],
        name: "removeReporter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "reporters",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "tokenConfig",
        outputs: [
            { internalType: "uint256", name: "baseUnits", type: "uint256" },
            { internalType: "uint256", name: "priceUnits", type: "uint256" },
            {
                internalType: "contract AggregatorV3Interface",
                name: "chainlinkPriceFeed",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "chainlinkDeviation",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "chainlinkTimeout",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "whitelistedTokens",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
]
const orderManagerAbi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "executor",
                type: "address",
            },
        ],
        name: "ExecutorSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "fee",
                type: "uint256",
            },
        ],
        name: "MinExecutionFeeSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "OracleChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "key",
                type: "uint256",
            },
        ],
        name: "OrderCancelled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "key",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "contract IPool",
                        name: "pool",
                        type: "address",
                    },
                    { internalType: "address", name: "owner", type: "address" },
                    {
                        internalType: "address",
                        name: "indexToken",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "collateralToken",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "payToken",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "expiresAt",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "submissionBlock",
                        type: "uint256",
                    },
                    { internalType: "uint256", name: "price", type: "uint256" },
                    {
                        internalType: "uint256",
                        name: "executionFee",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "triggerAboveThreshold",
                        type: "bool",
                    },
                ],
                indexed: false,
                internalType: "struct Order",
                name: "order",
                type: "tuple",
            },
            {
                components: [
                    { internalType: "enum Side", name: "side", type: "uint8" },
                    {
                        internalType: "uint256",
                        name: "sizeChange",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "collateral",
                        type: "uint256",
                    },
                    {
                        internalType: "enum UpdatePositionType",
                        name: "updateType",
                        type: "uint8",
                    },
                ],
                indexed: false,
                internalType: "struct UpdatePositionRequest",
                name: "request",
                type: "tuple",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fillPrice",
                type: "uint256",
            },
        ],
        name: "OrderExecuted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "key",
                type: "uint256",
            },
        ],
        name: "OrderExpired",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "hook",
                type: "address",
            },
        ],
        name: "OrderHookSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "key",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "contract IPool",
                        name: "pool",
                        type: "address",
                    },
                    { internalType: "address", name: "owner", type: "address" },
                    {
                        internalType: "address",
                        name: "indexToken",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "collateralToken",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "payToken",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "expiresAt",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "submissionBlock",
                        type: "uint256",
                    },
                    { internalType: "uint256", name: "price", type: "uint256" },
                    {
                        internalType: "uint256",
                        name: "executionFee",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "triggerAboveThreshold",
                        type: "bool",
                    },
                ],
                indexed: false,
                internalType: "struct Order",
                name: "order",
                type: "tuple",
            },
            {
                components: [
                    { internalType: "enum Side", name: "side", type: "uint8" },
                    {
                        internalType: "uint256",
                        name: "sizeChange",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "collateral",
                        type: "uint256",
                    },
                    {
                        internalType: "enum UpdatePositionType",
                        name: "updateType",
                        type: "uint8",
                    },
                ],
                indexed: false,
                internalType: "struct UpdatePositionRequest",
                name: "request",
                type: "tuple",
            },
        ],
        name: "OrderPlaced",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pool",
                type: "address",
            },
        ],
        name: "PoolSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "tokenIn",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "tokenOut",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
        ],
        name: "Swap",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "key",
                type: "uint256",
            },
        ],
        name: "SwapOrderCancelled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "key",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
        ],
        name: "SwapOrderExecuted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "key",
                type: "uint256",
            },
        ],
        name: "SwapOrderPlaced",
        type: "event",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_orderId", type: "uint256" },
        ],
        name: "cancelOrder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_orderId", type: "uint256" },
        ],
        name: "cancelSwapOrder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "ethUnwrapper",
        outputs: [
            {
                internalType: "contract IETHUnwrapper",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_orderId", type: "uint256" },
            {
                internalType: "address payable",
                name: "_feeTo",
                type: "address",
            },
        ],
        name: "executeOrder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_orderId", type: "uint256" },
            {
                internalType: "address payable",
                name: "_feeTo",
                type: "address",
            },
        ],
        name: "executeSwapOrder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "executor",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "user", type: "address" },
            { internalType: "uint256", name: "skip", type: "uint256" },
            { internalType: "uint256", name: "take", type: "uint256" },
        ],
        name: "getOrders",
        outputs: [
            { internalType: "uint256[]", name: "orderIds", type: "uint256[]" },
            { internalType: "uint256", name: "total", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "user", type: "address" },
            { internalType: "uint256", name: "skip", type: "uint256" },
            { internalType: "uint256", name: "take", type: "uint256" },
        ],
        name: "getSwapOrders",
        outputs: [
            { internalType: "uint256[]", name: "orderIds", type: "uint256[]" },
            { internalType: "uint256", name: "total", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_weth", type: "address" },
            { internalType: "address", name: "_oracle", type: "address" },
            {
                internalType: "uint256",
                name: "_minExecutionFee",
                type: "uint256",
            },
            { internalType: "address", name: "_ethUnwrapper", type: "address" },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "minExecutionFee",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "nextOrderId",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "nextSwapOrderId",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "oracle",
        outputs: [
            {
                internalType: "contract ILevelOracle",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "orderHook",
        outputs: [
            { internalType: "contract IOrderHook", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "orders",
        outputs: [
            { internalType: "contract IPool", name: "pool", type: "address" },
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "indexToken", type: "address" },
            {
                internalType: "address",
                name: "collateralToken",
                type: "address",
            },
            { internalType: "address", name: "payToken", type: "address" },
            { internalType: "uint256", name: "expiresAt", type: "uint256" },
            {
                internalType: "uint256",
                name: "submissionBlock",
                type: "uint256",
            },
            { internalType: "uint256", name: "price", type: "uint256" },
            { internalType: "uint256", name: "executionFee", type: "uint256" },
            {
                internalType: "bool",
                name: "triggerAboveThreshold",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "enum UpdatePositionType",
                name: "_updateType",
                type: "uint8",
            },
            { internalType: "enum Side", name: "_side", type: "uint8" },
            { internalType: "address", name: "_indexToken", type: "address" },
            {
                internalType: "address",
                name: "_collateralToken",
                type: "address",
            },
            {
                internalType: "enum OrderType",
                name: "_orderType",
                type: "uint8",
            },
            { internalType: "bytes", name: "data", type: "bytes" },
        ],
        name: "placeOrder",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_tokenIn", type: "address" },
            { internalType: "address", name: "_tokenOut", type: "address" },
            { internalType: "uint256", name: "_amountIn", type: "uint256" },
            { internalType: "uint256", name: "_minOut", type: "uint256" },
            { internalType: "uint256", name: "_price", type: "uint256" },
        ],
        name: "placeSwapOrder",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "pool",
        outputs: [
            {
                internalType: "contract IWhitelistedPool",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_oracle", type: "address" },
            { internalType: "address", name: "_executor", type: "address" },
        ],
        name: "reinit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "requests",
        outputs: [
            { internalType: "enum Side", name: "side", type: "uint8" },
            { internalType: "uint256", name: "sizeChange", type: "uint256" },
            { internalType: "uint256", name: "collateral", type: "uint256" },
            {
                internalType: "enum UpdatePositionType",
                name: "updateType",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_executor", type: "address" },
        ],
        name: "setExecutor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "_fee", type: "uint256" }],
        name: "setMinExecutionFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "_oracle", type: "address" }],
        name: "setOracle",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "_hook", type: "address" }],
        name: "setOrderHook",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "_pool", type: "address" }],
        name: "setPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_fromToken", type: "address" },
            { internalType: "address", name: "_toToken", type: "address" },
            { internalType: "uint256", name: "_amountIn", type: "uint256" },
            { internalType: "uint256", name: "_minAmountOut", type: "uint256" },
        ],
        name: "swap",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "swapOrders",
        outputs: [
            { internalType: "contract IPool", name: "pool", type: "address" },
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "tokenIn", type: "address" },
            { internalType: "address", name: "tokenOut", type: "address" },
            { internalType: "uint256", name: "amountIn", type: "uint256" },
            { internalType: "uint256", name: "minAmountOut", type: "uint256" },
            { internalType: "uint256", name: "price", type: "uint256" },
            { internalType: "uint256", name: "executionFee", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
        ],
        name: "userOrders",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
        ],
        name: "userSwapOrders",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "weth",
        outputs: [
            { internalType: "contract IWETH", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    { stateMutability: "payable", type: "receive" },
]

module.exports = {
    oracleAbi,
    orderManagerAbi,
}
