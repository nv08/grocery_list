import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

export default function Tabledata(props) {
    const {groceries} = props
    const {onEdit} = props
    return (
        <>
        {groceries.length>0?
            groceries.map((data,i)=>
            <tr key={i}>
                <td contentEditable onBlur={(e)=>{onEdit(data.id,{item:e.target.innerText})}}>
                    {data.item}
                </td>
                <td contentEditable onBlur={(e)=>{onEdit(data.id,{units:e.target.innerText})}}>
                    {data.units}
                </td>
                <td contentEditable onBlur={(e)=>{onEdit(data.id,{unitPrice:e.target.innerText})}}>
                    &#8377;{data.unitPrice}
                </td>
                <td>
                    &#8377;{  data.units * data.unitPrice}
                </td>
                <td>
                   <DeleteIcon onClick={()=>props.onDelete(data.id)}/>
                </td>
            </tr>
        ):"KHALI HAI"}

           
        </>
    )
}
