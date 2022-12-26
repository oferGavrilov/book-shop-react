


export function ReviewList({ book , onRemoveReview }) {
   return  <div className="review-list">
            {console.log(book)}
            {/* <h4>Reviews:</h4> */}
            {book.reviews.map((review) => {
                return <ul key={review.id} className="review">
                    <h4>Full name: <span>{review.fullName}</span></h4>
                    <h4>Rating: <span>{'⭐'.repeat(review.rating)}</span></h4>
                    <h4>Read at: <span>{review.readAt}</span></h4>
                    <button onClick={() => onRemoveReview(review.id)}>Delete review</button>
                </ul>
            })}
        </div>
    
}