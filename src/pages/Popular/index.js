import './popular.scss'
import React, { useEffect, useState } from 'react';
import { Delete, EditTwoTone, Add } from '@material-ui/icons';
import popularForm from '../../components/admin/popularFrom'
import { Col, Row, Card } from 'antd';
import popularApi from '~/api/popularApi';


const Popular = () => {

  const [edit, setEdit] = useState(false);
  const [popularDatas, setPopularDatas] = useState([]);


  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const response = await popularApi.getAll();
        setPopularDatas(response)
      } catch (error) {
        console.log('Failed to fetch popular list: ', error);
      }
    }
    fetchPopular();
  }, []);


  return (
    <div className='pd-50'>
      <h2 className='text-center p-2'>Popular manager</h2>
      <div className='popular_card border' id='popular'>
        {
          popularDatas?.popular?.map((item, index) => (
            <div key={index}>
              <div className="card">
                <div className="card-header">
                  <h4 className='text-center'>{item.title}</h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Popular: </h5>

                  <Row gutter={[32, 32]}>
                    {item.popular?.map((item, index) => (
                      <Col md={12} lg={8} sm={24} xs={24} className="pr-pl">
                        <Card className="card-item" hoverable cover={<img src={item.imgUrl} alt="#" />}>
                          <div className="textCard">
                            <span>{item.content}</span>
                          </div>
                          <div>
                            <button className='size-40 btn btn-primary col-6 p-1'>< Add /></button>
                            <button
                              className="size-40 btn btn-outline-info p-1"
                              onClick={() => setEdit(true)}
                            >
                              <EditTwoTone />
                            </button>

                            <button className='size-40 btn btn-danger col-6 p-1'><Delete /></button>
                          </div>
                        </Card>
                      </Col>
                    ))}

                  </Row>

                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Popular