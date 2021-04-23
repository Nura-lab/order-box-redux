import React from "react";
import { data } from "../../store/data";
import { useSelector, useDispatch } from "react-redux";
import { add_order } from "../../store/actions/";
//import { Card } from "../Card";

const Orders = () => {
    const state = useSelector((state) => state.orders);
    console.log(state);
    const dispatch = useDispatch();
    return (
        <div style={style.orderContainer}>
            <div style={style.menuContainer}>
                <h1>Menu</h1>
                <ul>
                    {data.map((el, id) => {
                        return (
                            <li
                                onClick={() => dispatch(add_order(el))}
                                key={id}
                                style={style.lishka}
                            >
                                {el.title}

                                <b>{el.price}</b>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div style={style.basketContainer}>
                <h1>Orders</h1>
                <ul>
                    {state.map((el, id) => {
                        return (
                            <li style={style.li} key={id}>
                                {el.title}
                                <b>{el.price}</b>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

const style = {
    orderContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    menuContainer: {
        width: "50%",
        cursor: "pointer",
    },
    lishka: {

        width: "300px",
        margin: "10px",


    },

    basketContainer: {
        width: "50%",
    },
    li: {

        margin: "10px",
        width: "300px",

    },
};

export default Orders;
