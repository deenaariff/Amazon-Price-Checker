
function _getPrices () {

      var util = require('util'),
          OperationHelper = require('apac').OperationHelper;

      var opHelper = new OperationHelper({
          awsId: 'AKIAI2L3IDUXFQHRDTRQ',
          awsSecret: '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',
          assocId: 'amazpricchec-20'
        });

      opHelper.execute('ItemLookup', {

          'ItemId':'B00008OE6I',
          'ResponseGroup': 'OfferSummary'

      }, function(err, results) {
          if (err)
            console.log('ERROR: ' + err);
          else {
            console.log("SUCCESFUL");
            console.log(results);
          }
      });

};


function _pollData (timeout, err, callback) {

      var endTime = Number(new Date()) + (timeout || 2000);
      if (data) {
          for (object in data) {
              var currentPrice = getPrice(object);
              if (object.watchprice) {
                if (object.watchPrice > currentPrice) object.price = currentPrice;
                sendEmail(object);
              }
              else {
                if (object.price > currentPrice) object.price = currentPrice;
                sendEmail(object);
              }
          }
      }

      function recursiveCall () {
            if (new Data() > endTime) pollData(data);
            else recursiveCall();
      }

      recursiveCall();
};


module.exports = {

  getPrices: _getPrices,
  pollData: _pollData

};
