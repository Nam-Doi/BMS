// // import React from 'react';
// // import { ArrowRight, Code, Palette, Zap, Github, Star, Users } from 'lucide-react';

// // function App() {
// //   const features = [
// //     {
// //       icon: <Code className="w-6 h-6" />,
// //       title: "TypeScript",
// //       description: "Full type safety and IntelliSense support for robust development"
// //     },
// //     {
// //       icon: <Palette className="w-6 h-6" />,
// //       title: "TailwindCSS",
// //       description: "Utility-first CSS framework for rapid UI development"
// //     },
// //     {
// //       icon: <Zap className="w-6 h-6" />,
// //       title: "Vite",
// //       description: "Lightning-fast build tool with instant hot module replacement"
// //     }
// //   ];

// //   const stats = [
// //     { label: "Components", value: "50+" },
// //     { label: "Developers", value: "10K+" },
// //     { label: "GitHub Stars", value: "25K+" },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
// //       {/* Header */}
// //       <header className="container mx-auto px-6 py-8">
// //         <nav className="flex items-center justify-between">
// //           <div className="flex items-center space-x-2">
// //             <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
// //             <span className="text-white font-bold text-xl">ReactStack</span>
// //           </div>
// //           <div className="hidden md:flex items-center space-x-8">
// //             <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
// //             <a href="#" className="text-gray-300 hover:text-white transition-colors">Docs</a>
// //             <a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a>
// //             <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
// //               Get Started
// //             </button>
// //           </div>
// //         </nav>
// //       </header>

// //       {/* Hero Section */}
// //       <main className="container mx-auto px-6">
// //         <div className="text-center py-20">
// //           <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
// //             <Star className="w-4 h-4 text-yellow-400 mr-2" />
// //             <span className="text-white text-sm">Production-ready React stack</span>
// //           </div>
          
// //           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
// //             Build Amazing
// //             <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
// //               React Apps
// //             </span>
// //           </h1>
          
// //           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
// //             A modern React.js starter with TypeScript, TailwindCSS, and Vite. 
// //             Everything you need to build beautiful, type-safe applications.
// //           </p>
          
// //           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
// //             <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center">
// //               Start Building
// //               <ArrowRight className="w-4 h-4 ml-2" />
// //             </button>
// //             <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center">
// //               <Github className="w-4 h-4 mr-2" />
// //               View on GitHub
// //             </button>
// //           </div>

// //           {/* Stats */}
// //           <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-20">
// //             {stats.map((stat, index) => (
// //               <div key={index} className="text-center">
// //                 <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
// //                 <div className="text-gray-400 text-sm">{stat.label}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Features Grid */}
// //         <div className="grid md:grid-cols-3 gap-8 pb-20">
// //           {features.map((feature, index) => (
// //             <div 
// //               key={index}
// //               className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
// //             >
// //               <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-6">
// //                 {feature.icon}
// //               </div>
// //               <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
// //               <p className="text-gray-400 leading-relaxed">{feature.description}</p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* CTA Section */}
// //         <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center mb-20">
// //           <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
// //           <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
// //             Join thousands of developers building amazing applications with our modern React stack.
// //           </p>
// //           <div className="flex items-center justify-center gap-4">
// //             <Users className="w-5 h-5 text-purple-400" />
// //             <span className="text-white font-medium">Join 10,000+ developers</span>
// //           </div>
// //         </div>
// //       </main>

// //       {/* Footer */}
// //       <footer className="border-t border-white/10 py-12">
// //         <div className="container mx-auto px-6">
// //           <div className="flex flex-col md:flex-row items-center justify-between">
// //             <div className="flex items-center space-x-2 mb-4 md:mb-0">
// //               <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
// //               <span className="text-white font-medium">ReactStack</span>
// //             </div>
// //             <div className="text-gray-400 text-sm">
// //               Built with React, TypeScript, TailwindCSS, and Vite
// //             </div>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }

// // export default App;


// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Login from "./pages/Login";
// // import Menu from "./pages/Menu";
// // import NhanSu from "./pages/Nhansu";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Login />} />
// //         <Route path="/menu" element={<Menu />} />
// //         <Route path="/nhansu" element={<NhanSu />} />

// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;




// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Login from "./pages/Login";
// // import Menu from "./pages/Menu";
// // import NhanSu from "./pages/Nhansu";
// // import Dashboard from "./pages/Dashboard";
// // import PrivateRoute from "./components/PrivateRoute";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Login />} />
        
// //         <Route
// //           path="/menu"
// //           element={
// //             <PrivateRoute>
// //               <Menu />
// //             </PrivateRoute>
// //           }
// //         />
        
// //         <Route
// //           path="/nhansu"
// //           element={
// //             <PrivateRoute>
// //               <NhanSu />
// //             </PrivateRoute>
// //           }
// //         />

// //         <Route
// //           path="/dashboard"
// //           element={
// //             <PrivateRoute>
// //               <Dashboard />
// //             </PrivateRoute>
// //           }
// //         />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }
// // export default App;








// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Menu from "./pages/Menu";
// import NhanSu from "./pages/Nhansu";
// import Dashboard from "./pages/Dashboard";
// import PrivateRoute from "./components/PrivateRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Trang login */}
//         <Route path="/" element={<Login />} />

//         {/* Layout menu và các trang con */}
//         <Route
//           path="/menu"
//           element={
//             <PrivateRoute>
//               <Menu />
//             </PrivateRoute>
//           }
//         >
//           {/* Mặc định khi vào /menu sẽ load Dashboard */}
//           <Route index element={<Navigate to="dashboard" replace />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="nhansu" element={<NhanSu />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import NhanSu from "./pages/Nhansu";
import Dashboard from "./pages/Dashboard";
import KhachHang from "./pages/KhachHang";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Mặc định vào app sẽ điều hướng về trang Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Trang login */}
        <Route path="/login" element={<Login />} />

        {/* Layout menu và các trang con (cần đăng nhập) */}
        <Route
          path="/menu"
          element={
            <PrivateRoute>
              <Menu />
            </PrivateRoute>
          }
        >
          {/* Mặc định khi vào /menu sẽ load Dashboard */}
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="nhansu" element={<NhanSu />} />
          <Route path="crm" element={<KhachHang />} />
        </Route>

        {/* Nếu nhập link không tồn tại → quay về login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


