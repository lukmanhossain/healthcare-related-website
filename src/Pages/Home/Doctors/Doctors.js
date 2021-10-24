import React from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const doctorsData = [
    {
        name: 'Austin Distel',
        img: 'https://i.ibb.co/MkDbLrD/austin-distel.jpg',
        expertize: 'Cardiologiest'
    },
    {
        name: 'Humberto Chavez',
        img: 'https://i.ibb.co/NVVX2pp/humberto-chavez.jpg',
        expertize: 'Dentist'
    },
    {
        name: 'Usman Yousaf',
        img: 'https://i.ibb.co/Xp2Pcsb/usman-yousaf-p-Trhfmj2j-DA-unsplash.jpg',
        expertize: 'Therapist'
    },
]

const Doctors = () => {
    return (
        <div className="container">
            <h2 className="mt-3 text-primary">Our Specialist Doctors</h2>
            <p className="mb-3">Meet our world class doctors who will help you to heal.</p>
            <div className="row">
                {
                    doctorsData.map(doctor => <Doctor
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;