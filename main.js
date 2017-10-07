maxGasPriceInGwei = 500;
console.log('Gas Pump Extension - upping max Gas Price to ' + maxGasPriceInGwei);
document.querySelector('[ng-model="gas.value"]').setAttribute('max', maxGasPriceInGwei);

