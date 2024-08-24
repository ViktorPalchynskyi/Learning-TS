// const stuff: [string, number] = ['string', 24];

const color: [number, number, number] = [24, 55, 223];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'OK'];

const responses: HTTPResponse[] = [
    [404, 'Not Found'],
    goodRes,
    [301, 'Redirect'],
];

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
    return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.DELIVERED);

enum ArrowKeys {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right',
}

ArrowKeys.LEFT