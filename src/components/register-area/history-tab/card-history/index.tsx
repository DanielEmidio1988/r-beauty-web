import { IHistoryData } from "../../../../types/IHistoryData"

interface Props{
    history: IHistoryData;
}

function CardHistory({history}: Props){
    return(
        <aside>
            <div>
                <p>{history.title}</p><br/>
                <span>{history.date}</span>
            </div>
            <div>
                <p>{history.description}</p>
            </div>
            
        </aside>
    )
}

export default CardHistory