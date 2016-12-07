'use strict';
module.exports = function() {

  //Private variables
  var jaysVault ={};

  //private methods
  function setValue(prop, val){
    jaysVault[prop] = val;
  }

  function getValue(key){
    if(jaysVault[key]){
      return jaysVault[key];
    }
    else {
      return null;
    }
  }

  return {
    getValue: getValue,
    setValue: setValue
  }

};