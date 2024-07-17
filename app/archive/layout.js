const ArchiveLayout = ({ archive, latest }) => {
    return (
      <>
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
          <h1 className="text-3xl font-bold text-center mb-8">News Articles</h1>
          <div className="grid grid-rows-1 lg:grid-rows-2 gap-8">
            <section className="bg-white shadow-md rounded-lg p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl font-semibold mb-4">Archive</h2>
              {archive}
            </section>
            <section className="bg-white shadow-md rounded-lg p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl font-semibold mb-4">Latest</h2>
              {latest}
            </section>
          </div>
        </div>
      </>
    );
  };
  
  export default ArchiveLayout;
  