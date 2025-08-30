import React, { useState, useEffect } from "react";
import { Search, Plus, Edit3, Trash2, Users, Mail, Phone, RefreshCw, X, Check, Tag } from "lucide-react";

interface Customer {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  groupName: string;
  note: string;
}

const KhachHang: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<Partial<Customer>>({});
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const token = localStorage.getItem("token");
  const base_url = "http://localhost:8085";

  // Lấy danh sách khách hàng
  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${base_url}/api/customers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setCustomers(data.data || []);
    } catch (err) {
      console.error("Lỗi khi tải khách hàng:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Tìm kiếm
  const handleSearch = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${base_url}/api/customers?q=${searchTerm}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setCustomers(data.data || []);
    } catch (err) {
      console.error("Lỗi khi tìm kiếm:", err);
    } finally {
      setLoading(false);
    }
  };

  // Thêm / cập nhật
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing && form.id) {
        await fetch(`${base_url}/api/customers/${form.id}`, {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        alert("Cập nhật khách hàng thành công!");
      } else {
        await fetch(`${base_url}/api/customers`, {
          method: "POST",
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        alert("Thêm khách hàng thành công!");
      }
      setForm({});
      setIsEditing(false);
      setShowModal(false);
      fetchCustomers();
    } catch (err) {
      console.error("Lỗi khi lưu:", err);
    }
  };

  // Xóa
  const handleDelete = async (id: string) => {
    if (window.confirm("Bạn có chắc muốn xóa khách hàng này?")) {
      try {
        await fetch(`${base_url}/api/customers/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Xóa thành công!");
        fetchCustomers();
      } catch (err) {
        console.error("Lỗi khi xóa:", err);
      }
    }
  };

  // Sửa
  const handleEdit = (cus: Customer) => {
    setForm(cus);
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
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Quản lý khách hàng
            </h1>
          </div>
          <p className="text-gray-600 ml-13">Theo dõi và quản lý thông tin khách hàng</p>
        </div>

        {/* Search and Actions Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Nhập tên hoặc số điện thoại để tìm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSearch}
                disabled={loading}
                className="px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md disabled:opacity-50"
              >
                <Search className="w-4 h-4" />
                Tìm kiếm
              </button>

              <button
                onClick={fetchCustomers}
                disabled={loading}
                className="px-4 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                Tải lại
              </button>

              <button
                onClick={handleAddNew}
                className="px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                <Plus className="w-4 h-4" />
                Thêm khách hàng
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <RefreshCw className="w-5 h-5 animate-spin text-green-500" />
              <span className="ml-2 text-gray-600">Đang tải...</span>
            </div>
          ) : customers.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-500">
              <Users className="w-12 h-12 mb-4 text-gray-300" />
              <p className="text-lg font-medium">Không có khách hàng nào</p>
              <p className="text-sm">Hãy thêm khách hàng mới để bắt đầu</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Tên</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Liên hệ</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Địa chỉ</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Nhóm</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Hành động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {customers.map((cus) => (
                    <tr key={cus.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">{cus.fullName}</td>
                      <td className="px-6 py-4">
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center"><Mail className="w-4 h-4 mr-2 text-gray-400" />{cus.email}</div>
                          <div className="flex items-center"><Phone className="w-4 h-4 mr-2 text-gray-400" />{cus.phone}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">{cus.address}</td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-1 text-sm text-green-800 bg-green-50 px-2 py-1 rounded-full">
                          <Tag className="w-4 h-4" /> {cus.groupName}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex gap-2">
                        <button onClick={() => handleEdit(cus)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(cus.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                          <Trash2 className="w-4 h-4" />
                        </button>
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
                  <h2 className="text-xl font-semibold">{isEditing ? "Cập nhật khách hàng" : "Thêm khách hàng"}</h2>
                  <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    value={form.fullName || ""}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full px-4 py-3 border rounded-xl"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email || ""}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 border rounded-xl"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    value={form.phone || ""}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 border rounded-xl"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Địa chỉ"
                    value={form.address || ""}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full px-4 py-3 border rounded-xl"
                  />
                  <input
                    type="text"
                    placeholder="Nhóm khách hàng"
                    value={form.groupName || ""}
                    onChange={(e) => setForm({ ...form, groupName: e.target.value })}
                    className="w-full px-4 py-3 border rounded-xl"
                  />
                  <textarea
                    placeholder="Ghi chú"
                    value={form.note || ""}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    className="w-full px-4 py-3 border rounded-xl"
                  />

                  <div className="flex gap-3 pt-4">
                    <button type="button" onClick={() => setShowModal(false)} className="flex-1 border py-3 rounded-xl">
                      Hủy
                    </button>
                    <button type="submit" className="flex-1 bg-green-600 text-white py-3 rounded-xl">
                      <Check className="w-4 h-4 inline mr-2" />
                      {isEditing ? "Cập nhật" : "Thêm mới"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KhachHang;
