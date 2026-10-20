import React, { useState, useEffect } from 'react';

export default function App() {
  // State untuk menyimpan daftar akun terdaftar & user yang sedang login
  const [auth, setAuth] = useState(() => {
    const savedAuth = localStorage.getItem('infochain_auth');
    return savedAuth ? JSON.parse(savedAuth) : {
      isLoggedIn: false,
      currentUser: null,
      usersList: [] // Menyimpan daftar akun yang sudah didaftarkan
    };
  });

  // State untuk form input Login/Register
  const [isRegistering, setIsRegistering] = useState(false);
  const [formInput, setFormInput] = useState({ name: '', email: '', password: '' });
  
  // State untuk navigasi menu dalam aplikasi
  const [activeTab, setActiveTab] = useState('profile');

  // Simpan data auth ke LocalStorage setiap kali ada perubahan (mendukung multi-client tab)
  useEffect(() => {
    localStorage.setItem('infochain_auth', JSON.stringify(auth));
  }, [auth]);

  // Fungsi Proses Pendaftaran (Register)
  const handleRegister = (e) => {
    e.preventDefault();
    if (!formInput.name || !formInput.email || !formInput.password) return;

    // Cek apakah email sudah terdaftar
    const existingUser = auth.usersList.find(u => u.email === formInput.email);
    if (existingUser) {
      alert('Email sudah terdaftar! Silakan login.');
      return;
    }

    const newUser = {
      name: formInput.name,
      email: formInput.email,
      password: formInput.password,
      role: 'Information receiver & provider',
      location: 'Cikarang',
      time: 'Any time',
      categories: {
        roadClosure: true,
        floodWeather: true,
        accident: true,
        roadMaintenance: false,
        publicEvent: false,
        emergency: false
      }
    };

    setAuth(prev => ({
      ...prev,
      isLoggedIn: true,
      currentUser: newUser,
      usersList: [...prev.usersList, newUser]
    }));
  };

  // Fungsi Proses Masuk (Login)
  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = auth.usersList.find(u => u.email === formInput.email && u.password === formInput.password);

    if (foundUser) {
      setAuth(prev => ({ ...prev, isLoggedIn: true, currentUser: foundUser }));
    } else {
      // Jika akun belum ada di list tapi diketik, buatkan session sementara (Guest/Direct Login)
      const directUser = {
        name: formInput.name || 'User InfoChain',
        email: formInput.email || 'user@infochain.local',
        role: 'Information receiver & provider',
        location: 'Cikarang',
        time: 'Any time',
        categories: {
          roadClosure: true,
          floodWeather: true,
          accident: true,
          roadMaintenance: false,
          publicEvent: false,
          emergency: false
        }
      };
      setAuth(prev => ({ ...prev, isLoggedIn: true, currentUser: directUser }));
    }
  };

  // Fungsi Keluar (Logout)
  const handleLogout = () => {
    setAuth(prev => ({ ...prev, isLoggedIn: false, currentUser: null }));
    setFormInput({ name: '', email: '', password: '' });
  };

  // Fungsi Update Preferensi Profil Pengguna Aktif
  const handlePreferenceChange = (field, value) => {
    setAuth(prev => {
      const updatedUser = { ...prev.currentUser, [field]: value };
      const updatedList = prev.usersList.map(u => u.email === updatedUser.email ? updatedUser : u);
      return {
        ...prev,
        currentUser: updatedUser,
        usersList: updatedList.length > 0 ? updatedList : [updatedUser]
      };
    });
  };

  const handleCategoryToggle = (cat) => {
    setAuth(prev => {
      const updatedCategories = { ...prev.currentUser.categories, [cat]: !prev.currentUser.categories[cat] };
      const updatedUser = { ...prev.currentUser, categories: updatedCategories };
      const updatedList = prev.usersList.map(u => u.email === updatedUser.email ? updatedUser : u);
      return {
        ...prev,
        currentUser: updatedUser,
        usersList: updatedList.length > 0 ? updatedList : [updatedUser]
      };
    });
  };

  // --- HALAMAN LOGIN / REGISTER JIKA BELUM MASUK ---
  if (!auth.isLoggedIn) {
    return (
      <div style={{ maxWidth: '480px', margin: '40px auto', fontFamily: 'sans-serif', backgroundColor: '#0f172a', color: '#f8fafc', padding: '24px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.5)', border: '1px solid #334155' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span style={{ fontSize: '32px', backgroundColor: '#3b82f6', padding: '8px 12px', borderRadius: '12px', display: 'inline-block', marginBottom: '8px' }}>🔗</span>
          <h1 style={{ fontSize: '22px', margin: 0 }}>InfoChain Access</h1>
          <p style={{ fontSize: '13px', color: '#94a3b8' }}>Sistem Informasi Publik Multi-Client</p>
        </div>

        <form onSubmit={isRegistering ? handleRegister : handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {isRegistering && (
            <div>
              <label style={{ fontSize: '12px', color: '#94a3b8' }}>Nama Lengkap / Display Name</label>
              <input 
                type="text" 
                value={formInput.name} 
                onChange={(e) => setFormInput({...formInput, name: e.target.value})}
                placeholder="Contoh: Budi Santoso"
                required
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#1e293b', color: 'white', marginTop: '4px', boxSizing: 'border-box' }}
              />
            </div>
          )}

          <div>
            <label style={{ fontSize: '12px', color: '#94a3b8' }}>Email Address</label>
            <input 
              type="email" 
              value={formInput.email} 
              onChange={(e) => setFormInput({...formInput, email: e.target.value})}
              placeholder="nama@domain.com"
              required
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#1e293b', color: 'white', marginTop: '4px', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ fontSize: '12px', color: '#94a3b8' }}>Password</label>
            <input 
              type="password" 
              value={formInput.password} 
              onChange={(e) => setFormInput({...formInput, password: e.target.value})}
              placeholder="••••••••"
              required
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#1e293b', color: 'white', marginTop: '4px', boxSizing: 'border-box' }}
            />
          </div>

          <button type="submit" style={{ backgroundColor: '#3b82f6', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginTop: '8px', fontSize: '14px' }}>
            {isRegistering ? 'Daftar Akun Baru' : 'Masuk (Login)'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button 
            onClick={() => setIsRegistering(!isRegistering)} 
            style={{ background: 'none', border: 'none', color: '#60a5fa', cursor: 'pointer', fontSize: '13px', textDecoration: 'underline' }}
          >
            {isRegistering ? 'Sudah punya akun? Login di sini' : 'Belum punya akun? Daftar sekarang'}
          </button>
        </div>
      </div>
    );
  }

  // --- TAMPILAN UTAMA APLIKASI SETELAH LOGIN ---
  const user = auth.currentUser;

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', fontFamily: 'sans-serif', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      
      {/* Header */}
      <header style={{ padding: '16px', borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1e293b' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ backgroundColor: '#3b82f6', padding: '6px 10px', borderRadius: '8px', fontWeight: 'bold' }}>🔗</span>
          <h1 style={{ fontSize: '18px', margin: 0 }}>InfoChain</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ backgroundColor: '#3b82f6', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            {user.name.charAt(0).toUpperCase()}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ padding: '20px', flex: 1, overflowY: 'auto' }}>
        {activeTab === 'profile' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <h2 style={{ fontSize: '20px', margin: 0 }}>Your profile & SSS preferences</h2>
              <button onClick={handleLogout} style={{ background: 'none', border: '1px solid #ef4444', color: '#ef4444', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>
                Logout
              </button>
            </div>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>Choose which public updates are relevant to you.</p>

            <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '12px', border: '1px solid #334155' }}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>Display name</label>
                <input 
                  type="text" 
                  value={user.name} 
                  onChange={(e) => handlePreferenceChange('name', e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: 'white', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>Preferred location / area</label>
                <input 
                  type="text" 
                  value={user.location} 
                  onChange={(e) => handlePreferenceChange('location', e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: 'white', boxSizing: 'border-box' }}
                />
                <span style={{ fontSize: '11px', color: '#64748b', marginTop: '4px', display: 'block' }}>Used to match information by area. GPS is not enabled.</span>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>Preferred time</label>
                <select 
                  value={user.time} 
                  onChange={(e) => handlePreferenceChange('time', e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: 'white', boxSizing: 'border-box' }}
                >
                  <option value="Any time">Any time</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Information categories you want to receive</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {Object.entries(user.categories).map(([key, val]) => (
                    <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer', textTransform: 'capitalize' }}>
                      <input 
                        type="checkbox" 
                        checked={val} 
                        onChange={() => handleCategoryToggle(key)}
                      />
                      {key.replace(/([A-Z])/g, ' $1')}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab !== 'profile' && (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: '#94a3b8' }}>
            <h3>Halaman {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h3>
            <p>Selamat datang, <b>{user.name}</b> ({user.email}). Area aktif: <b>{user.location}</b>.</p>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '12px 0', borderTop: '1px solid #334155', backgroundColor: '#1e293b' }}>
        <button onClick={() => setActiveTab('home')} style={{ background: 'none', border: 'none', color: activeTab === 'home' ? '#3b82f6' : '#94a3b8', cursor: 'pointer', fontSize: '12px' }}>
          🏠 Home
        </button>
        <button onClick={() => setActiveTab('explore')} style={{ background: 'none', border: 'none', color: activeTab === 'explore' ? '#3b82f6' : '#94a3b8', cursor: 'pointer', fontSize: '12px' }}>
          🔍 Explore
        </button>
        <button onClick={() => setActiveTab('alerts')} style={{ background: 'none', border: 'none', color: activeTab === 'alerts' ? '#3b82f6' : '#94a3b8', cursor: 'pointer', fontSize: '12px' }}>
          🚨 Alerts
        </button>
        <button onClick={() => setActiveTab('profile')} style={{ background: 'none', border: 'none', color: activeTab === 'profile' ? '#3b82f6' : '#94a3b8', cursor: 'pointer', fontSize: '12px' }}>
          👤 Profile
        </button>
      </nav>

    </div>
  );
}