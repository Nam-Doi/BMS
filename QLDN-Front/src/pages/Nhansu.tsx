// import React, { useState, useEffect } from "react";
// import axios from "axios";

// interface Employee {
//   id: string;
//   fullName: string;
//   position: string;
//   email: string;
//   phone: string;
// }

// const NhanSu: React.FC = () => {
//   const [employees, setEmployees] = useState<Employee[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState<Partial<Employee>>({});
//   const [isEditing, setIsEditing] = useState(false);

//   const token = localStorage.getItem("token");

//   // Lấy danh sách nhân viên
//   const fetchEmployees = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get("/api/employees", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setEmployees(res.data.data);
//     } catch (err) {
//       console.error("Lỗi khi tải danh sách:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   // Thêm hoặc cập nhật nhân viên
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       if (isEditing && form.id) {
//         await axios.put(`http://localhost:8080/api/employees/${form.id}`, form, {
//           headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
//         });
//         alert("Cập nhật thành công!");
//       } else {
//         await axios.post("http://localhost:8080/api/employees", form, {
//           headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
//         });
//         alert("Thêm nhân viên thành công!");
//       }
//       setForm({});
//       setIsEditing(false);
//       fetchEmployees();
//     } catch (err) {
//       console.error("Lỗi khi lưu:", err);
//     }
//   };

//   // Xóa nhân viên
//   const handleDelete = async (id: string) => {
//     if (window.confirm("Bạn có chắc muốn xóa nhân viên này?")) {
//       try {
//         await axios.delete(`http://localhost:8080/api/employees/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         alert("Xóa thành công!");
//         fetchEmployees();
//       } catch (err) {
//         console.error("Lỗi khi xóa:", err);
//       }
//     }
//   };

//   // Sửa nhân viên
//   const handleEdit = (emp: Employee) => {
//     setForm(emp);
//     setIsEditing(true);
//   };

//   return (
//     <div className="p-6 text-black">
//       <h1 className="text-2xl font-bold mb-4">Quản lý hồ sơ nhân viên</h1>

//       {/* Form thêm/sửa */}
//       <form onSubmit={handleSubmit} className="mb-6 bg-gray-100 p-4 rounded-lg">
//         <input
//           type="text"
//           placeholder="Họ và tên"
//           value={form.fullName || ""}
//           onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//           className="border p-2 mr-2 rounded"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Chức vụ"
//           value={form.position || ""}
//           onChange={(e) => setForm({ ...form, position: e.target.value })}
//           className="border p-2 mr-2 rounded"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={form.email || ""}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           className="border p-2 mr-2 rounded"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Số điện thoại"
//           value={form.phone || ""}
//           onChange={(e) => setForm({ ...form, phone: e.target.value })}
//           className="border p-2 mr-2 rounded"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           {isEditing ? "Cập nhật" : "Thêm mới"}
//         </button>
//       </form>

//       {/* Danh sách nhân viên */}
//       {loading ? (
//         <p>Đang tải...</p>
//       ) : (
//         <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">ID</th>
//               <th className="border p-2">Họ và tên</th>
//               <th className="border p-2">Chức vụ</th>
//               <th className="border p-2">Email</th>
//               <th className="border p-2">Điện thoại</th>
//               <th className="border p-2">Hành động</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp) => (
//               <tr key={emp.id}>
//                 <td className="border p-2">{emp.id}</td>
//                 <td className="border p-2">{emp.fullName}</td>
//                 <td className="border p-2">{emp.position}</td>
//                 <td className="border p-2">{emp.email}</td>
//                 <td className="border p-2">{emp.phone}</td>
//                 <td className="border p-2 flex gap-2">
//                   <button
//                     onClick={() => handleEdit(emp)}
//                     className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
//                   >
//                     Sửa
//                   </button>
//                   <button
//                     onClick={() => handleDelete(emp.id)}
//                     className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//                   >
//                     Xóa
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default NhanSu;









// import React, { useState, useEffect } from "react";
// import axios from "axios";
// interface Employee {
//   id: string;
//   fullName: string;
//   position: string;
//   email: string;
//   phone: string;
// }

// const NhanSu: React.FC = () => {
//   const [employees, setEmployees] = useState<Employee[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState<Partial<Employee>>({});
//   const [isEditing, setIsEditing] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const token = localStorage.getItem("token");
//   const base_url = "http://localhost:8085";

//   // Lấy danh sách nhân viên
//   const fetchEmployees = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${base_url}/api/employees`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setEmployees(res.data.data || []);
//     } catch (err) {
//       console.error("Lỗi khi tải danh sách:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   // Tìm kiếm nhân viên theo tên hoặc ID
//   const handleSearch = async () => {
//     try {
//       setLoading(true);
//       let res;
//       if (searchTerm.trim().length === 24) {
//         // Tìm theo ID
//         res = await axios.get(`${base_url}/api/employees/${searchTerm}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setEmployees(res.data?.data ? [res.data.data] : []);
//       } else {
//         // Tìm theo tên
//         res = await axios.get(`${base_url}/api/employees?q=${searchTerm}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setEmployees(res.data?.data || []);
//       }
//     } catch (err) {
//       console.error("Lỗi khi tìm kiếm:", err);
//       setEmployees([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Thêm hoặc cập nhật nhân viên
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       if (isEditing && form.id) {
//         await axios.put(`${base_url}/api/employees/${form.id}`, form, {
//           headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
//         });
//         alert("Cập nhật thành công!");
//       } else {
//         await axios.post(`${base_url}/api/employees`, form, {
//           headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
//         });
//         alert("Thêm nhân viên thành công!");
//       }
//       setForm({});
//       setIsEditing(false);
//       fetchEmployees();
//     } catch (err) {
//       console.error("Lỗi khi lưu:", err);
//     }
//   };

//   // Xóa nhân viên
//   const handleDelete = async (id: string) => {
//     if (window.confirm("Bạn có chắc muốn xóa nhân viên này?")) {
//       try {
//         await axios.delete(`${base_url}/api/employees/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         alert("Xóa thành công!");
//         fetchEmployees();
//       } catch (err) {
//         console.error("Lỗi khi xóa:", err);
//       }
//     }
//   };

//   // Sửa nhân viên
//   const handleEdit = (emp: Employee) => {
//     setForm(emp);
//     setIsEditing(true);
//   };

//   return (
//     <div className="p-6 text-black">
//       <h1 className="text-2xl font-bold mb-4 text-blue-500">Hồ sơ nhân viên</h1>

//       {/* Thanh tìm kiếm */}
//       <div className="mb-4 flex gap-2">
//         <input
//           type="text"
//           placeholder="Nhập tên hoặc ID để tìm kiếm"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="border p-2 rounded w-1/2"
//         />
//         <button
//           onClick={handleSearch}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//         >
//           Tìm kiếm
//         </button>
//         <button
//           onClick={fetchEmployees}
//           className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//         >
//           Tải lại
//         </button>
//       </div>

//       {/* Form thêm/sửa */}
//       <form onSubmit={handleSubmit} className="mb-6 bg-gray-100 p-4 rounded-lg">
//         <input
//           type="text"
//           placeholder="Họ và tên"
//           value={form.fullName || ""}
//           onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//           className="border p-2 mr-2 rounded"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Chức vụ"
//           value={form.position || ""}
//           onChange={(e) => setForm({ ...form, position: e.target.value })}
//           className="border p-2 mr-2 rounded"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={form.email || ""}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           className="border p-2 mr-2 rounded"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Số điện thoại"
//           value={form.phone || ""}
//           onChange={(e) => setForm({ ...form, phone: e.target.value })}
//           className="border p-2 mr-2 rounded"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           {isEditing ? "Cập nhật" : "Thêm mới"}
//         </button>
//       </form>

//       {/* Danh sách nhân viên */}
//       {loading ? (
//         <p>Đang tải...</p>
//       ) : (
//         <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">ID</th>
//               <th className="border p-2">Họ và tên</th>
//               <th className="border p-2">Chức vụ</th>
//               <th className="border p-2">Email</th>
//               <th className="border p-2">Điện thoại</th>
//               <th className="border p-2">Hành động</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp) => (
//               <tr key={emp.id}>
//                 <td className="border p-2">{emp.id}</td>
//                 <td className="border p-2">{emp.fullName}</td>
//                 <td className="border p-2">{emp.position}</td>
//                 <td className="border p-2">{emp.email}</td>
//                 <td className="border p-2">{emp.phone}</td>
//                 <td className="border p-2 flex gap-2">
//                   <button
//                     onClick={() => handleEdit(emp)}
//                     className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
//                   >
//                     Sửa
//                   </button>
//                   <button
//                     onClick={() => handleDelete(emp.id)}
//                     className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//                   >
//                     Xóa
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default NhanSu;



import React, { useState, useEffect } from "react";
import { Search, Plus, Edit3, Trash2, Users, Mail, Phone, Briefcase, RefreshCw, X, Check } from "lucide-react";

interface Employee {
  id: string;
  fullName: string;
  position: string;
  email: string;
  phone: string;
}

const NhanSu: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<Partial<Employee>>({});
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const token = localStorage.getItem("token");
  const base_url = "http://localhost:8085";

  // Lấy danh sách nhân viên - GIỮ NGUYÊN LOGIC
  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${base_url}/api/employees`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setEmployees(data.data || []);
    } catch (err) {
      console.error("Lỗi khi tải danh sách:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Tìm kiếm nhân viên theo tên hoặc ID - GIỮ NGUYÊN LOGIC
const handleSearch = async () => {
  try {
    setLoading(true);

    // Lấy tất cả nhân viên
    const res = await fetch(`${base_url}/api/employees`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    const allEmployees: Employee[] = data.data || [];

    const term = searchTerm.trim().toLowerCase();

    const filtered = allEmployees.filter((emp: Employee) =>
      (emp.fullName && emp.fullName.toLowerCase().includes(term)) ||
      (emp.id && emp.id.toLowerCase() === term)
    );

    setEmployees(filtered);
  } catch (err) {
    console.error("Lỗi khi tìm kiếm:", err);
    setEmployees([]);
  } finally {
    setLoading(false);
  }
};


  // Thêm hoặc cập nhật nhân viên - GIỮ NGUYÊN LOGIC
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing && form.id) {
        await fetch(`${base_url}/api/employees/${form.id}`, {
          method: 'PUT',
          headers: { 
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json" 
          },
          body: JSON.stringify(form)
        });
        alert("Cập nhật thành công!");
      } else {
        await fetch(`${base_url}/api/employees`, {
          method: 'POST',
          headers: { 
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json" 
          },
          body: JSON.stringify(form)
        });
        alert("Thêm nhân viên thành công!");
      }
      setForm({});
      setIsEditing(false);
      setShowModal(false);
      fetchEmployees();
    } catch (err) {
      console.error("Lỗi khi lưu:", err);
    }
  };

  // Xóa nhân viên - GIỮ NGUYÊN LOGIC
  const handleDelete = async (id: string) => {
    if (window.confirm("Bạn có chắc muốn xóa nhân viên này?")) {
      try {
        await fetch(`${base_url}/api/employees/${id}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Xóa thành công!");
        fetchEmployees();
      } catch (err) {
        console.error("Lỗi khi xóa:", err);
      }
    }
  };

  // Sửa nhân viên - GIỮ NGUYÊN LOGIC
  const handleEdit = (emp: Employee) => {
    setForm(emp);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setForm({});
    setIsEditing(false);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Hồ sơ nhân viên
            </h1>
          </div>
          <p className="text-gray-600 ml-13">Quản lý thông tin nhân viên trong tổ chức</p>
        </div>

        {/* Search and Actions Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Nhập tên hoặc ID để tìm kiếm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
              />
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={handleSearch}
                disabled={loading}
                className="px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md disabled:opacity-50"
              >
                <Search className="w-4 h-4" />
                Tìm kiếm
              </button>
              
              <button
                onClick={fetchEmployees}
                disabled={loading}
                className="px-4 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Tải lại
              </button>
              
              <button
                onClick={handleAddNew}
                className="px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                <Plus className="w-4 h-4" />
                Thêm mới
              </button>
            </div>
          </div>
        </div>

        {/* Employee Cards/Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="flex items-center gap-3">
                <RefreshCw className="w-5 h-5 animate-spin text-blue-500" />
                <span className="text-gray-600">Đang tải...</span>
              </div>
            </div>
          ) : employees.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-500">
              <Users className="w-12 h-12 mb-4 text-gray-300" />
              <p className="text-lg font-medium">Không có nhân viên nào</p>
              <p className="text-sm">Thêm nhân viên mới để bắt đầu</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Thông tin nhân viên
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Chức vụ
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Liên hệ
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Hành động
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {employees.map((emp, index) => (
                    <tr key={emp.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {emp.id.slice(-6)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                            {emp.fullName.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">{emp.fullName}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-900 bg-blue-50 text-blue-800 px-2 py-1 rounded-full">
                            {emp.position}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-gray-600">
                            <Mail className="w-4 h-4 mr-2 text-gray-400" />
                            {emp.email}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Phone className="w-4 h-4 mr-2 text-gray-400" />
                            {emp.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(emp)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                            title="Chỉnh sửa"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(emp.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-150"
                            title="Xóa"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Modal Form */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {isEditing ? 'Cập nhật nhân viên' : 'Thêm nhân viên mới'}
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-150"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      value={form.fullName || ""}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Nhập họ và tên"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Chức vụ *
                    </label>
                    <input
                      type="text"
                      value={form.position || ""}
                      onChange={(e) => setForm({ ...form, position: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Nhập chức vụ"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={form.email || ""}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Nhập địa chỉ email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại *
                    </label>
                    <input
                      type="text"
                      value={form.phone || ""}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Nhập số điện thoại"
                      required
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200"
                    >
                      Hủy
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleSubmit(e as any)}
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      {isEditing ? 'Cập nhật' : 'Thêm mới'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NhanSu;
