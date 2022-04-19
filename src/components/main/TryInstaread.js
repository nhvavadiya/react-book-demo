import React from 'react';
import CoverImage from '../../assets/images/CoverImage.PNG';
import GoogleBooks from '../../assets/images/GoogleBooks.png';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { Link } from "react-router-dom";
import Header from "../layout/Header";

const TryInstaread = () => {
    //===========Function For active navbar item================
    const handleActive = () => {
        document.getElementById("buyBookDropdown").class.add("active");
    }
    return (
        <>
            <Header />
            <div className='container-fluid'>
                <div className='container home-container'>
                    <div className="row main-row">
                        <div className="col-lg-2 col-md-3  cover-picture"><img src={ CoverImage } className="cover-image" alt="cover" /></div>
                        <div className="col-lg-10 col-md-9 right-content">
                            <div className="book-title">Astrophysics for People in a Hurry's Summary</div>
                            <div className="book-about">Key Insights & Analysis</div>
                            <div className="book-author">Kelly Brogan, MD with Kristin Loberg</div>
                            <div className="book-details">
                                <div className="read-time"><span className='icon'><LibraryBooksOutlinedIcon /></span><span>18 min read</span></div>
                                <div className="listen-time"><span className='icon'><HeadphonesOutlinedIcon /></span><span>14 min listen</span></div>
                                <div className="add-library"><span className='icon'><BookmarkBorderIcon /></span><span>Add to Library</span></div>
                                <div className="buy-book" Click={handleActive} id="buyBookDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='icon'><ShoppingCartOutlinedIcon /></span>Buy Book</div>
                                <ul className="dropdown-menu" aria-labelledby="buyBookDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/tryinstaread"><span><img src={GoogleBooks} className="google-books-icon" alt="icon" /></span>Google Books</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="book-related-tags">
                                <div className="tag">Business & Finance</div>
                                <div className="tag">Business & Finance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TryInstaread;
