import { useState } from 'react';
import BusinessForm from './components/BusinessForm';
import BusinessCard from './components/BusinessCard';

function App() {
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ name, location }) => {
    setLoading(true);
    const res = await fetch('https://localbussinessmini.onrender.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, location }),
    });
    const data = await res.json();
    setBusiness({ ...data, name, location });
    setLoading(false);
  };

  const handleRegenerate = async () => {
    const res = await fetch(`https://localbussinessmini.onrender.com`);
    const { headline } = await res.json();
    setBusiness((prev) => ({ ...prev, headline }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">Local Business Dashboard</h1>
      <BusinessForm onSubmit={handleSubmit} />
      {loading && <p className="mt-4">Loading...</p>}
      {business && <BusinessCard data={business} onRegenerate={handleRegenerate} />}
    </div>
  );
}

export default App;
