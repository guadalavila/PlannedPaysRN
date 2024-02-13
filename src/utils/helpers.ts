export const getColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export function hexToRGB(hex: string, alpha: number = 1) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    } else {
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
}

export const validateEmail = (email: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    return false;
};

export const getIdByDate = () => {
    const today = new Date();
    const id =
        today.getFullYear().toString() +
        ('0' + (today.getMonth() + 1)).slice(-2) +
        ('0' + today.getDate()).slice(-2) +
        ('0' + today.getHours()).slice(-2) +
        ('0' + today.getMinutes()).slice(-2) +
        ('0' + today.getSeconds()).slice(-2);
    return id;
};

export const getPreviousDay = (date = new Date()) => {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    return previous;
};

function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
}

export const formatDate = (date: Date) => {
    // date.getFullYear()
    return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1)].join('/');
};

export const isSelectedDate = (dateA: Date, dateB: Date) => {
    return formatDate(dateA) === formatDate(dateB);
};

export const formatDateCalendar = (date: Date) => {
    return [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join('-');
};

export const getFirstDayOfMonth = () => {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth() - 1, 1);
};

export const getMinimumDate = () => {
    const today = new Date();
    const lastYear = today.getFullYear() - 1;
    const lastYearToday = new Date(lastYear, today.getMonth(), today.getDate());
    return lastYearToday;
};

export const formatMoney = (price: number) => {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return USDollar.format(price);
};
