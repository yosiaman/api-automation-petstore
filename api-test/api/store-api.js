const supertest = require('supertest');
const env = require('dotenv').config();
const request = supertest(process.env.BASE_URL);


const placeOrder = (requestBody) => request.post(`/store/order`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(requestBody);

const getOrderByOrderId = (orderId) => request.get(`/store/order/${orderId}`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

const getInventorySummary = () => request.get(`/store/inventory`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

const deleteOrderByOrderId = (orderId) => request.delete(`/store/order/${orderId}`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');


module.exports = {
    getOrderByOrderId,
    getInventorySummary,
    placeOrder,
    deleteOrderByOrderId
}