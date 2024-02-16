// BookInfo component for displaying information of a single book
export const BookInfo = ({ data }) => {
  return (
    <div className="b-info">
      {/* Render the book's picture with alt text as the title */}
      <img src={data.picture} alt={data.title} />
      {/* Render the book's title */}
      <p>{data.title}</p>
    </div>
  );
}