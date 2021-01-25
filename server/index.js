
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const scraper = require ('./scraper');
const app = express()
const apiPort = 3030

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


app.post ('/products', (req, res) => {
  console.log (req.body)
  if ( !('keyword' in req.body || !('numberOfHits' in req.body) ) ){
    return res.status(400).send ("Invalid properties. Missing either keyword or numberOfHits property in body of request");
  }
  else {
    scraper.getStockXProducts (req.body.keyword , req.body.numberOfHits)
    .then  (data => {
      res.json (data)
    })
    .catch (error=>{
      console.log (error);
      res.send ("Error in /products")
    })
  }
})

app.post('/', (req, res) => {
  res.send ("Welcome to back end for StockX, Goat and Grailed Scraper API")
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
