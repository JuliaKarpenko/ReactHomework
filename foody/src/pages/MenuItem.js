import React, { Component } from 'react';
import v4 from 'uuid/v4';
import style from './MenuItem.module.css';

const INITIAL_STATE = {
    commentList: [{id: "1", rating: "10", comment: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона," }],
    rating: '',
    comment: '',
}

export default class MenuItem extends Component {

    state={ ...INITIAL_STATE }

    handleChange = ({ target: { name, value }}) => {
        this.setState({
            [name]: value
        }) 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const textValue = e.target.comment.value;
        const selValue = e.target.rating.value;
        this.setState(prevState => ({          
            commentList: [{id: v4(), rating: selValue, comment: textValue },...prevState.commentList]
          }))     
         
        this.reset();
    }

    reset = () => {
        this.setState({
            comment: '',
            rating: '',
        });
        console.log(this.state);
    }

    render() {

        const { commentList, comment, rating } = this.state;
        return (
            <section className={style.container}>
                <div className={style.block}>
                    <img src="https://cdn2.superdeal.ua/uploaded/new_campaign_pictures/565650/data/preview475x230/%D0%9C%D0%B0%D1%84%D0%B8%D1%8F.jpg" alt="" />
                    <h2>Sushi</h2>
                    <p>Price: 120</p>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Choose rating
                            <select className={style.select}
                                name='rating'                               
                                value={rating}
                                onChange={this.handleChange}
                            >
                                <option value='' disabled >...</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                                <option value='10'>10</option>
                            </select>
                        </label>
                        <label>
                            <p>Введите ваш отзыв:</p>
                            <p><textarea name='comment' value={comment} onChange={this.handleChange} rows="5" cols="55" ></textarea></p>
                        </label>
                        <button type="submit" value="Отправить" className={style.button}> Submit</button>
                    </form>
                </div>
                <ul className={style.commentList}>
                    {commentList.map((item) => (
                        <li key={item.id} className={style.item}>
                            <div>Rating: {item.rating}</div>
                            <div className={style.itemComment}>{item.comment}</div>
                        </li>
                    ))}
                </ul>
            </section>
        )
    }
}