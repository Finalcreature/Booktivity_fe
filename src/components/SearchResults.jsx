
function SearchResult({ search }) {
  return (
    <div className="results-component">
      <div className="book-card-container">
        {search.map((pet) => (
        //   <PetCard
        //     id={pet.id}
        //     key={pet.id}
        //     picture={pet.picture}
        //     name={pet.name}
        //     type={pet.type}
        //     status={pet.status}
        //   />
        ))}
      </div>
    </div>
  );
}

export default SearchResult;