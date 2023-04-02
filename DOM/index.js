const data = [
    {
        id: 0,
        image: 'https://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tnhttps://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tn',
        title: 'E - Sở hữu điện thoại chính hãng Xiaomi 12 Pro 5G chọn màu ngẫu nhiên ( đọc kỹ mô tả)',
        price: 3000,
        sold: 5
    },
    {
        id: 1,
        image: 'https://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tnhttps://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tn',
        title: 'E - Sở hữu điện thoại chính hãng Xiaomi 12 Pro 5G chọn màu ngẫu nhiên ( đọc kỹ mô tả)',
        price: 35000,
        sold: 5
    },
    {
        id: 2,
        image: 'https://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tnhttps://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tn',
        title: 'E - Sở hữu điện thoại chính hãng Xiaomi 12 Pro 5G chọn màu ngẫu nhiên ( đọc kỹ mô tả)',
        price: 35000,
        sold: 5
    },
    {
        id: 3,
        image: 'https://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tnhttps://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tn',
        title: 'E - Sở hữu điện thoại chính hãng Xiaomi 12 Pro 5G chọn màu ngẫu nhiên ( đọc kỹ mô tả)',
        price: 35000,
        sold: 5
    },
    {
        id: 4,
        image: 'https://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tnhttps://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tn',
        title: 'E - Sở hữu điện thoại chính hãng Xiaomi 12 Pro 5G chọn màu ngẫu nhiên ( đọc kỹ mô tả)',
        price: 35000,
        sold: 5
    },
    {
        id: 5,
        image: 'https://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tnhttps://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tn',
        title: 'E - Sở hữu điện thoại chính hãng Xiaomi 12 Pro 5G chọn màu ngẫu nhiên ( đọc kỹ mô tả)',
        price: 35000,
        sold: 5
    },
    {
        id: 6,
        image: 'https://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tnhttps://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tn',
        title: 'E - Sở hữu điện thoại chính hãng Xiaomi 12 Pro 5G chọn màu ngẫu nhiên ( đọc kỹ mô tả)',
        price: 35000,
        sold: 5
    },
    {
        id: 7,
        image: 'https://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tnhttps://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tn',
        title: 'E - Sở hữu điện thoại chính hãng Xiaomi 12 Pro 5G chọn màu ngẫu nhiên ( đọc kỹ mô tả)',
        price: 35000,
        sold: 0
    }
];

const container = document.getElementById('container');

function createCard(cardInfo) {
    const { image, title, price, sold } = cardInfo;

    return `
        <div class="card">
            <img src="${image}" class="card-image" alt="">
            <span class="card-title">${title}</span>
            <div class="card-bottom">
                <span class="card-bottom-left">đ${price}</span>
                <span class="card-bottom-right">${sold > 0 ? "Đã bán " + sold : ""}</span>
            </div>
        </div>
    `;
}

function renderData(data) {
    let str = '';

    data.forEach(element => {
        const newCardString = createCard(element);
        str += newCardString;
    });

    container.innerHTML = str;
}

renderData(data);