const IpfsHttpClient = require('ipfs-http-client')
const ipfs = IpfsHttpClient('http://127.0.0.1:5002')
const { globSource } = IpfsHttpClient
const infoLink = require('./InfoLink/Link-Array.json')
let AllLinks = []
const NFT = artifacts.require("NFT")
const fs = require('fs');

// !(migrate --reset) contract before running the script!

module.exports = async function(callback) {
  try {

        //Link-Array.json code to insert it for use 
        for (let i = 1; i < infoLink.length; i++) {
          AllLinks.push({
            input:{link: infoLink[i] }
          })
}
function linkIt(AllLinks)
{return AllLinks}
linkIt(AllLinks)
let result = linkIt({link: infoLink})

    

    let Attributes = [];
    Attributes.push(
      [{Camobera: 24},{ColorFlash: 20},{Basic: 23},{LeafLoaf: 34},{Spark: 23},{SolarCitrine: 12},{GentleViolet: 11},{WildGold: 8},{RedGold: 9}],
      [{Hyppeus: 23},{Firework: 18}, {Gala: 3}, {LeafLoaf: 34}, {Spiral:23}, {PureViolet: 10}, {Mustard: 2}, {WhiteDiamond: 3},{DarkWine: 11}],
      [{Camobera: 24},{Shimmer: 19}, {Curly: 15}, {ScalyStalk: 32}, {Spark: 23}, {HeavenlyTopaz: 8}, {GentleViolet:11}, {WhiteDiamond: 3},{Grapes: 9}],
      [{Camobera: 24},{Shimmer: 19},{Basic: 23},{ScalyStalk: 32},{Spark: 23},{SolarCitrine: 12},{GentleViolet: 11},{WildGold: 8},{RedGold: 9}],
      [{Camobera: 24},{Shimmer: 19},{Scaly: 14},{LeafLoaf: 34},{Glow:24},{HeavenlyTopaz: 8},{LightBlue: 9},{WildGold: 8},{BrightYellow: 10}],
      [{Camobera : 24}, {Shimmer : 19}, {Curly : 15}, {LeafLoaf : 34}, {Glow : 24}, {PureGreen : 10}, {EarlySpring : 10},{WildGold : 8}, {BrightYellow : 10}],
      [{Camobera: 24},{Firework: 18},{Curly: 15},{LeafLoaf : 34},{Glow: 24},{MagicAmethyst: 9},{BrightRed: 11},{WildGold: 8},{SnowWhite: 8}],
      [{Hyppeus: 23},{TwinLine: 18}, {Curly: 15}, {LeafLoaf: 34}, {Spark:23}, {HeavenlyTopaz: 8}, {BrightRed: 11}, {WildGold: 8}, {CaptivatingNight: 8}],
      [{Charmeony: 2},{TwinLine: 18},{Hairy: 5},{ScalyStalk: 32},{Spark: 23},{HeavenlyTopaz: 8},{HoneyHeart: 2},{AcidPink: 2},{LavanderSky: 1}], 
      [{Camobera: 24},{TwinLine: 18},{Onion: 20},{LeafLoaf: 34},{Spiral: 23},{HeavenlyTopaz: 8},{Mustard: 2},{Mango: 10},{DarkWine: 2}],  
      [{Hyppeus: 23},{Shimmer: 18}, {Curly: 15}, {LeafLoaf: 34}, {Spiral:23}, {HeavenlyTopaz: 8}, {LightBlue: 9}, {StrongBlue: 11},{DarkWine: 2}],
      [{Hyppeus: 23},{TwinLine: 18}, {Curly: 15}, {LeafLoaf: 34}, {Spark:23}, {HeavenlyTopaz: 8},{GentleViolet: 11},{SunnyGreen: 8},{RedGold: 9}],
      [{Astralia: 21},{Shimmer: 19},{Curly: 15},{LeafLoaf: 34},{Spiral: 23},{PureViolet: 10},{GentleViolet: 11},{WildGold: 8},{RedGold: 9}],
      [{Hyppeus: 23},{TwinLine: 18}, {Curly: 15}, {LeafLoaf: 34}, {Spark:23}, {PureViolet: 8}, {BrightRed: 11}, {WildGold: 8}, {CaptivatingNight: 8}],
      [{Hyppeus: 23},{TwinLine: 18},{Gala: 3},{ScalyStalk: 32},{Spark: 23},{HeavenlyTopaz: 8},{LightBlue: 9},{StrongBlue: 11},{DarkWine: 2}],                   
      [{Hyppeus: 23},{TwinLine: 18},{Hairy: 5},{ScalyStalk: 32},{Spiral: 23},{HeavenlyTopaz: 8},{BananaMix: 12},{StrongBlue: 11},{DarkWine: 2}],
      [{Engine_type: 'D'},{Max_LightSpeed: 0.01},{Gargo_Space: 0},{Special_Ability: 'minter'}],
      [{Sunhoia: 24},{BasicPetal: 19},{Curly: 15},{LeafLoaf: 34},{Spiral: 23},{HeavenlyTopaz: 8},{WhitBlizzard: 1},{Mango: 10},{CopperShimmer: 1}],
      [{Camobera: 24},{Dawn: 5}, {Onion: 20}, {ScalyStalk: 32}, {Spark: 23}, {Cappuccino: 1}, {HoneyHeart: 2}, {Bubblegum: 2},{LavanderSky: 1}],
      [{Hyppeus: 23},{TwinLine: 18}, {Hairy: 5}, {LeafLoaf: 34}, {Spiral:23}, {HeavenlyTopaz: 8}, {WhiteBlizzard: 1}, {GreenSapphire: 8}, {DarkWine: 11}],
      [{Hyppeus: 23},{Dawn: 5}, {Curly: 15}, {LeafLoaf: 34}, {Ring: 5}, {PureViolet: 10}, {EarlySpring: 10}, {WhiteDiamond: 3},{DarkWine: 2}],             
      [{CommonMallow: 4},{Firework: 18}, {Hairy: 5}, {LeafLoaf: 34}, {Ring: 5}, {PureGreen: 10}, {EarlySprping: 10}, {WhiteDiamond: 3},{DarkWine: 2}],
      [{Astralia: 21},{ColorFlash: 20},{Basic: 23},{LeafLoaf: 34},{Spark: 23},{SolarCitrine: 12},{GentleViolet: 11},{WildGold: 8},{DarkWine: 2}]
);


    let nftsData = [] //NFT's database for front-end
    const nft = await NFT.deployed()
    const accounts = await web3.eth.getAccounts()

    console.log('\nUploading images on IPFS...')
    let files = fs.readdirSync(`${__dirname}/gallery`);
    let upload = await ipfs.add(globSource(`${__dirname}/gallery`, { recursive: true }))

    console.log('\nPreparing metadata directory...')
    await fs.rmdirSync(`${__dirname}/metadata`, { recursive: true }, callback);
    await fs.mkdirSync(`${__dirname}/metadata`, { recursive: true }, callback);

    console.log('\nCreating metadata...')
    for(let i=0; i<files.length; i++){
      let metadata = JSON.stringify({
        "name": `${/[^.]*/.exec(files[i])[0]}`,
        "description": "CRYPTO GARDEN @rt - X, 21/09/01, ~CRYPTG",
        "image": `https://ipfs.io/ipfs/${upload.cid.toString()}/${files[i]}`,
        "spects": result.link.infoLink[i],
        "attributes": Attributes[i]
      }, null, '\t');

      var img = fs.readFileSync(`${__dirname}/gallery/${files[i]}`, {encoding: 'base64'});
      nftsData.push(metadata.slice(0, -2) + `,\n\t"img": "${img}"` + `,\n\t"id": ${i+1}\n}`)

      // nftsData.push(metadata.slice(0, -2) + `,\n\t"id": ${i+1}\n}`) //add metadata&id to nftsData
      await fs.writeFileSync(`${__dirname}/metadata/${/[^.]*/.exec(files[i])[0]}.json`, metadata)
    }

    console.log('\nUploading metadata on IPFS...')
    files = fs.readdirSync(`${__dirname}/metadata`);
    upload = await ipfs.add(globSource(`${__dirname}/metadata`, { recursive: true }))

    console.log('\nMinting NFTs...')
    for(let i=0; i<files.length; i++){
      await nft.mint(`https://ipfs.io/ipfs/${upload.cid.toString()}/${files[i]}`, web3.utils.toWei('1', 'Ether'))
      nftsData[i] = nftsData[i].slice(0, -2) + `,\n\t"price": ${await nft.price(i+1)},\n\t"uri": "${await nft.tokenURI(i+1)}"\n}` //add price&URI to nftsData
      console.log(`\n${i+1} NFT is minted with URI:\n${await nft.tokenURI(i+1)}`)
    }

    console.log('\nAggregating NFTs data...')
    if(fs.existsSync(`${__dirname}/nftsData.js`)) {
      await fs.unlinkSync(`${__dirname}/nftsData.js`)
    }
    await fs.writeFileSync(`${__dirname}/nftsData.js`, `export const nftsData = [${nftsData}]`)

    console.log('\n\nSuccess.')
  } catch(error) {
    console.log(error)
  }
  callback()
}