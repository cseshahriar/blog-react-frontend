import React from 'react';

function ArticleList(props) {
    const {articles} = props;

    return(
        <div>
            {
                articles && articles.map((article) => {
                return <div key={article.id}>
                    <h2 >{article.title}</h2>
                    <p>{article.description}</p>
                    <p>Author: {article.created_user.email }</p>
                    <p>Created At: {article.created_at }</p>

                    <div className="row">
                        <div className="col-md-1">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </div>
                    <hr/>
                </div> 
                }) 
            }
        </div>
    )
}

export default ArticleList;