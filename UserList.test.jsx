import { render, screen, waitFor } from '@testing-library/react';
import UserList from '../UserList';
import axios from 'axios';

jest.mock('axios');

test('fetches and displays users', async () => {
  axios.get.mockResolvedValue({ data: [{ name: 'Hassan' }] });
  render(<UserList />);
  await waitFor(() => expect(screen.getByText(/Hassan/)).toBeInTheDocument());
});