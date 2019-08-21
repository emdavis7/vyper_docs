/* eslint-disable */

const EmbarkJS = require("/home/eric/vyper_docs/erc721/embarkArtifacts/modules/embarkjs").default || require("/home/eric/vyper_docs/erc721/embarkArtifacts/modules/embarkjs");
EmbarkJS.environment = 'development';
global.EmbarkJS = EmbarkJS;

const Web3 = global.__Web3 || require('/home/eric/vyper_docs/erc721/embarkArtifacts/modules/web3');
global.Web3 = Web3;

      const __embarkWeb3 = require('/home/eric/vyper_docs/erc721/embarkArtifacts/modules/embarkjs-web3');
      EmbarkJS.Blockchain.registerProvider('web3', __embarkWeb3.default || __embarkWeb3);
      EmbarkJS.Blockchain.setProvider('web3', {});
    
if (!global.__Web3) {
  const web3ConnectionConfig = require('/home/eric/vyper_docs/erc721/embarkArtifacts/config/blockchain.json');
  EmbarkJS.Blockchain.connect(web3ConnectionConfig, (err) => {if (err) { console.error(err); } });
}if (typeof web3 === 'undefined') {
        throw new Error('Global web3 is not present');
      }
      EmbarkJS.Blockchain.setProvider('web3', {web3});
        const __embarkWhisperNewWeb3 = require('/home/eric/vyper_docs/erc721/embarkArtifacts/modules/embarkjs-whisper');
        EmbarkJS.Messages.registerProvider('whisper', __embarkWhisperNewWeb3.default || __embarkWhisperNewWeb3);
      
        const __embarkIPFS = require('/home/eric/vyper_docs/erc721/embarkArtifacts/modules/embarkjs-ipfs');
        EmbarkJS.Storage.registerProvider('ipfs', __embarkIPFS.default || __embarkIPFS);
      
var whenEnvIsLoaded = function(cb) {
  if (typeof document !== 'undefined' && document !== null && !/comp|inter|loaded/.test(document.readyState)) {
      document.addEventListener('DOMContentLoaded', cb);
  } else {
    cb();
  }
}
whenEnvIsLoaded(function() {
  
        const __embarkWhisperNewWeb3 = require('/home/eric/vyper_docs/erc721/embarkArtifacts/modules/embarkjs-whisper');
        EmbarkJS.Messages.registerProvider('whisper', __embarkWhisperNewWeb3.default || __embarkWhisperNewWeb3);
      
});
whenEnvIsLoaded(function() {
  
EmbarkJS.Messages.setProvider('whisper', {"server":"localhost","port":8546,"type":"ws"});
});

var whenEnvIsLoaded = function(cb) {
  if (typeof document !== 'undefined' && document !== null && !/comp|inter|loaded/.test(document.readyState)) {
      document.addEventListener('DOMContentLoaded', cb);
  } else {
    cb();
  }
}
whenEnvIsLoaded(function() {
  
        const __embarkIPFS = require('/home/eric/vyper_docs/erc721/embarkArtifacts/modules/embarkjs-ipfs');
        EmbarkJS.Storage.registerProvider('ipfs', __embarkIPFS.default || __embarkIPFS);
      
});
whenEnvIsLoaded(function() {
  
EmbarkJS.Storage.setProviders([{"provider":"ipfs","host":"localhost","port":5001,"getUrl":"http://localhost:8080/ipfs/"}], {web3});
});

var whenEnvIsLoaded = function(cb) {
  if (typeof document !== 'undefined' && document !== null && !/comp|inter|loaded/.test(document.readyState)) {
      document.addEventListener('DOMContentLoaded', cb);
  } else {
    cb();
  }
}
"use strict";

if (typeof WebSocket !== 'undefined') {
  const ws = new WebSocket(`${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.hostname}:${location.port}`);
  ws.addEventListener('message', evt => {
    if (evt.data === 'outputDone') {
      location.reload(true);
    }
  });
}
//# sourceMappingURL=reload-on-change.js.map
export default EmbarkJS;
if (typeof module !== 'undefined' && module.exports) {
	module.exports = EmbarkJS;
}
/* eslint-enable */
