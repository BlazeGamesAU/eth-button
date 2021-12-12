export default function getProvider(global) {
  // mist/metamask
  if (global.web3 !== undefined && global.ethereum) {
    return global.ethereum;
  }
  // todo: infura?
  return null;
}
