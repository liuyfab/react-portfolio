import React from 'react';

// Props are passed through our functional component.
const Nav = (props) => {
    console.log("Nav props", props)
    const pages = ['About', 'Projects', 'Contact', 'Resume'];

    return (
        <ul className="nav-list">
            {/*Use map to render each item in the pages array, which populates the Nav bar */}
            {pages.map(page => (
                <li className="list-item" key={page}>
                    <a href={'#' + page.toLowerCase()}
                        //whenever an item in the nav bar is clicked on, the current page is set through the setCurrentPage 
                        onClick={() => props.setCurrentPage(page) } 
                       
                        className={props.currentPage === page ? 'navActive' : 'nav-link'}>
                        <h2>{page}</h2>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Nav;