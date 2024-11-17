import React, { useEffect, useState } from 'react';
import { Agent, TTS } from 'react-agents';
import { fetchCryptoData } from './services/cryptoService'; // Adjust path based on your project structure

export default function MyAgent() {
  const [cryptoData, setCryptoData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getCryptoData() {
      try {
        const data = await fetchCryptoData('BTC'); // Fetch Bitcoin data
        setCryptoData(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch cryptocurrency data:', error);
        setLoading(false);
      }
    }

    getCryptoData();
  }, []);

  return (
    <Agent>
      {loading ? (
        <div>Loading cryptocurrency data...</div>
      ) : (
        <div>
          <h1>{cryptoData.data.BTC.name}</h1>
          <p>Price: ${cryptoData.data.BTC.quote.USD.price.toFixed(2)}</p>
        </div>
      )}
      <TTS voiceEndpoint="elevenlabs:kadio:YkP683vAWY3rTjcuq2hX" />
    </Agent>
  );
}
