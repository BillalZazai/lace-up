const axios = require ('axios').default;
module.exports =  {

  getStockXProducts: async function (keyword, numberOfHits)  {
    console.log (`Requesting keyword:${keyword} and number of hits: ${numberOfHits} from StockX`);
    const url = 'https://xw7sbct9v6-1.algolianet.com/1/indexes/products/query?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%203.32.1&x-algolia-application-id=XW7SBCT9V6&x-algolia-api-key=6bfb5abee4dcd8cea8f0ca1ca085c2b3';
    //returns array with JSON objects
    return await axios.post(url,{query:keyword,facets:'*',filters:'',hitsPerPage:numberOfHits} )
    .then ( (response)=>{
      return response.data.hits;
    } )
    .then ((data)=>{
      return data;
    })
    .catch ( (error)=>{
      console.log (error);
      return "No Products";
    } );
  },

  getGoatProducts: function (keyword, numberOfHits) {
    console.log (`Requesting keyword:${keyword} and number of hits: ${numberOfHits} from Goat`);
    const url = 'https://2fwotdvm2o-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%20(lite)%203.25.1%3Breact%20(16.9.0)%3Breact-instantsearch%20(6.2.0)%3BJS%20Helper%20(3.1.0)&x-algolia-application-id=2FWOTDVM2O&x-algolia-api-key=ac96de6fef0e02bb95d433d8d5c7038a';
    //returns array with JSON objects
    return  axios.post(url,{params:`query=${keyword}&facets=*&filters=&hitsPerPage=${numberOfHits}`} )
    .then ( (response)=>{
      return response.data.hits;
    } )
    .then ((data)=>{
      return data;
    })
    .catch ( (error)=>{
      console.log (error);
      return "No Products";
    } );
  }

}
