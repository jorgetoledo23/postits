export default function PostIt({Post}) {
    
    const PostItStyle = {
        minHeight : '250px',
        backgroundColor: Post.Importante ? 'orangered' : 'skyblue',
        color : Post.Importante ? 'white' : 'black',
        fontSize : '1.5 rem'
    }

    return (
        <div className="col-md-3">
            <div style={ PostItStyle } className="card text-center m-5">
                <div>
                    <p style={{lineHeight : '0.7'}} className="card-title mt-2"><strong>{Post.Titulo}</strong></p>
                    <span style={{lineHeight : '0.5'}}><i className="fa fa-solid fa-xmark"></i></span>
                    <hr style={{lineHeight : '0.5', margin: '0px'}} />
                    <p>{Post.Descripcion}</p>
                    <p>{Post.Importante}</p>  
                </div>
            </div>
        </div>
        
        )
};
