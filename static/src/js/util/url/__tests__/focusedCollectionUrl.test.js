import { decodeUrlParams, encodeUrlQuery } from '../url'

import { emptyDecodedResult } from './url.mocks'

describe('url#decodeUrlParams', () => {
  test('decodes focusedCollection correctly', () => {
    const expectedResult = {
      ...emptyDecodedResult,
      focusedCollection: 'collectionId'
    }
    expect(decodeUrlParams('?p=collectionId')).toEqual(expectedResult)
  })
})

describe('url#encodeUrlQuery', () => {
  test('encodes focusedCollection correctly', () => {
    const props = {
      hasGranulesOrCwic: true,
      pathname: '/path/here',
      focusedCollection: 'collectionId'
    }
    expect(encodeUrlQuery(props)).toEqual('/path/here?p=collectionId')
  })
})
