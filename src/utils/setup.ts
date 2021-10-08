
// Enter the BNB amount to use 
const BNB_AMOUNT_TO_BUY = 0.0001 * 10 ** 18

// Enter the tokens to monitor so that the bot can buy them
const TOKENS_TO_MONITOR = [

    "0x6FF40f79B5c4b1Ea01f4765a7dFEd477cc6Bbe64"


]

// Slippage: to be used 
const SLIPPAGE = 10

//specify the number of times the bot should buy (spray gunning )

const NO_OF_BUYS = 1

export { SLIPPAGE, TOKENS_TO_MONITOR, BNB_AMOUNT_TO_BUY, NO_OF_BUYS }