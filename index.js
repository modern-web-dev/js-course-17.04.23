class OrderService {
    findById(id) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (id < 0) {
                    reject(new Error('Hahah'));
                } else {
                    resolve({
                        id, businessKey: 'ABC123'
                    });
                }
            }, 2000);
        });
    }
}

const orders = new OrderService();
doIt();

console.log('End');

async function doIt() {
    try {
        const order = await orders.findById(123);
        console.log(order);
    } catch (e) {
        console.log('There is an error....');
        throw e;
    }
}


