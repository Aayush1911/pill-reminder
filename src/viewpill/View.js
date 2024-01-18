import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import './view.css'
import { deletereminder } from '../redux/slices/addnew';

function View() {
    const addnew=useSelector(state => state.addnewReducer.newreminder);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deletereminder(id));
    };
  return (
    <div className='container'>
        
        {addnew.map(newItem => (
        <div key={newItem.id}>
            <div className="card">
            <p><b>Medicine Name :</b> {newItem.medname}</p>
            <p className='date_time'>
                            <b>Date & Time :</b> {new Date(newItem.datetime).toLocaleDateString('en-GB')}{' '}
                            {new Date(newItem.datetime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                        </p>  
            <p className='name'><b>Name : </b>{newItem.carename}</p>
            <p className='mail'><b>Email : </b>{newItem.email}</p><br />
            <button className='delete' onClick={()=>handleDelete(newItem.id)}>Delete</button><br /><br />
            </div>
        </div>
    ))}
    </div>
    
  )
}

export default View
