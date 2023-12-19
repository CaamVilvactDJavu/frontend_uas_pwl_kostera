import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import Register from '@/auth/user/Register';

jest.mock('axios');

describe('Register', () => {
  it('should render Register component', () => {
    render(<Register />);
    expect(screen.getByText('Daftar')).toBeInTheDocument();
    expect(screen.getByText('Masukkan Username dan Password !')).toBeInTheDocument();
  });

  it('should handle registration successfully', async () => {
    axios.post.mockResolvedValueOnce({
      data: { token: 'testtoken' },
    });

    render(<Register />);

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const registerButton = screen.getByText('Daftar');

    userEvent.type(usernameInput, 'testuser');
    userEvent.type(passwordInput, 'testpassword');

    userEvent.click(registerButton);

    await waitFor(() => expect(axios.post).toHaveBeenCalledWith('api/v1/auth/register', {
      username: 'testuser',
      password: 'testpassword',
    }));

  });

  it('should handle registration failure and display error messages', async () => {
    axios.post.mockRejectedValueOnce({
      message: 'test error message',
    });

    render(<Register />);

    const registerButton = screen.getByText('Daftar');

    userEvent.click(registerButton);

    await waitFor(() =>
      expect(axios.post).toHaveBeenCalledWith('api/v1/auth/register', {
        username: '',
        password: '',
      })
    );

    expect(screen.getByText('Pendaftaran gagal. Silahkan coba lagi.')).toBeInTheDocument();
  });
});
