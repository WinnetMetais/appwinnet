import React, { useState } from 'react';
import ARViewer from './components/ARViewer';

export default function App() {
  const [modelPath, setModelPath] = useState('/models/lixeira-media.glb');

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Visualize a Lixeira da Winnet no seu Ambiente
      </h1>

      <div className="flex gap-2 mb-4">
        <button onClick={() => setModelPath('/models/lixeira-pequena.glb')} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Pequena
        </button>
        <button onClick={() => setModelPath('/models/lixeira-media.glb')} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Média
        </button>
        <button onClick={() => setModelPath('/models/lixeira-grande.glb')} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Grande
        </button>
      </div>

      <div className="w-full h-[500px] border border-gray-300 rounded">
        <ARViewer modelPath={modelPath} />
      </div>

      <a href="https://wa.me/11978791851" target="_blank" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
        Solicitar Orçamento
      </a>
    </div>
  );
}
