import { utilService } from "../services/util.service.js"

const { useState } = React

export function LongTxt() {

    const [isShowMore , setShowMore] = useState(false)

  console.log(isShowMore)

    return <article className="long-txt">
        <p>{utilService.makeLorem(100)} {isShowMore && <span className="more">{utilService.makeLorem(150)}</span>}
            <button className="more-less-btn" 
            onClick={() => setShowMore(!isShowMore)}>{isShowMore ? 'Shoe less' : 'Show more'}</button>
        </p>
    </article>
}