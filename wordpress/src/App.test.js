import { render, screen } from '@testing-library/react';
import App from './App';
import Accueil from './Accueil';

test('renders learn react link', () => {
  
  render(<Accueil />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
