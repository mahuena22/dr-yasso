export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero skeleton */}
      <div className="h-screen bg-[#0D2B5B] animate-pulse" />

      {/* Content skeletons */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-4">
        <div className="h-4 bg-gray-100 rounded w-1/4 animate-pulse" />
        <div className="h-10 bg-gray-100 rounded w-1/2 animate-pulse" />
        <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse" />
        <div className="h-4 bg-gray-100 rounded w-2/3 animate-pulse" />
      </div>
    </div>
  );
}
