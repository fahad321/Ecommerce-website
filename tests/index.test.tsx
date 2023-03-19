import { render, screen, waitFor } from '@testing-library/react'
import ProductTile from '../components/products/ProductTile'

describe('ProductTile', () => {
  it('renders a heading', () => {
    const { container } = render(<ProductTile isSale={false} productImage="/test.png" productName='Pre Blonder Crate' price='$10' />)
    const link = screen.getAllByRole('link', {
      name: "Pre Blonder Crate Pre Blonder Crate $10",
    })
    waitFor(() => expect(link).toBeInTheDocument());
  
    const image = screen.getAllByRole('img', {
      name: "Pre Blonder Crate",
    })
    waitFor(() => expect(image).toBeInTheDocument());
  })
})