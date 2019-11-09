import yaml from 'js-yaml';
import fs from 'fs';
try {
    var doc = yaml.safeLoad(fs.readFileSync('./price-config.yml', 'utf8'));
    console.log(doc);
  } catch (e) {
    console.log(e);
  }
export const GOLD_PRICE_RATE = 3770.0
export const MAKING_CHARGES_RATE = 450.0
export const HM_CHARGES_RATE = 100.0
export const MC_DISCOUNT_PRCT = 0.0