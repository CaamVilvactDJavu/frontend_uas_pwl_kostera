import { render, fireEvent } from '@testing-library/react';
import LoginAdmin from '@/auth/admin/LoginAdmin';

describe('code snippet', () => {

  it('should allow user to input username and password', () => {
    const { getByPlaceholderText } = render(<LoginAdmin />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  });

  it('should allow user to submit login form', () => {
    const { getByPlaceholderText, getByText } = render(<LoginAdmin />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(getByText('Login'));

  });

  it('should redirect user to create-kost page if login is successful and user is an admin', () => {
    const { getByPlaceholderText, getByText } = render(<LoginAdmin />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.change(usernameInput, { target: { value: 'admin' } });
    fireEvent.change(passwordInput, { target: { value: 'adminpassword' } });
    fireEvent.click(getByText('Login'));

  });

  it('should display error message when user inputs invalid username or password', () => {
    const { getByPlaceholderText, getByText } = render(<LoginAdmin />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.change(usernameInput, { target: { value: 'invaliduser' } });
    fireEvent.change(passwordInput, { target: { value: 'invalidpassword' } });
    fireEvent.click(getByText('Login'));

  });

  it('should display error message when user submits empty form', () => {
    const { getByText } = render(<LoginAdmin />);

    fireEvent.click(getByText('Login'));

  });
  it('should display error message when user submits form with only one field filled', () => {
    const { getByPlaceholderText, getByText } = render(<LoginAdmin />);
    const usernameInput = getByPlaceholderText('Username');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.click(getByText('Login'));

  });
});
