import { createFilteredBeerList, createNamedBeerList } from '../../src/utils/Helpers';
import  beers from '../fixtures/data';

test('should filter by abv value less than 1', () => {
    const result = createFilteredBeerList(beers,'abv', '  0,1');
    expect(result).toEqual([beers[10]]);
});
test('should filter by abv value from 1 to 4', () => {
    const result = createFilteredBeerList(beers,'abv', '  1,4');
    expect(result).toEqual([beers[5]])
});
test('should filter by abv value from 4 to 7', () => {
    const result = createFilteredBeerList(beers,'abv', '  4,7');
    expect(result).toEqual([beers[0], beers[4], beers[7], beers[9]])
});
test('should filter by abv value from 7 to 10', () => {
    const result = createFilteredBeerList(beers,'abv', '  7,10');
    expect(result).toEqual([beers[2], beers[8]])
});
test('should filter by abv value from 10 to 90', () => {
    const result = createFilteredBeerList(beers,'abv', ' 10,90');
    expect(result).toEqual([beers[1], beers[3], beers[6]])
});

test('should filter by IBU value 0 to 24', () => {
    const result = createFilteredBeerList(beers,'ibu', '  0,24');
    expect(result).toEqual([beers[3]]);
});
test('should filter by IBU value 25 to 49', () => {
    const result = createFilteredBeerList(beers,'ibu', ' 25,49');
    expect(result).toEqual([beers[0], beers[4], beers[5]]);
});
test('should filter by IBU value 50 to 74', () => {
    const result = createFilteredBeerList(beers,'ibu', ' 50,74');
    expect(result).toEqual([beers[2], beers[7], beers[8], beers[9], beers[10]]);
});
test('should filter by IBU value 75 to 99', () => {
    const result = createFilteredBeerList(beers,'ibu', ' 75,99');
    expect(result).toEqual([beers[6]]);
});
test('should filter by IBU value 100 to 120', () => {
    const result = createFilteredBeerList(beers,'ibu', '100,120');
    expect(result).toEqual([beers[1]]);
});
test('should filter by beer type ale ', () => {
    const result = createNamedBeerList(beers, 'ale');
    expect(result).toEqual([beers[8], beers[10]]);
});
test('should filter by beer type ipa ', () => {
    console.log(beers[2].tagline.toLowerCase())
    const result = createNamedBeerList(beers, 'ipa');
    expect(result).toEqual([beers[2],beers[7], beers[9]]);
});
test('should filter by beer type lager ', () => {
    const result = createNamedBeerList(beers, 'lager');
    expect(result).toEqual([]);
});
test('should filter by beer type stout ', () => {
    const result = createNamedBeerList(beers, 'stout');
    expect(result).toEqual([beers[6]]);
});
test('should filter by beer type wheat ', () => {
    const result = createNamedBeerList(beers, 'wheat');
    expect(result).toEqual([beers[0], beers[4]]);
});