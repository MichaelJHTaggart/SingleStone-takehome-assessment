// These are my first tests ever written!
// These tests are classified as 

import { SetupSteps } from './SetupSteps';
import { waitFor, render } from '@testing-library/react';

describe('SetupSteps', () => {
  describe('render', () => {
    it('Should return a container', () => {
      const { container } = render(<SetupSteps />);
      expect(container).toBeDefined();
    });
    it('How it works is displayed', () => {
      const { getByText } = render(<SetupSteps />);
      const stepNumber = getByText('How It Works');
      expect(stepNumber).toBeDefined();
    });
   
   it('should render numbers 01-04', async () => {
    const { getByText } = render(<SetupSteps />);
    await waitFor(() => {
     const one = getByText('01')
     const two = getByText('02')
     const three = getByText('03')
     const four = getByText('04')
     expect(one).toBeDefined()
     expect(two).toBeDefined()
     expect(three).toBeDefined()
     expect(four).toBeDefined()
    })
   })
  });
});

// I would want to write a test that verifies which date is the most recent in the effectiveDate array, and make sure that the date is matched with the remaining date left in the array.