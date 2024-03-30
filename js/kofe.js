class Order {
    constructor(table, dishes, status) {
        this.table = table;
        this.dishes = dishes;
        this.status = status;
    }
}

class Table {
    constructor(number) {
        this.number = number;
        this.orders = [];
    }

    addOrder(order) {
        this.orders.push(order);
    }

    getTotalAmount() {
        let total = 0;
        this.orders.forEach(order => {
            order.dishes.forEach(dish => {
                total += dish.price;
            });
        });
        return total;
    }

    changeOrderStatus(orderIndex, newStatus) {
        if (orderIndex >= 0 && orderIndex < this.orders.length) {
            this.orders[orderIndex].status = newStatus;
        } else {
            console.log("Invalid order index");
        }
    }

    cancelOrder(orderIndex) {
        if (orderIndex >= 0 && orderIndex < this.orders.length) {
            this.orders.splice(orderIndex, 1);
        } else {
            console.log("Invalid order index");
        }
    }
}

class System {
    constructor() {
        this.tables = [];
    }

    addTable(tableNumber) {
        this.tables.push(new Table(tableNumber));
    }

    addOrderToTable(tableNumber, order) {
        const table = this.tables.find(t => t.number === tableNumber);
        if (table) {
            table.addOrder(order);
        } else {
            console.log("Table not found");
        }
    }

    getTotalAmountForTable(tableNumber) {
        const table = this.tables.find(t => t.number === tableNumber);
        if (table) {
            return table.getTotalAmount();
        } else {
            console.log("Table not found");
            return 0;
        }
    }

    changeOrderStatusForTable(tableNumber, orderIndex, newStatus) {
        const table = this.tables.find(t => t.number === tableNumber);
        if (table) {
            table.changeOrderStatus(orderIndex, newStatus);
        } else {
            console.log("Table not found");
        }
    }

    cancelOrderForTable(tableNumber, orderIndex) {
        const table = this.tables.find(t => t.number === tableNumber);
        if (table) {
            table.cancelOrder(orderIndex);
        } else {
            console.log("Table not found");
        }
    }
}

let cafeSystem = new System();

cafeSystem.addTable(1);
cafeSystem.addTable(2);

let order1 = new Order(1, [
    { name: "Кава", price: 30 },
    { name: "Чізкейк", price: 50 }
], "в обробці");

let order2 = new Order(2, [
    { name: "Лате", price: 40 },
    { name: "Тірамісу", price: 60 }
], "готується");

cafeSystem.addOrderToTable(1, order1);
cafeSystem.addOrderToTable(2, order2);

console.log("Total amount for table 1:", cafeSystem.getTotalAmountForTable(1));
console.log("Total amount for table 2:", cafeSystem.getTotalAmountForTable(2));

cafeSystem.changeOrderStatusForTable(1, 0, "готово");
console.log("Status of order 1 for table 1:", cafeSystem.tables[0].orders[0].status);

cafeSystem.cancelOrderForTable(2, 0);
console.log("Orders for table 2 after cancellation:", cafeSystem.tables[1].orders.length);