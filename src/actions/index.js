const increment = (amount) => {
    return {
        type: "INCREMENT",
        payload: amount
    };
};

const decrement = () => {
    return {
        type: "DECREMENT"
    };
};

export {increment, decrement}