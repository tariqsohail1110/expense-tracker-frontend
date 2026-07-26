    const convert = (amount) => {
        return (Number(amount)).toLocaleString('en-US', { style: 'currency', currency: 'PKR'});
    }

    export {
        convert
    }