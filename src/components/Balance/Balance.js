import config from '@/config';

export default {
  name: 'Balance',
  data() {
    return {
      balance: 0,
      tokenBalance: 0,
      cbugSymbol: config.CBUG_SYMBOL
    }
  },
  async mounted() {
    // https://docs.moralis.io/moralis-server/web3-sdk/account
    const options = { chain: config.BSC_TESTNET_CHAIN_ID }; // chain must be specified for correct balance retrival
    const balance = await Moralis.Web3API.account.getNativeBalance(options);
    const tokenBalances = await Moralis.Web3API.account.getTokenBalances(options);

    if (tokenBalances && tokenBalances.length) {
      const cbugBalance = tokenBalances.find(x => x.symbol === config.CBUG_SYMBOL);
      if (cbugBalance) {
        this.tokenBalance = Moralis.Units.FromWei(cbugBalance.balance, cbugBalance.decimals);
      }
    }

    console.log("token balances: ", tokenBalances)
    // https://docs.moralis.io/moralis-server/tools/moralis-units
    this.balance = Moralis.Units.FromWei(balance.balance, 18);
  }
}
