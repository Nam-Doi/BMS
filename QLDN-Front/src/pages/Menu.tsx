

// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate, useLocation, Outlet } from "react-router-dom";
// import {
//   Users,
//   ClipboardList,
//   DollarSign,
//   Package,
//   BarChart2,
//   Settings,
//   User,
//   LogOut,
// } from "lucide-react";

// const Menu: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const username = localStorage.getItem("username") || "Người dùng";
//   const email = localStorage.getItem("email") || "example@email.com";
//   const role = localStorage.getItem("role") || "Nhân viên";

//   const [openDropdown, setOpenDropdown] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const menuItems = [
//     { icon: <Users size={20} />, title: "Quản lý nhân sự", link: "nhansu" },
//     { icon: <ClipboardList size={20} />, title: "Quản lý công việc", link: "cong-viec" },
//     { icon: <DollarSign size={20} />, title: "Quản lý tài chính", link: "tai-chinh" },
//     { icon: <Package size={20} />, title: "Quản lý tài sản", link: "tai-san" },
//     { icon: <Settings size={20} />, title: "CRM", link: "crm" },
//     { icon: <BarChart2 size={20} />, title: "Báo cáo & Dashboard", link: "dashboard" },
//   ];

//   const handleLogout = () => {
//     if (window.confirm("Bạn có chắc muốn đăng xuất không?")) {
//       localStorage.removeItem("token");
//       localStorage.removeItem("username");
//       localStorage.removeItem("email");
//       localStorage.removeItem("role");
//       navigate("/");
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//         setOpenDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
//       {/* Sidebar */}
//       <div className="w-64 bg-white/10 backdrop-blur-lg border-r border-white/20 flex flex-col justify-between">
//         {/* Logo */}
//         <div>
//           <div className="p-4 text-xl font-bold border-b border-white/20">
//             📊 Hệ thống Quản lý
//           </div>

//           {/* Menu */}
//           <nav className="mt-4">
//             {menuItems.map((item, i) => {
//               const isActive = location.pathname.endsWith(item.link);
//               return (
//                 <div
//                   key={i}
//                   onClick={() => navigate(item.link)}
//                   className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition rounded-lg mx-2 mb-2 ${
//                     isActive
//                       ? "bg-purple-600/40 border border-purple-400"
//                       : "hover:bg-white/10"
//                   }`}
//                 >
//                   <div
//                     className={`p-2 rounded-full ${
//                       isActive ? "bg-purple-500 text-white" : "bg-white/10"
//                     }`}
//                   >
//                     {item.icon}
//                   </div>
//                   <span className="font-medium">{item.title}</span>
//                 </div>
//               );
//             })}
//           </nav>
//         </div>

//         {/* Profile */}
//         <div className="relative border-t border-white/20 p-4" ref={dropdownRef}>
//           <div
//             className="flex items-center gap-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition"
//             onClick={() => setOpenDropdown((prev) => !prev)}
//           >
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-lg font-bold shadow-md">
//               {username.charAt(0).toUpperCase()}
//             </div>
//             <div>
//               <p className="font-semibold">{username}</p>
//               <p className="text-sm text-gray-300">Tài khoản</p>
//             </div>
//           </div>

//           {openDropdown && (
//             <div className="absolute bottom-16 left-4 w-48 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg overflow-hidden">
//               <button
//                 className="flex items-center gap-2 w-full px-4 py-3 hover:bg-white/20 transition"
//                 onClick={() => setShowProfile(true)}
//               >
//                 <User size={18} /> Thông tin cá nhân
//               </button>
//               <button
//                 className="flex items-center gap-2 w-full px-4 py-3 hover:bg-white/20 transition text-red-400"
//                 onClick={handleLogout}
//               >
//                 <LogOut size={18} /> Đăng xuất
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Nội dung chính */}
//       <div className="flex-1 p-8 overflow-y-auto">
//         <Outlet />
//       </div>

//       {/* Modal thông tin cá nhân */}
//       {showProfile && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white text-black rounded-lg p-6 w-96 shadow-lg">
//             <h2 className="text-xl font-bold mb-4">Thông tin cá nhân</h2>
//             <p><strong>Tên đăng nhập:</strong> {username}</p>
//             <p><strong>Email:</strong> {email}</p>
//             <p><strong>Chức vụ:</strong> {role}</p>

//             <div className="mt-6 text-right">
//               <button
//                 onClick={() => setShowProfile(false)}
//                 className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//               >
//                 Đóng
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Menu;











import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import {
  Users,
  ClipboardList,
  DollarSign,
  Package,
  BarChart2,
  Settings,
  User,
  LogOut,
  Bell,
  Search,
  ChevronDown,
  Home,
  TrendingUp,
} from "lucide-react";

interface MenuItem {
  id: string;
  icon: React.ReactElement;
  title: string;
  link: string;
  badge?: string | null;
  description: string;
}

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get user data - fallback nếu localStorage trống
  const username = "Admin User"; // Thay bằng localStorage.getItem("username") || "Admin User"
  const email = "admin@company.com"; // Thay bằng localStorage.getItem("email") || "admin@company.com" 
  const role = "Quản trị viên"; // Thay bằng localStorage.getItem("role") || "Quản trị viên"

  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [notifications] = useState<number>(3);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [
    { 
      id: "dashboard", 
      icon: <Home size={20} />, 
      title: "Tổng quan", 
      link: "dashboard",
      badge: null,
      description: "Dashboard tổng quan hệ thống"
    },
    { 
      id: "nhansu", 
      icon: <Users size={20} />, 
      title: "Quản lý nhân sự", 
      link: "nhansu",
      badge: "12",
      description: "Quản lý thông tin nhân viên"
    },
    { 
      id: "cong-viec", 
      icon: <ClipboardList size={20} />, 
      title: "Quản lý công việc", 
      link: "cong-viec",
      badge: "5",
      description: "Theo dõi tiến độ công việc"
    },
    { 
      id: "tai-chinh", 
      icon: <DollarSign size={20} />, 
      title: "Quản lý tài chính", 
      link: "tai-chinh",
      badge: null,
      description: "Báo cáo thu chi và ngân sách"
    },
    { 
      id: "tai-san", 
      icon: <Package size={20} />, 
      title: "Quản lý tài sản", 
      link: "tai-san",
      badge: null,
      description: "Kiểm soát tài sản công ty"
    },
    { 
      id: "crm", 
      icon: <TrendingUp size={20} />, 
      title: "CRM", 
      link: "crm",
      badge: "New",
      description: "Quản lý khách hàng"
    },
    { 
      id: "dashboard", 
      icon: <BarChart2 size={20} />, 
      title: "Báo cáo & Dashboard", 
      link: "dashboard",
      badge: null,
      description: "Phân tích dữ liệu chi tiết"
    }
  ];

  const handleLogout = (): void => {
    if (window.confirm("Bạn có chắc muốn đăng xuất không?")) {
      // localStorage.clear(); // Uncomment khi cần
      navigate("/");
    }
  };

  const handleMenuClick = (link: string): void => {
    navigate(link);
  };

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Get current active menu
  const getCurrentPath = (): string => {
    const path = location.pathname;
    const segments = path.split('/');
    return segments[segments.length - 1] || 'dashboard';
  };

  const currentPath = getCurrentPath();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-72 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">📊</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Hệ thống Quản lý</h1>
              <p className="text-xs text-gray-500">Management System của Nam</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = currentPath === item.link || location.pathname.includes(item.link);
            
            return (
              <div
                key={item.id}
                onClick={() => handleMenuClick(item.link)}
                className={`group relative flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-white/20" 
                    : "bg-gray-100 group-hover:bg-gray-200"
                }`}>
                  {React.cloneElement(item.icon, {
                    className: isActive ? "text-white" : "text-gray-600"
                  })}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.title}</span>
                    {item.badge && (
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        isActive
                          ? "bg-white/20 text-white"
                          : item.badge === "New"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className={`text-xs mt-1 ${
                    isActive ? "text-white/70" : "text-gray-500"
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </nav>

        {/* User info */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
              {username.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">{username}</p>
              <p className="text-xs text-gray-500">{role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
          {/* Search */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm trong hệ thống..."
                className="pl-10 pr-4 py-2 w-80 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <div className="relative">
              <Bell size={20} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
              {notifications > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </div>

            {/* User dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div
                onClick={() => setOpenDropdown(!openDropdown)}
                className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                  {username.charAt(0).toUpperCase()}
                </div>
                <span className="font-medium text-gray-700">{username}</span>
                <ChevronDown size={16} className={`text-gray-500 transition-transform ${
                  openDropdown ? "rotate-180" : ""
                }`} />
              </div>

              {/* Dropdown menu */}
              {openDropdown && (
                <div className="absolute top-12 right-0 w-56 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                  <div className="p-4 bg-gray-50 border-b border-gray-200">
                    <p className="font-medium text-gray-800">{username}</p>
                    <p className="text-sm text-gray-500">{email}</p>
                  </div>
                  
                  <div className="py-2">
                    <button
                      onClick={() => {
                        setShowProfile(true);
                        setOpenDropdown(false);
                      }}
                      className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-50 transition-colors text-left"
                    >
                      <User size={16} className="text-gray-500" />
                      <span className="text-gray-700">Thông tin cá nhân</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        setOpenDropdown(false);
                        navigate("settings");
                      }}
                      className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-50 transition-colors text-left"
                    >
                      <Settings size={16} className="text-gray-500" />
                      <span className="text-gray-700">Cài đặt</span>
                    </button>
                    
                    <div className="border-t border-gray-200 mt-2 pt-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-2 hover:bg-red-50 transition-colors text-left text-red-600"
                      >
                        <LogOut size={16} />
                        <span>Đăng xuất</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page content - Sử dụng Outlet cho React Router */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Profile Modal */}
      {showProfile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Thông tin cá nhân</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                  {username.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{username}</p>
                  <p className="text-gray-500">{role}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-600">Tên đăng nhập</label>
                  <p className="text-gray-800">{username}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Email</label>
                  <p className="text-gray-800">{email}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Chức vụ</label>
                  <p className="text-gray-800">{role}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setShowProfile(false)}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;

