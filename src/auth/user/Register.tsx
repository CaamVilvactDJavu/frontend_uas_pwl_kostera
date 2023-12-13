import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLoginClick = () => navigate("/login");

  const handleRegister = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("api/v1/auth/register", {
        username,
        password,
      });

      const { token, message } = response.data;
      if (token) {
        navigate("/login");
      } else {
        if (message.includes("Username must be between 5 and 16 characters")) {
          toast.error("Username harus antara 5 sampai 16 karakter.");
        } else if (
          message.includes(
            "Username already exists. Please choose a different one.",
          )
        ) {
          toast.error(
            "Username sudah ada. Silahkan gunakan username yang lain.",
          );
        } else {
          toast.error("Pendaftaran gagal. Silahkan coba lagi.");
        }
      }
    } catch (error) {
      console.error("Registered error");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-6 md:p-14">
            <span className="mb-3 text-4xl font-bold">Daftar</span>
            <span className="font-light text-gray-400 mb-8">
              Masukkan Username dan Password !
            </span>
            <form onSubmit={handleRegister}>
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
              <Button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-slate-800"
              >
                Daftar
              </Button>
            </form>
            <div className="text-sm mt-3 text-right">
              Sudah memiliki akun?{" "}
              <span
                className="font-bold cursor-pointer"
                onClick={handleLoginClick}
              >
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
