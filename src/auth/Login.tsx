import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e:any) => {
    e.preventDefault();

    try {
      const response = await axios.post("api/v1/auth/login", {
        username,
        password,
      });

      const { token, message } = response.data;
      if (token) {
        localStorage.setItem("token", token);

        navigate("/");
      } else {
        console.error("Login failed:", message);
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-6 md:p-14">
            <span className="mb-3 text-4xl font-bold">Selamat Datang</span>
            <span className="font-light text-gray-400 mb-8">
              Masukkan Username dan Password !
            </span>
            <form onSubmit={handleLogin}>
              <div className="py-2">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name">Username</Label>
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="py-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

