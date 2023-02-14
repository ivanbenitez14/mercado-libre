
export const Pagination = ({productsPerPage, totalProducts, currentPage, setCurrentPage}) => {

  const pageNumbers = [];

  for(
    let i = 1; 
    i < Math.ceil(totalProducts / productsPerPage); 
    i++
  ) {pageNumbers.push(i);}

  const onPreviousPage = () => {
    setCurrentPage( currentPage - 1);
  }

  const onNextPage = () => {
    setCurrentPage( currentPage + 1);
  }

  const onClickPage = (n) => {
    setCurrentPage(n);
  }

  return (
    <nav role="navigation" aria-label="pagination" className="pagination">

      <button onClick={onPreviousPage}>Previous page</button>

      <ul>
        {
          pageNumbers.map(noPage => (
            <li key={noPage}>
              <button onClick={() => onClickPage(noPage)}>
                {noPage}
              </button>
            </li>
          ))
        }
      </ul>

      <button onClick={onNextPage}>Next page</button>

    </nav>
  );
};
