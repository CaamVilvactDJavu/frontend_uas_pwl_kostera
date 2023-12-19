import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { toast } from 'sonner';
import Login from '@/auth/user/Login';


describe('Login', () => {

  it('should render a login form with username and password inputs', () => {
    render(<Login />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('should allow user to input username and password', () => {
    render(<Login />);
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    userEvent.type(usernameInput, 'testuser');
    userEvent.type(passwordInput, 'testpassword');
    expect(usernameInput).toHaveValue('testuser');
    expect(passwordInput).toHaveValue('testpassword');
  });

  it('should submit the form when user clicks on the login button', async () => {
    const mockAxios = jest.spyOn(axios, 'post').mockResolvedValueOnce({
      data: { token: 'testtoken' },
    });
    render(<Login />);
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    userEvent.type(usernameInput, 'testuser');
    userEvent.type(passwordInput, 'testpassword');
    userEvent.click(screen.getByText('Login'));
    await waitFor(() => expect(mockAxios).toHaveBeenCalled());
    expect(mockAxios).toHaveBeenCalledWith('api/v1/auth/login', {
      username: 'testuser',
      password: 'testpassword',
    });
  });

  it('should display an error message if the server returns an error', async () => {
    const mockAxios = jest.spyOn(axios, 'post').mockRejectedValueOnce({
      message: 'test error message',
    });
    render(<Login />);
    userEvent.click(screen.getByText('Login'));
    await waitFor(() =>
      expect(mockAxios).toHaveBeenCalledWith('api/v1/auth/login', {
        username: '',
        password: '',
      })
    );
    expect(toast.error).toHaveBeenCalledWith('test error message');
  });

  it('should display an error message if the server response is missing the token', async () => {
    const mockAxios = jest.spyOn(axios, 'post').mockResolvedValueOnce({
      data: { message: 'test message' },
    });
    render(<Login />);
    userEvent.click(screen.getByText('Login'));
    await waitFor(() =>
      expect(mockAxios).toHaveBeenCalledWith('api/v1/auth/login', {
        username: '',
        password: '',
      })
    );
    expect(toast.error).toHaveBeenCalledWith('test message');
  });

  it('should display an error message if the server response is missing the message', async () => {
    const mockAxios = jest.spyOn(axios, 'post').mockResolvedValueOnce({
      data: { token: 'testtoken' },
    });
    render(<Login />);
    userEvent.click(screen.getByText('Login'));
    await waitFor(() =>
      expect(mockAxios).toHaveBeenCalledWith('api/v1/auth/login', {
        username: '',
        password: '',
      })
    );
    expect(console.error).toHaveBeenCalledWith(
      'Login failed:',
      undefined
    );
    expect(toast.error).toHaveBeenCalledWith(undefined);
  });
});

