const _0x1f8b6a = _0x5e7a;
(function (_0x1e6556, _0xa90e6a) {
    const _0x20b147 = _0x5e7a, _0x4e211d = _0x1e6556();
    while (!![]) {
        try {
            const _0x7fb868 = parseInt(_0x20b147(0x1b5)) / 0x1 + -parseInt(_0x20b147(0x1b9)) / 0x2 + -parseInt(_0x20b147(0x1ba)) / 0x3 + -parseInt(_0x20b147(0x1c2)) / 0x4 + -parseInt(_0x20b147(0x1bc)) / 0x5 * (parseInt(_0x20b147(0x1bb)) / 0x6) + -parseInt(_0x20b147(0x1ac)) / 0x7 + -parseInt(_0x20b147(0x1ae)) / 0x8 * (-parseInt(_0x20b147(0x1b0)) / 0x9);
            if (_0x7fb868 === _0xa90e6a) break; else _0x4e211d['push'](_0x4e211d['shift']());
        } catch (_0x3d4d77) {
            _0x4e211d['push'](_0x4e211d['shift']());
        }
    }
}(_0x30bd, 0xeb063));
import _0x3a1fbd from 'amqplib/callback_api';

function _0x5e7a(_0x2b55fa, _0x33beff) {
    const _0x30bd6d = _0x30bd();
    return _0x5e7a = function (_0x5e7aab, _0x3d5ba1) {
        _0x5e7aab = _0x5e7aab - 0x1ab;
        let _0x197bf9 = _0x30bd6d[_0x5e7aab];
        return _0x197bf9;
    }, _0x5e7a(_0x2b55fa, _0x33beff);
}

import 'dotenv/config';

const SEND_EMAIL = process['env'][_0x1f8b6a(0x1b1)], RECONNECT_TIMEOUT = process[_0x1f8b6a(0x1ab)][_0x1f8b6a(0x1af)];
let ch = process[_0x1f8b6a(0x1ab)][_0x1f8b6a(0x1bd)];

function _0x30bd() {
    const _0x5783c9 = ['connect', 'Closing\x20rabbitmq\x20channel', '139702ozmmNN', '4036560oxrXIS', '246pcpWPm', '146660XTdIty', 'QUEUE_NAME', 'undefined', 'exit', 'createChannel', 'Reconnection\x20timeout\x20=>\x20', '599592biFBZt', 'env', '9942772JeukVI', 'close', '8WZSzIG', 'RECONNECT_TIMEOUT', '42717573qxdGaq', 'SEND_EMAIL', '?heartbeat=', 'sendToQueue', 'Queue\x20name\x20=>\x20', '404539snGxHT', 'log'];
    _0x30bd = function () {
        return _0x5783c9;
    };
    return _0x30bd();
}

SEND_EMAIL === '1' && _0x3a1fbd[_0x1f8b6a(0x1b7)](process[_0x1f8b6a(0x1ab)]['AMQP_URL'] + _0x1f8b6a(0x1b2) + RECONNECT_TIMEOUT, function (_0x314519, _0x43e0e1) {
    const _0x3defda = _0x1f8b6a;
    _0x43e0e1[_0x3defda(0x1c0)](function (_0x4943c7, _0x528b18) {
        ch = _0x528b18;
    }), console[_0x3defda(0x1b6)](_0x3defda(0x1b4) + ch), console[_0x3defda(0x1b6)](_0x3defda(0x1c1) + RECONNECT_TIMEOUT), console[_0x3defda(0x1b6)]('Connecting\x20to\x20AMQP');
});
export const publishToQueue = async (_0x42b688, _0x100a58) => {
    const _0x2fbd6e = _0x1f8b6a;
    await ch['assertQueue'](_0x42b688, {'durable': !![]}), await ch[_0x2fbd6e(0x1b3)](_0x42b688, Buffer['from'](_0x100a58));
};
process['on'](_0x1f8b6a(0x1bf), _0x5c377a => {
    const _0x3db7aa = _0x1f8b6a;
    typeof cn != _0x3db7aa(0x1be) && (ch[_0x3db7aa(0x1ad)](), console[_0x3db7aa(0x1b6)](_0x3db7aa(0x1b8)));
});