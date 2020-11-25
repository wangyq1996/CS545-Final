const signin = async (event) => {
    event.preventDefault();
    window.location.replace('/entry');
};

const bindEvent = () => {
    $('#signinBtn').click(signin);
};

const main = async () => {
    bindEvent();
};

main();
