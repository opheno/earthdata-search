import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { granuleResultsBodyProps, formattedGranuleInformation } from './mocks'

import GranuleDetailsInfo from '../GranuleDetailsInfo'
import Spinner from '../../Spinner/Spinner'

Enzyme.configure({ adapter: new Adapter() })

function setup(overrideProps) {
  const props = {
    xml: null,
    ...overrideProps
  }

  const enzymeWrapper = shallow(<GranuleDetailsInfo {...props} />)

  return {
    enzymeWrapper,
    props
  }
}

describe('GranuleDetailsInfo component', () => {
  describe('when the metadata is not provided', () => {
    test('renders a loading state', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find(Spinner).length).toEqual(1)
    })
  })

  describe('when the metadata has been provided', () => {
    test('renders the info', () => {
      const { enzymeWrapper } = setup({
        xml: granuleResultsBodyProps.xml
      })

      expect(enzymeWrapper.type()).toBe('div')
      expect(enzymeWrapper.prop('className')).toBe('granule-details-info')
      expect(enzymeWrapper.find('.granule-details-info__content').length).toEqual(1)
    })

    test('renders formatted granule details correctly', () => {
      const { enzymeWrapper } = setup({
        xml: granuleResultsBodyProps.xml
      })

      expect(enzymeWrapper.find('.granule-details-info__content').text()).toEqual(formattedGranuleInformation)
    })
  })
})
