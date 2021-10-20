import React, {useState, useEffect} from 'react';
import './Gallery.css';
import  Card  from '../card/Card';
import { Container, Row, Col } from "react-bootstrap";


export const Gallery =() => {
    const url = 'https://rickandmortyapi.com/api/character';
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        const resp = await fetch(url);
        const data = await resp.json();

        const basicImage = data?.results?.map((resp) => {
            return {
                id: resp.id,
                url: resp.image,
                title: resp.name,
                gender: resp.gender,
                status: resp.status,
            };
        });
        setImages(basicImage);
    };

    return (
        <Container fluid>
         <Row>
            {images?.map((d) => {
            return (
              <Col xs={12} md={8}>
                    <Card
                    key={d.id}
                    title={d.title}
                    img={d.url}
                    gender={d.gender}
                    status={d.status}
                    ></Card>
              </Col>
            );
        })}
        </Row>
     </Container>
    );
}