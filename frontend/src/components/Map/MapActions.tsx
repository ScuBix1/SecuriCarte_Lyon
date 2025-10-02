type MapActionsProps = {
  setActiveType: (activeType: 'physical' | 'verbal' | 'theft' | null) => void;
  activeType: 'physical' | 'verbal' | 'theft' | null;
};

const MapActions = ({ setActiveType, activeType }: MapActionsProps) => {
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <button
        onClick={() => setActiveType('physical')}
        className={`px-4 py-2 rounded text-white transition ${
          activeType === 'physical'
            ? 'bg-red-600'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {activeType === 'physical'
          ? 'Cliquez sur la carte'
          : 'Violence physique'}
      </button>

      <button
        onClick={() => setActiveType('verbal')}
        className={`px-4 py-2 rounded text-white transition ${
          activeType === 'verbal'
            ? 'bg-orange-600'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {activeType === 'verbal' ? 'Cliquez sur la carte' : 'Violence verbale'}
      </button>

      <button
        onClick={() => setActiveType('theft')}
        className={`px-4 py-2 rounded text-white transition ${
          activeType === 'theft'
            ? 'bg-yellow-600'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {activeType === 'theft' ? 'Cliquez sur la carte' : 'Vol'}
      </button>
    </div>
  );
};

export default MapActions;
