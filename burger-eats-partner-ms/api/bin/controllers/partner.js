const _0x5e69e5 = _0xda5f;

function _0xb16c() {
    const _0x4fa305 = ['log', 'Parceria\x20Buger\x20Eats', 'name', 'end', 'Invalid\x20business', '5517344sHiuCj', 'body', 'email', 'length', 'SEND_EMAIL', 'params', 'boolean', 'json', '8053340yKQLoE', 'test', '-created_at', 'replace', '7xoJXmu', '1382838rDGKSH', 'stringify', 'Duplicate\x20company\x20name', 'findByIdAndUpdate', 'Supermercado', 'Restaurante', 'findOne', '624850ClZdYv', 'Required\x20fields\x20(name,\x20email,\x20whatsapp,\x20business)', '_id', 'status', 'Conveniência', 'Active\x20is\x20not\x20boolean', 'Invalid\x20email', '862332IKPkrH', '12832947mMolrA', '66974610fgZlWO', 'includes', '15XdQsTl', '8KqssxS', 'findOneAndDelete', 'Duplicate\x20email', 'save', 'findById', 'Invalid\x20whatsapp', '\x20adicionado\x20a\x20fila\x20de\x20eventos.', 'query'];
    _0xb16c = function () {
        return _0x4fa305;
    };
    return _0xb16c();
}

(function (_0x22c3c2, _0x561e4c) {
    const _0x4c15d4 = _0xda5f, _0x1415b0 = _0x22c3c2();
    while (!![]) {
        try {
            const _0x1d96bd = parseInt(_0x4c15d4(0x141)) / 0x1 + parseInt(_0x4c15d4(0x11b)) / 0x2 * (parseInt(_0x4c15d4(0x126)) / 0x3) + parseInt(_0x4c15d4(0x134)) / 0x4 + parseInt(_0x4c15d4(0x13c)) / 0x5 + -parseInt(_0x4c15d4(0x122)) / 0x6 * (-parseInt(_0x4c15d4(0x140)) / 0x7) + parseInt(_0x4c15d4(0x127)) / 0x8 * (parseInt(_0x4c15d4(0x123)) / 0x9) + -parseInt(_0x4c15d4(0x124)) / 0xa;
            if (_0x1d96bd === _0x561e4c) break; else _0x1415b0['push'](_0x1415b0['shift']());
        } catch (_0x44ddb8) {
            _0x1415b0['push'](_0x1415b0['shift']());
        }
    }
}(_0xb16c, 0xc50c7));

function _0xda5f(_0x57f5bd, _0x2c4ea4) {
    const _0xb16ce1 = _0xb16c();
    return _0xda5f = function (_0xda5f91, _0x4f779c) {
        _0xda5f91 = _0xda5f91 - 0x118;
        let _0x4c130a = _0xb16ce1[_0xda5f91];
        return _0x4c130a;
    }, _0xda5f(_0x57f5bd, _0x2c4ea4);
}

import _0x543ae5 from '../models/partner';
import {publishToQueue} from '../lib/mqservice';

const defaultQueue = _0x5e69e5(0x136), SEND_EMAIL = process['env'][_0x5e69e5(0x138)];
export default {
    'create': (_0x1c2f8b, _0xfe7e52) => {
        const _0x501bbd = _0x5e69e5, {
            name: _0x10fecb,
            email: _0x345006,
            whatsapp: _0x3ed656,
            business: _0x1364d7
        } = _0x1c2f8b[_0x501bbd(0x135)], _0x32100d = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (_0x345006 && !_0x32100d[_0x501bbd(0x13d)](_0x345006)) return _0xfe7e52['status'](0x190)[_0x501bbd(0x13b)]({'message': 'Invalid\x20email'});
        if (_0x3ed656) {
            const _0x28a61c = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
            var _0xbb99d = _0x3ed656[_0x501bbd(0x13f)](/\W+/g, '');
            if (_0x3ed656['length'] > 0x0) {
                if (!_0x28a61c['test'](_0xbb99d)) return _0xfe7e52[_0x501bbd(0x11e)](0x190)[_0x501bbd(0x13b)]({'message': _0x501bbd(0x12c)});
            }
        }
        if (_0x1364d7 && ![_0x501bbd(0x119), 'Supermercado', _0x501bbd(0x11f)][_0x501bbd(0x125)](_0x1364d7)) return _0xfe7e52[_0x501bbd(0x11e)](0x190)['json']({'message': _0x501bbd(0x133)});
        let _0x2e441e = new _0x543ae5({
            'name': _0x10fecb,
            'email': _0x345006,
            'whatsapp': _0x3ed656,
            'business': _0x1364d7
        });
        _0x2e441e[_0x501bbd(0x12a)]((_0x3f895a, _0x3ecd1c) => {
            const _0x4b5262 = _0x501bbd;
            try {
                if (!_0x3f895a) {
                    if (SEND_EMAIL === '1') {
                        let _0x19f133 = {
                            'html': '<p>Seu\x20cadastro\x20foi\x20confirmado!</p>Em\x20breve\x20enviaremos\x20mais\x20detalhes\x20sobre\x20a\x20nossa\x20parceria.</p>\x20<p>Abs,\x20<br/>Equipe\x20BugerEats</p>',
                            'email': _0x345006,
                            'subject': _0x4b5262(0x130)
                        };
                        publishToQueue(defaultQueue, JSON[_0x4b5262(0x142)](_0x19f133)), console[_0x4b5262(0x12f)]('Email\x20' + _0x3ecd1c['email'] + _0x4b5262(0x12d));
                    }
                    return _0xfe7e52[_0x4b5262(0x11e)](0xc9)[_0x4b5262(0x13b)]({'partner_id': _0x3ecd1c[_0x4b5262(0x11d)]});
                }
                if (_0x3f895a) {
                    const {name: _0x877d9e, code: _0x513f34, keyPattern: _0x5b0e01} = _0x3f895a;
                    if (_0x877d9e === 'ValidationError') return _0xfe7e52[_0x4b5262(0x11e)](0x190)[_0x4b5262(0x13b)]({'message': _0x4b5262(0x11c)});
                    if (_0x513f34 === 0x2af8) {
                        if (_0x5b0e01[_0x4b5262(0x131)]) return _0xfe7e52[_0x4b5262(0x11e)](0x199)[_0x4b5262(0x13b)]({'message': 'Duplicate\x20company\x20name'});
                        if (_0x5b0e01[_0x4b5262(0x136)]) return _0xfe7e52[_0x4b5262(0x11e)](0x199)[_0x4b5262(0x13b)]({'message': _0x4b5262(0x129)});
                    }
                }
            } catch (_0x15c605) {
                return _0xfe7e52[_0x4b5262(0x11e)](0x1f4)[_0x4b5262(0x13b)](_0x3f895a);
            }
        });
    }, 'list': (_0x459e00, _0x541c32) => {
        const _0x3bdc3e = _0x5e69e5;
        let _0x543c59 = {};
        _0x459e00[_0x3bdc3e(0x12e)][_0x3bdc3e(0x131)] && (_0x543c59['name'] = new RegExp(_0x459e00[_0x3bdc3e(0x12e)]['name'], 'i')), _0x459e00[_0x3bdc3e(0x12e)]['email'] && (_0x543c59[_0x3bdc3e(0x136)] = _0x459e00[_0x3bdc3e(0x12e)]['email']), _0x543ae5['find'](_0x543c59, {}, {'sort': _0x3bdc3e(0x13e)}, (_0x56af7e, _0xf2fa1a) => {
            const _0x4211bb = _0x3bdc3e;
            return _0x541c32[_0x4211bb(0x11e)](0xc8)[_0x4211bb(0x13b)](_0xf2fa1a);
        });
    }, 'get': (_0x2a9fd0, _0xee594f) => {
        const _0x36261b = _0x5e69e5, _0x297e3e = _0x2a9fd0[_0x36261b(0x139)]['id'];
        _0x543ae5[_0x36261b(0x12b)]({'_id': _0x297e3e}, {}, {'sort': _0x36261b(0x13e)}, (_0x80e7c8, _0x38921c) => {
            const _0x467657 = _0x36261b;
            return !_0x38921c ? _0xee594f[_0x467657(0x11e)](0x194)[_0x467657(0x132)]() : _0xee594f[_0x467657(0x11e)](0xc8)[_0x467657(0x13b)](_0x38921c);
        });
    }, 'remove': (_0x498391, _0x1b4a75) => {
        const _0x157488 = _0x5e69e5;
        _0x543ae5[_0x157488(0x128)]({'_id': _0x498391[_0x157488(0x139)]['id']}, (_0x594ce9, _0x1f2122) => {
            const _0x24c95a = _0x157488;
            return _0x1f2122 ? _0x1b4a75[_0x24c95a(0x11e)](0xcc)[_0x24c95a(0x132)]() : _0x1b4a75[_0x24c95a(0x11e)](0x194)['end']();
        });
    }, 'activate': (_0x90d3c4, _0x4b8681) => {
        const _0x332fcf = _0x5e69e5;
        _0x543ae5[_0x332fcf(0x144)]({'_id': _0x90d3c4[_0x332fcf(0x139)]['id']}, {'$set': {'active': !![]}}, (_0x3ddc6c, _0x164a04) => {
            const _0x4afe56 = _0x332fcf;
            if (_0x3ddc6c) return _0x4b8681[_0x4afe56(0x11e)](0x1f4)[_0x4afe56(0x13b)](_0x3ddc6c);
            return _0x164a04 ? _0x4b8681['status'](0xc8)['end']() : _0x4b8681[_0x4afe56(0x11e)](0x194)['end']();
        });
    }, 'inactivate': (_0x1b74e0, _0x323529) => {
        const _0xc2de5d = _0x5e69e5;
        _0x543ae5[_0xc2de5d(0x144)]({'_id': _0x1b74e0[_0xc2de5d(0x139)]['id']}, {'$set': {'active': ![]}}, (_0x31c0b4, _0x1a6d09) => {
            const _0x50e9db = _0xc2de5d;
            if (_0x31c0b4) return _0x323529[_0x50e9db(0x11e)](0x1f4)['json'](_0x31c0b4);
            return _0x1a6d09 ? _0x323529[_0x50e9db(0x11e)](0xc8)[_0x50e9db(0x132)]() : _0x323529[_0x50e9db(0x11e)](0x194)[_0x50e9db(0x132)]();
        });
    }, 'update': async (_0x2b1219, _0x385e70) => {
        const _0x3d43a1 = _0x5e69e5, {
            name: _0x19dda8,
            email: _0x2b2d2d,
            whatsapp: _0x1b2ab8,
            business: _0x3a835f,
            active: _0x2f3cf1
        } = _0x2b1219['body'], _0x1fad50 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (_0x2b2d2d && !_0x1fad50[_0x3d43a1(0x13d)](_0x2b2d2d)) return _0x385e70[_0x3d43a1(0x11e)](0x190)['json']({'message': _0x3d43a1(0x121)});
        if (_0x1b2ab8) {
            const _0x612c94 = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
            var _0x246e0d = _0x1b2ab8[_0x3d43a1(0x13f)](/\W+/g, '');
            if (_0x1b2ab8[_0x3d43a1(0x137)] > 0x0) {
                if (!_0x612c94['test'](_0x246e0d)) return _0x385e70[_0x3d43a1(0x11e)](0x190)[_0x3d43a1(0x13b)]({'message': _0x3d43a1(0x12c)});
            }
        }
        if (_0x3a835f && ![_0x3d43a1(0x119), _0x3d43a1(0x118), _0x3d43a1(0x11f)]['includes'](_0x3a835f)) return _0x385e70[_0x3d43a1(0x11e)](0x190)['json']({'message': _0x3d43a1(0x133)});
        console[_0x3d43a1(0x12f)](typeof _0x2f3cf1);
        if (_0x2f3cf1 && typeof _0x2f3cf1 !== _0x3d43a1(0x13a)) return _0x385e70[_0x3d43a1(0x11e)](0x190)[_0x3d43a1(0x13b)]({'message': _0x3d43a1(0x120)});
        const _0x26c4c7 = {
            'name': _0x19dda8,
            'email': _0x2b2d2d,
            'whatsapp': _0x1b2ab8,
            'business': _0x3a835f,
            'active': _0x2f3cf1
        }, _0x50d59b = await _0x543ae5[_0x3d43a1(0x11a)]({'_id': _0x2b1219['params']['id']});
        if (!_0x50d59b) return _0x385e70[_0x3d43a1(0x11e)](0x194)[_0x3d43a1(0x132)]();
        _0x543ae5['findByIdAndUpdate']({'_id': _0x2b1219[_0x3d43a1(0x139)]['id']}, {'$set': _0x26c4c7}, (_0x58eaa3, _0x1bb03b) => {
            const _0x497a84 = _0x3d43a1;
            if (_0x58eaa3) {
                const {code: _0x87fa86, keyPattern: _0x5397a1} = _0x58eaa3;
                if (_0x87fa86 === 0x2af8) {
                    if (_0x5397a1[_0x497a84(0x131)]) return _0x385e70['status'](0x199)[_0x497a84(0x13b)]({'message': _0x497a84(0x143)});
                    if (_0x5397a1['email']) return _0x385e70[_0x497a84(0x11e)](0x199)[_0x497a84(0x13b)]({'message': 'Duplicate\x20email'});
                }
            }
            return _0x1bb03b ? _0x385e70[_0x497a84(0x11e)](0xc8)[_0x497a84(0x132)]() : _0x385e70[_0x497a84(0x11e)](0x194)['end']();
        });
    }, 'removeHelp': (_0x365818, _0x495a25) => {
        const _0xba681a = _0x5e69e5;
        _0x543ae5[_0xba681a(0x128)]({'email': _0x365818['params']['email']}, (_0x4dd1cd, _0x4ea081) => {
            const _0x2fb556 = _0xba681a;
            return _0x495a25[_0x2fb556(0x11e)](0xcc)[_0x2fb556(0x132)]();
        });
    }
};