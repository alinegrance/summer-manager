const fs = require('fs').promises;
const path = require('path');



const readSummers = async() => {
  const summers = await fs.readFile(path.resolve(__dirname, '../summer.json'), 'utf-8');
  console.log("SUMMERS PRINT" + summers);
  if(!summers) {
    return [];
  }
  return JSON.parse(summers);
}

const readSummersTryCatch = async() => {
  try{
    const summers = await fs.readFile(path.resolve(__dirname, '../summer.json'), 'utf-8');
    return JSON.parse(summers);
  } catch(e){
    return []
  }
}

const writeSummer = async(summer) => {
  const summerJson = JSON.stringify(summer)
  await fs.writeFile(path.resolve(__dirname, '../summer.json'), summerJson);
}

module.exports = {readSummers, readSummersTryCatch, writeSummer}