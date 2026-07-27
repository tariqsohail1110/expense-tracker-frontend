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
        return (Number(per)).toFixed(1);
    };

    const convertNumbers = (number) => {
        return (Number(number)).toLocaleString('en-US');
    };

    const formatDate = (d) => {
        const date = new Date(d);
        return new Intl.DateTimeFormat('en-GB').format(date);
    };

    const calculateTotalUsers = (arr) => {
        return arr.length;
    };

    const calculateActiveUsers = (arr) => {
        return (arr.filter(status => status.status === 'Active')).length
    };

    export {
        convert, calculateTotalSpendings, calculatePercentage, convertNumbers, formatDate, calculateTotalUsers, calculateActiveUsers
    }