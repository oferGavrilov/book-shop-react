

export function ReviewPreview({ review, onRemoveReview }) {
    return  <ul className="review">
        <h4>Full name: <span>{review.fullName}</span></h4>
        <h4>Rating: <span>{'⭐'.repeat(review.rating)}</span></h4>
        <h4>Read at: <span>{review.readAt}</span></h4>
        <button onClick={() => onRemoveReview(review.id)}>Delete review</button>
    </ul>
}