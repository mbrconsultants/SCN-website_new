const ChamberSittingPaginationLinks = ({ meta, onPageClick }) => {
    return (
        <div className="pagination-wrapper">
            <style jsx>{`
          .pagination-wrapper {
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }
  
          .pagination {
            display: flex;
            gap: 8px;
          }
  
          .page-link {
            border: none;
            background-color: #0EA476; /* Green background */
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%; /* Makes buttons round */
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
  
          .page-link.active {
            background-color: #155724; /* Darker green for active page */
          }
  
          .page-link:disabled {
            background-color: gray;
            cursor: not-allowed;
          }
  
          .page-link:hover:not(:disabled) {
            background-color: #218838; /* Slightly lighter green on hover */
          }
        `}</style>

            <div className="pagination">
                {meta.links.map((link, index) => {
                    // Check if the link is for the "Previous" or "Next" button
                    if (link.label === "&laquo; Previous" || link.label === "Next &raquo;") {
                        return (
                            <button
                                key={index}
                                disabled={!link.url}
                                className={`btn btnpage-link ${link.active ? "active" : ""}`}
                                onClick={() => link.url && onPageClick(link.url)}
                                dangerouslySetInnerHTML={{ __html: link.label }} // Render HTML entities
                            />
                        );
                    }

                    // Render regular page numbers
                    return (
                        <button
                            key={index}
                            disabled={!link.url}
                            className={`page-link ${link.active ? "active" : ""}`}
                            onClick={() => link.url && onPageClick(link.url)}
                        >
                            {link.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ChamberSittingPaginationLinks;
