    const convert = (amount) => {
        return (Number(amount)).toLocaleString('en-US', { style: 'currency', currency: 'PKR'});
    };

    const calculateTotalSpendings = (data) => {
        const array = (data.map((i) => i.amount)).reduce((acc, curr) => {
            return acc + curr;
        }, 0);
        return array;
    };

    const calculatePercentage = (num, total) => {
        const per = (num / total) * 100;
        return (Number(per)).toFixed(2);
    }

    export {
        convert, calculateTotalSpendings, calculatePercentage
    }