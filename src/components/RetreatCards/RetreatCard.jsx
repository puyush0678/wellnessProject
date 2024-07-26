import './RetreatCard.css'
const RetreatCard=({event})=>{
   const formattedDate = new Date(event?.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return (
    <article className="event-item">
      <img src={event?.image} alt={event?.title} className="event-item-img"  height="150px" />
      <div className="event-item-content">
          <h2>{event?.title}</h2>
          <p className="event-item-description">{event?.description}</p>
          <p className="event-item-date">{`Date: ${formattedDate}`}</p>
          <p className="event-item-location">{`Location: ${event.location}`}</p>
          <p className="event-item-price">{`Price: ${event.price}`}</p>
      </div>
    </article>)
}
export default RetreatCard;