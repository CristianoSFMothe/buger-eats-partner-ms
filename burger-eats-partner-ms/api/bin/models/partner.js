const _0x49c1bf = _0x3cd6;
(function (_0x5ae3bf, _0x1d42cb) {
    const _0x88f473 = _0x3cd6, _0x179927 = _0x5ae3bf();
    while (!![]) {
        try {
            const _0x678fd = parseInt(_0x88f473(0x176)) / 0x1 * (parseInt(_0x88f473(0x17b)) / 0x2) + parseInt(_0x88f473(0x179)) / 0x3 + -parseInt(_0x88f473(0x17c)) / 0x4 + -parseInt(_0x88f473(0x17e)) / 0x5 + -parseInt(_0x88f473(0x182)) / 0x6 + parseInt(_0x88f473(0x181)) / 0x7 * (parseInt(_0x88f473(0x17f)) / 0x8) + parseInt(_0x88f473(0x17a)) / 0x9 * (parseInt(_0x88f473(0x17d)) / 0xa);
            if (_0x678fd === _0x1d42cb) break; else _0x179927['push'](_0x179927['shift']());
        } catch (_0x1c5730) {
            _0x179927['push'](_0x179927['shift']());
        }
    }
}(_0x338d, 0xcc9b3));
import _0x1e81ce from 'mongoose';

function _0x3cd6(_0x1585d1, _0xa28bdf) {
    const _0x338d9a = _0x338d();
    return _0x3cd6 = function (_0x3cd6a8, _0x35f4c1) {
        _0x3cd6a8 = _0x3cd6a8 - 0x176;
        let _0x2dcc8c = _0x338d9a[_0x3cd6a8];
        return _0x2dcc8c;
    }, _0x3cd6(_0x1585d1, _0xa28bdf);
}

let Partner = new _0x1e81ce['Schema']({
    'name': {'type': String, 'required': !![], 'unique': !![]},
    'email': {'type': String, 'required': !![], 'unique': !![]},
    'whatsapp': {'type': String, 'required': !![]},
    'business': {'type': String, 'required': !![]},
    'active': {'type': Boolean, 'default': ![]}
}, {'timestamps': {'createdAt': 'created_at', 'updatedAt': 'updated_at'}, 'versionKey': ![]});

function _0x338d() {
    const _0x17b5fc = ['model', '4282668YObMkT', '9SzzDuu', '1147408cwKMuG', '4063540BWyqPn', '16840310tmdtgL', '7412280ZZRQio', '265000vwnkBB', 'partner', '147TMruoF', '6267048tXraOZ', '1DLeiju', 'Partner'];
    _0x338d = function () {
        return _0x17b5fc;
    };
    return _0x338d();
}

export default _0x1e81ce[_0x49c1bf(0x178)](_0x49c1bf(0x177), Partner, _0x49c1bf(0x180));