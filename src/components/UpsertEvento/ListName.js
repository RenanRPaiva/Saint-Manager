import { Button } from "react-bootstrap"

export function ListName (props) {
    return (
        <div>
                    <ul>
                        {props.list.map((item, index) => {
                            return (
                                <li key={index}>{item} <Button variant="danger"  onClick={() => { 
                                    props.handleDelete(index)
                                }}>X</Button></li>
                            )
                        })}
                    </ul>
                </div>
    )
}