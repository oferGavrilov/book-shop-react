import { ReviewPreview } from "./review-preview.jsx";



export function ReviewList({ book , onRemoveReview }) {
   return  <div className="review-list">
            {book.reviews.map((review) => <ReviewPreview key={review.id} review={review} onRemoveReview={onRemoveReview} />)}
        </div>
    
}