var TrezorProvider = require("@daonomic/trezor-wallet-provider");
var ProviderEngine = require("web3-provider-engine");
var FiltersSubprovider = require('web3-provider-engine/subproviders/filters.js');
var Web3Subprovider = require("web3-provider-engine/subproviders/web3.js");
var Web3 = require("web3");

module.exports = function(url, path) {
    var engine = new ProviderEngine();
    engine.addProvider(new TrezorProvider(path));
	engine.addProvider(new FiltersSubprovider());
	engine.addProvider(new Web3Subprovider(new Web3.providers.HttpProvider(url)));
	engine.start();
	return engine;
};

