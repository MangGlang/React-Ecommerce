import React from 'react'

const Explore = () => {
    return (
        <div>
            <section id="explore">
                <div className="container">
                    <div className="row row__column">
                        <h2>
                            Explore more <span className="purple">Books</span>
                        </h2>
                        <a href="/books">
                            <button className="btn">Explore Books</button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Explore;