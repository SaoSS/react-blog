import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addBook,removeBook } from '../redux/action/bookQuery';
import {StoreState} from '../redux/storeType/bookQueryType'

interface Iprops {
    bookList:string[];
    onIncrement: (text:string) => void;
    onDecrement: (text:string) => void;
}
interface Istate {
    inputValue : string
}
class Wrap extends React.Component<Iprops,Istate>{
    constructor(props:Iprops){
        super(props);
        this.state = {
            inputValue:"222",
        }
    }

    public BookListUl= (bookList:string[])=>{
        return (
            <div>
                <ul>
                    {
                        bookList.map((item,index) => (
                        <li key={index}>{item}</li>
                        ))
                    }
                </ul>
                
            </div>
        )
    }
    addBookFun = ()=>{
        const {onDecrement} = this.props;
        onDecrement(this.state.inputValue)
    }
    inputSet= (event: React.ChangeEvent<HTMLInputElement>)=> {
        this.setState({inputValue:event.target.value})
    }
    render(){
        const {bookList, onDecrement,onIncrement} = this.props;
        return(
            <div style={{margin:"0 auto"}}>
                <header style={{width:"500px",margin:"0 auto",textAlign:"center"}}>图书查询系统</header>
                <main>
                    <ul>
                        <input onInput={this.inputSet} type="text"/>
                        {this.BookListUl(bookList)}
                        <a onClick={this.addBookFun}>+</a>
                        <a>-</a>
                    </ul>
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state:StoreState):{bookList:string[]} => {
    return {
        bookList:state
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onDecrement: (text:string) => dispatch(addBook(text)),
    onIncrement: (text:string) => dispatch(removeBook(text))
})



export default connect(mapStateToProps, mapDispatchToProps)(Wrap);