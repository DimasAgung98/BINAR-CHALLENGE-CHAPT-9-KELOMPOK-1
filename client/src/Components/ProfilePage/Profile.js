import React, { useState, useEffect } from 'react';
import axios from 'axios';
//IMPORT COMPONENT
import { Button } from 'reactstrap';
import { Modal } from 'react-bootstrap';
import ProfileAchievement from './ProfileAchievement';
import Swal from 'sweetalert2';
//IMPORT ICONS
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook } from 'react-icons/fa'
//IMPORT ASSETS
import '../../Assets/css/Profile.css'

function Profile() {
    const [show, setShow] = useState();
    const [picture, setShowPicture] = useState();
    const [image, setImage] = useState("https://fakeimg.pl/350x200/?text=Upload Image");
    const [saveImage, setSaveImage] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [preview, setPreview] = useState();
    const handleModal = () => setShow(true);
    const closeModal = () => setShow(false);
    const openModalPicture = () => setShowPicture(true);
    const closeModalPicture = () => setShowPicture(false);

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:4000/users/:id")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setData(result);
    //             },
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }, [])

    useEffect(() => {
        if (!photo) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(photo)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [photo])


    function handleUploadChange(e) {
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0];
        setPhoto(e.target.files[0]);
        setImage(URL.createObjectURL(uploaded));
        setSaveImage(uploaded);
    }

    //MENAMBAHKAN DATA KE FORM
    let formData = new FormData();
    formData.append('photo', saveImage);

    function uploadedImage(e) {
        if (!saveImage) {
            Swal.fire({
                icon: 'warning',
                title: 'ALERT',
                text: 'CHOOSE YOUR PROFILE PICTURE FIRST',
                confirmButtonColor: '#dc3545',
            })
        } else {
            const result = axios.post('http://localhost:4000/upload', formData)
            Swal.fire({
                icon: 'success',
                title: 'SUCCESS',
                text: 'IMAGE UPLOADED',
                confirmButtonColor: '#dc3545',
            })
            closeModalPicture();
        }
    }
    return (
        <>
            <div className='container-fluid bg-light min-vh-100'>
                <div className='row bg-light '>
                    <div className='col-3 pt-5 px-5'>
                        <div className='card pp-section bg-light'>
                            <img className='profile-pict mb-3' src={preview} alt="profile" />
                        </div>
                        <div className='row pt-3 justify-content-center'>
                            <Button onClick={openModalPicture} className='btn-change-profile' color='danger'>Change Profile Picture</Button>
                        </div>
                        <div className='row'>
                            <ul className='profile-socials'>
                                <li><a className='instagram' href='https://www.instagram.com/'><FaInstagram /></a></li>
                                <li><a className='twitter' href='https://twitter.com/'><FaTwitter /></a></li>
                                <li><a className='tiktok' href='https://www.tiktok.com/'><FaTiktok /></a></li>
                                <li><a className='facebook' href='https://www.facebook.com/'><FaFacebook /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-9 pt-5 px-5 bg-white'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col'>
                                    <h1>USER PROFILE</h1>
                                </div>
                                <div className='col text-end'>
                                    <Button onClick={handleModal} color='danger' outline>Edit profile</Button>
                                </div>
                            </div>
                            <form>
                                <div class="mb-3">
                                    <label class="form-label text-black">Name</label>
                                    <input type="text" class="form-control" id="name" aria-describedby="name" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-black">Username</label>
                                    <input type="text" class="form-control" id="username" aria-describedby="username" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-black">Email</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-black">Social Media URL</label>
                                    <input type="text" class="form-control" id="username" aria-describedby="username" />
                                </div>
                                <div class="mb-3">
                                    <label className='form-label text-black'>About Me</label>
                                    <textarea class="form-control form-sizing" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </form>
                            {/* )
                                )
                            } */}
                            <div className='row'>
                                <ProfileAchievement />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={closeModal}>
                <Modal.Header>
                    <b>EDIT DATA</b>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div class="mb-3">
                            <label class="form-label text-black">Name</label>
                            <input type="text" class="form-control" id="name" aria-describedby="name" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label text-black">Username</label>
                            <input type="text" class="form-control" id="username" aria-describedby="username" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label text-black">Email</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label text-black">Social Media URL</label>
                            <input type="text" class="form-control" id="username" aria-describedby="username" />
                        </div>
                        <div class="mb-3">
                            <label className='form-label text-black'>About Me</label>
                            <textarea class="form-control form-sizing" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className='center'>
                    <Button type="submit" className="btn btn-danger">Submit</Button>
                    <Button className='buttonSumbit btn-dark btn-modal' onClick={closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={picture} onHide={closeModal}>
                <Modal.Header>
                    <b>EDIT PROFILE IMAGE</b>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className='text-center'>
                            <img src={image} className='img-thumbnail' alt='profileimage' />
                        </div>
                        <div className='pt-3'>
                            <label htmlFor='formFile' className='form-label text-black'>Upload Image Here</label>
                            <input type='file' className='form-control' id='formFile' name='photo' onChange={handleUploadChange} accept='image/*' />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='center'>
                    <Button onClick={uploadedImage} type="submit" className="btn btn-danger">Submit</Button>
                    <Button className='buttonSumbit btn-dark btn-modal' onClick={closeModalPicture}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Profile