// Server component by default
// fetch data inside this component
// access backend resources directly
// secrets can be kept here

// You cannot
// use hooks -> not possible
// cannot use events

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="text-lg font-bold">Home Page @ root level</div>
    </div>
  );
}
