import PostIt from "./PostIt"

export default function PostItContainer({ PostIts }){
 return (
        <div className="row">
            {PostIts.map(p => <PostIt key={ p.Id } Post={ p } />)}
        </div>
    )
}