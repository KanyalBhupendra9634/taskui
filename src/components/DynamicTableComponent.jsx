import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Container, Table, Form } from 'react-bootstrap';
import axios from 'axios';
const DynamicTable = ({ setDataValue }) => {


    const [dataValue, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://apis-eight-beta.vercel.app/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    // const handleRowClick = (_id) => {
    //     let newData = dataValue.find(val => val._id == _id)?.description
    //     if (newData)
    //         setDataValue(newData)
    // }

    const handleUpdateData = async(_id)=>{
        let postData = dataValue?.find(val=>val._id == _id)
        const response = await axios.post('https://apis-eight-beta.vercel.app/updateData', postData);
       if(response.status == '200'){
        alert('data updated sucessfully')
       }
       else{
        alert('something went wrong')
       }
    }
    const handleInputChange = (event, _id) => {
        const newValue = event.target.value;
        setData(prevInputValues =>
          prevInputValues.map(input =>
            input._id == _id ? { ...input, description: newValue } : input
          )
        );
      };

    return (
        <Container className='table-container'>
            {dataValue && dataValue.length > 0 && <Table striped bordered hover className='customizedTable'>
                <thead>
                    <tr>
                        {Object.keys(dataValue[0]).map((key, index) => (
                            <th key={index}>{key == '_id' ? 'Sr.' : key?.charAt(0).toUpperCase() + key.substring(1, key.length)}</th>
                        ))}
                        <th key={6}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataValue.map((item, inde) => (
                        <tr key={inde}>
                            {
                                Object.keys(item).map((key, index) => (
                                    key !== 'description' && key !== '_id' ? (
                                        <td key={index}>{item[key]}</td>
                                    ) : key === '_id' ? (
                                        <td key={index}>{inde}</td>
                                    ) : (
                                        <td key={index}>
                                            <Form.Control
                                                value={item[key]}
                                                onChange={(e)=>handleInputChange(e,item._id)}
                                                as="textarea"
                                                style={{ width: '100%', height: "100%", resize: 'none' }} 
                                            />
                                        </td>
                                    )
                                ))
                            }
                            <td key={inde} onClick={()=>handleUpdateData(item._id)}><Button >Update</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>}
        </Container>
    );
};

export default DynamicTable;
