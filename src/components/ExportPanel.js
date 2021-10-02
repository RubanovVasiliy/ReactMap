import exportObj from "../export/export";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeObjectAction, setInvisibleAction} from "../redux/export-reducer";

const ExportPanel = () => {
    const dispatch = useDispatch()
    const exportStore = useSelector(state => state.export)

    let exportList = exportStore.objects.map(o =>
        <div onClick={() => {
            dispatch(removeObjectAction(o.id))
        }} key={o.id}>
            {o.object_number}
        </div>
    )

    return (
        <div className="export">
            На экспорт:
            <div>
                {exportList}
                {exportStore.objects.length < 1 && <div onClick={()=>{dispatch(setInvisibleAction())}}>Закрыть</div>}
            </div>
            <button className="btn btn-success" onClick={() => {
                exportObj(exportStore.objects.map(({visible, ...rest}) => rest))
            }}>Экспорт
            </button>
        </div>
    )
}

export default ExportPanel