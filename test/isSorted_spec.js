import {isSorted} from '../src/isSorted'
import {expect} from 'chai'

describe('isSorted', () => {
  it('returns true if the array is sorted by ascending integer', () => {
    const array = [1,2,3,4,5]
    const ascending = (a, b) => { return a - b }
    expect(isSorted(array, ascending)).to.be.true
	})

  it('returns false if the array is not sorted by ascending integer', () => {
    const array = [2,1,3,4,5]
    const ascending = (a, b) => {  return a - b }
    expect(isSorted(array, ascending)).to.be.false
  })

  it('returns true if the array is sorted by descending integer', () => {
    const array = [5,4,3,2,1]
    const descending = (a, b) => { return b - a }
    expect(isSorted(array, descending)).to.be.true
  })

  it('returns false if the array is not sorted by descending integer', () => {
    const array = [5,2,4,3,1]
    const descending = (a, b) => { return b - a }
    expect(isSorted(array, descending)).to.be.false
  })


})
