import React,{Component} from 'react';
import { connect } from 'react-redux';
import  {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class Booklist extends Component {
    renderList(){
        return this.props.books.map((book)=>{
            return (
                <li 
                    key={book.title} 
                    onClick={()=> this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
               {this.renderList()} 
            </ul>
        )
    }
}

function mapStateToProps(state){
    return{
        books:state.books
    };
}
//Anything returned from this function will end up as props 
// on the Booklist container
function mapDispatchToProps(dispatch){
    //whenever selectBook is called ,the result should be passed 
    //to all of our reducers
    return bindActionCreators({selectBook: selectBook},dispatch);
}
//Promte Booklist from a Component to a container  - ot needs to know
// about this new dispatch method , selectBook. Make it available
//as prop.
export default connect(mapStateToProps,mapDispatchToProps)(Booklist);