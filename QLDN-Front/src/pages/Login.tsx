// lan 1
// import { useState, FormEvent } from "react";
// import axios from "axios";

// export default function LoginRegister() {
//   const [isLogin, setIsLogin] = useState(true); // true = login, false = register
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [identifier, setIdentifier] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       if (isLogin) {
//         // Đăng nhập
//         const res = await axios.post("/api/auth/login", {
//           identifier,
//           password,
//         });

//         if (res.data.status === "success") {
//           setMessage(res.data.message);
//           localStorage.setItem("token", res.data.data.token);
//           console.log("User info:", res.data.data.user);
//         }
//       } else {
//         // Đăng ký
//         const res = await axios.post("/api/auth/register", {
//           username,
//           email,
//           password,
//         });

//         if (res.data.status === "success") {
//           setMessage(res.data.message);
//           console.log("Registered user:", res.data.data);
//         }
//       }
//     } catch (err: any) {
//       setMessage(err.response?.data?.message || "Có lỗi xảy ra");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex h-screen items-center justify-center bg-gray-900">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-lg shadow-lg w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           {isLogin ? "Đăng nhập" : "Đăng ký"}
//         </h2>

//         {!isLogin && (
//           <>
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </>
//         )}

//         {isLogin && (
//           <input
//             type="text"
//             placeholder="Username / Email"
//             value={identifier}
//             onChange={(e) => setIdentifier(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         )}

//         <input
//           type="password"
//           placeholder="Mật khẩu"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition disabled:opacity-50"
//         >
//           {loading
//             ? isLogin
//               ? "Đang đăng nhập..."
//               : "Đang đăng ký..."
//             : isLogin
//             ? "Đăng nhập"
//             : "Đăng ký"}
//         </button>

//         {message && (
//           <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
//         )}

//         <p
//           className="mt-4 text-center text-blue-500 cursor-pointer hover:underline"
//           onClick={() => {
//             setIsLogin(!isLogin);
//             setMessage("");
//             setPassword("");
//             setIdentifier("");
//             setUsername("");
//             setEmail("");
//           }}
//         >
//           {isLogin
//             ? "Chưa có tài khoản? Đăng ký ngay"
//             : "Đã có tài khoản? Đăng nhập"}
//         </p>
//       </form>
//     </div>
//   );
// }





// sua lan 2



// import { useState, FormEvent } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function AuthPage() {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [identifier, setIdentifier] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       if (isLogin) {
//         const res = await axios.post("/api/auth/login", {
//           identifier,
//           password,
//         });
//         setMessage(res.data.message);
//         localStorage.setItem("token", res.data.data.token);
//         navigate("/menu");
//       } else {
//         const res = await axios.post("/api/auth/register", {
//           username,
//           email,
//           password,
//         });
//         setMessage(res.data.message);
//         navigate("/menu");
//       }
//     } catch (err: any) {
//       setMessage(err.response?.data?.message || "Có lỗi xảy ra");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black">
//       <div className="bg-neutral-900 border border-neutral-800 p-10 rounded-lg w-[350px]">
//         {/* Logo */}
//         <h1 className="text-4xl font-[cursive] text-white text-center mb-8">
//           Arthur Chen
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {!isLogin && (
//             <>
//               <input
//                 type="text"
//                 placeholder="Tên người dùng"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 rounded focus:outline-none focus:border-blue-500"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 rounded focus:outline-none focus:border-blue-500"
//               />
//             </>
//           )}

//           {isLogin && (
//             <input
//               type="text"
//               placeholder="Tên người dùng hoặc email"
//               value={identifier}
//               onChange={(e) => setIdentifier(e.target.value)}
//               className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 rounded focus:outline-none focus:border-blue-500"
//             />
//           )}

//           <input
//             type="password"
//             placeholder="Mật khẩu"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 rounded focus:outline-none focus:border-blue-500"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded transition disabled:opacity-50"
//           >
//             {loading
//               ? isLogin
//                 ? "Đang đăng nhập..."
//                 : "Đang đăng ký..."
//               : isLogin
//               ? "Đăng nhập"
//               : "Đăng ký"}
//           </button>

//           {message && (
//             <p className="text-center text-sm text-gray-300">{message}</p>
//           )}
//         </form>

//         {/* Divider */}
//         <div className="flex items-center gap-4 my-6">
//           <div className="flex-1 h-px bg-neutral-700"></div>
//           <span className="text-neutral-500 text-sm">HOẶC</span>
//           <div className="flex-1 h-px bg-neutral-700"></div>
//         </div>

//         {/* Login with Facebook */}
//         <button className="w-full flex items-center justify-center gap-2 text-blue-500 hover:underline">
//           <i className="fab fa-facebook"></i> Đăng nhập bằng Facebook
//         </button>

//         {/* Quên mật khẩu */}
//         {isLogin && (
//           <p className="mt-4 text-center text-sm text-blue-500 hover:underline cursor-pointer">
//             Quên mật khẩu?
//           </p>
//         )}
//       </div>

//       {/* Switch mode */}
//       <div className="bg-neutral-900 border border-neutral-800 mt-4 p-6 rounded-lg w-[350px] text-center text-white">
//         {isLogin ? "Bạn chưa có tài khoản?" : "Bạn đã có tài khoản?"}{" "}
//         <span
//           className="text-blue-500 font-semibold cursor-pointer"
//           onClick={() => {
//             setIsLogin(!isLogin);
//             setMessage("");
//             setPassword("");
//             setIdentifier("");
//             setUsername("");
//             setEmail("");
//           }}
//         >
//           {isLogin ? "Đăng ký" : "Đăng nhập"}
//         </span>
//       </div>
//     </div>
//   );
//}



















// import { useState, FormEvent } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function AuthPage() {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [identifier, setIdentifier] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   // const handleSubmit = async (e: FormEvent) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setMessage("");

//   //   try {
//   //     if (isLogin) {
//   //       const res = await axios.post("/api/auth/login", {
//   //         identifier,
//   //         password,
//   //       });
//   //       setMessage(res.data.message);

//   //       // Lưu token + username
//   //       localStorage.setItem("token", res.data.data.token);
//   //       localStorage.setItem(
//   //         "username",
//   //         res.data.data.username || identifier // fallback
//   //       );
//   //       localStorage.setItem("email", res.data.data.email);
//   //       localStorage.setItem("role", res.data.data.role);

//   //       navigate("/menu");
//   //     } else {
//   //       const res = await axios.post("/api/auth/register", {
//   //         username,
//   //         email,
//   //         password,
//   //       });
//   //       setMessage(res.data.message);

//   //       // Sau khi đăng ký thì lưu username luôn
//   //       localStorage.setItem("token", res.data.data?.token || "");
//   //       localStorage.setItem("username", username);

//   //       navigate("/menu");
//   //     }
//   //   } catch (err: any) {
//   //     setMessage(err.response?.data?.message || "Có lỗi xảy ra");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };





//   const handleSubmit = async (e: FormEvent) => {
//   e.preventDefault();
//   setLoading(true);
//   setMessage("");

//   try {
//     if (isLogin) {
//       // ---- LOGIN ----
//       const res = await axios.post("/api/auth/login", {
//         identifier,
//         password,
//       });
//       setMessage(res.data.message);

//       const user = res.data.data;

//       localStorage.setItem("token", user.token);
//       localStorage.setItem("username", user.username || identifier);
//       localStorage.setItem("email", user.email || "example@email.com");
//       localStorage.setItem("role", user.role || "Nhân viên");

//       navigate("/menu");
//     } else {
//       // ---- REGISTER ----
//       const res = await axios.post("/api/auth/register", {
//         username,
//         email,
//         password,
//       });
//       setMessage(res.data.message);

//       const user = res.data.data || {};

//       localStorage.setItem("token", user.token || "");
//       localStorage.setItem("username", user.username || username);
//       localStorage.setItem("email", user.email || email);
//       localStorage.setItem("role", user.role || "Nhân viên");

//       navigate("/menu");
//     }
//   } catch (err: any) {
//     setMessage(err.response?.data?.message || "Có lỗi xảy ra");
//   } finally {
//     setLoading(false);
//   }
// };


//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black">
//       <div className="bg-neutral-900 border border-neutral-800 p-10 rounded-lg w-[350px]">
//         <h1 className="text-4xl font-[cursive] text-white text-center mb-8">
//           Arthur Chen
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {!isLogin && (
//             <>
//               <input
//                 type="text"
//                 placeholder="Tên người dùng"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 rounded focus:outline-none focus:border-blue-500"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 rounded focus:outline-none focus:border-blue-500"
//               />
//             </>
//           )}

//           {isLogin && (
//             <input
//               type="text"
//               placeholder="Tên người dùng hoặc email"
//               value={identifier}
//               onChange={(e) => setIdentifier(e.target.value)}
//               className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 rounded focus:outline-none focus:border-blue-500"
//             />
//           )}

//           <input
//             type="password"
//             placeholder="Mật khẩu"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 rounded focus:outline-none focus:border-blue-500"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded transition disabled:opacity-50"
//           >
//             {loading
//               ? isLogin
//                 ? "Đang đăng nhập..."
//                 : "Đang đăng ký..."
//               : isLogin
//               ? "Đăng nhập"
//               : "Đăng ký"}
//           </button>

//           {message && (
//             <p className="text-center text-sm text-gray-300">{message}</p>
//           )}
//         </form>

//         <div className="flex items-center gap-4 my-6">
//           <div className="flex-1 h-px bg-neutral-700"></div>
//           <span className="text-neutral-500 text-sm">HOẶC</span>
//           <div className="flex-1 h-px bg-neutral-700"></div>
//         </div>

//         <button className="w-full flex items-center justify-center gap-2 text-blue-500 hover:underline">
//           <i className="fab fa-facebook"></i> Đăng nhập bằng Facebook
//         </button>

//         {isLogin && (
//           <p className="mt-4 text-center text-sm text-blue-500 hover:underline cursor-pointer">
//             Quên mật khẩu?
//           </p>
//         )}
//       </div>

//       <div className="bg-neutral-900 border border-neutral-800 mt-4 p-6 rounded-lg w-[350px] text-center text-white">
//         {isLogin ? "Bạn chưa có tài khoản?" : "Bạn đã có tài khoản?"}{" "}
//         <span
//           className="text-blue-500 font-semibold cursor-pointer"
//           onClick={() => {
//             setIsLogin(!isLogin);
//             setMessage("");
//             setPassword("");
//             setIdentifier("");
//             setUsername("");
//             setEmail("");
//           }}
//         >
//           {isLogin ? "Đăng ký" : "Đăng nhập"}
//         </span>
//       </div>
//     </div>
//   );
// }















import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [identifier, setIdentifier] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (isLogin) {
        // ---- LOGIN ----
        const res = await axios.post("/api/auth/login", {
          identifier,
          password,
        });

        setMessage(res.data.message);

        const { token, user } = res.data.data;

        // Lưu token & user info
        localStorage.setItem("token", token);
        localStorage.setItem("userId", user.id);
        localStorage.setItem("username", user.username);
        localStorage.setItem("email", user.email);
        localStorage.setItem("role", user.role || "Nhân viên");

        navigate("/menu");
      } else {
        // ---- REGISTER ----
        const res = await axios.post("/api/auth/register", {
          username,
          email,
          password,
        });

        setMessage(res.data.message);

        const { token, user } = res.data.data || {};

        if (token) {
          localStorage.setItem("token", token);
          if (user) {
            localStorage.setItem("userId", user.id);
            localStorage.setItem("username", user.username);
            localStorage.setItem("email", user.email);
            localStorage.setItem("role", user.role || "Nhân viên");
          }
        } else {
          // fallback nếu backend không trả user
          localStorage.setItem("username", username);
          localStorage.setItem("email", email);
          localStorage.setItem("role", "Nhân viên");
        }

        navigate("/menu");
      }
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="bg-neutral-900 border border-neutral-800 p-10 rounded-lg w-[350px]">
        <h1 className="text-4xl font-[cursive] text-white text-center mb-8">
          Space X
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Tên người dùng"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 rounded focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 rounded focus:outline-none focus:border-blue-500"
              />
            </>
          )}

          {isLogin && (
            <input
              type="text"
              placeholder="Tên người dùng hoặc email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 rounded focus:outline-none focus:border-blue-500"
            />
          )}

          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 rounded focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded transition disabled:opacity-50"
          >
            {loading
              ? isLogin
                ? "Đang đăng nhập..."
                : "Đang đăng ký..."
              : isLogin
              ? "Đăng nhập"
              : "Đăng ký"}
          </button>

          {message && (
            <p className="text-center text-sm text-gray-300">{message}</p>
          )}
        </form>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-neutral-700"></div>
          <span className="text-neutral-500 text-sm">HOẶC</span>
          <div className="flex-1 h-px bg-neutral-700"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 text-blue-500 hover:underline">
          <i className="fab fa-facebook"></i> Đăng nhập bằng Facebook
        </button>

        {isLogin && (
          <p className="mt-4 text-center text-sm text-blue-500 hover:underline cursor-pointer">
            Quên mật khẩu?
          </p>
        )}
      </div>

      <div className="bg-neutral-900 border border-neutral-800 mt-4 p-6 rounded-lg w-[350px] text-center text-white">
        {isLogin ? "Bạn chưa có tài khoản?" : "Bạn đã có tài khoản?"}{" "}
        <span
          className="text-blue-500 font-semibold cursor-pointer"
          onClick={() => {
            setIsLogin(!isLogin);
            setMessage("");
            setPassword("");
            setIdentifier("");
            setUsername("");
            setEmail("");
          }}
        >
          {isLogin ? "Đăng ký" : "Đăng nhập"}
        </span>
      </div>
    </div>
  );
}


