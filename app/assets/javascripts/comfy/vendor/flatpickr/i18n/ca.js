/* flatpickr v4.0.6, @license MIT */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.ca = {})));
}(this, (function (exports) { 'use strict';

var fp = typeof window !== "undefined" && window.flatpickr !== undefined
    ? window.flatpickr
    : {
        l10ns: {},
    };
var Catalan = {
    weekdays: {
        shorthand: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
        longhand: [
            "Diumenge",
            "Dilluns",
            "Dimarts",
            "Dimecres",
            "Dijous",
            "Divendres",
            "Dissabte",
        ],
    },
    months: {
        shorthand: [
            "Gen",
            "Febr",
            "Març",
            "Abr",
            "Maig",
            "Juny",
            "Jul",
            "Ag",
            "Set",
            "Oct",
            "Nov",
            "Des",
        ],
        longhand: [
            "Gener",
            "Febrer",
            "Març",
            "Abril",
            "Maig",
            "Juny",
            "Juliol",
            "Agost",
            "Setembre",
            "Octubre",
            "Novembre",
            "Desembre",
        ],
    },
    ordinal: function (nth) {
        var s = nth % 100;
        if (s > 3 && s < 21)
            return "è";
        switch (s % 10) {
            case 1:
                return "r";
            case 2:
                return "n";
            case 3:
                return "r";
            case 4:
                return "t";
            default:
                return "è";
        }
    },
    firstDayOfWeek: 1,
};
fp.l10ns.ca = Catalan;
var ca = fp.l10ns;

exports.Catalan = Catalan;
exports['default'] = ca;

Object.defineProperty(exports, '__esModule', { value: true });

})));
