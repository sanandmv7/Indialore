const sideMenu = document.querySelector("aside");
const closeBtn = document.querySelector("#close-btn");
const showBtn = document.querySelector("#menu-btn");

showBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})

// Inserting orders in the recent orders table.
Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = ` <td>${order.productName}</td>
                        <td>${order.productID}</td>
                        <td>${order.storeID}</td>
                        <td>${order.paymentStatus}</td>
                        <td class= "${order.status === 'Delivered' ? 'success' : order.status === 'Pending' ? 'warning' : 'danger'}">${order.status}</td>
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})

const btn1 = document.querySelector("")



