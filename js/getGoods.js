const getGoods = () =>{
    const links = document.querySelectorAll('.navigation-link');

    const getData = () =>{
        fetch('https://wb-pet-default-rtdb.asia-southeast1.firebasedatabase.app/db.json')
        .then(res => res.json())
        .then(data => localStorage.setItem('data', JSON.stringify(data)));
    }

    getData();

    links.forEach(link =>{
        link.addEventListener('click', (event) =>{
            event.preventDefault();
            getData();
        })
    });

    localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4, 5]));
    const goods = JSON.parse(localStorage.getItem('goods'));
    const data = JSON.parse(localStorage.getItem('data'));
    console.log([goods, data]);
    localStorage.removeItem('goods');
    // console.log(localStorage);
}

getGoods();