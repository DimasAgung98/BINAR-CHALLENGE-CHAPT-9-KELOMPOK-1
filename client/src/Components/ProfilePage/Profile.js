import React, { useState } from 'react'
//IMPORT COMPONENT
import { Button } from 'reactstrap';
import { Modal } from 'react-bootstrap';
import ProfileAchievement from './ProfileAchievement';
//IMPORT ICONS
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook } from 'react-icons/fa'
//IMPORT ASSETS
import PP from '../../Assets/images/pp.jpg';
import '../../Assets/css/Profile.css'

function Profile() {
    const [show, setShow] = useState();
    const handleModal = () => setShow(true);
    const closeModal = () => setShow(false);

    return (
        <>
            <div className='container-fluid bg-light min-vh-100'>
                <div className='row bg-light '>
                    <div className='col-3 pt-5 px-5'>
                        <div className='card pp-section bg-light'>
                            <img className='profile-pict mb-3' src={PP} alt="profile" />
                            <Button className='btn-change-profile' color='danger'>Change Profile Picture</Button>
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
        </>
    )
}

export default Profile