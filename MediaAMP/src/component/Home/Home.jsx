import Gemify from '../Game/Gemify';

export default function Home({ searchTerm, selectedPlatform }) {
  return (
    <div>
      <Gemify
        searchTerm={searchTerm}
        selectedPlatform={selectedPlatform}
      />
    </div>
  );
}
