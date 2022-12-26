
const {useState , useEffect , useRef} = React

import { eventBusService } from "../services/event-bus.service.js"

export function UserMsg() {
    
    const [msg , setMsg] =useState(null)
    const timeoutIdRef = useRef()

    useEffect(() => {
        const unsubscribe = eventBusService.on('show-user-msg', (msg) =>{
            console.log(msg)
            setMsg(msg)
            if(timeoutIdRef.current){
                clearTimeout(timeoutIdRef.current)
                timeoutIdRef.current = null
            }
            timeoutIdRef.current = setTimeout(onCloseMsg, 3000)

        })

        return unsubscribe
    }, [])
    
    function onCloseMsg() {
        setMsg(null)
    }


    if(!msg ) return <span></span>
    return <div className={"user-msg " + msg.type}>
        {msg.txt}
        <button className="close-msg-btn" onClick={onCloseMsg}><img className="close-icon" src="assets/style/img/x.png" alt="" /></button>
    </div>
}