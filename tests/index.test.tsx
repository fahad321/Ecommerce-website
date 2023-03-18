import { render, screen, waitFor } from '@testing-library/react'
import ProductTile from '../components/products/ProductTile'

describe('ProductTile', () => {
  it('renders a heading', () => {
    const { container } = render(<ProductTile isSale={false} productImage="/test.png" productName='Pre Blonder Crate' price='$10' />)

    const heading = screen.getAllByRole('link', {
      name: "Pre Blonder Crate Pre Blonder Crate $10",
    })

    waitFor(() => expect(heading).toBeInTheDocument());

  })
})