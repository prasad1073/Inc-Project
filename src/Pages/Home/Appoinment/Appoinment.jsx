import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Appoinment.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useFireBase } from "../../../Hooks/useFirebase";
import { db, auth } from "../../../Firebase/firebase.config";
import {
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";

// const fetchData = () => {
//     return axios.get("http://127.0.0.1:5000/")
//   }




const Appoinment = () => {
    const [List, setList] = useState([{}]);

    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPhone, setNewPhone] = useState(0);
    const [newSubject, setNewSubject] = useState("");
    const [newMessage, setNewMessage] = useState("");

     const moviesCollectionRef = collection(db, "brain-tumor");

     const getList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    //fetchData();
    getList();
  }, []);

    const onSubmitList = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        name: newName,
        email: newEmail,
        phone: newPhone,
        subject:newSubject,
        message:newMessage,
        userId: auth?.currentUser?.uid,
      });
      getList();
    } catch (err) {
      console.error(err);
    }
  };
    // useEffect{()=>{
    //     fetch('/api').then(
    //         response=>response.json()
    //     ).then(data=>setList(data))
    // },[]};
    return (

        <section className="appoinment-wrapper">
            
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <div className="section-title">
                            <h1 className="mt-5">Request Appointment</h1>
                        </div>
                        <div className="appoinment-form">
                            <useFireBase />
                            <form action="#" className="row">
                                <Col md={6} lg={6}>
                                    <input type="text" placeholder="Name" onChange={(e) => setNewName(e.target.value)}/>
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="email" placeholder="Email" onChange={(e) => setNewEmail(e.target.value)}/>
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="phone" placeholder="Phone" onChange={(e) => setNewPhone(e.target.value)}/>
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="text" placeholder="Subject" onChange={(e) => setNewSubject(e.target.value)}/>
                                </Col>
                                <Col md={12} lg={12}>
                                    <textarea name="Message" id="" cols="30" rows="10" placeholder="Message" onChange={(e) => setNewMessage(e.target.value)}></textarea>
                                </Col>
                                <button className="theme-btn btn-fill form-btn mt-5" onClick={onSubmitList}><a href='http://127.0.0.1:5000/'>Submit</a></button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Appoinment;