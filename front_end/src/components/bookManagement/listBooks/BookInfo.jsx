export const BookInfo = ({ data }) => {
  return(
    <div className="b-info">
      <img src={data.picture} alt={data.title} />
      <p>{data.title}</p>
    </div>
  )
}